import Link from 'next/link'
import { Zap, Mail, MessageCircle } from 'lucide-react'

// 页脚分组链接数据
const footerLinks = {
  服务: [
    { href: '/services', label: 'PPT制作' },
    { href: '/services', label: '表格处理' },
    { href: '/services', label: '网站开发' },
    { href: '/services', label: 'APP定制' },
  ],
  关于: [
    { href: '/about', label: '关于智核' },
    { href: '/cases', label: '案例展示' },
    { href: '/faq', label: '常见问题' },
  ],
  联系: [
    { href: '/contact', label: '在线咨询' },
    { href: '/contact', label: '合作洽谈' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* 品牌介绍 */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">智核 <span className="text-primary-400 text-sm">ZhiCore</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              智核（ZhiCore）致力于用最前沿的AI技术，为个人和企业提供高效、专业的数字化服务。
              让技术不再成为门槛，让每个人都享受到AI带来的便利。
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:contact@zhihcore.com" className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* 链接分组 */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 底部版权 */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} 智核 ZhiCore. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">隐私政策</a>
            <a href="#" className="hover:text-gray-300 transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
