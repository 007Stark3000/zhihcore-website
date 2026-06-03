"use client"
import { ExternalLink } from "lucide-react"

const cases = [
  { title: "毕业答辩PPT", desc: "为一所高校同学的毕业设计答辩制作了20页专业级PPT，包含数据图表和动画效果", tag: "PPT制作" },
  { title: "个人作品集网站", desc: "为自由设计师打造的个人作品展示网站，支持PC和手机访问，简洁大气", tag: "网站开发" },
  { title: "销售数据看板", desc: "为企业客户制作了月度销售数据可视化管理看板，自动生成趋势图表", tag: "表格处理" },
  { title: "AI每日壁纸APP", desc: "开发了一款每日自动更新的AI壁纸Android应用，已成功上架Google Play", tag: "APP定制" },
  { title: "商业计划书排版", desc: "为创业团队排版了30页商业计划书，包含数据表格和行业分析图表", tag: "文档排版" },
]

export default function CasesPage() {
  return (
    <div className="pt-8 pb-20">
      <div className="gradient-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">案例展示</h1>
          <p className="text-base text-gray-500 max-w-xl mx-auto">以下是我们的部分作品案例，每个案例都是我们用AI技术+人工审核完成的真实项目</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <div key={i} className="card p-6">
              <div className="mb-3">
                <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-primary-50 text-primary-600 border border-primary-100">{c.tag}</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1.5">{c.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">{c.desc}</p>
              <div className="flex items-center gap-1 text-primary-600 text-xs font-medium">
                <ExternalLink className="w-3.5 h-3.5" /> 查看详情
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
