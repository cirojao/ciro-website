import { getCanonicalPath, getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const homeUrl = `${siteUrl}${getCanonicalPath("/")}`;
const personId = `${homeUrl}#ciro`;
const websiteId = `${homeUrl}#website`;

export function getPersonStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: "Ciro Jao",
    url: homeUrl,
    image: `${siteUrl}/images/ciro_bg.png`,
    jobTitle: "Frontend Engineer",
    description: "專注於打造流暢、優雅使用者體驗的前端工程師",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Taipei",
      addressCountry: "TW",
    },
    sameAs: [
      "https://github.com/cirojao",
      "https://www.linkedin.com/in/ciro-jao",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL",
      "REST API",
      "Frontend Development",
    ],
  };
}

export function getWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: "Ciro Jao",
    url: homeUrl,
    description: "Ciro Jao 的前端工程師作品集網站",
    inLanguage: "zh-TW",
    publisher: {
      "@id": personId,
    },
  };
}

export function getAboutPageStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}${getCanonicalPath("/about")}#profile`,
    url: `${siteUrl}${getCanonicalPath("/about")}`,
    name: "About | Ciro Jao",
    description: "Ciro Jao 的背景、興趣與工作哲學",
    inLanguage: "zh-TW",
    mainEntity: {
      "@id": personId,
    },
  };
}

export function getProjectsPageStructuredData(projects: {
  title: string;
  description: string;
  tags: string[];
  url?: string;
}[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}${getCanonicalPath("/projects")}#collection`,
    url: `${siteUrl}${getCanonicalPath("/projects")}`,
    name: "Projects | Ciro Jao",
    description: "Ciro Jao 的前端開發作品集與專案案例",
    inLanguage: "zh-TW",
    about: {
      "@id": personId,
    },
    hasPart: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      keywords: project.tags.join(", "),
      ...(project.url ? { url: project.url } : {}),
    })),
  };
}
