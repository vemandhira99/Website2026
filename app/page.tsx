"use client"

import React, { useState } from "react"
import { useTheme, ThemeType } from "../context/theme-context"
import BackgroundGrid from "../components/BackgroundGrid"
import { 
  ChevronDown, 
  ArrowRight, 
  Check, 
  Award, 
  MessageSquare,
  Sparkles,
  Shield,
  Zap,
  Layers,
  LineChart,
  Network,
  Users,
  GraduationCap,
  Globe,
  Database,
  BookOpen,
  Menu,
  X,
  Send,
  HelpCircle,
  FileText,
  Activity,
  Cpu,
  ArrowUpRight
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [chatbotOpen, setChatbotOpen] = useState(false)
  
  // Chatbot Q&A simulation
  const [chatMessages, setChatMessages] = useState<Array<{ sender: "user" | "bot"; text: string; citations?: string[] }>>([
    { sender: "bot", text: "Hello! I am the Akashic Q&A Assistant. Ask me anything about our platform, DPI track record, or solutions." }
  ])
  const [chatInput, setChatInput] = useState("")

  const handleSendMessage = () => {
    if (!chatInput.trim()) return
    const userText = chatInput
    setChatMessages(prev => [...prev, { sender: "user", text: userText }])
    setChatInput("")

    setTimeout(() => {
      let botText = "I could not locate specific answers in my knowledge base. However, you can read our Playbook for more."
      let citations: string[] = []

      const query = userText.toLowerCase()
      if (query.includes("cowin") || query.includes("diksha") || query.includes("dpi") || query.includes("india")) {
        botText = "DHIRA's team has delivered 6 of India's largest Digital Public Infrastructure (DPI) platforms, including CoWIN (2B+ vaccinations), DIKSHA (5B+ learning sessions), and eMigrate. These support billions of secure transactions under strict regulatory environments."
        citations = ["DHIRA Overview - Slide 2", "DHIRA Website Content Master Section 2"]
      } else if (query.includes("akashic") || query.includes("modules") || query.includes("platform")) {
        botText = "The Akashic platform consists of 10 core modules covering Data Ingestion, MDM, Data Governance, BI dashboards, AML (Machine Learning), and Workflow. It supports cloud, on-premises, and hybrid setups, ensuring absolute data sovereignty."
        citations = ["Akashic Platform Brochure - Page 3", "Akashic Platform Deck - Slide 8"]
      } else if (query.includes("rag") || query.includes("document qa") || query.includes("licensing") || query.includes("llama")) {
        botText = "Building an enterprise Document Q&A requires layout-aware parsing, hybrid retrieval (vector + keyword), and a re-ranker. To satisfy enterprise compliance audits, we recommend Apache 2.0 or MIT licensed models such as Qwen 2.5-VL or DeepSeek-V3 to avoid commercial use restrictions found in Llama or Gemma."
        citations = ["Document Q&A.docx - Page 8", "Licensing Matrix - Section 3"]
      } else if (query.includes("fast") || query.includes("gtm") || query.includes("timeline") || query.includes("cbse") || query.includes("pilot") || query.includes("velocity")) {
        botText = "Our core USP is fast GTM. We deliver a complete proof of concept in 1.5 months (e.g. CBSE project), and full deployment is typically operational within 90 days."
        citations = ["DHIRA Content Master - Section 7"]
      }

      setChatMessages(prev => [...prev, { sender: "bot", text: botText, citations }])
    }, 800)
  }

  // Sitemap navigation data matching the images
  const sitemap = {
    platform: {
      label: "Platform",
      items: [
        { name: "Akashic Data Warehouse", desc: "Enterprise scale storage for analytics." },
        { name: "Akashic Data Pipeline", desc: "Automated, secure data ingestion flow." },
        { name: "Akashic Business Intelligence", desc: "Interactive role-based visual dashboards." },
        { name: "Akashic Insights", desc: "Automated AI summaries and data reports." },
        { name: "AML — Akashic Machine Learning", desc: "Predictive intelligence models." },
        { name: "Akashic Master Data", desc: "Single source of truth for records." },
        { name: "Akashic Data Governance", desc: "Strict data control and stewardship." },
        { name: "Akashic Workflow", desc: "Orchestration and low-code rules." }
      ]
    },
    solutions: {
      label: "Offerings",
      // Two-column dropdown layout
      isTwoCol: true,
      col1Title: "Strategic Capabilities",
      col1Items: [
        { name: "Akashic EIS", desc: "Executive Intelligence System", icon: <Layers className="w-4 h-4" /> },
        { name: "Akashic Life", desc: "Predictive maternal health protocols.", icon: <Activity className="w-4 h-4" /> },
        { name: "Akashic Knowledge", desc: "Intelligence at civilization scale.", icon: <Network className="w-4 h-4" /> }
      ],
      col2Title: "Sectors",
      col2Items: ["Public Sector", "Healthcare", "Education", "Enterprise"]
    },
    delivery: {
      label: "Delivery",
      // Two-column dropdown layout
      isTwoCol: true,
      col1Title: "Strategize",
      col1Items: [
        { name: "AI Readiness Audit", desc: "Validate data for GenAI models.", icon: <BookOpen className="w-4 h-4" /> },
        { name: "Sovereign Blueprint", desc: "Architect secure data mesh.", icon: <Layers className="w-4 h-4" /> },
        { name: "Governance Framework", desc: "Define rules & accountability.", icon: <Shield className="w-4 h-4" /> }
      ],
      col2Title: "Engineer",
      col2Items: [
        { name: "Platform Deployment", desc: "Install the Akashic Core.", icon: <Cpu className="w-4 h-4" /> },
        { name: "Legacy Modernization", desc: "Migrate monoliths safely.", icon: <Layers className="w-4 h-4" /> },
        { name: "Custom Accelerators", desc: "Build tailored AI outcomes.", icon: <Zap className="w-4 h-4" /> }
      ]
    },
    insights: {
      label: "Insights",
      items: [
        { name: "Customer Stories", desc: "Real transformations with concrete numbers." },
        { name: "Perspectives", desc: "Enterprise-grade RAG and data architecture guides." },
        { name: "Documentation", desc: "Platform guides, APIs, and release logs." },
        { name: "Guides", desc: "Step-by-step implementation resources." }
      ]
    },
    company: {
      label: "Company",
      items: [
        { name: "About Us", desc: "Our story, values, and Dilip Hanumara's vision." },
        { name: "Careers", desc: "Build the future of digital public infrastructure." }
      ]
    }
  }

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden transition-colors duration-500">
      {/* Background Canvas Particle Grid */}
      <BackgroundGrid />

      {/* FIXED NAVIGATION HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-border/20 glass-effect">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo & Company Name */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-foreground font-black text-sm">
                Δ
              </div>
              <span className="font-outfit font-black tracking-widest text-xl text-foreground">
                DHIRA
              </span>
            </div>
            <span className="text-[7px] tracking-[0.22em] text-muted-foreground uppercase mt-0.5">
              Digital Human Interfaces & Robotic Agents
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {Object.entries(sitemap).map(([key, group]) => (
              <div 
                key={key} 
                className="relative"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 py-3 text-sm font-medium hover:text-primary transition-colors focus:outline-none">
                  {group.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === key ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown panel */}
                <AnimatePresence>
                  {activeDropdown === key && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute top-full pt-2 ${group.isTwoCol ? "left-1/2 -translate-x-1/2 w-[460px]" : "left-0 w-80"}`}
                    >
                      <div className="rounded-2xl p-5 shadow-2xl border border-border/40 glass-effect">
                        {group.isTwoCol ? (
                          <div className="grid grid-cols-12 gap-6">
                            {/* Column 1 */}
                            <div className="col-span-7 flex flex-col gap-3.5">
                              <span className="text-[9px] font-black text-primary tracking-widest uppercase border-b border-border/20 pb-1.5">
                                {group.col1Title}
                              </span>
                              <div className="flex flex-col gap-3">
                                {group.col1Items?.map((item, idx) => (
                                  <div key={idx} className="flex gap-2.5 items-start group">
                                    <div className="w-7 h-7 rounded bg-primary/10 flex items-center justify-center text-primary mt-0.5 shrink-0">
                                      {item.icon}
                                    </div>
                                    <div className="flex flex-col">
                                      <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">{item.name}</span>
                                      <span className="text-[10px] text-muted-foreground">{item.desc}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            {/* Column 2 */}
                            <div className="col-span-5 flex flex-col gap-3.5">
                              <span className="text-[9px] font-black text-primary tracking-widest uppercase border-b border-border/20 pb-1.5">
                                {group.col2Title}
                              </span>
                              <div className="flex flex-col gap-2.5">
                                {group.col2Items?.map((item, idx) => {
                                  if (typeof item === "string") {
                                    return (
                                      <a key={idx} href="#who-we-serve" className="text-xs font-semibold hover:text-primary transition-colors text-foreground/80">
                                        {item}
                                      </a>
                                    )
                                  } else {
                                    return (
                                      <div key={idx} className="flex gap-2.5 items-start group">
                                        <div className="w-7 h-7 rounded bg-primary/10 flex items-center justify-center text-primary mt-0.5 shrink-0">
                                          {item.icon}
                                        </div>
                                        <div className="flex flex-col">
                                          <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">{item.name}</span>
                                          <span className="text-[10px] text-muted-foreground">{item.desc}</span>
                                        </div>
                                      </div>
                                    )
                                  }
                                })}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col gap-3">
                            <span className="text-[9px] font-black text-primary tracking-widest uppercase border-b border-border/20 pb-1.5 mb-1 block">
                              {group.label} Options
                            </span>
                            {group.items?.map((item, idx) => (
                              <a 
                                key={idx} 
                                href="#talk-to-us" 
                                className="group flex flex-col p-1 rounded hover:bg-secondary/50 transition-all"
                              >
                                <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                                  {item.name}
                                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </span>
                                <span className="text-[10px] text-muted-foreground mt-0.5 line-clamp-1">
                                  {item.desc}
                                </span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#talk-to-us" className="text-sm font-medium hover:text-primary transition-colors">
              Sign in
            </a>
            <a 
              href="#talk-to-us" 
              className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-sm font-semibold transition-all shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              Book a demo
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-foreground focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-border/20 overflow-hidden bg-background/95 backdrop-blur-xl"
            >
              <div className="px-6 py-6 flex flex-col gap-6 max-h-[80vh] overflow-y-auto">
                {Object.entries(sitemap).map(([key, group]) => (
                  <div key={key} className="flex flex-col gap-2">
                    <span className="text-xs font-bold text-primary tracking-widest uppercase border-b border-border/10 pb-1">
                      {group.label}
                    </span>
                    <div className="grid grid-cols-1 gap-2 pl-2">
                      {group.isTwoCol ? (
                        <>
                          {group.col1Items?.map((item, idx) => (
                            <a key={idx} href="#talk-to-us" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-foreground/80 hover:text-primary">
                              {item.name}
                            </a>
                          ))}
                          {group.col2Items?.map((item, idx) => (
                            <a key={idx} href="#talk-to-us" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-foreground/80 hover:text-primary">
                              {typeof item === "string" ? item : item.name}
                            </a>
                          ))}
                        </>
                      ) : (
                        group.items?.map((item, idx) => (
                          <a key={idx} href="#talk-to-us" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-foreground/80 hover:text-primary">
                            {item.name}
                          </a>
                        ))
                      )}
                    </div>
                  </div>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t border-border/20">
                  <a href="#talk-to-us" className="w-full text-center py-3 rounded-lg border border-border text-sm font-medium hover:bg-secondary">
                    Sign in
                  </a>
                  <a href="#talk-to-us" className="w-full text-center py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold shadow-lg">
                    Book a demo
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* SECTION 01: HERO — ABOVE THE FOLD */}
      <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center z-10 px-6">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          
          {/* Animated award badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
          >
            <Award className="w-4 h-4" />
            Maha Hackathon & Telangana AI Rising 2025 Winner
          </motion.div>

          {/* Primary Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-outfit font-black tracking-tight text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] max-w-4xl"
          >
            From Data. <br />
            To Decisions. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">At Scale.</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed font-medium"
          >
            DHIRA partners with governments and enterprises to design, build, and deploy intelligent systems — from strategy to production. Powered by Akashic, our unified AI and data platform.
          </motion.p>

          {/* Action buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="#platform-intro" 
              className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-bold transition-all shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 text-center"
            >
              See Akashic in Action
            </a>
            <a 
              href="#talk-to-us" 
              className="px-8 py-3.5 rounded-full border border-border bg-background/40 hover:bg-secondary text-foreground font-bold transition-all hover:-translate-y-0.5 text-center backdrop-blur-sm"
            >
              Talk to Our Team
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 02: NATIONAL SCALE CREDENTIALS STRIP */}
      <section className="relative z-10 border-y border-border/20 py-10 glass-effect">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-primary">
              THE TEAM BEHIND INDIA'S LARGEST DIGITAL PLATFORMS
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 text-center">
            {[
              { stat: "2+ Billion vaccinations", label: "CoWIN / U-WIN" },
              { stat: "5+ Billion learning sessions", label: "DIKSHA" },
              { stat: "100M+ children & mothers", label: "Poshan Tracker" },
              { stat: "300K foreign employers", label: "eMigrate" },
              { stat: "10M+ SHGs managed", label: "LokOS" },
              { stat: "18M+ youth beneficiaries", label: "Yuva / My Bharat" }
            ].map((cred, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-outfit font-black text-lg md:text-xl text-foreground">
                  {cred.stat.split(" ")[0]}
                </span>
                <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mt-0.5">
                  {cred.stat.split(" ").slice(1).join(" ")}
                </span>
                <span className="text-xs text-foreground font-medium mt-1">
                  {cred.label}
                </span>
              </div>
            ))}
          </div>

          {/* Badges strip */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest border-t border-border/10 pt-6">
            <span>Startup India Recognized</span>
            <span className="opacity-30">•</span>
            <span>MSME Registered</span>
            <span className="opacity-30">•</span>
            <span>Winner: Maha Hackathon 2025</span>
            <span className="opacity-30">•</span>
            <span>Winner: Telangana AI Rising 2025</span>
          </div>
        </div>
      </section>

      {/* SECTION 03: PROBLEM STATEMENT */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
            THE PROBLEM WE SOLVE
          </span>
          <h2 className="font-outfit font-black text-3xl md:text-5xl text-foreground mt-4 max-w-3xl mx-auto leading-tight">
            Your data is everywhere. Your decisions can't wait. Your teams are still working in silos.
          </h2>
        </div>

        {/* 3 columns rows */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Layers className="w-6 h-6 text-primary" />,
              title: "Fragmented Data",
              desc: "Citizen records in 12 systems. Sales data in 6 tools. Nobody has a single version of the truth."
            },
            {
              icon: <LineChart className="w-6 h-6 text-primary" />,
              title: "Delayed Decisions",
              desc: "Reports take days. By the time insight reaches the decision-maker, the moment has passed."
            },
            {
              icon: <Zap className="w-6 h-6 text-primary" />,
              title: "Tool Overload",
              desc: "Separate ETL, BI, ML, and workflow tools. High cost. Low interoperability. No governance."
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl glass-effect border border-border/30 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="font-outfit font-bold text-lg text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 04: THREE OFFERINGS */}
      <section className="relative z-10 py-24 px-6 bg-secondary/15 border-y border-border/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              WHAT DHIRA DOES
            </span>
            <h2 className="font-outfit font-black text-3xl md:text-5xl text-foreground mt-4">
              We design it. We build it. We power it.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                label: "We Design It",
                title: "STRATEGIC ADVISORY",
                desc: "Data strategy, AI readiness assessments, and program design for governments and enterprises ready to transform.",
                link: "Explore Advisory →"
              },
              {
                label: "We Build It",
                title: "PLATFORM ENGINEERING",
                desc: "Custom platform development, government digital infrastructure, rapid prototyping, and AI accelerators. CBSE POC: delivered in 1.5 months.",
                link: "See What We Build →"
              },
              {
                label: "We Power It",
                title: "AKASHIC PLATFORM",
                desc: "DHIRA's unified AI and data platform. 10 modules from ingestion to governance. Cloud, on-premises, or hybrid.",
                link: "Explore Akashic →"
              }
            ].map((offering, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-background/55 border border-border/30 hover:border-primary/20 hover:bg-background/90 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                    {offering.label}
                  </span>
                  <h3 className="font-outfit font-bold text-xl text-foreground mt-2 mb-4">
                    {offering.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    {offering.desc}
                  </p>
                </div>
                <a href="#talk-to-us" className="text-xs font-bold text-primary hover:text-primary-hover transition-all">
                  {offering.link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05: AKASHIC PLATFORM INTRO */}
      <section id="platform-intro" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left info column */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
              THE PLATFORM — MEET AKASHIC
            </span>
            <h2 className="font-outfit font-black text-3xl md:text-5xl text-foreground mt-4 leading-tight">
              One Platform. Every Layer. Raw Data to Live Decisions.
            </h2>
            <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
              Akashic is DHIRA's unified AI and data platform. It handles everything — data ingestion, master data management, business intelligence, machine learning, workflow automation, and data governance — in one connected system. Cloud, on-premises, or hybrid.
            </p>
            <div className="mt-8">
              <a 
                href="#talk-to-us" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-bold transition-all shadow-md"
              >
                Explore the Full Platform <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right capabilities blocks */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: <Database className="w-6 h-6 text-primary" />,
                title: "📥 Data Capabilities",
                desc: "Unified ETL · Master Data Management · Governance · Secure Data Lake"
              },
              {
                icon: <LineChart className="w-6 h-6 text-primary" />,
                title: "📊 BI Capabilities",
                desc: "Interactive Dashboards · Custom Reports · Real-time KPIs · Role-Based Analytics"
              },
              {
                icon: <Sparkles className="w-6 h-6 text-primary" />,
                title: "🤖 AI Capabilities",
                desc: "Predictive Modeling · Anomaly Detection · Multilingual NLP · Conversational AI"
              },
              {
                icon: <Network className="w-6 h-6 text-primary" />,
                title: "⚡ Workflow & Automation",
                desc: "Business Rule Engine · Process Orchestration · Automated Alerts · Low-Code Builder"
              }
            ].map((block, idx) => (
              <div key={idx} className="p-6 rounded-xl glass-effect border border-border/20 flex gap-4">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                  {block.icon}
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-sm text-foreground mb-1">
                    {block.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {block.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06: WHO WE SERVE */}
      <section id="who-we-serve" className="relative z-10 py-24 px-6 bg-secondary/15 border-y border-border/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-outfit font-black text-3xl md:text-5xl text-foreground">
              Governments. Enterprises. Both Served Differently.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Government card */}
            <div className="p-8 md:p-10 rounded-2xl bg-background/60 border border-border/30 hover:border-primary/20 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                  🏛️ FOR GOVERNMENT
                </span>
                <h3 className="font-outfit font-bold text-2xl text-foreground mt-2 mb-4">
                  Ministries, States & Public Sector
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-8">
                  We have delivered 6 national DPI platforms touching billions of lives. We understand Ministry workflows, data sovereignty requirements, and multi-stakeholder governance.
                </p>
                
                <ul className="flex flex-col gap-3 mb-8">
                  {[
                    "On-premises deployment · Full data sovereignty",
                    "Ministry-scale data pipelines · Grievance workflows",
                    "Demographic analytics · Scheme performance tracking"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-foreground/80">
                      <span className="w-4 h-4 rounded-full bg-success/20 text-success flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a 
                href="#talk-to-us" 
                className="w-full text-center py-3 rounded-lg border border-border hover:bg-secondary text-foreground text-xs font-bold transition-all"
              >
                Request a Ministry Briefing →
              </a>
            </div>

            {/* Enterprise card */}
            <div className="p-8 md:p-10 rounded-2xl bg-background/60 border border-border/30 hover:border-primary/20 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                  🏢 FOR ENTERPRISE
                </span>
                <h3 className="font-outfit font-bold text-2xl text-foreground mt-2 mb-4">
                  BFSI, Healthcare, Retail & Manufacturing
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-8">
                  From Executive Intelligence Systems to branch-level analytics, we bring predictive AI and automated decision-making to companies at scale. Typically operational within 90 days.
                </p>

                <ul className="flex flex-col gap-3 mb-8">
                  {[
                    "Revenue forecasting · Branch performance dashboards",
                    "Fraud detection · Churn prediction · Risk scoring",
                    "Cloud, on-prem, or hybrid · 23+ source connectors"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-foreground/80">
                      <span className="w-4 h-4 rounded-full bg-success/20 text-success flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a 
                href="#talk-to-us" 
                className="w-full text-center py-3 rounded-lg border border-border hover:bg-secondary text-foreground text-xs font-bold transition-all"
              >
                Schedule a Demo →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07: WHY DHIRA — THE USP STRIP */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
            WHY ORGANIZATIONS CHOOSE DHIRA
          </span>
          <h2 className="font-outfit font-black text-3xl md:text-5xl text-foreground mt-4">
            We deliver fast. We secure completely. We scale with you.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              icon: <Zap className="w-5 h-5 text-primary" />,
              title: "⚡ Fast GTM",
              desc: "Proof of Concept to delivery in 1.5 months. No bloated timelines."
            },
            {
              icon: <Shield className="w-5 h-5 text-primary" />,
              title: "🔒 Enterprise Security",
              desc: "On-premises deployment, data sovereignty, and RBAC built into every module."
            },
            {
              icon: <Sparkles className="w-5 h-5 text-primary" />,
              title: "🤖 AI-Native Methods",
              desc: "AI woven into every layer — not bolted on. From NLP to predictive ML in one platform."
            },
            {
              icon: <MessageSquare className="w-5 h-5 text-primary" />,
              title: "📡 Smooth Communication",
              desc: "One dedicated team. Clear milestones. Ministry-tested delivery rigor."
            },
            {
              icon: <Layers className="w-5 h-5 text-primary" />,
              title: "🔁 Modular & Scalable",
              desc: "Start with one module. Scale to the full platform. No lock-in."
            }
          ].map((usp, idx) => (
            <div key={idx} className="p-6 rounded-xl glass-effect border border-border/20 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-4 shrink-0">
                  {usp.icon}
                </div>
                <h3 className="font-outfit font-bold text-sm text-foreground mb-2">
                  {usp.title}
                </h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  {usp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 08: USE CASE CARDS */}
      <section id="use-case-cards" className="relative z-10 py-24 px-6 bg-secondary/15 border-y border-border/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              BUILT FOR REAL PROBLEMS. PROVEN ON REAL PLATFORMS.
            </span>
            <h2 className="font-outfit font-black text-3xl md:text-5xl text-foreground mt-4">
              Impact you can measure. From platforms you know.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Case 1: DIKSHA */}
            <div className="p-8 rounded-2xl bg-background/80 border border-border/30 hover:border-primary/20 transition-all flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center justify-between border-b border-border/20 pb-4 mb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5 font-outfit">
                    🎓 PUBLIC SECTOR — EDUCATION
                  </span>
                  <span className="text-[9px] font-bold text-success bg-success/10 px-2 py-0.5 rounded uppercase">
                    🟢 Ready to publish
                  </span>
                </div>
                <h3 className="font-outfit font-bold text-2xl text-foreground">
                  1.89 Crore Students. One National View.
                </h3>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                  DIKSHA national platform: learning sessions, course completions, and content metrics across every state — in a single real-time dashboard powered by Akashic BI.
                </p>

                {/* Animated graphic mockup for DIKSHA */}
                <div className="my-6 p-4 rounded-xl border border-border/35 bg-background/50 flex flex-col gap-2">
                  <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                    Learning Sessions Growth (Jan - Dec 2024)
                  </span>
                  <div className="h-20 w-full relative">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M 0 90 Q 25 70 50 40 T 100 15" fill="none" stroke="var(--primary)" strokeWidth="3" />
                      <circle cx="100" cy="15" r="3.5" fill="var(--primary)" />
                    </svg>
                    <div className="flex justify-between text-[8px] text-muted-foreground font-bold mt-1">
                      <span>Q1</span>
                      <span>Q2</span>
                      <span>Q3</span>
                      <span className="text-foreground">564 Crore Sessions</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-border/20 pt-4 text-center">
                  <div>
                    <span className="font-outfit font-black text-lg text-foreground">564 Cr</span>
                    <span className="block text-[9px] text-muted-foreground mt-0.5">Sessions Tracked</span>
                  </div>
                  <div>
                    <span className="font-outfit font-black text-lg text-foreground">18.25 Cr</span>
                    <span className="block text-[9px] text-muted-foreground mt-0.5">Total Enrolments</span>
                  </div>
                  <div>
                    <span className="font-outfit font-black text-lg text-foreground">7,476</span>
                    <span className="block text-[9px] text-muted-foreground mt-0.5">Energized Textbooks</span>
                  </div>
                </div>
              </div>
              <a href="#talk-to-us" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                Read Impact Study →
              </a>
            </div>

            {/* Case 2: eMigrate */}
            <div className="p-8 rounded-2xl bg-background/80 border border-border/30 hover:border-primary/20 transition-all flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center justify-between border-b border-border/20 pb-4 mb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5 font-outfit">
                    ✈️ PUBLIC SECTOR — LABOUR MINISTRY
                  </span>
                  <span className="text-[9px] font-bold text-success bg-success/10 px-2 py-0.5 rounded uppercase">
                    🟢 Ready to publish
                  </span>
                </div>
                <h3 className="font-outfit font-bold text-2xl text-foreground">
                  387,000 Emigrations. Tracked, Analyzed, Acted On.
                </h3>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                  eMigrate platform: national emigration volume, destination country breakdowns, demand type analysis — updated in real time for Ministry of External Affairs oversight.
                </p>

                {/* Destination country bars */}
                <div className="my-6 p-4 rounded-xl border border-border/35 bg-background/50 flex flex-col gap-2">
                  <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                    Emigration Demands (2024 Breakdowns)
                  </span>
                  <div className="flex flex-col gap-2.5 pt-1.5">
                    <div className="flex items-center justify-between text-[9px]">
                      <span className="w-16 font-semibold">Saudi Arabia</span>
                      <div className="flex-1 mx-2 h-2 bg-secondary rounded overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "75%" }}></div>
                      </div>
                      <span className="font-bold text-foreground">168K</span>
                    </div>
                    <div className="flex items-center justify-between text-[9px]">
                      <span className="w-16 font-semibold">UAE</span>
                      <div className="flex-1 mx-2 h-2 bg-secondary rounded overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: "50%" }}></div>
                      </div>
                      <span className="font-bold text-foreground">111K</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-border/20 pt-4 text-center">
                  <div>
                    <span className="font-outfit font-black text-lg text-foreground">387,063</span>
                    <span className="block text-[9px] text-muted-foreground mt-0.5">Emigrations</span>
                  </div>
                  <div>
                    <span className="font-outfit font-black text-lg text-foreground">Top 10</span>
                    <span className="block text-[9px] text-muted-foreground mt-0.5">Destinations</span>
                  </div>
                  <div>
                    <span className="font-outfit font-black text-lg text-foreground">2024</span>
                    <span className="block text-[9px] text-muted-foreground mt-0.5">Data Metric</span>
                  </div>
                </div>
              </div>
              <a href="#talk-to-us" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                Read Impact Study →
              </a>
            </div>

            {/* Case 3: Bihar Caste Survey */}
            <div className="p-8 rounded-2xl bg-background/80 border border-border/30 hover:border-primary/20 transition-all flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center justify-between border-b border-border/20 pb-4 mb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5 font-outfit">
                    📊 PUBLIC SECTOR — GOVERNANCE ANALYTICS
                  </span>
                  <span className="text-[9px] font-bold text-success bg-success/10 px-2 py-0.5 rounded uppercase">
                    🟢 Ready to publish
                  </span>
                </div>
                <h3 className="font-outfit font-bold text-2xl text-foreground">
                  A Whole State's Demographics. In One Dashboard.
                </h3>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                  Bihar Caste Survey: population-level education, employment, income, and migration data — visualized with AI-generated narrative summaries for government review.
                </p>

                {/* Literacy Rate Donut Mockup */}
                <div className="my-6 p-4 rounded-xl border border-border/35 bg-background/50 flex flex-col gap-2">
                  <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                    District Level Indicators
                  </span>
                  <div className="h-20 w-full flex items-center justify-center">
                    <div className="relative w-14 h-14 rounded-full border-4 border-secondary flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent border-r-transparent animate-spin" style={{ animationDuration: '4s' }}></div>
                      <span className="text-[9px] font-black">64.53%</span>
                    </div>
                    <div className="ml-4 text-left">
                      <span className="text-[10px] font-bold block text-foreground">District Literacy Tracked</span>
                      <span className="text-[9px] text-muted-foreground">AI summaries generated</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-border/20 pt-4 text-center">
                  <div>
                    <span className="font-outfit font-black text-lg text-foreground">64.53%</span>
                    <span className="block text-[9px] text-muted-foreground mt-0.5">Literacy Rate</span>
                  </div>
                  <div>
                    <span className="font-outfit font-black text-lg text-foreground">50.9%</span>
                    <span className="block text-[9px] text-muted-foreground mt-0.5">Employment</span>
                  </div>
                  <div>
                    <span className="font-outfit font-black text-lg text-foreground">Auto</span>
                    <span className="block text-[9px] text-muted-foreground mt-0.5">AI Summaries</span>
                  </div>
                </div>
              </div>
              <a href="#talk-to-us" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                Read Impact Study →
              </a>
            </div>

            {/* Case 4: Enterprise Placeholder */}
            <div className="p-8 rounded-2xl bg-background/80 border border-border/30 hover:border-primary/20 transition-all flex flex-col justify-between gap-6 border-dashed">
              <div className="opacity-70">
                <div className="flex items-center justify-between border-b border-border/20 pb-4 mb-4 font-outfit">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">
                    🏢 ENTERPRISE — PENDING APPROVAL
                  </span>
                  <span className="text-[9px] font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded uppercase">
                    🟡 Follow up needed
                  </span>
                </div>
                <h3 className="font-outfit font-bold text-2xl text-foreground">
                  Multi-location Enterprise Intelligence. 90 Days to Live.
                </h3>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                  Executive Intelligence System for a multi-location enterprise: revenue forecasting, branch performance analytics, and AI-driven operational dashboards — delivered in 90 days.
                </p>
                <div className="mt-8 p-4 rounded-xl border border-dashed border-border/40 bg-secondary/35 text-center py-6">
                  <HelpCircle className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <span className="text-xs font-bold text-foreground block">
                    Contact Rajiv / Naresh for Client Approval
                  </span>
                  <span className="text-[10px] text-muted-foreground block mt-1">
                    (Rajiv is in direct contact with the client)
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-muted-foreground cursor-not-allowed">
                Pending enterprise approval
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09: IMPACT NUMBERS STRIP */}
      <section className="relative z-10 border-y border-border/20 py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {[
            { value: "2B+", desc: "Vaccinations on CoWIN/U-WIN" },
            { value: "5B+", desc: "Learning sessions on DIKSHA" },
            { value: "300K", desc: "Foreign employers on eMigrate" },
            { value: "10M+", desc: "SHGs managed on LokOS" },
            { value: "18M+", desc: "Youth on Yuva / My Bharat" }
          ].map((num, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-outfit font-black text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {num.value}
              </span>
              <span className="text-xs text-muted-foreground mt-2 font-medium">
                {num.desc}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 10: CUSTOMER STORIES / TESTIMONIALS */}
      <section className="relative z-10 py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
            WHAT OUR CLIENTS SAY
          </span>
          <h2 className="font-outfit font-black text-3xl md:text-5xl text-foreground mt-4">
            Voice of Partners
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Government official quote */}
          <div className="p-8 rounded-2xl glass-effect border border-border/30 flex flex-col justify-between">
            <p className="text-xs text-foreground/90 italic leading-relaxed">
              "Working with DHIRA transformed how our Ministry processes data. What used to take weeks of reporting is now a live dashboard that any officer can read in seconds."
            </p>
            <div className="mt-6 border-t border-border/10 pt-4 flex flex-col">
              <span className="text-xs font-bold text-foreground">
                [Ministry Official]
              </span>
              <span className="text-[10px] text-muted-foreground">
                Pending Mukul's PM follow-up
              </span>
            </div>
          </div>

          {/* Enterprise client quote */}
          <div className="p-8 rounded-2xl glass-effect border border-border/30 flex flex-col justify-between">
            <p className="text-xs text-foreground/90 italic leading-relaxed">
              "The Akashic platform gave us something we never had before — a single view of every branch's performance, in real time. Revenue decisions that used to take a week now happen in a meeting."
            </p>
            <div className="mt-6 border-t border-border/10 pt-4 flex flex-col">
              <span className="text-xs font-bold text-foreground">
                [Enterprise Client]
              </span>
              <span className="text-[10px] text-muted-foreground">
                Pending Rajiv/Naresh approval
              </span>
            </div>
          </div>

          {/* MP Locker */}
          <div className="p-8 rounded-2xl glass-effect border border-border/30 md:col-span-2 flex flex-col md:flex-row md:items-center justify-between gap-6 border-dashed border-amber-500/30 bg-amber-500/5">
            <div className="flex-1">
              <span className="text-xs font-bold text-amber-500 tracking-wider block mb-1">
                ⭐ HIGH VALUE PIPELINE CASE
              </span>
              <h4 className="font-outfit font-bold text-lg text-foreground">
                MP Locker (Commissioner level testification)
              </h4>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                Commissioner is directly involved per Mukul. This is a high-value testimonial representing exceptional credibility for government procurement.
              </p>
            </div>
            <div className="shrink-0">
              <a 
                href="#talk-to-us" 
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-black text-xs font-bold transition-all"
              >
                Follow up with Mukul
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: RECOGNITION STRIP */}
      <section className="relative z-10 border-y border-border/20 py-10 glass-effect">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around items-center gap-8 text-center">
          {[
            { title: "🏆 Maha Hackathon 2025", sub: "Winner" },
            { title: "🏆 Telangana AI Rising 2025", sub: "Winner" },
            { title: "🇮🇳 Startup India", sub: "Recognized" },
            { title: "📋 MSME", sub: "Registered" }
          ].map((rec, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-outfit font-black text-base md:text-lg text-foreground">
                {rec.title}
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">
                {rec.sub}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 12: FINAL CTA — TALK TO US */}
      <section id="talk-to-us" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="p-8 md:p-16 rounded-3xl border border-border/25 bg-background/70 glass-effect text-center max-w-5xl mx-auto">
          <h2 className="font-outfit font-black text-3xl md:text-6xl text-foreground leading-tight">
            Ready to see what <br className="hidden md:block" /> your data can do? Let's talk.
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
            {/* Government briefing form card */}
            <div className="p-6 md:p-8 rounded-xl border border-border/30 bg-background/50 flex flex-col justify-between">
              <div>
                <h3 className="font-outfit font-bold text-xl text-foreground">
                  🏛️ FOR GOVERNMENT
                </h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Request a Ministry Briefing. Schedule a dedicated session for your Ministry or department. We cover platform capabilities, DPI track record, and deployment options.
                </p>
                <div className="flex flex-col gap-3 mt-6">
                  <input type="text" placeholder="Ministry / Department Name" className="px-4 py-2.5 rounded bg-secondary/50 border border-border text-xs focus:outline-none focus:border-primary text-foreground" />
                  <input type="email" placeholder="Official Email Address" className="px-4 py-2.5 rounded bg-secondary/50 border border-border text-xs focus:outline-none focus:border-primary text-foreground" />
                </div>
              </div>
              <button className="mt-6 w-full py-3 rounded bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-bold transition-all shadow-md">
                [ Request Briefing — Ministry Form ]
              </button>
            </div>

            {/* Enterprise demo form card */}
            <div className="p-6 md:p-8 rounded-xl border border-border/30 bg-background/50 flex flex-col justify-between">
              <div>
                <h3 className="font-outfit font-bold text-xl text-foreground">
                  🏢 FOR ENTERPRISE
                </h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Schedule a Demo or 6-Week Pilot. See Akashic working on your actual data. We offer a structured 6-week pilot with defined outcomes — so you evaluate on real results.
                </p>
                <div className="flex flex-col gap-3 mt-6">
                  <input type="text" placeholder="Company Name" className="px-4 py-2.5 rounded bg-secondary/50 border border-border text-xs focus:outline-none focus:border-primary text-foreground" />
                  <input type="email" placeholder="Work Email Address" className="px-4 py-2.5 rounded bg-secondary/50 border border-border text-xs focus:outline-none focus:border-primary text-foreground" />
                </div>
              </div>
              <button className="mt-6 w-full py-3 rounded bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-bold transition-all shadow-md">
                [ Book a Demo — Enterprise Form ]
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 13: FOOTER */}
      <footer id="footer" className="relative z-10 border-t border-border/20 pt-16 pb-32 bg-background/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo column */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-foreground font-black text-sm">
                Δ
              </div>
              <span className="font-outfit font-black tracking-widest text-xl text-foreground">
                DHIRA
              </span>
            </div>
            <span className="text-[7px] tracking-[0.22em] text-muted-foreground uppercase mt-2">
              Digital Human Interfaces & Robotic Agents
            </span>
            <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
              We design, build, and power the next generation of digital platforms and interfaces at national scale.
            </p>
            {/* System Status flasher LED */}
            <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-success">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
              System Operational
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-outfit font-bold text-sm text-foreground uppercase tracking-widest mb-4">
              Platform Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-muted-foreground">
              <li><a href="#platform-intro" className="hover:text-primary transition-colors">Platform Overview</a></li>
              <li><a href="#platform-intro" className="hover:text-primary transition-colors">Solutions</a></li>
              <li><a href="#platform-intro" className="hover:text-primary transition-colors">What We Do</a></li>
              <li><a href="#platform-intro" className="hover:text-primary transition-colors">What We Build</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-outfit font-bold text-sm text-foreground uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-muted-foreground">
              <li><a href="#footer" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#footer" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#footer" className="hover:text-primary transition-colors">Recognition</a></li>
              <li><a href="#footer" className="hover:text-primary transition-colors">Insights</a></li>
            </ul>
          </div>

          {/* Registered Office column */}
          <div>
            <h4 className="font-outfit font-bold text-sm text-foreground uppercase tracking-widest mb-4">
              Registered Office
            </h4>
            <address className="text-xs text-muted-foreground not-italic leading-relaxed flex flex-col gap-2">
              <span>DHIRA Software Labs Pvt. Ltd.</span>
              <span>Registered office address required for government vendor qualification.</span>
              <span className="mt-2 text-foreground font-semibold">info@dhira.ai</span>
            </address>
          </div>
        </div>

        {/* Legal bar */}
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-medium text-muted-foreground">
          <span>
            © 2025 DHIRA Software Labs Pvt. Ltd. All rights reserved. Privacy Policy · Terms of Use
          </span>
          <div className="flex gap-6">
            <span>Startup India badge</span>
            <span>MSME badge</span>
          </div>
        </div>
      </footer>

      {/* THEME STYLE VARIATION BOTTOM BAR */}
      <div className="fixed bottom-0 left-0 w-full z-50 border-t border-border/30 bg-background/95 backdrop-blur-xl py-4 flex items-center justify-center gap-4 px-6 shadow-2xl">
        <span className="text-xs font-bold text-foreground/80 hidden sm:inline mr-2 uppercase tracking-widest">
          Style variation:
        </span>
        <button 
          onClick={() => setTheme("light-emerald")} 
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
            theme === "light-emerald" 
              ? "bg-primary text-primary-foreground shadow-lg font-black" 
              : "border border-border bg-secondary hover:bg-secondary/70 text-foreground"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
          Page 1 (Light Emerald)
        </button>
        <button 
          onClick={() => setTheme("light-violet")} 
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
            theme === "light-violet" 
              ? "bg-primary text-primary-foreground shadow-lg font-black" 
              : "border border-border bg-secondary hover:bg-secondary/70 text-foreground"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-violet-600"></span>
          Page 2 (Light Violet)
        </button>
        <button 
          onClick={() => setTheme("dark")} 
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
            theme === "dark" 
              ? "bg-primary text-primary-foreground shadow-lg font-black" 
              : "border border-border bg-secondary hover:bg-secondary/70 text-foreground"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          Page 3 (Dark Theme)
        </button>
        <button 
          onClick={() => setTheme("light-orange")} 
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
            theme === "light-orange" 
              ? "bg-primary text-primary-foreground shadow-lg font-black" 
              : "border border-border bg-secondary hover:bg-secondary/70 text-foreground"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-orange-600"></span>
          Page 4 (Light Orange)
        </button>
      </div>

      {/* INTERACTIVE CHATBOT FLOATING ACTION */}
      <div className="fixed bottom-20 right-6 z-40">
        <AnimatePresence>
          {chatbotOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-80 h-[400px] rounded-2xl shadow-2xl border border-border/30 mb-4 flex flex-col justify-between overflow-hidden glass-effect"
            >
              {/* Chatbot Header */}
              <div className="p-4 bg-primary text-primary-foreground flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center font-bold text-xs">
                    Q
                  </div>
                  <div>
                    <span className="text-xs font-bold block">Akashic Q&A</span>
                    <span className="text-[8px] opacity-85 block">Source-Grounded QA Assistant</span>
                  </div>
                </div>
                <button 
                  onClick={() => setChatbotOpen(false)}
                  className="text-primary-foreground hover:opacity-80 focus:outline-none"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 text-xs">
                {chatMessages.map((msg, idx) => (
                  <div 
                    key={idx} 
                    className={`max-w-[85%] p-3 rounded-lg leading-relaxed flex flex-col ${
                      msg.sender === "user" 
                        ? "bg-primary text-primary-foreground self-end rounded-br-none" 
                        : "bg-secondary text-foreground self-start rounded-bl-none border border-border/10"
                    }`}
                  >
                    <span>{msg.text}</span>
                    {msg.citations && msg.citations.length > 0 && (
                      <div className="mt-2 pt-1.5 border-t border-foreground/10 flex flex-col gap-0.5 text-[8px] opacity-80">
                        <span className="font-bold">Citations:</span>
                        {msg.citations.map((cit, cIdx) => (
                          <span key={cIdx} className="flex items-center gap-0.5">
                            📚 {cit}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Input field */}
              <div className="p-3 border-t border-border/20 flex items-center gap-2 bg-background/50">
                <input 
                  type="text" 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask a question..."
                  className="flex-1 px-3 py-1.5 rounded-full border border-border bg-secondary/50 focus:outline-none focus:border-primary text-[11px] text-foreground"
                />
                <button 
                  onClick={handleSendMessage}
                  className="p-1.5 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover focus:outline-none shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating action button */}
        <button 
          onClick={() => setChatbotOpen(!chatbotOpen)}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground flex items-center justify-center shadow-2xl shadow-primary/20 hover:shadow-primary/45 border border-primary/20 transition-all hover:scale-105"
        >
          {chatbotOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </button>
      </div>
    </div>
  )
}
