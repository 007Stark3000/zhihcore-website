"use client"
import { Search, MessageSquare, FileCheck, Rocket } from "lucide-react"

const steps = [
  { icon: MessageSquare, title: "1. 提交需求", desc: "告诉我们你需要什么——PPT、表格、网站还是APP，越详细越好" },
  { icon: Search, title: "2. AI快速制作", desc: "我们用最新的AI工具进行快速制作，大幅缩短等待时间" },
  { icon: FileCheck, title: "3. 人工审核优化", desc: "AI完成后进行人工审核和优化，确保质量过关" },
  { icon: Rocket, title: "4. 交付+免费修改", desc: "交付成品后可根据你的反馈免费调整，直到满意为止" },
]

export default function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm tracking-wider uppercase">HOW IT WORKS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">合作流程</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">简单四步，轻松获取高质量的AI服务</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative text-center group">
              <div className="w-16 h-16 mx-auto gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-primary-500/20">
                <s.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              {i < 3 && <div className="hidden md:block absolute top-8 left-[60%] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-primary-300 to-primary-100" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}