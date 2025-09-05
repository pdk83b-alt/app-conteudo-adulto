"use client"

import { useState } from 'react'
import { Search, Bell, Users, MessageCircle, TrendingUp, Grid3X3, Video, User, Settings, LogOut, Eye, EyeOff } from 'lucide-react'

interface Creator {
  id: string
  name: string
  username: string
  avatar: string
  isOnline: boolean
  subscribers: number
  category: string
}

const mockCreators: Creator[] = [
  {
    id: '1',
    name: 'Luna',
    username: '@luna_star',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    isOnline: true,
    subscribers: 12500,
    category: 'Premium'
  },
  {
    id: '2',
    name: 'Sophia',
    username: '@sophia_vip',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    isOnline: false,
    subscribers: 8900,
    category: 'Exclusive'
  },
  {
    id: '3',
    name: 'Maya',
    username: '@maya_dreams',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    isOnline: true,
    subscribers: 15200,
    category: 'VIP'
  },
  {
    id: '4',
    name: 'Aria',
    username: '@aria_angel',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    isOnline: true,
    subscribers: 9800,
    category: 'Premium'
  }
]

export default function PrivateHub() {
  const [activeTab, setActiveTab] = useState('home')
  const [darkMode, setDarkMode] = useState(true)
  const [showOnlineOnly, setShowOnlineOnly] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isAgeVerified, setIsAgeVerified] = useState(false)

  const filteredCreators = mockCreators.filter(creator => {
    const matchesSearch = creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         creator.username.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesOnline = !showOnlineOnly || creator.isOnline
    return matchesSearch && matchesOnline
  })

  if (!isAgeVerified) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-6">🔞</div>
          <h1 className="text-2xl font-bold text-white mb-4">Private Hub 18+</h1>
          <p className="text-gray-300 mb-6">
            Este conteúdo é destinado apenas para maiores de 18 anos. 
            Confirme sua idade para continuar.
          </p>
          <div className="space-y-4">
            <button
              onClick={() => setIsAgeVerified(true)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Sou maior de 18 anos
            </button>
            <button
              onClick={() => window.close()}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Sair
            </button>
          </div>
        </div>
      </div>
    )
  }

  const renderHome = () => (
    <div className="space-y-6">
      {/* Top Creators Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6">
        <h2 className="text-white font-bold text-lg mb-4">Top creators da semana</h2>
        <div className="flex space-x-3 mb-4">
          {mockCreators.slice(0, 3).map((creator) => (
            <div key={creator.id} className="relative">
              <img
                src={creator.avatar}
                alt={creator.name}
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              {creator.isOnline && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              )}
            </div>
          ))}
        </div>
        <button className="bg-white text-orange-500 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
          Quer faturar de onde estiver?
        </button>
      </div>

      {/* Creators Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredCreators.map((creator) => (
          <div key={creator.id} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors cursor-pointer">
            <div className="relative h-48">
              <img
                src={creator.avatar}
                alt={creator.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold">{creator.name}</h3>
                    <p className="text-gray-300 text-sm">{creator.username}</p>
                    <p className="text-orange-400 text-xs">{creator.subscribers.toLocaleString()} seguidores</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {creator.isOnline && (
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    )}
                    <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                      {creator.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderChat = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-white font-bold text-xl">Conversas</h2>
        <div className="flex items-center space-x-2">
          <span className="text-gray-300 text-sm">Apenas online</span>
          <button
            onClick={() => setShowOnlineOnly(!showOnlineOnly)}
            className={`w-12 h-6 rounded-full transition-colors ${
              showOnlineOnly ? 'bg-orange-500' : 'bg-gray-600'
            }`}
          >
            <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
              showOnlineOnly ? 'translate-x-6' : 'translate-x-1'
            }`}></div>
          </button>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Buscar conversas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {filteredCreators.length === 0 ? (
        <div className="text-center py-12">
          <MessageCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">Sem conversas</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredCreators.map((creator) => (
            <div key={creator.id} className="bg-gray-900 rounded-lg p-4 hover:bg-gray-800 transition-colors cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={creator.avatar}
                    alt={creator.name}
                    className="w-12 h-12 rounded-full"
                  />
                  {creator.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold">{creator.name}</h3>
                  <p className="text-gray-400 text-sm">{creator.isOnline ? 'Online' : 'Offline'}</p>
                </div>
                <div className="text-gray-500">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              FE
            </div>
            <div>
              <h2 className="text-white font-bold text-xl">Felipe</h2>
              <p className="text-gray-400">Usuário Anônimo</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-300">Modo escuro</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-6 rounded-full transition-colors ${
                darkMode ? 'bg-orange-500' : 'bg-gray-600'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                darkMode ? 'translate-x-6' : 'translate-x-1'
              }`}></div>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6">
        <div className="flex space-x-2 mb-4">
          {mockCreators.slice(0, 4).map((creator) => (
            <img
              key={creator.id}
              src={creator.avatar}
              alt={creator.name}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          ))}
        </div>
        <h3 className="text-white font-bold text-lg mb-2">
          Quer faturar de onde estiver com a Privacy?
        </h3>
        <button className="bg-white text-orange-500 font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
          Seja creator agora
        </button>
      </div>

      <div>
        <h3 className="text-white font-bold text-lg mb-4">Área do Assinante</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors cursor-pointer">
            <MessageCircle className="w-8 h-8 text-orange-500 mb-3" />
            <h4 className="text-white font-bold mb-2">Chat</h4>
            <p className="text-gray-400 text-sm">Converse com creators agora</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors cursor-pointer">
            <Users className="w-8 h-8 text-orange-500 mb-3" />
            <h4 className="text-white font-bold mb-2">Assinaturas</h4>
            <p className="text-gray-400 text-sm">Veja os creators que você assina</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors cursor-pointer">
            <Eye className="w-8 h-8 text-orange-500 mb-3" />
            <h4 className="text-white font-bold mb-2">Privacidade</h4>
            <p className="text-gray-400 text-sm">Configurações de anonimato</p>
          </div>
          <div className="bg-red-900 rounded-lg p-6 hover:bg-red-800 transition-colors cursor-pointer">
            <LogOut className="w-8 h-8 text-red-400 mb-3" />
            <h4 className="text-red-400 font-bold mb-2">Sair</h4>
            <p className="text-red-300 text-sm">Encerrar sessão anônima</p>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <h1 className="text-xl font-bold text-orange-500">Private Hub 18+</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <Search className="w-6 h-6" />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Bell className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 pb-20">
        {activeTab === 'home' && renderHome()}
        {activeTab === 'feed' && renderHome()}
        {activeTab === 'trending' && renderHome()}
        {activeTab === 'chat' && renderChat()}
        {activeTab === 'menu' && renderProfile()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 px-4 py-2">
        <div className="flex items-center justify-around">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center space-y-1 p-2 ${
              activeTab === 'home' ? 'text-orange-500' : 'text-gray-400'
            }`}
          >
            <Grid3X3 className="w-6 h-6" />
            <span className="text-xs">Mural</span>
          </button>
          <button
            onClick={() => setActiveTab('feed')}
            className={`flex flex-col items-center space-y-1 p-2 ${
              activeTab === 'feed' ? 'text-orange-500' : 'text-gray-400'
            }`}
          >
            <Video className="w-6 h-6" />
            <span className="text-xs">Feed</span>
          </button>
          <button
            onClick={() => setActiveTab('trending')}
            className={`flex flex-col items-center space-y-1 p-2 ${
              activeTab === 'trending' ? 'text-orange-500' : 'text-gray-400'
            }`}
          >
            <TrendingUp className="w-6 h-6" />
            <span className="text-xs">Em alta</span>
          </button>
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex flex-col items-center space-y-1 p-2 ${
              activeTab === 'chat' ? 'text-orange-500' : 'text-gray-400'
            }`}
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-xs">Chat</span>
          </button>
          <button
            onClick={() => setActiveTab('menu')}
            className={`flex flex-col items-center space-y-1 p-2 ${
              activeTab === 'menu' ? 'text-orange-500' : 'text-gray-400'
            }`}
          >
            <User className="w-6 h-6" />
            <span className="text-xs">Menu</span>
          </button>
        </div>
      </nav>
    </div>
  )
}