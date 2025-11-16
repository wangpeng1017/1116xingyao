"use client";

import { useState } from "react";
import { operationsSubModules } from "@/modules/operations/config";

export default function OperationsPage() {
  const [activeId, setActiveId] = useState(
    operationsSubModules[0]?.id ?? ""
  );

  const activeModule =
    operationsSubModules.find((m) => m.id === activeId) ??
    operationsSubModules[0];

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

      <section className="operations-layout">
        <nav className="operations-sidebar">
          <h2 className="operations-sidebar-title">子模块导航</h2>
          <ul className="operations-sidebar-list">
            {operationsSubModules.map((m) => {
              const isActive = m.id === activeId;
              return (
                <li key={m.id}>
                  <button
                    type="button"
                    className={`operations-nav-item${
                      isActive ? " operations-nav-item--active" : ""
                    }`}
                    onClick={() => setActiveId(m.id)}
                  >
                    <span className="operations-nav-name">{m.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <section className="operations-content">
          <h2 className="operations-content-title">{activeModule.name}</h2>
          <p className="operations-content-desc">{activeModule.description}</p>
          <ul className="operations-points">
            {activeModule.keyPoints.map((kp, idx) => (
              <li key={idx}>{kp}</li>
            ))}
          </ul>

          <div className="operations-footer">
            <span className="operations-tag">
              后续可在此区域接入：数据看板 / 列表表格 / 业务表单
            </span>
          </div>
        </section>
      </section>
    </main>
  );
}
