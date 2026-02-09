## ⚙️ Kubernetes Operator (PaymentJob)

Foi implementado um **Operator simplificado**, em Python, que observa um recurso customizado chamado `PaymentJob`.

Ao detectar a criação desse recurso, o Operator cria automaticamente um **Job Kubernetes**, responsável por consumir mensagens do RabbitMQ e persistir dados no PostgreSQL.

## 📝 Observação Importante

Não possuo experiência prévia com **Kubernetes Operators** em ambiente profissional.

Esta implementação foi desenvolvida **durante o teste**, com base a consultas onlines e estudos tecnicos, com o objetivo de demonstrar entendimento do conceito e capacidade de aprendizado.


## 📌 Considerações Finais

O código apresentado é intencionalmente simples e focado no conceito.  
Pontos como tratamento de erros e escalabilidade não foram aprofundados!

OBS: Peço desculpas pela entrega simples. Porem eu tenho muita vontade e interesse de crescer profissionalmente com o GRUPO SKILLS!
Acredito que preciso de uma oportunidade pra por meus conhecimentos e estudos em pratica e assim melhorar e crescer a cada dia mais.

Estou aberto a discutir decisões técnicas e possíveis evoluções durante a avaliação.

##  Entendimento 
Neste teste, tive meu primeiro contato prático com Kubernetes Operators, entendendo como eles monitoram recursos customizados (CRDs) no cluster e automatizam a criação de Jobs conforme o estado definido.
