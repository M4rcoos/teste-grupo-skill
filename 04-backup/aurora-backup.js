import {
    RDSClient,
    CreateDBClusterSnapshotCommand,
    DescribeDBClusterSnapshotsCommand,
    DeleteDBClusterSnapshotCommand,
    RDSExportTaskCommand,
    RDSExportTaskClient
  } from "@aws-sdk/client-rds";
  
  
  const REGION = "us-east-1";
  const CLUSTER_ID = "aurora-orders-cluster";
  const SNAPSHOT_PREFIX = "orders-backup";
  const RETENTION_DAYS = 30;
  
  const S3_BUCKET = "aurora-backups-orders";
  const IAM_ROLE_ARN = "arn:aws:iam::123456789012:role/AuroraExportRole";
  const KMS_KEY_ID = "arn:aws:kms:us-east-1:123456789012:key/xxxx";
  
  const rds = new RDSClient({ region: REGION });
  
  async function createSnapshot() {
    const snapshotId = `${SNAPSHOT_PREFIX}-${Date.now()}`;
  
    await rds.send(
      new CreateDBClusterSnapshotCommand({
        DBClusterIdentifier: CLUSTER_ID,
        DBClusterSnapshotIdentifier: snapshotId
      })
    );
  
    console.log(`Snapshot criado: ${snapshotId}`);
    return snapshotId;
  }
  
  async function exportSnapshot(snapshotId) {
    const exportClient = new RDSExportTaskClient({ region: REGION });
  
    await exportClient.send(
      new RDSExportTaskCommand({
        ExportTaskIdentifier: `export-${snapshotId}`,
        SourceArn: `arn:aws:rds:${REGION}:123456789012:cluster-snapshot:${snapshotId}`,
        S3BucketName: S3_BUCKET,
        IamRoleArn: IAM_ROLE_ARN,
        KmsKeyId: KMS_KEY_ID
      })
    );
  
    console.log(`Snapshot exportado para S3`);
  }
  
  async function cleanupOldSnapshots() {
    const snapshots = await rds.send(
      new DescribeDBClusterSnapshotsCommand({
        DBClusterIdentifier: CLUSTER_ID,
        SnapshotType: "manual"
      })
    );
  
    const now = Date.now();
    const retentionMs = RETENTION_DAYS * 24 * 60 * 60 * 1000;
  
    for (const snapshot of snapshots.DBClusterSnapshots || []) {
      const createdAt = new Date(snapshot.SnapshotCreateTime).getTime();
  
      if (now - createdAt > retentionMs) {
        await rds.send(
          new DeleteDBClusterSnapshotCommand({
            DBClusterSnapshotIdentifier: snapshot.DBClusterSnapshotIdentifier
          })
        );
  
        console.log(`Snapshot removido: ${snapshot.DBClusterSnapshotIdentifier}`);
      }
    }
  }
  
  async function run() {
    const snapshotId = await createSnapshot();
    await exportSnapshot(snapshotId);
    await cleanupOldSnapshots();
  }
  
  run().catch(console.error);
  