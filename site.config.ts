export interface I18nText {
  zh: string;
  en: string;
}

export interface NavItemConfig {
  text: I18nText;
  link: string;
  activeMatch?: string;
}

export interface SidebarItemConfig {
  text: I18nText;
  link?: string;
  items?: SidebarItemConfig[];
  collapsible?: boolean;
}

export interface SiteConfig {
  nav: NavItemConfig[];
  sidebar: {
    [key: string]: SidebarItemConfig[];
  };
}

export const siteConfig: SiteConfig = {
  nav: [
    {
      text: { zh: '首页', en: 'Home' },
      link: '/',
      activeMatch: '/index',
    },
    {
      text: { zh: '博客', en: 'Blog' },
      link: '/blog/kubecon',
      activeMatch: '/blog',
    },
  ],
  sidebar: {
    '/guide/': [
      {
        collapsible: false,
        text: { zh: '开始', en: 'Getting started' },
        items: [
          {
            link: '/guide/introduction',
            text: { zh: '介绍', en: 'Introduction' },
          },
          {
            link: '/guide/quick-start',
            text: { zh: '快速开始', en: 'Quick Start' },
          },
        ],
      },
      {
        collapsible: false,
        text: { zh: 'Inference General Perf', en: 'Inference General Perf' },
        items: [
          {
            link: '/guide/inference_general_overview',
            text: { zh: '概览', en: 'Overview' },
          },
          {
            link: '/guide/inference_general_vendor',
            text: { zh: '厂商接入指南', en: 'Vendor Integration Guide' },
          },
        ],
      },
      {
        collapsible: false,
        text: { zh: 'Inference LLM Perf', en: 'Inference LLM Perf' },
        items: [
          {
            link: '/guide/inference_llm_overview',
            text: { zh: '概览', en: 'Overview' },
          },
          {
            link: '/guide/inference_llm_vendor',
            text: { zh: '厂商接入指南', en: 'Vendor Integration Guide' },
          },
        ],
      },
      {
        collapsible: false,
        text: { zh: 'Micro Perf', en: 'Micro Perf' },
        items: [
          {
            link: '/guide/micro_overview',
            text: { zh: '概览', en: 'Overview' },
          },
          {
            link: '/guide/micro_vendor',
            text: { zh: '厂商接入指南', en: 'Vendor Integration Guide' },
          },
        ],
      },
      {
        collapsible: false,
        text: { zh: 'Training Perf', en: 'Training Perf' },
        items: [
          {
            link: '/guide/training_overview',
            text: { zh: '概览', en: 'Overview' },
          },
        ],
      },
    ],
    '/blog/': [
      {
        text: { zh: '研究成果', en: 'Research Achievements' },
        items: [
          {
            text: {
              zh: 'AI ASIC 的基准测试、优化和生态系统协作的整合',
              en: 'Integration of Benchmark Testing, Optimization, and Ecosystem Collaboration for AI ASICs',
            },
            link: '/blog/kubecon',
          },
          {
            text: {
              zh: 'ByteMLPerf将参加Open Source Summit',
              en: 'ByteMLPerf will be participating in the upcoming Open Source Summit in Shanghai',
            },
            link: '/blog/summit',
          },
          {
            text: {
              zh: 'GRAPHCORE现已支持BYTEMLPERF',
              en: 'Graphcore now supports ByteMLPerf',
            },
            link: '/blog/graphcore',
          },
          {
            text: {
              zh: '构建开源 AI 硬件评测工具， ByteMLperf-v1.0 X 天数智芯，扬长避短是关键',
              en: 'Building an Open Source AI Hardware Benchmark Tool, ByteMLperf-v1.0 X Days Accelerator, Leveraging the Advantages of Days Accelerator while Avoiding its Shortcomings',
            },
            link: '/blog/ts',
          },
        ],
      },
    ],
  },
};
