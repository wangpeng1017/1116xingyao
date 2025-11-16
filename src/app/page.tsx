import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page">
      <h1 className="home-title">星耀矿业集团智慧矿山管理系统</h1>
      <p className="home-subtitle">
        当前演示模块：选矿生产安环管理（生产运营一体化）。
      </p>
      <Link href="/operations" className="home-link">
        进入生产运营一体化 DEMO
      </Link>
    </main>
  );
}
