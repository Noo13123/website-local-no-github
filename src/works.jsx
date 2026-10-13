import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import './style.css';

const projects = [
  { id: '01', title: 'Veil登神长阶', type: 'VALORANT · FRAG MOVIE', year: '2025', video: '/videos/cxyveil.mp4', note: '高光时刻，值得被重新看见' },
  { id: '02', title: 'MAMA', type: 'CS · FRAG MOVIE', year: '2025', video: '/videos/H9999.mp4', note: '把每一次精准击杀，留在节奏里' },
  { id: '03', title: '卡点', type: 'FPS · RHYTHM EDIT', year: '2025', video: '/videos/ka-dian.mp4', note: '缘分落地生根是我们' },
  { id: '04', title: '馈赠', type: 'FPS · FRAG MOVIE', year: '2025', video: '/videos/gift.mp4', note: '把高光时刻，留给值得记住的瞬间' },
  { id: '05', title: '残局开头', type: 'FPS · FRAG MOVIE', year: '2025', video: '/videos/AAAme.mp4', note: '让操作与音乐，在同一个瞬间爆发' },
  { id: '06', title: '随便搞搞', type: 'FPS · FRAG MOVIE', year: '2026', video: '/videos/随便搞搞.mp4', note: '把每一帧灵感，剪成新的高光' },
  { id: '07', title: '切刀慢动作', type: 'FPS · GAMEPLAY EDIT', year: '2025', video: '/videos/15.mp4', note: '缘分落地生根是我们' },
];

function Works() {
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
