'use client'
import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react'

const features = [
  { icon: Zap, text: 'AI驱动 · 快速交付', desc: '利用最新AI技术，大幅缩短制作周期' },
  { icon: Shield, text: '质量保障 · 满意为止', desc: '人工+AI双重审核，支持免费修改' },
  { icon: Sparkles, text: '学生价格 · 专业品质', desc: '专为学生群体打造的亲民价格体系' },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 gradient-light opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* 标签 */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            AI驱动 · 高效智能服务
          </div>

          {/* 主标题 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 animate-slide-up">
            <span className="gradient-primary bg-clip-text text-transparent">AI赋能</span>
            <br />
            <span>让创意快速落地</span>
          </h1>

          {/* 副标题 */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            无论你是需要一份精美的PPT、一个高效的数据表格、一个炫酷的网站，还是一个实用的APP，
            <span className="text-primary-600 font-semibold">智核（ZhiCore）</span>都能用AI技术帮你高效完成。
          </p>

          {/* 按钮组 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up">
            <Link
              href="/services"
              className="group px-8 py-3.5 gradient-primary text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-primary-500/25 transition-all inline-flex items-center gap-2"
            >
              查看服务
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-primary-300 hover:text-primary-600 shadow-sm hover:shadow-md transition-all"
            >
              免费咨询
            </Link>
          </div>

          {/* 三大特色 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {features.map((f, i) => (
              <div key={i} className="p-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all card-hover">
                <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center mb-3">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{f.text}</h3>
                <p className="text-sm text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
