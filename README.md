#  EducaCoin 📚

Sistema de reconhecimento acadêmico por meio da distribuição de moedas virtuais, que podem ser trocadas por benefícios e recompensas. Alunos, professores e empresas parceiras interagem por meio de uma plataforma que promove o bom desempenho e o engajamento.

---

##  Funcionalidades

###  Alunos
- Cadastro com nome, email, CPF, RG, endereço, instituição de ensino e curso.
- Seleção de instituições pré-cadastradas no sistema.
- Notificação por email ao receber moedas.
- Consulta de extrato de moedas (saldo e histórico de transações).
- Troca de moedas por vantagens (ex: descontos em restaurantes, mensalidade, compra de materiais).
- Recebimento de email com cupom e código de verificação ao resgatar vantagem.

###  Professores
- Pré-cadastrados pela instituição (com nome, CPF e departamento).
- Associados diretamente à instituição de ensino.
- Recebem 1.000 moedas por semestre para distribuir entre os alunos.
- Saldo acumulativo a cada semestre.
- Envio de moedas a alunos com mensagem obrigatória de reconhecimento.
- Consulta de extrato: saldo e histórico de envios.

###  Empresas Parceiras
- Cadastro com nome, email, senha, e lista de vantagens ofertadas.
- Cadastro de vantagens com descrição, foto e custo em moedas.
- Recebimento de email com código de conferência sempre que um aluno resgatar uma vantagem.

---

##  Autenticação

- Todos os usuários (alunos, professores e empresas) devem possuir login e senha.
- A autenticação é obrigatória para acessar as funcionalidades do sistema.

---

##  Notificações por Email

- Aluno recebe email ao ganhar moedas.
- Aluno recebe email com cupom e código ao resgatar uma vantagem.
- Empresa recebe email de notificação da troca com o mesmo código de conferência.

---

##  Exemplo de Vantagens

- Desconto em restaurantes universitários 🍽️
- Desconto na mensalidade 💰
- Compra de materiais específicos 📚
- Benefícios oferecidos por empresas parceiras 🏢

---

## Histórias de usuário 

| Nº | Tipo de Usuário     | História de Usuário                                                                                   |
|----|----------------------|--------------------------------------------------------------------------------------------------------|
| 1  | Aluno                | Como **aluno**, quero **me cadastrar informando meus dados pessoais e acadêmicos**, para que eu possa **participar do sistema EduCoin**. |
| 2  | Aluno                | Como **aluno**, quero **receber moedas de professores como forma de reconhecimento**, para que eu possa **me sentir valorizado e acompanhar meu desempenho**. |
| 3  | Aluno                | Como **aluno**, quero **ver meu saldo e o histórico das moedas recebidas**, para que eu possa **acompanhar minhas conquistas e planejar trocas futuras**. |
| 4  | Aluno                | Como **aluno**, quero **trocar minhas moedas por vantagens oferecidas no sistema**, para que eu possa **utilizar os benefícios como recompensa pelo meu esforço**. |
| 5  | Aluno                | Como **aluno**, quero **receber um email com o cupom e código ao resgatar uma vantagem**, para que eu possa **utilizá-lo de forma segura**. |
| 6  | Professor            | Como **professor**, quero **consultar meu saldo de moedas e o histórico de envios**, para que eu possa **acompanhar como estou distribuindo reconhecimentos**. |
| 7  | Professor            | Como **professor**, quero **enviar moedas para alunos junto de uma mensagem personalizada**, para que eu possa **reconhecer boas atitudes de forma motivadora**. |
| 8  | Professor            | Como **professor**, quero **acumular moedas de um semestre para outro**, para que eu possa **ter mais flexibilidade na distribuição**. |
| 9  | Empresa Parceira     | Como **empresa parceira**, quero **me cadastrar e oferecer vantagens com descrição, imagem e custo**, para que eu possa **atrair alunos e contribuir com o sistema**. |
| 10 | Empresa Parceira     | Como **empresa parceira**, quero **receber um email com os detalhes e código de troca**, para que eu possa **validar o resgate da vantagem com segurança**. |

---
## Histórias de Usuário - LAB 5 
| ID   | Como...         | Eu quero...                                                                 | Para que...                                                                                      |
|------|------------------|-----------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| US01 | Aluno           | me cadastrar informando meus dados e selecionando minha instituição         | eu possa participar do sistema de mérito                                                         |
| US02 | Aluno           | ser notificado por email ao receber moedas                                   | eu saiba que fui reconhecido e possa acompanhar meu desempenho                                   |
| US03 | Aluno           | consultar meu extrato de moedas                                              | eu possa visualizar meu saldo e as moedas que recebi ou troquei                                  |
| US04 | Aluno           | trocar moedas por vantagens cadastradas                                      | eu possa utilizar meus méritos como recompensa                                                   |
| US05 | Aluno           | receber um email com código e cupom ao trocar uma vantagem                   | eu possa utilizá-la presencialmente de forma segura e validada                                   |
| US06 | Professor       | visualizar meu saldo de moedas                                               | eu saiba quantas moedas ainda posso distribuir                                                   |
| US07 | Professor       | enviar moedas para um aluno com uma mensagem de reconhecimento               | eu possa valorizar seu desempenho e comportamento                                                |
| US08 | Professor       | consultar o extrato das moedas enviadas                                      | eu possa acompanhar as transações que realizei com meus alunos                                   |
| US09 | Professor       | acumular moedas não utilizadas entre os semestres                            | eu não perca meu saldo e possa continuar recompensando meus alunos no futuro                     |
| US10 | Sistema         | notificar o aluno por email quando ele recebe uma moeda                      | o aluno fique ciente do reconhecimento recebido                                                  |
| US11 | Empresa Parceira| se cadastrar no sistema                                                      | eu possa oferecer vantagens em troca das moedas dos alunos                                       |
| US12 | Empresa Parceira| cadastrar vantagens com descrição, foto e custo em moedas                    | os alunos saibam o que estou oferecendo e possam trocar moedas por isso                          |
| US13 | Empresa Parceira| receber um email com o código da troca ao aluno resgatar uma vantagem        | eu possa validar e liberar o benefício de forma segura                                           |
| US14 | Sistema         | gerar um código único para cada troca de vantagem                            | facilite a conferência tanto para aluno quanto para a empresa                                    |
| US15 | Todos os Perfis | realizar login com senha e autenticação                                     | eu possa acessar o sistema de forma segura e personalizada                                       |

---
## Diagrama de caso de uso

<img src="Diagramas/diagram-user-case.jpg" alt="Diagrama de caso de uso" width="700px">

## Diagrama de classes

<img src="Diagramas/UML.png" alt="Diagrama de classe" width="700px">

## Diagrama de Componentes

<img src="Diagramas/DC.png" alt="Diagrama de componentes" width="700px">

## MER

<img src="Diagramas/EduCoin_MER.png" alt="MER" width="700px">

## Modelo ER

<img src="Diagramas/EduCoin_ModeloER.png" alt="ModeloER" width="700px">


##  Requisitos Técnicos 

- Backend: Java / JavaScript / SpringBoot
- Banco de dados: PostgreSQL 
- Frontend: HTML + CSS / Bootstrap
- Autenticação: JWT 
- Integração de Email: 

---

##  Colaboradores

- Lucas Maia Rocha – Desenvolvedor responsável  
- Davi Érico dos Santos – Desenvolvedor responsável  

---

