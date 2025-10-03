export const NAVIGATION_CONTENT = {
    items: [
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
    ],
    authButton: 'Sign In'
  } as const
  
  export const FOOTER_CONTENT = {
    links: {
      Product: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'API', href: '#api' },
      ],
      Company: [
        { label: 'About', href: '#about' },
        { label: 'Blog', href: '#blog' },
        { label: 'Careers', href: '#careers' },
      ],
      Support: [
        { label: 'Help Center', href: '#help' },
        { label: 'Contact', href: '#contact' },
        { label: 'Privacy', href: '#privacy' },
      ],
    },
    copyright: 'All rights reserved.'
  } as const

// src/constants/content.ts
export const APP_CONFIG = {
    name: 'PrecisionApply',
    tagline: 'Engineering resumes for interview success.',
    description: 'PrecisionApply engineers your resume to pass the ATS and impress the hiring manager. Get 75% more interviews with AI-powered optimization.'
  } as const
  
  export const HERO_CONTENT = {
    title: {
      prefix: 'From',
      highlighted: ['overlooked', 'interviewed'],
      suffix: 'to'
    },
    description: 'PrecisionApply engineers your resume to pass the ATS and impress the hiring manager. Get 75% more interviews with AI-powered optimization.',
    cta: {
      primary: 'Get Started Free',
      secondary: 'View Demo'
    },
    badges: [
      { icon: 'check', text: 'No credit card required' },
      { icon: 'check', text: 'Instant analysis' }
    ]
  } as const
  
  export const FEATURES_CONTENT = {
    title: 'Powerful Features for Resume Success',
    subtitle: 'Everything you need to optimize your resume and land more interviews',
    items: [
      {
        icon: 'score',
        title: 'ATS Score Simulator',
        description: 'Get real-time compatibility scores and see exactly how ATS systems will rank your resume.',
        score: 92
      },
      {
        icon: 'keywords',
        title: 'Keyword Gap Analysis',
        description: 'Discover missing keywords from job descriptions and get suggestions for natural integration.',
        keywords: ['Python', 'React', 'AWS', '+8']
      },
      {
        icon: 'ai',
        title: 'AI-Powered Suggestions',
        description: 'Get intelligent recommendations for improving content, formatting, and structure.'
      },
      {
        icon: 'check',
        title: 'Spell & Grammar Check',
        description: 'Ensure your resume is error-free with advanced spell checking and grammar analysis.'
      }
    ]
  } as const
  
  export const HOW_IT_WORKS_CONTENT = {
    title: 'How It Works',
    subtitle: 'Get your optimized resume in just 3 simple steps',
    steps: [
      {
        step: '1',
        title: 'Upload Resume',
        description: 'Simply drag and drop your current resume or paste the job description you\'re targeting.',
        icon: 'upload'
      },
      {
        step: '2',
        title: 'Get Instant Analysis',
        description: 'Our AI analyzes your resume against ATS requirements and provides detailed insights.',
        icon: 'analysis'
      },
      {
        step: '3',
        title: 'Download Optimized Resume',
        description: 'Download your ATS-optimized resume and start getting more interviews immediately.',
        icon: 'download'
      }
    ]
  } as const
  
  export const SOCIAL_PROOF_CONTENT = {
    title: 'Trusted by Job Seekers Worldwide',
    companySection: {
        title: 'Our users have been hired by:',
        companies: ['Google', 'Microsoft', 'Amazon', 'Apple', 'Meta']
    },
    stats: [
      { value: '75%', label: 'Higher Interview Rate', color: 'emerald' },
      { value: '50K+', label: 'Resumes Optimized', color: 'sky' },
      { value: '4.9/5', label: 'User Rating', color: 'amber' }
    ],
    testimonials: [
      {
        name: 'Sarah Chen',
        role: 'Software Engineer',
        content: 'PrecisionApply helped me land 3 interviews in my first week. The ATS optimization really works!',
        initial: 'S',
        gradient: 'from-purple-500 to-pink-500'
      },
      {
        name: 'Marcus Johnson',
        role: 'Marketing Manager',
        content: 'The keyword analysis was a game-changer. I finally understood what recruiters were looking for.',
        initial: 'M',
        gradient: 'from-blue-500 to-cyan-500'
      },
      {
        name: 'Aisha Patel',
        role: 'Data Analyst',
        content: 'Went from 0 responses to multiple offers. This tool is worth every penny!',
        initial: 'A',
        gradient: 'from-emerald-500 to-teal-500'
      }
    ],
    companies: ['Google', 'Microsoft', 'Amazon', 'Apple', 'Meta']
  } as const
  
  export const CTA_CONTENT = {
    title: 'Ready to Transform Your Resume?',
    subtitle: 'Join thousands of professionals who\'ve boosted their interview rates with PrecisionApply',
    buttons: {
      primary: 'Start Free Analysis',
      secondary: 'View Pricing Plans'
    }
  } as const
  
  export const DASHBOARD_PREVIEW = {
    title: 'Resume Analysis',
    score: 87,
    stats: [
      { value: '12', label: 'Keywords Added', color: 'sky' },
      { value: '+45%', label: 'Match Rate', color: 'emerald' }
    ]
  } as const