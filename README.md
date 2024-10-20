# Text to Speech

### Aplicação web que cadastra comentários e os transforma em áudio através da API Watson Text to Speech
## Requisitos:
- Node.js.
> 
- MySQL.
> 
## Instalando Pacotes
- Navegue até a pasta `server` e instale as dependências com `npm install`
> 
## API IBM Watson Text to Speech
- É necessário ter as credenciais de uso gratuito da API Text to Speech da IBM
>
- Para mais informações sobre como configurar e usar a API Watson Text to Speech, consulte a [documentação oficial da IBM](https://cloud.ibm.com/catalog/services/speech-to-text).
>
## Variaveis de ambiente 
- Crie o arquivo .env na pasta `config` seguindo os exemplos do arquivo `.env.example`
>
- Preencha com as credenciais da sua API e banco de dados
> 
## Configurando banco de dados
- Ainda na pasta `server`, executar:
> 
> `npx sequelize db:create`
> 
> `npx sequelize db:migrate`
> 
## Iniciando projeto
> `npm start` ou `npm run dev`
