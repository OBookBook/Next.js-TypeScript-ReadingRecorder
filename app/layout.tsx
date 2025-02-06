import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Reading Recorder - 読書記録管理アプリ",
  description:
    "読書記録を簡単に管理・共有できるアプリ。本の感想や評価を記録し、読書の振り返りに活用できます。読書好きのための最適な読書管理ツール。",
  keywords: "読書記録, 読書管理, ブックログ, 読書感想, 読書レビュー",
  openGraph: {
    title: "Reading Recorder - あなたの読書記録を管理",
    description:
      "読書記録を簡単に管理・共有できるアプリ。本の感想や評価を記録し、読書の振り返りに活用できます。",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reading Recorder - 読書記録管理アプリ",
    description:
      "読書記録を簡単に管理・共有できるアプリ。本の感想や評価を記録し、読書の振り返りに活用できます。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <h1 className="text-4xl text-indigo-800 font-bold my-2">
          Reading Recorder
        </h1>
        <ul className="flex bg-blue-600 mb-4 pl-2">
          <li className="block px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <Link className="no-underline text-blue-300" href="/">
              Home
            </Link>
          </li>
          <li className="block text-blue-300 px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <Link className="no-underline text-blue-300" href="/books">
              Search
            </Link>
          </li>
          <li className="block text-blue-300 px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <a className="no-underline text-blue-300" href="/" target="_blank">
              Support
            </a>
          </li>
        </ul>
        <div className="ml-2">{children}</div>
      </body>
    </html>
  );
}
