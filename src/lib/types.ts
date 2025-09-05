export interface User {
  id: string
  username: string
  displayName: string
  avatar?: string
  isVerified: boolean
  isAnonymous: boolean
  bio?: string
  followers: number
  following: number
  totalEarnings?: number
  subscriptionPrice?: number
}

export interface Post {
  id: string
  userId: string
  username: string
  displayName: string
  avatar?: string
  isVerified: boolean
  isAnonymous: boolean
  content: {
    type: 'image' | 'video' | 'text'
    url?: string
    thumbnail?: string
    text?: string
  }
  likes: number
  comments: number
  shares: number
  timestamp: string
  price?: number
  isLocked: boolean
  tags?: string[]
  isNSFW: boolean
}

export interface Comment {
  id: string
  postId: string
  userId: string
  username: string
  displayName: string
  avatar?: string
  isAnonymous: boolean
  content: string
  timestamp: string
  likes: number
}

export interface Transaction {
  id: string
  userId: string
  postId?: string
  type: 'purchase' | 'subscription' | 'tip' | 'withdrawal'
  amount: number
  status: 'pending' | 'completed' | 'failed'
  timestamp: string
  description: string
}

export interface PrivacySettings {
  showRealName: boolean
  allowDirectMessages: boolean
  showOnlineStatus: boolean
  allowScreenshots: boolean
  requirePaymentForMessages: boolean
  blockedUsers: string[]
}

export interface ContentFilter {
  categories: string[]
  priceRange: {
    min: number
    max: number
  }
  contentType: ('image' | 'video' | 'text')[]
  verified: boolean
  anonymous: boolean
}