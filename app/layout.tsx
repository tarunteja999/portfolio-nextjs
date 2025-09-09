import "./globals.css"
import type { Metadata } from "next"

// ✅ update these two with your real URLs
const siteUrl = "https://portfolio-nextjs-ub2j.vercel.app"
const ogImage = `${siteUrl}/profile.jpg`

export const metadata: Metadata = {
  title: "Tarun Teja Akkipalli — Full-Stack Developer",
  description:
    "Full-stack developer focused on React/Next.js, Node/Spring, PostgreSQL/MongoDB, AWS. I design, build, and ship scalable web apps end-to-end.",
  metadataBase: new URL(siteUrl),
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Spring Boot",
    "AWS",
    "TypeScript",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Tarun Teja Akkipalli — Full-Stack Developer",
    description:
      "I design & ship scalable web apps. React/Next.js • Node/Spring • AWS.",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "Tarun Teja" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarun Teja Akkipalli — Full-Stack Developer",
    description:
      "I design & ship scalable web apps. React/Next.js • Node/Spring • AWS.",
    images: [ogImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
