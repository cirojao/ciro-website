import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-warm-200 bg-warm-50 py-12 mt-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-display text-espresso font-semibold">Ciro</span>
          <span className="text-sm text-warm-500">
            Frontend Engineer · Taipei
          </span>
        </div>

        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full border border-warm-300 flex items-center justify-center text-warm-500 hover:text-warm-700 hover:border-warm-500 hover:bg-warm-100 transition-all duration-200"
            >
              <Icon size={16} />
            </Link>
          ))}
        </div>

        <p className="text-xs text-warm-400 font-mono">
          © {new Date().getFullYear()} · 用 ♥ 與 ☕ 打造
        </p>
      </div>
    </footer>
  );
}
