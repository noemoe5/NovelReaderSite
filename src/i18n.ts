export type Lang = 'zh' | 'en'

export const dict: Record<Lang, any> = {
  zh: {
    nav: { features: '功能', modes: '阅读模式', tts: 'AI 朗读', tech: '技术栈', download: '下载', github: 'GitHub' },
    hero: {
      badge: 'Electron 桌面阅读器',
      titleA: '为小说而生的',
      titleB: '沉浸式阅读器',
      subtitle: '支持竖向滚动与横向翻页双模式,集成 GPT-SoVITS AI 语音朗读,让你的书架焕发新生。',
      cta1: '下载 Windows 版',
      cta2: '在 GitHub 查看',
      note: '免费 · 开源 · 无需登录'
    },
    features: {
      title: '核心功能',
      subtitle: '为长时间阅读精心打磨',
      items: [
        { icon: '📜', title: '双模式阅读', desc: '竖向滚动顺滑如流水,横向翻页还原纸质书质感。' },
        { icon: '📚', title: '智能书架', desc: '一键导入 EPUB,随时整理、删除与重新导入。' },
        { icon: '🔊', title: 'AI 语音朗读', desc: '接入 GPT-SoVITS,用你喜欢的声线听完整本书。' },
        { icon: '🎨', title: '主题与排版', desc: '明/暗主题、字号、行距、字体随心调整。' },
        { icon: '✏️', title: '阅读标注', desc: '划线笔记,重要内容随手收藏与回顾。' },
        { icon: '⚡', title: '轻量流畅', desc: 'Electron 封装,启动快、内存占用低。' }
      ]
    },
    modes: {
      title: '两种阅读模式',
      subtitle: '总有一种适合你',
      vertical: { title: '竖向滚动', desc: '内容连续铺展,滚轮或触控板一滑到底,适合沉浸式连读。' },
      horizontal: { title: '横向翻页', desc: '仿真书页左右翻动,保留纸质书的翻页仪式感。' }
    },
    tts: {
      title: 'AI 语音朗读',
      subtitle: '用声音打开每一本书',
      items: [
        { title: '本地大模型驱动', desc: '基于 GPT-SoVITS,可部署在你自己的 GPU 机器上,数据不出本机。' },
        { title: '多声线定制', desc: '通过参考音频定制专属音色,听书更有温度。' },
        { title: '逐句同步高亮', desc: '朗读进度与文本高亮同步,听读结合不跟丢。' }
      ],
      note: '提示:AI 朗读需要可运行 GPT-SoVITS 的 GPU 环境,软件内可配置接口地址。'
    },
    tech: {
      title: '技术栈',
      subtitle: '现代前端工程打造',
      tags: ['React', 'Vite', 'TypeScript', 'EPUB.js', 'framer-motion', 'zustand', 'Electron']
    },
    download: {
      title: '立即开始阅读',
      subtitle: '支持 Windows,绿色免安装版可选',
      nsis: 'Windows 安装版',
      portable: '免安装便携版',
      github: '源代码 (GitHub)',
      note: '当前版本 v1.0.0 · 仅支持 Windows'
    },
    footer: 'NovelReader 是一款开源小说阅读器,基于 Electron 构建。'
  },
  en: {
    nav: { features: 'Features', modes: 'Reading Modes', tts: 'AI Narration', tech: 'Tech Stack', download: 'Download', github: 'GitHub' },
    hero: {
      badge: 'Electron Desktop Reader',
      titleA: 'An immersive',
      titleB: 'novel reader',
      subtitle: 'Dual reading modes — vertical scroll and horizontal page-flip — with GPT-SoVITS AI narration built in. Bring your bookshelf back to life.',
      cta1: 'Download for Windows',
      cta2: 'View on GitHub',
      note: 'Free · Open Source · No login'
    },
    features: {
      title: 'Core Features',
      subtitle: 'Crafted for long reading sessions',
      items: [
        { icon: '📜', title: 'Dual Reading Modes', desc: 'Smooth vertical scrolling or paper-like horizontal page flipping.' },
        { icon: '📚', title: 'Smart Bookshelf', desc: 'Import EPUB in one click; organize, delete and re-import anytime.' },
        { icon: '🔊', title: 'AI Narration', desc: 'Plug in GPT-SoVITS and listen to the whole book in your favorite voice.' },
        { icon: '🎨', title: 'Themes & Typography', desc: 'Light/dark themes, font size, line height and typeface — all adjustable.' },
        { icon: '✏️', title: 'Highlights', desc: 'Mark and save important passages with inline notes.' },
        { icon: '⚡', title: 'Lightweight & Fast', desc: 'Wrapped in Electron: quick to launch, low memory footprint.' }
      ]
    },
    modes: {
      title: 'Two Reading Modes',
      subtitle: 'There is one for everyone',
      vertical: { title: 'Vertical Scroll', desc: 'Content flows continuously; scroll with wheel or trackpad — perfect for immersive reading.' },
      horizontal: { title: 'Horizontal Flip', desc: 'Pages turn left and right like a real book, keeping the ritual of paper reading.' }
    },
    tts: {
      title: 'AI Narration',
      subtitle: 'Open every book with a voice',
      items: [
        { title: 'Local LLM powered', desc: 'Built on GPT-SoVITS, deployable on your own GPU box — your data never leaves the machine.' },
        { title: 'Custom voices', desc: 'Craft a personal timbre from reference audio for warmer listening.' },
        { title: 'Sentence-synced highlight', desc: 'Narration progress highlights text in sync, so you never lose your place.' }
      ],
      note: 'Note: AI narration needs a GPU environment running GPT-SoVITS; the API address is configurable in-app.'
    },
    tech: {
      title: 'Tech Stack',
      subtitle: 'Built with modern frontend engineering',
      tags: ['React', 'Vite', 'TypeScript', 'EPUB.js', 'framer-motion', 'zustand', 'Electron']
    },
    download: {
      title: 'Start Reading Now',
      subtitle: 'Windows supported, with a portable build',
      nsis: 'Windows Installer',
      portable: 'Portable (no install)',
      github: 'Source Code (GitHub)',
      note: 'Current version v1.0.0 · Windows only'
    },
    footer: 'NovelReader is an open-source novel reader built on Electron.'
  }
}

export const GITHUB_URL = 'https://github.com/noemoe5/NovelReaderElectron'
export const RELEASE_URL = 'https://github.com/noemoe5/NovelReaderElectron/releases/tag/v1.0.0'
