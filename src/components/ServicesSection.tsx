"use client"
import Link from "next/link"
import { ArrowRight, FileText, Table, Globe, Smartphone, Palette, FileCode } from "lucide-react"

const services = [
  { icon: "FileText", title: "PPT制作", desc: "毕业答辩、课程汇报、商业路演……AI+人工帮你做出专业级PPT", price: "¥30起", color: "from-blue-500 to-blue-600" },
  { icon: "Table", title: "表格处理", desc: "数据整理、报表生成、公式编写……让杂乱的数据变得井井有条", price: "¥20起", color: "from-emerald-500 to-emerald-600" },
  { icon: "Globe", title: "网站开发", desc: "个人主页、作品集、工作室官网……用AI快速搭建你的线上名片", price: "¥100起", color: "from-violet-500 to-violet-600" },
  { icon: "Smartphone", title: "APP定制", desc: "工具类APP、壁纸应用、习惯打卡……AI辅助开发上架Google Play", price: "¥200起", color: "from-orange-500 to-orange-600" },
  { icon: "Palette", title: "设计美化", desc: "简历排版、海报设计、Logo设计……让你的作品看起来更专业", price: "¥20起", color: "from-pink-500 to-pink-600" },
  { icon: "FileCode", title: "文档排版", desc: "毕业论文排版、技术文档、产品说明书……格式规范、整洁美观", price: "¥30起", color: "from-cyan-500 to-cyan-600" },
]

const iconMap: Record<string, React.ElementType> = { FileText, Table, Globe, Smartphone, Palette, FileCode }

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm tracking-wider uppercase">SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">我们的服务</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">六大核心服务，覆盖你学习、工作、创业中的各种需求</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon]
            return (
              <div key={i} className="group relative p-6 bg-white rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 card-hover overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className={`w-12 h-12 bg-gradient-to-r ${s.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                  <span className="text-primary-600 font-bold text-lg">{s.price}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-12">
          <Link href="/services" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group">
            查看完整服务详情 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}