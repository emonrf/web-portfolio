# Deploying Your Portfolio

## Option 1: Replace Existing GitHub Repository

If you want to completely replace your old portfolio:

### Step 1: Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: New portfolio with React + Framer Motion"
```

### Step 2: Connect to Your Existing GitHub Repo
```bash
# Replace with your actual repository URL
git remote add origin https://github.com/emonrf/web-portfolio.git

# Or if remote already exists:
git remote set-url origin https://github.com/emonrf/web-portfolio.git
```

### Step 3: Force Push (This will replace everything)
```bash
# WARNING: This will DELETE your old portfolio and replace it
git push -f origin main

# If your branch is named 'master' instead:
git push -f origin master
```

---

## Option 2: Deploy to a New Repository

If you want to keep your old portfolio and create a new one:

### Step 1: Create New Repository on GitHub
1. Go to https://github.com/new
2. Name it (e.g., `portfolio-v2` or `web-portfolio-new`)
3. Don't initialize with README (since you already have files)

### Step 2: Push Your Code
```bash
git init
git add .
git commit -m "Initial commit: New portfolio"
git remote add origin https://github.com/emonrf/YOUR-NEW-REPO-NAME.git
git push -u origin main
```

---

## Option 3: Deploy to Netlify (Recommended for Quick Deploy)

### Quick Deploy:
1. Go to https://app.netlify.com/drop
2. Run `npm run build` in your terminal
3. Drag the `dist` folder to Netlify
4. Get instant live URL

### Connect to GitHub (Auto-deploy on push):
1. Sign in to Netlify with GitHub
2. Click "New site from Git"
3. Choose your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

---

## Option 4: Deploy to Vercel (Recommended)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Deploy
```bash
vercel
```

Follow the prompts:
- Link to existing project? **No**
- What's your project name? **web-portfolio**
- In which directory is your code? **.**
- Auto-detected settings? **Yes**

You'll get a live URL instantly!

### Step 3: Connect to GitHub (Optional)
```bash
vercel --prod
```

Or go to https://vercel.com, import your GitHub repo, and it will auto-deploy on every push.

---

## Option 5: GitHub Pages

### Step 1: Update vite.config.js
```javascript
export default defineConfig({
  base: '/web-portfolio/', // Your repo name
  plugins: [react(), tailwindcss()]
})
```

### Step 2: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 3: Add Deploy Script to package.json
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 4: Deploy
```bash
npm run deploy
```

### Step 5: Enable GitHub Pages
1. Go to your repo settings
2. Pages section
3. Source: `gh-pages` branch
4. Your site will be at: `https://emonrf.github.io/web-portfolio/`

---

## Recommended Workflow

**Best approach:**
1. Deploy to **Vercel** or **Netlify** (they're free and auto-deploy)
2. Get a live URL (e.g., `https://emanuelrf.vercel.app`)
3. Update your GitHub repo README with the live link
4. Update `portfolio.js` demo link to your live URL

**Commands:**
```bash
# 1. Build locally to test
npm run build
npm run preview

# 2. Deploy to Vercel
vercel

# 3. Push to GitHub
git add .
git commit -m "Deploy new portfolio"
git push origin main
```

---

## Before You Deploy Checklist

- [ ] Update `src/config/portfolio.js` with your real information
- [ ] Add project images to `public/projects/`
- [ ] Add your resume to `public/resume.pdf`
- [ ] Test locally: `npm run dev`
- [ ] Build successfully: `npm run build`
- [ ] Test production build: `npm run preview`
- [ ] Update README.md if needed

---

## Custom Domain (Optional)

### Vercel:
1. Go to your project settings
2. Domains section
3. Add your custom domain (e.g., `emanuelrf.com`)
4. Follow DNS instructions

### Netlify:
1. Domain settings
2. Add custom domain
3. Update DNS records

### GitHub Pages:
1. Add `CNAME` file to `public/` folder with your domain
2. Update DNS to point to GitHub Pages IPs
3. Enable HTTPS in repo settings

---

## Troubleshooting

### "Git remote already exists"
```bash
git remote remove origin
git remote add origin YOUR-NEW-URL
```

### "Build fails on deploy"
- Check Node version (need 18+)
- Ensure all dependencies are in `package.json`
- Check build logs for specific errors

### "Images not showing after deploy"
- Images must be in `public/` folder
- Use absolute paths: `/projects/image.png`
- Don't use relative paths: `./projects/image.png`

### "Dark mode not working after deploy"
- Clear browser cache
- Hard refresh: `Ctrl+F5` or `Cmd+Shift+R`

---

## Quick Commands Summary

```bash
# Local development
npm install
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel

# Deploy to Netlify via CLI
netlify deploy --prod

# Deploy to GitHub Pages
npm run deploy

# Push to GitHub
git add .
git commit -m "Update portfolio"
git push origin main
```
