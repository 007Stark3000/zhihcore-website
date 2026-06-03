"use client"
import { useState } from "react"
import { Mail, MessageCircle, Send, Check } from "lucide-react"

const serviceOptions = ["PPT制作", "表格处理", "网站开发", "APP定制", "设计美化", "文档排版", "其他"]

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
        <div className="gradient-light py-20" />
        <div className="max-w-lg mx-auto px-4 -mt-8 text-center">
          <div className="bg-white rounded-2xl border border-gray-100 p-12 shadow-lg">
            <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">提交成功！</h2>
            <p className="text-gray-500 mb-6">我们将在24小时内通过你留下的联系方式联系你</p>
            <p className="text-sm text-gray-400">你也可以直接添加微信：<strong className="text-primary-600">ZhiCore_AI</strong> 快速沟通</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-8 pb-20">
      <div className="gradient-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">联系我们</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">告诉我们你的需求，我们会在24小时内回复你</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 联系方式卡 */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-100 p-6 card-hover hover:shadow-lg">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center mb-3">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">邮箱</h3>
              <p className="text-sm text-gray-500">contact@zhihcore.com</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 p-6 card-hover hover:shadow-lg">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center mb-3">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">微信</h3>
              <p className="text-sm text-gray-500">ZhiCore_AI</p>
            </div>
          </div>

          {/* 咨询表单 */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">在线咨询</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">你的称呼 *</label>
                  <input required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="怎么称呼你？" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">联系方式 *</label>
                  <input required value={form.contact} onChange={(e) => setForm({...form, contact: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="微信/手机号/邮箱" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">选择服务</label>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((s) => (
                    <button type="button" key={s}
                      className={`px-4 py-1.5 rounded-lg text-sm border transition-all ${form.service === s ? "bg-primary-100 text-primary-700 border-primary-300" : "bg-white text-gray-600 border-gray-200 hover:border-primary-300"}`}
                      onClick={() => setForm({...form, service: s})}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">需求描述 *</label>
                <textarea required value={form.desc} onChange={(e) => setForm({...form, desc: e.target.value})} rows={4}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                  placeholder="请尽可能详细地描述你的需求……" />
              </div>
              <button type="submit" className="w-full py-3 gradient-primary text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all inline-flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> 提交咨询
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}