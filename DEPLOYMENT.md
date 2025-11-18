# 🚀 Deployment Guide - GitHub Pages

## Quick Deployment Steps

### 1. Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: IZWM 2026 Landing Page"
```

### 2. Create GitHub Repository

Go to GitHub and create a new repository named: `key-moments-izwm-2026`

**Important**: Do NOT initialize with README, .gitignore, or license (we already have these)

### 3. Connect Local Repository to GitHub

```bash
git remote add origin https://github.com/ralph-data4good/key-moments-izwm-2026.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/ralph-data4good/key-moments-izwm-2026`
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Source: **GitHub Actions** (NOT "Deploy from a branch")
4. Save the settings

### 5. Push Code to Trigger Deployment

```bash
git push
```

The GitHub Action will automatically:
- Install dependencies
- Build the project
- Deploy to GitHub Pages

### 6. Access Your Site

Your site will be live at:
```
https://ralph-data4good.github.io/key-moments-izwm-2026/
```

Initial deployment takes 2-3 minutes.

---

## Configuration Details

### Base URL
The `vite.config.js` is configured with:
```javascript
base: '/key-moments-izwm-2026/'
```

This ensures all assets load correctly from the GitHub Pages subdirectory.

### GitHub Actions Workflow
Located at: `.github/workflows/deploy.yml`

**Triggers:**
- Push to `main` or `master` branch
- Manual workflow dispatch

**Process:**
1. Checkout code
2. Setup Node.js 20
3. Install dependencies (`npm ci`)
4. Build project (`npm run build`)
5. Upload artifacts
6. Deploy to GitHub Pages

---

## Manual Deployment (Alternative)

If you prefer manual deployment using gh-pages:

### 1. Install gh-pages
```bash
npm install
```

### 2. Deploy
```bash
npm run deploy
```

This will:
- Build the project
- Push the `dist` folder to the `gh-pages` branch

**Note**: With GitHub Actions (recommended), you don't need manual deployment.

---

## Updating the Site

Every time you push to the main branch, the site automatically rebuilds and redeploys:

```bash
# Make your changes
git add .
git commit -m "Update content"
git push
```

Wait 2-3 minutes, and your changes will be live!

---

## Troubleshooting

### Issue: Assets not loading (404 errors)
**Solution**: Check that `base: '/key-moments-izwm-2026/'` is set in `vite.config.js`

### Issue: GitHub Actions failing
**Solution**: 
1. Check that GitHub Pages source is set to "GitHub Actions"
2. Verify the workflow file exists: `.github/workflows/deploy.yml`
3. Check the Actions tab for error logs

### Issue: Site not updating
**Solution**:
1. Clear browser cache
2. Check GitHub Actions tab to see if deployment succeeded
3. Wait a few minutes for CDN to update

### Issue: Pages settings show "Your site is ready to be published"
**Solution**: Make sure to select **"GitHub Actions"** as the source, not "Deploy from a branch"

---

## Testing Before Deployment

### Local Development
```bash
npm run dev
```
Visit: `http://localhost:3000`

### Test Production Build Locally
```bash
npm run build
npm run preview
```
Visit: `http://localhost:4173/key-moments-izwm-2026/`

This shows exactly how it will look on GitHub Pages.

---

## Repository Settings Required

### 1. Actions Permissions
Go to: **Settings** → **Actions** → **General**
- Enable: "Allow all actions and reusable workflows"

### 2. Pages Permissions
Go to: **Settings** → **Pages**
- Source: **GitHub Actions**

---

## Deployment Checklist

- [x] `vite.config.js` has correct base path
- [x] `.github/workflows/deploy.yml` created
- [x] `.gitignore` configured
- [x] `package.json` has homepage URL
- [ ] Git repository initialized
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] GitHub Pages source set to "GitHub Actions"
- [ ] Site deployed and accessible

---

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the `public/` folder:
   ```
   your-domain.com
   ```

2. Configure DNS records at your domain provider:
   - Type: CNAME
   - Name: @
   - Value: ralph-data4good.github.io

3. In GitHub repository settings → Pages:
   - Add your custom domain
   - Enable "Enforce HTTPS"

---

## CI/CD Pipeline

Every push to main triggers:
```
Code Push → GitHub Actions → Build → Deploy → Live Site
```

**Build time**: ~2-3 minutes
**Total deployment time**: ~3-5 minutes

---

## Support

For issues:
1. Check GitHub Actions logs
2. Verify repository settings
3. Review deployment checklist above

---

## Quick Reference

**Site URL**: https://ralph-data4good.github.io/key-moments-izwm-2026/

**Repository**: https://github.com/ralph-data4good/key-moments-izwm-2026

**Deploy Command**: `git push` (automatic with GitHub Actions)

**Manual Deploy**: `npm run deploy` (alternative method)

---

🎉 **Your IZWM 2026 Landing Page is ready to deploy!**

