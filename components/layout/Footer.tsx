import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { SiGithub } from "react-icons/si";
import { MdMailOutline } from "react-icons/md";

const socials = [
  { icon: SiGithub, href: "https://github.com/cirojao", label: "GitHub" },
  {
    icon: BiLogoLinkedin,
    href: "https://www.linkedin.com/in/ciro-jao",
    label: "LinkedIn",
  },
  { icon: MdMailOutline, href: "mailto:ciroxjao@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-warm-200 bg-warm-50 mt-24 border-t py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <span className="font-display text-espresso font-semibold">Ciro</span>
          <span className="text-warm-500 text-sm">
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
              className="border-warm-300 text-warm-500 hover:text-warm-700 hover:border-warm-500 hover:bg-warm-100 flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-200"
            >
              <Icon size={16} />
            </Link>
          ))}
        </div>

        <p className="text-warm-400 font-mono text-xs">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
