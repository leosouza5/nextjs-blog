# nextjs-blog

## First-time setup (new machine)

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` (or copy from `.env.example`) and fill:
```env
CONVEX_DEPLOYMENT=dev:your-deployment
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
NEXT_PUBLIC_CONVEX_SITE_URL=https://your-deployment.convex.site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
SITE_URL=http://localhost:3000
BETTER_AUTH_SECRET=your-long-random-secret
```

3. Generate a secret for Better Auth:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

4. Reconnect Convex and regenerate generated files:
```bash
npx convex dev
```

This will restore `convex/_generated/*` and sync environment values for the selected deployment.

## Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.
