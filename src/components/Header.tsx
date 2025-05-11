import { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Github,
  Linkedin,
  Mail,
  FileText,
  Menu,
} from "lucide-react";
import type { UserInfo } from "../../types";

function Header({ userInfo }: { userInfo: UserInfo }) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
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

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const SocialLinks = ({ className = "" }) => (
    <div className={`flex items-center gap-2 ${className}`}>
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
    </div>
  );

  return (
    <header className="navbar bg-base-300 shadow-lg">
      <div className="container mx-auto flex justify-between">
        <div className="flex-1">
          <div className="flex flex-col">
            <a href="#" className="text-2xl font-bold text-primary">
              {userInfo.name}
            </a>
            <span className="text-md font-normal text-base-content">
              {userInfo.title}
            </span>
          </div>
        </div>
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

          <div className="flex items-center ml-4">
            <SocialLinks />

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

        <div className="flex-none md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-sm btn-circle mr-2"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <Menu />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
              <li className="menu-title pt-2">
                <span>Social</span>
              </li>
              <li>
                <div className="flex justify-center py-2">
                  <SocialLinks className="justify-center" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
