import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  Github,
  Linkedin,
  Mail,
  FileText,
} from "lucide-react";
import type { UserInfo } from "../../types";

function Header({ userInfo }: { userInfo: UserInfo }) {
  // State for mobile menu toggle and theme
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  // Effect to handle theme changes
  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDarkMode(isDark);
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.setAttribute(
      "data-theme",
      newTheme ? "dark" : "light"
    );
    document.documentElement.classList.toggle("dark", newTheme);
  };

  // Nav links
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Logo and Name Section */}
        <div className="flex-1">
          <a href="#" className="text-xl md:text-2xl font-bold text-primary">
            {userInfo.name}
            <span className="block text-sm font-normal text-base-content/70">
              {userInfo.title}
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="flex-none hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="flex items-center ml-4 gap-2">
            {userInfo.socialLinks?.github && (
              <a
                href={userInfo.socialLinks.github}
                className="btn btn-ghost btn-sm btn-circle"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
            )}

            {userInfo.socialLinks?.linkedin && (
              <a
                href={userInfo.socialLinks.linkedin}
                className="btn btn-ghost btn-sm btn-circle"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            )}

            {userInfo.socialLinks?.email && (
              <a
                href={userInfo.socialLinks.email}
                className="btn btn-ghost btn-sm btn-circle"
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={20} />
              </a>
            )}

            {userInfo.socialLinks?.resume && (
              <a
                href={userInfo.socialLinks.resume}
                className="btn btn-ghost btn-sm btn-circle"
                aria-label="Resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={20} />
              </a>
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-sm btn-circle ml-2"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex-none md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-base-100 shadow-lg z-50">
          <ul className="menu menu-vertical p-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="py-2 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="divider my-2"></li>
            <li className="flex flex-row justify-center gap-2 py-2">
              {userInfo.socialLinks?.github && (
                <a
                  href={userInfo.socialLinks.github}
                  className="btn btn-ghost btn-sm btn-circle"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
              )}

              {userInfo.socialLinks?.linkedin && (
                <a
                  href={userInfo.socialLinks.linkedin}
                  className="btn btn-ghost btn-sm btn-circle"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} />
                </a>
              )}

              {userInfo.socialLinks?.email && (
                <a
                  href={userInfo.socialLinks.email}
                  className="btn btn-ghost btn-sm btn-circle"
                  aria-label="Email"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail size={20} />
                </a>
              )}

              {userInfo.socialLinks?.resume && (
                <a
                  href={userInfo.socialLinks.resume}
                  className="btn btn-ghost btn-sm btn-circle"
                  aria-label="Resume"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText size={20} />
                </a>
              )}

              <button
                onClick={toggleTheme}
                className="btn btn-ghost btn-sm btn-circle"
                aria-label={
                  darkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
