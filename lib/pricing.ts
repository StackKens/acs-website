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
    price: 150000,
    currency: 'UGX',
    billing: 'per term',
    pupilLimit: 'Up to 200 pupils',
    description: 'Designed for smaller primary schools that need the essential tools for managing everyday school operations.',
    features: [
      'Pupil management & records',
      'Class & stream management',
      'Daily attendance roll call',
      'Exams & performance tracking',
      'Basic report summaries',
      'Dedicated school workspace',
      'AI-powered academic assistance'
    ],
    cta: 'Get Started'
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 250000,
    currency: 'UGX',
    billing: 'per term',
    pupilLimit: '201–500 pupils',
    description: 'Designed for growing schools that need broader management, fee tracking, and reporting capabilities.',
    features: [
      'Everything in Starter',
      'Fees & payment tracking',
      'Teacher & staff allocations',
      'Official printable report cards',
      'Parent contacts & records',
      'Expanded term analytics',
      'AI-powered academic assistance'
    ],
    emphasis: true,
    cta: 'Get Started'
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 400000,
    currency: 'UGX',
    billing: 'per term',
    pupilLimit: '501–1,000 pupils',
    description: 'Designed for larger schools that need advanced management, reporting, communication, and priority support.',
    features: [
      'Everything in Growth',
      'Automated SMS notifications to parents',
      'Advanced finance & ledger reporting',
      'Role-based permissions & audit trails',
      'Priority onboarding & technical support',
      'Higher operational limits',
      'AI-powered academic assistance'
    ],
    cta: 'Get Started'
  }
]

export const largeSchoolsPlan = {
  pupilLimit: '1,001+ pupils',
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
    answer: 'ACS pricing is based on your school\'s size. Starter plan is UGX 150,000 per term for up to 200 pupils, Growth is UGX 250,000 per term for 201–500 pupils, and Professional is UGX 400,000 per term for 501–1,000 pupils. For schools with more than 1,000 pupils, contact our team for a custom plan.'
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
  },
  {
    question: 'What can the ACS AI assistant help with?',
    answer: 'The AI assistant helps teachers create exercises, quizzes, revision materials, lesson-support resources, explanations and marking guides for primary education. It is designed to assist with preparation and routine academic tasks.'
  },
  {
    question: 'Does the AI replace teachers?',
    answer: 'No. The AI is designed to assist teachers with preparation and routine academic tasks. Teachers remain in control of reviewing and using the generated material in the classroom.'
  },
  {
    question: 'Which primary levels does the AI support?',
    answer: 'The AI is designed to support academic work across Primary 1 to Primary 7, helping teachers adapt material to different class levels and difficulty requirements.'
  }
]
