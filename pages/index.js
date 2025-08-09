import Image from "next/image";
import { useState, useMemo } from "react";

import Head from 'next/head';

<Head>
  <title>International AI Journal & Review – IAJR</title>
  <meta name="description" content="Peer-reviewed international AI journal publishing cutting-edge research in Machine Learning, NLP, Computer Vision, Robotics, and AI Ethics." />
</Head>

// 🎨 Palette officielle IAJR
const brand = {
  navy: "#0D2A4D",
  gold: "#FFD166",
  fog: "#F5F7FA",
  ink: "#0B1220",
};

// 📌 Thèmes disponibles
const THEMES = ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Robotics", "Ethics & Policy"];

// 📰 Exemples d’articles (remplace par tes vrais articles)
const DEMO_ARTICLES = [
  {
    id: 1,
    title: "Transformer-Efficient Fine-Tuning for Low-Resource Domains",
    authors: "S. Ahmed, L. Chen",
    year: 2025,
    theme: "NLP",
    abstract: "Parameter-efficient fine-tuning for large language models in specialized low-resource domains.",
  },
  {
    id: 2,
    title: "Self-Reflective Agents: Tool-Use & Verification",
    authors: "R. Tanaka, P. Rossi",
    year: 2025,
    theme: "Machine Learning",
    abstract: "Combining tool-use with iterative self-verification for reliable long-horizon tasks.",
  },
  {
    id: 3,
    title: "Geometry-Aware Diffusion Models for 3D Reconstruction",
    authors: "H. Müller, I. N'Diaye",
    year: 2024,
    theme: "Computer Vision",
    abstract: "Aligning diffusion priors with multi-view constraints for high-fidelity reconstruction.",
  },
];

export default function Home() {
  // États pour recherche + filtres des articles
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("all");
  const [theme, setTheme] = useState("all");

  // 📅 Années présentes dans les articles
  const years = useMemo(() => {
    const set = new Set(DEMO_ARTICLES.map((a) => a.year));
    return Array.from(set).sort((a, b) => b - a);
  }, []);

  // 🔎 Filtrage des articles
  const filtered = useMemo(() => {
    return DEMO_ARTICLES.filter(
      (a) =>
        (year === "all" || String(a.year) === year) &&
        (theme === "all" || a.theme === theme) &&
        (query.trim() === "" ||
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.abstract.toLowerCase().includes(query.toLowerCase()) ||
          a.authors.toLowerCase().includes(query.toLowerCase()))
    );
  }, [query, year, theme]);

  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* HEADER */}
      <header className="bg-white border-b-4" style={{ borderColor: brand.navy }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo + Titre */}
          <div className="flex items-center gap-3">
            {/* Remplacer /public/logo.png par ton vrai logo */}
            <Image src="/logo.png" alt="IAJR Logo" width={50} height={50} />
            <div>
              <h1 className="text-lg font-bold" style={{ color: brand.navy }}>
                International AI Journal & Review
              </h1>
              <p className="text-xs opacity-70">Advancing Global Artificial Intelligence Research & Review</p>
            </div>
          </div>
          {/* Lien Google Form à remplacer */}
          <a href="https://forms.gle/xxxxx">
            <button className="px-4 py-2 rounded-full text-white" style={{ background: brand.navy }}>
              Submit Your Paper
            </button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-cover bg-center py-16" style={{ backgroundColor: brand.navy, color: "white" }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">International AI Journal & Review</h2>
          <p className="text-lg opacity-90">Peer-reviewed venue for cutting-edge research in Artificial Intelligence</p>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <section className="py-8 px-4 max-w-6xl mx-auto bg-yellow-50 border-l-4" style={{ borderColor: brand.gold }}>
        <h3 className="text-2xl font-bold mb-2" style={{ color: brand.navy }}>
          Announcements
        </h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>First Edition Publication Date:</strong> October 1, 2025
          </li>
          <li>
            <strong>Submission Deadline:</strong> September 10, 2025
          </li>
        </ul>
      </section>

      {/* ABOUT */}
      {/* ABOUT */}
<section className="py-16 px-4 max-w-6xl mx-auto">
  <h3 className="text-3xl font-bold mb-4" style={{ color: brand.navy }}>
    Mission & Scope
  </h3>
  <p className="mb-4">
    The <strong>International AI Journal & Review (IAJR)</strong> is a peer-reviewed, open-access
    platform dedicated to advancing the theory, methodology, and application of
    <strong> Artificial Intelligence</strong>. Our mission is to provide a trusted venue for high-quality
    research that contributes to the responsible and impactful development of AI technologies worldwide.
  </p>
  <p className="mb-4">
    We welcome <strong>original research articles</strong>, <strong>surveys</strong>, and <strong>perspective papers</strong>
    covering a broad range of AI domains, including but not limited to:
  </p>
  <ul className="list-disc pl-6 mb-4 space-y-1">
    <li>Machine Learning and Deep Learning</li>
    <li>Natural Language Processing (NLP) and Speech Technologies</li>
    <li>Computer Vision and Image Understanding</li>
    <li>Autonomous Systems and Robotics</li>
    <li>AI Ethics, Fairness, and Policy</li>
    <li>AI for Healthcare, Climate Science, and Social Good</li>
  </ul>
  <p className="mb-4">
    All submissions undergo a <strong>rigorous double-blind peer review process</strong>, ensuring
    that published works meet international standards of clarity, rigor, and reproducibility.
    We encourage interdisciplinary contributions that connect AI with other scientific and
    industrial domains.
  </p>
  <p>
    By maintaining the highest editorial standards, IAJR aims to foster innovation, stimulate
    global collaboration, and contribute to the ethical and sustainable growth of Artificial Intelligence.
  </p>
</section>


      {/* ARTICLES */}
      <section className="py-16 px-4 max-w-6xl mx-auto bg-white">
        <h3 className="text-3xl font-bold mb-6" style={{ color: brand.navy }}>
          Latest Articles
        </h3>
        {/* Recherche & filtres */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            className="border p-2 flex-1"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select className="border p-2" onChange={(e) => setYear(e.target.value)} value={year}>
            <option value="all">All Years</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          <select className="border p-2" onChange={(e) => setTheme(e.target.value)} value={theme}>
            <option value="all">All Themes</option>
            {THEMES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        {/* Grille d’articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length === 0 && <p>No articles available yet.</p>}
          {filtered.map((a) => (
            <div key={a.id} className="border p-4 rounded shadow-sm">
              <h4 className="font-bold">{a.title}</h4>
              <p className="text-sm text-gray-500">
                {a.authors} • {a.year} • {a.theme}
              </p>
              <p className="mt-2 text-sm">{a.abstract}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EDITORIAL BOARD */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-6" style={{ color: brand.navy }}>
          Editorial Board
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Remplace par tes vrais membres + photos */}
          {["Dr. Jane Smith – Editor-in-Chief", "Prof. John Doe – Associate Editor", "Dr. Alice Kim – Reviewer"].map(
            (member, i) => (
              <div key={i} className="border p-4 rounded shadow-sm text-center">
                <Image src="/logo.png" alt="Member Photo" width={80} height={80} className="mx-auto rounded-full" />
                <p className="mt-3 font-semibold">{member}</p>
                <p className="text-sm opacity-70">Institution, Country</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* INDEXING */}
      <section className="py-16 px-4 max-w-6xl mx-auto bg-white">
        <h3 className="text-3xl font-bold mb-4" style={{ color: brand.navy }}>
          Indexing & Abstracting
        </h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Crossref</li>
          <li>Google Scholar</li>
          <li>Scopus (planned)</li>
          <li>DOAJ (planned)</li>
        </ul>
      </section>

      {/* FEES */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-2" style={{ color: brand.navy }}>
          Publication Fees
        </h3>
        <p>
          The publication fee is <strong>100 USD per article</strong>. Maximum length: <strong>9 pages</strong>. Pages
          beyond the limit may incur additional charges.
        </p>
      </section>

      {/* SUBMIT */}
      <section className="py-16 px-4 max-w-6xl mx-auto bg-white">
        <h3 className="text-3xl font-bold mb-4" style={{ color: brand.navy }}>
          Submit Your Paper
        </h3>
        <p>Download the official templates before submitting:</p>
        <div className="flex gap-4 mt-4">
          <a href="/IAJR_Word_Template_Light.docx" download>
            <button className="px-4 py-2 rounded text-white" style={{ background: brand.navy }}>
              Word Template
            </button>
          </a>
          <a href="/IAJR_LaTeX_Template.zip" download>
            <button className="px-4 py-2 rounded" style={{ background: brand.gold, color: brand.ink }}>
              LaTeX Template
            </button>
          </a>
        </div>
      </section>

      {/* GUIDELINES */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-4" style={{ color: brand.navy }}>
          Guidelines for Authors
        </h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Formats accepted: PDF, DOCX, LaTeX (ZIP)</li>
          <li>Double-blind review process</li>
          <li>6–8 weeks average decision time</li>
          <li>Follow IEEE/Elsevier formatting standards</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section className="py-16 px-4 max-w-6xl mx-auto bg-white">
        <h3 className="text-3xl font-bold mb-4" style={{ color: brand.navy }}>
          Contact
        </h3>
        <p>
          Email:{" "}
          <a className="text-blue-600" href="mailto:iajrorg@gmail.com">
            iajrorg@gmail.com
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-white text-center py-4">
        © {new Date().getFullYear()} IAJR – International AI Journal & Review
      </footer>
    </div>
  );
}
