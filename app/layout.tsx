import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "JobPortal - Find Your Next Job",
  description: "Browse thousands of job listings across top countries worldwide.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><meta name="google-site-verification" content="mhwuIuZvhxIUI-g2YK2o1tfhIy8tt1J2VaZ3Yr9PwOo" /></head>
      <meta name="google-site-verification" content="9jFgTVeWd6lIyuth91m1WDwx62v47MbqrZ03lndiwzc" />
<meta name="google-site-verification" content="0odExRPDqu8uvUfBMHh6xaNPWeAiqdqLsTcA8blKBU4" />
<meta name="google-site-verification" content="QBhMTqn2elKzsIUrlhmEsMBxNMXLnrQI6AJKqQ2jDhc" />
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
