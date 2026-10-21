'use client';

import { usePathname } from 'next/navigation';

/**
 * 备案信息配置
 * 请将下方占位号替换为真实备案号；也可通过环境变量配置（修改后需重新构建）：
 *   NEXT_PUBLIC_ICP_BEIAN     例如：粤ICP备2026000000号-1
 *   NEXT_PUBLIC_POLICE_BEIAN  例如：粤公网安备 44030002000000号
 */
const ICP_BEIAN = process.env.NEXT_PUBLIC_ICP_BEIAN || '晋ICP备2023020746号-2';
const POLICE_BEIAN = process.env.NEXT_PUBLIC_POLICE_BEIAN || '晋公网安备14010602111139';

// 工信部 ICP/IP 地址/域名信息备案管理系统
const ICP_HREF = 'https://beian.miit.gov.cn/';

// 全国互联网安全管理服务平台：从备案号中提取数字，生成对应网站的查询地址
const policeCode = POLICE_BEIAN.match(/\d{8,}/)?.[0] || '';
const POLICE_HREF = `https://beian.mps.gov.cn/#/query/webSearch?code=${policeCode}`;

export default function SiteFooter() {
  const pathname = usePathname();

  // 嵌入式 Widget 页面不展示网站备案信息，避免污染宿主页面
  if (pathname?.startsWith('/widget')) return null;

  return (
    <footer
      data-site-footer
      aria-label="网站备案信息"
      className="shrink-0 border-t border-gray-100 bg-white"
    >
      <div className="mx-auto flex min-h-[40px] max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-2 text-xs leading-none text-gray-500">
        <a
          href={ICP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm transition-colors duration-200 hover:text-gray-800 hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 focus-visible:ring-offset-2"
        >
          {ICP_BEIAN}
        </a>
        <span aria-hidden="true" className="hidden h-3 w-px bg-gray-200 sm:block" />
        <a
          href={POLICE_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-sm transition-colors duration-200 hover:text-gray-800 hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 focus-visible:ring-offset-2"
        >
          <img
            src="/beian.png"
            alt=""
            width={20}
            height={20}
            decoding="async"
            draggable={false}
            className="h-5 w-5 shrink-0 select-none object-contain"
          />
          <span>{POLICE_BEIAN}</span>
        </a>
      </div>
    </footer>
  );
}
