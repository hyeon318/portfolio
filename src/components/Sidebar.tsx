"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavigationItem {
  name: string;
  href: string;
}

interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

const navigation: NavigationItem[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com", icon: "github" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { name: "Email", href: "mailto:hello@example.com", icon: "email" },
];

export default function TopNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(
        item => document.querySelector(item.href) as HTMLElement
      );
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigation[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 liquid-glass-nav z-50 hidden lg:block"
      role="navigation"
      aria-label="메인 네비게이션"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="#"
              className="text-2xl font-bold text-foreground hover:text-accent transition-all duration-300 font-kr"
              onClick={e => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-label="홈으로 이동"
            >
              안현<strong className="text-accent highlight">지</strong>
            </a>
          </motion.div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-10">
            <ul className="flex items-center space-x-10" role="menubar">
              {navigation.map((item, index) => (
                <li key={item.name} role="none">
                  <motion.button
                    onClick={() => handleNavClick(item.href)}
                    className={`relative text-base font-medium transition-all duration-300 group ${
                      activeSection === item.href
                        ? "text-accent font-semibold"
                        : "text-muted hover:text-accent"
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    role="menuitem"
                    aria-current={
                      activeSection === item.href ? "page" : undefined
                    }
                  >
                    <span
                      className="font-mono text-sm text-accent mr-3 opacity-70 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    >
                      0{index + 1}.
                    </span>
                    <span className="font-en">{item.name}</span>
                    {activeSection === item.href && (
                      <motion.div
                        className="absolute -bottom-5 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary rounded-full"
                        layoutId="activeTab"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                        aria-hidden="true"
                      />
                    )}
                    <motion.div
                      className="absolute -bottom-5 left-0 right-0 h-0.5 bg-accent/30 rounded-full opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                      aria-hidden="true"
                    />
                  </motion.button>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <nav
              className="flex items-center space-x-5 ml-12 pl-8 border-l border-border/50"
              aria-label="소셜 링크"
            >
              <ul className="flex items-center space-x-5">
                {socialLinks.map((link, index) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-all duration-300 hover:scale-110"
                      aria-label={link.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <SocialIcon icon={link.icon} />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  const iconClass = "w-5 h-5";

  switch (icon) {
    case "github":
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          className={iconClass}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "email":
      return (
        <svg
          className={iconClass}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    default:
      return null;
  }
}
