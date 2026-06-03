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
    <section className="relative overflow-hidden gradient-light">
      {/* 简洁几何装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 border border-primary-100/50 rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] border border-primary-100/30 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary-200/40 rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary-300/30 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28">
        <div className="text-center max-w-4xl mx-auto">
          {/* 标签 */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            AI驱动 · 高效智能服务
          </div>

          {/* 主标题 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-5 animate-slide-up">
            <span className="text-primary-600">AI赋能</span>
            <br />
            <span>让创意快速落地</span>
          </h1>

          {/* 副标题 */}
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            无论你是需要一份精美的PPT、一个高效的数据表格、一个炫酷的网站，还是一个实用的APP，
            <span className="text-primary-600 font-semibold">智核（ZhiCore）</span>都能用AI技术帮你高效完成。
          </p>

          {/* 按钮 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16 animate-slide-up">
            <Link
              href="/services"
              className="group px-7 py-3 gradient-primary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/20 transition-all inline-flex items-center gap-2"
            >
              查看服务
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3 bg-white text-gray-600 font-semibold rounded-lg border border-gray-200 hover:border-primary-300 hover:text-primary-600 transition-all"
            >
              免费咨询
            </Link>
          </div>

          {/* 三大特色卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
            {features.map((f, i) => (
              <div key={i} className="card p-5">
                <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center mb-3">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{f.text}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
