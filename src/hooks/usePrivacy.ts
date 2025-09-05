"use client"

import { useState, useEffect } from 'react'
import { User, PrivacySettings } from '@/lib/types'

interface UsePrivacyReturn {
  privacySettings: PrivacySettings
  updatePrivacySettings: (settings: Partial<PrivacySettings>) => void
  isAnonymous: boolean
  toggleAnonymous: () => void
  canViewContent: (contentUserId: string, isLocked: boolean) => boolean
}

export function usePrivacy(user?: User): UsePrivacyReturn {
  const [privacySettings, setPrivacySettings] = useState<PrivacySettings>({
    showRealName: false,
    allowDirectMessages: true,
    showOnlineStatus: false,
    allowScreenshots: false,
    requirePaymentForMessages: false,
    blockedUsers: []
  })

  const [isAnonymous, setIsAnonymous] = useState(true)

  useEffect(() => {
    // Load privacy settings from localStorage or API
    const savedSettings = localStorage.getItem('privacySettings')
    if (savedSettings) {
      setPrivacySettings(JSON.parse(savedSettings))
    }

    const savedAnonymous = localStorage.getItem('isAnonymous')
    if (savedAnonymous) {
      setIsAnonymous(JSON.parse(savedAnonymous))
    }
  }, [])

  const updatePrivacySettings = (newSettings: Partial<PrivacySettings>) => {
    const updatedSettings = { ...privacySettings, ...newSettings }
    setPrivacySettings(updatedSettings)
    localStorage.setItem('privacySettings', JSON.stringify(updatedSettings))
  }

  const toggleAnonymous = () => {
    const newAnonymous = !isAnonymous
    setIsAnonymous(newAnonymous)
    localStorage.setItem('isAnonymous', JSON.stringify(newAnonymous))
  }

  const canViewContent = (contentUserId: string, isLocked: boolean): boolean => {
    if (!user) return false
    
    // User can always view their own content
    if (user.id === contentUserId) return true
    
    // Check if user is blocked
    if (privacySettings.blockedUsers.includes(contentUserId)) return false
    
    // If content is locked, user needs to have purchased it or be subscribed
    if (isLocked) {
      // This would typically check against a purchases/subscriptions database
      return false
    }
    
    return true
  }

  return {
    privacySettings,
    updatePrivacySettings,
    isAnonymous,
    toggleAnonymous,
    canViewContent
  }
}