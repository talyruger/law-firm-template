# Successful Vercel Deployment Guide

## Static Deployment Method (Recommended)

We encountered dependency conflicts when trying to deploy using the standard Vercel deployment method. Instead, we successfully deployed using a static build approach:

### Step 1: Build the site locally

```bash
# Install dependencies with legacy peer deps flag
npm install --legacy-peer-deps

# Build the site
npm run build
```

### Step 2: Create a Vercel configuration for the static build

Create a file named `vercel-static.json` with the following content:

```json
{
  "version": 2,
  "name": "tickle-law-static",
  "builds": [
    {
      "src": "build/**",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    { "src": "/static/(.*)", "dest": "/build/static/$1" },
    { "src": "/(.+\\.\\w+)$", "dest": "/build/$1" },
    { "src": "/(.*)", "dest": "/build/index.html" }
  ]
}
```

### Step 3: Deploy the static build

```bash
# Copy the configuration to the build directory
cp vercel-static.json build/vercel.json

# Navigate to the build directory
cd build

# Deploy to Vercel
vercel --confirm
```

### Successful Deployment

The site is now successfully deployed and available at:
- [https://tickle-law-static-ax68sxxuu-c-ts-projects-63250766.vercel.app](https://tickle-law-static-ax68sxxuu-c-ts-projects-63250766.vercel.app)

## Benefits of this approach

1. **Avoids dependency conflicts** - By building locally, we work around any dependency issues that might occur on Vercel's build server
2. **Faster deployments** - Vercel only needs to deploy static files, not build the application
3. **Reliable** - The application is built in your controlled environment where it's known to work

## Setting up custom domain

To set up a custom domain:

1. Go to the [Vercel dashboard](https://vercel.com)
2. Select your project (tickle-law-static)
3. Go to "Settings" > "Domains"
4. Add your custom domain and follow the DNS verification steps

## For future updates

When you update your website:

1. Make your changes to the code
2. Run `npm run build` locally
3. Deploy the updated build folder using the same method:
   ```bash
   cp vercel-static.json build/vercel.json
   cd build
   vercel --prod
   ``` 