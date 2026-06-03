"use client"
import Link from "next/link"
import { ArrowRight, FileText, Table, Globe, Smartphone, Palette, FileCode } from "lucide-react"

/* ����Ƭ��ɫӳ�䣺ÿ�������Ӧһ����������ɫ */
const services = [
  { icon: FileText, title: "PPT����", desc: "��ҵ��硢�γ̻㱨����ҵ·�ݡ���AI+�˹���������רҵ��PPT", price: "��30��", grad: "gradient-primary" },
  { icon: Table, title: "�����", desc: "����������������ɡ���ʽ��д���������ҵ����ݱ�þ�������", price: "��20��", grad: "gradient-emerald" },
  { icon: Globe, title: "��վ����", desc: "������ҳ����Ʒ���������ҹ���������AI���ٴ���������Ƭ", price: "��100��", grad: "gradient-violet" },
  { icon: Smartphone, title: "APP����", desc: "������APP����ֽӦ�á�ϰ�ߴ򿨡���AI���������ϼ�Google Play", price: "��200��", grad: "gradient-orange" },
  { icon: Palette, title: "�������", desc: "�����Ű桢������ơ�Logo��ơ����������Ʒ��������רҵ", price: "��20��", grad: "gradient-pink" },
  { icon: FileCode, title: "�ĵ��Ű�", desc: "��ҵ�����Ű桢�����ĵ�����Ʒ˵���顭����ʽ�淶����������", price: "��30��", grad: "gradient-cyan" },
]

export default function ServicesSection() {
  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ������ - ���� */}
        <div className="text-center mb-14">
          <span className="text-primary-500 font-semibold text-xs tracking-widest uppercase">SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">���ǵķ���</h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">������ķ��񣬸�����ѧϰ����������ҵ�еĸ�������</p>
        </div>

        {/* ��Ƭ���� - ÿ�ſ�Ƭ������ɫ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={i} className="card p-6 group card-hover">
              {/* ������ɫ�� + ͼ�� */}
              <div className={`w-11 h-11 ${s.grad} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-gray-900">{s.title}</h3>
                <span className={`font-bold text-base ${s.grad} bg-clip-text text-transparent`}>{s.price}</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* �ײ����� - ���� */}
        <div className="text-center mt-10">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors group">
            �鿴������������ <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
