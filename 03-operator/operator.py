from kubernetes import client, config, watch

config.load_kube_config()

v1 = client.BatchV1Api()
crd = client.CustomObjectsApi()

GROUP = "payments.com"
VERSION = "v1"
PLURAL = "paymentjobs"
NAMESPACE = "default"

watcher = watch.Watch()

for event in watcher.stream(
    crd.list_namespaced_custom_object,
    GROUP,
    VERSION,
    NAMESPACE,
    PLURAL
):
    payment_job = event["object"]
    name = payment_job["metadata"]["name"]

    job = client.V1Job(
        metadata=client.V1ObjectMeta(name=f"worker-{name}"),
        spec=client.V1JobSpec(
            template=client.V1PodTemplateSpec(
                spec=client.V1PodSpec(
                    restart_policy="Never",
                    containers=[
                        client.V1Container(
                            name="worker",
                            image="payment-worker:latest",
                            env=[
                                client.V1EnvVar(
                                    name="RABBITMQ_QUEUE",
                                    value=payment_job["spec"]["queueName"]
                                )
                            ]
                        )
                    ]
                )
            )
        )
    )

    v1.create_namespaced_job(namespace=NAMESPACE, body=job)
