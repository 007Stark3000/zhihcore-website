"use client"
import Link from "next/link"
import { Check, ArrowRight, FileText, Table, Globe, Smartphone, Palette, FileCode } from "lucide-react"

/* ��������ҳ��ɫӳ�� */
const serviceColors: Record<string, string> = {
  FileText: "gradient-primary",
  Table: "gradient-emerald",
  Globe: "gradient-violet",
  Smartphone: "gradient-orange",
  Palette: "gradient-pink",
  FileCode: "gradient-cyan",
}

const serviceDetails = [
  {
    icon: "FileText", title: "PPT����", price: "��30��",
    desc: "��ҵ��硢�γ̻㱨����ҵ·�ݡ���Ʒ��������������AI+�˹������̣������������רҵ��PPT��",
    details: ["֧��10-50ҳPPT����", "�ṩ����ģ����ѡ��", "����ͼ�������������Ч��", "����޸�ֱ������", "����PPTX/PDF˫��ʽ"],
  },
  {
    icon: "Table", title: "�����", price: "��20��",
    desc: "����������������ɡ���ʽ��д�����ݿ��ӻ����������ҵ����ݱ�þ���������",
    details: ["Excel/Google Sheetsȫ֧��", "���ӹ�ʽ�Զ���д", "������ϴ������", "���ӻ�ͼ������", "�������ݴ���"],
  },
  {
    icon: "Globe", title: "��վ����", price: "��100��",
    desc: "������ҳ����Ʒ���������ҹ�����С����ҵվ������AI���ٴ���������Ƭ��",
    details: ["��Ӧʽ���(PC+�ֻ�)", "SEO���������Ż�", "������ϵ���", "һ����������", "֧�ֺ���ά���޸�"],
  },
  {
    icon: "Smartphone", title: "APP����", price: "��200��",
    desc: "������APP����ֽӦ�á�ϰ�ߴ򿨡������������AI���������ϼ�Google Play��",
    details: ["Androidƽ̨��Google Play��", "������۵�UI����", "��棨AdMob������", "�ϼ�ȫ���̸���", "�����Ż�����"],
  },
  {
    icon: "Palette", title: "�������", price: "��20��",
    desc: "�����Ű桢������ơ�Logo��ơ���Ƭ��ơ����������Ʒ��������רҵ��",
    details: ["��Ӣ�ļ����Ż�", "�����/���������", "Logo/Ʒ�Ʊ�ʶ���", "�罻ý����ͼ", "֧�ֶ��ָ�ʽ���"],
  },
  {
    icon: "FileCode", title: "�ĵ��Ű�", price: "��30��",
    desc: "��ҵ�����Ű桢�����ĵ�����Ʒ˵���顢��ҵ�ƻ��顭����ʽ�淶���������ۡ�",
    details: ["Word/LaTeX�Ű�", "�Զ�����Ŀ¼", "��ʽ�Ű�����", "�ο����׹���", "��׼��ʽģ��"],
  },
]

const iconMap: Record<string, React.ElementType> = { FileText, Table, Globe, Smartphone, Palette, FileCode }

export default function ServicesPage() {
  return (
    <div className="pt-8 pb-20">
      <div className="gradient-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">���з���</h1>
          <p className="text-base text-gray-500 max-w-xl mx-auto">���������𣬸�����ѧϰ����������ҵ�еĸ�����������һ���ʺ���</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {serviceDetails.map((s, i) => {
            const Icon = iconMap[s.icon]
            const grad = serviceColors[s.icon] || "gradient-primary"
            return (
              <div key={i} className="card p-7 card-hover">
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-12 h-12 ${grad} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <h2 className="text-lg font-bold text-gray-900">{s.title}</h2>
                      <span className={`text-xl font-bold bg-clip-text text-transparent ${grad} flex-shrink-0`}>{s.price}<span className="text-xs font-normal text-gray-400">/��</span></span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1.5">{s.desc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-5">
                  {s.details.map((d, j) => (
                    <div key={j} className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Check className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
                      {d}
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors group"
                >
                  ������ѯ <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
