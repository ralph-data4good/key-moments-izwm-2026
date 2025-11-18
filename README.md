# International Zero Waste Month 2026 - Landing Page

A modern, responsive landing page for International Zero Waste Month (IZWM) 2026, built with React and designed to integrate seamlessly with the Zero Waste Asia Festival platform.

## 🌍 Overview

This landing page serves as the key moment microsite for IZWM 2026, featuring:
- **Hero Section** with IZWM branding and quick stats
- **About Us** with event information, history timeline, and partner organizations
- **Events** gallery preview with deep links to Festival calendar and map
- **Toolkit** with downloadable resources for organizers
- **Get Involved** action items and campaign information
- **Register Event** CTA for event submission

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── EventCard/      # Event display card
│   ├── Icons/          # SVG icon components
│   ├── Layout/         # Main layout with nav and footer
│   └── Logo/           # IZWM logo component
├── sections/           # Page sections
│   ├── HeroSection/
│   ├── AboutSection/
│   ├── EventsSection/
│   ├── ToolkitSection/
│   ├── GetInvolvedSection/
│   └── RegisterSection/
├── config/             # Content configuration
│   ├── izwm2026Content.js  # Main content config
│   └── mockEvents.js       # Mock event/resource data
├── styles/             # Global styles
│   ├── tokens.css      # Design tokens
│   ├── base.css        # Base styles
│   └── layout.css      # Layout utilities
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Style imports
```

## 🎨 Design System

The landing page uses design tokens from the Zero Waste Festival brand:

### Colors
- **Primary Green**: `#5B8C5A` (izwm-brick)
- **Primary Blue**: `#4A8FC7` (zw-blue)
- **Accent Lime**: `#A4BF3D` (zw-lime)
- **Accent Gold**: `#D4A23D` (zw-gold)
- **Cream Background**: `#F5F3ED` (zw-cream)

### Typography
- **Font Family**: Schibsted Grotesk
- Mobile-first, fluid typography using `clamp()`

### Components
- All components use CSS Modules for scoped styling
- Responsive design with mobile-first approach
- Accessible with ARIA labels and keyboard navigation

## 🔗 Integration with Festival Site

The landing page integrates with the existing Zero Waste Asia Festival platform through deep links:

### Deep Link Pattern
```javascript
// Explore IZWM events
/festival/events?keyMoment=izwm-2026

// View IZWM calendar
/festival/calendar?keyMoment=izwm-2026

// View IZWM map
/festival/map?keyMoment=izwm-2026

// Register IZWM event
/festival/register?keyMoment=izwm-2026
```

### Key Moment Constant
```javascript
export const KEY_MOMENT_IZWM_2026 = 'izwm-2026';
```

This constant is used consistently across the app for filtering and routing.

## 📝 Content Management

Content is separated from components for easy updates:

### Edit Content
1. **General Content**: `src/config/izwm2026Content.js`
   - Hero text and stats
   - About section copy
   - History timeline
   - Partner organizations
   - Action items

2. **Mock Data**: `src/config/mockEvents.js`
   - Sample events (replace with Supabase query)
   - Resources/toolkit items

### Updating Copy
Non-developers can update text by editing the config files without touching React components.

## 🛠️ Customization

### Adding New Sections
1. Create section in `src/sections/NewSection/`
2. Import and add to `src/App.jsx`
3. Add navigation link in `src/components/Layout/Layout.jsx`

### Styling
- Edit design tokens in `src/styles/tokens.css`
- Modify component styles in respective `.module.css` files

## 🌐 Production Deployment

### Build
```bash
npm run build
```

The production build will be in the `dist/` directory.

### Environment Variables
If connecting to Supabase or other services:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

## 📱 Responsive Design

- **Mobile**: < 768px (single column, stacked navigation)
- **Tablet**: 768px - 1024px (adaptive grid layouts)
- **Desktop**: > 1024px (multi-column layouts)

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Color contrast ratios meet WCAG AA standards

## 📄 License

Part of Zero Waste Asia platform. © 2026 Zero Waste Asia. All rights reserved.

## 🤝 Contributing

For updates or modifications, please follow the Zero Waste Asia development guidelines.

## 📧 Contact

For questions or support, visit [zerowaste.asia](https://zerowaste.asia)

---

Built with ❤️ for the planet and the zero waste movement.

