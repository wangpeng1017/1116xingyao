"use client";

import { operationsSubModules } from "@/modules/operations/config";

export default function OperationsPage() {
  return (
    <main className="operations-page">
      <header className="operations-header">
        <div>
          <h1>选矿生产安环管理（生产运营一体化）</h1>
          <p>
            围绕地质信息、露采/地采生产、选矿、质检化验、设备管理、决策分析、安全环保与移动端，
            构建一体化生产运营管理平台。
          </p>
        </div>
        <div className="operations-badge">DEMO</div>
      </header>

      <section className="operations-grid">
        {operationsSubModules.map((m) => (
          <article key={m.id} className="operations-card">
            <h2>{m.name}</h2>
            <p className="operations-desc">{m.description}</p>
            <ul className="operations-points">
              {m.keyPoints.map((kp, idx) => (
                <li key={idx}>{kp}</li>
              ))}
            </ul>
            <div className="operations-footer">
              <span className="operations-tag">后续可接入数据看板 / 表单</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
