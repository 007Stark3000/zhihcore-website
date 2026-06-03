"use client"
import { Users, Award, Clock, TrendingUp } from "lucide-react"

const stats = [
  { icon: Users, value: "50+", label: "服务客户" },
  { icon: Award, value: "100+", label: "完成项目" },
  { icon: Clock, value: "99%", label: "准时交付率" },
  { icon: TrendingUp, value: "95%", label: "客户满意度" },
]

export default function StatsSection() {
  return (
    <section className="py-16 gradient-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center text-white">
              <div className="w-12 h-12 mx-auto bg-white/20 rounded-xl flex items-center justify-center mb-3">
                <s.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl md:text-4xl font-extrabold mb-1">{s.value}</div>
              <div className="text-sm text-white/80">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}