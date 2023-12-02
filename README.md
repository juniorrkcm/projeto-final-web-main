## Leilão Legal
Este repositório contém os arquivos para um sistema de leilão online.

### Início Rápido
Este projeto utiliza Next.js e foi inicializado com create-next-app.

Para começar, execute o servidor de desenvolvimento:

```bash
npm run dev
```
Abra http://localhost:3000 no seu navegador para ver o resultado.

Você pode começar a editar a página modificando app/page.tsx. A página é atualizada automaticamente conforme você edita o arquivo.

Este projeto utiliza next/font para otimizar e carregar automaticamente a fonte Inter, uma fonte personalizada do Google.

### Configuração do Banco de Dados

Para que o projeto funcione corretamente, é necessário configurar um arquivo `.env` na raiz do projeto com as informações do banco de dados. Siga as instruções abaixo para configurar o arquivo `.env`:

1. Crie um arquivo chamado `.env` na raiz do seu projeto.

2. Abra o arquivo `.env` em um editor de texto e adicione a seguinte linha, substituindo as informações pelo seu próprio URL do banco de dados:

```env
DATABASE_URL="postgresql://seu_usuario:senha@seu_host:5432/seu_banco_de_dados"
```

### Saiba Mais

Para aprender mais sobre o Next.js, consulte os seguintes recursos:

Documentação do Next.js - aprenda sobre os recursos e a API do Next.js.
Aprenda Next.js - um tutorial interativo do Next.js.
Você também pode conferir o repositório do Next.js no GitHub - seus comentários e contribuições são bem-vindos!

Implantação no Vercel
A maneira mais fácil de implantar seu aplicativo Next.js é usar a Plataforma Vercel dos criadores do Next.js.

Confira nossa documentação de implantação do Next.js para mais detalhes.

## Itens Desenvolvidos
 Login ☑
 
 Cadastro de Usuários ☑
 
 Cadastro de Produtos ☑
 
 Tela para Adicionar Lances à Conta ☑
 
 Bônus Inicial: 10 Lances para Novos Usuários ☑

 ## Itens Pendentes
 Implementação completa do componente de "PRODUTO/LANCE" ❌
 
 Realização de lances de R$ 0,01 em leilões ativos ❌
 
 Emissões e recebimentos de mensagens usando Socket.io ❌
 
 Atualização do valor do produto para todos os usuários na tela principal ❌
