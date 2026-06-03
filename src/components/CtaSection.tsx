"use client"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="section bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 md:p-14 rounded-2xl gradient-primary relative overflow-hidden">
          {/* 简约装饰 */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-48 h-48 bg-white/5 rounded-full -translate-x-1/2" />
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-1/2" />
          <div className="relative z-10">
            <Sparkles className="w-8 h-8 text-white/60 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">准备好开始了吗？</h2>
            <p className="text-sm md:text-base text-white/70 mb-7 max-w-lg mx-auto">无论你有一个想法、一个需求，还是一个项目，告诉我们，我们用AI帮你实现</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-primary-700 font-semibold rounded-lg hover:shadow-lg transition-all group text-sm"
            >
              立即咨询 <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
