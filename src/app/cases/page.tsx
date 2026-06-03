"use client"
import { ExternalLink } from "lucide-react"

/* ������ǩɫӳ�� */
const tagColors: Record<string, string> = {
  "PPT����": "bg-blue-50 text-blue-600 border-blue-100",
  "��վ����": "bg-violet-50 text-violet-600 border-violet-100",
  "�����": "bg-emerald-50 text-emerald-600 border-emerald-100",
  "APP����": "bg-orange-50 text-orange-600 border-orange-100",
  "�ĵ��Ű�": "bg-cyan-50 text-cyan-600 border-cyan-100",
}

const cases = [
  { title: "��ҵ���PPT", desc: "Ϊһ����Уͬѧ�ı�ҵ��ƴ��������20ҳרҵ��PPT����������ͼ��Ͷ���Ч��", tag: "PPT����" },
  { title: "������Ʒ����վ", desc: "Ϊ�������ʦ����ĸ�����Ʒչʾ��վ��֧��PC���ֻ����ʣ�������", tag: "��վ����" },
  { title: "�������ݿ���", desc: "Ϊ��ҵ�ͻ��������¶��������ݿ��ӻ�������壬�Զ���������ͼ��", tag: "�����" },
  { title: "AIÿ�ձ�ֽAPP", desc: "������һ��ÿ���Զ����µ�AI��ֽAndroidӦ�ã��ѳɹ��ϼ�Google Play", tag: "APP����" },
  { title: "��ҵ�ƻ����Ű�", desc: "Ϊ��ҵ�Ŷ��Ű���30ҳ��ҵ�ƻ��飬�������ݱ�����ҵ����ͼ��", tag: "�ĵ��Ű�" },
]

export default function CasesPage() {
  return (
    <div className="pt-8 pb-20">
      <div className="gradient-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">����չʾ</h1>
          <p className="text-base text-gray-500 max-w-xl mx-auto">���������ǵĲ�����Ʒ������ÿ����������������AI����+�˹������ɵ���ʵ��Ŀ</p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <div key={i} className="card p-6 card-hover">
              <div className="mb-3">
                <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full border ${tagColors[c.tag] || "bg-primary-50 text-primary-600 border-primary-100"}`}>
                  {c.tag}
                </span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1.5">{c.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">{c.desc}</p>
              <div className="flex items-center gap-1 text-primary-600 text-xs font-medium">
                <ExternalLink className="w-3.5 h-3.5" /> �鿴����
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
