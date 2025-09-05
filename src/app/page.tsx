"use client"

import { useState } from 'react'
import { Search, Bell, Heart, MessageCircle, Share, MoreHorizontal, Home, Circle, MessageSquare, Menu, Play, Eye, EyeOff, Shield, User, Settings, Plus, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface Post {
  id: string
  username: string
  displayName: string
  avatar: string
  isVerified: boolean
  isAnonymous: boolean
  content: {
    type: 'image' | 'video'
    url: string
    thumbnail?: string
  }
  likes: number
  comments: number
  shares: number
  timestamp: string
  price?: number
  isLocked: boolean
}

const mockPosts: Post[] = [
  {
    id: '1',
    username: 'anonymous_user_1',
    displayName: 'Usuário Anônimo',
    avatar: '',
    isVerified: true,
    isAnonymous: true,
    content: {
      type: 'video',
      url: '/placeholder-video.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=600&fit=crop'
    },
    likes: 234,
    comments: 45,
    shares: 12,
    timestamp: '2h',
    price: 15.99,
    isLocked: true
  },
  {
    id: '2',
    username: 'creator_verified',
    displayName: 'Creator Premium',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
    isVerified: true,
    isAnonymous: false,
    content: {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=600&fit=crop'
    },
    likes: 567,
    comments: 89,
    shares: 23,
    timestamp: '4h',
    price: 9.99,
    isLocked: false
  }
]

export default function AdultContentApp() {
  const [activeTab, setActiveTab] = useState('feed')
  const [searchQuery, setSearchQuery] = useState('')
  const [showAnonymous, setShowAnonymous] = useState(true)

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k'
    }
    return num.toString()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-orange-500">PrivateHub</h1>
            <Badge variant="outline" className="text-orange-500 border-orange-500">
              18+
            </Badge>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Buscar criadores..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-900 border-gray-700 text-white placeholder-gray-400 w-64"
              />
            </div>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Shield className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Privacy Controls */}
      <div className="p-4 bg-gray-900/50 border-b border-gray-800">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <Button
              variant={showAnonymous ? "default" : "outline"}
              size="sm"
              onClick={() => setShowAnonymous(!showAnonymous)}
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              {showAnonymous ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
              Modo Anônimo
            </Button>
            <Button variant="outline" size="sm" className="border-gray-600 text-gray-300">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>
          
          <div className="text-sm text-gray-400">
            <Shield className="w-4 h-4 inline mr-1" />
            Navegação privada ativa
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4">
        <div className="space-y-6">
          {mockPosts.map((post) => (
            <Card key={post.id} className="bg-gray-900 border-gray-800 overflow-hidden">
              <CardContent className="p-0">
                {/* Post Header */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={post.isAnonymous ? '' : post.avatar} />
                      <AvatarFallback className="bg-gray-700">
                        {post.isAnonymous ? '?' : post.displayName[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">
                          {post.isAnonymous ? 'Usuário Anônimo' : post.displayName}
                        </span>
                        {post.isVerified && (
                          <Badge className="bg-orange-600 text-white text-xs px-1 py-0">
                            ✓
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>@{post.username}</span>
                        <span>•</span>
                        <span>{post.timestamp}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                    <MoreHorizontal className="w-5 h-5" />
                  </Button>
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="aspect-[4/5] bg-gray-800 relative overflow-hidden">
                    <img
                      src={post.content.thumbnail || post.content.url}
                      alt="Content"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay for locked content */}
                    {post.isLocked && (
                      <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                        <div className="text-center">
                          <div className="bg-orange-600 rounded-full p-4 mb-4 mx-auto w-fit">
                            <Shield className="w-8 h-8 text-white" />
                          </div>
                          <p className="text-white font-semibold mb-2">Conteúdo Premium</p>
                          <p className="text-gray-300 text-sm mb-4">
                            Desbloqueie por R$ {post.price?.toFixed(2)}
                          </p>
                          <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                            Desbloquear
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Play button for videos */}
                    {post.content.type === 'video' && !post.isLocked && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button
                          size="icon"
                          className="bg-black/50 hover:bg-black/70 rounded-full w-16 h-16"
                        >
                          <Play className="w-8 h-8 text-white" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500 p-0">
                        <Heart className="w-5 h-5 mr-2" />
                        {formatNumber(post.likes)}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-500 p-0">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        {formatNumber(post.comments)}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-green-500 p-0">
                        <Share className="w-5 h-5 mr-2" />
                        {formatNumber(post.shares)}
                      </Button>
                    </div>
                    
                    {post.price && (
                      <Badge variant="outline" className="text-orange-500 border-orange-500">
                        R$ {post.price.toFixed(2)}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-gray-800">
        <div className="flex items-center justify-around p-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setActiveTab('feed')}
            className={`flex flex-col items-center gap-1 ${
              activeTab === 'feed' ? 'text-orange-500' : 'text-gray-400'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs">Feed</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setActiveTab('trending')}
            className={`flex flex-col items-center gap-1 ${
              activeTab === 'trending' ? 'text-orange-500' : 'text-gray-400'
            }`}
          >
            <Circle className="w-5 h-5" />
            <span className="text-xs">Em Alta</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setActiveTab('create')}
            className="flex flex-col items-center gap-1 text-orange-500 bg-orange-600/20 rounded-full p-3"
          >
            <Plus className="w-6 h-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setActiveTab('messages')}
            className={`flex flex-col items-center gap-1 ${
              activeTab === 'messages' ? 'text-orange-500' : 'text-gray-400'
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            <span className="text-xs">Chat</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center gap-1 ${
              activeTab === 'profile' ? 'text-orange-500' : 'text-gray-400'
            }`}
          >
            <User className="w-5 h-5" />
            <span className="text-xs">Perfil</span>
          </Button>
        </div>
      </nav>

      {/* Spacer for bottom navigation */}
      <div className="h-20"></div>
    </div>
  )
}