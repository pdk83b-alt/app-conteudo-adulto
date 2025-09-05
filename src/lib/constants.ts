export const APP_CONFIG = {
  name: 'PrivateHub',
  version: '1.0.0',
  description: 'Plataforma de conteúdo adulto com foco em privacidade',
  minAge: 18,
  supportEmail: 'support@privatehub.com',
  maxFileSize: 50 * 1024 * 1024, // 50MB
  allowedImageTypes: ['image/jpeg', 'image/png', 'image/webp'],
  allowedVideoTypes: ['video/mp4', 'video/webm', 'video/mov'],
  maxImageDimensions: {
    width: 4096,
    height: 4096
  },
  maxVideoDuration: 300, // 5 minutes in seconds
}

export const PRIVACY_LEVELS = {
  PUBLIC: 'public',
  SUBSCRIBERS: 'subscribers',
  PREMIUM: 'premium',
  PRIVATE: 'private'
} as const

export const CONTENT_CATEGORIES = [
  'Fotos',
  'Vídeos',
  'Live Streams',
  'Mensagens',
  'Áudio',
  'Textos',
  'Personalizado'
] as const

export const SUBSCRIPTION_TIERS = [
  {
    name: 'Básico',
    price: 9.99,
    features: [
      'Acesso a conteúdo básico',
      'Mensagens limitadas',
      'Suporte por email'
    ]
  },
  {
    name: 'Premium',
    price: 19.99,
    features: [
      'Acesso a todo conteúdo',
      'Mensagens ilimitadas',
      'Lives exclusivas',
      'Suporte prioritário'
    ]
  },
  {
    name: 'VIP',
    price: 49.99,
    features: [
      'Acesso total',
      'Conteúdo personalizado',
      'Videochamadas',
      'Suporte 24/7'
    ]
  }
] as const

export const PAYMENT_METHODS = [
  'PIX',
  'Cartão de Crédito',
  'Cartão de Débito',
  'Boleto',
  'Transferência Bancária'
] as const

export const NOTIFICATION_TYPES = {
  NEW_FOLLOWER: 'new_follower',
  NEW_LIKE: 'new_like',
  NEW_COMMENT: 'new_comment',
  NEW_MESSAGE: 'new_message',
  NEW_PURCHASE: 'new_purchase',
  NEW_SUBSCRIPTION: 'new_subscription',
  CONTENT_APPROVED: 'content_approved',
  CONTENT_REJECTED: 'content_rejected',
  PAYOUT_PROCESSED: 'payout_processed'
} as const

export const USER_ROLES = {
  USER: 'user',
  CREATOR: 'creator',
  MODERATOR: 'moderator',
  ADMIN: 'admin'
} as const

export const CONTENT_STATUS = {
  DRAFT: 'draft',
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  ARCHIVED: 'archived'
} as const

export const REPORT_REASONS = [
  'Conteúdo inadequado',
  'Spam',
  'Assédio',
  'Violação de direitos autorais',
  'Conteúdo ilegal',
  'Perfil falso',
  'Outros'
] as const