"use client"
import { Zap, Target, Heart, Lightbulb } from "lucide-react"

const values = [
  { icon: Zap, title: "高效", desc: "借助最新AI技术，大幅提升工作效率，缩短交付周期" },
  { icon: Target, title: "精准", desc: "深入理解需求，确保每一次交付都精准满足客户期望" },
  { icon: Heart, title: "用心", desc: "每一个项目我们都用心对待，追求极致的客户体验" },
  { icon: Lightbulb, title: "创新", desc: "不断探索AI新能力，用最新技术为客户创造最大价值" },
]

export default function AboutPage() {
  return (
    <div className="pt-8 pb-20">
      <div className="gradient-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">关于智核</h1>
          <p className="text-base text-gray-500 max-w-xl mx-auto">用AI技术为每个人赋能，让创意快速落地</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="card p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">我们的故事</h2>
          <div className="text-sm text-gray-500 leading-relaxed space-y-4">
            <p>智核（ZhiCore）诞生于一个简单的想法：<strong className="text-gray-700">让AI技术不再是少数人的专利。</strong></p>
            <p>我们是一群热爱技术的年轻人，相信AI将彻底改变人们的工作方式。但我们发现，大多数人虽然有需求，却不知道如何利用AI提升效率——这就是我们存在的意义。</p>
            <p>我们使用最前沿的AI工具（Claude、GPT、Codex等），结合人工审核优化，为你提供PPT制作、表格处理、网站开发、APP定制等一站式服务。让技术不再成为门槛，让每个人都享受到AI带来的便利。</p>
            <p><strong className="text-gray-700">我们的使命：</strong>让每一个创意都能快速落地，让每一个需求都能找到解决方案。</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-5 text-center">核心价值观</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((v, i) => (
            <div key={i} className="card p-5">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center mb-3">
                <v.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{v.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
