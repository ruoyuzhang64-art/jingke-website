import { useState, useEffect } from 'react'
import './App.css'

const NAV_ITEMS = [
  { label: '首页', href: '#home' },
  { label: '关于京科', href: '#about' },
  { label: '核心业务', href: '#business' },
  { label: '产业方向', href: '#industries' },
  { label: '解决方案', href: '#solutions' },
  { label: '联系我们', href: '#contact' },
]

const INDUSTRIES = [
  {
    title: '国产替代',
    desc: '聚焦关键核心技术自主可控，推动产业链供应链安全韧性提升，助力国家战略科技力量建设。',
    icon: '◆',
  },
  {
    title: '两新两重',
    desc: '深度参与新型基础设施与新型城镇化建设，以及国家重大战略工程，把握政策红利与产业机遇。',
    icon: '◇',
  },
  {
    title: '绿色低碳',
    desc: '布局新能源、节能环保与碳中和产业链，推动经济社会全面绿色转型与可持续发展。',
    icon: '○',
  },
]

const CORE_BUSINESS = [
  {
    title: '产业链投资',
    desc: '以资本力量撬动新兴产业集群，精准布局高成长性赛道，实现产融深度结合。',
  },
  {
    title: '产业运营',
    desc: '提供全生命周期产业运营管理服务，推动项目落地与价值释放，确保可持续增长。',
  },
  {
    title: '产业升级解决方案',
    desc: '为政企客户量身定制内生式产业升级路径，打通从规划到落地的全链条服务。',
  },
  {
    title: '产融协同',
    desc: '整合金融资源与产业资源，构建多元化投融资体系，加速新质生产力培育。',
  },
]

const SOLUTIONS = [
  {
    title: '政企定制方案',
    desc: '深入理解政企客户需求，提供差异化、可落地的产业升级内生式解决方案。',
  },
  {
    title: '因地制宜项目',
    desc: '结合区域资源禀赋与产业基础，打造符合地方实际的新质生产力示范项目。',
  },
  {
    title: '全周期服务',
    desc: '从战略规划、项目策划到投资运营，提供一站式、全链条专业服务支撑。',
  },
]

const HERO_CAPABILITIES = [
  { label: '国产替代', tag: 'INDUSTRY' },
  { label: '两新两重', tag: 'POLICY' },
  { label: '绿色低碳', tag: 'GREEN' },
  { label: '产业链投资', tag: 'INVEST' },
  { label: '产融协同', tag: 'FINANCE' },
  { label: '项目落地', tag: 'DELIVERY' },
]

const ABOUT_STATS = [
  { num: '3', label: '大产业方向' },
  { num: '4', label: '大核心业务' },
  { num: '2', label: '大资源支撑' },
  { num: '多元', label: '政企场景', highlight: true },
]

const COOPERATION_DIRECTIONS = [
  {
    title: '产业投资合作',
    desc: '联合布局战略性新兴产业，共建产业基金与投资平台，实现资本与产业双向赋能。',
  },
  {
    title: '区域产业升级',
    desc: '为地方政府提供内生式产业升级路径规划，推动区域产业结构优化与动能转换。',
  },
  {
    title: '产业园区运营',
    desc: '承接产业园区投资开发与专业化运营，打造产业集聚与项目落地载体。',
  },
  {
    title: '新质生产力项目导入',
    desc: '因地制宜导入新质生产力示范项目，助力政企客户把握政策机遇、实现高质量发展。',
  },
]

const ADVANTAGES = [
  {
    org: '赛迪新质生产力发展促进中心',
    desc: '国家级智库资源支撑，提供前沿产业政策研究与战略咨询能力。',
    logo: '/saidi-logo.png',
  },
  {
    org: '广东省产融协同科技研究院',
    desc: '深耕粤港澳大湾区产融协同创新，搭建政产学研用一体化合作平台。',
    logo: '/guangdong-research-logo.png',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <div className="app">
      {/* 顶部导航 */}
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header__inner">
          <a href="#home" className="logo" onClick={handleNavClick}>
            <img src="/logo.png" alt="京科控股国际集团" className="logo__img" />
          </a>

          <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
            <ul className="nav__list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={handleNavClick}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className={`menu-btn ${menuOpen ? 'menu-btn--open' : ''}`}
            aria-label="菜单"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        {/* 首屏 Hero */}
        <section id="home" className="hero">
          <div className="hero__bg">
            <div className="hero__grid" />
            <div className="hero__orb hero__orb--1" />
            <div className="hero__orb hero__orb--2" />
          </div>
          <div className="container hero__content">
            <div className="hero__layout">
              <div className="hero__main">
                <p className="hero__tag">深圳 · 产业投资运营集团</p>
                <h1 className="hero__title">
                  <span className="hero__title-line">聚焦新质生产力</span>
                  <span className="hero__title-line">赋能产业升级新格局</span>
                </h1>
                <p className="hero__subtitle">
                  聚焦国产替代、两新两重、绿色低碳三大领域，围绕新兴产业链投资、运营与项目落地，为政企市场提供产业升级内生式解决方案与因地制宜的新质生产力项目。
                </p>
                <div className="hero__actions">
                  <a href="#about" className="btn btn--primary">
                    了解京科
                  </a>
                  <a href="#contact" className="btn btn--outline">
                    联系我们
                  </a>
                </div>
                <div className="hero__trust">
                  <span>投资驱动</span>
                  <span className="hero__trust-divider" />
                  <span>运营赋能</span>
                  <span className="hero__trust-divider" />
                  <span>项目落地</span>
                </div>
              </div>

              <div className="hero__matrix">
                <div className="hero-matrix">
                  <div className="hero-matrix__header">
                    <span className="hero-matrix__label">CAPABILITY MATRIX</span>
                    <h2 className="hero-matrix__title">产业能力矩阵</h2>
                  </div>
                  <div className="hero-matrix__grid">
                    {HERO_CAPABILITIES.map((item, i) => (
                      <div key={item.label} className="hero-matrix__cell">
                        <span className="hero-matrix__index">{String(i + 1).padStart(2, '0')}</span>
                        <span className="hero-matrix__name">{item.label}</span>
                        <span className="hero-matrix__tag">{item.tag}</span>
                      </div>
                    ))}
                  </div>
                  <div className="hero-matrix__footer">
                    <span className="hero-matrix__dot" />
                    全链条产业服务能力
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 关于京科 */}
        <section id="about" className="section section--light">
          <div className="container">
            <div className="section-header">
              <span className="section-label">ABOUT US</span>
              <h2 className="section-title">关于京科控股国际集团</h2>
              <div className="section-line" />
            </div>
            <div className="about-grid">
              <div className="about-card about-card--main">
                <div className="about-card__deco" />
                <p>
                  京科控股国际集团总部位于<strong>深圳</strong>，是一家专注于新兴产业投资与运营的综合性控股集团。公司立足粤港澳大湾区，面向全国政企市场，以新质生产力为核心驱动力，致力于推动产业结构优化升级。
                </p>
                <p>
                  我们聚焦<strong>国产替代</strong>、<strong>两新两重</strong>、<strong>绿色低碳</strong>三大战略领域，为政企客户深度定制产业升级内生式解决方案与因地制宜的新质生产力项目，助力区域经济高质量发展。
                </p>
              </div>
              <div className="about-stats">
                {ABOUT_STATS.map((item) => (
                  <div
                    key={item.label}
                    className={`stat-card${item.highlight ? ' stat-card--highlight' : ''}`}
                  >
                    <span className="stat-card__num">{item.num}</span>
                    <span className="stat-card__label">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 三大产业方向 */}
        <section id="industries" className="section section--dark">
          <div className="container">
            <div className="section-header section-header--light">
              <span className="section-label">INDUSTRIES</span>
              <h2 className="section-title">三大产业方向</h2>
              <div className="section-line" />
              <p className="section-desc">
                聚焦国家战略与政策导向，深耕三大新兴产业链的投资与运营
              </p>
            </div>
            <div className="card-grid card-grid--3">
              {INDUSTRIES.map((item, i) => (
                <article key={item.title} className="industry-card">
                  <div className="industry-card__icon">{item.icon}</div>
                  <span className="industry-card__index">0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="industry-card__bar" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 核心业务 */}
        <section id="business" className="section section--light">
          <div className="container">
            <div className="section-header">
              <span className="section-label">CORE BUSINESS</span>
              <h2 className="section-title">核心业务</h2>
              <div className="section-line" />
              <p className="section-desc">
                构建投资、运营、解决方案、产融协同四位一体的综合服务体系
              </p>
            </div>
            <div className="card-grid card-grid--4">
              {CORE_BUSINESS.map((item) => (
                <article key={item.title} className="business-card">
                  <div className="business-card__accent" />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 政企解决方案 */}
        <section id="solutions" className="section section--gradient">
          <div className="container">
            <div className="section-header section-header--light">
              <span className="section-label">SOLUTIONS</span>
              <h2 className="section-title">政企解决方案</h2>
              <div className="section-line" />
              <p className="section-desc">
                为政企市场深度定制产业升级内生式解决方案与因地制宜新质生产力项目
              </p>
            </div>
            <div className="solutions-layout">
              {SOLUTIONS.map((item, i) => (
                <article key={item.title} className="solution-card">
                  <div className="solution-card__num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="solution-card__body">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 资源优势 */}
        <section id="advantages" className="section section--light">
          <div className="container">
            <div className="section-header">
              <span className="section-label">ADVANTAGES</span>
              <h2 className="section-title">资源优势</h2>
              <div className="section-line" />
              <p className="section-desc">
                依托国家级智库与省级研究机构，汇聚顶尖产业资源与专业服务能力
              </p>
            </div>
            <div className="advantage-grid">
              {ADVANTAGES.map((item) => (
                <article key={item.org} className="advantage-card">
                  <div className="advantage-card__logo-wrap">
                    <img src={item.logo} alt={item.org} className="advantage-card__logo" />
                  </div>
                  <h3>{item.org}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
            <div className="advantage-banner">
              <p>
                依托赛迪新质生产力发展促进中心与广东省产融协同科技研究院，
                为政企市场深度定制产业升级内生式解决方案与因地制宜新质生产力项目
              </p>
            </div>
          </div>
        </section>

        {/* 联系我们 */}
        <section id="contact" className="section section--contact">
          <div className="container">
            <div className="section-header">
              <span className="section-label">CONTACT</span>
              <h2 className="section-title">联系我们</h2>
              <div className="section-line" />
            </div>
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-item__label">公司名称</span>
                  <span className="contact-item__value">京科控股国际集团</span>
                </div>
                <div className="contact-item">
                  <span className="contact-item__label">联系人</span>
                  <span className="contact-item__value">路总</span>
                </div>
                <div className="contact-item">
                  <span className="contact-item__label">联系电话</span>
                  <a href="tel:075526903625" className="contact-item__value contact-item__link">
                    0755-26903625
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-item__label">电子邮箱</span>
                  <span className="contact-item__value contact-item__value--muted">暂无</span>
                </div>
                <div className="contact-item contact-item--address">
                  <span className="contact-item__label">公司地址</span>
                  <span className="contact-item__value">
                    深圳市南山区粤海街道中科纳能大厦A座2楼
                  </span>
                </div>
              </div>

              <div className="contact-aside">
                <div className="cooperation-panel">
                  <div className="cooperation-panel__header">
                    <span className="cooperation-panel__label">COOPERATION</span>
                    <h3 className="cooperation-panel__title">合作方向</h3>
                  </div>
                  <ul className="cooperation-list">
                    {COOPERATION_DIRECTIONS.map((item, i) => (
                      <li key={item.title} className="cooperation-item">
                        <span className="cooperation-item__num">{String(i + 1).padStart(2, '0')}</span>
                        <div className="cooperation-item__body">
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="wechat-card">
                  <div className="wechat-card__header">
                    <span className="wechat-card__label">WECHAT</span>
                    <h3 className="wechat-card__title">微信联系</h3>
                  </div>
                  <div className="wechat-card__body">
                    <img
                      src="/wechat-qr.png"
                      alt="京科控股国际集团微信二维码"
                      className="wechat-card__qr"
                    />
                    <p className="wechat-card__hint">扫码添加微信，了解合作详情。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 底部版权 */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <img src="/logo.png" alt="京科控股国际集团" className="footer__logo" />
          </div>
          <p className="footer__copy">
            © {new Date().getFullYear()} 京科控股国际集团 版权所有
          </p>
          <p className="footer__location">中国 · 深圳</p>
        </div>
      </footer>
    </div>
  )
}

export default App
