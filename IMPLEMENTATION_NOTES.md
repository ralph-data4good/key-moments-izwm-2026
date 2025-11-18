# Implementation Notes - IZWM 2026 Landing Page

## 📋 Summary

This document provides technical details about the International Zero Waste Month 2026 landing page implementation, following the requirements in the original Cursor prompt.

## ✅ Requirements Fulfilled

### 1. Route Structure
- **Landing Page**: The page can be accessed directly as the homepage
- **Key Moment Constant**: Defined as `KEY_MOMENT_IZWM_2026 = 'izwm-2026'`
- **Deep Links**: All CTAs properly link to Festival routes with `?keyMoment=izwm-2026`

### 2. Sections Implemented

#### ✓ Hero Section (`src/sections/HeroSection/`)
- Large IZWM logo display
- Subtitle explaining the key moment
- Metadata row (November 2026, Global, Online/In-Person)
- Two primary CTAs (Explore Events, Register Event)
- Stats panel with expected participation metrics
- Responsive on all devices

#### ✓ About Us Section (`src/sections/AboutSection/`)
Contains three subsections:

**2.1 About the Event**
- Two-column layout (text + visual)
- Description of IZWM and objectives
- Supporting graphic with icon grid
- Fully responsive

**2.2 History Timeline**
- Timeline cards for 2023 and 2024
- Year badges with highlights
- Links to full stories
- Easy to add new years

**2.3 Partner Organizations**
- Grid layout of partner cards
- Logo placeholders (emojis for now)
- Organization name and location
- "Become a Partner" CTA

#### ✓ Events Section (`src/sections/EventsSection/`)
Contains three subsections:

**3.1 Event Gallery Preview**
- Displays 6 featured events
- Event cards with title, date, location, modality
- "View All IZWM Events" CTA
- Deep links to Festival event detail pages

**3.2 Calendar Preview**
- Preview card with description
- "Open Calendar" CTA → `/festival/calendar?keyMoment=izwm-2026`

**3.3 Map Preview**
- Preview card with description
- "Open Map" CTA → `/festival/map?keyMoment=izwm-2026`

#### ✓ Toolkit Section (`src/sections/ToolkitSection/`)
- Grid of resource cards
- Type badges (Guide, Poster, Social Media Pack)
- File size indicators
- Download buttons
- "Browse Library" CTA to main resource library

#### ✓ Get Involved Section (`src/sections/GetInvolvedSection/`)
- Four action cards with icons
- Join campaigns, host screenings, organize audits, support workers
- Call-to-action panel at bottom
- Links to campaigns and registration

#### ✓ Register Event Section (`src/sections/RegisterSection/`)
- Not a full form, but a CTA block
- Three-step process explanation
- Benefits list
- "Register Your Event Now" button
- Deep link to `/festival/register?keyMoment=izwm-2026`

### 3. Navigation & Layout (`src/components/Layout/`)

#### ✓ Sticky Navigation
- Logo (scrolls to home)
- Smooth scroll links to sections (About, Events, Toolkit, Get Involved)
- Register Event button (deep links to Festival)
- Mobile hamburger menu
- Scroll effect (shadow on scroll)

#### ✓ Footer
- Logo and description
- Social media links
- Quick links to sections
- Resource links
- Legal links
- Copyright and credits

### 4. Technical Implementation

#### ✓ Design System
- **Colors**: Aligned with Zero Waste Festival brand
  - Primary: #5B8C5A (green), #4A8FC7 (blue)
  - Accents: #A4BF3D (lime), #D4A23D (gold)
  - Background: #F5F3ED (cream)
- **Typography**: Schibsted Grotesk font family
- **Spacing**: Fluid typography using `clamp()`
- **Responsive**: Mobile-first approach

#### ✓ Component Structure
- All components use CSS Modules (scoped styling)
- Reusable components (`EventCard`, `Icons`, `Logo`)
- Section-based architecture
- Clean separation of concerns

#### ✓ Content Configuration
- Content separated in `src/config/izwm2026Content.js`
- Mock data in `src/config/mockEvents.js`
- Easy for non-developers to update copy
- Ready to replace with Supabase queries

#### ✓ Accessibility
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Proper heading hierarchy
- Alt text for images

#### ✓ Responsiveness
- Mobile: < 768px (stacked, single column)
- Tablet: 768px - 1024px (adaptive grids)
- Desktop: > 1024px (multi-column layouts)
- All sections tested on different screen sizes

## 🔗 Deep Link Integration

All CTAs correctly route to Festival modules with the key moment filter:

```javascript
// Events
/festival/events?keyMoment=izwm-2026

// Calendar  
/festival/calendar?keyMoment=izwm-2026

// Map
/festival/map?keyMoment=izwm-2026

// Registration
/festival/register?keyMoment=izwm-2026
```

## 🎨 Design Components Reused

From the Festival React 2025 project, we reused:
- Design tokens (colors, spacing, shadows)
- Typography system
- Button styles
- Card components
- Icon components
- Layout patterns
- CSS architecture

## 📦 Deliverables

1. **Main Page Component**: `src/App.jsx`
2. **Section Components**:
   - `src/sections/HeroSection/`
   - `src/sections/AboutSection/`
   - `src/sections/EventsSection/`
   - `src/sections/ToolkitSection/`
   - `src/sections/GetInvolvedSection/`
   - `src/sections/RegisterSection/`
3. **Shared Components**:
   - `src/components/Layout/` (nav + footer)
   - `src/components/Logo/`
   - `src/components/Icons/`
   - `src/components/EventCard/`
4. **Configuration**:
   - `src/config/izwm2026Content.js`
   - `src/config/mockEvents.js`
5. **Styles**:
   - `src/styles/tokens.css`
   - `src/styles/base.css`
   - `src/styles/layout.css`

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 🔄 Future Enhancements

### Phase 1: Data Integration
- Replace mock events with Supabase queries
- Add real-time event count updates
- Integrate with actual Festival database

### Phase 2: Enhanced Features
- Add language switcher (i18n)
- Implement actual calendar widget
- Embed interactive map
- Add event search/filter on this page

### Phase 3: CMS Integration
- Connect to headless CMS for content
- Allow admin to update copy without code
- Dynamic partner logo uploads

## 📝 Notes for Developers

### Adding New Events
Currently using mock data in `src/config/mockEvents.js`. To integrate with Festival database:

```javascript
// Replace mockEvents with Supabase query
import { supabase } from './services/supabase';

const { data: events } = await supabase
  .from('events')
  .select('*')
  .eq('campaign_id', 'izwm-2026')
  .order('start_datetime', { ascending: true });
```

### Updating Content
Edit `src/config/izwm2026Content.js` to change:
- Hero text and stats
- About section copy
- History timeline entries
- Partner organizations
- Action items

### Customizing Design
Edit `src/styles/tokens.css` to change:
- Brand colors
- Typography scale
- Spacing values
- Border radius
- Shadow definitions

## ✨ Design Highlights

1. **Modern & Clean**: Minimal design that puts content first
2. **Brand Consistent**: Uses Zero Waste Asia colors and typography
3. **Engaging**: Smooth animations, hover effects, visual hierarchy
4. **Professional**: Suitable for non-profit/advocacy organizations
5. **User-Friendly**: Clear CTAs, intuitive navigation, easy to scan

## 🎯 Key Achievements

- ✅ Complete one-page layout with all required sections
- ✅ Smooth scroll navigation
- ✅ Deep link integration with Festival modules
- ✅ Mobile-first responsive design
- ✅ Accessible and keyboard-navigable
- ✅ Config-driven content for easy updates
- ✅ Reused Festival design components
- ✅ Production-ready code structure
- ✅ Comprehensive documentation

## 🙏 Acknowledgments

Built following the Zero Waste Asia design system and the Festival React 2025 project patterns. Designed for the International Zero Waste Month 2026 campaign led by GAIA and partners.

---

**Project Status**: ✅ Complete and ready for deployment
**Last Updated**: November 2024

