import path from 'path';
import { defineConfig } from 'rspress/config';
import { NavItem, Sidebar } from '@rspress/shared';
import { pluginShiki } from '@rspress/plugin-shiki';
import { pluginRss, PluginRssOption } from './rspress/plugin-rss';
import { toArray } from './rspress/plugin-rss/utils';
import { siteConfig, I18nText } from './site.config';

const PUBLISH_URL = 'https://bytemlperf.ai';
const COPYRIGHT = '© 2024 Bytedance Inc. All Rights Reserved.';

function getMeta(name: string, value: string) {
  return {
    [name]: {
      property: name,
      content: value,
    },
  };
}

function getI18nHelper(lang: 'zh' | 'en') {
  const isZh = lang === 'zh';
  const prefix = isZh ? '/zh' : '';
  const getLink = (str: string) => `${prefix}${str}`;
  const getText = (text: I18nText | string) => {
    if (typeof text === 'string') {
      return text;
    }
    return isZh ? text.zh : text.en;
  };
  return { getText, getLink };
}

function getNavConfig(lang: 'zh' | 'en'): NavItem[] {
  const { getText, getLink } = getI18nHelper(lang);
  return siteConfig.nav.map((item) => ({
    text: getText(item.text),
    link: getLink(item.link),
    activeMatch: item.activeMatch,
  }));
}

function getSidebarConfig(lang: 'zh' | 'en'): Sidebar {
  const { getText, getLink } = getI18nHelper(lang);
  const sidebar: Sidebar = {};

  Object.keys(siteConfig.sidebar).forEach((key) => {
    const linkKey = getLink(key);
    sidebar[linkKey] = siteConfig.sidebar[key].map((group) => ({
      collapsible: group.collapsible,
      text: getText(group.text),
      items: group.items
        ? group.items.map((item) => ({
            text: getText(item.text),
            link: item.link ? getLink(item.link) : '',
          }))
        : [],
    }));
  });

  return sidebar;
}

const toFeedItem: PluginRssOption['toFeedItem'] = (page) => {
  const fm = page.frontmatter as Record<string, any>;
  const { date } = fm;
  if (!date) return false;

  const categories = toArray(fm['categories'], fm['category']);

  const isBlog = /blog/.test(page.routePath) || categories.includes('blog');
  // we only include the blogs at the moment
  if (!isBlog) return false;

  const feed = `blog-${page.lang}`;

  return {
    title: fm.title || page.title || '',
    id: fm.rssId || page.id || '',
    link: fm.permalink || page.routePath || '',
    description: fm.rssDescription || fm.description || '',
    content: fm.rssContent || fm.summary || page.content || '',
    date,
    category: categories,
    feed,
  };
};

export default defineConfig({
  route: {
    cleanUrls: true,
  },
  root: path.join(__dirname, 'docs'),
  title: 'ByteMLPerf',
  description: 'AI Accelerator Benchmark focuses on evaluating AI Accelerators',
  logo: {
    light: '/bytemlperf-logo-light.png',
    dark: '/bytemlperf-logo-dark.png',
  },
  icon: '/icon.png',
  lang: 'en',
  globalStyles: path.join(__dirname, 'theme', 'index.css'),
  markdown: {
    checkDeadLinks: true,
  },
  plugins: [
    pluginShiki(),
    pluginRss({
      routePublicPath: PUBLISH_URL,
      feedOptions: { copyright: COPYRIGHT, link: PUBLISH_URL },
      feedOptionsByName: {
        'blog-en': { title: 'ByteMLPerf Blog', link: `${PUBLISH_URL}/blog` },
        'blog-zh': { title: 'ByteMLPerf 博客', link: `${PUBLISH_URL}/zh/blog` },
      },
      toFeedItem,
    }),
  ],
  themeConfig: {
    enableScrollToTop: true,
    darkMode: false,
    search: false,
    enableContentAnimation: true,
    footer: {
      message: '© 2024 Bytedance Inc. All Rights Reserved.',
    },
    locales: [
      {
        lang: 'en',
        title: 'ByteMLPerf',
        description:
          'AI Accelerator Benchmark focuses on evaluating AI Accelerators',
        nav: getNavConfig('en'),
        sidebar: getSidebarConfig('en'),
        label: 'English',
      },
      {
        lang: 'zh',
        title: 'ByteMLPerf',
        description: '专注于AI芯片基准测试',
        nav: getNavConfig('zh'),
        sidebar: getSidebarConfig('zh'),
        label: '简体中文',
      },
    ],
  },
  builderConfig: {
    source: {
      alias: {
        '@builtIns': path.join(__dirname, 'components', 'builtIns'),
        '@components': path.join(__dirname, 'components'),
        '@hooks': path.join(__dirname, 'hooks'),
      },
    },
    tools: {
      postcss: (_, { addPlugins }) => {
        addPlugins([require('tailwindcss/nesting'), require('tailwindcss')]);
      },
    },
    html: {
      meta: {
        ...getMeta('og:title', 'ByteMLPerf'),
        ...getMeta('og:type', 'website'),
        ...getMeta('og:url', PUBLISH_URL),
        ...getMeta(
          'og:description',
          'AI Accelerator Benchmark focuses on evaluating AI Accelerators'
        ),
        ...getMeta('twitter:site', '@bytemlperf'),
        ...getMeta('twitter:card', 'summary_large_image'),
      },
      tags: [
        // Configure Google Analytics
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-XKKCNZZNJD',
          },
        },
        {
          tag: 'script',
          children: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XKKCNZZNJD');`,
        },
      ],
    },
    output: {
      copy: {
        patterns: [
          {
            from: path.join(__dirname, 'docs', 'public', '_redirects'),
          },
          {
            from: path.join(__dirname, 'docs', 'public', '_headers'),
          },
        ],
      },
    },
  },
});
