# International Zero Waste Month 2026 - Landing Page
## Project Overview

### 🎯 Project Goal
Create a modern, user-friendly, non-profit focused landing page for International Zero Waste Month (IZWM) 2026 that integrates seamlessly with the Zero Waste Asia Festival platform.

### ✨ Features

#### 1. Hero Section
- **Large IZWM Logo**: Custom SVG logo featuring International Zero Waste Month branding
- **Engaging Copy**: Clear subtitle explaining the global celebration
- **Quick Stats**: Expected participation metrics (40+ countries, 300+ events, 10K+ participants)
- **Primary CTAs**: "Explore Events" and "Register Your Event" buttons
- **Responsive Design**: Beautiful on all screen sizes

#### 2. About Us Section
Three engaging subsections:
- **About the Event**: Two-column layout with description and visual
- **History Timeline**: 2023 and 2024 highlights with expandable content
- **Partner Organizations**: Grid of partner logos and information with "Become a Partner" CTA

#### 3. Events Section
- **Event Gallery**: Featured IZWM events in responsive card grid
- **Calendar Preview**: Quick access to full Festival calendar
- **Map Preview**: Quick access to Festival map view
- **Info Box**: Encourages users to register their own events
- All with deep links to Festival modules filtered by `keyMoment=izwm-2026`

#### 4. Toolkit & Resources
- **Resource Cards**: Downloadable guides, posters, social media packs
- **Type Badges**: Visual categorization of resource types
- **File Info**: Size and format information
- **Library Link**: Access to full Zero Waste Asia resource library

#### 5. Get Involved
- **Four Action Cards**: 
  - Join a Zero Waste Campaign
  - Host a Film Screening or Dialogue
  - Organize a Waste Audit
  - Support Waste Workers
- **Compelling CTA**: Large banner encouraging event registration
- **Campaign Links**: Connect to broader Zero Waste campaigns

#### 6. Register Event
- **Three-Step Process**: Clear explanation of how to register
- **Benefits List**: Why organizers should register their events
- **Visual Design**: Engaging animated graphics
- **Primary CTA**: Register button with deep link to Festival form

### 🎨 Design Principles

1. **Modern & Clean**: Minimal design that prioritizes content
2. **Accessible**: WCAG AA compliant, keyboard navigable, screen reader friendly
3. **Responsive**: Mobile-first approach, works on all devices
4. **Brand Consistent**: Uses Zero Waste Asia colors, typography, and patterns
5. **Engaging**: Smooth animations, hover effects, clear visual hierarchy
6. **Non-Profit Focused**: Professional but approachable, avoids corporate clichés

### 🎨 Design System

#### Colors
```css
Primary Green: #5B8C5A (izwm-brick)
Primary Blue: #4A8FC7 (zw-blue)
Accent Lime: #A4BF3D (zw-lime)
Accent Gold: #D4A23D (zw-gold)
Cream Background: #F5F3ED (zw-cream)
```

#### Typography
- **Font Family**: Schibsted Grotesk (via Google Fonts)
- **Fluid Scale**: Uses clamp() for responsive sizing
- **Hierarchy**: Clear H1-H3 structure with proper semantic HTML

#### Components
- **Buttons**: Primary, Secondary, Outline variants
- **Cards**: Elevated with hover effects
- **Icons**: Custom SVG icon set
- **Chips**: For event modality badges

### 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: CSS Modules + CSS Variables
- **Icons**: Custom SVG components
- **Fonts**: Google Fonts (Schibsted Grotesk)

### 📁 File Structure

```
├── public/
│   ├── assets/
│   │   └── izwm-logo.svg          # IZWM logo
│   └── favicon.svg                 # Site favicon
├── src/
│   ├── components/
│   │   ├── EventCard/              # Event display card
│   │   ├── Icons/                  # SVG icon library
│   │   ├── Layout/                 # Main layout (nav + footer)
│   │   └── Logo/                   # IZWM logo component
│   ├── sections/
│   │   ├── HeroSection/            # Hero with logo and CTAs
│   │   ├── AboutSection/           # About, History, Partners
│   │   ├── EventsSection/          # Events gallery, Calendar, Map
│   │   ├── ToolkitSection/         # Resources and downloads
│   │   ├── GetInvolvedSection/     # Action items
│   │   └── RegisterSection/        # Event registration CTA
│   ├── config/
│   │   ├── izwm2026Content.js     # Main content configuration
│   │   └── mockEvents.js           # Mock data (replace with API)
│   ├── styles/
│   │   ├── tokens.css              # Design tokens
│   │   ├── base.css                # Base styles
│   │   └── layout.css              # Layout utilities
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Style imports
├── package.json
├── vite.config.js
├── README.md
└── IMPLEMENTATION_NOTES.md
```

### 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```
   Output in `dist/` directory

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

### 🔗 Integration Points

#### Deep Links to Festival Platform
All CTAs link to Festival modules with the IZWM filter:

- **View Events**: `/festival/events?keyMoment=izwm-2026`
- **View Calendar**: `/festival/calendar?keyMoment=izwm-2026`
- **View Map**: `/festival/map?keyMoment=izwm-2026`
- **Register Event**: `/festival/register?keyMoment=izwm-2026`

#### Data Sources
- Currently uses mock data from `src/config/mockEvents.js`
- Ready to integrate with Supabase or any API
- Filter by `campaign_id = 'izwm-2026'` or similar

### 📝 Content Management

#### Updating Content (Non-Developers)
Edit these files to change copy:

1. **`src/config/izwm2026Content.js`**
   - Hero title, subtitle, stats
   - About section text
   - History timeline
   - Partner organizations
   - Action items

2. **`src/config/mockEvents.js`**
   - Sample events
   - Resource/toolkit items

#### Updating Styles (Developers)
Edit these files to change design:

1. **`src/styles/tokens.css`** - Colors, spacing, fonts
2. **Component `.module.css`** - Individual component styles

### 🎯 Key Features

✅ **Fully Responsive** - Works beautifully on mobile, tablet, and desktop
✅ **Accessible** - WCAG AA compliant, keyboard navigable
✅ **Fast** - Optimized build with code splitting
✅ **SEO Ready** - Semantic HTML, proper meta tags
✅ **Easy to Update** - Config-driven content
✅ **Production Ready** - Clean code, documented, tested

### 🌟 Highlights

1. **Smooth Navigation**: Sticky header with smooth scrolling to sections
2. **Engaging Animations**: Subtle animations on scroll and hover
3. **Professional Design**: Modern, clean, suitable for non-profit sector
4. **Mobile-First**: Designed for mobile, enhanced for desktop
5. **Clear CTAs**: Every section has clear calls-to-action
6. **Integrated**: Deep links ensure seamless Festival integration

### 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column, stacked)
- **Tablet**: 768px - 1024px (adaptive grids)
- **Desktop**: > 1024px (multi-column layouts)

### ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Alt text for all images
- Color contrast meets WCAG AA
- Screen reader friendly

### 🎨 Brand Assets

- **Logo**: Custom IZWM logo in `public/assets/izwm-logo.svg`
- **Favicon**: Zero waste themed favicon in `public/favicon.svg`
- **Colors**: Based on Zero Waste Asia brand palette
- **Typography**: Schibsted Grotesk (professional, clean, modern)

### 📊 Performance

- **Lighthouse Score**: 90+ (expected)
- **Bundle Size**: Optimized with Vite
- **Code Splitting**: Automatic with React lazy loading
- **Assets**: SVG icons (lightweight), optimized images

### 🔮 Future Enhancements

**Phase 1: Data Integration**
- Connect to Supabase database
- Real-time event counts
- Dynamic content loading

**Phase 2: Advanced Features**
- Multi-language support (i18n)
- Embedded calendar widget
- Interactive map on page
- Event search/filter

**Phase 3: CMS**
- Headless CMS integration
- Admin content editor
- Dynamic media uploads

### 📚 Documentation

- **README.md** - Quick start and overview
- **IMPLEMENTATION_NOTES.md** - Technical implementation details
- **Inline Comments** - Code documentation

### 🤝 Contributing

Follow Zero Waste Asia development guidelines. Code is clean, well-structured, and ready for team collaboration.

### 🙏 Credits

- **Design**: Based on Zero Waste Festival 2025 design system
- **Built For**: GAIA and Zero Waste Asia
- **Purpose**: International Zero Waste Month 2026

---

**Status**: ✅ Complete and ready for deployment
**Version**: 1.0.0
**Last Updated**: November 2024

