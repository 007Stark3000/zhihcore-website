'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

// 导航链接数据
const navLinks = [
  { href: '/', label: '首页' },
  { href: '/services', label: '服务' },
  { href: '/cases', label: '案例' },
  { href: '/about', label: '关于' },
  { href: '/faq', label: '常见问题' },
  { href: '/contact', label: '联系' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-xl text-gray-900">智核</span>
              <span className="text-sm text-primary-500 ml-1 font-medium">ZhiCore</span>
            </div>
          </Link>

          {/* PC端导航链接 */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 text-sm font-semibold text-white gradient-primary rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all"
            >
              立即咨询
            </Link>
          </div>

          {/* 移动端汉堡菜单按钮 */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 移动端下拉菜单 */}
      <div className={cn('md:hidden transition-all duration-300 overflow-hidden', isOpen ? 'max-h-96' : 'max-h-0')}>
        <div className="px-4 pb-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block px-4 py-3 text-sm font-semibold text-white gradient-primary rounded-lg text-center"
            onClick={() => setIsOpen(false)}
          >
            立即咨询
          </Link>
        </div>
      </div>
    </nav>
  )
}
