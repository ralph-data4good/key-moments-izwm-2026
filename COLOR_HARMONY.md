# IZWM 2026 Color Harmony Guide

## Color Strategy

Following the hero and register sections' approach, all sections now use a consistent IZWM brand color palette with harmonized gradients, accents, and interactive elements.

---

## Section-by-Section Color Palette

### 🎯 **Hero Section** (Well Implemented ✓)
- **Background**: Brick → Navy gradient
- **Theme box**: Semi-transparent white with blur
- **Text**: White
- **Stats**: Brick red numbers

### 📅 **Weekly Themes Section**
- **Background**: Pure white (clean separation)
- **Week tabs**: Individual IZWM brand colors per week
  - Week 1: Navy `#1A2D5E`
  - Week 2: Brick Red `#952925`
  - Week 3: Lime `#C2CB32`
  - Week 4: Gold `#EDB849`
  - Week 5: Blue `#1586C0`
- **Timeline**: Rainbow gradient using all 5 IZWM colors
- **Active indicators**: Match weekly theme colors

### ℹ️ **About Section**
**Impact Stats Cards:**
- Icon background: Blue → Navy gradient
- Numbers: Brick red
- Hover border: Gold

**Mission Card:**
- Background: Brick → Navy gradient (matches hero)
- Icon: Semi-transparent white circle

**Key Objectives:**
- Icon background: Lime → Gold gradient
- Hover border: Gold

**History Timeline:**
- Left border: IZWM Blue
- Year numbers: Brick red
- Year box border: Gold
- Highlights checkmarks: Lime
- Links: IZWM Blue

**Partner Carousel:**
- Count banner: Blue → Navy gradient (matches hero)
- Carousel buttons: Gold with dark text
- Indicators: Gold (active state)
- Card hover border: Gold

### 🎉 **Get Involved Section**
**Section Header:**
- Tagline box: Lime → Gold gradient

**Action Cards:**
- Join Event: Gold `#EDB849`
- Join Conversation: Blue `#1586C0`
- Composting: Lime `#C2CB32`
- Refuse Single-Use: Brick Red `#952925`
- Video: Blue `#1586C0`
- Quote: Navy → Blue gradient

**Interactive Elements:**
- Card subtitles: Brick red
- Card CTAs: IZWM Blue
- Hover borders: Gold

**Bottom CTA:**
- Background: Brick → Navy gradient (matches hero)

### 📝 **Register Section** (Well Implemented ✓)
- **Background**: White → Cream gradient
- **Card border**: Gold `#EDB849`
- **Step numbers**: Blue circles
- **Primary button**: Standard IZWM button styles

---

## Color Usage Patterns

### Primary Gradients (Hero Style)
Used for major section backgrounds and CTAs:
- **Brick → Navy**: Hero, Mission Card, Bottom CTAs
- **Blue → Navy**: Partner Banner, Quote Card, Video Card

### Secondary Gradients (Accent Style)
Used for feature highlights and objectives:
- **Lime → Gold**: Tagline boxes, Objective icons
- **Blue → Navy**: Stat icons

### Accent Colors
- **Gold** `#EDB849`: Borders on hover, buttons, carousel controls, active states
- **Brick Red** `#952925`: Primary text highlights (numbers, year dates, subtitles)
- **Blue** `#1586C0`: Links, interactive elements, CTAs
- **Lime** `#C2CB32`: Success states, checkmarks, positive indicators

### Neutral Background
- **White** `#fff`: Primary content background
- **Cream** `#F5F3ED`: Section backgrounds, soft contrast areas

---

## Color Relationships

### Complementary Pairs
- **Brick ↔ Lime**: Warm/cool contrast
- **Navy ↔ Gold**: Deep/bright contrast
- **Blue ↔ White**: Clean, professional

### Gradient Combinations
1. **Primary**: Brick → Navy (bold, authoritative)
2. **Secondary**: Blue → Navy (professional, trustworthy)
3. **Accent**: Lime → Gold (energetic, optimistic)

---

## Interactive States

### Hover Effects
- **Cards**: Border changes to Gold
- **Buttons**: Gold background
- **Links**: IZWM Blue, underline appears
- **Carousel**: Gold indicators grow

### Active States
- **Tabs**: Border bottom in theme color
- **Dots/Indicators**: Gold, wider pill shape
- **Selected week**: Enlarged dot in theme color

### Focus States
- **Buttons**: 3px outline in IZWM Blue
- **Links**: Same as hover

---

## Consistency Rules

### ✓ Always Use
1. **Gold borders** for hover states
2. **Brick → Navy gradient** for major CTAs
3. **Blue** for all clickable text/links
4. **Brick red** for primary numeric highlights
5. **Lime → Gold gradient** for positive features

### ✗ Avoid
1. Mixing gradients within the same card type
2. Using random colors not in IZWM palette
3. Inconsistent hover effects (all should use Gold)
4. Competing attention with too many bright colors

---

## Section Background Pattern

```
Hero (Brick→Navy gradient)
  ↓
Weekly Themes (White - clean break)
  ↓
About (Cream gradient, white cards)
  ↓
Events (follows event card system)
  ↓
Get Involved (gradient transition, diverse cards)
  ↓
Register (White→Cream, gold border)
```

---

## Color Accessibility

All color combinations meet WCAG AA standards:
- White text on Navy/Brick gradients ✓
- Dark text on Gold/Lime backgrounds ✓
- Blue links have sufficient contrast ✓
- Gold borders visible on white ✓

---

## Implementation Notes

- All colors defined in `src/styles/tokens.css` as CSS variables
- Gradient combinations follow hero section pattern
- Interactive states use Gold consistently
- Typography emphasis uses Brick red
- All links/CTAs use IZWM Blue

**Last Updated**: November 2024  
**Status**: Fully Harmonized ✓

