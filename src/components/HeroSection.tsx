'use client'
import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react'

const features = [
  { icon: Zap, text: 'AI���� �� ���ٽ���', desc: '��������AI���������������������' },
  { icon: Shield, text: '�������� �� ����Ϊֹ', desc: '�˹�+AI˫����ˣ�֧������޸�' },
  { icon: Sparkles, text: 'ѧ���۸� �� רҵƷ��', desc: 'רΪѧ��Ⱥ����������۸���ϵ' },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-light">
      {/* ��ʼ���װ�� - ���л��� */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 border-[2px] border-primary-200/40 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] border-[2px] border-violet-200/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-emerald-300/40 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-300/40 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-primary-100/20 rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-5 h-5 bg-orange-200/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-cyan-300/40 rounded-full animate-float" style={{ animationDelay: '0.8s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28">
        <div className="text-center max-w-4xl mx-auto">
          {/* ��ǩ - ���� */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            AI���� �� ��Ч���ܷ���
          </div>

          {/* ������ - ���� */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-5 animate-slide-up">
            <span className="gradient-primary bg-clip-text text-transparent">AI����</span>
            <br />
            <span>�ô���������</span>
          </h1>

          {/* ������ - ���� */}
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            ����������Ҫһ�ݾ�����PPT��һ����Ч�����ݱ��һ���ſ����վ������һ��ʵ�õ�APP��
            <span className="text-primary-600 font-semibold">�Ǻˣ�ZhiCore��</span>������AI���������Ч��ɡ�
          </p>

          {/* ��ť�� - ���� */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16 animate-slide-up">
            <Link
              href="/services"
              className="group px-7 py-3 gradient-primary text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/20 transition-all inline-flex items-center gap-2"
            >
              �鿴����
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3 bg-white text-gray-600 font-semibold rounded-lg border border-gray-200 hover:border-primary-300 hover:text-primary-600 transition-all"
            >
              �����ѯ
            </Link>
          </div>

          {/* ������ɫ��Ƭ - ���зֲ� */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
            {features.map((f, i) => (
              <div key={i} className="card p-5 card-hover">
                <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center mb-3">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{f.text}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
