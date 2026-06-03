"use client"
import { useState } from "react"
import { Mail, MessageCircle, Send, Check } from "lucide-react"

const serviceOptions = ["PPT����", "�����", "��վ����", "APP����", "�������", "�ĵ��Ű�", "����"]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", contact: "", service: "", desc: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="pt-8 pb-20">
        <div className="gradient-light py-16" />
        <div className="max-w-lg mx-auto px-4 -mt-6 text-center">
          <div className="card p-12">
            <div className="w-14 h-14 mx-auto bg-emerald-50 rounded-full flex items-center justify-center mb-4">
              <Check className="w-7 h-7 text-emerald-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">�ύ�ɹ���</h2>
            <p className="text-sm text-gray-400 mb-5">���ǽ���24Сʱ��ͨ�������µ���ϵ��ʽ��ϵ��</p>
            <p className="text-xs text-gray-400">��Ҳ����ֱ�����΢�ţ�<strong className="text-primary-600">ZhiCore_AI</strong> ���ٹ�ͨ</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-8 pb-20">
      <div className="gradient-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">��ϵ����</h1>
          <p className="text-base text-gray-500 max-w-xl mx-auto">������������������ǻ���24Сʱ�ڻظ���</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="space-y-3">
            <div className="card p-5">
              <div className="w-9 h-9 gradient-primary rounded-lg flex items-center justify-center mb-2.5">
                <Mail className="w-4.5 h-4.5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-0.5">����</h3>
              <p className="text-xs text-gray-400">contact@zhihcore.com</p>
            </div>
            <div className="card p-5">
              <div className="w-9 h-9 gradient-violet rounded-lg flex items-center justify-center mb-2.5">
                <MessageCircle className="w-4.5 h-4.5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-0.5">΢��</h3>
              <p className="text-xs text-gray-400">ZhiCore_AI</p>
            </div>
          </div>

          <div className="lg:col-span-2 card p-7">
            <h2 className="text-lg font-bold text-gray-900 mb-5">������ѯ</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">��ĳƺ� *</label>
                  <input required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}
                    className="w-full px-3.5 py-2 rounded-lg border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-50 outline-none transition-all text-sm" placeholder="��ô�ƺ��㣿" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">��ϵ��ʽ *</label>
                  <input required value={form.contact} onChange={(e) => setForm({...form, contact: e.target.value})}
                    className="w-full px-3.5 py-2 rounded-lg border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-50 outline-none transition-all text-sm" placeholder="΢��/�ֻ���/����" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">ѡ�����</label>
                <div className="flex flex-wrap gap-1.5">
                  {serviceOptions.map((s) => (
                    <button type="button" key={s}
                      className={`px-3 py-1 text-xs rounded-md border transition-all ` + (form.service === s ? `bg-primary-50 text-primary-700 border-primary-200` : `bg-white text-gray-500 border-gray-200 hover:border-primary-200`)}
                      onClick={() => setForm({...form, service: s})}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">�������� *</label>
                <textarea required value={form.desc} onChange={(e) => setForm({...form, desc: e.target.value})} rows={4}
                  className="w-full px-3.5 py-2 rounded-lg border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-50 outline-none transition-all resize-none text-sm"
                  placeholder="�뾡������ϸ������������󡭡�" />
              </div>
              <button type="submit" className="w-full py-2.5 gradient-primary text-white font-semibold rounded-lg hover:shadow-md hover:shadow-primary-500/20 transition-all inline-flex items-center justify-center gap-1.5 text-sm">
                <Send className="w-3.5 h-3.5" /> �ύ��ѯ
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
