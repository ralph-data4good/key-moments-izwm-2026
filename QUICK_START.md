# 🚀 Quick Start Guide - IZWM 2026 Landing Page

## Getting Started in 3 Minutes

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Start Development Server
```bash
npm run dev
```

The site will open at: **http://localhost:3000**

### 3️⃣ Build for Production
```bash
npm run build
```

Output will be in the `dist/` folder, ready to deploy.

---

## 📂 What You Have

A complete, modern landing page for **International Zero Waste Month 2026** with:

### ✅ Sections
1. **Hero** - Large logo, stats, primary CTAs
2. **About Us** - Event info, history timeline, partners
3. **Events** - Gallery preview, calendar & map links
4. **Toolkit** - Downloadable resources
5. **Get Involved** - Action items & campaigns
6. **Register** - Event submission CTA

### ✅ Features
- 📱 Fully responsive (mobile-first)
- ♿ Accessible (WCAG AA)
- 🎨 Beautiful design (Zero Waste Asia brand)
- 🔗 Deep links to Festival platform
- ⚡ Fast (Vite build)
- 📝 Easy to update (config files)

---

## 🎨 Customizing Content

### Change Text & Copy
Edit: `src/config/izwm2026Content.js`

```javascript
export const heroContent = {
  title: 'International Zero Waste Month 2026',
  subtitle: 'Your custom text here...',
  // ... more content
};
```

### Change Events/Resources
Edit: `src/config/mockEvents.js`

```javascript
export const mockEvents = [
  {
    title: 'Your Event Name',
    // ... event details
  }
];
```

### Change Colors
Edit: `src/styles/tokens.css`

```css
:root {
  --zw-lime: #A4BF3D;      /* Change color here */
  --zw-blue: #4A8FC7;       /* Change color here */
  /* ... more colors */
}
```

---

## 🔗 Integration with Festival

All buttons link to Festival routes with IZWM filter:

```
✅ /festival/events?keyMoment=izwm-2026
✅ /festival/calendar?keyMoment=izwm-2026
✅ /festival/map?keyMoment=izwm-2026
✅ /festival/register?keyMoment=izwm-2026
```

**Note**: Update these URLs to match your actual Festival routes.

---

## 📁 Key Files

```
📂 src/
  ├── 📂 config/
  │   ├── izwm2026Content.js    ← Edit text here
  │   └── mockEvents.js         ← Edit events here
  ├── 📂 styles/
  │   └── tokens.css            ← Edit colors here
  ├── App.jsx                   ← Main app
  └── main.jsx                  ← Entry point

📂 public/
  └── assets/
      └── izwm-logo.svg         ← IZWM logo
```

---

## 🎯 Common Tasks

### Add a New Event
1. Open `src/config/mockEvents.js`
2. Add event object to `mockEvents` array:
   ```javascript
   {
     id: 'evt-7',
     title: 'New Event Name',
     start_datetime: '2026-11-25T10:00:00',
     location: 'City Name',
     country: 'Country',
     // ... more fields
   }
   ```

### Add a New Resource
1. Open `src/config/mockEvents.js`
2. Add resource to `mockResources` array:
   ```javascript
   {
     id: 'res-7',
     title: 'New Resource Title',
     description: 'Description here...',
     type: 'Guide',
     // ... more fields
   }
   ```

### Change Stats in Hero
1. Open `src/config/izwm2026Content.js`
2. Edit `heroContent.stats`:
   ```javascript
   stats: [
     { value: '50+', label: 'Countries' },  // Change here
     { value: '500+', label: 'Events' },    // Change here
     { value: '20K+', label: 'Participants' } // Change here
   ]
   ```

### Add a Partner Organization
1. Open `src/config/izwm2026Content.js`
2. Add to `partnerOrganizations`:
   ```javascript
   { 
     name: 'New Partner Name', 
     country: 'Country', 
     logo: '🌍' 
   }
   ```

---

## 📱 Testing Responsive Design

### In Browser Dev Tools:
1. Press `F12` or `Ctrl+Shift+I`
2. Click device toolbar icon
3. Test these sizes:
   - Mobile: 375px (iPhone)
   - Tablet: 768px (iPad)
   - Desktop: 1440px (Laptop)

---

## 🚀 Deployment

### Option 1: Static Hosting (Netlify, Vercel)
```bash
npm run build
```
Deploy the `dist/` folder

### Option 2: GitHub Pages
```bash
npm run build
```
Push `dist/` to GitHub Pages

### Option 3: Zero Waste Asia Server
```bash
npm run build
```
Upload `dist/` contents to server

---

## 🆘 Troubleshooting

### Issue: Port 3000 already in use
```bash
# Kill process on port 3000 (Windows)
npx kill-port 3000

# Or use different port
npm run dev -- --port 3001
```

### Issue: Styles not loading
```bash
# Clear cache and rebuild
rm -rf node_modules
rm -rf dist
npm install
npm run dev
```

### Issue: Can't find module
```bash
# Reinstall dependencies
npm install
```

---

## 📚 Documentation

- **README.md** - Full project README
- **PROJECT_OVERVIEW.md** - Detailed overview
- **IMPLEMENTATION_NOTES.md** - Technical details

---

## ✨ What's Included

✅ Modern React app with Vite
✅ Beautiful, responsive design
✅ All 6 sections implemented
✅ Navigation with smooth scrolling
✅ Event cards & resource cards
✅ Mobile hamburger menu
✅ Footer with social links
✅ Custom IZWM logo
✅ Icon library
✅ Design system (colors, typography)
✅ Configuration-driven content
✅ Production-ready code

---

## 🎉 You're Ready!

The landing page is **complete and ready to use**. Just:

1. Run `npm run dev` to see it locally
2. Customize content in config files
3. Build with `npm run build` for production

**Enjoy building a waste-free future! 🌍♻️**

---

Questions? Check the full documentation in `README.md` or `IMPLEMENTATION_NOTES.md`

