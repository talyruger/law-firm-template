# Tickle Law Website Deployment Information

This file provides information about the current deployment setup for the Tickle Law Office website.

## Key Files for Deployment

- `vercel.json` - Configuration file for static deployment to Vercel
- `VERCEL_STATIC_DEPLOYMENT.md` - Detailed documentation on the deployment method
- `README.md` - General project information including deployment instructions
- `.npmrc` - Contains npm configuration with legacy-peer-deps settings
- `package.json` - Contains project dependencies and scripts
- `build/` - Directory containing the built static website files for deployment

## Current Deployment Method

The website is deployed as a static site to Vercel using the following approach:

1. Build locally with `npm run build`
2. Use the configured `vercel.json` for static deployment settings
3. Deploy with `vercel --prod`

## Current Deployment URLs

- Preview: https://tickle-1e5k9gh0a-c-ts-projects-63250766.vercel.app
- Production: https://tickle-bmxglqb4g-c-ts-projects-63250766.vercel.app

## Notes

- We use a static deployment approach because it avoids dependency conflicts that occur with standard Vercel deployments
- The `build` directory contains all static assets that are deployed to Vercel
- All deployment is done from the project root, not from inside the build directory 