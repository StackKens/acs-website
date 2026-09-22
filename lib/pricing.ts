export interface PricingPlan {
  id: string
  name: string
  price: number | null
  currency: string
  billing: string
  pupilLimit: string
  description: string
  features: string[]
  emphasis?: boolean
  cta: string
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 90000,
    currency: 'UGX',
    billing: 'per term',
    pupilLimit: 'Up to 200 pupils',
    description: 'Designed for smaller primary schools that need the essential tools for managing everyday school operations.',
    features: [
      'Pupil management',
      'Pupil records',
      'Class management',
      'Attendance management',
      'Academic performance',
      'Basic reports',
      'Basic school administration'
    ],
    cta: 'Get Started'
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 165000,
    currency: 'UGX',
    billing: 'per term',
    pupilLimit: '201–500 pupils',
    description: 'Designed for growing schools that need broader management and reporting capabilities.',
    features: [
      'Everything in Starter',
      'Teacher and staff management',
      'Advanced reports',
      'Parent features',
      'Additional administration tools',
      'Improved reporting and analytics',
      'Expanded school management capabilities'
    ],
    emphasis: true,
    cta: 'Get Started'
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 265000,
    currency: 'UGX',
    billing: 'per term',
    pupilLimit: '501–1,000 pupils',
    description: 'Designed for larger schools that need advanced management, reporting and communication capabilities.',
    features: [
      'Everything in Growth',
      'Advanced analytics',
      'Communication features',
      'Finance features where available',
      'Advanced administration',
      'Priority support',
      'Higher operational limits'
    ],
    cta: 'Get Started'
  }
]

export const largeSchoolsPlan = {
  pupilLimit: '1,000+ pupils',
  description: 'Need ACS for a larger school? Contact our team to discuss a plan that fits your school\'s size and requirements.',
  cta: 'Talk to Us'
}

export const comparisonCategories = {
  'School Management': [
    'Pupil management',
    'Class management',
    'Attendance',
    'Academic performance',
    'Basic reports',
    'School administration'
  ],
  'Staff & Administration': [
    'Teacher and staff management',
    'Advanced administration',
    'Additional administration tools'
  ],
  'Parents & Communication': [
    'Parent features',
    'Communication features'
  ],
  'Reporting & Analytics': [
    'Basic reports',
    'Advanced reports',
    'Improved reporting and analytics',
    'Advanced analytics'
  ],
  'Finance': [
    'Finance features where available'
  ]
}

export const billingSteps = [
  {
    number: 1,
    title: 'Choose your plan',
    description: 'Select the package that fits your school\'s size and requirements.'
  },
  {
    number: 2,
    title: 'Set up your school',
    description: 'Create your ACS school workspace and configure your school.'
  },
  {
    number: 3,
    title: 'Use ACS',
    description: 'Manage your pupils, staff, attendance, academic information and other supported operations.'
  },
  {
    number: 4,
    title: 'Continue after the free period',
    description: 'After the 2-month introductory offer, your school continues according to the selected plan\'s normal pricing.'
  }
]

export const faqs = [
  {
    question: 'How much does ACS cost?',
    answer: 'ACS pricing is based on your school\'s size. Starter plan is UGX 75,000 per term for up to 200 pupils, Growth is UGX 150,000 per term for 201-500 pupils, and Professional is UGX 250,000 per term for 501-1,000 pupils. For schools with more than 1,000 pupils, contact our team for a custom plan.'
  },
  {
    question: 'What does "per term" mean?',
    answer: 'ACS pricing is billed per academic term. A term is typically one of the three main academic periods in the school year.'
  },
  {
    question: 'How does the 2-month free offer work?',
    answer: 'The first 20 schools to join ACS receive 2 months free on their selected plan. Our team will confirm eligibility and the next steps with you.'
  },
  {
    question: 'What happens when the 2 months end?',
    answer: 'After the 2-month introductory offer, your school continues on your selected plan at the normal per-term price.'
  },
  {
    question: 'Can our school change plans?',
    answer: 'Yes. As your school grows or your needs change, you can move to a higher plan. We can discuss the best time to upgrade when your pupil count increases or you need additional features.'
  },
  {
    question: 'What if our school has more than 1,000 pupils?',
    answer: 'Contact our team to discuss a custom plan that fits your school\'s size and specific requirements.'
  },
  {
    question: 'Can we get help setting up our school?',
    answer: 'Yes. Our team will help you set up your school workspace and get started with ACS during onboarding.'
  }
]
