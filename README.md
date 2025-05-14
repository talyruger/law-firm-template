# Tickle Law Office Website

A modern, professional website for Tickle Law Office built with React, TypeScript, and Material-UI.

## Features

- Responsive design for all devices
- Modern UI with smooth animations
- SEO optimized
- Contact form with validation
- Interactive practice areas showcase
- Team member profiles
- Google Maps integration

## Tech Stack

- React with TypeScript
- Material-UI (MUI) for components and styling
- React Router for navigation
- Framer Motion for animations
- React Helmet for SEO
- Axios for API calls

## Prerequisites

- Node.js (v18.x recommended)
- npm (v6 or higher)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
  ├── components/    # Reusable UI components
  ├── pages/         # Main page components
  ├── services/      # API and other services
  ├── theme/         # MUI theme configuration
  ├── App.tsx        # Main application component
  └── index.tsx      # Entry point
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production

## Deployment to Vercel

This project is configured for static deployment to Vercel. Follow these steps:

### Step 1: Build the site locally

```bash
# Install dependencies with legacy peer deps flag
npm install --legacy-peer-deps

# Build the site
npm run build
```

### Step 2: Deploy to Vercel

The project includes a properly configured `vercel.json` file for static deployment.

```bash
# Deploy to preview environment
vercel --confirm

# Deploy to production
vercel --prod
```

## Setting up custom domain

To set up a custom domain:

1. Go to the [Vercel dashboard](https://vercel.com)
2. Select your project (tickle-law)
3. Go to "Settings" > "Domains"
4. Add your custom domain and follow the DNS verification steps

## For future updates

When you update your website:

1. Make your changes to the code
2. Run `npm run build` locally
3. Deploy the updated build folder with `vercel --prod`

## Contact

For any questions or concerns, please contact:
- Email: info@ticklelawoffice.com 