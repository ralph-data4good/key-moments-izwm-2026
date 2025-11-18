// Configuration file for IZWM 2026 content
// Makes it easy to update copy without touching components

export const KEY_MOMENT_IZWM_2026 = 'izwm-2026';

export const heroContent = {
  title: 'International Zero Waste Month 2026',
  theme: 'Zero Waste Finance: Investing in Zero Waste',
  tagline: '#InvestInZeroWaste: Mobilizing resources to support action and accelerate impact.',
  subtitle: 'A global celebration of zero waste solutions across Asia and beyond. Join communities, organizations, and changemakers working together for a waste-free future.',
  metadata: 'January 2026 · Global · Online and In-Person Events',
  stats: [
    { value: '40+', label: 'Countries' },
    { value: '300+', label: 'Events' },
    { value: '10K+', label: 'Participants' }
  ]
};

export const aboutContent = {
  event: {
    title: 'About International Zero Waste Month',
    description: `International Zero Waste Month (IZWM) is a global key moment organized by the Global Alliance for Incinerator Alternatives (GAIA) and partners worldwide. Throughout January, communities, cities, and organizations come together to celebrate and advance zero waste solutions—from waste reduction and reuse systems to composting and circular economy initiatives.

    IZWM amplifies the voices of waste workers, grassroots movements, and local leaders who are building regenerative systems that respect people and planet. It's a time to showcase what's working, share knowledge across borders, and mobilize collective action for a world without waste.`,
  },
  objectives: [
    'Celebrate community-led zero waste initiatives',
    'Share best practices and solutions across Asia',
    'Amplify the voices of waste pickers and frontline workers'
  ]
};

export const historyContent = [
  {
    year: 2023,
    title: 'Building the Foundations of Zero Waste',
    summary: 'The inaugural International Zero Waste Month brought together 150+ events across 25 countries, highlighting the growing momentum for zero waste solutions in Asia.',
    link: '#',
    highlights: [
      '150+ events across 25 countries',
      'Launch of Zero Waste Cities Network',
      '5,000+ participants'
    ]
  },
  {
    year: 2024,
    title: 'Scaling Community Solutions',
    summary: 'IZWM 2024 doubled in size, featuring waste audits, film screenings, policy dialogues, and hands-on workshops that equipped communities with practical zero waste tools.',
    link: '#',
    highlights: [
      '250+ events across 35 countries',
      'Waste audit toolkit launched',
      '8,000+ participants'
    ]
  },
  {
    year: 2025,
    title: 'Amplifying Grassroots Voices',
    summary: 'IZWM 2025 celebrated community-led initiatives, waste picker rights, and circular economy innovations with over 300 events worldwide.',
    link: '#',
    highlights: [
      '300+ events across 40 countries',
      'First Global Waste Picker Summit',
      '10,000+ participants'
    ]
  }
];

export const partnerOrganizations = [
  { name: 'Global Alliance for Incinerator Alternatives (GAIA)', country: 'Global', logo: '🌍' },
  { name: 'Zero Waste Europe', country: 'Europe', logo: '♻️' },
  { name: 'Break Free From Plastic', country: 'Global', logo: '🌊' },
  { name: 'Greenpeace Asia', country: 'Asia', logo: '🌱' },
  { name: 'Waste Workers Alliance', country: 'Global', logo: '👷' },
  { name: 'Community Composting Network', country: 'Asia-Pacific', logo: '🌿' },
  { name: 'Circular Economy Hub', country: 'Southeast Asia', logo: '🔄' },
  { name: 'Zero Waste Cities Alliance', country: 'Global', logo: '🏙️' },
];

// Weekly Themes for IZWM 2026
export const weeklyThemes = [
  {
    id: 'week-1',
    week: 'Week 1',
    dates: 'Jan 1-3',
    title: 'LAUNCH',
    description: 'Kickstart International Zero Waste Month with launch events and awareness campaigns.',
    color: '#8B5CF6', // Purple
    dateRange: { start: '2026-01-01', end: '2026-01-03' }
  },
  {
    id: 'week-2',
    week: 'Week 2',
    dates: 'Jan 4-10',
    title: 'BARRIERS TO ZERO WASTE',
    subtitle: '(Refuse Single-Use Day)',
    description: 'Identify and address barriers preventing zero waste adoption. Highlight alternatives to single-use plastics.',
    color: '#EF4444', // Red
    dateRange: { start: '2026-01-04', end: '2026-01-10' }
  },
  {
    id: 'week-3',
    week: 'Week 3',
    dates: 'Jan 11-17',
    title: 'SOLUTIONS WEEK',
    subtitle: '(Reuse, etc)',
    description: 'Showcase proven zero waste solutions: reuse systems, composting, repair initiatives, and circular models.',
    color: '#10B981', // Green
    dateRange: { start: '2026-01-11', end: '2026-01-17' }
  },
  {
    id: 'week-4',
    week: 'Week 4',
    dates: 'Jan 18-24',
    title: 'FALSE SOLUTIONS WEEK',
    description: 'Expose greenwashing and false solutions like incineration, chemical recycling, and plastic credits.',
    color: '#EC4899', // Pink
    dateRange: { start: '2026-01-18', end: '2026-01-24' }
  },
  {
    id: 'week-5',
    week: 'Week 5',
    dates: 'Jan 25-31',
    title: 'HUMANS OF ZERO WASTE',
    subtitle: '(Just Transition)',
    description: 'Celebrate waste workers, community leaders, and grassroots movements building a just transition.',
    color: '#3B82F6', // Blue
    dateRange: { start: '2026-01-25', end: '2026-01-31' }
  }
];

// Featured Quote
export const featuredQuote = {
  quote: "...the world urgently needs to shift to a Zero Waste Approach...",
  author: "Joé Lemmers",
  role: "Lead Author, UNEP Global Waste Management Outlook",
  link: "https://www.unep.org/resources/global-waste-management-outlook-2024"
};

// Get Involved Action Cards
export const getInvolvedCards = [
  {
    id: 'join-event',
    type: 'action',
    title: 'Join an Event',
    subtitle: 'Take Action',
    description: 'Participate in the series of activities in the celebration of IZWM as Zero Waste Month.',
    icon: 'Calendar',
    cta: 'View Calendar',
    link: '#events',
    color: '#D4A23D', // Gold
    visual: 'event'
  },
  {
    id: 'join-conversation',
    type: 'action',
    title: 'Join the Conversation',
    subtitle: 'Make #ZeroWasteClimate/ClimateSolution trend!',
    description: 'Take part in the conversation on using #IZWM2026 and #InvestInZeroWaste.',
    icon: 'Users',
    cta: 'Take Action',
    link: 'https://www.facebook.com/hashtag/izwm2026',
    color: '#4A8FC7', // Blue
    visual: 'conversation'
  },
  {
    id: 'quote',
    type: 'quote',
    quote: featuredQuote.quote,
    author: featuredQuote.author,
    role: featuredQuote.role,
    link: featuredQuote.link,
    cta: 'Joé Lemmers',
    color: '#6BB5E8' // Sky blue
  },
  {
    id: 'composting',
    type: 'resource',
    title: 'Back to Earth: Composting for Various Contexts',
    description: 'Explore the benefits of composting, and it is most effective implementation within your community.',
    icon: 'BookOpen',
    cta: 'Learn More',
    link: '#toolkit',
    color: '#5B8C5A', // Green
    visual: 'composting'
  },
  {
    id: 'refuse-single-use',
    type: 'campaign',
    title: 'Join the Refuse Single Use Day',
    subtitle: 'January 8 is Refuse Single Use Day',
    description: 'Get ready to join us and #ChooseToReuse in 2026 by refusing single use plastics or paper and bringing your own reusable while also pressuring your friends to do the same.',
    icon: 'Target',
    cta: 'Share Your Picture',
    link: '#',
    color: '#EF4444', // Red
    visual: 'refuse'
  },
  {
    id: 'video',
    type: 'video',
    title: 'The History of Zero Waste Month',
    description: 'Watch the journey of IZWM from 2023 to today',
    videoId: 'example-video-id',
    thumbnail: 'https://img.youtube.com/vi/example-video-id/maxresdefault.jpg',
    cta: 'Watch Video',
    link: '#',
    color: '#8B5CF6' // Purple
  }
];

export const actionItems = [
  {
    id: 'action-1',
    title: 'Invest in Zero Waste Solutions',
    description: 'Support community-led initiatives, reuse systems, and circular economy projects that need financial backing to scale.',
    link: '#',
    icon: 'Target'
  },
  {
    id: 'action-2',
    title: 'Join a Zero Waste Campaign',
    description: 'Connect with grassroots movements working on waste reduction, plastic-free initiatives, and policy advocacy.',
    link: '#',
    icon: 'Users'
  },
  {
    id: 'action-3',
    title: 'Host a Film Screening or Dialogue',
    description: 'Use our curated film list and discussion guides to spark conversations about waste finance and community solutions.',
    link: '#',
    icon: 'BookOpen'
  },
  {
    id: 'action-4',
    title: 'Support Waste Workers',
    description: 'Advocate for fair wages, safe conditions, and recognition of waste pickers who are essential to the circular economy.',
    link: '#',
    icon: 'Heart'
  }
];

