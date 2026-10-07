import React, { useState } from 'react';
import {
  Briefcase,
  Code2,
  Terminal,
  Cpu,
  Layers,
  Award,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Printer,
  CheckCircle2,
  Sparkles,
  Menu,
  X,
  Globe,
  Copy,
  Check,
  Send,
  TrendingUp,
  Users,
  ShieldCheck,
  MessageCircle
} from 'lucide-react';
import { curriculumData } from './data/curriculumData';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | string>('all');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSent, setContactSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(curriculumData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá Wagner, venho através do seu site wagner.helpusbr.com! Assunto: ${contactSubject || 'Oportunidade / Projeto'} - ${contactMessage}`
    );
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
    setContactSent(true);
    setTimeout(() => setContactSent(false), 4000);
  };

  const filteredSkills = activeTab === 'all'
    ? curriculumData.skillsCategories
    : curriculumData.skillsCategories.filter(cat => cat.title.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 no-print transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              W
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                Wagner
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/50">
                  HelpUS
                </span>
              </span>
              <span className="text-[11px] text-slate-400 leading-none hidden sm:inline">
                Arquiteto de Soluções
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#sobre" className="hover:text-cyan-400 transition-colors">Sobre</a>
            <a href="#habilidades" className="hover:text-cyan-400 transition-colors">Habilidades</a>
            <a href="#experiencia" className="hover:text-cyan-400 transition-colors">Trajetória</a>
            <a href="#projetos" className="hover:text-cyan-400 transition-colors">Projetos</a>
            <a href="#certificacoes" className="hover:text-cyan-400 transition-colors">Certificações</a>
            <a href="#contato" className="hover:text-cyan-400 transition-colors">Contato</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handlePrint}
              title="Salvar / Imprimir Currículo em PDF"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700/80 transition-all hover:border-slate-600"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              Salvar PDF
            </button>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-sm shadow-cyan-600/30 transition-all hover:scale-102 active:scale-98"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Falar com Wagner
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
              aria-label="Imprimir"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-slate-950/95 px-4 pt-3 pb-5 space-y-3">
            <div className="flex flex-col space-y-2 text-sm font-medium">
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-900 text-slate-200"
              >
                Sobre
              </a>
              <a
                href="#habilidades"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-900 text-slate-200"
              >
                Habilidades & Tecnologias
              </a>
              <a
                href="#experiencia"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-900 text-slate-200"
              >
                Trajetória Profissional
              </a>
              <a
                href="#projetos"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-900 text-slate-200"
              >
                Projetos & Casos
              </a>
              <a
                href="#certificacoes"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-900 text-slate-200"
              >
                Formação & Certificados
              </a>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg bg-cyan-950/40 text-cyan-300 border border-cyan-800/50"
              >
                Entrar em Contato
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-900">
          {/* Subtle Glow Background Elements */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-indigo-600/0 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/60 border border-emerald-800/50 text-emerald-300 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {curriculumData.personal.status}
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
                Olá, sou <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Wagner</span>.
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl text-slate-200 font-semibold mt-2 block">
                  {curriculumData.personal.title}
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 text-pretty max-w-2xl">
                {curriculumData.personal.tagline}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 mb-12">
                <a
                  href="#projetos"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-600/25 transition-all hover:scale-102 active:scale-98"
                >
                  <Layers className="w-4 h-4" />
                  Explorar Casos & Projetos
                </a>

                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all hover:border-slate-600"
                >
                  <Printer className="w-4 h-4 text-cyan-400" />
                  Exportar Currículo (PDF)
                </button>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-all"
                  title="Copiar e-mail de contato"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">E-mail Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>{curriculumData.personal.email}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Key Quantitative Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-850">
                <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mb-1">
                    +{curriculumData.personal.yearsOfExperience} Anos
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    Experiência em TI & Sistemas
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 mb-1">
                    +{curriculumData.personal.projectsCompleted}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    Sistemas & Projetos Entregues
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 mb-1">
                    99.9%
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    Alta Disponibilidade & Uptime
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mb-1">
                    100%
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    Foco em ROI & Qualidade
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* About Section & Pillars */}
        <section id="sobre" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Bio */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-4 h-4" />
                Perfil Profissional
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Engenharia de software com foco em resultados reais de negócio.
              </h2>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {curriculumData.about.summary}
              </p>

              <p className="text-slate-400 leading-relaxed text-sm">
                {curriculumData.about.extendedSummary}
              </p>

              {/* Quick Info Box */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{curriculumData.personal.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Hub HelpUS: <a href="https://helpusbr.com" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">helpusbr.com</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Clean Code, Arquitetura Hexagonal & Cloud Security</span>
                </div>
              </div>
            </div>

            {/* Right Pillars */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {curriculumData.about.pillars.map((pillar, idx) => {
                const icons: Record<string, React.ReactNode> = {
                  Cpu: <Cpu className="w-6 h-6 text-cyan-400" />,
                  Users: <Users className="w-6 h-6 text-blue-400" />,
                  Terminal: <Terminal className="w-6 h-6 text-indigo-400" />,
                  TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-400" />
                };

                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/70 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                        {icons[pillar.icon] || <Cpu className="w-6 h-6 text-cyan-400" />}
                      </div>
                      <h3 className="text-base font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section id="habilidades" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-2">
                <Code2 className="w-4 h-4" />
                Competências & Stack
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Habilidades Técnicas & Domínio Tecnológico
              </h2>
            </div>

            {/* Tabs Filter */}
            <div className="flex flex-wrap gap-2 text-xs font-medium">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'all'
                    ? 'bg-cyan-600 text-white font-semibold shadow-sm shadow-cyan-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setActiveTab('Frontend')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'Frontend'
                    ? 'bg-cyan-600 text-white font-semibold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                Frontend
              </button>
              <button
                onClick={() => setActiveTab('Backend')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'Backend'
                    ? 'bg-cyan-600 text-white font-semibold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                Backend
              </button>
              <button
                onClick={() => setActiveTab('Dados')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'Dados'
                    ? 'bg-cyan-600 text-white font-semibold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                Dados & DB
              </button>
              <button
                onClick={() => setActiveTab('Cloud')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'Cloud'
                    ? 'bg-cyan-600 text-white font-semibold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                DevOps & Nuvem
              </button>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSkills.map((category, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 hover:border-slate-750 transition-all"
              >
                <h3 className="text-base font-semibold text-white mb-5 flex items-center justify-between">
                  <span>{category.title}</span>
                  <span className="text-xs text-slate-400 font-normal">
                    {category.skills.length} competências
                  </span>
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="flex items-center gap-2 font-medium text-slate-200">
                          {skill.name}
                          {skill.highlight && (
                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-semibold">
                              Forte
                            </span>
                          )}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience / Career Trajectory */}
        <section id="experiencia" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-2">
              <Briefcase className="w-4 h-4" />
              Carreira & Entregas
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Trajetória Profissional
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Histórico de liderança e impacto técnico em posições estratégicas de desenvolvimento e arquitetura.
            </p>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-8 before:w-0.5 before:bg-slate-800/80 before:h-full">
            {curriculumData.experiences.map((exp) => (
              <div key={exp.id} className="relative pl-10 md:pl-16 group">
                {/* Dot Node */}
                <div className="absolute left-2.5 md:left-6.5 top-2 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all" />

                <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/50 border border-slate-850 hover:border-slate-750 transition-all shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-cyan-400">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                      <span className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60">
                        {exp.period}
                      </span>
                      <span className="px-2 py-1 rounded-md bg-slate-800/40 text-slate-400">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Bullet achievements */}
                  <div className="space-y-2 mb-5">
                    {exp.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/60">
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projetos" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-2">
                <Layers className="w-4 h-4" />
                Portfólio & Soluções
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Casos de Destaque & Entregas
              </h2>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md">
              Amostra de sistemas, plataformas corporativas e microserviços desenvolvidos para alta performance e estabilidade operacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curriculumData.projects.map((proj) => (
              <div
                key={proj.id}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 hover:border-cyan-700/50 hover:bg-slate-900/70 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                      {proj.category}
                    </span>
                    {proj.featured && (
                      <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1">
                        ★ Destaque
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {proj.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-5 text-xs text-slate-300 flex items-start gap-2.5">
                    <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white font-medium">Impacto comprovado: </strong>
                      {proj.impact}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded bg-slate-800/70 text-slate-300 border border-slate-700/40 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Acessar Plataforma Oficial
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education, Certifications & Languages */}
        <section id="certificacoes" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Education */}
            <div>
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-2">
                <GraduationCap className="w-4 h-4" />
                Formação Acadêmica
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
                Graduação & Pós-Graduação
              </h2>

              <div className="space-y-4">
                {curriculumData.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-slate-900/40 border border-slate-850 hover:border-slate-800 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h3 className="text-base font-bold text-white">
                        {edu.degree}
                      </h3>
                      <span className="text-xs text-slate-400 font-mono">
                        {edu.period}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-cyan-400 mb-2">
                      {edu.institution}
                    </div>
                    {edu.details && (
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="mt-8 pt-8 border-t border-slate-850">
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  Idiomas de Trabalho
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {curriculumData.languages.map((lang, lIdx) => (
                    <div key={lIdx} className="p-3 rounded-lg bg-slate-900/50 border border-slate-800">
                      <div className="text-sm font-bold text-white">{lang.language}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{lang.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-2">
                <Award className="w-4 h-4" />
                Qualificações & Credenciais
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
                Certificações Oficiais
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {curriculumData.certifications.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-4 rounded-xl bg-slate-900/40 border border-slate-850 hover:border-slate-800 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400 mb-3">
                        <Award className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-white leading-snug mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-xs text-cyan-400 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="text-[11px] text-slate-400 font-mono mt-3 pt-2 border-t border-slate-800/60">
                      Ano: {cert.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase">
                  <MessageCircle className="w-4 h-4" />
                  Inicie uma Conversa
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Vamos construir algo de alto impacto juntos?
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Seja para liderar o desenvolvimento de uma nova plataforma, consultoria de arquitetura de software, otimização de sistemas legados ou estruturação de squads técnicas.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-slate-200 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">E-mail direto</div>
                      <div className="font-semibold">{curriculumData.personal.email}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-slate-200 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Localização & Disponibilidade</div>
                      <div className="font-semibold">{curriculumData.personal.location}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <a
                    href="https://wa.me/5511999999999?text=Olá%20Wagner!%20Acessei%20seu%20site%20wagner.helpusbr.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-emerald-600/30"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Conversar via WhatsApp
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700/80 transition-all"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    {copiedEmail ? 'E-mail copiado!' : 'Copiar E-mail'}
                  </button>
                </div>
              </div>

              {/* Direct Fast Message Form */}
              <div className="lg:col-span-6 bg-slate-950/70 border border-slate-800 p-6 sm:p-7 rounded-2xl">
                <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                  <Send className="w-4 h-4 text-cyan-400" />
                  Mensagem Rápida
                </h3>

                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Qual o objetivo do contato?
                    </label>
                    <input
                      type="text"
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                      placeholder="Ex: Nova oportunidade, consultoria em nuvem, projeto HelpUS..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Mensagem / Detalhes
                    </label>
                    <textarea
                      rows={4}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Descreva brevemente o projeto, escopo ou cargo..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-cyan-600/30 transition-all active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    Enviar Mensagem Direta
                  </button>

                  {contactSent && (
                    <div className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs text-center font-medium animate-fade-in">
                      ✓ Mensagem pronta! Abrindo WhatsApp com o texto formatado.
                    </div>
                  )}
                </form>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* Executive Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-10 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-cyan-600 flex items-center justify-center text-white font-bold text-xs">
              W
            </div>
            <span>
              © {new Date().getFullYear()} Wagner • <a href="https://helpusbr.com" target="_blank" rel="noreferrer" className="hover:text-cyan-400 font-semibold">helpusbr.com</a>. Todos os direitos reservados.
            </span>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={handlePrint}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <Printer className="w-3.5 h-3.5" />
              Exportar PDF
            </button>
            <a
              href="#"
              className="hover:text-cyan-400 transition-colors"
            >
              Voltar ao Topo ↑
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}
