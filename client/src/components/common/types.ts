interface TestimonialCardProps {
    name: string
    role: string
    content: string
    initial: string
    gradient: string
  }
export type { TestimonialCardProps }

interface StepCardProps {
    step: string
    title: string
    description: string
    icon: string
    index: number
  }

export type { StepCardProps }

interface FeatureCardProps {
    icon: string
    title: string
    description: string
    score?: number
    keywords?: readonly string[]
  }

export type { FeatureCardProps }

interface DashboardPreviewProps {
    title: string
    score: number
    stats: ReadonlyArray<{ value: string; label: string; color: string }>
  }

export type { DashboardPreviewProps }