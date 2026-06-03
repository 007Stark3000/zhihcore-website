"use client"
import { Users, Award, Clock, TrendingUp } from "lucide-react"

/* ͳ�����ݿ�Ƭ - ��ɫ���� */
const stats = [
  { icon: Users, value: "50+", label: "����ͻ�", grad: "gradient-primary" },
  { icon: Award, value: "100+", label: "�����Ŀ", grad: "gradient-violet" },
  { icon: Clock, value: "99%", label: "׼ʱ������", grad: "gradient-emerald" },
  { icon: TrendingUp, value: "95%", label: "�ͻ������", grad: "gradient-orange" },
]

export default function StatsSection() {
  return (
    <section className="py-16 gradient-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-6 card">
              <div className={`w-11 h-11 mx-auto ${s.grad} rounded-lg flex items-center justify-center mb-3`}>
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-0.5">{s.value}</div>
              <div className="text-xs text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
