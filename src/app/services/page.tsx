"use client"
import Link from "next/link"
import { Check, ArrowRight, FileText, Table, Globe, Smartphone, Palette, FileCode } from "lucide-react"

const serviceDetails = [
  {
    icon: FileText, title: "PPT制作", price: "¥30起", color: "blue",
    desc: "毕业答辩、课程汇报、商业路演、产品发布……我们用AI+人工的流程，帮你快速做出专业级PPT。",
    details: ["支持10-50页PPT制作", "提供多种模板风格选择", "包含图表、动画、过渡效果", "免费修改直到满意", "交付PPTX/PDF双格式"],
  },
  {
    icon: Table, title: "表格处理", price: "¥20起", color: "emerald",
    desc: "数据整理、报表生成、公式编写、数据可视化……让杂乱的数据变得井井有条。",
    details: ["Excel/Google Sheets全支持", "复杂公式自动编写", "数据清洗与整理", "可视化图表生成", "批量数据处理"],
  },
  {
    icon: Globe, title: "网站开发", price: "¥100起", color: "violet",
    desc: "个人主页、作品集、工作室官网、小型企业站……用AI快速搭建你的线上名片。",
    details: ["响应式设计(PC+手机)", "SEO搜索引擎优化", "在线联系表单", "一键部署上线", "支持后期维护修改"],
  },
  {
    icon: Smartphone, title: "APP定制", price: "¥200起", color: "orange",
    desc: "工具类APP、壁纸应用、习惯打卡、记账软件……AI辅助开发上架Google Play。",
    details: ["Android平台（Google Play）", "简洁美观的UI界面", "广告（AdMob）接入", "上架全流程辅助", "持续优化更新"],
  },
  {
    icon: Palette, title: "设计美化", price: "¥20起", color: "pink",
    desc: "简历排版、海报设计、Logo设计、名片设计……让你的作品看起来更专业。",
    details: ["中英文简历优化", "活动海报/宣传单设计", "Logo/品牌标识设计", "社交媒体配图", "支持多种格式输出"],
  },
  {
    icon: FileCode, title: "文档排版", price: "¥30起", color: "cyan",
    desc: "毕业论文排版、技术文档、产品说明书、商业计划书……格式规范、整洁美观。",
    details: ["Word/LaTeX排版", "自动生成目录", "公式排版与编号", "参考文献管理", "标准格式模板"],
  },
]

const colorMap: Record<string, string> = {
  blue: "from-blue-500 to-blue-600 bg-blue-100 text-blue-700 border-blue-200",
  emerald: "from-emerald-500 to-emerald-600 bg-emerald-100 text-emerald-700 border-emerald-200",
  violet: "from-violet-500 to-violet-600 bg-violet-100 text-violet-700 border-violet-200",
  orange: "from-orange-500 to-orange-600 bg-orange-100 text-orange-700 border-orange-200",
  pink: "from-pink-500 to-pink-600 bg-pink-100 text-pink-700 border-pink-200",
  cyan: "from-cyan-500 to-cyan-600 bg-cyan-100 text-cyan-700 border-cyan-200",
}

export default function ServicesPage() {
  return (
    <div className="pt-8 pb-20">
      {/* 页面标题 */}
      <div className="gradient-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">所有服务</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">六大服务类别，覆盖你学习、工作、创业中的各种需求，总有一款适合你</p>
        </div>
      </div>

      {/* 服务列表 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceDetails.map((s, i) => {
            const colors = colorMap[s.color].split(" ")
            return (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all card-hover">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${colors[0]} ${colors[1]} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <s.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold text-gray-900">{s.title}</h2>
                      <span className="text-2xl font-bold text-primary-600">{s.price}<span className="text-sm font-normal text-gray-400">/份</span></span>
                    </div>
                    <p className="text-gray-500 mt-2">{s.desc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {s.details.map((d, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className={`w-4 h-4 text-${s.color}-500 flex-shrink-0`} />
                      {d}
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group text-sm"
                >
                  立即咨询 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}