import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { dict, GITHUB_URL, RELEASE_URL, type Lang } from './i18n'

const REVEAL = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div {...REVEAL} transition={{ ...REVEAL.transition, delay }}>
      {children}
    </motion.div>
  )
}

function Navbar({ t, lang, setLang, theme, setTheme }: any) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 16)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  const links = [
    ['#features', t.features],
    ['#modes', t.modes],
    ['#tts', t.tts],
    ['#tech', t.tech]
  ]
  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a className="brand" href="#top">
          <span className="brand__mark" />
          <span className="brand__name">NovelReader</span>
        </a>
        <nav className="nav__links">
          {links.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <div className="nav__controls">
          <button className="pill" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="toggle theme">
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <button className="pill" onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}>
            {lang === 'zh' ? '中' : 'EN'}
          </button>
          <a className="btn btn--ghost" href={RELEASE_URL}>{t.download}</a>
        </div>
      </div>
    </header>
  )
}

function Hero({ t }: any) {
  return (
    <section className="hero" id="top">
      <div className="hero__glow" />
      <div className="hero__grid">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="badge">{t.badge}</span>
          <h1 className="hero__title">
            {t.titleA}
            <br />
            <span className="grad">{t.titleB}</span>
          </h1>
          <p className="hero__sub">{t.subtitle}</p>
          <div className="hero__cta">
            <a className="btn btn--primary" href={RELEASE_URL}>{t.cta1}</a>
            <a className="btn btn--ghost" href={GITHUB_URL}>{t.cta2}</a>
          </div>
          <p className="hero__note">{t.note}</p>
        </motion.div>

        <motion.div
          className="hero__art"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <div className="screenshot-frame">
            <div className="screenshot-frame__dots">
              <span /><span /><span />
            </div>
            <img src="/screenshot.png" alt="NovelReader App Screenshot" className="screenshot-img" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Features({ t }: any) {
  return (
    <section className="section" id="features">
      <Reveal>
        <p className="eyebrow">{t.subtitle}</p>
        <h2 className="section__title">{t.title}</h2>
      </Reveal>
      <div className="cards">
        {t.items.map((it: any, i: number) => (
          <Reveal key={it.title} delay={i * 0.06}>
            <div className="card">
              <div className="card__icon">{it.icon}</div>
              <h3 className="card__title">{it.title}</h3>
              <p className="card__desc">{it.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Modes({ t }: any) {
  const items = [
    { ...t.vertical, tag: '↕' },
    { ...t.horizontal, tag: '↔' }
  ]
  return (
    <section className="section section--alt" id="modes">
      <Reveal>
        <p className="eyebrow">{t.subtitle}</p>
        <h2 className="section__title">{t.title}</h2>
      </Reveal>
      <div className="modes">
        {items.map((m: any, i: number) => (
          <Reveal key={m.title} delay={i * 0.1}>
            <div className="mode">
              <div className="mode__tag">{m.tag}</div>
              <h3 className="mode__title">{m.title}</h3>
              <p className="mode__desc">{m.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function TTS({ t }: any) {
  return (
    <section className="section" id="tts">
      <Reveal>
        <p className="eyebrow">{t.subtitle}</p>
        <h2 className="section__title">{t.title}</h2>
      </Reveal>
      <div className="tts">
        <div className="tts__list">
          {t.items.map((it: any, i: number) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <div className="tts__item">
                <span className="dot" />
                <div>
                  <h3>{it.title}</h3>
                  <p>{it.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="tts__card">
            <div className="wave">
              {Array.from({ length: 28 }).map((_, i) => (
                <span key={i} style={{ animationDelay: `${i * 0.06}s` }} />
              ))}
            </div>
            <p className="tts__note">{t.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Tech({ t }: any) {
  return (
    <section className="section section--alt" id="tech">
      <Reveal>
        <p className="eyebrow">{t.subtitle}</p>
        <h2 className="section__title">{t.title}</h2>
      </Reveal>
      <Reveal>
        <div className="tags">
          {t.tags.map((tag: string) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

function Download({ t }: any) {
  return (
    <section className="section download" id="download">
      <Reveal>
        <h2 className="section__title">{t.title}</h2>
        <p className="eyebrow">{t.subtitle}</p>
        <div className="download__btns">
          <a className="btn btn--primary btn--lg" href={RELEASE_URL}>{t.nsis}</a>
          <a className="btn btn--ghost btn--lg" href={RELEASE_URL}>{t.portable}</a>
          <a className="btn btn--outline btn--lg" href={GITHUB_URL}>{t.github}</a>
        </div>
        <p className="download__note">{t.note}</p>
      </Reveal>
    </section>
  )
}

function Footer({ t }: any) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="brand__name">NovelReader</span>
        <p>{t.footer}</p>
        <a href={GITHUB_URL}>GitHub ↗</a>
      </div>
    </footer>
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>('zh')
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  const t = dict[lang]
  return (
    <>
      <Navbar t={t.nav} lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      <main>
        <Hero t={t.hero} />
        <Features t={t.features} />
        <Modes t={t.modes} />
        <TTS t={t.tts} />
        <Tech t={t.tech} />
        <Download t={t.download} />
      </main>
      <Footer t={t.footer} />
    </>
  )
}
