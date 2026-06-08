"use client"

import React, { useState, useEffect } from "react"
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
  Search,
  Lock,
  ArrowUpRight,
  TrendingDown,
  Terminal,
  Play
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [chatbotOpen, setChatbotOpen] = useState(false)
  const [activeDiagnostic, setActiveDiagnostic] = useState<number>(0)
  
  // Real-time console logs simulation
  const [logs, setLogs] = useState<string[]>([
    "[SYSTEM] Cross-Domain Correlation Engine: ACTIVE.",
    "[SECURITY] Zero Trust Architecture: Verified.",
    "[INGESTION] 14/14 Sources Active. Latency: 12ms.",
    "[COMPLIANCE] PII Masked for 4,200 Customer Records (GDPR).",
    "[SYNC] Oracle Financials -> Salesforce Ledger: COMPLETED.",
    "[AUTO-HEAL] Anomaly detected in APAC Supply Chain data -> Normalized (0.04s)."
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      const logsPool = [
        "[AUTO-HEAL] Anomaly detected in EMEA Logistics pipeline -> Resolved (0.06s).",
        "[SECURITY] Threat matrix scan: 0 alerts.",
        "[SYNC] SAP Ledger -> Salesforce Revenue Cloud: IN SYNC.",
        "[COMPLIANCE] Data sovereignty check: PASSED (Sovereign Blueprint Localized).",
        "[INGESTION] Ingestion rate: 142k events/sec. latency: 9ms.",
        "[SYSTEM] AI Dynamic Pricing adjusted margins for 210 products."
      ]
      const randomLog = logsPool[Math.floor(Math.random() * logsPool.length)]
      setLogs(prev => [randomLog, ...prev.slice(0, 5)])
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Chatbot Q&A simulation
  const [chatMessages, setChatMessages] = useState<Array<{ sender: "user" | "bot"; text: string; citations?: string[] }>>([
    { sender: "bot", text: "Hello! I am the Akashic Q&A Assistant. Ask me anything about our platform, DPI track record, or velocity protocol." }
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
        botText = "Our core USP is fast GTM. We deliver a complete proof of concept in 1.5 months (e.g. CBSE project), and full deployment is typically operational within 90 days. We also offer a structured 6-week Velocity Protocol to validate ROI before you scale."
        citations = ["Velocity Protocol Overview", "Mukul Presales Interview - Section 7"]
      }

      setChatMessages(prev => [...prev, { sender: "bot", text: botText, citations }])
    }, 800)
  }

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden transition-colors duration-500 pb-20">
      {/* Dynamic Animated Canvas Grid in Background */}
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

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* 1. Platform */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("platform")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 py-3 text-sm font-medium hover:text-primary transition-colors focus:outline-none">
                Platform
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {activeDropdown === "platform" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full pt-2 w-80"
                  >
                    <div className="rounded-xl p-4 shadow-2xl border border-border/40 glass-effect flex flex-col gap-2">
                      <span className="text-[9px] font-bold text-primary tracking-widest uppercase mb-1">Akashic Core Modules</span>
                      {[
                        "Akashic Data Warehouse",
                        "Akashic Data Pipeline",
                        "Akashic Business Intelligence",
                        "Akashic Insights",
                        "AML — Akashic Machine Learning",
                        "Akashic Master Data",
                        "Akashic Data Governance",
                        "Akashic Workflow"
                      ].map((item, idx) => (
                        <a key={idx} href="#introducing-akashic" className="text-xs font-semibold py-1 hover:text-primary transition-colors text-foreground/80">
                          {item}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 2. Offerings Dropdown (Matching Screenshot 1) */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("offerings")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 py-3 text-sm font-medium hover:text-primary transition-colors focus:outline-none">
                Offerings
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {activeDropdown === "offerings" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 -translate-x-1/4 top-full pt-2 w-[460px]"
                  >
                    <div className="rounded-2xl p-5 shadow-2xl border border-border/40 glass-effect grid grid-cols-12 gap-6">
                      {/* Left: Strategic Capabilities */}
                      <div className="col-span-7 flex flex-col gap-3.5">
                        <span className="text-[9px] font-black text-primary tracking-widest uppercase border-b border-border/20 pb-1.5">
                          Strategic Capabilities
                        </span>
                        <div className="flex flex-col gap-3">
                          {[
                            { name: "Akashic EIS", desc: "Executive Intelligence System", icon: <Layers className="w-4 h-4" /> },
                            { name: "Akashic Life", desc: "Predictive maternal health protocols.", icon: <Activity className="w-4 h-4" /> },
                            { name: "Akashic Knowledge", desc: "Intelligence at civilization scale.", icon: <Network className="w-4 h-4" /> }
                          ].map((item, idx) => (
                            <div key={idx} className="flex gap-2.5 items-start group">
                              <div className="w-7 h-7 rounded bg-primary/10 flex items-center justify-center text-primary mt-0.5">
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
                      {/* Right: Sectors */}
                      <div className="col-span-5 flex flex-col gap-3.5">
                        <span className="text-[9px] font-black text-primary tracking-widest uppercase border-b border-border/20 pb-1.5">
                          Sectors
                        </span>
                        <div className="flex flex-col gap-2.5">
                          {["Public Sector", "Healthcare", "Education", "Enterprise"].map((item, idx) => (
                            <a key={idx} href="#serve-section" className="text-xs font-medium hover:text-primary transition-colors text-foreground/80">
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. Delivery Dropdown (Matching Screenshot 2) */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("delivery")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 py-3 text-sm font-medium hover:text-primary transition-colors focus:outline-none">
                Delivery
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {activeDropdown === "delivery" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[460px]"
                  >
                    <div className="rounded-2xl p-5 shadow-2xl border border-border/40 glass-effect grid grid-cols-2 gap-6">
                      {/* Left: Strategize */}
                      <div className="flex flex-col gap-3.5">
                        <span className="text-[9px] font-black text-primary tracking-widest uppercase border-b border-border/20 pb-1.5 flex items-center gap-1">
                          <BookOpen className="w-3 h-3" /> Strategize
                        </span>
                        <div className="flex flex-col gap-3">
                          {[
                            { name: "AI Readiness Audit", desc: "Validate data for GenAI models." },
                            { name: "Sovereign Blueprint", desc: "Architect secure data mesh." },
                            { name: "Governance Framework", desc: "Define rules & accountability." }
                          ].map((item, idx) => (
                            <a key={idx} href="#implementation-layer" className="flex flex-col group">
                              <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">{item.name}</span>
                              <span className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                      {/* Right: Engineer */}
                      <div className="flex flex-col gap-3.5">
                        <span className="text-[9px] font-black text-primary tracking-widest uppercase border-b border-border/20 pb-1.5 flex items-center gap-1">
                          <Cpu className="w-3 h-3" /> Engineer
                        </span>
                        <div className="flex flex-col gap-3">
                          {[
                            { name: "Platform Deployment", desc: "Install the Akashic Core." },
                            { name: "Legacy Modernization", desc: "Migrate monoliths safely." },
                            { name: "Custom Accelerators", desc: "Build tailored AI outcomes." }
                          ].map((item, idx) => (
                            <a key={idx} href="#implementation-layer" className="flex flex-col group">
                              <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">{item.name}</span>
                              <span className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. Insights */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("insights")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 py-3 text-sm font-medium hover:text-primary transition-colors focus:outline-none">
                Insights
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {activeDropdown === "insights" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 top-full pt-2 w-56"
                  >
                    <div className="rounded-xl p-3 shadow-2xl border border-border/40 glass-effect flex flex-col gap-2.5">
                      {["Customer Stories", "Perspectives", "Documentation", "Guides"].map((item, idx) => (
                        <a key={idx} href="#use-case-cards" className="text-xs font-semibold hover:text-primary transition-colors text-foreground/80">
                          {item}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 5. Company / Mission */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("company")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 py-3 text-sm font-medium hover:text-primary transition-colors focus:outline-none">
                Company
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {activeDropdown === "company" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full pt-2 w-48"
                  >
                    <div className="rounded-xl p-3 shadow-2xl border border-border/40 glass-effect flex flex-col gap-2.5">
                      {["About Us", "Careers", "Recognition"].map((item, idx) => (
                        <a key={idx} href="#footer" className="text-xs font-semibold hover:text-primary transition-colors text-foreground/80">
                          {item}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
                {["Platform", "Offerings", "Delivery", "Insights", "Company"].map((key) => (
                  <div key={key} className="flex flex-col gap-2">
                    <span className="text-xs font-bold text-primary tracking-widest uppercase">
                      {key}
                    </span>
                    <div className="grid grid-cols-1 gap-2 pl-2">
                      {key === "Platform" && ["Akashic Data Warehouse", "Akashic Data Pipeline", "Akashic BI", "Akashic Insights", "AML", "Master Data", "Governance", "Workflow"].map((item, idx) => (
                        <a key={idx} href="#introducing-akashic" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-foreground/80 hover:text-primary">{item}</a>
                      ))}
                      {key === "Offerings" && ["Akashic EIS", "Akashic Life", "Akashic Knowledge", "Public Sector", "Healthcare", "Education", "Enterprise"].map((item, idx) => (
                        <a key={idx} href="#serve-section" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-foreground/80 hover:text-primary">{item}</a>
                      ))}
                      {key === "Delivery" && ["AI Readiness Audit", "Sovereign Blueprint", "Governance Framework", "Platform Deployment", "Legacy Modernization", "Custom Accelerators"].map((item, idx) => (
                        <a key={idx} href="#implementation-layer" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-foreground/80 hover:text-primary">{item}</a>
                      ))}
                      {key === "Insights" && ["Customer Stories", "Perspectives", "Documentation", "Guides"].map((item, idx) => (
                        <a key={idx} href="#use-case-cards" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-foreground/80 hover:text-primary">{item}</a>
                      ))}
                      {key === "Company" && ["About Us", "Careers", "Recognition"].map((item, idx) => (
                        <a key={idx} href="#footer" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-foreground/80 hover:text-primary">{item}</a>
                      ))}
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

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 z-10 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 min-h-[90vh]">
        {/* Left Column: Headline Copy */}
        <div className="flex-1 flex flex-col items-start text-left">
          <div className="mb-4 px-3.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-wider">
            DHIRA: Powering Leadership Momentum through a Shared Intelligence Layer
          </div>
          
          <h1 className="font-outfit font-black tracking-tight text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95]">
            Turn <br />
            Complexity <br />
            Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Clarity.</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-md font-medium">
            You wouldn't build an engine just to drive to work. <br className="hidden sm:inline" />
            So why build a data stack just to get an answer?
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#introducing-akashic" 
              className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-bold transition-all shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
            >
              Start Engine <Play className="w-4 h-4 fill-current" />
            </a>
            <a 
              href="#use-case-cards" 
              className="px-8 py-3.5 rounded-full border border-border bg-background/40 hover:bg-secondary text-foreground font-bold transition-all hover:-translate-y-0.5 text-center backdrop-blur-sm"
            >
              Explore Use Cases
            </a>
          </div>

          {/* Connected Integrations list */}
          <div className="mt-12 flex flex-col gap-2">
            <span className="text-[9px] uppercase font-bold tracking-[0.25em] text-muted-foreground">
              Unified Integrations Engine
            </span>
            <div className="flex items-center gap-4 text-xs font-black text-foreground">
              <span className="px-3 py-1 rounded bg-secondary/80 border border-border flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> SAP
              </span>
              <span className="px-3 py-1 rounded bg-secondary/80 border border-border flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span> SALESFORCE
              </span>
              <span className="px-3 py-1 rounded bg-secondary/80 border border-border flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse"></span> ORACLE
              </span>
            </div>
            <span className="text-[9px] text-muted-foreground mt-1 flex items-center gap-1">
              <Activity className="w-3 h-3 text-success animate-pulse" /> Live Unified View • Real-Time Dashboard • Scroll to Explore
            </span>
          </div>
        </div>

        {/* Right Column: Interactive Dashboard Visualization Mockup */}
        <div className="flex-1 w-full lg:max-w-xl">
          <div className="rounded-2xl shadow-2xl border border-border/30 glass-effect p-5 md:p-6 flex flex-col gap-5 relative overflow-hidden">
            {/* Top Bar metrics */}
            <div className="flex items-center justify-between border-b border-border/15 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-ping"></span>
                <span className="text-[10px] font-bold text-foreground uppercase tracking-widest">LIVE</span>
                <span className="text-[10px] text-muted-foreground">98.4% Confidence • Verified 2m ago</span>
              </div>
              <span className="text-[9px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded uppercase">
                Akashic BI
              </span>
            </div>

            {/* Middle part: Gross Margin Trend metric */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-muted-foreground">Gross Margin Trend</span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-2xl font-black text-foreground">$44M</span>
                    <span className="text-xs text-red-500 font-bold flex items-center gap-0.5">
                      <TrendingDown className="w-3.5 h-3.5" /> -4.2% Variance
                    </span>
                  </div>
                </div>
                {/* Historical vs Forecasted legend */}
                <div className="text-[9px] font-bold text-muted-foreground flex flex-col gap-1 text-right">
                  <span className="flex items-center gap-1 justify-end"><span className="w-2 h-2 rounded-full bg-primary"></span> Historical</span>
                  <span className="flex items-center gap-1 justify-end"><span className="w-2 h-2 rounded-full bg-accent"></span> Forecasted</span>
                </div>
              </div>

              {/* Live SVG Line Chart representing the margin data */}
              <div className="h-32 w-full relative mt-2">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Grid lines */}
                  <line x1="0" y1="25" x2="100" y2="25" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="3,3" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="3,3" />
                  <line x1="0" y1="75" x2="100" y2="75" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="3,3" />
                  
                  {/* Historical path */}
                  <path d="M 0 80 L 20 75 L 40 68 L 60 78" fill="none" stroke="var(--primary)" strokeWidth="2.5" />
                  <circle cx="60" cy="78" r="3" fill="var(--primary)" />
                  
                  {/* Forecasted path */}
                  <path d="M 60 78 L 80 84 L 100 89" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeDasharray="3,3" />
                  <circle cx="100" cy="89" r="3" fill="var(--accent)" />
                </svg>
                {/* Date labels */}
                <div className="flex justify-between text-[9px] text-muted-foreground mt-1 font-bold">
                  <span>Oct 1</span>
                  <span>Oct 11</span>
                  <span>Oct 21</span>
                  <span>Nov 5</span>
                </div>
              </div>
            </div>

            {/* Department health list & Dynamic Pricing KPI */}
            <div className="grid grid-cols-12 gap-4 border-t border-border/15 pt-4">
              {/* Department grid */}
              <div className="col-span-7 flex flex-col gap-1.5">
                <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                  Department Health
                </span>
                <div className="grid grid-cols-3 gap-1.5 text-[9px] font-black text-foreground">
                  <span className="px-1.5 py-1 rounded bg-success/10 text-success border border-success/15 text-center">Sales</span>
                  <span className="px-1.5 py-1 rounded bg-success/10 text-success border border-success/15 text-center">Finance</span>
                  <span className="px-1.5 py-1 rounded bg-red-500/10 text-red-500 border border-red-500/15 text-center">Logistics</span>
                  <span className="px-1.5 py-1 rounded bg-success/10 text-success border border-success/15 text-center">HR</span>
                  <span className="px-1.5 py-1 rounded bg-success/10 text-success border border-success/15 text-center">Marketing</span>
                  <span className="px-1.5 py-1 rounded bg-success/10 text-success border border-success/15 text-center">IT</span>
                </div>
              </div>

              {/* AI optimized pricing indicator */}
              <div className="col-span-5 flex flex-col justify-between p-2.5 rounded-xl border border-primary/20 bg-primary/5">
                <span className="text-[8px] font-bold text-primary uppercase tracking-widest block">
                  AI Dynamic Pricing
                </span>
                <span className="text-base font-black text-foreground block mt-1">
                  +$14.2k
                </span>
                <span className="text-[8px] text-muted-foreground block">
                  saved daily (Baseline vs AI)
                </span>
              </div>
            </div>

            {/* Real-time scrolling/animating system logs console */}
            <div className="border-t border-border/15 pt-3">
              <div className="flex items-center gap-1.5 mb-1.5 text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                <Terminal className="w-3 h-3 text-primary" /> Live Pipeline Stream
              </div>
              <div className="rounded bg-black/40 border border-border/20 p-2.5 font-mono text-[9px] flex flex-col gap-1 text-primary-foreground max-h-20 overflow-hidden select-none">
                {logs.map((log, idx) => (
                  <div key={idx} className={`truncate transition-all ${idx === 0 ? "text-primary animate-pulse" : "opacity-60"}`}>
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE MARGIN SLIPPAGE Q&A MOCKUP */}
      <section className="relative z-10 py-16 px-6 max-w-4xl mx-auto">
        <div className="rounded-2xl border border-primary/25 p-6 md:p-8 glass-effect flex flex-col gap-5">
          <div className="flex items-center justify-between border-b border-border/20 pb-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1">
              <HelpCircle className="w-4 h-4" /> Real-time Decisional Q&A Example
            </span>
            <span className="text-[10px] font-bold text-muted-foreground">Akashic Reasoning Layer</span>
          </div>

          {/* User question bubble */}
          <div className="self-end max-w-[85%] bg-primary text-primary-foreground p-3.5 rounded-xl rounded-tr-none text-xs leading-relaxed flex flex-col gap-1.5">
            <span className="font-bold text-[9px] opacity-75">User: Analyst</span>
            <p className="font-medium">Why is the 30-day margin trend slipping despite record bookings?</p>
          </div>

          {/* Akashic Answer Bubble */}
          <div className="self-start max-w-[85%] bg-secondary/80 border border-border/30 p-4 rounded-xl rounded-tl-none text-xs leading-relaxed flex flex-col gap-2.5">
            <span className="font-bold text-[9px] text-primary uppercase tracking-wider">Akashic Core</span>
            <p className="font-medium text-foreground">
              Correlation detected: 15% spike in APAC Supplier Latency started 12 days ago. This is driving up freight costs and eroding margins.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <button className="px-3 py-1 rounded bg-background border border-border text-[9px] font-bold hover:bg-secondary transition-all flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" /> Share Insight
              </button>
              <span className="text-[9px] text-muted-foreground italic">Grounding: SAP Logistics + Oracle Finance logs</span>
            </div>
          </div>

          {/* Input field */}
          <div className="mt-4 flex items-center gap-3 border-t border-border/20 pt-4">
            <input 
              type="text" 
              placeholder="Ask Akashic about margin impact..."
              className="flex-1 px-4 py-2.5 rounded-full border border-border bg-secondary/50 focus:outline-none focus:border-primary text-xs text-foreground"
              disabled
            />
            <button className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-bold opacity-60 cursor-not-allowed">
              Send
            </button>
          </div>
        </div>
      </section>

      {/* THE STRUCTURAL DIAGNOSTIC */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Copy Column */}
          <div className="lg:col-span-5 flex flex-col items-start justify-center text-left">
            <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
              The Structural Diagnostic
            </span>
            <h2 className="font-outfit font-black text-3xl md:text-5xl text-foreground mt-4 leading-tight">
              Organizations didn't become data-rich by accident. <br />
              They became decision-poor by design.
            </h2>
            <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
              Enterprises optimize for data generation while neglecting how decisions are actually aligned, verified, and evolved.
            </p>

            {/* Diagnostic Conclusion & Basis badges */}
            <div className="mt-8 flex flex-col gap-4 border-t border-border/15 pt-6 w-full">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary text-xs font-bold shrink-0 mt-0.5">✓</div>
                <div>
                  <span className="text-xs font-bold text-foreground block">Diagnostic Conclusion</span>
                  <span className="text-xs text-muted-foreground">Slower strategic cycles, fragmented accountability, and a reactive posture.</span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-primary text-xs font-bold shrink-0 mt-0.5">✓</div>
                <div>
                  <span className="text-xs font-bold text-foreground block">Diagnostic Basis</span>
                  <span className="text-xs text-muted-foreground">Observed across global transformation programs and maturity assessments.</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Cards Column */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                label: "Disconnected Silos",
                title: "Fragile Architecture",
                desc: "Local optimization across hundreds of disconnected systems."
              },
              {
                num: "02",
                label: "Reconciliation Gap",
                title: "Manual Overhead",
                desc: "Leadership time lost to reconciling conflicting data inputs."
              },
              {
                num: "03",
                label: "Static Feedback",
                title: "Reactive Posture",
                desc: "Static historical summaries failing in dynamic conditions."
              },
              {
                num: "04",
                label: "System Loss",
                title: "Decisional Momentum",
                desc: "Insights are produced, reviewed, and then lost — never compounding.",
                highlight: "-42%"
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`p-6 rounded-2xl glass-effect border transition-all duration-300 flex flex-col justify-between ${
                  activeDiagnostic === idx 
                    ? "border-primary/40 bg-primary/5" 
                    : "border-border/30 hover:border-primary/20"
                }`}
                onMouseEnter={() => setActiveDiagnostic(idx)}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-black text-primary font-outfit">{item.num}</span>
                    {item.highlight && (
                      <span className="text-xs font-bold text-red-500 bg-red-500/10 px-2 py-0.5 rounded">{item.highlight}</span>
                    )}
                  </div>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{item.label}</span>
                  <h3 className="font-outfit font-bold text-lg text-foreground mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE COGNITIVE GAP */}
      <section className="relative z-10 py-24 px-6 bg-secondary/15 border-y border-border/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              The Cognitive Gap
            </span>
            <h2 className="font-outfit font-black text-3xl md:text-5xl text-foreground mt-4">
              The challenge isn't understanding data. It's operationalizing decisions.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-background/75 border border-border/30 hover:border-primary/20 transition-all">
              <span className="text-2xl font-black text-primary font-outfit block mb-4">01</span>
              <h3 className="font-outfit font-bold text-xl md:text-2xl text-foreground mb-3">
                Capturing Decision Context
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Moving beyond reporting to capture the *why* behind every decision — so institutional logic is preserved across teams, departments, and over time.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-background/75 border border-border/30 hover:border-primary/20 transition-all">
              <span className="text-2xl font-black text-primary font-outfit block mb-4">02</span>
              <h3 className="font-outfit font-bold text-xl md:text-2xl text-foreground mb-3">
                Unified Operational Intelligence
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Creating a shared intelligence layer where business rules, data quality, and strategic intent converge — enabling consistent, automated execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCING AKASHIC */}
      <section id="introducing-akashic" className="relative z-10 py-24 px-6 max-w-5xl mx-auto text-center">
        <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
          Introducing Akashic
        </span>
        <h2 className="font-outfit font-black text-3xl md:text-6xl text-foreground mt-4 leading-tight">
          The System That Turns Decisions Into Action.
        </h2>
        
        <p className="text-sm text-muted-foreground mt-6 leading-relaxed max-w-2xl mx-auto">
          Akashic integrates across systems to preserve context — not just insights. It anchors decisions to data, governing rules, and outcomes, creating a shared intelligence that evolves with the business.
        </p>
        <p className="text-sm text-muted-foreground mt-4 leading-relaxed max-w-2xl mx-auto">
          By unifying governance, quality, and reasoning into a single layer, Akashic allows teams to execute and strategize using a common, natural language.
        </p>

        {/* Action buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#talk-to-us" className="px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-bold transition-all shadow-md">
            See how Akashic works
          </a>
          <a href="#introducing-akashic" className="px-6 py-3 rounded-full border border-border hover:bg-secondary text-foreground text-xs font-bold transition-all">
            Explore the platform
          </a>
        </div>

        {/* Dynamic horizontal block layers diagram */}
        <div className="mt-16 flex flex-col gap-3 max-w-2xl mx-auto text-xs font-bold">
          {[
            "Business Decisions",
            "Operational Execution",
            "Data Governance",
            "Data Quality & Trust",
            "Analytics & Insights",
            "AI-Assisted Reasoning"
          ].map((layer, idx) => (
            <div 
              key={idx} 
              className="py-4 rounded-xl border border-border/30 bg-background/50 hover:border-primary/30 transition-all flex items-center justify-between px-6 shadow-sm group"
            >
              <span className="text-muted-foreground font-mono">{`[0${idx+1}]`}</span>
              <span className="text-foreground group-hover:text-primary transition-colors">{layer}</span>
              <div className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary transition-colors"></div>
            </div>
          ))}
          
          {/* Logo badge */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-black text-sm">
              Δ
            </div>
            <span className="font-outfit font-black tracking-widest text-lg text-foreground uppercase">
              AKASHIC
            </span>
          </div>
        </div>
      </section>

      {/* THE IMPLEMENTATION LAYER */}
      <section id="implementation-layer" className="relative z-10 py-24 px-6 bg-secondary/15 border-y border-border/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Column Description */}
            <div className="lg:col-span-5 flex flex-col items-start justify-center text-left">
              <span className="text-xs font-bold tracking-widest text-primary uppercase">
                The Implementation layer
              </span>
              <h2 className="font-outfit font-black text-3xl md:text-5xl text-foreground mt-4 leading-tight">
                Intelligent Transformation. <br />
                Delivered End-to-End.
              </h2>
              <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
                We solve the decision fragmentation problem through strategy, engineering, and intelligence platforms — not in isolation, but as one coherent system.
              </p>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed font-bold">
                DHIRA is not just a platform company. We are not just a consulting firm.
              </p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                We partner with organizations to design, build, and operationalize intelligence — from executive strategy to production systems.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="#talk-to-us" className="px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-bold transition-all shadow-md">
                  Start the Journey
                </a>
                <a href="#talk-to-us" className="text-xs font-bold text-foreground hover:text-primary transition-colors flex items-center gap-1">
                  Explore How We Deliver →
                </a>
              </div>
            </div>

            {/* Right Column: 4 System Modules */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                {
                  num: "[01]",
                  title: "Strategic Intelligence & Advisory",
                  desc: "We work with leadership teams to align strategy, data, and operating models — defining how intelligence should function across the organization before systems are built."
                },
                {
                  num: "[02]",
                  title: "Bespoke Product & Platform Engineering",
                  desc: "We design and build intelligence-native platforms and products where decision context, governance, and execution are engineered into the foundation — not added later."
                },
                {
                  num: "[03]",
                  title: "Akashic as an Intelligence Accelerator",
                  desc: "Akashic can be deployed as a core platform or used to accelerate larger transformation initiatives — preserving decision context and organizational memory across systems."
                },
                {
                  num: "[04]",
                  title: "Custom AI & Decision Systems",
                  desc: "We build domain-specific AI and decision systems grounded in real organizational context — enabling explainable reasoning, governed automation, and trustworthy outcomes."
                }
              ].map((module, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-background/60 border border-border/30 hover:border-primary/20 transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-black text-primary font-mono block mb-3">{module.num}</span>
                    <h3 className="font-outfit font-bold text-base text-foreground mb-3">
                      {module.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {module.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHEN INTELLIGENCE MEETS REALITY (POPULATION SCALE) */}
      <section id="serve-section" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
            When Intelligence Meets Reality
          </span>
          <h2 className="font-outfit font-black text-3xl md:text-5xl text-foreground mt-4">
            Built for Population Scale
          </h2>
          <p className="text-sm text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
            Intelligence that cannot scale is theory. We engineer decision systems that remain resilient under national and enterprise-level load.
          </p>
        </div>

        {/* 3 Metrics */}
        <div className="grid md:grid-cols-3 gap-8 text-center mb-16 border-b border-border/10 pb-16">
          {[
            { value: "100M+", label: "Live Concurrency" },
            { value: "99.999%", label: "Uptime" },
            { value: "< 12 ms", label: "Latency" }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-outfit font-black text-5xl md:text-6xl text-foreground">
                {stat.value}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "DPI-Grade Resilience",
              desc: "Engineered for zero downtime. Battle-tested on national digital platforms serving over 100 million users simultaneously."
            },
            {
              title: "Akashic as an Accelerator",
              desc: "We deploy the Akashic Core to bypass the first 12 months of ingestion, governance, and reasoning — accelerating deployment without platform lock-in."
            },
            {
              title: "Future-Proof Architecture",
              desc: "Modular, cloud-native systems designed for continuous evolution. No throwaway code. No brittle foundations."
            }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="font-outfit font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#talk-to-us" className="text-xs font-bold text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-1">
            See How We Deliver at Scale <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* VELOCITY PROTOCOL */}
      <section id="use-case-cards" className="relative z-10 py-24 px-6 bg-secondary/15 border-y border-border/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Velocity Protocol
            </span>
            <h2 className="font-outfit font-black text-3xl md:text-5xl text-foreground mt-4">
              Momentum is Engineered. <br className="hidden sm:inline" />
              We don't ask for faith. We ask for 6 weeks.
            </h2>
            <p className="text-sm text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">
              Our protocol is designed to validate value before you scale.
            </p>
          </div>

          {/* 3 Step Process */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                num: "01",
                label: "Precision Audit",
                title: "We Map The Terrain.",
                desc: "We scan your entire data landscape to identify the single highest-value leverage point. No guesswork."
              },
              {
                num: "02",
                label: "Rapid Prototype",
                title: "The 4-Week Pilot.",
                desc: "In 4 weeks, we deploy a functional pilot. We validate ROI with live data before you commit to the full build."
              },
              {
                num: "03",
                label: "Population Scale",
                title: "Global Velocity.",
                desc: "Once proven, we hit the accelerator. We expand the engineering mesh to handle 100M+ concurrency."
              }
            ].map((step, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-background/80 border border-border/30 flex flex-col justify-between gap-6">
                <div>
                  <span className="text-xs font-black text-primary font-outfit">{step.num}</span>
                  <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-2">{step.label}</span>
                  <h3 className="font-outfit font-bold text-lg text-foreground mt-1 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Acceleration Protocol console action box */}
          <div className="p-8 md:p-12 rounded-3xl border border-primary/20 bg-background/50 text-center max-w-3xl mx-auto relative overflow-hidden">
            <span className="text-[10px] font-bold text-success uppercase tracking-widest flex items-center justify-center gap-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-ping"></span>
              Acceleration Protocol Online
            </span>
            <h3 className="font-outfit font-bold text-2xl md:text-3xl text-foreground mb-4">
              Stop Guessing. Start Steering.
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-md mx-auto mb-8">
              The dashboard is ready. The engineering is proven. <br />
              The pilot takes 6 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#talk-to-us" className="px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-bold transition-all shadow-md">
                Book Your 6-Week Pilot
              </a>
              <a href="#serve-section" className="px-6 py-3 rounded-full border border-border hover:bg-secondary text-foreground text-xs font-bold transition-all">
                Read Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA & TALK TO US */}
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
                  🏛️ For Government
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
                Request Briefing
              </button>
            </div>

            {/* Enterprise demo form card */}
            <div className="p-6 md:p-8 rounded-xl border border-border/30 bg-background/50 flex flex-col justify-between">
              <div>
                <h3 className="font-outfit font-bold text-xl text-foreground">
                  🏢 For Enterprise
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
                Book Your 6-Week Pilot
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
              Platform
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-muted-foreground">
              <li><a href="#introducing-akashic" className="hover:text-primary transition-colors">Intelligence</a></li>
              <li><a href="#introducing-akashic" className="hover:text-primary transition-colors">Orchestration</a></li>
              <li><a href="#introducing-akashic" className="hover:text-primary transition-colors">Security</a></li>
              <li><a href="#introducing-akashic" className="hover:text-primary transition-colors">Compliance</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-outfit font-bold text-sm text-foreground uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-muted-foreground">
              <li><a href="#footer" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#footer" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#footer" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#footer" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Registered Office column */}
          <div>
            <h4 className="font-outfit font-bold text-sm text-foreground uppercase tracking-widest mb-4">
              Recognition
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              Certified by major government and international standards bodies.
            </p>
            <div className="flex flex-wrap gap-2 text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
              <span>Startup India</span>
              <span>•</span>
              <span>MSME Registered</span>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-medium text-muted-foreground">
          <span>
            © 2026 DHIRA Software Labs Pvt. Ltd. All rights reserved. Made in India.
          </span>
          <div className="flex gap-6">
            <a href="#talk-to-us" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#talk-to-us" className="hover:text-primary transition-colors">Terms of Service</a>
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
