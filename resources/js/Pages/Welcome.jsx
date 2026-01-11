import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Welcome() {
    // --- SKILLS DATA ---
    const skills = [
        { name: "React / Frontend", level: 85, color: "bg-indigo-500" },
        { name: "Laravel / Backend", level: 75, color: "bg-blue-600" },
        { name: "UI Design (Figma)", level: 70, color: "bg-purple-500" },
        { name: "MySQL / Data Management", level: 70, color: "bg-cyan-500" },
    ];

    // --- CAROUSEL STATE (LumiChat) ---
    const [activeSlide, setActiveSlide] = useState(0);
    const lumiImages = [
        "/images/lumichat/lumichat.png", 
        "/images/lumichat/lumichat2.png", 
        "/images/lumichat/lumichat3.png", 
        "/images/lumichat/lumichat4.png", 
        "/images/lumichat/lumichat5.png", 
        "/images/lumichat/lumichat6.png", 
        "/images/lumichat/lumichat7.png", 
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % lumiImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [lumiImages.length]);

    // --- SMOOTH GLIDE SCROLL FUNCTION ---
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Account for fixed header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // --- PROJECTS DATA ---
    const latestProject = {
        title: "LumiChat",
        github: "https://github.com/Nyzo0310/Lumichat",
        description: "LumiCHAT is a mental health support chatbot designed to help students by providing real-time counseling, self-assessment tools, and appointment scheduling. It's integrated with a user-friendly interface that allows students to easily access mental health resources, talk to a counselor, and track their emotional well-being."
    };

    const pastProjects = [
        {
            title: "Flight Booking System",
            subtitle: "Previous System",
            github: "https://github.com/Nyzo0310/Skyline_Airways-v2.5",
            description: "A platform that allows users to search for flights, select destinations, and book tickets. It provides a streamlined process for choosing travel dates and passenger details.",
            tags: ["Vite", "System Design"],
            image: "/images/skyline-airways.png", 
        },
        {
            title: "Refilling Monitoring",
            subtitle: "Previous System",
            github: "https://github.com/Nyzo0310/Refilling-Station-Sales-Monitoring-System",
            description: "Tracks the status of refilling stations, monitoring stock levels and usage rates to prevent shortages and improve operational efficiency.",
            tags: ["MySQL", "Laravel"],
            image: "/images/refilling.png",
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-slate-300 selection:bg-indigo-500/30 font-['Inter',sans-serif] scroll-smooth">
            <Head title="Earl Patrick | System Designer" />

            {/* --- NAVIGATION --- */}
            <nav className="fixed top-0 z-50 w-full bg-[#050505]/60 backdrop-blur-xl border-b border-white/[0.03]">
                <div className="mx-auto max-w-7xl px-8 py-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black font-black italic shadow-lg">E.</div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold tracking-tight text-white uppercase leading-none">Earl Sepida</span>
                            <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mt-1">Designer & Dev</span>
                        </div>
                    </div>

                    <div className="hidden md:flex gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
                        <button onClick={() => scrollToSection('work')} className="hover:text-white transition">Work</button>
                        <button onClick={() => scrollToSection('skills')} className="hover:text-white transition">Skills</button>
                    </div>

                    <div className="flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative h-2 w-2 rounded-full bg-emerald-500"></span>
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-500/80">Available</span>
                    </div>
                </div>
            </nav>

            <main>
                {/* --- HERO SECTION --- */}
                <section className="relative px-8 pt-48 pb-24 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
                        {/* Adjusted the glow to follow the new height */}
                        <div className="absolute top-[0%] left-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />
                    </div>

                    <div className="mx-auto max-w-5xl text-center">
                        {/* Reduced mb-12 to mb-8 for tighter typography flow */}
                        <h1 className="text-6xl md:text-[85px] font-bold tracking-tight text-white leading-[1.1] mb-8">
                            Crafting Logic. <br /> 
                            <span className="text-slate-500 font-medium">Shaping Design.</span>
                        </h1>
                        
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mx-auto max-w-3xl">
                            <p className="text-lg md:text-xl leading-relaxed text-slate-400">
                                I'm <span className="text-white font-semibold">Earl Patrick Ramos-Sepida</span>, an intern student at Tagoloan Community College. I specialize in bridging the gap between <span className="text-indigo-400">complex backend logic</span> and 
                                <span className="text-indigo-400"> user-centric interfaces</span>.
                            </p>
                            
                            {/* Reduced mt-12 to mt-10 */}
                            <div className="mt-10 flex justify-center gap-6">
                                <button onClick={() => scrollToSection('work')} className="px-8 py-4 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all shadow-xl shadow-white/5">
                                    Explore Work
                                </button>
                                <button onClick={() => scrollToSection('skills')} className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
                                    Technical Skills
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* --- CASE STUDIES --- */}
                <section id="work" className="mx-auto max-w-7xl px-8 py-24">
                    
                    {/* Featured Release (LumiChat Carousel) */}
                    <div className="mb-32">
                        <div className="flex items-center justify-between mb-12">
                            <div className="flex items-center gap-4">
                                <span className="h-[1px] w-10 bg-indigo-500"></span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500">Featured System</span>
                            </div>
                            <div className="flex gap-2">
                                {lumiImages.map((_, i) => (
                                    <button key={i} onClick={() => setActiveSlide(i)}
                                        className={`h-1 transition-all duration-500 ${activeSlide === i ? 'w-8 bg-indigo-500' : 'w-2 bg-white/10'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col group">
                            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#0A0A0A] shadow-2xl transition-all group-hover:border-indigo-500/20">
                                <div className="flex items-center justify-between bg-white/5 px-6 py-4 border-b border-white/5">
                                    <div className="flex gap-1.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-white/10"></div>
                                        <div className="h-1.5 w-1.5 rounded-full bg-white/10"></div>
                                        <div className="h-1.5 w-1.5 rounded-full bg-white/10"></div>
                                    </div>
                                    <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">lumi-chat-v2.app</span>
                                </div>

                                <div className="relative aspect-[21/9] flex items-center justify-center p-8 bg-gradient-to-b from-indigo-500/5 to-black overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        <motion.img key={activeSlide} src={lumiImages[activeSlide]}
                                            initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }}
                                            transition={{ duration: 0.6 }} className="max-h-full max-w-full object-contain drop-shadow-2xl"
                                        />
                                    </AnimatePresence>
                                </div>
                            </div>
                            
                            <div className="mt-10 grid md:grid-cols-2 gap-8 items-start">
                                <div>
                                    <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">{latestProject.title}</h3>
                                    <p className="text-slate-400 text-lg leading-relaxed mb-8">{latestProject.description}</p>
                                    <a href={latestProject.github} target="_blank" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400 hover:text-white transition-colors group/link">
                                        Check Project <span className="group-hover/link:translate-x-1 transition-transform italic">→</span>
                                    </a>
                                </div>
                                <div className="flex md:justify-end gap-2 h-fit">
                                    {["React", "Tailwind", "Laravel", "Figma", "MySQL"].map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-md border border-white/10 bg-white/5 text-[9px] font-bold uppercase tracking-widest text-slate-500">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Archive Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-24 border-t border-white/5">
                        {pastProjects.map((project, idx) => (
                            <motion.div key={idx} whileHover={{ y: -8 }} className="flex flex-col group">
                                <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#0A0A0A] aspect-[16/10] flex items-center justify-center p-6 transition-all group-hover:border-white/20">
                                    <img src={project.image} className="max-h-full max-w-full object-contain opacity-50 group-hover:opacity-100 transition-all duration-500" alt={project.title} />
                                </div>
                                <div className="mt-8 space-y-6">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-500 block">{project.subtitle}</span>
                                    <h3 className="text-3xl font-bold text-white tracking-tight">{project.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                                    <a href={project.github} target="_blank" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-indigo-400 transition-colors group/link">
                                        Check Project <span className="group-hover/link:translate-x-1 transition-transform italic">→</span>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* --- TECHNICAL PROFICIENCY --- */}
                <section id="skills" className="mx-auto max-w-7xl px-8 py-32 border-t border-white/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
                        <div>
                            {/* Reduced size to ensure it stays on one line */}
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                                Technical Proficiency.
                            </h2>
                            <p className="text-slate-400 leading-relaxed text-base md:text-lg max-w-md">
                                I build full-scale systems using Laravel and React, ensuring backend reliability is 
                                matched by a high-end, user-centric interface.
                            </p>
                        </div>
                        
                        {/* Skills Bars Area */}
                        <div className="space-y-10 pt-4">
                            {skills.map((skill, i) => (
                                <div key={i}>
                                    <div className="flex justify-between mb-3">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{skill.name}</span>
                                        <span className="text-[10px] font-bold text-indigo-500">{skill.level}%</span>
                                    </div>
                                    <div className="h-[1px] w-full bg-white/5 overflow-hidden">
                                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} transition={{ duration: 1.5 }} className={`h-full ${skill.color}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- FOOTER --- */}
                <footer className="bg-[#080808] border-t border-white/5 pt-24 pb-12 px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-lg bg-white text-black flex items-center justify-center font-black italic text-xs">E.</div>
                                <span className="text-lg font-bold tracking-tighter text-white uppercase italic">Earl Sepida</span>
                            </div>
                            <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                <a href="https://github.com/Nyzo0310" target="_blank" className="hover:text-white transition">GitHub</a>
                                <a href="https://www.linkedin.com/in/sepida-earl-patrick-r-3a19b32ab/" target="_blank" className="hover:text-white transition">LinkedIn</a>
                                <a href="mailto:earl@example.com" className="hover:text-white transition">Email</a>
                            </div>
                        </div>
                        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                            <p className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-medium">© 2026 Earl Patrick Ramos-Sepida • Tagoloan, PH</p>
                            <span className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">Portfolio Environment 1.0</span>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}