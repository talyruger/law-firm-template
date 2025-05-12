# Deploying to Vercel Using the Web UI

Since we're having issues with the CLI deployment, let's use the Vercel web UI to deploy our static build:

## Step 1: Build the application locally

```bash
# Make sure dependencies are installed
npm install --legacy-peer-deps

# Build the site
npm run build
```

## Step 2: Create a ZIP file of the build directory

```bash
# On macOS/Linux:
cd build
zip -r ../build.zip *

# Or on Windows:
# Right-click the build folder and select "Compress to ZIP"
```

## Step 3: Upload to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Scroll down to "Upload" section and click on it
4. Drag and drop your `build.zip` file or use the file selector
5. Once uploaded, click "Deploy"

## Step 4: Configure as a static site

After the deployment starts:

1. Make sure the "Framework Preset" is set to "Other"
2. Root Directory should be set to `.` (dot)
3. Build Command can be left empty
4. Output Directory should be `.` (dot)
5. Install Command can be left empty

## Accessing your site

After the deployment completes, Vercel will provide you with a URL to access your site. This URL will typically look like:
`https://project-name-username.vercel.app`

## Setting up a custom domain

To set up a custom domain:

1. Go to the Vercel project dashboard
2. Click on "Settings" → "Domains"
3. Add your custom domain and follow the DNS verification steps

## Future Updates

For future updates, repeat the process:
1. Make changes to your code
2. Build locally with `npm run build`
3. Create a ZIP of the build directory
4. Upload to Vercel as a new deployment 