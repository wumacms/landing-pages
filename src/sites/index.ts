// 站点注册中心：所有落地页在此登记，首页检索、路由跳转均基于此表
import type { SiteConfig } from "../types";
import { chatflowSite } from "./chatflow";
import { nimbusSite } from "./nimbus";

/** 已注册的全部落地页站点（顺序即首页展示顺序） */
export const sites: SiteConfig[] = [chatflowSite, nimbusSite];

/** 按 id 查找站点（对应路由 /sites/:id） */
export const getSiteById = (id?: string): SiteConfig | undefined =>
  sites.find((site) => site.id === id);

/** 全部标签去重，用于首页标签筛选 */
export const allTags: string[] = [
  ...new Set(sites.flatMap((site) => site.tags)),
];
