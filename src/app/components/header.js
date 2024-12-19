import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
export default function Header() {
    const navLinks = [
      { href: "/", label: "Home" },
      { href: "/about", label: "Sobre mim" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/skills", label: "Skills" },
      { href: "/career", label: "Carreira" },
      { href: "/contact", label: "Contato" },
    ];
  
    return (
      <header className="fixed top-0 left-0 right-0 w-auto flex items-center justify-between px-6 py-3 bg-zinc-900 rounded-full mx-4 mt-4 shadow-lg z-50 box-border">
        <FontAwesomeIcon icon={faCodepen} className="w-8 h-8 text-purple-950" />
        <nav>
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-white hover:text-purple-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
  