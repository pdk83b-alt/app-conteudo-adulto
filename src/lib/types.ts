export interface Creator {
  id: string
  name: string
  username: string
  avatar: string
  isOnline: boolean
  subscribers: number
  category: 'Premium' | 'VIP' | 'Exclusive'
  description?: string
  price?: number
  rating?: number
}

export interface ChatMessage {
  id: string
  senderId: string
  receiverId: string
  content: string
  timestamp: Date
  isRead: boolean
  type: 'text' | 'image' | 'video'
}

export interface Conversation {
  id: string
  creatorId: string
  lastMessage?: ChatMessage
  unreadCount: number
  isActive: boolean
}

export interface User {
  id: string
  username: string
  avatar?: string
  isAnonymous: boolean
  subscriptions: string[]
  preferences: {
    darkMode: boolean
    showOnlineOnly: boolean
    notifications: boolean
  }
}

export interface Subscription {
  id: string
  creatorId: string
  userId: string
  startDate: Date
  endDate: Date
  isActive: boolean
  price: number
}

export type TabType = 'home' | 'feed' | 'trending' | 'chat' | 'menu'

export interface AppState {
  activeTab: TabType
  user: User | null
  isAgeVerified: boolean
  searchQuery: string
  showOnlineOnly: boolean
}