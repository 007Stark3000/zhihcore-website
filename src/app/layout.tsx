import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// SEO元数据
export const metadata: Metadata = {
  title: '智核 ZhiCore | AI智能服务 · PPT制作 · 网站开发 · APP定制',
  description: '智核(ZhiCore)用AI技术为你提供PPT制作、表格处理、网站开发、APP定制等高效服务。让技术不再成为门槛。',
  keywords: 'AI服务,PPT制作,网站开发,APP定制,表格处理,AI智能,学生服务',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
