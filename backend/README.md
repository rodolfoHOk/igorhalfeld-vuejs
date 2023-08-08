# Feedbacker Backend

## Technologies

- Javascript
- Node.js
- Koa.js
- JWT
- Docker

## Commands

```
# Build backend in Docker image
npm run build

# Run image in Docker container
npm run container

# backend is running in port 3000
```

## Deploy Vercel

- Install vercel cli: npm i -g vercel
- Login vercel: vercel login
- Deploy in project folder: vercel --prod
- Vercel site: https://vercel.com/dashboard
- Click in project: project-name/settings/environment-variables
- Add environment variable: JWT_SECRET
