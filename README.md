# NextBlog

Projeto de aprendizado com **Next.js (App Router)**, combinando frontend
e backend em uma aplicacao de blog moderna.

## Sobre

Este projeto foi construido para praticar fluxo full-stack com foco em:
autenticacao, rotas protegidas, CRUD de conteudo, busca e uso de cache.

## Stack

- Next.js 16 + React 19 + TypeScript
- Convex (database, queries, mutations e storage)
- Better Auth
- Tailwind CSS + shadcn/ui
- React Hook Form + Zod

## Features

- Login e cadastro com email/senha
- Rotas restritas para usuarios autenticados
- Criacao e listagem de posts com upload de imagem
- Pagina de detalhe com comentarios
- Busca de posts por texto (search)
- Presenca em tempo real no post
- Uso de cache para melhorar desempenho de leitura
- Suporte a tema claro/escuro

## Setup rapido

1. Instale dependencias:

```bash
npm install
```

2. Configure o arquivo `.env.local` com as variaveis do Convex:

```env
CONVEX_DEPLOYMENT=dev:your-deployment
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
NEXT_PUBLIC_CONVEX_SITE_URL=https://your-deployment.convex.site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

3. Sincronize o backend:

```bash
npx convex dev
```

4. Rode a aplicacao:

```bash
npm run dev
```

Acesse `http://localhost:3000`.
