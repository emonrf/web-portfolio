# 🚀 Quick Start Guide

## Immediate Actions (5 Minutes)

### 1️⃣ Update Your Personal Info
Open [src/config/portfolio.js](src/config/portfolio.js) and update:

```javascript
personal: {
  name: "Emanuel Feria",           // ← Change this
  title: "Computer Science Senior", // ← Change this
  tagline: "Building scalable systems & elegant user experiences",
  email: "your.email@example.com", // ← IMPORTANT: Add your real email
  github: "https://github.com/yourusername",  // ← Add your GitHub
  linkedin: "https://linkedin.com/in/yourusername", // ← Add your LinkedIn
  resume: "/resume.pdf"
}
```

### 2️⃣ Add Your Projects
In the same file, replace the placeholder projects:

```javascript
projects: [
  {
    id: 1,
    title: "Your Actual Project Name",
    description: "Specific technical details - mention tech stack, scale, impact",
    tags: ["React", "Node.js", "PostgreSQL"], // Your actual tech
    github: "https://github.com/you/your-project",
    demo: "https://your-project.com", // or null if no demo
    image: "/projects/project1.png"
  }
  // Add 2-4 of your BEST projects
]
```

### 3️⃣ Update Your Experience
Replace placeholder experience:

```javascript
experience: [
  {
    id: 1,
    title: "Your Role",
    company: "Company Name",
    period: "Month Year - Month Year",
    description: "Focus on IMPACT and RESULTS, not just responsibilities",
    technologies: ["Relevant", "Tech", "Stack"]
  }
]
```

### 4️⃣ Test Locally
```bash
npm run dev
```
Open http://localhost:5173 and verify everything looks correct.

---

## Before You Deploy (30 Minutes)

### Add Project Images
1. Create folder: `public/projects/`
2. Add images for each project (PNG or JPG, ~1200x800px recommended)
3. Update image paths in `portfolio.js`

### Add Your Resume
1. Place `resume.pdf` in `public/` folder
2. Or update the resume link in `portfolio.js` to an external link

### Mobile Testing
Test on your phone by:
1. Run `npm run dev`
2. Get your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
3. Visit `http://YOUR-IP:5173` on your phone

---

## Deploy (10 Minutes)

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts, it will give you a live URL
```

### Option 2: Netlify
```bash
# Build first
npm run build

# Drag and drop the 'dist' folder to netlify.com/drop
```

### Option 3: GitHub Pages
1. Update `vite.config.js`:
```javascript
export default {
  base: '/repository-name/', // your repo name
  // ... rest of config
}
```
2. Build: `npm run build`
3. Push `dist/` to `gh-pages` branch
4. Enable GitHub Pages in repo settings

---

## Common Customizations

### Change Color Scheme
Edit [src/components/ui/Button.jsx](src/components/ui/Button.jsx) and [tailwind.config.js](tailwind.config.js):

```javascript
// Button.jsx - Change color variants
variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700", // ← customize
  secondary: "bg-white text-blue-600 border-2 border-blue-600"
}
```

### Adjust Animation Speed
Edit [src/config/animations.js](src/config/animations.js):

```javascript
fadeInUp: {
  transition: { duration: 0.4 } // ← faster (was 0.6)
}
```

### Add More Sections
1. Create new file: `src/sections/YourSection.jsx`
2. Import in [src/App.jsx](src/App.jsx)
3. Add between existing sections

---

## SEO Optimization

### Update Meta Tags
Edit [index.html](index.html):

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Add these -->
  <meta name="description" content="Emanuel Feria - Computer Science Senior. Portfolio showcasing full-stack projects and system design experience." />
  <meta name="keywords" content="software engineer, full-stack developer, react, node.js, portfolio" />
  <meta name="author" content="Emanuel Feria" />

  <!-- Open Graph for social sharing -->
  <meta property="og:title" content="Emanuel Feria - Portfolio" />
  <meta property="og:description" content="Computer Science Senior - Full-Stack Developer" />
  <meta property="og:image" content="/og-image.png" />
  <meta property="og:url" content="https://yourwebsite.com" />

  <title>Emanuel Feria - Portfolio</title>
</head>
```

### Create OG Image
1. Design 1200x630px image with your name
2. Save as `public/og-image.png`
3. Update meta tag above

---

## Troubleshooting

### Build Fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Animations Not Working
Check browser console for errors. Ensure Framer Motion is installed:
```bash
npm install framer-motion
```

### Tailwind Styles Not Applying
Verify `postcss.config.js` has:
```javascript
plugins: {
  '@tailwindcss/postcss': {},
  autoprefixer: {},
}
```

### Images Not Showing
- Ensure images are in `public/` folder
- Use absolute paths: `/projects/image.png` (not `./`)
- Check file names match exactly (case-sensitive)

---

## Performance Checklist

Before sharing your portfolio:

- [ ] All personal info updated (no placeholders)
- [ ] Real project descriptions with impact metrics
- [ ] Project images added and loading correctly
- [ ] Resume PDF uploaded
- [ ] Tested on mobile device
- [ ] Tested in Chrome, Firefox, Safari
- [ ] All links working (GitHub, LinkedIn, etc.)
- [ ] Meta tags updated for SEO
- [ ] Deployed to live URL
- [ ] Tested live deployment
- [ ] Lighthouse score > 90 (run in Chrome DevTools)

---

## Share Your Portfolio

Once deployed, add your URL to:
- ✅ Resume (top of page)
- ✅ LinkedIn profile (website field)
- ✅ GitHub profile README
- ✅ Email signature
- ✅ Job applications

---

**Questions?** Review [REFACTOR_SUMMARY.md](REFACTOR_SUMMARY.md) for detailed explanations of architecture decisions.
