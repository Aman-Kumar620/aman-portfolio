"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dynamic Typewriter Effect for Hero Section
  const titles = useMemo(() => [
    "Android & Full-Stack Developer",
    "Cloud & Security Specialist",
    "Independent App Developer",
    "Software Engineer"
  ], []);

  const [currentTypedText, setCurrentTypedText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[titleIndex];

      if (isDeleting) {
        setCharIndex((prev) => prev - 1);
        setCurrentTypedText(currentTitle.substring(0, charIndex - 1));
        if (charIndex - 1 <= 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      } else {
        setCharIndex((prev) => prev + 1);
        setCurrentTypedText(currentTitle.substring(0, charIndex + 1));
        if (charIndex + 1 >= currentTitle.length) {
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex, titles]);


  const cardSkills = [
    { name: "Kotlin", category: "Mobile Development", icon: "fab fa-android" },
    { name: "Java", category: "Programming", icon: "fab fa-java" },
    { name: "Python", category: "Programming / Desktop", icon: "fab fa-python" },
    { name: "C / C++", category: "Programming", icon: "fas fa-code" },
    { name: "SQL", category: "Database", icon: "fas fa-database" },
    { name: "HTML", category: "Frontend & UI", icon: "fab fa-html5" },
    { name: "Next.js", category: "Web Development", icon: "fab fa-react" },
    { name: "Tailwind CSS", category: "Frontend & UI", icon: "fab fa-css3-alt" },
    { name: "Flet", category: "Desktop Development", icon: "fas fa-desktop" },
    { name: "Google Firebase", category: "Backend & Cloud", icon: "fas fa-fire" },
    { name: "Google Cloud", category: "Backend & Cloud", icon: "fas fa-cloud" },
    { name: "Google Play Billing", category: "Monetization", icon: "fas fa-shopping-cart" },
    { name: "Razorpay", category: "Monetization", icon: "fas fa-credit-card" },
    { name: "Google AdMob", category: "Monetization", icon: "fas fa-ad" },
    { name: "Git", category: "Tools & DevOps", icon: "fab fa-git-alt" },
    { name: "GitHub", category: "Tools & DevOps", icon: "fab fa-github" },
    { name: "Linux", category: "Tools & DevOps", icon: "fab fa-linux" },
    { name: "Wi-Fi Security Auditing", category: "Security & Penetration Testing", icon: "fas fa-wifi" },
    { name: "Password Hash Cracking", category: "Security & Cryptanalysis", icon: "fas fa-[#238EF2] fa-[#238EF2] fa-unlock-alt" },
    { name: "Hashcat", category: "Security & Testing", icon: "fas fa-shield-alt" },
    { name: "Airmon-ng", category: "Security & Testing", icon: "fas fa-broadcast-tower" },
    { name: "VMware", category: "Tools & Virtualization", icon: "fas fa-server" },
    { name: "PyCharm", category: "Development IDE", icon: "fas fa-code" },
    { name: "Inno Setup", category: "Deployment & Packaging", icon: "fas fa-box" },
    { name: "Prompt Engineering", category: "AI & Innovation", icon: "fas fa-robot" }
  ];

  const technicalSkillsCategorized = [
    {
      category: "Programming Languages",
      skills: "Kotlin, Java, Python, C, C++, SQL, JavaScript, TypeScript, HTML5, CSS3"
    },
    {
      category: "Mobile & Web Development",
      skills: "Android SDK, Android Studio, RESTful APIs, React, Next.js, Tailwind CSS, Bootstrap, Material Design"
    },
    {
      category: "Backend, Cloud & Monetization",
      skills: "Google Play Billing, Razorpay Payment Gateway, Google AdMob, Google Firebase (Firestore, Authentication, Remote Config), Google Cloud Platform (GCP), Cloud Architecture"
    },
    {
      category: "Security & Penetration Testing",
      skills: "Application Security, Cryptography, Wi-Fi Security Auditing & Penetration Testing (Airmon-ng), Password Hash Cracking & Cryptanalysis (Hashcat), API Testing, App Testing & Debugging"
    },
    {
      category: "Tools & Platforms",
      skills: "Git, GitHub, VS Code, Postman, Google Play Console, Microsoft Partner Center, Indus Appstore, Advanced Excel, Linux, Eclipse, NetBeans, VMware, PyCharm, Inno Setup, Prompt Engineering"
    }
  ];

  const projectsList = [
    {
      type: "Native Android App",
      title: "AirType - Native Android App",
      description: "Engineered and published a native Android application on Google Play Store. Integrated Google Play Billing for in-app monetization and designed responsive interface with Material Design principles.",
      liveUrl: "https://play.google.com/store/apps/details?id=com.bihar.airtype",
      tags: ["Kotlin", "Android SDK", "Firebase", "Google Play Billing", "Play Store Live"]
    },
    {
      type: "Desktop Utility App",
      title: "AirType Server - Desktop Utility",
      description: "Developed a Windows desktop utility app and published it on Microsoft Store. Managed full deployment workflow, security compliance verification, and store listing optimization.",
      liveUrl: "https://apps.microsoft.com/detail/9N9GZHBCBRG8",
      tags: ["Python","Flet", "Windows App", "Microsoft Store Live", "Desktop Utility"]
    },
    {
      type: "Personal Project",
      title: "Portfolio Website",
      description: "Designed and developed a modern personal portfolio website using Next.js, React and Tailwind CSS. The website showcases my skills, certifications, projects and professional experience with a fully responsive design.",
      liveUrl: "",
      tags: ["Next.js", "React", "Tailwind CSS", "Responsive UI"]
    }
  ];

  const certsList = [
    {
      title: "Google Play Store Listing Certificate",
      issuer: "Google Play Academy",
      certId: "",
      linkUrl: "https://www.credential.net/9062a977-eb8d-4ccf-ac2a-a17726d55b13"
    },
    {
      title: "Advanced Cyber Security - An Application Approach",
      issuer: "TCS iON & Amity University Online",
      certId: "",
      linkUrl: "/images/certificates/Advanced Cyber Security - An Application Approach.pdf"
    },
    {
      title: "Cloud Architecture",
      issuer: "TCS iON & Amity University Online",
      certId: "",
      linkUrl: "/images/certificates/Cloud Architecture.pdf"
    },
    {
      title: "Cryptography Certification",
      issuer: "TCS iON & Amity University Online",
      certId: "",
      linkUrl: "/images/certificates/Cryptography.pdf"
    },
    {
      title: "Certificate in Advanced Excel",
      issuer: "Amity University Online",
      certId: "",
      linkUrl: "/images/certificates/Advanced Excel.pdf"
    },
    {
      title: "Certificate Course in Basics of AI",
      issuer: "Amity University Online",
      certId: "",
      linkUrl: "/images/certificates/Basic_of_AI.pdf"
    },
    {
      title: "Acing Your Interview Certification",
      issuer: "Amity University Online",
      certId: "",
      linkUrl: "/images/certificates/Acing_Your_Interview.pdf"
    },
    {
      title: "Leadership and Motivation in Organization",
      issuer: "Amity University Online",
      certId: "",
      linkUrl: "/images/certificates/Leadership and Motivation in Organization.pdf"
    },
    {
      title: "Professional and Life Skills",
      issuer: "Amity University Online",
      certId: "",
      linkUrl: "/images/certificates/Professional and Life Skills_Certificate.pdf"
    },
    {
      title: "Strategic Human Resource Management",
      issuer: "Professional Course",
      certId: "",
      linkUrl: "/images/certificates/Strategic Human Resource Management.pdf"
    }
  ];

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-[#238EF2] selection:text-white">
      {/* FIXED NAVBAR WITH BOTTOM BORDER LINE */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/95 backdrop-blur-md border-b border-[#238EF2]/30 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <button
            onClick={() => { setActiveSection("home"); setIsMobileMenuOpen(false); }}
            className="text-2xl font-extrabold tracking-tight text-[#238EF2] hover:text-sky-400 transition-colors cursor-pointer bg-transparent border-none"
          >
            Aman Kumar
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-[18px] font-medium">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`transition-colors pb-1 cursor-pointer bg-transparent border-none ${
                  activeSection === item.id 
                    ? "text-[#238EF2] border-b-2 border-[#238EF2] font-semibold" 
                    : "text-gray-300 hover:text-[#238EF2]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-2xl text-[#238EF2] focus:outline-none bg-transparent border-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0b1329] border-b border-[#238EF2]/30 px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 text-base font-semibold transition-colors bg-transparent border-none cursor-pointer ${
                  activeSection === item.id ? "text-[#238EF2]" : "text-gray-300 hover:text-[#238EF2]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* MAIN CONTENT VIEW */}
      <main className="pt-20 max-w-7xl mx-auto px-6 pb-5">
        {/* 1. HOME SECTION - 50-50 EQUAL SPLIT */}
        {activeSection === "home" && (
          <section className="py-5 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* Profile Image Column */}
            <div className="flex justify-center order-1">
              <div className="relative w-60 h-60 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-[#238EF2] shadow-[0_0_35px_rgba(35,142,242,0.7)] overflow-hidden shrink-0">
                <Image src="/images/CV_imsge.jpeg" alt="Aman Kumar" fill priority sizes="(max-width: 768px) 100vw, 320px" className="object-cover object-center" />
              </div>
            </div>

            {/* Text Content Column */}
            <div className="space-y-3 order-2">
              <p className="text-lg text-gray-300 font-normal">Hello, I&apos;m</p>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-[#238EF2] tracking-tight">Aman Kumar</h1>

              <div className="h-10 flex items-center">
                <span className="text-xl sm:text-3xl font-bold text-white tracking-wide">{currentTypedText}</span>
                <span className="text-xl sm:text-3xl font-bold text-[#238EF2] animate-pulse ml-1">|</span>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Software Engineer and BCA Graduate in Cloud & Security from Amity University Noida. Hands-on experience in Android & Desktop App Development, Firebase Architecture, Payment Gateways, and Live App Publishing.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="/images/certificates/Aman_kumar_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#238EF2] hover:bg-blue-600 text-white font-semibold text-sm px-7 py-3 rounded-md transition-all shadow-md inline-flex items-center"
                >
                  Download Resume
                </a>
                <button
                  onClick={() => setActiveSection("contact")}
                  className="border border-[#238EF2] hover:bg-[#238EF2]/10 text-white font-semibold text-sm px-7 py-3 rounded-md transition-all cursor-pointer bg-transparent"
                >
                  Contact Me
                </button>
              </div>

              <div className="flex space-x-6 pt-4 text-2xl text-gray-200">
                <a href="https://linkedin.com/in/aman-kumar-a96248339" target="_blank" rel="noopener noreferrer" className="hover:text-[#238EF2] transition-colors"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/Aman-Kumar620" target="_blank" rel="noopener noreferrer" className="hover:text-[#238EF2] transition-colors"><i className="fab fa-github"></i></a>
                <a href="mailto:mr.amankumar99@gmail.com" className="hover:text-[#238EF2] transition-colors"><i className="fas fa-envelope"></i></a>
              </div>
            </div>
          </section>
        )}

        {/* 2. ABOUT SECTION */}
        {activeSection === "about" && (
          <section className="py-5">
            <div className="text-center mb-10">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#238EF2] tracking-tight mb-3">About Me</h2>
              <p className="text-gray-400 text-sm">Get to know me better.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white tracking-tight">Who am I?</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  I&apos;m <span className="text-[#238EF2] font-semibold">Aman Kumar</span>, an Independent Application Developer and Software Engineer specializing in Cloud & Security from Amity University, Noida.
                </p>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Proven track record of end-to-end product delivery—from UI design and backend integration to implementing Google Play Billing, Razorpay Payment Gateways, AdMob monetization, and publishing live production apps on Google Play Store and Microsoft Store.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div className="bg-[#0b1329] border border-gray-800 p-6 rounded-xl hover:border-[#238EF2]/50 transition-all shadow-lg">
                  <h4 className="text-3xl sm:text-4xl font-extrabold text-[#238EF2] mb-2">2+ Live</h4>
                  <p className="text-gray-300 text-xs sm:text-sm font-medium">Store Published Apps</p>
                </div>
                <div className="bg-[#0b1329] border border-gray-800 p-6 rounded-xl hover:border-[#238EF2]/50 transition-all shadow-lg">
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-[#238EF2] mb-2">Amity</h4>
                  <p className="text-gray-300 text-xs sm:text-sm font-medium">University Noida</p>
                </div>
                <div className="bg-[#0b1329] border border-gray-800 p-6 rounded-xl hover:border-[#238EF2]/50 transition-all shadow-lg">
                  <h4 className="text-3xl sm:text-4xl font-extrabold text-[#238EF2] mb-2">BCA</h4>
                  <p className="text-gray-300 text-xs sm:text-sm font-medium">Cloud & Security</p>
                </div>
                <div className="bg-[#0b1329] border border-gray-800 p-6 rounded-xl hover:border-[#238EF2]/50 transition-all shadow-lg">
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-[#238EF2] mb-2">Full-Stack</h4>
                  <p className="text-gray-300 text-xs sm:text-sm font-medium">Mobile & Desktop</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 3. SKILLS SECTION */}
        {activeSection === "skills" && (
          <section className="py-5">
            <div className="text-center mb-10">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#238EF2] tracking-tight mb-3">My Skills</h2>
              <p className="text-gray-400 text-sm">Technologies & Tools I work with</p>
            </div>

            {/* Skill Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
              {cardSkills.map((skill, index) => (
                <div key={index} className="bg-[#0b1329] border border-gray-800 p-6 rounded-xl text-center hover:border-[#238EF2]/50 transition-all shadow-lg">
                  <i className={`${skill.icon} text-4xl text-[#238EF2] mb-3`}></i>
                  <h3 className="text-white font-semibold text-base mb-1">{skill.name}</h3>
                  <span className="text-xs text-gray-400">{skill.category}</span>
                </div>
              ))}
            </div>

            {/* Technical Skills Categorized Text Section */}
            <div className="mt-8 bg-[#050b18]/80 border border-gray-800/80 p-8 sm:p-10 rounded-2xl shadow-2xl">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#238EF2] mb-6 tracking-tight">
                Technical Skills
              </h3>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                {technicalSkillsCategorized.map((item, index) => (
                  <p key={index} className="text-gray-300">
                    <span className="text-[#238EF2] font-bold mr-1">
                      {item.category}:
                    </span>
                    {item.skills}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 4. PROJECTS SECTION */}
        {activeSection === "projects" && (
          <section className="py-5">
            <div className="text-center mb-10">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#238EF2] tracking-tight mb-3">My Projects</h2>
              <p className="text-gray-400 text-sm max-w-2xl mx-auto">Live production applications and personal projects.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projectsList.map((proj, index) => (
                <div key={index} className="bg-[#0b1329] border border-gray-800 rounded-xl p-6 flex flex-col justify-between hover:border-[#238EF2]/50 transition-all shadow-lg">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        proj.type === "Personal Project"
                          ? "bg-[#238EF2]/10 border border-[#238EF2]/30 text-[#238EF2]"
                          : "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                      }`}>
                        {proj.type}
                      </span>
                      {proj.liveUrl ? (
                        <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[#238EF2] hover:text-sky-300 text-sm font-semibold flex items-center">
                          Live Link <i className="fas fa-external-link-alt ml-2 text-xs"></i>
                        </a>
                      ) : null}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{proj.title}</h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">{proj.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-800">
                    {proj.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="text-xs px-2.5 py-1 rounded bg-[#238EF2]/10 text-[#238EF2] font-mono">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. CERTIFICATES SECTION */}
        {activeSection === "certificates" && (
          <section className="py-5">
            <div className="text-center mb-10">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#238EF2] tracking-tight mb-3">Certifications</h2>
              <p className="text-gray-400 text-sm">Professional certifications and technical achievements.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {certsList.map((cert, index) => (
                <div key={index} className="bg-[#0b1329] border border-gray-800/80 p-6 rounded-2xl flex flex-col justify-between hover:border-[#238EF2]/50 transition-all shadow-lg">
                  <div>
                    <div className="flex items-start space-x-4 mb-3">
                      <i className="fas fa-award text-3xl text-[#238EF2] shrink-0 mt-1"></i>
                      <div>
                        <h3 className="text-lg font-bold text-white leading-snug">{cert.title}</h3>
                        <p className="text-xs text-gray-400 mt-1">Issued by <span className="text-gray-300">{cert.issuer}</span></p>
                        {cert.certId ? (
                          <p className="text-xs text-[#238EF2]/80 font-mono mt-0.5">ID: {cert.certId}</p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <a
                      href={cert.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-[#238EF2] hover:bg-blue-600 text-white font-medium text-xs px-4 py-2.5 rounded-lg transition-all shadow-md active:scale-95">
                      <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      <span>View Certificate</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 6. CONTACT SECTION */}
        {activeSection === "contact" && (
          <section className="py-5 max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#238EF2] tracking-tight mb-3">Contact Me</h2>
              <p className="text-gray-400 text-sm">Feel free to connect with me.</p>
            </div>

            <div className="bg-[#0b1329] border border-gray-800 p-8 rounded-2xl shadow-xl space-y-6">
              <div className="flex items-center space-x-4 border-b border-gray-800/80 pb-4">
                <i className="fas fa-envelope text-2xl text-[#238EF2]"></i>
                <div>
                  <p className="text-xs text-gray-400">Email</p>
                  <a href="mailto:mr.amankumar99@gmail.com" className="text-sm sm:text-base font-medium text-white hover:text-[#238EF2]">mr.amankumar99@gmail.com</a>
                </div>
              </div>

              <div className="app-contact-item flex items-center space-x-4 border-b border-gray-800/80 pb-4">
                <i className="fas fa-phone text-2xl text-[#238EF2]"></i>
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <a href="tel:+916205423577" className="text-sm sm:text-base font-medium text-white hover:text-[#238EF2]">+91 6205423577</a>
                </div>
              </div>

              <div className="flex items-center space-x-4 border-b border-gray-800/80 pb-4">
                <i className="fab fa-linkedin text-2xl text-[#238EF2]"></i>
                <div>
                  <p className="text-xs text-gray-400">LinkedIn</p>
                  <a href="https://linkedin.com/in/aman-kumar-a96248339" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-medium text-white hover:text-[#238EF2]">linkedin.com/in/aman-kumar-a96248339</a>
                </div>
              </div>

              <div className="flex items-center space-x-4 border-b border-gray-800/80 pb-4">
                <i className="fab fa-github text-2xl text-[#238EF2]"></i>
                <div>
                  <p className="text-xs text-gray-400">GitHub</p>
                  <a href="https://github.com/Aman-Kumar620" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-medium text-white hover:text-[#238EF2]">github.com/Aman-Kumar620</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <i className="fas fa-location-dot text-2xl text-[#238EF2]"></i>
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="text-sm sm:text-base font-medium text-white">Patna, Bihar, India</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
