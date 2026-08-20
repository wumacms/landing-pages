// 门户首页：检索、筛选、预览与打开所有已注册的落地页
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  X,
  Eye,
  ArrowUpRight,
  LayoutTemplate,
} from "lucide-react";
import { sites, allTags } from "../sites";
import type { SiteConfig } from "../types";

const Home: React.FC = () => {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [preview, setPreview] = useState<SiteConfig | null>(null);

  // 按关键词 + 标签过滤
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sites.filter((site) => {
      if (activeTag && !site.tags.includes(activeTag)) return false;
      if (!q) return true;
      return [site.name, site.tagline, site.description, ...site.tags]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [query, activeTag]);

  // ESC 关闭预览弹窗
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreview(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const chipClass = (active: boolean) =>
    `rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
      active
        ? "bg-indigo-500 text-white shadow"
        : "bg-white/10 text-slate-300 hover:bg-white/20"
    }`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white">
            <LayoutTemplate className="h-5 w-5 text-indigo-400" />
            <span className="text-lg font-bold">Landing Pages</span>
          </div>
          <span className="text-sm text-slate-400">
            共 {sites.length} 个站点
          </span>
        </div>
      </header>

      {/* 检索区 */}
      <section className="relative overflow-hidden bg-slate-950 pb-16 pt-16 text-center sm:pt-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(99,102,241,0.35), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            浏览与预览每一个
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              落地页
            </span>
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            集中管理多个营销落地页：搜索、按标签筛选，点击即可实时预览或打开完整页面。
          </p>

          {/* 搜索框 */}
          <div className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur transition focus-within:border-indigo-500 focus-within:bg-white/10">
            <Search className="h-5 w-5 shrink-0 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜索站点名称、描述或标签…"
              className="w-full bg-transparent text-white placeholder-slate-500 outline-none"
            />
          </div>

          {/* 标签筛选 */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={chipClass(activeTag === null)}
            >
              全部
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={chipClass(activeTag === tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 站点卡片网格 */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <div className="py-24 text-center text-gray-500">
            未找到匹配的站点，试试其他关键词或清除筛选条件。
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((site) => (
              <article
                key={site.id}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* 封面 */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  {site.cover ? (
                    <img
                      src={site.cover}
                      alt={site.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-600">
                      <LayoutTemplate className="h-10 w-10 text-white/80" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>

                {/* 信息区 */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {site.name}
                      </h3>
                      <p className="text-sm font-medium text-indigo-600">
                        {site.tagline}
                      </p>
                    </div>
                    <Link
                      to={`/sites/${site.id}`}
                      className="rounded-lg p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                      aria-label={`打开 ${site.name}`}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </div>

                  <p className="mt-3 line-clamp-2 text-sm text-gray-600">
                    {site.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {site.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-3 border-t border-gray-100 pt-4">
                    <button
                      onClick={() => setPreview(site)}
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
                    >
                      <Eye className="h-4 w-4" />
                      预览
                    </button>
                    <Link
                      to={`/sites/${site.id}`}
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-500"
                    >
                      打开页面
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* 页脚提示 */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center text-sm text-gray-500">
          在{" "}
          <code className="rounded bg-gray-100 px-1.5 py-0.5 text-indigo-600">
            src/sites/
          </code>{" "}
          注册新的站点配置，即可自动出现在本首页。
        </div>
      </footer>

      {/* iframe 实时预览弹窗 */}
      {preview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          onClick={() => setPreview(null)}
        >
          <div
            className="flex h-[88vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-3">
              <div className="flex min-w-0 items-center gap-2">
                <span className="truncate font-semibold text-gray-900">
                  {preview.name}
                </span>
                <span className="hidden truncate text-sm text-gray-500 sm:block">
                  {preview.tagline}
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={`/sites/${preview.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-600 transition hover:bg-indigo-100"
                >
                  新窗口打开
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <button
                  onClick={() => setPreview(null)}
                  className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100"
                  aria-label="关闭预览"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            <iframe
              src={`/sites/${preview.id}`}
              title={`${preview.name} 预览`}
              className="h-full w-full flex-1 border-0 bg-white"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
