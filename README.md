# Sports APP

Descrição breve da aplicação: Esta é uma aplicação web construída com [Next.js](https://nextjs.org/), projetada para fornecer uma experiência de usuário interativa e eficiente. Utiliza tecnologias modernas para garantir desempenho, segurança e escalabilidade.

## Recursos

- **Otimização de Fonte**: Uso de [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para otimização automática de fontes.
- **Deploy Fácil**: Configuração pronta para deploy na plataforma [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
- **Estilização Moderna**: Utilização de [`Tailwind CSS`](https://tailwindcss.com/) para estilização moderna e eficiente.
- **SPA**: Aplicação de página única (SPA) para melhor experiência do usuário.

## Pré-requisitos

Antes de iniciar, certifique-se de ter o [Node.js](https://nodejs.org/en/) instalado em sua máquina. Este projeto foi desenvolvido com Node.js versão 20.

## Instalação

Para configurar o ambiente de desenvolvimento localmente, siga estes passos:

1. Clone o repositório:

```bash
git clone https://github.com/YuriPiresG/sports-app.git
cd sports-app
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

3. Configure o ENV:

- Mude o "Sua conexão com a API" para a sua conexão com a API(exemplo: http://localhost:8080/)
  ```bash
  echo API_CONNECTION="Sua conexão com a API" > .env.local
  ```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```
# Telas
- **Esportes**: Página que exibe todos os esportes disponíveis.
![Home](/public/home.png "Home")

- **Criar Esporte**: Componente para criar um novo esporte.
![Create](/public/create.png "Create")

- **Editar Esporte**: Componente para editar um esporte existente.
![Edit](/public/update.png "Edit")

- **Detalhes do Esporte**: Página que exibe detalhes de um esporte específico.
![Details](/public/details.png "Details")

- **Excluir Esporte**: Componente para excluir um esporte existente.
![Delete](/public/delete.png "Delete")