"use client";

import { useState } from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { SiGithub } from "react-icons/si";
import {
  MdMailOutline,
  MdOutlineCheckCircle,
  MdOutlineSend,
} from "react-icons/md";

const socials = [
  {
    icon: SiGithub,
    href: "https://github.com/cirojao",
    label: "GitHub",
    user: "@cirojao",
  },
  {
    icon: BiLogoLinkedin,
    href: "https://www.linkedin.com/in/ciro-jao",
    label: "LinkedIn",
    user: "Ciro",
  },
  {
    icon: MdMailOutline,
    href: "mailto:ciroxjao@gmail.com",
    label: "Email",
    user: "ciroxjao@gmail.com",
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
    <div className="mx-auto max-w-5xl px-6 pt-24 pb-16">
      {/* 頁首 */}
      <div className="mb-16">
        <h1 className="font-display text-espresso text-5xl font-bold md:text-6xl">
          Contact
        </h1>
        <p className="text-warm-600 mt-4 max-w-xl text-lg leading-relaxed">
          有合作機會、技術問題，或只是想聊聊前端？都歡迎寫信給我！ 通常在 24
          小時內回覆。
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-5">
        {/* 社群連結 */}
        <div className="space-y-4 md:col-span-2">
          <h2 className="font-display text-espresso mb-6 text-xl font-semibold">
            聯絡方式
          </h2>
          {socials.map(({ icon: Icon, href, label, user }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-warm-50 border-warm-200 hover:border-warm-400 hover:shadow-card group flex items-center gap-4 rounded-2xl border p-4 transition-all duration-200"
            >
              <div className="bg-warm-200 text-warm-600 group-hover:bg-warm-300 flex h-10 w-10 items-center justify-center rounded-xl transition-colors">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-espresso text-sm font-medium">{label}</p>
                <p className="text-warm-500 text-xs">{user}</p>
              </div>
            </a>
          ))}

          {/* 現況提示 */}
          {/* <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span className="text-sm font-medium text-green-700">
                目前開放機會
              </span>
            </div>
            <p className="text-xs leading-relaxed text-green-600">
              正在尋找前端工程師或技術顧問職位，歡迎洽談！
            </p>
          </div> */}
        </div>

        {/* 聯絡表單 */}
        <div className="md:col-span-3">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <MdOutlineCheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="font-display text-espresso mb-3 text-2xl font-bold">
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
                className="text-warm-500 hover:text-espresso mt-6 text-sm underline transition-colors"
              >
                再寄一封
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-warm-500 mb-2 block font-mono text-xs tracking-wider uppercase">
                    姓名 *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="您的姓名"
                    className="bg-warm-50 border-warm-200 text-espresso placeholder-warm-400 focus:border-warm-500 focus:ring-warm-200 w-full rounded-xl border px-4 py-3 text-sm transition-all focus:ring-2 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-warm-500 mb-2 block font-mono text-xs tracking-wider uppercase">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-warm-50 border-warm-200 text-espresso placeholder-warm-400 focus:border-warm-500 focus:ring-warm-200 w-full rounded-xl border px-4 py-3 font-mono text-sm transition-all focus:ring-2 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-warm-500 mb-2 block font-mono text-xs tracking-wider uppercase">
                  主題
                </label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="bg-warm-50 border-warm-200 text-espresso focus:border-warm-500 focus:ring-warm-200 w-full appearance-none rounded-xl border px-4 py-3 text-sm transition-all focus:ring-2 focus:outline-none"
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
                <label className="text-warm-500 mb-2 block font-mono text-xs tracking-wider uppercase">
                  訊息 *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="告訴我您的想法或需求..."
                  className="bg-warm-50 border-warm-200 text-espresso placeholder-warm-400 focus:border-warm-500 focus:ring-warm-200 w-full resize-none rounded-xl border px-4 py-3 text-sm leading-relaxed transition-all focus:ring-2 focus:outline-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={loading || !form.name || !form.email || !form.message}
                className="bg-espresso hover:bg-espresso-light disabled:bg-warm-300 text-cream shadow-warm hover:shadow-warm-lg flex w-full items-center justify-center gap-2 rounded-xl px-8 py-3.5 font-medium transition-all duration-200 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="border-cream/40 border-t-cream h-4 w-4 animate-spin rounded-full border-2" />
                    發送中...
                  </>
                ) : (
                  <>
                    <MdOutlineSend size={16} />
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
