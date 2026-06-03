"use client"
import { MessageSquare, Search, FileCheck, Rocket } from "lucide-react"

/* �������̲��� - ÿ��һ������ɫ */
const steps = [
  { icon: MessageSquare, title: "1. �ύ����", desc: "������������Ҫʲô����PPT�������վ����APP��Խ��ϸԽ��", grad: "gradient-primary" },
  { icon: Search, title: "2. AI��������", desc: "���������µ�AI���߽��п���������������̵ȴ�ʱ��", grad: "gradient-violet" },
  { icon: FileCheck, title: "3. �˹�����Ż�", desc: "AI��ɺ�����˹���˺��Ż���ȷ����������", grad: "gradient-emerald" },
  { icon: Rocket, title: "4. ����+����޸�", desc: "������Ʒ��ɸ�����ķ�����ѵ�����ֱ������Ϊֹ", grad: "gradient-orange" },
]

export default function ProcessSection() {
  return (
    <section className="section gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ������ - ���� */}
        <div className="text-center mb-14">
          <span className="text-primary-500 font-semibold text-xs tracking-widest uppercase">HOW IT WORKS</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">��������</h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">���Ĳ������ɻ�ȡ��������AI����</p>
        </div>

        {/* ���迨Ƭ - ���зֲ� */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative text-center group">
              <div className={`w-14 h-14 mx-auto ${s.grad} rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-md`}
                style={{ boxShadow: `0 4px 14px rgba(37,99,235,0.2)` }}>
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">{s.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-[220px] mx-auto">{s.desc}</p>
              {/* ������ */}
              {i < 3 && (
                <div className="hidden md:block absolute top-7 left-[60%] w-[calc(100%-80px)] h-px bg-gradient-to-r from-primary-200 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
