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
  ArrowUpRight,
  TrendingUp,
  Server,
  Lock,
  ChevronRight,
  ChevronUp,
  Settings,
  Mail,
  Building,
  MapPin,
  TrendingDown
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const { theme, setTheme } = useTheme()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [chatbotOpen, setChatbotOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<string>("Smart Cities")
  const [beforeAfterState, setBeforeAfterState] = useState<"before" | "after">("after")
  
  // Akashic Module interactive map active module index
  const [activeModuleIndex, setActiveModuleIndex] = useState<number>(0)

  // Interactive Data Flow Canvas states (Design Two)
  const [decisionTitle, setDecisionTitle] = useState<string>("SYSTEM IDLE")
  const [decisionLog, setDecisionLog] = useState<string>(
    "Hover or click a source node to trigger a real-time decision."
  )
  const [activeSourceNode, setActiveSourceNode] = useState<string | null>(null)

  // Custom states for data-to-decision animation sequences (Design Two)
  const [lastTriggered, setLastTriggered] = useState<Record<string, number>>({ iot: 0, db: 0, citizen: 0, api: 0 })
  const [hubPulseTrigger, setHubPulseTrigger] = useState<number>(0)
  const [decisionPulseActive, setDecisionPulseActive] = useState<Record<string, number>>({ analytics: 0, alerts: 0, policy: 0 })
  const [hoveredConstellationNode, setHoveredConstellationNode] = useState<number | null>(null)



  // Live Terminal Logs for dark theme
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "[SYSTEM] Akashic Core Initialized on cluster node DHR-OS_01",
    "[SECURE] Data warehouse connection verified (TLS 1.3)",
    "[INGEST] Active streams: 12 city IoT sensors, 3 payment nodes",
    "[TELEMETRY] Pipeline latency: 12ms | CPU Load: 4.8%"
  ])

  useEffect(() => {
    if (theme !== "dark-midnight") return
    const logPool = [
      "Ingesting new record stream block #824,019...",
      "MDM deduplication completed in 4ms (100% match)",
      "Rule engine evaluated 12,500 operations/sec",
      "Telemetry audit: compliance status 100% secure",
      "Data Warehouse compaction finished (2.4 PB scale)",
      "Syncing hybrid node telemetry to NY-East clusters...",
      "Akashic machine learning model AML-2.5 activated",
      "Anomaly scoring: 0.00% critical flags detected",
      "API request routed to secure citizen gateway"
    ]
    const interval = setInterval(() => {
      const randomLog = logPool[Math.floor(Math.random() * logPool.length)]
      const timestamp = new Date().toLocaleTimeString()
      setTerminalLogs(prev => [...prev.slice(1), `[${timestamp}] ${randomLog}`])
    }, 2000)
    return () => clearInterval(interval)
  }, [theme])

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
      let botText = "I could not locate specific answers in my knowledge base. However, you can read our playbooks and blueprints for more details."
      let citations: string[] = []

      const query = userText.toLowerCase()
      if (query.includes("cowin") || query.includes("diksha") || query.includes("dpi") || query.includes("india") || query.includes("track record")) {
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

  // Sitemap navigation data from DOCX
  interface SitemapItem {
    name: string;
    desc: string;
    icon?: React.ReactNode;
  }

  interface SitemapGroup {
    label: string;
    isTwoCol?: boolean;
    items?: SitemapItem[];
    col1Title?: string;
    col1Items?: SitemapItem[];
    col2Title?: string;
    col2Items?: Array<string | SitemapItem>;
  }

  const sitemap: Record<string, SitemapGroup> = {
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
      label: "Solutions",
      isTwoCol: true,
      col1Title: "Strategic Capabilities",
      col1Items: [
        { name: "Akashic EIS", desc: "Executive Intelligence System", icon: <Layers className="w-4 h-4" /> },
        { name: "Akashic Life", desc: "Predictive maternal health protocols.", icon: <Activity className="w-4 h-4" /> },
        { name: "Akashic Knowledge", desc: "Intelligence at civilization scale.", icon: <Network className="w-4 h-4" /> }
      ],
      col2Title: "Sectors",
      col2Items: ["Smart Cities", "Healthcare", "Banking & Finance", "Education", "Energy & Utility"]
    },
    delivery: {
      label: "Delivery",
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

  // Sector Data mapping for Section 07 (Smart Cities only, strictly from DOCX)
  interface SectorCard {
    title: string;
    desc: string;
    icon: React.ReactNode;
    tag: string;
  }
  
  const sectorContent: Record<string, SectorCard[]> = {
    "Smart Cities": [
      {
        icon: <Globe className="w-5 h-5 text-primary" />,
        title: "Unified City Dashboard",
        desc: "Consolidate IoT, transport, utility, and civic data into one real-time command view.",
        tag: "Smart Cities Mission"
      },
      {
        icon: <Activity className="w-5 h-5 text-primary" />,
        title: "Traffic & Mobility AI",
        desc: "Predictive signals and congestion analytics using live sensor feeds.",
        tag: "Reduces congestion 30%"
      },
      {
        icon: <FileText className="w-5 h-5 text-primary" />,
        title: "Citizen Services Analytics",
        desc: "Track and improve service delivery KPIs across departments in real time.",
        tag: "Active Monitoring"
      }
    ]
  }

  // Before & After Metrics comparison
  interface TransformationMetric {
    label: string;
    before: string;
    after: string;
    icon: string;
    badState: string;
    goodState: string;
  }

  const transformationMetrics: TransformationMetric[] = [
    { 
      label: "Data visibility", 
      before: "12%", 
      after: "95%", 
      icon: "👁️",
      badState: "Isolated data silos and shadow sheets.",
      goodState: "Immediate access across all pipelines."
    },
    { 
      label: "Decision lag", 
      before: "72 hrs+", 
      after: "< 5 mins", 
      icon: "⏱️",
      badState: "Outdated weekly batch reports.",
      goodState: "Instant visual operational reports."
    },
    { 
      label: "Real-time insights", 
      before: "None", 
      after: "Live", 
      icon: "📡",
      badState: "Reacting after events occur.",
      goodState: "AI alerts fire as anomalies happen."
    },
    { 
      label: "System integration", 
      before: "Fragmented", 
      after: "Unified", 
      icon: "🔗",
      badState: "12 separate login portals.",
      goodState: "One single pane of glass access."
    },
    { 
      label: "Data quality", 
      before: "Frequent issues", 
      after: "AI-governed", 
      icon: "🎯",
      badState: "Duplicate citizen database profiles.",
      goodState: "Clean, deduplicated master profiles."
    },
    { 
      label: "Automation", 
      before: "Manual", 
      after: "Machine-assisted", 
      icon: "🤖",
      badState: "Copy-pasting CSV rows daily.",
      goodState: "Self-triggering action playbooks."
    }
  ]

  const isLight = theme !== "dark-midnight"

  // Font Helper Class mapping based on active theme
  const getFontClass = () => {
    switch (theme) {
      case "light-cobalt": // Lapis Periwinkle
        return "font-outfit"
      case "light-cyan":   // Aegean Steel
        return "font-space"
      case "light-slate":  // Royal Ultramarine
        return "font-mono"
      case "dark-midnight":
      default:
        return "font-sans"
    }
  }

  // Helper for text colors
  const textTitleColor = () => {
    switch (theme) {
      case "light-cobalt":
        return "text-[#111116]"
      case "light-cyan":
        return "text-[#0f172a]"
      case "light-slate":
        return "text-[#0f172a]"
      default:
        return "text-foreground"
    }
  }

  // Detailed 10 Akashic Modules list for Section 06
  const akashicModules = [
    { 
      title: "Data Ingestion", 
      desc: "Real-time streaming & secure ETL pipelines. Handles structured, unstructured, and hybrid datasets at petabyte scale.",
      details: ["Real-time CDC (Change Data Capture)", "Kafka & RabbitMQ Native Connectors", "End-to-end TLS 1.3 encryption", "Automated schema drifting detection"],
      metric: "Ingest Rate: 1.2 GB/sec",
      latency: "Latency: < 4ms"
    },
    { 
      title: "Master Data Management (MDM)", 
      desc: "Consolidated, single version of truth for citizen profiles, customer accounts, and asset records with advanced deduplication.",
      details: ["Probabilistic match & merge logic", "Golden Record survivorship rules", "Real-time duplicate resolution", "Active record audit trail logs"],
      metric: "Deduplication: 99.98% Accuracy",
      latency: "Execution: 12ms/record"
    },
    { 
      title: "Data Governance & Stewardship", 
      desc: "Granular role-based access control, automatic metadata cataloging, and comprehensive compliance auditing built in.",
      details: ["Active Directory / OAuth integration", "Column & Row level data masking", "Automated audit trail journaling", "Compliance standard alignment"],
      metric: "Access Controls: Enabled",
      latency: "Audit Delay: 0ms (Sync)"
    },
    { 
      title: "BI Dashboards & Reports", 
      desc: "Interactive visualization layer customized by organizational role. Instant queries on multi-billion row tables.",
      details: ["Web-assembly visualization renderers", "Custom KPI target alerting", "Scheduled PDF report dispatchers", "Sub-second analytical queries"],
      metric: "Response: < 150ms",
      latency: "Active Reports: 1,200/sec"
    },
    { 
      title: "AML (Machine Learning)", 
      desc: "Predictive scoring models, anomaly alerts, and natural language processing woven directly into the core data mesh.",
      details: ["Real-time fraud scoring feeds", "Automated features generation store", "Multilingual entity extraction NLP", "Continuous model accuracy testing"],
      metric: "ML Inference: 8ms",
      latency: "Accuracy Score: 98.4%"
    },
    { 
      title: "Workflow & Rules Engine", 
      desc: "Low-code system processes and task orchestration. Automatically trigger actions in downstream APIs.",
      details: ["Visual low-code designer interface", "Webhook & REST action triggers", "Staged human-in-the-loop approvals", "Execution monitoring panels"],
      metric: "Orchestration Rate: 5,000/s",
      latency: "Triggers delay: < 1ms"
    },
    { 
      title: "Metadata Management", 
      desc: "Automated cataloging and structural tagging of all enterprise data sources for complete structural index search.",
      details: ["Auto-tagging crawler nodes", "Semantic search query indexing", "Lineage dependency tracking charts", "Data asset valuation metrics"],
      metric: "Crawler Status: Operational",
      latency: "Discovery rate: 450 items/min"
    },
    { 
      title: "Data Archiving", 
      desc: "Long-term cold storage with strict query logging, compression, and automated lifecycle migration.",
      details: ["Lifecycle-based automatic migration", "Cold glacier database compressions", "Encrypted backup replication maps", "Strict compliance retrieval logs"],
      metric: "Data Compression: 85%",
      latency: "Glacier retrieval: < 30s"
    },
    { 
      title: "API Gateway", 
      desc: "Secure endpoints for third-party microservices. Includes rate-limiting, authentication, and logging.",
      details: ["OAuth2 & API Key verification", "Dynamic request rate limiting", "Unified documentation gateway", "Real-time endpoint telemetries"],
      metric: "Throughput: 85k requests/s",
      latency: "Gateway Overhead: < 0.2ms"
    },
    { 
      title: "Notification Engine", 
      desc: "SMS, Email, and Push alerts for automated system actions. Complete fallback routing and template registry.",
      details: ["Fallback routing maps (SMS/Email)", "HTML / Rich Text Template Registry", "Granular user alert settings options", "Dispatch delivery report trackers"],
      metric: "Delivery Rate: 99.99%",
      latency: "Dispatch: < 80ms"
    }
  ]

  // Unified Header Styles
  const getHeaderContainerClass = () => {
    switch (theme) {
      case "light-cobalt": // Floating pill
        return "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-full border border-border/80 bg-background/80 backdrop-blur-xl shadow-lg transition-all duration-300"
      case "light-cyan": // Aegean Steel
        return "fixed top-0 left-0 w-full z-50 border-b border-border/50 bg-background/90 backdrop-blur-md"
      case "light-slate": // Royal Ultramarine
        return "fixed top-0 left-0 w-full z-50 bg-background/50 border-b border-border/30 backdrop-blur-md"
      case "dark-midnight":
      default:
        return "fixed top-0 left-0 w-full z-50 border-b bg-[#030303]/85 border-slate-900 shadow-lg shadow-primary/5 backdrop-blur-xl"
    }
  }

  const getHeaderHeightClass = () => {
    return theme === "light-cobalt" ? "h-16 px-8" : "h-20 px-6"
  }

  // Trigger decision mock logs (Design Two)
  const triggerSourceDecision = (source: string) => {
    setActiveSourceNode(source)
    const timestamp = Date.now()
    
    // 1. Launch a surge packet from the clicked source node
    setLastTriggered(prev => ({ ...prev, [source]: timestamp }))
    
    // 2. Wait 1200ms (duration of surge from source to center hub)
    setTimeout(() => {
      // 3. Trigger center hub ripple effect
      setHubPulseTrigger(prev => prev + 1)
      
      // 4. Update the console logs and headers based on source
      if (source === "iot") {
        setDecisionTitle("IOT METRICS ENGINE")
        setDecisionLog("12,000 smart city sensors processed. Optimizing cross-street signal offsets (-12% lag).")
        
        // 5. Launch decision pulse from center to Live Analytics
        setDecisionPulseActive(prev => ({ ...prev, analytics: Date.now() }))
      } else if (source === "db") {
        setDecisionTitle("INTEGRATION PIPELINE")
        setDecisionLog("15 legacy SQL databases ingested. Merged 3,500 duplicate profile records in 12ms.")
        
        // 5. Launch decision pulse from center to Automated Alerts
        setDecisionPulseActive(prev => ({ ...prev, alerts: Date.now() }))
      } else if (source === "citizen") {
        setDecisionTitle("SOVEREIGN SECURITY")
        setDecisionLog("Validated demographic queries against row-level privacy rules. 100% compliance checked.")
        
        // 5. Launch decision pulse from center to Policy Decisions
        setDecisionPulseActive(prev => ({ ...prev, policy: Date.now() }))
      } else if (source === "api") {
        setDecisionTitle("TELEMETRY GATEWAY")
        setDecisionLog("CoWIN vaccination records synced to state dashboard. Telemetry broadcast complete.")
        
        // 5. Launch decision pulse from center to both Live Analytics & Automated Alerts
        setDecisionPulseActive(prev => ({ ...prev, analytics: Date.now(), alerts: Date.now() }))
      }
    }, 1200)
  }

  return (
    <div className={`relative min-h-screen overflow-x-hidden transition-colors duration-500 pb-20 ${getFontClass()} ${isLight ? 'bg-background text-foreground' : 'bg-[#030303] text-[#fafafa]'}`}>
      {/* Background Canvas Particle Grid */}
      <BackgroundGrid />

      {/* ========================================================================= */}
      {/* UNIFIED NAVIGATION HEADER (SHARES THE SAME DROPDOWN NAVIGATION AND CONTENT) */}
      {/* ========================================================================= */}
      <header className={getHeaderContainerClass()}>
        <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 ${getHeaderHeightClass()}`}>
          
          {/* Logo & Company Name */}
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-foreground font-black text-sm">
                Δ
              </div>
              <span className="font-outfit font-black tracking-widest text-xl text-foreground">
                DHIRA
              </span>
            </div>
            <span className="text-[7px] tracking-[0.22em] text-muted-foreground uppercase mt-0.5 font-bold font-sans">
              Digital Human Interfaces & Robotic Agents
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-sans">
            {Object.entries(sitemap).map(([key, group]) => (
              <div 
                key={key} 
                className="relative"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 py-3 text-xs font-semibold uppercase tracking-wider hover:text-primary transition-colors focus:outline-none">
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
                      className={`absolute top-full pt-2 ${group.isTwoCol ? "left-1/2 -translate-x-1/2 w-[480px]" : "left-0 w-80"}`}
                    >
                      <div className={`rounded-2xl p-5 shadow-2xl border backdrop-blur-xl ${isLight ? 'bg-background border-border shadow-slate-200/50' : 'bg-[#0d0f14]/95 border-slate-800 shadow-black/80'}`}>
                        {group.isTwoCol ? (
                          <div className="grid grid-cols-12 gap-6 text-left">
                            {/* Column 1 */}
                            <div className="col-span-7 flex flex-col gap-3.5">
                              <span className="text-[9px] font-black text-primary tracking-widest uppercase border-b border-border/20 pb-1.5">
                                {group.col1Title}
                              </span>
                              <div className="flex flex-col gap-3">
                                {group.col1Items?.map((item, idx) => (
                                  <div key={idx} className="flex gap-2.5 items-start group cursor-pointer" onClick={() => setActiveDropdown(null)}>
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
                                      <a 
                                        key={idx} 
                                        href="#solutions" 
                                        onClick={() => {
                                          setActiveTab(item);
                                          setActiveDropdown(null);
                                        }} 
                                        className="text-xs font-semibold hover:text-primary transition-colors text-foreground/80 flex items-center gap-1 group"
                                      >
                                        <ChevronRight className="w-3 h-3 text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        {item}
                                      </a>
                                    )
                                  } else {
                                    return (
                                      <div key={idx} className="flex gap-2.5 items-start group" onClick={() => setActiveDropdown(null)}>
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
                          <div className="flex flex-col gap-3 text-left">
                            <span className="text-[9px] font-black text-primary tracking-widest uppercase border-b border-border/20 pb-1.5 mb-1 block">
                              {group.label} Options
                            </span>
                            {group.items?.map((item, idx) => (
                              <a 
                                key={idx} 
                                href="#talk-to-us" 
                                className="group flex flex-col p-1 rounded hover:bg-secondary/35 transition-all"
                                onClick={() => setActiveDropdown(null)}
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
          <div className="hidden lg:flex items-center gap-4 font-sans">
            <a href="#talk-to-us" className="text-xs font-bold uppercase tracking-wider hover:text-primary transition-colors">
              Sign in
            </a>
            {theme === "light-cobalt" && (
              <a 
                href="#talk-to-us" 
                className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-bold shadow-md hover:-translate-y-0.5 transition-all uppercase tracking-wider"
              >
                Let's Talk
              </a>
            )}
            {theme === "light-cyan" && (
              <a 
                href="#talk-to-us" 
                className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-widest transition-all rounded-none"
              >
                Let's Talk
              </a>
            )}
            {theme === "light-slate" && (
              <a 
                href="#talk-to-us" 
                className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-widest transition-all shadow-sm"
              >
                Let's Talk
              </a>
            )}
            {theme === "dark-midnight" && (
              <a 
                href="#talk-to-us" 
                className="px-5 py-2.5 rounded bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-bold uppercase tracking-widest transition-all shadow-md"
              >
                Let's Talk
              </a>
            )}
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
              <div className="px-6 py-6 flex flex-col gap-6 max-h-[80vh] overflow-y-auto text-left">
                {Object.entries(sitemap).map(([key, group]) => (
                  <div key={key} className="flex flex-col gap-2 font-sans">
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
                            <a 
                              key={idx} 
                              href="#solutions" 
                              onClick={() => {
                                setMobileMenuOpen(false);
                                if (typeof item === 'string') {
                                  setActiveTab(item);
                                }
                              }} 
                              className="text-sm font-medium text-foreground/80 hover:text-primary"
                            >
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
                <div className="flex flex-col gap-3 pt-4 border-t border-border/20 font-sans">
                  <a href="#talk-to-us" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-3 rounded-lg border border-border text-sm font-medium hover:bg-secondary">
                    Sign in
                  </a>
                  <a href="#talk-to-us" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold shadow-lg">
                    Let's Talk
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ========================================================================= */}
      {/* SECTION 01: HERO SECTION (4 COMPLETELY DISTINCT LAYOUTS) */}
      {/* ========================================================================= */}
      <section className="relative min-h-[95vh] pt-32 pb-20 flex items-center justify-center z-10 px-6 overflow-hidden border-b border-border/10">
        
        {/* Theme A (light-cobalt) Background Video Loop */}
        {theme === "light-cobalt" && (
          <div className="absolute inset-0 z-0">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none mix-blend-multiply"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-technology-background-loop-41882-large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
          </div>
        )}

        {/* 1. DARK MIDNIGHT HERO LAYOUT (Polished Cyber Terminal, Optimized Spacing/Line-Lengths) */}
        {theme === "dark-midnight" && (
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center relative z-10 font-sans mt-8">
            <div className="lg:col-span-7 text-left flex flex-col items-start">
              <h1 className="font-outfit font-black tracking-tight text-5xl md:text-7xl leading-[1.02] text-foreground uppercase">
                From Data.<br />
                To Decisions.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">At Scale.</span>
              </h1>
              <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
                DHIRA partners with governments and enterprises to turn fragmented data into clear, governed intelligence — and then act on it. Powered by Akashic, our AI-native data platform.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#platform" className="px-6 py-3.5 rounded bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-xs tracking-wider uppercase transition-all shadow-lg hover:shadow-primary/20">
                  See Akashic in Action
                </a>
                <a href="#talk-to-us" className="px-6 py-3.5 rounded border border-border bg-[#0d0f14]/50 hover:bg-secondary text-foreground font-bold text-xs tracking-wider uppercase transition-all">
                  Talk to Our Team
                </a>
              </div>
            </div>
            
            {/* Live Telemetry Logging terminal */}
            <div className="lg:col-span-5 w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full p-6 rounded-xl border border-border bg-[#0d0f14]/90 shadow-2xl backdrop-blur-xl relative overflow-hidden cyber-scanner"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="flex items-center justify-between border-b border-border/40 pb-3 mb-4">
                  <span className="text-[9px] font-black uppercase text-primary tracking-widest flex items-center gap-1.5 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Akashic Ingestion Terminal
                  </span>
                  <span className="text-[8px] text-muted-foreground font-mono">DHR_NODE_V1.0.4</span>
                </div>
                <div className="flex flex-col gap-2.5 font-mono text-[9px] text-muted-foreground leading-relaxed min-h-[120px]">
                  {terminalLogs.map((log, idx) => (
                    <div key={idx} className="flex justify-between items-start bg-background/50 p-2 rounded border border-border/10 gap-2">
                      <span className="text-foreground text-left break-all">{log}</span>
                      <span className="text-primary font-bold text-right shrink-0">✓ OK</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* 2. LIGHT COBALT HERO LAYOUT (Centered Periwinkle Bold Swiss Style with Split Screen Data Flow Animation) */}
        {theme === "light-cobalt" && (
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center relative z-10 font-outfit mt-8">
            <div className="lg:col-span-6 text-left flex flex-col items-start">
              <h1 className="font-black tracking-tight text-5xl md:text-7xl leading-[0.98] text-[#111116] uppercase">
                From Data.<br />
                To Decisions.<br />
                <span className="text-primary">At Scale.</span>
              </h1>

              <p className="mt-6 text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl font-sans font-medium">
                DHIRA partners with governments and enterprises to turn fragmented data into clear, governed intelligence — and then act on it. Powered by Akashic, our AI-native data platform.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto font-sans">
                <a 
                  href="#platform" 
                  className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-bold transition-all shadow-md text-xs tracking-wider uppercase text-center"
                >
                  See Akashic in Action
                </a>
                <a 
                  href="#talk-to-us" 
                  className="px-8 py-3.5 rounded-full border border-border bg-background/50 hover:bg-secondary text-foreground font-bold transition-all text-xs tracking-wider uppercase text-center"
                >
                  Talk to Our Team
                </a>
              </div>
            </div>

            {/* Interactive Data Flow Animation for Design Two */}
            <div className="lg:col-span-6 w-full flex flex-col gap-4">
              <div className="w-full p-6 rounded-3xl border border-primary/20 bg-primary/5 shadow-lg relative overflow-hidden flex flex-col justify-between min-h-[390px] active-border-glow">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
                
                {/* SVG Visualizing Data flowing from sources into Akashic and outputting decisions */}
                <svg className="w-full h-52 overflow-visible" viewBox="0 0 300 200">
                  <defs>
                    <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                    </radialGradient>
                    
                    {/* Shadow for glowing effects */}
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Connective bezier path lines */}
                  {/* Sources to Hub */}
                  <path id="path-iot" d="M 40 40 Q 95 40, 150 115" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                  <path id="path-db" d="M 40 90 Q 95 90, 150 115" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                  <path id="path-citizen" d="M 40 140 Q 95 140, 150 115" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                  <path id="path-api" d="M 40 190 Q 95 190, 150 115" fill="none" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                  
                  {/* Hub to Decisions */}
                  <path id="path-analytics" d="M 150 115 Q 215 115, 260 60" fill="none" stroke="var(--border)" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.8" />
                  <path id="path-alerts" d="M 150 115 Q 215 115, 260 115" fill="none" stroke="var(--border)" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.8" />
                  <path id="path-policy" d="M 150 115 Q 215 115, 260 170" fill="none" stroke="var(--border)" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.8" />

                  {/* CONTINUOUS BACKGROUND CASCADING DATA PACKETS */}
                  {/* IoT Ingest stream */}
                  <circle r="2" fill="var(--primary)" opacity="0.5">
                    <animateMotion dur="2.4s" repeatCount="indefinite" path="M 40 40 Q 95 40, 150 115" begin="0s" />
                  </circle>
                  <circle r="1.5" fill="var(--primary)" opacity="0.3">
                    <animateMotion dur="2.4s" repeatCount="indefinite" path="M 40 40 Q 95 40, 150 115" begin="0.8s" />
                  </circle>
                  <circle r="1.2" fill="var(--primary)" opacity="0.2">
                    <animateMotion dur="2.4s" repeatCount="indefinite" path="M 40 40 Q 95 40, 150 115" begin="1.6s" />
                  </circle>

                  {/* Siloed DB Ingest stream */}
                  <circle r="2" fill="var(--primary)" opacity="0.5">
                    <animateMotion dur="2.8s" repeatCount="indefinite" path="M 40 90 Q 95 90, 150 115" begin="0.2s" />
                  </circle>
                  <circle r="1.5" fill="var(--primary)" opacity="0.3">
                    <animateMotion dur="2.8s" repeatCount="indefinite" path="M 40 90 Q 95 90, 150 115" begin="1.1s" />
                  </circle>

                  {/* Citizen DB Ingest stream */}
                  <circle r="2" fill="var(--primary)" opacity="0.5">
                    <animateMotion dur="2.6s" repeatCount="indefinite" path="M 40 140 Q 95 140, 150 115" begin="0.4s" />
                  </circle>
                  <circle r="1.5" fill="var(--primary)" opacity="0.3">
                    <animateMotion dur="2.6s" repeatCount="indefinite" path="M 40 140 Q 95 140, 150 115" begin="1.3s" />
                  </circle>

                  {/* API Ingest stream */}
                  <circle r="2" fill="var(--primary)" opacity="0.5">
                    <animateMotion dur="2.2s" repeatCount="indefinite" path="M 40 190 Q 95 190, 150 115" begin="0.6s" />
                  </circle>
                  <circle r="1.5" fill="var(--primary)" opacity="0.3">
                    <animateMotion dur="2.2s" repeatCount="indefinite" path="M 40 190 Q 95 190, 150 115" begin="1.4s" />
                  </circle>

                  {/* INTERACTIVE SOURCE CLICK SURGES (LAUNCHES GOLD GLOWING DOTS ON KEY CHANGE) */}
                  {lastTriggered.iot > 0 && (
                    <circle key={`surge-iot-${lastTriggered.iot}`} r="5" fill="#f59e0b" filter="url(#glow)">
                      <animateMotion dur="1.2s" repeatCount="1" fill="freeze" path="M 40 40 Q 95 40, 150 115" />
                    </circle>
                  )}
                  {lastTriggered.db > 0 && (
                    <circle key={`surge-db-${lastTriggered.db}`} r="5" fill="#f59e0b" filter="url(#glow)">
                      <animateMotion dur="1.2s" repeatCount="1" fill="freeze" path="M 40 90 Q 95 90, 150 115" />
                    </circle>
                  )}
                  {lastTriggered.citizen > 0 && (
                    <circle key={`surge-citizen-${lastTriggered.citizen}`} r="5" fill="#f59e0b" filter="url(#glow)">
                      <animateMotion dur="1.2s" repeatCount="1" fill="freeze" path="M 40 140 Q 95 140, 150 115" />
                    </circle>
                  )}
                  {lastTriggered.api > 0 && (
                    <circle key={`surge-api-${lastTriggered.api}`} r="5" fill="#f59e0b" filter="url(#glow)">
                      <animateMotion dur="1.2s" repeatCount="1" fill="freeze" path="M 40 190 Q 95 190, 150 115" />
                    </circle>
                  )}

                  {/* DYNAMIC DECISION OUTPUT SURGES (TRIGGERED AFTER HUB PROCESSES THE DATA SURGE) */}
                  {decisionPulseActive.analytics > 0 && (
                    <circle key={`surge-out-ana-${decisionPulseActive.analytics}`} r="4.5" fill="#10b981" filter="url(#glow)">
                      <animateMotion dur="0.8s" repeatCount="1" fill="freeze" path="M 150 115 Q 215 115, 260 60" />
                    </circle>
                  )}
                  {decisionPulseActive.alerts > 0 && (
                    <circle key={`surge-out-ale-${decisionPulseActive.alerts}`} r="4.5" fill="#10b981" filter="url(#glow)">
                      <animateMotion dur="0.8s" repeatCount="1" fill="freeze" path="M 150 115 Q 215 115, 260 115" />
                    </circle>
                  )}
                  {decisionPulseActive.policy > 0 && (
                    <circle key={`surge-out-pol-${decisionPulseActive.policy}`} r="4.5" fill="#10b981" filter="url(#glow)">
                      <animateMotion dur="0.8s" repeatCount="1" fill="freeze" path="M 150 115 Q 215 115, 260 170" />
                    </circle>
                  )}

                  {/* GLOWING RIPPLES EXPANDING FROM HUB (KEY TRIGGERED ON HUB PULSE COUNTER) */}
                  {hubPulseTrigger > 0 && (
                    <circle 
                      key={`ripple-${hubPulseTrigger}`} 
                      cx="150" 
                      cy="115" 
                      fill="none" 
                      stroke="var(--primary)" 
                      className="animate-svg-ripple" 
                    />
                  )}

                  {/* Glowing central Akashic Engine hub */}
                  <circle cx="150" cy="115" r="28" fill="url(#hubGlow)" className="animate-pulse-glow" />
                  <circle cx="150" cy="115" r="16" fill="var(--primary)" />
                  <circle cx="150" cy="115" r="8" fill="#ffffff" />
                  
                  {/* Orbit rings */}
                  <circle cx="150" cy="115" r="24" fill="none" stroke="var(--primary)" strokeWidth="0.5" strokeDasharray="4 8" className="animate-spin-orbit" />

                  {/* Left Interactive Source Nodes */}
                  <g className="cursor-pointer group" onClick={() => triggerSourceDecision("iot")}>
                    <circle cx="40" cy="40" r="11" fill={activeSourceNode === "iot" ? "var(--primary)" : "var(--secondary)"} stroke="var(--primary)" strokeWidth="1.2" className="transition-all duration-300 group-hover:scale-110" />
                    <text x="40" y="43" textAnchor="middle" fontSize="8" fill={activeSourceNode === "iot" ? "#ffffff" : "var(--primary)"} fontWeight="bold">📡</text>
                    <text x="56" y="43" fontSize="8" fill="var(--foreground)" fontWeight="bold" className="font-sans group-hover:text-primary transition-colors">IoT Feeds</text>
                  </g>

                  <g className="cursor-pointer group" onClick={() => triggerSourceDecision("db")}>
                    <circle cx="40" cy="90" r="11" fill={activeSourceNode === "db" ? "var(--primary)" : "var(--secondary)"} stroke="var(--primary)" strokeWidth="1.2" className="transition-all duration-300 group-hover:scale-110" />
                    <text x="40" y="93" textAnchor="middle" fontSize="8" fill={activeSourceNode === "db" ? "#ffffff" : "var(--primary)"} fontWeight="bold">💾</text>
                    <text x="56" y="93" fontSize="8" fill="var(--foreground)" fontWeight="bold" className="font-sans group-hover:text-primary transition-colors">Siloed DBs</text>
                  </g>

                  <g className="cursor-pointer group" onClick={() => triggerSourceDecision("citizen")}>
                    <circle cx="40" cy="140" r="11" fill={activeSourceNode === "citizen" ? "var(--primary)" : "var(--secondary)"} stroke="var(--primary)" strokeWidth="1.2" className="transition-all duration-300 group-hover:scale-110" />
                    <text x="40" y="143" textAnchor="middle" fontSize="8" fill={activeSourceNode === "citizen" ? "#ffffff" : "var(--primary)"} fontWeight="bold">👥</text>
                    <text x="56" y="143" fontSize="8" fill="var(--foreground)" fontWeight="bold" className="font-sans group-hover:text-primary transition-colors">Citizen DB</text>
                  </g>

                  <g className="cursor-pointer group" onClick={() => triggerSourceDecision("api")}>
                    <circle cx="40" cy="190" r="11" fill={activeSourceNode === "api" ? "var(--primary)" : "var(--secondary)"} stroke="var(--primary)" strokeWidth="1.2" className="transition-all duration-300 group-hover:scale-110" />
                    <text x="40" y="193" textAnchor="middle" fontSize="8" fill={activeSourceNode === "api" ? "#ffffff" : "var(--primary)"} fontWeight="bold">⚡</text>
                    <text x="56" y="193" fontSize="8" fill="var(--foreground)" fontWeight="bold" className="font-sans group-hover:text-primary transition-colors">API Stream</text>
                  </g>

                  {/* Right Decision Action Nodes (RE-MOUNT TRIGGERED AND FLASH SUCCESS ON DECISION TRIGGER) */}
                  <g>
                    <circle cx="260" cy="60" r="9" key={`node-ana-${decisionPulseActive.analytics}`} fill="var(--secondary)" stroke="var(--border)" strokeWidth="1.2" className={decisionPulseActive.analytics > 0 ? "animate-flash-success" : ""} />
                    <text x="260" y="63" textAnchor="middle" fontSize="6.5" fill="#10b981" fontWeight="bold">📈</text>
                    <text x="246" y="63" fontSize="8" fill="var(--foreground)" fontWeight="bold" textAnchor="end" className="font-sans">Live Analytics</text>
                  </g>

                  <g>
                    <circle cx="260" cy="115" r="9" key={`node-ale-${decisionPulseActive.alerts}`} fill="var(--secondary)" stroke="var(--border)" strokeWidth="1.2" className={decisionPulseActive.alerts > 0 ? "animate-flash-success" : ""} />
                    <text x="260" y="118" textAnchor="middle" fontSize="6.5" fill="#10b981" fontWeight="bold">🔔</text>
                    <text x="246" y="118" fontSize="8" fill="var(--foreground)" fontWeight="bold" textAnchor="end" className="font-sans">Automated Alerts</text>
                  </g>

                  <g>
                    <circle cx="260" cy="170" r="9" key={`node-pol-${decisionPulseActive.policy}`} fill="var(--secondary)" stroke="var(--border)" strokeWidth="1.2" className={decisionPulseActive.policy > 0 ? "animate-flash-success" : ""} />
                    <text x="260" y="173" textAnchor="middle" fontSize="6.5" fill="#10b981" fontWeight="bold">⚖️</text>
                    <text x="246" y="173" fontSize="8" fill="var(--foreground)" fontWeight="bold" textAnchor="end" className="font-sans">Policy Decision</text>
                  </g>
                </svg>

                {/* Simulated decision log terminal output */}
                <div className="border-t border-primary/20 pt-4 mt-2 font-mono text-[9px] text-left">
                  <div className="flex justify-between items-center text-primary font-bold">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      STATUS: {decisionTitle}
                    </span>
                    <span className="text-[7px] bg-primary/10 px-1.5 py-0.5 rounded">LATENCY: 3.8ms</span>
                  </div>
                  <p className="text-muted-foreground mt-1.5 leading-relaxed font-sans font-medium text-[10px]">{decisionLog}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. LIGHT CYAN HERO LAYOUT (Left text, Right animated network nodes SVG - Aegean Steel Blue) */}
        {theme === "light-cyan" && (
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center relative z-10 font-space mt-8">
            <div className="lg:col-span-7 text-left flex flex-col items-start">
              <span className="text-[10px] font-bold tracking-widest uppercase text-primary mb-4 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                Powered by Akashic
              </span>
              <h1 className="font-black tracking-tight text-5xl md:text-7xl leading-[1.0] text-[#0f172a] uppercase">
                FROM DATA.<br />
                TO DECISIONS.<br />
                <span className="text-primary">AT SCALE.</span>
              </h1>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-xl font-sans font-medium">
                DHIRA partners with governments and enterprises to turn fragmented data into clear, governed intelligence — and then act on it. Powered by Akashic, our AI-native data platform.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 font-sans w-full sm:w-auto">
                <a 
                  href="#platform" 
                  className="px-6 py-4 bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-widest text-center transition-all rounded-none border border-primary"
                >
                  See Akashic in Action
                </a>
                <a 
                  href="#talk-to-us" 
                  className="px-6 py-4 border border-primary text-primary hover:bg-primary/5 text-xs font-bold uppercase tracking-widest text-center transition-all rounded-none"
                >
                  Talk to Our Team
                </a>
              </div>
            </div>

            {/* Interactive Constellation Mesh SVG */}
            <div className="lg:col-span-5 w-full flex flex-col gap-4">
              <div className="w-full p-6 border border-border bg-secondary/30 rounded-none relative overflow-hidden flex flex-col justify-between min-h-[360px]">
                {/* Blueprint grid dots background */}
                <div className="absolute inset-0 bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
                
                <div className="flex justify-between items-center border-b border-border pb-3 mb-2 z-10 text-[9px] font-mono">
                  <span className="text-primary font-bold">Akashic Constellation Mesh</span>
                  <span className="text-muted-foreground">LATENCY: 1.8ms</span>
                </div>

                <div className="relative w-full h-56 flex items-center justify-center z-10">
                  <svg className="w-full h-full max-w-sm overflow-visible" viewBox="0 0 200 200">
                    {/* Concentric grid lines for radar/blueprint aesthetic */}
                    <circle cx="100" cy="100" r="80" fill="none" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2 4" />
                    <circle cx="100" cy="100" r="50" fill="none" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="2 4" />
                    <line x1="100" y1="10" x2="100" y2="190" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="4 4" />
                    <line x1="10" y1="100" x2="190" y2="100" stroke="var(--border)" strokeWidth="0.5" strokeDasharray="4 4" />

                    {/* Nodes configuration */}
                    {/* Center Node (0): 100, 100 */}
                    {/* Top Node (1): 100, 40 */}
                    {/* Top-Right Node (2): 165, 70 */}
                    {/* Bottom-Right Node (3): 150, 150 */}
                    {/* Bottom-Left Node (4): 50, 145 */}
                    {/* Top-Left Node (5): 45, 65 */}

                    {/* Connective lines */}
                    {[
                      { from: [100, 100], to: [100, 40], active: hoveredConstellationNode === 0 || hoveredConstellationNode === 1 },
                      { from: [100, 100], to: [165, 70], active: hoveredConstellationNode === 0 || hoveredConstellationNode === 2 },
                      { from: [100, 100], to: [150, 150], active: hoveredConstellationNode === 0 || hoveredConstellationNode === 3 },
                      { from: [100, 100], to: [50, 145], active: hoveredConstellationNode === 0 || hoveredConstellationNode === 4 },
                      { from: [100, 100], to: [45, 65], active: hoveredConstellationNode === 0 || hoveredConstellationNode === 5 },
                      
                      { from: [100, 40], to: [165, 70], active: hoveredConstellationNode === 1 || hoveredConstellationNode === 2 },
                      { from: [165, 70], to: [150, 150], active: hoveredConstellationNode === 2 || hoveredConstellationNode === 3 },
                      { from: [150, 150], to: [50, 145], active: hoveredConstellationNode === 3 || hoveredConstellationNode === 4 },
                      { from: [50, 145], to: [45, 65], active: hoveredConstellationNode === 4 || hoveredConstellationNode === 5 },
                      { from: [45, 65], to: [100, 40], active: hoveredConstellationNode === 5 || hoveredConstellationNode === 1 },

                      { from: [100, 40], to: [150, 150], active: hoveredConstellationNode === 1 || hoveredConstellationNode === 3 },
                      { from: [45, 65], to: [165, 70], active: hoveredConstellationNode === 5 || hoveredConstellationNode === 2 }
                    ].map((line, idx) => (
                      <line 
                        key={idx}
                        x1={line.from[0]}
                        y1={line.from[1]}
                        x2={line.to[0]}
                        y2={line.to[1]}
                        stroke={line.active ? "var(--primary)" : "var(--border)"}
                        strokeWidth={line.active ? "1.5" : "0.75"}
                        opacity={line.active ? 1 : 0.45}
                        className="transition-all duration-300"
                      />
                    ))}

                    {/* Animated packets traveling down paths */}
                    <circle r="2" fill="var(--primary)">
                      <animateMotion dur="3s" repeatCount="indefinite" path="M 100 40 L 100 100" />
                    </circle>
                    <circle r="2" fill="var(--primary)">
                      <animateMotion dur="2.5s" repeatCount="indefinite" path="M 50 145 L 100 100" />
                    </circle>
                    <circle r="2" fill="var(--accent)">
                      <animateMotion dur="3.5s" repeatCount="indefinite" path="M 100 100 L 150 150" />
                    </circle>

                    {/* SVG Interactive Circles */}
                    {[
                      { id: 0, cx: 100, cy: 100, label: "CORE", floatClass: "animate-float-node-1" },
                      { id: 1, cx: 100, cy: 40, label: "INGEST", floatClass: "animate-float-node-2" },
                      { id: 2, cx: 165, cy: 70, label: "MDM", floatClass: "animate-float-node-3" },
                      { id: 3, cx: 150, cy: 150, label: "BI", floatClass: "animate-float-node-1" },
                      { id: 4, cx: 50, cy: 145, label: "GOV", floatClass: "animate-float-node-2" },
                      { id: 5, cx: 45, cy: 65, label: "AML", floatClass: "animate-float-node-3" }
                    ].map((node) => (
                      <g 
                        key={node.id} 
                        className={`cursor-pointer ${node.floatClass}`}
                        onMouseEnter={() => setHoveredConstellationNode(node.id)}
                        onMouseLeave={() => setHoveredConstellationNode(null)}
                      >
                        {/* Hover glow ring */}
                        <circle 
                          cx={node.cx} 
                          cy={node.cy} 
                          r={hoveredConstellationNode === node.id ? 10 : 0} 
                          fill="none" 
                          stroke="var(--primary)" 
                          strokeWidth="1" 
                          className="transition-all duration-300 opacity-60 animate-ping" 
                        />
                        <circle 
                          cx={node.cx} 
                          cy={node.cy} 
                          r={hoveredConstellationNode === node.id ? 6.5 : 4} 
                          fill={hoveredConstellationNode === node.id ? "var(--primary)" : "var(--secondary)"} 
                          stroke="var(--primary)" 
                          strokeWidth="1.5"
                          className="transition-all duration-300"
                        />
                        <text 
                          x={node.cx} 
                          y={node.cy - 9} 
                          fontSize="7" 
                          fontWeight="bold" 
                          textAnchor="middle" 
                          fill={hoveredConstellationNode === node.id ? "var(--primary)" : "var(--foreground)"}
                          className="font-mono transition-colors duration-200 select-none pointer-events-none"
                        >
                          {node.label}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>

                {/* Live Diagnostic Console Readout */}
                <div className="border-t border-border pt-4 mt-2 font-mono text-[9.5px] text-left z-10">
                  {hoveredConstellationNode === 0 && (
                    <div className="flex flex-col gap-0.5">
                      <span className="text-primary font-bold">Akashic Core Node Status: Optimal</span>
                      <span className="text-muted-foreground">Role: Orchestrates multi-node replication & secure routing gateways.</span>
                      <span className="text-muted-foreground">Metric: 10 PB Scale operational | Active streams: 12.</span>
                    </div>
                  )}
                  {hoveredConstellationNode === 1 && (
                    <div className="flex flex-col gap-0.5">
                      <span className="text-primary font-bold">Ingestion Node Status: Syncing</span>
                      <span className="text-muted-foreground">Role: Dynamic ETL connectors handling live REST endpoints & Kafka streams.</span>
                      <span className="text-muted-foreground">Metric: Ingest Rate: 1.2 GB/sec | Loss index: 0.00%.</span>
                    </div>
                  )}
                  {hoveredConstellationNode === 2 && (
                    <div className="flex flex-col gap-0.5">
                      <span className="text-primary font-bold">MDM Engine Node Status: Optimal</span>
                      <span className="text-muted-foreground">Role: Deduplicates duplicate datasets & merges citizen master records.</span>
                      <span className="text-muted-foreground">Metric: Deduplication Accuracy: 99.98% | Match merges: 12ms.</span>
                    </div>
                  )}
                  {hoveredConstellationNode === 3 && (
                    <div className="flex flex-col gap-0.5">
                      <span className="text-primary font-bold">Business Intelligence Node Status: Active</span>
                      <span className="text-muted-foreground">Role: Visualizes real-time dashboard parameters & KPI alerts.</span>
                      <span className="text-muted-foreground">Metric: Query delay: &lt; 150ms | Active visual users: 1,400.</span>
                    </div>
                  )}
                  {hoveredConstellationNode === 4 && (
                    <div className="flex flex-col gap-0.5">
                      <span className="text-primary font-bold">Governance Node Status: Secure</span>
                      <span className="text-muted-foreground">Role: Enforces role-based column masking & citizen identity security rules.</span>
                      <span className="text-muted-foreground">Metric: Directory sync: active | Audit journaling: TLS 1.3.</span>
                    </div>
                  )}
                  {hoveredConstellationNode === 5 && (
                    <div className="flex flex-col gap-0.5">
                      <span className="text-primary font-bold">AML Models Node Status: Scoring</span>
                      <span className="text-muted-foreground">Role: Machine learning inference engine predicting anomalies.</span>
                      <span className="text-muted-foreground">Metric: AML Inference delay: 8ms | Accuracy index: 98.4%.</span>
                    </div>
                  )}
                  {hoveredConstellationNode === null && (
                    <div className="flex flex-col gap-0.5">
                      <span className="text-primary font-bold">Cluster Telemetry: Optimal</span>
                      <span className="text-muted-foreground">Hover nodes inside the wireframe constellation map to read telemetry logs.</span>
                      <span className="text-muted-foreground">System nodes: 6/6 active | Data sovereignty status: Secured.</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. LIGHT SLATE HERO LAYOUT (Two-column: Left text + Right Dashboard Image - Royal Ultramarine) */}
        {theme === "light-slate" && (
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10 font-sans mt-8">
            <div className="flex flex-col items-start text-left">
              <span className="text-[10px] font-bold tracking-widest uppercase text-primary mb-5 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                Powered by Akashic
              </span>
              <h1 className="font-black tracking-tight text-5xl md:text-6xl leading-[1.05] text-[#0f172a]">
                From Data.<br />
                To Decisions.<br />
                <span className="text-primary">At Scale.</span>
              </h1>
              <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-lg font-medium">
                DHIRA partners with governments and enterprises to turn fragmented data into clear, governed intelligence — and then act on it. Powered by Akashic, our AI-native data platform.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a 
                  href="#platform" 
                  className="px-7 py-4 bg-primary hover:bg-primary-hover text-white text-xs font-bold uppercase tracking-widest text-center transition-all rounded-lg shadow-md"
                >
                  See Akashic in Action
                </a>
                <a 
                  href="#talk-to-us" 
                  className="px-7 py-4 border border-border hover:bg-secondary text-foreground text-xs font-bold uppercase tracking-widest text-center transition-all rounded-lg"
                >
                  Talk to Our Team
                </a>
              </div>
            </div>

            <div className="relative w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/30">
                <img 
                  src="/dhira_dashboard.png" 
                  alt="Akashic Platform Dashboard — Real-Time Data Intelligence" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
                Live Dashboard
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02: TRUST STRIP (Scrolling Badges - 4 DIFFERENT DESIGNS) */}
      {/* ========================================================================= */}
      <section className="relative z-10 border-y border-border/20 py-8 overflow-hidden bg-background/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          {theme === "dark-midnight" && (
            /* Variant 1: Continuous horizontal scrolling marquee using animate-marquee style */
            <div className="relative w-full overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              <div className="flex animate-marquee gap-12 text-[10px] font-mono text-muted-foreground uppercase tracking-widest whitespace-nowrap">
                <span>Startup India Recognized</span>
                <span>MSME Registered</span>
                <span>Maha Hackathon 2025 Winner</span>
                <span>Telangana AI Rising 2025 Winner</span>
                <span>GEM Registered</span>
                <span>99.9% Uptime SLA</span>
                <span>Data Hosted in India</span>
                <span>AWS & Azure Native</span>
                {/* Duplicated for smooth loop */}
                <span>Startup India Recognized</span>
                <span>MSME Registered</span>
                <span>Maha Hackathon 2025 Winner</span>
                <span>Telangana AI Rising 2025 Winner</span>
                <span>GEM Registered</span>
                <span>99.9% Uptime SLA</span>
                <span>Data Hosted in India</span>
                <span>AWS & Azure Native</span>
              </div>
            </div>
          )}

          {theme === "light-cobalt" && (
            /* Variant 2: Scrolling Periwinkle Badges */
            <div className="relative w-full overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              <div className="flex animate-marquee gap-8 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap py-1">
                {[
                  "Startup India Recognized", "MSME Registered", "Maha Hackathon 2025 Winner", 
                  "Telangana AI Rising 2025 Winner", "GEM Registered", "99.9% Uptime SLA", 
                  "Data Hosted in India", "AWS & Azure Native"
                ].map((badge, bIdx) => (
                  <span key={bIdx} className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary shadow-sm hover:border-primary/45 transition-all">
                    ✦ {badge}
                  </span>
                ))}
                {/* Duplicate for infinite loop */}
                {[
                  "Startup India Recognized", "MSME Registered", "Maha Hackathon 2025 Winner", 
                  "Telangana AI Rising 2025 Winner", "GEM Registered", "99.9% Uptime SLA", 
                  "Data Hosted in India", "AWS & Azure Native"
                ].map((badge, bIdx) => (
                  <span key={`dup-${bIdx}`} className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary shadow-sm hover:border-primary/45 transition-all">
                    ✦ {badge}
                  </span>
                ))}
              </div>
            </div>
          )}

          {theme === "light-cyan" && (
            /* Variant 3: Telemetry data feed marquee ticker (Aegean Steel) */
            <div className="relative w-full overflow-hidden font-mono py-2">
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
              <div className="flex animate-marquee gap-12 text-[10px] uppercase tracking-widest whitespace-nowrap">
                {[
                  "Startup India Recognized", "MSME Registered", "Maha Hackathon 2025 Winner", 
                  "Telangana AI Rising 2025 Winner", "GEM Registered", "99.9% Uptime SLA", 
                  "Data Hosted in India", "AWS & Azure Native"
                ].map((badge, bIdx) => (
                  <span key={bIdx} className="text-muted-foreground flex items-center gap-2">
                    <span className="text-primary font-bold">✦</span> {badge}
                  </span>
                ))}
                {/* Duplicate for infinite loop */}
                {[
                  "Startup India Recognized", "MSME Registered", "Maha Hackathon 2025 Winner", 
                  "Telangana AI Rising 2025 Winner", "GEM Registered", "99.9% Uptime SLA", 
                  "Data Hosted in India", "AWS & Azure Native"
                ].map((badge, bIdx) => (
                  <span key={`dup-${bIdx}`} className="text-muted-foreground flex items-center gap-2">
                    <span className="text-primary font-bold">✦</span> {badge}
                  </span>
                ))}
              </div>
            </div>
          )}

          {theme === "light-slate" && (
            /* Variant 4: Minimalist grid of thin-bordered squares (Royal Ultramarine) */
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-mono text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
              <div className="p-3 border border-border/40">Startup India & MSME</div>
              <div className="p-3 border border-border/40">Hackathon Winners 2025</div>
              <div className="p-3 border border-border/40">GEM Reg & 99.9% Uptime</div>
              <div className="p-3 border border-border/40">Data Hosted in India / AWS</div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03: PROBLEM STATEMENT (4 COMPLETELY DISTINCT LAYOUTS) */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-b border-border/10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full font-sans">
            THE PROBLEM WE SOLVE
          </span>
          <h2 className={`font-outfit font-black text-3xl md:text-5xl ${textTitleColor()} mt-4 max-w-3xl mx-auto leading-tight uppercase`}>
            Your data is everywhere. Your decisions can't wait. Your teams are still working in silos.
          </h2>
        </div>

        {/* 1. DARK MIDNIGHT: 3 Staggered cards with custom glowing border keyframes */}
        {theme === "dark-midnight" && (
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { icon: "⚠️", title: "Fragmented Data", desc: "Citizen records in 12 systems. Sales data in 6 tools. Nobody has a single version of the truth." },
              { icon: "⏱️", title: "Delayed Decisions", desc: "Reports take days. By the time insight reaches the decision-maker, the moment has passed." },
              { icon: "🔧", title: "Tool Overload", desc: "Separate ETL, BI, ML, and workflow tools. High cost. Low interoperability. No governance." }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-2xl border bg-[#0d0f14]/65 border-border/30 card-cyber-glow transition-all duration-300"
              >
                <div className="text-3xl mb-6">{item.icon}</div>
                <h3 className="font-outfit font-bold text-lg text-foreground mb-3 uppercase tracking-wide">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* 2. LIGHT COBALT (Periwinkle): 3-column grid with premium periwinkle card-lift shadows */}
        {theme === "light-cobalt" && (
          <div className="grid md:grid-cols-3 gap-8 font-outfit text-left">
            {[
              { num: "01", title: "Fragmented Data", desc: "Citizen records in 12 systems. Sales data in 6 tools. Nobody has a single version of the truth." },
              { num: "02", title: "Delayed Decisions", desc: "Reports take days. By the time insight reaches the decision-maker, the moment has passed." },
              { num: "03", title: "Tool Overload", desc: "Separate ETL, BI, ML, and workflow tools. High cost. Low interoperability. No governance." }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-3xl border border-primary/15 bg-white shadow-sm card-periwinkle-lift flex flex-col justify-between h-64 transition-all"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-black text-primary font-mono px-3 py-1 bg-primary/10 rounded-full">{item.num}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  </div>
                  <h3 className="font-bold text-lg text-[#111116] mb-3">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-sans font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. LIGHT CYAN (Aegean): Side-by-side split blueprint layout with diagnostic components */}
        {theme === "light-cyan" && (
          <div className="grid lg:grid-cols-12 gap-8 font-space items-stretch text-left">
            <div className="lg:col-span-5 flex flex-col justify-between p-8 border border-primary/15 bg-white rounded-none relative shadow-sm">
              <div>
                <span className="absolute top-3 left-4 text-[9px] font-bold text-primary uppercase">Silo Diagnostic Report</span>
                <span className="absolute top-3 right-4 text-[9px] text-[#ef4444] font-bold uppercase">Status: Siloed</span>
                <h3 className="text-sm font-black text-primary tracking-widest uppercase block mt-4 mb-4">The Silo Gap</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-sans font-medium">
                  Modern enterprise and public scale data environments are paralyzed by system friction. When datasets cannot communicate freely, organization agility drops to zero.
                </p>
              </div>
              
              {/* Telemetry graphic representing databases without connection */}
              <div className="mt-8 border border-primary/10 bg-secondary/20 p-4 rounded-none">
                <svg className="w-full h-16 overflow-visible" viewBox="0 0 200 60">
                  <circle cx="30" cy="25" r="4.5" fill="#ef4444" />
                  <circle cx="100" cy="25" r="4.5" fill="#ef4444" />
                  <circle cx="170" cy="25" r="4.5" fill="#ef4444" />
                  <line x1="30" y1="25" x2="100" y2="25" stroke="#ef4444" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
                  <line x1="100" y1="25" x2="170" y2="25" stroke="#ef4444" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
                  <text x="30" y="40" fontSize="7" textAnchor="middle" fill="var(--muted-foreground)">Database A</text>
                  <text x="100" y="40" fontSize="7" textAnchor="middle" fill="var(--muted-foreground)">Database B</text>
                  <text x="170" y="40" fontSize="7" textAnchor="middle" fill="var(--muted-foreground)">Database C</text>
                  <text x="100" y="54" fontSize="7.5" textAnchor="middle" fill="#ef4444" fontWeight="bold">Siloed Systems (Unreachable)</text>
                </svg>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-4">
              {[
                { title: "Fragmented Data", desc: "Citizen records in 12 systems. Sales data in 6 tools. Nobody has a single version of the truth." },
                { title: "Delayed Decisions", desc: "Reports take days. By the time insight reaches the decision-maker, the moment has passed." },
                { title: "Tool Overload", desc: "Separate ETL, BI, ML, and workflow tools. High cost. Low interoperability. No governance." }
              ].map((item, idx) => (
                <div key={idx} className="p-6 border border-primary/15 bg-white rounded-none flex flex-col gap-2 relative shadow-sm hover:border-primary/40 transition-colors">
                  <h3 className="font-bold text-sm text-foreground uppercase tracking-wide flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#ef4444] rounded-none shrink-0" /> {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-sans font-medium leading-relaxed pl-3.5 border-l border-primary/10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. LIGHT SLATE (Royal Ultramarine): Premium problem cards with top accent borders */}
        {theme === "light-slate" && (
          <div className="grid md:grid-cols-3 gap-6 font-sans text-left">
            {[
              { num: "01", title: "Fragmented Data", desc: "Citizen records in 12 systems. Sales data in 6 tools. Nobody has a single version of the truth." },
              { num: "02", title: "Delayed Decisions", desc: "Reports take days. By the time insight reaches the decision-maker, the moment has passed." },
              { num: "03", title: "Tool Overload", desc: "Separate ETL, BI, ML, and workflow tools. High cost. Low interoperability. No governance." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-border/40 bg-white rounded-xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex flex-col justify-between h-56 border-t-4 border-t-primary">
                <div>
                  <span className="text-xs font-black text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-4">{item.num}</span>
                  <h3 className="font-bold text-base text-[#0f172a] mb-3 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04: THREE OFFERINGS (4 COMPLETELY DISTINCT LAYOUTS) */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-24 px-6 bg-secondary/15 border-b border-border/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              WHAT DHIRA DOES
            </span>
            <h2 className={`font-outfit font-black text-3xl md:text-5xl ${textTitleColor()} mt-4 uppercase`}>
              We design it. We build it. We power it.
            </h2>
          </div>

          {/* 1. DARK MIDNIGHT: Cyber console cards with pings and border-beam effects */}
          {theme === "dark-midnight" && (
            <div className="grid md:grid-cols-3 gap-8 font-sans text-left">
              {[
                { icon: "🗺️", label: "We Design It", title: "Strategic Advisory", desc: "Data strategy, AI readiness assessments, and program design for governments and enterprises ready to transform." },
                { icon: "⚙️", label: "We Build It", title: "Platform Engineering", desc: "Custom platform development, government digital infrastructure, rapid prototyping, and AI accelerators." },
                { icon: "🚀", label: "We Power It", title: "Akashic Platform", desc: "DHIRA's unified AI and data platform. 10 modules from ingestion to governance. Cloud, on-premises, or hybrid." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 rounded-2xl border bg-background/40 border-border/30 card-cyber-glow transition-all flex flex-col justify-between h-80">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-3xl">{item.icon}</span>
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    </div>
                    <span className="text-[9px] font-black text-primary uppercase tracking-widest font-mono">{item.label}</span>
                    <h3 className="font-outfit font-bold text-lg text-foreground mt-1 mb-3 uppercase tracking-wide">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                  </div>
                  <a href="#talk-to-us" className="text-xs font-bold text-primary hover:underline font-mono">Request briefing &gt;</a>
                </div>
              ))}
            </div>
          )}

          {/* 2. LIGHT COBALT (Periwinkle): Staggered height columns with card-periwinkle-lift shadows */}
          {theme === "light-cobalt" && (
            <div className="grid md:grid-cols-3 gap-8 font-outfit items-start text-left">
              {[
                { label: "We Design It", title: "Strategic Advisory", desc: "Data strategy, AI readiness assessments, and program design for governments and enterprises ready to transform.", mt: "mt-0", icon: <Layers className="w-5 h-5 text-primary" /> },
                { label: "We Build It", title: "Platform Engineering", desc: "Custom platform development, government digital infrastructure, rapid prototyping, and AI accelerators.", mt: "md:mt-6", icon: <Cpu className="w-5 h-5 text-primary" /> },
                { label: "We Power It", title: "Akashic Platform", desc: "DHIRA's unified AI and data platform. 10 modules from ingestion to governance. Cloud, on-premises, or hybrid.", mt: "md:mt-12", icon: <Network className="w-5 h-5 text-primary" /> }
              ].map((item, idx) => (
                <div key={idx} className={`p-8 rounded-3xl border border-primary/15 bg-white card-periwinkle-lift transition-all flex flex-col justify-between h-80 shadow-sm ${item.mt}`}>
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-black tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">{item.label}</span>
                      <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-xl text-[#111116] mb-3">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-sans font-medium">{item.desc}</p>
                  </div>
                  <a href="#talk-to-us" className="text-xs font-bold text-primary flex items-center gap-1 hover:text-primary-hover font-sans mt-4 group">
                    Read playbooks <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* 3. LIGHT CYAN (Aegean): Neo-brutalist tech cards (Thick borders, 0 rounding) */}
          {theme === "light-cyan" && (
            <div className="grid md:grid-cols-3 gap-6 font-space text-left">
              {[
                { label: "Design Strategy", title: "Strategic Advisory", desc: "Data strategy, AI readiness assessments, and program design for governments and enterprises ready to transform.", subfeatures: ["AI readiness index", "Governance maps", "GTM plans"] },
                { label: "Platform Build", title: "Platform Engineering", desc: "Custom platform development, government digital infrastructure, rapid prototyping, and AI accelerators.", subfeatures: ["Custom APIs", "Microservices", "Scale tests"] },
                { label: "Product Core", title: "Akashic Platform", desc: "DHIRA's unified AI and data platform. 10 modules from ingestion to governance. Cloud, on-premises, or hybrid.", subfeatures: ["10 core modules", "Hybrid nodes", "Multi-tenant"] }
              ].map((item, idx) => (
                <div key={idx} className="relative p-8 border border-primary/20 bg-background hover:bg-secondary/40 transition-all flex flex-col justify-between h-[320px] rounded-none group overflow-hidden shadow-sm">
                  
                  <div className="z-10">
                    <div className="flex justify-between items-center text-[10px] font-bold text-primary border-b border-primary/10 pb-2 mb-4">
                      <span>{item.label.toUpperCase()}</span>
                      <span className="text-muted-foreground">Segment 0{idx + 1}</span>
                    </div>
                    <h3 className="font-black text-lg text-foreground uppercase tracking-tight mb-3">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-sans font-medium mb-4">{item.desc}</p>
                    
                    {/* Inline micro features */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.subfeatures.map((sf, sfIdx) => (
                        <span key={sfIdx} className="text-[9px] font-sans font-semibold bg-primary/5 text-primary border border-primary/10 px-2 py-0.5 rounded-none">
                          ✦ {sf}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="z-10 flex justify-between items-center border-t border-primary/10 pt-4 mt-2">
                    <a href="#talk-to-us" className="text-xs font-bold uppercase tracking-widest text-primary hover:text-primary-hover transition-colors flex items-center gap-1.5 group-hover:underline">
                      Access Blueprint <ArrowRight className="w-3 h-3" />
                    </a>
                    <span className="text-[9px] text-muted-foreground">Revision 4.1</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 4. LIGHT SLATE (Royal Ultramarine): Premium offering cards with icon and clean CTA */}
          {theme === "light-slate" && (
            <div className="grid md:grid-cols-3 gap-6 font-sans text-left">
              {[
                { label: "We Design It", title: "Strategic Advisory", desc: "Data strategy, AI readiness assessments, and program design for governments and enterprises ready to transform.", icon: <Layers className="w-5 h-5 text-primary" /> },
                { label: "We Build It", title: "Platform Engineering", desc: "Custom platform development, government digital infrastructure, rapid prototyping, and AI accelerators.", icon: <Cpu className="w-5 h-5 text-primary" /> },
                { label: "We Power It", title: "Akashic Platform", desc: "DHIRA's unified AI and data platform. 10 modules from ingestion to governance. Cloud, on-premises, or hybrid.", icon: <Network className="w-5 h-5 text-primary" /> }
              ].map((item, idx) => (
                <div key={idx} className="p-8 border border-border/40 bg-white rounded-xl hover:border-primary/30 hover:shadow-md transition-all flex flex-col justify-between h-80 shadow-sm">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xs font-black text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">{item.label}</span>
                      <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-[#0f172a] mb-3 uppercase tracking-wide">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                  </div>
                  <a href="#talk-to-us" className="text-xs font-bold text-primary flex items-center gap-1 hover:text-primary-hover mt-4 group">
                    Request Assessment <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 05: BEFORE & AFTER TRANSFORMATION (4 COMPLETELY DISTINCT LAYOUTS) */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-b border-border/10">
        <div className="text-center mb-8">
          <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full font-sans">
            THE TRANSFORMATION
          </span>
          <h2 className={`font-outfit font-black text-3xl md:text-5xl ${textTitleColor()} mt-4 uppercase`}>
            Before and After Data Knowledge
          </h2>
          <p className="text-xs text-muted-foreground mt-4 font-sans font-medium">
            See what changes when your organisation gets real-time data intelligence. Toggle or compare the states below.
          </p>
        </div>

        {/* 1. DARK MIDNIGHT: Sliding tab with warning red vs glowing cobalt cards */}
        {theme === "dark-midnight" && (
          <>
            <div className="flex justify-center mb-12">
              <div className="relative p-1 rounded-full bg-secondary border border-border flex items-center w-64 h-12 shadow-inner">
                <div 
                  className={`absolute top-1 left-1 bottom-1 w-[122px] rounded-full transition-transform duration-300 shadow-md ${beforeAfterState === 'before' ? 'bg-[#ef4444] translate-x-0' : 'bg-primary translate-x-[120px]'}`}
                />
                <button onClick={() => setBeforeAfterState("before")} className={`flex-1 text-center text-[10px] font-black uppercase tracking-wider z-10 transition-colors duration-200 ${beforeAfterState === 'before' ? 'text-white' : 'text-muted-foreground'}`}>
                  ⚠️ Before Dhira
                </button>
                <button onClick={() => setBeforeAfterState("after")} className={`flex-1 text-center text-[10px] font-black uppercase tracking-wider z-10 transition-colors duration-200 ${beforeAfterState === 'after' ? 'text-white' : 'text-muted-foreground'}`}>
                  ✓ After Dhira
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans text-left">
              {transformationMetrics.map((row, idx) => (
                <div 
                  key={idx} 
                  className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-48 shadow-lg ${
                    beforeAfterState === 'before' 
                      ? 'border-[#ef4444]/20 bg-[#ef4444]/5 hover:border-[#ef4444]/40 shadow-red-500/5' 
                      : 'border-primary/25 bg-primary/5 hover:border-primary/45 shadow-primary/5'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-2xl">{row.icon}</span>
                    <span className={`text-[8px] font-black uppercase px-2 py-0.5 rounded tracking-widest ${beforeAfterState === 'before' ? 'bg-[#ef4444]/15 text-[#ef4444]' : 'bg-primary/15 text-primary'}`}>
                      {beforeAfterState === 'before' ? 'Siloed State' : 'Sovereign State'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider block font-mono">{row.label}</span>
                    <AnimatePresence mode="wait">
                      <motion.span 
                        key={beforeAfterState}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className={`font-outfit font-black text-2xl mt-1.5 block ${beforeAfterState === 'before' ? 'text-[#ef4444]' : 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'}`}
                      >
                        {beforeAfterState === "before" ? row.before : row.after}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <p className="text-[9.5px] text-muted-foreground leading-relaxed font-sans">
                    {beforeAfterState === 'before' ? row.badState : row.goodState}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* 2. LIGHT COBALT (Periwinkle): Interactive comparison console with custom animated progress bars */}
        {theme === "light-cobalt" && (
          <div className="max-w-4xl mx-auto border border-primary/20 bg-white rounded-3xl overflow-hidden shadow-lg font-sans text-xs text-left card-periwinkle-lift">
            <div className="bg-primary/5 border-b border-primary/10 px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-outfit font-black text-base text-[#111116] uppercase tracking-wide flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary animate-pulse" /> Transformation Metrics
                </span>
                <span className="text-[10px] text-muted-foreground font-mono mt-1 block">NODE: DHR_COMPARE_V2 // CLIENT_AUDIT</span>
              </div>
              <div className="flex p-1 rounded-full bg-secondary border border-border/60 self-start sm:self-center font-outfit">
                <button 
                  onClick={() => setBeforeAfterState("before")} 
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all ${
                    beforeAfterState === 'before' 
                      ? 'bg-[#ef4444] text-white shadow-md' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  ⚠️ Before Dhira
                </button>
                <button 
                  onClick={() => setBeforeAfterState("after")} 
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all ${
                    beforeAfterState === 'after' 
                      ? 'bg-primary text-white shadow-md' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  ✓ After Dhira
                </button>
              </div>
            </div>
            
            <div className="p-8 flex flex-col gap-6">
              {transformationMetrics.map((row, idx) => {
                // Calculate percentage widths for metrics dynamically
                let percent = 0
                if (row.label === "Data visibility") percent = beforeAfterState === "before" ? 12 : 95
                else if (row.label === "Decision lag") percent = beforeAfterState === "before" ? 90 : 5
                else if (row.label === "Real-time insights") percent = beforeAfterState === "before" ? 0 : 100
                else if (row.label === "System integration") percent = beforeAfterState === "before" ? 15 : 95
                else if (row.label === "Data quality") percent = beforeAfterState === "before" ? 30 : 98
                else if (row.label === "Automation") percent = beforeAfterState === "before" ? 8 : 90

                const isRed = beforeAfterState === "before"

                return (
                  <div key={idx} className="flex flex-col md:flex-row md:items-center gap-4 justify-between border-b border-border/10 pb-4 last:border-b-0 last:pb-0">
                    <div className="w-full md:w-1/3 text-left">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{row.icon}</span>
                        <span className="font-outfit font-bold text-sm text-[#111116] uppercase tracking-wide">{row.label}</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground font-sans mt-1 leading-normal">
                        {beforeAfterState === 'before' ? row.badState : row.goodState}
                      </p>
                    </div>

                    <div className="flex-1 flex items-center gap-4">
                      {/* Interactive Bar */}
                      <div className="flex-1 h-3 rounded-full bg-secondary overflow-hidden border border-border/40 relative">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${percent}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className={`h-full rounded-full transition-colors duration-500 ${isRed ? 'bg-[#ef4444]' : 'bg-primary'}`}
                        />
                      </div>
                      
                      {/* Metric Text */}
                      <span className={`w-20 text-right font-mono font-black text-sm ${isRed ? 'text-[#ef4444]' : 'text-primary'}`}>
                        {beforeAfterState === 'before' ? row.before : row.after}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* 3. LIGHT CYAN (Aegean): Split Dashboard Metric Comparison Table */}
        {theme === "light-cyan" && (
          <div className="grid md:grid-cols-2 gap-8 font-space items-stretch text-left">
            {/* Legacy Block */}
            <div className="p-8 border border-red-200 bg-red-50/10 flex flex-col justify-between rounded-none shadow-sm relative">
              <div>
                <span className="text-[10px] font-bold text-[#ef4444] tracking-wider uppercase">Legacy Silo Environment</span>
                <h3 className="text-lg font-black text-foreground mt-2 mb-6 uppercase tracking-tight">Isolated Operations</h3>
                <div className="flex flex-col gap-5">
                  {transformationMetrics.map((row, idx) => (
                    <div key={idx} className="flex gap-4 items-start border-b border-red-100/30 pb-3 last:border-0">
                      <span className="text-base bg-red-50 p-2 border border-red-100 text-[#ef4444] rounded-none shrink-0">{row.icon}</span>
                      <div className="flex-1">
                        <div className="flex justify-between items-center w-full">
                          <span className="text-xs font-bold text-foreground">{row.label}</span>
                          <span className="text-xs font-black text-[#ef4444] font-mono">{row.before}</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground font-sans mt-0.5 leading-normal">{row.badState}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Akashic Block */}
            <div className="p-8 border border-primary/20 bg-primary/5 flex flex-col justify-between rounded-none shadow-sm relative">
              <div className="absolute top-4 right-4 bg-primary/10 text-primary text-[9px] font-mono px-2 py-0.5 uppercase tracking-wider font-bold">Optimized</div>
              <div>
                <span className="text-[10px] font-bold text-primary tracking-wider uppercase">Akashic Unified Environment</span>
                <h3 className="text-lg font-black text-foreground mt-2 mb-6 uppercase tracking-tight">Real-Time Ingestion</h3>
                <div className="flex flex-col gap-5">
                  {transformationMetrics.map((row, idx) => (
                    <div key={idx} className="flex gap-4 items-start border-b border-blue-100/30 pb-3 last:border-0">
                      <span className="text-base bg-primary/5 p-2 border border-primary/10 text-primary rounded-none shrink-0">{row.icon}</span>
                      <div className="flex-1">
                        <div className="flex justify-between items-center w-full">
                          <span className="text-xs font-bold text-foreground">{row.label}</span>
                          <span className="text-xs font-black text-primary font-mono">{row.after}</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground font-sans mt-0.5 leading-normal">{row.goodState}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. LIGHT SLATE (Royal Ultramarine): Clean side-by-side comparative cards */}
        {theme === "light-slate" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans text-left">
            {transformationMetrics.map((row, idx) => (
              <div key={idx} className="p-6 border border-border/40 bg-white rounded-xl shadow-sm flex flex-col justify-between h-56 hover:border-primary/20 hover:shadow-md transition-all">
                <div>
                  <span className="text-xl block mb-2">{row.icon}</span>
                  <h3 className="font-bold text-xs uppercase text-[#0f172a] tracking-wide">{row.label}</h3>
                  <div className="grid grid-cols-2 gap-0 mt-4 text-center border border-border rounded-lg overflow-hidden">
                    <div className="p-2.5 bg-red-50 border-r border-border">
                      <span className="text-[8px] text-[#ef4444] block font-bold uppercase">Before</span>
                      <span className="text-sm text-[#ef4444] font-black">{row.before}</span>
                    </div>
                    <div className="p-2.5 bg-primary/5">
                      <span className="text-[8px] text-primary block font-bold uppercase">After</span>
                      <span className="text-sm text-primary font-black">{row.after}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[9px] text-muted-foreground font-sans mt-3 line-clamp-2 leading-relaxed">{row.goodState}</p>
              </div>
            ))}
          </div>
        )}

        {/* Statistics Strip (DOCX templates exact copy) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 text-center border-t border-border/20 pt-16 font-mono">
          {[
            { stat: "10+ PB", label: "Petabytes processed" },
            { stat: "10+", label: "Enterprise clients" },
            { stat: "< 4ms", label: "Avg. pipeline latency" },
            { stat: "40%", label: "Cost reduction avg." }
          ].map((item, idx) => (
            <div key={idx} className={`relative p-4 border transition-all rounded-none overflow-hidden ${
              theme === "dark-midnight" 
                ? 'border-border/30 bg-[#0d0f14]/40 text-primary-foreground' 
                : theme === "light-cobalt" 
                ? 'border-primary/20 bg-primary/5 text-primary' 
                : theme === "light-cyan" 
                ? 'border-primary/25 bg-background text-foreground' 
                : 'border-border/60 bg-secondary text-foreground'
            }`}>

              <span className={`font-black text-3xl ${theme === "light-cyan" ? "text-primary" : "text-primary"}`}>{item.stat}</span>
              <span className="text-[9px] uppercase font-bold tracking-widest text-muted-foreground mt-2 font-sans block">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 06: MEET AKASHIC PLATFORM (4 COMPLETELY DISTINCT LAYOUTS) */}
      {/* ========================================================================= */}
      <section id="platform" className="relative z-10 py-24 px-6 bg-secondary/10 border-b border-border/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full font-sans">
              THE PLATFORM — MEET AKASHIC
            </span>
            <h2 className={`font-outfit font-black text-3xl md:text-5xl ${textTitleColor()} mt-4 leading-tight uppercase`}>
              One Platform. Every Layer. Raw Data to Live Decisions.
            </h2>
            <p className="text-xs text-muted-foreground mt-4 max-w-2xl mx-auto font-sans font-medium">
              Akashic is DHIRA's unified AI and data platform. It handles everything — data ingestion, master data management, business intelligence, machine learning, workflow automation, and data governance — in one connected system. Cloud, on-premises, or hybrid.
            </p>
          </div>

          {/* 1. DARK MIDNIGHT: Connected interactive schematic map (Wow factor) */}
          {theme === "dark-midnight" && (
            <div className="grid lg:grid-cols-12 gap-12 items-stretch font-sans text-left mt-8">
              <div className="lg:col-span-5 flex flex-col gap-3 max-h-[500px] overflow-y-auto pr-2 border-r border-border/30">
                {akashicModules.map((mod, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveModuleIndex(idx)}
                    className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between group ${activeModuleIndex === idx ? 'border-primary bg-primary/10 shadow-lg shadow-primary/5' : 'border-border/30 bg-background/30 hover:bg-secondary/40'}`}
                  >
                    <div>
                      <span className="text-[9px] font-black text-primary uppercase block font-mono">MODULE 0{idx + 1}</span>
                      <span className="text-xs font-bold text-foreground block mt-0.5 uppercase tracking-wide group-hover:text-primary transition-colors">{mod.title}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary ${activeModuleIndex === idx ? 'rotate-90 text-primary' : ''}`} />
                  </button>
                ))}
              </div>
              
              {/* Dynamic Blueprint display with simulated flows */}
              <div className="lg:col-span-7 p-8 rounded-2xl border border-border/60 bg-[#0d0f14]/85 flex flex-col justify-between min-h-[480px] relative overflow-hidden card-cyber-glow">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                <div>
                  <div className="flex justify-between items-center border-b border-border/30 pb-4">
                    <span className="text-[9px] font-black tracking-widest text-primary uppercase font-mono">[ SCHEMATIC DESIGN: MOD_0{activeModuleIndex + 1} ]</span>
                    <span className="text-[9px] text-[#10b981] font-mono font-bold uppercase tracking-wider flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
                      ACTIVE_MESH
                    </span>
                  </div>
                  <h3 className="font-outfit font-black text-2xl text-foreground mt-4 uppercase tracking-wide">{akashicModules[activeModuleIndex].title}</h3>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed max-w-xl font-medium">{akashicModules[activeModuleIndex].desc}</p>
                  
                  {/* Detailed features bullet matrix */}
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    {akashicModules[activeModuleIndex].details.map((feat, fIdx) => (
                      <div key={fIdx} className="flex gap-2 items-center text-[10px] text-muted-foreground font-mono">
                        <Check className="w-3 h-3 text-primary shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border/30 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-[9px] text-muted-foreground">
                  <div className="flex gap-4">
                    <span className="bg-secondary px-2.5 py-1 rounded text-primary font-bold">{akashicModules[activeModuleIndex].metric}</span>
                    <span className="bg-secondary px-2.5 py-1 rounded text-accent font-bold">{akashicModules[activeModuleIndex].latency}</span>
                  </div>
                  <span>SECURITY: AES_256 // TLS_1.3</span>
                </div>
              </div>
            </div>
          )}

          {/* 2. LIGHT COBALT (Periwinkle): Interactive schematic map (Premium Clean Style) */}
          {theme === "light-cobalt" && (
            <div className="grid lg:grid-cols-12 gap-12 items-stretch font-sans text-left mt-8 font-outfit">
              <div className="lg:col-span-5 flex flex-col gap-3 max-h-[500px] overflow-y-auto pr-2 border-r border-primary/10">
                {akashicModules.map((mod, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveModuleIndex(idx)}
                    className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between group ${
                      activeModuleIndex === idx 
                        ? 'border-primary bg-primary/5 shadow-sm' 
                        : 'border-primary/10 bg-white hover:bg-primary/5'
                    }`}
                  >
                    <div>
                      <span className="text-[9px] font-black text-primary uppercase block font-mono">MODULE 0{idx + 1}</span>
                      <span className="text-sm font-bold text-[#111116] block mt-0.5 uppercase tracking-wide group-hover:text-primary transition-colors">{mod.title}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary ${activeModuleIndex === idx ? 'rotate-90 text-primary' : ''}`} />
                  </button>
                ))}
              </div>
              
              {/* Dynamic Blueprint display with simulated flows */}
              <div className="lg:col-span-7 p-8 rounded-3xl border border-primary/20 bg-white flex flex-col justify-between min-h-[480px] relative overflow-hidden shadow-md card-periwinkle-lift">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                <div>
                  <div className="flex justify-between items-center border-b border-primary/10 pb-4">
                    <span className="text-[9px] font-black tracking-widest text-primary uppercase font-mono">[ SCHEMATIC DESIGN: MOD_0{activeModuleIndex + 1} ]</span>
                    <span className="text-[9px] text-primary font-mono font-bold uppercase tracking-wider flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                      ACTIVE_FLOW
                    </span>
                  </div>
                  <h3 className="font-outfit font-black text-2xl text-[#111116] mt-4 uppercase tracking-wide">{akashicModules[activeModuleIndex].title}</h3>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed max-w-xl font-sans font-medium">{akashicModules[activeModuleIndex].desc}</p>
                  
                  {/* Detailed features bullet matrix */}
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    {akashicModules[activeModuleIndex].details.map((feat, fIdx) => (
                      <div key={fIdx} className="flex gap-2 items-center text-[10px] text-muted-foreground font-mono">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="font-sans font-medium text-foreground">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-primary/10 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-[9px] text-muted-foreground">
                  <div className="flex gap-4">
                    <span className="bg-primary/5 px-2.5 py-1 rounded text-primary font-bold">{akashicModules[activeModuleIndex].metric}</span>
                    <span className="bg-primary/5 px-2.5 py-1 rounded text-primary-hover font-bold">{akashicModules[activeModuleIndex].latency}</span>
                  </div>
                  <span>SECURITY: AES_256 // SOVEREIGN</span>
                </div>
              </div>
            </div>
          )}

          {/* 3. LIGHT CYAN (Aegean): Blueprint 10-Module Console Panel */}
          {theme === "light-cyan" && (
            <div className="grid lg:grid-cols-12 gap-8 font-space text-left mt-8">
              {/* Module List Selection Console */}
              <div className="lg:col-span-5 flex flex-col gap-2 max-h-[500px] overflow-y-auto pr-2 border-r border-primary/20 scrollbar-thin">
                {akashicModules.map((mod, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveModuleIndex(idx)}
                    className={`px-4 py-3 border text-left transition-all flex items-center justify-between rounded-none ${
                      activeModuleIndex === idx 
                        ? 'border-primary bg-primary/10 text-primary font-bold' 
                        : 'border-primary/10 bg-background hover:bg-secondary/60 text-foreground'
                    }`}
                  >
                    <div>
                      <span className="text-[9px] font-sans font-bold block text-primary/80">MODULE 0{idx + 1}</span>
                      <span className="text-xs uppercase tracking-wider block mt-0.5 font-sans font-semibold">{mod.title}</span>
                    </div>
                    <span className="font-sans text-[10px] font-bold">{activeModuleIndex === idx ? 'Active' : 'Ready'}</span>
                  </button>
                ))}
              </div>
              
              {/* Module Diagnostic Blueprint Schematic */}
              <div className="lg:col-span-7 p-8 border border-primary/20 bg-background flex flex-col justify-between min-h-[480px] relative overflow-hidden rounded-none shadow-sm">
                
                <div className="z-10">
                  <div className="flex justify-between items-center border-b border-primary/25 pb-3">
                    <span className="text-[9px] font-bold text-primary uppercase">Module Specifications</span>
                    <span className="text-[9px] text-[#1e6091] font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#1e6091] rounded-full animate-pulse" />
                      SYSTEM STATUS: ONLINE
                    </span>
                  </div>
                  
                  <h3 className="font-black text-xl text-foreground mt-4 uppercase tracking-tight">{akashicModules[activeModuleIndex].title}</h3>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed font-sans font-medium">{akashicModules[activeModuleIndex].desc}</p>
                  
                  {/* Detailed features bullet matrix */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                    {akashicModules[activeModuleIndex].details.map((feat, fIdx) => (
                      <div key={fIdx} className="flex gap-2 items-center text-[10px] text-muted-foreground font-sans font-medium">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="text-foreground">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-primary/10 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] font-bold text-muted-foreground z-10 font-sans">
                  <div className="flex gap-2">
                    <span className="bg-primary/5 border border-primary/10 px-2 py-0.5 text-primary">{akashicModules[activeModuleIndex].metric}</span>
                    <span className="bg-primary/5 border border-primary/10 px-2 py-0.5 text-[#1a759f]">{akashicModules[activeModuleIndex].latency}</span>
                  </div>
                  <span>Security: Sovereign Standard (AES-256)</span>
                </div>
              </div>
            </div>
          )}

          {/* 4. LIGHT SLATE (Royal Ultramarine): Full interactive 10-module panel */}
          {theme === "light-slate" && (
            <div className="grid lg:grid-cols-12 gap-8 font-sans text-left mt-8">
              <div className="lg:col-span-4 flex flex-col gap-2 max-h-[500px] overflow-y-auto pr-2 border-r border-border/30">
                {akashicModules.map((mod, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveModuleIndex(idx)}
                    className={`px-4 py-3 border text-left transition-all flex items-center justify-between rounded-lg ${
                      activeModuleIndex === idx 
                        ? 'border-primary bg-primary/5 text-primary' 
                        : 'border-border/30 bg-background hover:bg-secondary/50 text-foreground'
                    }`}
                  >
                    <div>
                      <span className="text-[9px] font-bold text-primary/70 uppercase block">Module {String(idx + 1).padStart(2, '0')}</span>
                      <span className="text-xs font-bold block mt-0.5 uppercase tracking-wide">{mod.title}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform ${activeModuleIndex === idx ? 'rotate-90 text-primary' : ''}`} />
                  </button>
                ))}
              </div>
              
              <div className="lg:col-span-8 p-8 border border-border/40 bg-white rounded-xl flex flex-col justify-between min-h-[480px] relative shadow-sm">
                <div>
                  <div className="flex justify-between items-center border-b border-border/30 pb-4">
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Module {String(activeModuleIndex + 1).padStart(2, '0')} — {akashicModules[activeModuleIndex].title}</span>
                    <span className="text-[9px] text-green-600 font-bold uppercase flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Active
                    </span>
                  </div>
                  <h3 className="font-black text-xl text-[#0f172a] mt-4 uppercase tracking-tight">{akashicModules[activeModuleIndex].title}</h3>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed font-medium">{akashicModules[activeModuleIndex].desc}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    {akashicModules[activeModuleIndex].details.map((feat, fIdx) => (
                      <div key={fIdx} className="flex gap-2 items-center text-[10px] text-muted-foreground">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="font-medium text-foreground">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border/30 pt-6 mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[9px] text-muted-foreground">
                  <div className="flex gap-3">
                    <span className="bg-primary/5 border border-primary/15 px-2.5 py-1 rounded text-primary font-bold">{akashicModules[activeModuleIndex].metric}</span>
                    <span className="bg-primary/5 border border-primary/15 px-2.5 py-1 rounded text-primary font-bold">{akashicModules[activeModuleIndex].latency}</span>
                  </div>
                  <span>Security: AES-256 · TLS 1.3 · Sovereign</span>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 07: SECTOR TABS (SOLUTIONS - 4 COMPLETELY DISTINCT LAYOUTS) */}
      {/* ========================================================================= */}
      <section id="solutions" className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-b border-border/10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase font-sans">
            SOLUTIONS
          </span>
          <h2 className={`font-outfit font-black text-3xl md:text-5xl ${textTitleColor()} mt-4 uppercase`}>
            Built for every sector
          </h2>
          <p className="text-xs text-muted-foreground mt-3 font-sans font-medium">
            Click your industry to see what Dhira does for you.
          </p>
        </div>

        {/* 1. DARK MIDNIGHT: Dark glass tab panel */}
        {theme === "dark-midnight" && (
          <>
            <div className="flex flex-wrap justify-center gap-3 mb-12 border-b border-slate-900 pb-6 font-sans">
              {["Smart Cities", "Healthcare", "Banking & Finance", "Education", "Energy & Utility"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                    activeTab === tab 
                      ? "bg-primary text-primary-foreground shadow-lg shadow-black" 
                      : "border border-border bg-secondary/30 hover:bg-secondary/55 text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {activeTab === "Smart Cities" ? (
                sectorContent["Smart Cities"]?.map((card, idx) => (
                  <div key={idx} className="p-8 rounded-2xl border bg-[#0d0f14]/40 border-border/30 card-cyber-glow transition-all flex flex-col justify-between h-64">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">{card.icon}</div>
                        <span className="text-[9px] font-black uppercase text-primary px-2 py-0.5 bg-primary/10 rounded tracking-wider font-mono">{card.tag}</span>
                      </div>
                      <h3 className="font-outfit font-bold text-lg text-foreground mb-3 uppercase tracking-wide">{card.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed font-sans font-medium">{card.desc}</p>
                    </div>
                    <span className="text-[9px] font-bold text-primary uppercase tracking-wider font-mono">DHIRA CAPABILITY</span>
                  </div>
                ))
              ) : (
                <div className="col-span-3 p-10 rounded-2xl border border-dashed border-border/40 bg-[#0d0f14]/50 text-center flex flex-col items-center justify-center font-sans">
                  <HelpCircle className="w-12 h-12 text-primary mb-4 animate-bounce" />
                  <h3 className="font-outfit font-bold text-xl text-foreground uppercase tracking-wide">{activeTab} Blueprints Available</h3>
                  <p className="text-xs text-muted-foreground max-w-lg mt-3 leading-relaxed">
                    Capabilities and case studies for the <span className="text-foreground font-black">{activeTab}</span> sector are managed under the Akashic Platform blueprint. Detailed briefing slide decks are available upon request.
                  </p>
                  <div className="mt-6 flex gap-4 font-mono">
                    <a href="#talk-to-us" className="px-5 py-2.5 rounded bg-primary hover:bg-primary-hover text-white text-[10px] font-bold transition-all shadow-md uppercase tracking-wider">Request Briefing Form</a>
                    <a href="mailto:info@dhira.ai" className="px-5 py-2.5 rounded border border-border bg-background hover:bg-secondary text-foreground text-[10px] font-bold transition-all uppercase tracking-wider">Contact info@dhira.ai</a>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* 2. LIGHT COBALT (Periwinkle): Modern big block tabs and card-periwinkle-lift shadows */}
        {theme === "light-cobalt" && (
          <div className="font-outfit">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
              {["Smart Cities", "Healthcare", "Banking & Finance", "Education", "Energy & Utility"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`p-4 rounded-2xl text-center text-xs font-bold transition-all border shadow-sm ${
                    activeTab === tab 
                      ? "bg-primary text-white border-primary shadow-primary/20" 
                      : "border-primary/10 bg-white hover:bg-primary/5 text-muted-foreground hover:text-primary"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {activeTab === "Smart Cities" ? (
                sectorContent["Smart Cities"]?.map((card, idx) => (
                  <div key={idx} className="p-8 rounded-3xl border border-primary/15 bg-white card-periwinkle-lift transition-all flex flex-col justify-between h-64 shadow-sm">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">{card.icon}</div>
                        <span className="text-[10px] font-black uppercase text-primary tracking-widest font-mono bg-primary/10 px-2 py-0.5 rounded">{card.tag}</span>
                      </div>
                      <h3 className="font-bold text-lg text-[#111116] mb-3">{card.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed font-sans font-medium">{card.desc}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 p-10 rounded-3xl border border-primary/15 bg-white text-center flex flex-col items-center justify-center font-sans shadow-sm">
                  <HelpCircle className="w-10 h-10 text-primary mb-3" />
                  <h3 className="font-bold text-lg text-[#111116] uppercase">{activeTab} Blueprint</h3>
                  <p className="text-xs text-muted-foreground max-w-md mt-2">Briefing playbooks can be dispatched immediately to your email.</p>
                  <div className="mt-6 flex gap-3">
                    <a href="mailto:info@dhira.ai" className="px-6 py-2.5 rounded-full bg-primary text-white text-xs font-bold btn-periwinkle-shadow font-sans">Request Briefing Form</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 3. LIGHT CYAN (Aegean): Minimalist blueprints table row */}
        {theme === "light-cyan" && (
          <div className="font-space">
            <div className="flex overflow-x-auto gap-4 border-b border-primary/20 pb-4 mb-12 scrollbar-thin">
              {["Smart Cities", "Healthcare", "Banking & Finance", "Education", "Energy & Utility"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[11px] font-bold uppercase tracking-widest shrink-0 pb-2.5 px-4 transition-all rounded-none ${
                    activeTab === tab 
                      ? "text-primary border-b-2 border-primary bg-primary/5 font-bold" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
 
            <div className="flex flex-col gap-4 text-left">
              {activeTab === "Smart Cities" ? (
                sectorContent["Smart Cities"]?.map((card, idx) => (
                  <div key={idx} className="relative p-6 border border-primary/20 bg-background hover:bg-secondary/40 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all rounded-none overflow-hidden group shadow-sm">
                    
                    <div className="flex items-center gap-4 z-10">
                      <div className="w-9 h-9 rounded-none border border-primary/20 bg-primary/5 flex items-center justify-center text-primary text-sm font-bold">{card.icon}</div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-black text-sm text-foreground uppercase tracking-wide">{card.title}</h3>
                          <span className="text-[10px] text-muted-foreground">Use Case 0{idx + 1}</span>
                        </div>
                        <span className="text-[10px] font-bold text-primary uppercase mt-0.5 block">{card.tag}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground max-w-md font-sans font-medium md:text-right z-10 leading-relaxed">{card.desc}</p>
                  </div>
                ))
              ) : (
                <div className="relative p-8 border border-primary/20 bg-background text-center rounded-none overflow-hidden shadow-sm">
                  
                  <h3 className="font-black text-sm uppercase text-foreground">Akashic Solution Profile: {activeTab}</h3>
                  <p className="text-xs text-muted-foreground max-w-md mx-auto mt-3 font-sans font-medium leading-relaxed">To schedule an audit, please open a communication ticket with the platform administrators.</p>
                  <a href="mailto:info@dhira.ai" className="inline-block mt-5 px-6 py-2.5 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary-hover transition-colors">EMAIL DIRECTORY</a>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 4. LIGHT SLATE (Royal Ultramarine): Premium sector tabs with rounded buttons */}
        {theme === "light-slate" && (
          <div className="font-sans">
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {["Smart Cities", "Healthcare", "Banking & Finance", "Education", "Energy & Utility"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
                    activeTab === tab 
                      ? "bg-primary text-white border-primary shadow-md" 
                      : "border-border bg-background hover:bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              {activeTab === "Smart Cities" ? (
                sectorContent["Smart Cities"]?.map((card, idx) => (
                  <div key={idx} className="p-6 border border-border/40 bg-white rounded-xl hover:border-primary/30 hover:shadow-md transition-all flex flex-col justify-between h-56 shadow-sm">
                    <div>
                      <span className="text-[9px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded-full inline-block">{card.tag}</span>
                      <h3 className="font-bold text-sm text-[#0f172a] mt-3 mb-2 uppercase tracking-wide">{card.title}</h3>
                      <p className="text-xs text-muted-foreground font-sans leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 p-10 border border-border/30 rounded-xl bg-secondary/10 text-center flex flex-col items-center">
                  <HelpCircle className="w-10 h-10 text-primary mb-3" />
                  <h3 className="font-bold text-base text-[#0f172a] uppercase tracking-wide">{activeTab} Solutions</h3>
                  <p className="text-xs text-muted-foreground max-w-md mx-auto mt-2 font-sans leading-relaxed">Sector briefing materials are available on request. Contact our team directly.</p>
                  <a href="mailto:info@dhira.ai" className="inline-block mt-5 px-6 py-2.5 rounded-full bg-primary text-white text-xs font-bold hover:bg-primary-hover transition-all">Request Briefing</a>
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* SECTION 08: IMPACT STORIES (4 COMPLETELY DISTINCT LAYOUTS) */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-24 px-6 bg-secondary/10 border-b border-border/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest text-primary uppercase font-sans">
              IMPACT STORIES
            </span>
            <h2 className={`font-outfit font-black text-3xl md:text-5xl ${textTitleColor()} mt-4 uppercase`}>
              Built for Real Problems. Proven on Real Platforms.
            </h2>
          </div>

          {/* 1. DARK MIDNIGHT: Staggered glowing digits panel */}
          {theme === "dark-midnight" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center font-sans">
              {[
                { value: "2B+", desc: "Vaccinations on CoWIN / U-WIN" },
                { value: "5B+", desc: "Learning sessions on DIKSHA" },
                { value: "300K", desc: "Foreign employers on eMigrate" },
                { value: "10M+", desc: "SHGs managed on LokOS" },
                { value: "18M+", desc: "Youth on Yuva / My Bharat" }
              ].map((stat, idx) => (
                <div key={idx} className="p-6 rounded-2xl border bg-background/60 border-border/15 flex flex-col justify-center shadow-lg shadow-black/60 card-cyber-glow transition-all">
                  <span className="font-outfit font-black text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{stat.value}</span>
                  <span className="text-[10px] text-muted-foreground mt-3 font-bold uppercase tracking-wider font-mono">{stat.desc}</span>
                </div>
              ))}
            </div>
          )}

          {/* 2. LIGHT COBALT (Periwinkle): Large vertical columns with card-periwinkle-lift shadows */}
          {theme === "light-cobalt" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center font-outfit">
              {[
                { value: "2B+", desc: "Vaccinations on CoWIN / U-WIN" },
                { value: "5B+", desc: "Learning sessions on DIKSHA" },
                { value: "300K", desc: "Foreign employers on eMigrate" },
                { value: "10M+", desc: "SHGs managed on LokOS" },
                { value: "18M+", desc: "Youth on Yuva / My Bharat" }
              ].map((stat, idx) => (
                <div key={idx} className="p-8 rounded-3xl border border-primary/15 bg-white card-periwinkle-lift transition-all flex flex-col justify-center h-48 shadow-sm">
                  <span className="font-black text-4xl text-primary">{stat.value}</span>
                  <span className="text-xs text-muted-foreground mt-4 font-sans font-semibold leading-relaxed">{stat.desc}</span>
                </div>
              ))}
            </div>
          )}

          {/* 3. LIGHT CYAN (Aegean): Blueprint data columns */}
          {theme === "light-cyan" && (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 font-space text-left">
              {[
                { value: "2B+", desc: "Vaccinations on CoWIN / U-WIN" },
                { value: "5B+", desc: "Learning sessions on DIKSHA" },
                { value: "300K", desc: "Foreign employers on eMigrate" },
                { value: "10M+", desc: "SHGs managed on LokOS" },
                { value: "18M+", desc: "Youth on Yuva / My Bharat" }
              ].map((stat, idx) => (
                <div key={idx} className="p-6 border border-primary/20 bg-background hover:bg-secondary/30 flex flex-col justify-between h-44 rounded-none transition-all">
                  <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Platform Scale</span>
                    <span className="text-[8px] text-green-600 font-bold uppercase">Verified</span>
                  </div>
                  
                  <span className="text-3xl font-black text-primary font-mono my-2">{stat.value}</span>
                  
                  <span className="text-[10px] text-muted-foreground font-sans font-medium uppercase tracking-wider leading-snug">
                    {stat.desc}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* 4. LIGHT SLATE (Royal Ultramarine): Simple slate-bordered grid blocks */}
          {theme === "light-slate" && (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center font-mono">
              {[
                { value: "2B+", desc: "Vaccinations on CoWIN / U-WIN" },
                { value: "5B+", desc: "Learning sessions on DIKSHA" },
                { value: "300K", desc: "Foreign employers on eMigrate" },
                { value: "10M+", desc: "SHGs managed on LokOS" },
                { value: "18M+", desc: "Youth on Yuva / My Bharat" }
              ].map((stat, idx) => (
                <div key={idx} className="p-6 border border-border bg-background">
                  <span className="text-2xl font-bold text-[#0f172a] block">{stat.value}</span>
                  <span className="text-[8px] text-muted-foreground font-sans block mt-2">{stat.desc}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 09: WHY DHIRA (USP STRIP - 4 COMPLETELY DISTINCT LAYOUTS) */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto border-b border-border/10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full font-sans">
            WHY ORGANIZATIONS CHOOSE DHIRA
          </span>
          <h2 className={`font-outfit font-black text-3xl md:text-5xl ${textTitleColor()} mt-4 uppercase`}>
            We deliver fast. We secure completely. We scale with you.
          </h2>
        </div>

        {/* 1. DARK MIDNIGHT: Matrix of 5 dark card blocks with cyber icons */}
        {theme === "dark-midnight" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 font-sans text-left">
            {[
              { icon: <Zap className="w-5 h-5 text-primary" />, title: "⚡ Fast GTM", desc: "Proof of Concept to delivery in just weeks not months. No bloated timelines." },
              { icon: <Shield className="w-5 h-5 text-primary" />, title: "🔒 Security", desc: "On-premises deployment, data sovereignty, and RBAC built into every module." },
              { icon: <Sparkles className="w-5 h-5 text-primary" />, title: "🤖 AI-Native", desc: "AI woven into every layer — not bolted on. From NLP to predictive ML." },
              { icon: <MessageSquare className="w-5 h-5 text-primary" />, title: "📡 Communications", desc: "One dedicated team. Clear milestones. Ministry-tested delivery rigor." },
              { icon: <Layers className="w-5 h-5 text-primary" />, title: "🔁 Modular", desc: "Start with one module. Scale to the full platform. No lock-in." }
            ].map((usp, idx) => (
              <div key={idx} className="p-6 rounded-xl border bg-secondary/20 border-border/20 card-cyber-glow transition-all flex flex-col justify-between h-56">
                <div>
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-4 text-[#06b6d4]">{usp.icon}</div>
                  <h3 className="font-outfit font-bold text-sm text-foreground mb-2 uppercase tracking-wide">{usp.title}</h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed font-medium">{usp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. LIGHT COBALT (Periwinkle): Vertical step-based cards with card-periwinkle-lift shadows */}
        {theme === "light-cobalt" && (
          <div className="grid md:grid-cols-5 gap-6 font-outfit text-left">
            {[
              { title: "Fast GTM", desc: "Proof of Concept to delivery in just weeks not months. No bloated timelines." },
              { title: "Enterprise Security", desc: "On-premises deployment, data sovereignty, and RBAC built into every module." },
              { title: "AI-Native Methods", desc: "AI woven into every layer — not bolted on. From NLP to predictive ML." },
              { title: "Smooth Comms", desc: "One dedicated team. Clear milestones. Ministry-tested delivery rigor." },
              { title: "Modular & Scalable", desc: "Start with one module. Scale to the full platform. No lock-in." }
            ].map((usp, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-primary/15 bg-white card-periwinkle-lift transition-all flex flex-col justify-between h-56 shadow-sm">
                <span className="text-primary font-mono font-bold text-xs bg-primary/10 px-2.5 py-1 rounded self-start">0{idx + 1}</span>
                <div className="mt-4">
                  <h3 className="font-bold text-base text-[#111116] mb-2">{usp.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans font-medium">{usp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

          {/* 3. LIGHT CYAN (Aegean): Neo-brutalist column list with thick borders */}
          {theme === "light-cyan" && (
            <div className="grid md:grid-cols-5 gap-4 font-space text-left">
              {[
                { title: "Fast GTM", desc: "Proof of Concept to delivery in just weeks not months. No bloated timelines." },
                { title: "Sovereign Setup", desc: "On-premises deployment, data sovereignty, and RBAC built into every module." },
                { title: "AI Core Mesh", desc: "AI woven into every layer — not bolted on. From NLP to predictive ML." },
                { title: "Rigorous Delivery", desc: "One dedicated team. Clear milestones. Ministry-tested delivery rigor." },
                { title: "Modular Nodes", desc: "Start with one module. Scale to the full platform. No lock-in." }
              ].map((usp, idx) => (
                <div key={idx} className="relative p-6 border border-primary/20 bg-background hover:bg-secondary/40 transition-all flex flex-col justify-between h-60 rounded-none overflow-hidden group shadow-sm">
                  
                  <div className="flex justify-between items-center text-[10px] font-bold text-primary border-b border-primary/10 pb-2">
                    <span>Capability 0{idx + 1}</span>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="font-black text-sm uppercase text-foreground mb-2 leading-tight">{usp.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-sans font-medium">{usp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

        {/* 4. LIGHT SLATE (Royal Ultramarine): Premium USP card grid with icons */}
        {theme === "light-slate" && (
          <div className="grid md:grid-cols-5 gap-4 font-sans text-left">
            {[
              { icon: <Zap className="w-4 h-4" />, title: "Fast GTM", desc: "Proof of Concept to delivery in just weeks not months. No bloated timelines." },
              { icon: <Shield className="w-4 h-4" />, title: "Enterprise Security", desc: "On-premises deployment, data sovereignty, and RBAC built into every module." },
              { icon: <Sparkles className="w-4 h-4" />, title: "AI-Native", desc: "AI woven into every layer — not bolted on. From NLP to predictive ML." },
              { icon: <MessageSquare className="w-4 h-4" />, title: "Smooth Comms", desc: "One dedicated team. Clear milestones. Ministry-tested delivery rigor." },
              { icon: <Layers className="w-4 h-4" />, title: "Modular", desc: "Start with one module. Scale to the full platform. No lock-in." }
            ].map((usp, idx) => (
              <div key={idx} className="p-6 border border-border/40 bg-white rounded-xl shadow-sm hover:border-primary/30 hover:shadow-md transition-all flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {usp.icon}
                </div>
                <h3 className="font-bold text-sm text-[#0f172a] uppercase tracking-wide">{usp.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-medium">{usp.desc}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: CUSTOMER TESTIMONIALS (4 COMPLETELY DISTINCT LAYOUTS) */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-24 px-6 max-w-5xl mx-auto border-b border-border/10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full font-sans">
            VOICES FROM THE FIELD
          </span>
          <h2 className={`font-outfit font-black text-3xl md:text-5xl ${textTitleColor()} mt-4 uppercase`}>
            What Customers Say
          </h2>
          <p className="text-xs text-muted-foreground mt-4 font-sans font-medium">
            Leaders across PSUs, banks and enterprises trust Dhira to run their data backbone.
          </p>
        </div>

        {/* 1. DARK MIDNIGHT: Dark speech bubble quote cards with glowing avatar details */}
        {theme === "dark-midnight" && (
          <div className="grid md:grid-cols-3 gap-6 font-sans text-left">
            {[
              { quote: "“Dhira gave us a single source of truth across 400 facilities. Reporting that took three days now runs before our morning coffee.”", author: "— Director, State Health Analytics", context: "Public Health · 400+ Facilities" },
              { quote: "“We replaced three ETL vendors with Akashic. One pipeline, one team, one bill. The maths was honestly embarrassing in our favour.”", author: "— CTO, Mid-size NBFC", context: "Banking · Mumbai" },
              { quote: "“Twelve thousand sensors, fully governed, in-country. The Dhira team behaves like an extension of our engineering org, not a vendor.”", author: "— Commissioner, Smart City Mission", context: "Smart Cities · Tier-1" }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl border bg-secondary/40 border-border/30 card-cyber-glow flex flex-col justify-between h-64">
                <p className="text-xs text-foreground/90 italic leading-relaxed">{item.quote}</p>
                <div className="mt-4 flex flex-col border-t border-border/15 pt-4">
                  <span className="text-xs font-bold text-foreground">{item.author}</span>
                  <span className="text-[10px] text-muted-foreground mt-0.5 font-mono">{item.context}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. LIGHT COBALT (Periwinkle): High contrast blockquotes with card-periwinkle-lift shadows */}
        {theme === "light-cobalt" && (
          <div className="grid md:grid-cols-3 gap-6 font-outfit text-left">
            {[
              { quote: "“Dhira gave us a single source of truth across 400 facilities. Reporting that took three days now runs before our morning coffee.”", author: "Director, State Health", context: "Public Health" },
              { quote: "“We replaced three ETL vendors with Akashic. One pipeline, one team, one bill. The maths was honestly embarrassing in our favour.”", author: "CTO, Mid-size NBFC", context: "Banking · Mumbai" },
              { quote: "“Twelve thousand sensors, fully governed, in-country. The Dhira team behaves like an extension of our engineering org, not a vendor.”", author: "Commissioner", context: "Smart Cities Mission" }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-primary/15 bg-white card-periwinkle-lift flex flex-col justify-between h-64 shadow-sm">
                <p className="text-sm text-[#111116] italic font-semibold leading-relaxed font-sans">“{item.quote.replace(/[“”]/g, '')}”</p>
                <div className="mt-4 flex flex-col font-sans border-t border-primary/10 pt-4">
                  <span className="text-xs font-bold text-primary">{item.author}</span>
                  <span className="text-[10px] text-muted-foreground">{item.context}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. LIGHT CYAN (Aegean): Serif quotes side-by-side with line separators */}
        {theme === "light-cyan" && (
          <div className="grid md:grid-cols-3 gap-8 font-space items-stretch text-left">
            {[
              { quote: "“Dhira gave us a single source of truth across 400 facilities. Reporting that took three days now runs before our morning coffee.”", author: "Director, State Health Analytics", context: "Public Health" },
              { quote: "“We replaced three ETL vendors with Akashic. One pipeline, one team, one bill. The maths was honestly embarrassing in our favour.”", author: "CTO, Mid-size NBFC", context: "Banking · Mumbai" },
              { quote: "“Twelve thousand sensors, fully governed, in-country. The Dhira team behaves like an extension of our engineering org, not a vendor.”", author: "Commissioner, Smart City Mission", context: "Smart Cities" }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 border border-primary/20 bg-background hover:bg-secondary/40 flex flex-col justify-between h-64 rounded-none overflow-hidden transition-all group shadow-sm">
                
                <div className="flex justify-between items-center border-b border-primary/10 pb-2 text-[10px] font-bold text-primary z-10">
                  <span>Client Feedback 0{idx + 1}</span>
                  <span className="text-[#10b981] font-sans">Verified</span>
                </div>
                
                <p className="text-xs text-foreground font-sans font-medium italic leading-relaxed my-4 z-10">
                  {item.quote}
                </p>
                
                <div className="border-t border-primary/10 pt-3 flex justify-between items-end text-[10px] font-sans font-bold text-muted-foreground z-10">
                  <div className="flex flex-col">
                    <span className="text-foreground">{item.author.toUpperCase()}</span>
                    <span className="text-[9px] text-muted-foreground font-normal mt-0.5">{item.context.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 4. LIGHT SLATE (Royal Ultramarine): Premium testimonial cards with avatar initials */}
        {theme === "light-slate" && (
          <div className="grid md:grid-cols-3 gap-6 font-sans text-left">
            {[
              { quote: "Dhira gave us a single source of truth across 400 facilities. Reporting that took three days now runs before our morning coffee.", author: "Director, State Health Analytics", context: "Public Health" },
              { quote: "We replaced three ETL vendors with Akashic. One pipeline, one team, one bill. The maths was honestly embarrassing in our favour.", author: "CTO, Mid-size NBFC", context: "Banking · Mumbai" },
              { quote: "Twelve thousand sensors, fully governed, in-country. The Dhira team behaves like an extension of our engineering org, not a vendor.", author: "Commissioner, Smart City Mission", context: "Smart Cities" }
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-border/40 bg-white rounded-xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex flex-col justify-between h-64">
                <p className="text-sm text-[#0f172a] italic leading-relaxed font-medium">“{item.quote}”</p>
                <div className="border-t border-border/30 pt-4 mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#0f172a] block">{item.author}</span>
                    <span className="text-[9px] text-muted-foreground">{item.context}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* SECTION 12: FINAL CTA & CONTACT FORMS (4 COMPLETELY DISTINCT LAYOUTS) */}
      {/* ========================================================================= */}
      <section id="talk-to-us" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        {theme === "dark-midnight" && (
          <div className="p-8 md:p-16 rounded-3xl border bg-[#0d0f14]/50 border-border/25 backdrop-blur-xl text-center max-w-5xl mx-auto font-sans card-cyber-glow">
            <h2 className="font-outfit font-black text-3xl md:text-6xl text-foreground leading-tight uppercase">
              Ready to see what <br className="hidden md:block" /> your data can do? Let's talk.
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
              <div className="p-6 md:p-8 rounded-xl border border-border/30 bg-background/50 flex flex-col justify-between">
                <div>
                  <h3 className="font-outfit font-bold text-lg text-foreground uppercase tracking-wide font-mono text-primary">// 🏛️ FOR GOVERNMENT</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed font-medium">
                    Request a Ministry Briefing. Schedule a dedicated session for your Ministry or department. We cover platform capabilities, DPI track record, and deployment options.
                  </p>
                  <div className="flex flex-col gap-3 mt-6">
                    <input type="text" placeholder="Ministry / Department Name" className="px-4 py-2.5 rounded bg-[#030303]/60 border border-border text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-foreground font-sans" />
                    <input type="email" placeholder="Official Email Address" className="px-4 py-2.5 rounded bg-[#030303]/60 border border-border text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-foreground font-sans" />
                  </div>
                </div>
                <button className="mt-6 w-full py-3 rounded bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-bold transition-all shadow-md uppercase font-mono">Request Briefing — Ministry Form</button>
              </div>

              <div className="p-6 md:p-8 rounded-xl border border-border/30 bg-background/50 flex flex-col justify-between">
                <div>
                  <h3 className="font-outfit font-bold text-lg text-foreground uppercase tracking-wide font-mono text-primary">// 🏢 FOR ENTERPRISE</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed font-medium">
                    Schedule a Demo or 6-Week Pilot. See Akashic working on your actual data. We offer a structured 6-week pilot with defined outcomes — so you evaluate on real results.
                  </p>
                  <div className="flex flex-col gap-3 mt-6">
                    <input type="text" placeholder="Company Name" className="px-4 py-2.5 rounded bg-[#030303]/60 border border-border text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-foreground font-sans" />
                    <input type="email" placeholder="Work Email Address" className="px-4 py-2.5 rounded bg-[#030303]/60 border border-border text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-foreground font-sans" />
                  </div>
                </div>
                <button className="mt-6 w-full py-3 rounded bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-bold transition-all shadow-md uppercase font-mono">Let's Talk — Enterprise Form</button>
              </div>
            </div>
          </div>
        )}

        {theme === "light-cobalt" && (
          <div className="p-10 rounded-[2.5rem] border border-primary/20 bg-primary/5 text-center max-w-5xl mx-auto font-outfit card-periwinkle-lift shadow-md">
            <h2 className="font-black text-3xl md:text-5xl text-[#111116] uppercase leading-none">READY FOR REVOLUTION?</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-xl mx-auto font-sans font-medium">Open a dialogue channel with Dhira advisory representatives today.</p>
            <div className="grid md:grid-cols-2 gap-8 mt-10 text-left font-sans">
              <div className="p-8 rounded-3xl bg-white border border-primary/10 flex flex-col justify-between shadow-sm hover:border-primary/30 transition-all">
                <div>
                  <span className="text-xs font-black text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full font-outfit">🏛️ GOVERNMENT CORE</span>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed font-medium">Official briefings covering secure frameworks, in-country hosting, and digital public infrastructure.</p>
                  <input type="email" placeholder="Government official email address" className="mt-6 w-full px-4 py-3 rounded-xl border border-primary/15 bg-secondary/35 text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-foreground transition-all" />
                </div>
                <button className="mt-6 w-full py-3 rounded-xl bg-primary text-white text-xs font-black uppercase tracking-wider btn-periwinkle-shadow">Request Government Slot</button>
              </div>
              <div className="p-8 rounded-3xl bg-white border border-primary/10 flex flex-col justify-between shadow-sm hover:border-primary/30 transition-all">
                <div>
                  <span className="text-xs font-black text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full font-outfit">🏢 ENTERPRISE PILOT</span>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed font-medium">Verify platform capabilities during a structured six-week custom telemetry and workflow audit.</p>
                  <input type="email" placeholder="Enterprise corporate email" className="mt-6 w-full px-4 py-3 rounded-xl border border-primary/15 bg-secondary/35 text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-foreground transition-all" />
                </div>
                <button className="mt-6 w-full py-3 rounded-xl bg-[#111116] text-white text-xs font-black uppercase tracking-wider hover:bg-[#1f1f28] transition-all shadow-md">Schedule Enterprise Pilot</button>
              </div>
            </div>
          </div>
        )}

        {/* 3. LIGHT CYAN (Aegean): Clean contact form */}
        {theme === "light-cyan" && (
          <div className="border border-primary/20 p-8 md:p-12 bg-background font-space max-w-5xl mx-auto rounded-none">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 text-left">
                <span className="text-xs font-bold text-primary tracking-widest uppercase">Get in Touch</span>
                <h2 className="font-black text-3xl text-foreground uppercase tracking-tight mt-4 leading-tight">Ready to Transform Your Data?</h2>
                <p className="text-xs text-muted-foreground mt-4 leading-relaxed font-sans font-medium">Our team will reach out within 24 hours to schedule a briefing or demo session tailored to your needs.</p>
              </div>
              <div className="lg:col-span-7 flex flex-col gap-4 font-sans text-left">
                <div className="p-6 border border-primary/20 bg-background flex flex-col gap-3 rounded-none">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">For Government</span>
                  <p className="text-[10px] text-muted-foreground font-sans leading-relaxed">Request a Ministry Briefing covering platform capabilities, DPI track record, and secure deployment options.</p>
                  <input type="text" placeholder="Department / Ministry Name" className="px-4 py-2.5 rounded-none border border-primary/20 bg-background text-xs focus:outline-none focus:border-primary text-foreground font-sans" />
                  <input type="email" placeholder="Official Email Address" className="px-4 py-2.5 rounded-none border border-primary/20 bg-background text-xs focus:outline-none focus:border-primary text-foreground font-sans" />
                  <button className="px-4 py-3 bg-[#0f172a] text-white text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all rounded-none">Request Government Briefing</button>
                </div>
                
                <div className="p-6 border border-primary/20 bg-background flex flex-col gap-3 rounded-none">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">For Enterprise</span>
                  <p className="text-[10px] text-muted-foreground font-sans leading-relaxed">See Akashic on your data. Structured 6-week pilot with defined outcomes — evaluate on real results.</p>
                  <input type="text" placeholder="Company Name" className="px-4 py-2.5 rounded-none border border-primary/20 bg-background text-xs focus:outline-none focus:border-primary text-foreground font-sans" />
                  <input type="email" placeholder="Work Email Address" className="px-4 py-2.5 rounded-none border border-primary/20 bg-background text-xs focus:outline-none focus:border-primary text-foreground font-sans" />
                  <button className="px-4 py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-primary-hover transition-all rounded-none">Schedule Enterprise Pilot</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {theme === "light-slate" && (
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-black text-3xl md:text-5xl text-[#0f172a] uppercase leading-tight">
                Ready to see what<br />your data can do?
              </h2>
              <p className="text-sm text-muted-foreground mt-4 max-w-xl mx-auto font-sans font-medium">
                Open a dialogue with our advisory team. We respond within 24 hours.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 font-sans text-left">
              <div className="p-8 border border-border/40 bg-white rounded-xl shadow-sm hover:border-primary/30 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full inline-block mb-4">For Government</span>
                  <h3 className="font-bold text-base text-[#0f172a] mb-2">Ministry Briefing</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    Request a dedicated session for your Ministry or department. We cover platform capabilities, DPI track record, and secure deployment options.
                  </p>
                  <div className="flex flex-col gap-3 mt-6">
                    <input type="text" placeholder="Ministry / Department Name" className="px-4 py-3 border border-border/50 rounded-lg text-xs focus:outline-none focus:border-primary text-foreground" />
                    <input type="email" placeholder="Official Email Address" className="px-4 py-3 border border-border/50 rounded-lg text-xs focus:outline-none focus:border-primary text-foreground" />
                  </div>
                </div>
                <button className="mt-6 w-full py-3 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-bold transition-all shadow-sm uppercase tracking-wider">
                  Request Briefing
                </button>
              </div>
              <div className="p-8 border border-border/40 bg-white rounded-xl shadow-sm hover:border-primary/30 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full inline-block mb-4">For Enterprise</span>
                  <h3 className="font-bold text-base text-[#0f172a] mb-2">6-Week Pilot</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                    See Akashic working on your actual data. Structured 6-week pilot with defined outcomes — evaluate on real results, not promises.
                  </p>
                  <div className="flex flex-col gap-3 mt-6">
                    <input type="text" placeholder="Company Name" className="px-4 py-3 border border-border/50 rounded-lg text-xs focus:outline-none focus:border-primary text-foreground" />
                    <input type="email" placeholder="Work Email Address" className="px-4 py-3 border border-border/50 rounded-lg text-xs focus:outline-none focus:border-primary text-foreground" />
                  </div>
                </div>
                <button className="mt-6 w-full py-3 rounded-lg bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-bold transition-all shadow-sm uppercase tracking-wider">
                  Schedule Pilot
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* UNIFIED FOOTER (SHARES THE SAME CONTENT STRUCTURE, STYLE VARIES BY THEME) */}
      {/* ========================================================================= */}
      <footer 
        id="footer" 
        className={`relative z-10 border-t pt-16 pb-32 transition-colors duration-500 text-left ${
          theme === "dark-midnight" 
            ? "bg-background/90 border-border/20" 
            : theme === "light-cobalt" 
            ? "bg-secondary border-border" 
            : theme === "light-cyan" 
            ? "bg-background border-foreground/30" 
            : "bg-[#f8fafc] border-border/40"
        }`}
      >
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
            <span className="text-[7px] tracking-[0.22em] text-muted-foreground uppercase mt-2 font-bold font-sans">
              Digital Human Interfaces & Robotic Agents
            </span>
            <p className="text-xs text-muted-foreground mt-4 leading-relaxed font-sans font-medium">
              DHIRA · Intelligent systems for governments and enterprises. From raw data to live decisions.
            </p>
            <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-[#10b981]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
              Akashic Core Operational
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-outfit font-bold text-sm text-foreground uppercase tracking-widest mb-4">
              Platform Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-muted-foreground font-sans font-semibold">
              <li><a href="#platform" className="hover:text-primary transition-colors">Platform Overview</a></li>
              <li><a href="#solutions" className="hover:text-primary transition-colors">Offerings</a></li>
              <li><a href="#solutions" className="hover:text-primary transition-colors">Sectors</a></li>
              <li><a href="#talk-to-us" className="hover:text-primary transition-colors">Briefing Request</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-outfit font-bold text-sm text-foreground uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-muted-foreground font-semibold font-sans">
              <li className="hover:text-primary transition-colors cursor-pointer">LinkedIn</li>
              <li className="hover:text-primary transition-colors cursor-pointer">X (Twitter)</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Careers</li>
            </ul>
          </div>

          {/* Registered Office column */}
          <div>
            <h4 className="font-outfit font-bold text-sm text-foreground uppercase tracking-widest mb-4">
              Office Locations
            </h4>
            <address className="text-xs text-muted-foreground not-italic leading-relaxed flex flex-col gap-2 font-sans font-medium">
              <span>New York · Hyderabad · Bangalore</span>
              <span className="mt-2 text-foreground font-black">info@dhira.ai</span>
            </address>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-medium text-muted-foreground font-sans">
          <span>
            Copyright © 2026 Dhira
          </span>
          <div className="flex gap-6">
            <span>Startup India Badge</span>
            <span>MSME Certificate</span>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* THEME STYLE VARIATION BOTTOM SWITCHER */}
      {/* ========================================================================= */}
      <div className="fixed bottom-0 left-0 w-full z-50 border-t border-border/30 bg-background/95 backdrop-blur-xl py-4 flex flex-wrap items-center justify-center gap-3 px-6 shadow-2xl font-sans">
        <span className="text-[10px] font-black text-foreground/80 hidden sm:inline mr-2 uppercase tracking-widest">
          Design Variants:
        </span>
        <button 
          onClick={() => setTheme("dark-midnight")} 
          className={`px-4 py-2 rounded-full text-[10px] font-black transition-all flex items-center gap-1.5 uppercase tracking-wider ${
            theme === "dark-midnight" 
              ? "bg-primary text-primary-foreground shadow-lg" 
              : "border border-border bg-secondary hover:bg-secondary/70 text-foreground"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          1. Midnight Slate (Dark Theme)
        </button>
        <button 
          onClick={() => setTheme("light-cobalt")} 
          className={`px-4 py-2 rounded-full text-[10px] font-black transition-all flex items-center gap-1.5 uppercase tracking-wider ${
            theme === "light-cobalt" 
              ? "bg-primary text-primary-foreground shadow-lg" 
              : "border border-border bg-secondary hover:bg-secondary/70 text-foreground"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
          2. Periwinkle Glow (Light Theme A)
        </button>
        <button 
          onClick={() => setTheme("light-cyan")} 
          className={`px-4 py-2 rounded-full text-[10px] font-black transition-all flex items-center gap-1.5 uppercase tracking-wider ${
            theme === "light-cyan" 
              ? "bg-primary text-primary-foreground shadow-lg" 
              : "border border-border bg-secondary hover:bg-secondary/70 text-foreground"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
          3. Aegean Steel (Light Theme B)
        </button>
        <button 
          onClick={() => setTheme("light-slate")} 
          className={`px-4 py-2 rounded-full text-[10px] font-black transition-all flex items-center gap-1.5 uppercase tracking-wider ${
            theme === "light-slate" 
              ? "bg-primary text-primary-foreground shadow-lg" 
              : "border border-border bg-secondary hover:bg-secondary/70 text-foreground"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
          4. Royal Ultramarine (Light Theme C)
        </button>
      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE CHATBOT FLOATING ACTION (bottom-right corner) */}
      {/* ========================================================================= */}
      <div className="fixed bottom-20 right-6 z-40 font-sans">
        <AnimatePresence>
          {chatbotOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-80 h-[400px] rounded-2xl shadow-2xl border border-border/30 mb-4 flex flex-col justify-between overflow-hidden glass-effect"
            >
              <div className="p-4 bg-primary text-primary-foreground flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center font-bold text-xs">Q</div>
                  <div>
                    <span className="text-xs font-bold block">Akashic Q&A</span>
                    <span className="text-[8px] opacity-85 block">Source-Grounded QA Assistant</span>
                  </div>
                </div>
                <button onClick={() => setChatbotOpen(false)} className="text-primary-foreground hover:opacity-80 focus:outline-none">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 text-xs text-left">
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
                          <span key={cIdx} className="flex items-center gap-0.5">📚 {cit}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-3 border-t border-border/20 flex items-center gap-2 bg-background/50">
                <input 
                  type="text" 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask a question..."
                  className="flex-1 px-3 py-1.5 rounded-full border border-border bg-secondary/50 focus:outline-none focus:border-primary text-[11px] text-foreground"
                />
                <button onClick={handleSendMessage} className="p-1.5 rounded-full bg-primary text-primary-foreground hover:bg-[#2563eb] focus:outline-none shadow-sm">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setChatbotOpen(!chatbotOpen)}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground flex items-center justify-center shadow-2xl border border-primary/25 transition-all hover:scale-105"
        >
          {chatbotOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </button>
      </div>
    </div>
  )
}
