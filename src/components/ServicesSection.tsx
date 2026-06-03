"use client"
import Link from "next/link"
import { ArrowRight, FileText, Table, Globe, Smartphone, Palette, FileCode } from "lucide-react"

const services = [
  { icon: FileText, title: "PPT制作", desc: "毕业答辩、课程汇报、商业路演……AI+人工帮你做出专业级PPT", price: "¥30起" },
  { icon: Table, title: "表格处理", desc: "数据整理、报表生成、公式编写……让杂乱的数据变得井井有条", price: "¥20起" },
  { icon: Globe, title: "网站开发", desc: "个人主页、作品集、工作室官网……用AI快速搭建你的线上名片", price: "¥100起" },
  { icon: Smartphone, title: "APP定制", desc: "工具类APP、壁纸应用、习惯打卡……AI辅助开发上架Google Play", price: "¥200起" },
  { icon: Palette, title: "设计美化", desc: "简历排版、海报设计、Logo设计……让你的作品看起来更专业", price: "¥20起" },
  { icon: FileCode, title: "文档排版", desc: "毕业论文排版、技术文档、产品说明书……格式规范、整洁美观", price: "¥30起" },
]

export default function ServicesSection() {
  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary-500 font-semibold text-xs tracking-widest uppercase">SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">我们的服务</h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">六大核心服务，覆盖你学习、工作、创业中的各种需求</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="card p-6 group">
                <div className="w-11 h-11 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-5.5 h-5.5 text-white" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-bold text-gray-900">{s.title}</h3>
                  <span className="text-primary-600 font-bold text-base">{s.price}</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-10">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors group">
            查看完整服务详情 <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
