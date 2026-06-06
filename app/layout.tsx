import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "JobPortal - Find Your Next Job",
  description: "Browse thousands of job listings across top countries worldwide.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
