"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavigationItem } from "@/types";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./icons";

const navigation: NavigationItem[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Mobile header */}
      <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border/30 z-50 px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="nav-link text-lg font-bold text-foreground tracking-tight font-kr"
            onClick={e => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            안현<span className="text-primary">지</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-secondary/70 hover:text-primary transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isOpen ? "open" : "closed"}
              className="w-6 h-6 relative"
            >
              <motion.span
                className="absolute h-0.5 w-6 bg-current top-1.5 left-0"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 6 },
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute h-0.5 w-6 bg-current top-3 left-0"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute h-0.5 w-6 bg-current top-4.5 left-0"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -6 },
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background/98 backdrop-blur-sm z-40 pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="p-6">
              <div className="space-y-1">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-4 py-4 text-lg font-medium text-secondary/80 hover:text-primary hover:bg-primary/5 transition-all duration-200 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="font-mono text-sm text-primary/70 mr-3 font-en">
                      0{index + 1}.
                    </span>
                    <span className="font-en">{item.name}</span>
                  </motion.button>
                ))}
              </div>

              {/* Mobile nav footer */}
              <motion.div
                className="mt-12 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <p className="text-secondary/80 text-base font-medium mb-2 font-en">
                  Frontend Developer
                </p>
                <p className="text-secondary/60 text-sm leading-relaxed mb-6 font-kr">
                  사용자 경험을 중심으로 생각하는 프론트엔드 개발자입니다.
                </p>
                <div className="flex space-x-6">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link text-secondary/60 hover:text-primary transition-colors duration-200"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link text-secondary/60 hover:text-primary transition-colors duration-200"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href="mailto:hello@example.com"
                    className="social-link text-secondary/60 hover:text-primary transition-colors duration-200"
                  >
                    <EmailIcon />
                  </a>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
