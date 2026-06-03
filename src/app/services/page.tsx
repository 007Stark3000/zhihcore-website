"use client"
import Link from "next/link"
import { Check, ArrowRight, FileText, Table, Globe, Smartphone, Palette, FileCode } from "lucide-react"

const serviceDetails = [
  {
    icon: FileText, title: "PPT制作", price: "¥30起",
    desc: "毕业答辩、课程汇报、商业路演、产品发布……我们用AI+人工的流程，帮你快速做出专业级PPT。",
    details: ["支持10-50页PPT制作", "提供多种模板风格选择", "包含图表、动画、过渡效果", "免费修改直到满意", "交付PPTX/PDF双格式"],
  },
  {
    icon: Table, title: "表格处理", price: "¥20起",
    desc: "数据整理、报表生成、公式编写、数据可视化……让杂乱的数据变得井井有条。",
    details: ["Excel/Google Sheets全支持", "复杂公式自动编写", "数据清洗与整理", "可视化图表生成", "批量数据处理"],
  },
  {
    icon: Globe, title: "网站开发", price: "¥100起",
    desc: "个人主页、作品集、工作室官网、小型企业站……用AI快速搭建你的线上名片。",
    details: ["响应式设计(PC+手机)", "SEO搜索引擎优化", "在线联系表单", "一键部署上线", "支持后期维护修改"],
  },
  {
    icon: Smartphone, title: "APP定制", price: "¥200起",
    desc: "工具类APP、壁纸应用、习惯打卡、记账软件……AI辅助开发上架Google Play。",
    details: ["Android平台（Google Play）", "简洁美观的UI界面", "广告（AdMob）接入", "上架全流程辅助", "持续优化更新"],
  },
  {
    icon: Palette, title: "设计美化", price: "¥20起",
    desc: "简历排版、海报设计、Logo设计、名片设计……让你的作品看起来更专业。",
    details: ["中英文简历优化", "活动海报/宣传单设计", "Logo/品牌标识设计", "社交媒体配图", "支持多种格式输出"],
  },
  {
    icon: FileCode, title: "文档排版", price: "¥30起",
    desc: "毕业论文排版、技术文档、产品说明书、商业计划书……格式规范、整洁美观。",
    details: ["Word/LaTeX排版", "自动生成目录", "公式排版与编号", "参考文献管理", "标准格式模板"],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-8 pb-20">
      {/* 页面标题 */}
      <div className="gradient-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">所有服务</h1>
          <p className="text-base text-gray-500 max-w-xl mx-auto">六大服务类别，覆盖你学习、工作、创业中的各种需求，总有一款适合你</p>
        </div>
      </div>

      {/* 服务列表 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {serviceDetails.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="card p-7">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="text-lg font-bold text-gray-900">{s.title}</h2>
                      <span className="text-xl font-bold text-primary-600 flex-shrink-0">{s.price}<span className="text-xs font-normal text-gray-400">/份</span></span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1.5">{s.desc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-5">
                  {s.details.map((d, j) => (
                    <div key={j} className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Check className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
                      {d}
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors group"
                >
                  立即咨询 <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
