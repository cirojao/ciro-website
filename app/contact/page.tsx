"use client";

import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  CheckCircle,
} from "lucide-react";

const socials = [
  {
    icon: Github,
    href: "https://github.com",
    label: "GitHub",
    user: "@chenjh",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
    user: "Ciro",
  },
  {
    icon: Twitter,
    href: "https://twitter.com",
    label: "Twitter",
    user: "@chenjh_dev",
  },
  {
    icon: Mail,
    href: "mailto:hello@example.com",
    label: "Email",
    user: "hello@example.com",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500)); // 模擬 API 呼叫
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-16 max-w-5xl mx-auto px-6">
      {/* 頁首 */}
      <div className="mb-16">
        <p className="text-sm font-mono text-warm-500 uppercase tracking-widest mb-3">
          Contact
        </p>
        <h1 className="font-display text-5xl md:text-6xl text-espresso font-bold">
          聯絡我
        </h1>
        <p className="mt-4 text-warm-600 text-lg max-w-xl leading-relaxed">
          有合作機會、技術問題，或只是想聊聊前端？都歡迎寫信給我！ 通常在 24
          小時內回覆。
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        {/* 社群連結 */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="font-display text-xl text-espresso font-semibold mb-6">
            找到我
          </h2>
          {socials.map(({ icon: Icon, href, label, user }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-warm-50 border border-warm-200 rounded-2xl hover:border-warm-400 hover:shadow-card transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-warm-200 flex items-center justify-center text-warm-600 group-hover:bg-warm-300 transition-colors">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-sm font-medium text-espresso">{label}</p>
                <p className="text-xs text-warm-500">{user}</p>
              </div>
            </a>
          ))}

          {/* 現況提示 */}
          <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-green-700">
                目前開放機會
              </span>
            </div>
            <p className="text-xs text-green-600 leading-relaxed">
              正在尋找前端工程師或技術顧問職位，歡迎洽談！
            </p>
          </div>
        </div>

        {/* 聯絡表單 */}
        <div className="md:col-span-3">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="font-display text-2xl text-espresso font-bold mb-3">
                訊息已送出！
              </h3>
              <p className="text-warm-500 text-sm">
                感謝您的來信，我會盡快回覆。
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", subject: "", message: "" });
                }}
                className="mt-6 text-sm text-warm-500 hover:text-espresso transition-colors underline"
              >
                再寄一封
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-warm-500 uppercase tracking-wider mb-2">
                    姓名 *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="您的姓名"
                    className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-xl text-sm text-espresso placeholder-warm-400 focus:outline-none focus:border-warm-500 focus:ring-2 focus:ring-warm-200 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-warm-500 uppercase tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-xl text-sm text-espresso placeholder-warm-400 focus:outline-none focus:border-warm-500 focus:ring-2 focus:ring-warm-200 transition-all font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-warm-500 uppercase tracking-wider mb-2">
                  主題
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-xl text-sm text-espresso focus:outline-none focus:border-warm-500 focus:ring-2 focus:ring-warm-200 transition-all appearance-none"
                >
                  <option value="">請選擇...</option>
                  <option value="job">全職工作機會</option>
                  <option value="freelance">自由接案</option>
                  <option value="consulting">技術顧問</option>
                  <option value="collab">開源協作</option>
                  <option value="other">其他</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-warm-500 uppercase tracking-wider mb-2">
                  訊息 *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="告訴我您的想法或需求..."
                  className="w-full px-4 py-3 bg-warm-50 border border-warm-200 rounded-xl text-sm text-espresso placeholder-warm-400 focus:outline-none focus:border-warm-500 focus:ring-2 focus:ring-warm-200 transition-all resize-none leading-relaxed"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading || !form.name || !form.email || !form.message}
                className="w-full flex items-center justify-center gap-2 px-8 py-3.5 bg-espresso hover:bg-espresso-light disabled:bg-warm-300 disabled:cursor-not-allowed text-cream font-medium rounded-xl transition-all duration-200 shadow-warm hover:shadow-warm-lg"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-cream/40 border-t-cream rounded-full animate-spin" />
                    發送中...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    送出訊息
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
