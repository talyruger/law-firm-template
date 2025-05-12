# Deploying Tickle Law Website to Vercel

This guide covers both methods for deploying your React application to Vercel.

## Method 1: Deploy via GitHub (Recommended)

This is the most reliable method for deploying your application.

### Step 1: Push Your Code to GitHub

```bash
# If you don't have a GitHub repository yet
git init
git add .
git commit -m "Initial commit"

# Create a repository on GitHub.com and then:
git remote add origin https://github.com/yourusername/tickle-law.git
git push -u origin main
```

### Step 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and log in to your account
2. Click "Add New" → "Project"
3. Connect your GitHub account if you haven't already
4. Select the tickle-law repository from the list
5. Configure your project:
   - Framework Preset: Create React App
   - Build Command: `npm run build` (should be auto-detected)
   - Output Directory: `build` (should be auto-detected)
   - Install Command: `npm install` (default)
   - Root Directory: `./` (default)
6. Click "Deploy"

Your site will be live at a URL like: `https://tickle-law.vercel.app` (depending on your project name)

### Benefits of GitHub Deployment:
- Automatic deployments when you push to your repository
- Preview deployments for pull requests
- Easy rollback to previous versions
- Team collaboration features

## Method 2: Deploy via Vercel CLI (Alternative)

If you prefer using the command line, you can use the Vercel CLI.

### Prerequisite: Update package.json

Make sure your `package.json` has the correct Node.js version:

```json
"engines": {
  "node": "18.x"
}
```

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Log in to Vercel

```bash
vercel login
```

Follow the prompts to authenticate.

### Step 3: Deploy

```bash
vercel
```

When prompted:
- Set up and deploy? → Yes
- Link to existing project? → No (unless you've deployed this before)
- What's your project's name? → tickle-law (or your preferred name)
- In which directory is your code located? → ./ (current directory)
- Want to override the settings? → No

### Step 4: Deploy to Production

When you're ready to deploy to production:

```bash
vercel --prod
```

## Troubleshooting

If you encounter issues with the CLI deployment:

1. **Node.js Version**: Ensure the Node.js version specified in your package.json is supported by Vercel (18.x is recommended)
2. **Dependencies**: Check if all your dependencies are compatible with the specified Node.js version
3. **Log Checking**: Use `vercel logs <deployment-url>` to diagnose issues
4. **Vercel.json**: Make sure your vercel.json file is correctly configured

## Setting Up Custom Domain

After deployment:
1. Go to the project settings in Vercel
2. Click on "Domains"
3. Add your custom domain and follow the DNS verification process

## Automatic Deployments

With the GitHub integration, Vercel automatically deploys:
- When you push to the main branch
- When pull requests are created (as preview deployments)

You can configure branch deployments in the Vercel project settings. 