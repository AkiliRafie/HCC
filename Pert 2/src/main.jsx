import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight, BriefcaseBusiness, Check, Code2, Download, ExternalLink,
  Github, Linkedin, Mail, MapPin, Menu, Moon, Send, Sparkles, Sun, X
} from 'lucide-react';
import './styles.css';

const navigation = [
  { label: 'Home', id: 'top' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

const projects = [
  {
    number: '01',
    title: 'E-Commerce Dashboard',
    description: 'Platform analitik toko online dengan visualisasi data penjualan real-time dan insight yang mudah dipahami.',
    tags: ['React', 'Tailwind CSS', 'Node.js'],
    color: 'cyan',
    live: 'https://example.com',
    source: 'https://github.com/akili/ecommerce-dashboard',
  },
  {
    number: '02',
    title: 'Task Management App',
    description: 'Aplikasi manajemen tugas tim dengan drag-and-drop, kolaborasi langsung, dan alur kerja yang fleksibel.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    color: 'blue',
    live: 'https://example.com',
    source: 'https://github.com/akili/task-app',
  },
  {
    number: '03',
    title: 'Finance Mobile App',
    description: 'Pengalaman mobile-first untuk membantu pengguna mengatur keuangan pribadi dengan lebih sederhana.',
    tags: ['Figma', 'React Native', 'Supabase'],
    color: 'violet',
    live: 'https://example.com',
    source: 'https://github.com/akili/finance-app',
  },
];

const experiences = [
  { period: '2023 — Sekarang', role: 'Full-Stack Developer', company: 'Independent / Freelance', text: 'Membangun produk digital end-to-end, dari riset kebutuhan hingga deployment dan iterasi berbasis feedback pengguna.' },
  { period: '2022 — 2023', role: 'Frontend Developer', company: 'Digital Product Studio', text: 'Mengembangkan antarmuka web responsif dan reusable component system untuk berbagai produk klien.' },
  { period: '2020 — 2022', role: 'Teknik Informatika', company: 'Universitas Teknologi', text: 'Mempelajari software engineering, basis data, dan human-computer interaction melalui proyek akademik dan mandiri.' },
];

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-30% 0px -60% 0px' }
    );
    navigation.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const submitForm = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <div className={lightMode ? 'app light-mode' : 'app'}>
      <header className="navbar">
        <a className="brand" href="#top" aria-label="Kembali ke beranda">Akili<span>.</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Navigasi utama">
          {navigation.map(({ label, id }) => (
            <button className={activeSection === id ? 'nav-link active' : 'nav-link'} key={id} onClick={() => goTo(id)}>{label}</button>
          ))}
          <a className="resume-link" href="/docs/Akili_Resume.pdf"><Download size={15} /> Resume</a>
        </nav>
        <div className="nav-actions">
          <button className="icon-button" onClick={() => setLightMode((value) => !value)} aria-label="Ganti tema">
            {lightMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button className="icon-button menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Buka menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse-dot" /> Tersedia untuk peluang baru</div>
            <p className="intro">Halo, saya Akili <span className="wave">👋</span></p>
            <h1>Membangun produk digital <em>yang berarti.</em></h1>
            <p className="hero-description">Full-Stack Developer &amp; UI/UX Designer yang mengubah ide kompleks menjadi pengalaman digital yang sederhana, cepat, dan menyenangkan.</p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => goTo('projects')}>Lihat Proyek <ArrowUpRight size={17} /></button>
              <button className="button secondary" onClick={() => goTo('contact')}>Hubungi Saya <Mail size={17} /></button>
            </div>
            <div className="social-row">
              <span>Temukan saya di</span>
              <a href="https://github.com/akili" aria-label="GitHub"><Github size={19} /></a>
              <a href="https://linkedin.com/in/akili" aria-label="LinkedIn"><Linkedin size={19} /></a>
              <a href="mailto:hello@akili.dev" aria-label="Email"><Mail size={19} /></a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="orb orb-one" /><div className="orb orb-two" />
            <div className="code-card">
              <div className="window-bar"><span /><span /><span /><small>akili.dev</small></div>
              <div className="code-content">
                <p><i>const</i> <b>developer</b> = &#123;</p>
                <p className="indent"><span>name:</span> <strong>&apos;Akili&apos;</strong>,</p>
                <p className="indent"><span>role:</span> <strong>&apos;Full-Stack&apos;</strong>,</p>
                <p className="indent"><span>passion:</span> <strong>&apos;building&apos;</strong>,</p>
                <p>&#125;;</p>
                <p className="comment">// make it meaningful</p>
              </div>
            </div>
            <div className="float-badge badge-code"><Code2 size={16} /> Clean code</div>
            <div className="float-badge badge-design"><Sparkles size={16} /> Thoughtful design</div>
          </div>
        </section>

        <section id="about" className="section-shell content-section">
          <div className="section-label">01 / Tentang saya</div>
          <div className="about-grid">
            <div><h2>Teknologi adalah alat.<br /><span>Impact adalah tujuan.</span></h2></div>
            <div className="about-body"><p>Saya percaya produk terbaik lahir dari perpaduan antara engineering yang solid dan empati terhadap pengguna. Selama lebih dari 3 tahun, saya membantu startup dan bisnis membangun solusi digital yang tidak hanya terlihat bagus, tetapi juga bekerja dengan baik.</p><p>Saat tidak sedang menulis kode, saya senang mengeksplorasi desain, belajar hal baru, dan berbagi pengetahuan dengan komunitas.</p><div className="stats"><div><strong>3<span>+</span></strong><small>Tahun pengalaman</small></div><div><strong>15<span>+</span></strong><small>Proyek selesai</small></div><div><strong>10<span>+</span></strong><small>Klien &amp; kolaborasi</small></div></div></div>
          </div>
        </section>

        <section id="skills" className="section-shell content-section">
          <div className="section-label">02 / Keahlian</div>
          <div className="section-heading"><h2>Tools yang saya gunakan<br /><span>untuk membuat ide jadi nyata.</span></h2><p>Selalu terbuka untuk mempelajari teknologi baru yang dapat memberikan solusi lebih baik.</p></div>
          <div className="skills-grid">
            <SkillCard icon={<Code2 />} title="Frontend" items={['HTML & CSS', 'JavaScript', 'React / Next.js', 'Tailwind CSS']} />
            <SkillCard icon={<BriefcaseBusiness />} title="Backend" items={['Node.js & Express', 'Python', 'PostgreSQL', 'MongoDB']} />
            <SkillCard icon={<Sparkles />} title="Tools & lainnya" items={['Git & Docker', 'Figma', 'VS Code', 'REST API']} />
          </div>
        </section>

        <section id="projects" className="section-shell content-section">
          <div className="section-label">03 / Proyek pilihan</div>
          <div className="section-heading inline-heading"><h2>Beberapa karya<br /><span>yang pernah saya buat.</span></h2><a className="text-link" href="https://github.com/akili">Lihat semua di GitHub <ArrowUpRight size={16} /></a></div>
          <div className="projects-grid">{projects.map((project) => <ProjectCard key={project.number} project={project} />)}</div>
        </section>

        <section id="experience" className="section-shell content-section">
          <div className="section-label">04 / Perjalanan</div>
          <div className="section-heading"><h2>Pengalaman &amp; pendidikan<br /><span>yang membentuk saya.</span></h2></div>
          <div className="timeline">{experiences.map((item) => <article className="timeline-item" key={item.period}><div className="timeline-marker" /><div className="timeline-period">{item.period}</div><div><h3>{item.role}</h3><p className="company">{item.company}</p><p>{item.text}</p></div></article>)}</div>
        </section>

        <section id="contact" className="section-shell content-section contact-section">
          <div className="section-label">05 / Mari terhubung</div>
          <div className="contact-grid"><div><h2>Punya ide?<br /><em>Mari wujudkan.</em></h2><p>Saya selalu tertarik mendengar tentang proyek baru dan kesempatan berkolaborasi. Ceritakan ide Anda, dan kita mulai percakapan.</p><div className="contact-detail"><a href="mailto:hello@akili.dev"><Mail size={18} /> hello@akili.dev</a><span><MapPin size={18} /> Indonesia · Remote friendly</span></div></div><form onSubmit={submitForm}><label>Nama<input required name="name" placeholder="Nama Anda" /></label><label>Email<input required type="email" name="email" placeholder="email@contoh.com" /></label><label>Pesan<textarea required name="message" rows="4" placeholder="Ceritakan tentang proyek Anda..." /></label><button className="button primary" type="submit">{sent ? <><Check size={17} /> Pesan siap dikirim</> : <><Send size={17} /> Kirim Pesan</>}</button>{sent && <p className="form-note">Terima kasih! Saya akan menghubungi Anda segera.</p>}</form></div>
        </section>
      </main>
      <footer><div className="section-shell footer-inner"><a className="brand" href="#top">Akili<span>.</span></a><p>Merancang dengan niat. Membangun dengan dampak.</p><div className="footer-social"><a href="https://github.com/akili"><Github size={17} /></a><a href="https://linkedin.com/in/akili"><Linkedin size={17} /></a></div><small>© 2026 Akili. Dibuat dengan hati &amp; kopi.</small></div></footer>
    </div>
  );
}

function SkillCard({ icon, title, items }) {
  return <article className="skill-card"><div className="skill-icon">{icon}</div><h3>{title}</h3><ul>{items.map((item) => <li key={item}><Check size={14} /> {item}</li>)}</ul></article>;
}

function ProjectCard({ project }) {
  return <article className={`project-card ${project.color}`}><div className="project-preview"><span className="project-number">{project.number}</span><div className="preview-lines"><span /><span /><span /><span /></div><div className="preview-window"><div /><div /><div /></div></div><div className="project-info"><div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div></div><div className="project-links"><a href={project.live} aria-label={`Live demo ${project.title}`}><ExternalLink size={16} /></a><a href={project.source} aria-label={`Source code ${project.title}`}><Github size={16} /></a></div></div></article>;
}

createRoot(document.getElementById('root')).render(<App />);
