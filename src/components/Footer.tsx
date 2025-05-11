import { Github, Linkedin, Mail, FileText, ArrowUp } from "lucide-react";
import type { UserInfo } from "../../types";

function Footer({ userInfo }: { userInfo: UserInfo }) {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
      <div className="container mx-auto px-4 relative">
        <button
          onClick={scrollToTop}
          className="btn btn-circle btn-primary absolute -top-6 right-6"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
      <nav>
        <h6 className="footer-title">Quick Links</h6>
        {quickLinks.map((link) => (
          <a
            href={link.href}
            className="hover:text-primary transition-colors inline-block py-1"
          >
            {link.name}
          </a>
        ))}
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          {userInfo.socialLinks?.github && (
            <a
              href={userInfo.socialLinks.github}
              className="btn btn-circle btn-sm btn-ghost"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
            </a>
          )}

          {userInfo.socialLinks?.linkedin && (
            <a
              href={userInfo.socialLinks.linkedin}
              className="btn btn-circle btn-sm btn-ghost"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
            </a>
          )}

          {userInfo.socialLinks?.email && (
            <a
              href={userInfo.socialLinks.email}
              className="btn btn-circle btn-sm btn-ghost"
              aria-label="Email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={18} />
            </a>
          )}

          {userInfo.socialLinks?.resume && (
            <a
              href={userInfo.socialLinks.resume}
              className="btn btn-circle btn-sm btn-ghost"
              aria-label="Resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={18} />
            </a>
          )}
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
