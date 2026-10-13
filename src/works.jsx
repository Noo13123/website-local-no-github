import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from './projects.js';
import './style.css';

function Works() {
  React.useEffect(() => {
    const elements = [...document.querySelectorAll('.works-content .section-kicker, .works-heading, .full-project, .works-home-link')];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('motion-visible'));
      return undefined;
    }
    const siblingIndexes = new Map();
    elements.forEach((element) => {
      const parent = element.parentElement;
      const index = siblingIndexes.get(parent) ?? 0;
      siblingIndexes.set(parent, index + 1);
      element.style.setProperty('--motion-delay', `${Math.min(index * 90, 360)}ms`);
      element.classList.add('motion-reveal');
    });
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('motion-visible');
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <main className="works-page">
    <header className="nav nav-scrolled works-nav">
      <a href="/#home" className="brand"><span className="brand-mark"><img src="/avatar-yuta.jpg" alt="Yuta Okkotsu 头像"/></span><span className="brand-copy">YUTA OKKOTSU<small>VIDEO EDITOR / 影像剪辑师</small></span></a>
      <a href="/#work" className="works-back"><ArrowLeft size={15}/> 返回首页</a>
    </header>
    <section className="works-content section-shell">
      <div className="section-kicker mono"><span>FULL PORTFOLIO / 2025</span><span>YUTA OKKOTSU</span></div>
      <div className="works-heading"><div><span className="works-overline mono">ALL PROJECTS · {String(projects.length).padStart(2, '0')}</span><h1>完整作品集</h1></div><p>游戏高光剪辑与 Frag Movie<br/>每一段作品都可以直接播放并开启声音</p></div>
      <div className="full-project-list">{projects.map((project) => <article className="full-project" key={project.id}>
        <div className="full-project-video project-image video-project"><video controls preload="metadata" playsInline aria-label={`${project.title} 视频作品`}><source src={project.video} type="video/mp4"/>你的浏览器不支持视频播放</video><span className="project-num mono">{project.id} / {String(projects.length).padStart(2, '0')}</span><span className="video-audio-label mono">SOUND ON · USE PLAYER CONTROLS</span></div>
        <div className="project-info"><div><h2>{project.title}</h2><p>{project.note}</p></div><div className="project-meta mono"><span>{project.type}</span><span>{project.year}</span></div></div>
      </article>)}</div>
      <a className="works-home-link" href="/#work">回到精选项目 <ArrowUpRight size={15}/></a>
    </section>
  </main>;
}

createRoot(document.getElementById('root')).render(<Works/>);
