"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "@/components";

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
  { name: "GitHub", href: "https://github.com/hyeon318", icon: "github" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hyeonji-ahn-91b684373/",
    icon: "linkedin",
  },
  { name: "Email", href: "mailto:mail_0318@naver.com", icon: "email" },
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
              className="nav-link text-2xl font-bold text-foreground hover:text-accent transition-all duration-300 font-kr"
              onClick={e => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-label="홈으로 이동"
            >
              <strong className="highlight">안현지</strong>
            </a>
          </motion.div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-10">
            <ul className="flex items-center space-x-10" role="menubar">
              {navigation.map((item, index) => (
                <li key={item.name} role="none">
                  <motion.button
                    onClick={() => handleNavClick(item.href)}
                    className={`nav-link relative text-base font-medium transition-all duration-300 group ${
                      activeSection === item.href
                        ? "text-accent font-semibold"
                        : "text-muted hover:text-accent"
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    role="menuitem"
                    aria-label={`${item.name} 섹션으로 이동`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${
                        activeSection === item.href ? "w-full" : ""
                      }`}
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
                {socialLinks.map((link, index) => {
                  const isMail = link.href?.toLowerCase().startsWith("mailto:");
                  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                    "mail_0318@naver.com"
                  )}`;

                  return (
                    <li key={link.name}>
                      <motion.a
                        href={
                          isMail &&
                          link.href?.toLowerCase().startsWith("mailto:")
                            ? gmailCompose
                            : link.href
                        }
                        // Gmail Compose는 웹페이지라 새 탭 열어도 OK.
                        {...(isMail &&
                        link.href?.toLowerCase().startsWith("mailto:")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : isMail
                          ? {} // 순수 mailto:는 새 탭 금지
                          : { target: "_blank", rel: "noopener noreferrer" })}
                        className="social-link transition-all duration-300 hover:scale-110"
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
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  const iconClass = "w-6 h-6 text-[var(--primary)] ";

  switch (icon) {
    case "github":
      return <GitHubIcon className={iconClass} />;
    case "linkedin":
      return <LinkedInIcon className={iconClass} />;
    case "email":
      return <EmailIcon className={iconClass} />;
    default:
      return null;
  }
}
