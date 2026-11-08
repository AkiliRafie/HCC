# Dokumentasi & Struktur Website Portofolio: Akili

Dokumen ini berisi panduan alur, struktur folder, detail konten, panduan **Desain UI/UX**, serta **contoh struktur kode program** untuk pembuatan website portofolio atas nama **Akili**.

## 1. Arsitektur Halaman (Sitemap)

Website ini didesain sebagai *Single-Page Application* (SPA) modern atau website multi-halaman sederhana dengan bagian utama sebagai berikut:

```
Akili Portfolio Website
│
├── 1. Hero Section (Beranda / Landing)
├── 2. About Me (Tentang Saya)
├── 3. Skills & Technologies (Keahlian)
├── 4. Projects / Portfolio (Proyek & Karya)
├── 5. Experience & Education (Pengalaman)
└── 6. Contact & Footer (Kontak & Penutup)
```

## 2. Panduan Desain UI/UX (Design System & Guidelines)

### A. Palet Warna (Color Palette & Dark Mode Theme)
Desain mengusung tema **Dark Modern Tech** yang elegan, bersih, dan memberikan kontras tinggi untuk kenyamanan membaca.

| Kategori | Hex Code | Penggunaan |
| :--- | :--- | :--- |
| **Background Principal** | `#0F172A` (Slate 900) | Latar belakang utama halaman |
| **Background Card/Surface** | `#1E293B` (Slate 800) | Latar kartu proyek, kontainer kontak, modal |
| **Primary Accent** | `#06B6D4` (Cyan 500) | Tombol CTA utama, status aktif, highlight teks |
| **Secondary Accent** | `#3B82F6` (Blue 500) | Gradient overlay, efek glow, border fokus |
| **Text Primary** | `#F8FAFC` (Slate 500 / 50) | Judul utama & heading (`h1`, `h2`, `h3`) |
| **Text Secondary** | `#94A3B8` (Slate 400) | Paragraf body, deskripsi singkat, subtitle |
| **Borders & Dividers** | `#334155` (Slate 700) | Garis pemisah section, outline tombol secondary |

### B. Tipografi (Typography)
* **Primary Font**: `Inter` / `Plus Jakarta Sans` (Sangat terbaca di layar, modern, dan profesional).
* **Code / Monospace Font**: `Fira Code` / `JetBrains Mono` (Digunakan untuk badge skill, angka statistik, atau tag tech stack).

**Hirarki Ukuran Teks:**
* **Hero Title (H1)**: `48px` - `72px` (Bold / Extrabold)
* **Section Heading (H2)**: `30px` - `36px` (Bold)
* **Sub-heading / Card Title (H3)**: `20px` - `24px` (Semibold)
* **Body Text**: `16px` (Regular / Medium, Line-height: 1.6)
* **Caption / Tags**: `12px` - `14px` (Medium / Mono)

### C. Layout & Visual Grid System
* **Grid Base**: 12-Column Grid (Desktop max-width: `1152px` / `max-w-6xl`), 4-Column Grid (Mobile).
* **Whitespace & Spacing**: Menggunakan spasi longgar (padding section `py-20` atau `py-24`) agar halaman bernapas dan tidak terasa menumpuk.
* **Glassmorphism Effect**: Navbar dan beberapa kartu overlay menggunakan `backdrop-blur-md` dengan transparansi `80%` untuk memberikan kesan kedalaman (*depth*).
* **Border Radius**: Roundness standar `rounded-xl` (`12px`) untuk kartu proyek dan `rounded-lg` (`8px`) untuk tombol.

### D. Prinsip UX & Interaktivitas (User Experience)
1. **Fokus pada Imersi Cepat**: *Hero section* langsung menyampaikan nama, keahlian utama, dan tombol aksi tanpa menyulitkan pengunjung mencari tahu siapa Akili.
2. **Visual Hierarchy & Scanning**: Menggunakan visual tag (`#React`, `#NodeJS`) dan warna aksen *Cyan* untuk memudahkan *recruiter* melakukan *skimming* dalam hitungan detik.
3. **Micro-Interactions & Feedback**:
   * **Hover State**: Kartu proyek terangkat sedikit ke atas (`translate-y-[-4px]`) dengan efek bayangan halus saat disorot kursor.
   * **Active Nav Link**: Indicators otomatis menyala pada navigasi saat pengguna melakukan *scroll* melewati section terkait (*Scrollspy*).
4. **Kecepatan & Aksesibilitas (a11y)**:
   * Kontras warna sesuai standar **WCAG AAA**.
   * Semua tombol dan tautan memiliki *focus ring* yang jelas untuk navigasi keyboard.
   * Responsif dari ukuran layar HP (360px) hingga Monitor Ultrawide.

---

## 3. Rincian Struktur & Konten Setiap Section

### A. Header / Navigation Bar
* **Logo/Brand**: `Akili.` atau `<Akili />`
* **Navigasi**: Home, About, Skills, Projects, Experience, Contact
* **Fitur Tambahan**: Theme Switcher (Dark/Light mode), Tombol CTA "Resume / CV".

### B. Hero Section (Halaman Utama)
* **Salam & Tagline**: *"Halo, Saya Akili 👋"* — *"Full-Stack Developer / UI/UX Designer"*
* **Deskripsi Singkat**: 1-2 kalimat fokus pada keahlian utama dan nilai tambah.
* **Call to Action (CTA)**: Tombol "Lihat Proyek" & "Hubungi Saya", Link Media Sosial (GitHub, LinkedIn).

### C. About Me (Tentang Saya)
* **Foto Profil / Avatar**: Visual profesional atau ilustrasi modern.
* **Bio Singkat**: Latar belakang, minat dalam teknologi, dan filosofi kerja.
* **Highlight Utama**: Pengalaman (3+ Tahun), Proyek Selesai (15+ Proyek), Klien/Kolaborasi (10+ Klien).

### D. Skills & Technologies (Keahlian)
1. **Frontend**: HTML, CSS, JavaScript, React / Next.js, Tailwind CSS.
2. **Backend**: Node.js, Express, Python, PostgreSQL / MongoDB.
3. **Tools & DevOps**: Git, Docker, Figma, VS Code, Postman.

### E. Projects (Galeri Proyek)
Kartu proyek (*Project Card*) berisi: Gambar/Thumbnail, Judul, Deskripsi, Tech Stack Tag (`#React`, `#Tailwind`), serta tombol `Live Demo` dan `Source Code`.

### F. Experience & Education (Pengalaman & Pendidikan)
Format garis waktu (*Timeline*) interaktif untuk riwayat kerja, magang, pendidikan, dan sertifikasi.

### G. Contact & Footer (Kontak)
* **Formulir Kontak**: Input Nama, Email, Subjek, Pesan, dan Tombol "Kirim Pesan".
* **Informasi Kontak Direct**: Email, Lokasi.
* **Footer**: Copyright © 2026 Akili.

---

## 4. Rekomendasi Struktur Folder Proyek (Development)

Struktur direktori berbasis **React / Next.js**:

```
akili-portfolio/
├── public/
│   ├── favicon.ico
│   ├── images/
│   │   ├── profile.png
│   │   └── projects/
│   └── docs/
│       └── Akili_Resume.pdf
├── src/
│   ├── assets/
│   │   └── icons/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── projectsData.js
│   │   └── experienceData.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
└── README.md
```

---

## 5. Rekomendasi Tech Stack

1. **Framework/Library**: Next.js / React (Vite)
2. **Styling**: Tailwind CSS
3. **Animasi**: Framer Motion / Lucide React (Icons)
4. **Form Handling**: EmailJS / Formspree / Web3Forms
5. **Deployment**: Vercel / Netlify

---

## 6. Contoh Struktur Kode Program (React + Tailwind CSS)

Berikut adalah struktur kode utama yang dapat Anda gunakan sebagai acuan awal dalam pengembangan project.

### A. Main App Component (`src/App.jsx`)

```jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen font-sans">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

### B. Navbar Component (`src/components/Navbar.jsx`)

```jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-wider text-cyan-400">
          Akili<span className="text-white">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm font-medium"
            >
              {link}
            </a>
          ))}
          <a
            href="/docs/Akili_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-semibold text-cyan-400 border border-cyan-400 rounded-lg hover:bg-cyan-400/10 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-b border-slate-700 px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 py-2"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
```

### C. Hero Component (`src/components/Hero.jsx`)

```jsx
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col justify-center items-start min-h-[70vh] py-10">
      <p className="text-cyan-400 font-mono text-sm mb-3">Halo, nama saya</p>
      <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-100 tracking-tight">
        Akili.
      </h1>
      <h2 className="text-3xl sm:text-5xl font-bold text-slate-400 mt-2">
        Saya membangun solusi berbasis web & software.
      </h2>
      <p className="mt-6 text-slate-400 max-w-xl text-lg leading-relaxed">
        Saya seorang Software Engineer yang berfokus pada pembuatan pengalaman digital berkualitas tinggi, responsif, dan ramah pengguna.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-cyan-500 text-slate-900 font-semibold rounded-lg hover:bg-cyan-400 transition"
        >
          Lihat Proyek
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:bg-slate-800 transition"
        >
          Hubungi Saya
        </a>
      </div>
    </section>
  );
};

export default Hero;
```

### D. Data Mocking File (`src/data/projectsData.js`)

```js
export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "Platform analitik toko online interaktif dengan visualisasi data real-time.",
    techStack: ["React", "Tailwind CSS", "Node.js", "Chart.js"],
    liveDemo: "https://example.com",
    github: "https://github.com/akili/ecommerce-dashboard",
    image: "/images/projects/project-1.png"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplikasi manajemen tugas tim dengan fitur drag-and-drop dan kolaborasi langsung.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    liveDemo: "https://example.com",
    github: "https://github.com/akili/task-app",
    image: "/images/projects/project-2.png"
  }
];
```