// Mock event data for the Events Gallery Preview
// In production, this would be fetched from Supabase filtered by keyMoment=izwm-2026

export const mockEvents = [
  {
    id: 'evt-1',
    title: 'Zero Waste Finance Workshop',
    start_datetime: '2026-01-02T10:00:00',
    end_datetime: '2026-01-02T15:00:00',
    location: 'Manila',
    country: 'Philippines',
    modality: 'Hybrid',
    summary: 'Learn how to secure funding and investment for community-led zero waste projects and social enterprises.',
    organizer_name: 'GAIA Asia Pacific',
    poster_url: null,
    campaign_id: 'izwm-2026',
    weeklyTheme: 'week-1' // LAUNCH
  },
  {
    id: 'evt-2',
    title: 'Refuse Single-Use Day: Community Action',
    start_datetime: '2026-01-08T14:00:00',
    end_datetime: '2026-01-08T17:00:00',
    location: 'Online',
    country: 'Global',
    modality: 'Online',
    summary: 'Global day of action refusing single-use plastics. Join businesses, schools, and communities going plastic-free.',
    organizer_name: 'Break Free From Plastic Asia',
    poster_url: null,
    campaign_id: 'izwm-2026',
    weeklyTheme: 'week-2' // BARRIERS TO ZERO WASTE
  },
  {
    id: 'evt-3',
    title: 'Reuse Systems Showcase',
    start_datetime: '2026-01-12T09:00:00',
    end_datetime: '2026-01-14T17:00:00',
    location: 'Bangkok',
    country: 'Thailand',
    modality: 'Hybrid',
    summary: 'Three-day summit showcasing successful reuse, repair, and refill systems from across Asia.',
    organizer_name: 'Zero Waste Cities Alliance',
    poster_url: null,
    campaign_id: 'izwm-2026',
    weeklyTheme: 'week-3' // SOLUTIONS WEEK
  },
  {
    id: 'evt-4',
    title: 'Community Composting Investment Forum',
    start_datetime: '2026-01-15T10:00:00',
    end_datetime: '2026-01-15T13:00:00',
    location: 'Jakarta',
    country: 'Indonesia',
    modality: 'In-Person',
    summary: 'Connect community composting initiatives with impact investors and funding opportunities.',
    organizer_name: 'Jakarta Composting Network',
    poster_url: null,
    campaign_id: 'izwm-2026',
    weeklyTheme: 'week-3' // SOLUTIONS WEEK
  },
  {
    id: 'evt-5',
    title: 'Exposing Greenwashing: False Solutions Forum',
    start_datetime: '2026-01-20T19:00:00',
    end_datetime: '2026-01-20T21:00:00',
    location: 'Online',
    country: 'Global',
    modality: 'Online',
    summary: 'Expert panel exposing false solutions like incineration, chemical recycling, and plastic offsetting schemes.',
    organizer_name: 'GAIA Global',
    poster_url: null,
    campaign_id: 'izwm-2026',
    weeklyTheme: 'week-4' // FALSE SOLUTIONS WEEK
  },
  {
    id: 'evt-6',
    title: 'Waste Worker Rights & Just Transition Summit',
    start_datetime: '2026-01-27T14:00:00',
    end_datetime: '2026-01-27T17:00:00',
    location: 'Mumbai',
    country: 'India',
    modality: 'Hybrid',
    summary: 'Celebrating waste pickers and advocating for fair wages, safe conditions, and recognition in the circular economy.',
    organizer_name: 'Waste Workers Alliance India',
    poster_url: null,
    campaign_id: 'izwm-2026',
    weeklyTheme: 'week-5' // HUMANS OF ZERO WASTE
  }
];

export const mockResources = [
  {
    id: 'res-1',
    title: 'Community Waste Audit Toolkit',
    description: 'Step-by-step guide to conducting waste audits with templates, data collection forms, and analysis tools.',
    type: 'Guide',
    fileUrl: '#',
    fileSize: '2.4 MB'
  },
  {
    id: 'res-2',
    title: 'Zero Waste Event Planning Guide',
    description: 'Comprehensive guide for organizing waste-free events, from festivals to conferences.',
    type: 'Guide',
    fileUrl: '#',
    fileSize: '1.8 MB'
  },
  {
    id: 'res-3',
    title: 'IZWM 2026 Social Media Graphics Pack',
    description: 'Ready-to-share graphics, banners, and templates for promoting International Zero Waste Month.',
    type: 'Social Media Pack',
    fileUrl: '#',
    fileSize: '15 MB'
  },
  {
    id: 'res-4',
    title: 'Zero Waste Poster Collection',
    description: 'High-resolution printable posters in multiple languages for community education.',
    type: 'Poster',
    fileUrl: '#',
    fileSize: '8.5 MB'
  },
  {
    id: 'res-5',
    title: 'Composting Basics Workshop Slides',
    description: 'Presentation slides and facilitator notes for teaching community composting.',
    type: 'Guide',
    fileUrl: '#',
    fileSize: '3.2 MB'
  },
  {
    id: 'res-6',
    title: 'Zero Waste Policy Advocacy Toolkit',
    description: 'Resources for advocating zero waste policies at local and national government levels.',
    type: 'Guide',
    fileUrl: '#',
    fileSize: '2.1 MB'
  }
];

