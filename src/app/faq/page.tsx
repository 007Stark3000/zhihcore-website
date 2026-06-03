"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  { q: "你们是怎么用AI做PPT/表格/网站的？", a: "我们使用市面上最先进的AI工具（如Claude、GPT-4、Codex等）进行快速生成，然后由人工审核和优化，确保最终质量。这样既保证了速度，又保证了质量。" },
  { q: "多久能做好？", a: "PPT制作一般1-2小时，表格处理30分钟-1小时，网站开发1-3天，APP定制3-7天。具体时间取决于需求的复杂程度。" },
  { q: "可以免费修改吗？", a: "可以！所有服务都包含免费修改，直到你满意为止。我们希望你拿到的是真正满意的作品。" },
  { q: "我不会描述需求怎么办？", a: "没关系！你只需要告诉我们大致想做什么，我们有专业的需求分析师会引导你一步步明确需求。不需要懂技术术语。" },
  { q: "支付方式有哪些？", a: "目前支持微信支付和支付宝。大额项目支持分期付款（预付50%，交付后付尾款）。" },
  { q: "你们能保证质量吗？", a: "我们对每一个交付物都进行了AI生成→人工审核→二次优化的流程。如果交付后你不满意，我们免费修改到满意为止。" },
  { q: "学生有优惠吗？", a: "有的！我们的定价本身就是学生友好价。另外首次下单的同学享受首单8折优惠。" },
  { q: "你们的服务有售后吗？", a: "有的。项目交付后提供7天免费售后维护，后续如果需要修改只需支付少量费用。" },
]

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="pt-8 pb-20">
      <div className="gradient-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">常见问题</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">这里整理了大家最关心的问题，如果还有其他疑问，欢迎随时联系我</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-all">
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-medium text-gray-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ml-4 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}