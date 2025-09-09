export const metadata = {
  title: "Tarun Teja Akkipalli — Full‑Stack Developer",
  description: "Portfolio | React • Node/Spring • AWS • Docker • K8s",
}

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
