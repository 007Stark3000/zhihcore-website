"use client"
import { Zap, Target, Heart, Lightbulb } from "lucide-react"

const values = [
  { icon: Zap, title: "��Ч", desc: "��������AI�����������������Ч�ʣ����̽�������", grad: "gradient-primary" },
  { icon: Target, title: "��׼", desc: "�����������ȷ��ÿһ�ν�������׼����ͻ�����", grad: "gradient-violet" },
  { icon: Heart, title: "����", desc: "ÿһ����Ŀ���Ƕ����ĶԴ���׷���µĿͻ�����", grad: "gradient-pink" },
  { icon: Lightbulb, title: "����", desc: "����̽��AI�������������¼���Ϊ�ͻ���������ֵ", grad: "gradient-emerald" },
]

export default function AboutPage() {
  return (
    <div className="pt-8 pb-20">
      <div className="gradient-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">�����Ǻ�</h1>
          <p className="text-base text-gray-500 max-w-xl mx-auto">��AI����Ϊÿ���˸��ܣ��ô���������</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="card p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">���ǵĹ���</h2>
          <div className="text-sm text-gray-500 leading-relaxed space-y-4">
            <p>�Ǻˣ�ZhiCore��������һ���򵥵��뷨��<strong className="text-gray-700">��AI���������������˵�ר����</strong></p>
            <p>������һȺ�Ȱ������������ˣ�����AI�����׸ı����ǵĹ�����ʽ�������Ƿ��֣����������Ȼ������ȴ��֪���������AI����Ч�ʡ�����������Ǵ��ڵ����塣</p>
            <p>����ʹ����ǰ�ص�AI���ߣ�Claude��GPT��Codex�ȣ�������˹�����Ż���Ϊ���ṩPPT��������������վ������APP���Ƶ�һվʽ�����ü������ٳ�Ϊ�ż�����ÿ���˶����ܵ�AI�����ı�����</p>
            <p><strong className="text-gray-700">���ǵ�ʹ����</strong>��ÿһ�����ⶼ�ܿ�����أ���ÿһ���������ҵ����������</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-5 text-center">���ļ�ֵ��</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((v, i) => (
            <div key={i} className="card p-5 card-hover">
              <div className={`w-10 h-10 ${v.grad} rounded-lg flex items-center justify-center mb-3`}>
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
