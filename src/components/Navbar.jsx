import { useState } from 'react';
import Icon from './Icon';

const Navbar = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Fitur', href: '#fitur' },
    { label: 'Cara Kerja', href: '#cara-kerja' },
    { label: 'Statistik', href: '#statistik' }
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <style>{`
        .navbar {
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 0.75rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .nav-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          font-weight: 700;
          color: #e74c3c;
          text-decoration: none;
          margin-right: auto;
        }

        .brand-mark {
          display: flex;
          align-items: center;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
          margin-left: auto;
        }

        .nav-links a {
          color: #4a5568;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: #e74c3c;
        }

        .nav-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          color: #4a5568;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          padding: 1rem 0;
          gap: 1rem;
        }

        .mobile-menu a {
          color: #4a5568;
          text-decoration: none;
          font-size: 1rem;
          padding: 0.5rem 0;
          border-bottom: 1px solid #f0f0f0;
          transition: color 0.2s;
        }

        .mobile-menu a:hover {
          color: #e74c3c;
        }

        /* Desktop styles */
        @media (min-width: 769px) {
          .nav-toggle {
            display: none !important;
          }
          
          .mobile-menu {
            display: none !important;
          }
          
          .nav-links {
            display: flex !important;
          }
        }

        /* Mobile styles */
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          
          .nav-toggle {
            display: block !important;
          }
          
          .mobile-menu {
            display: flex !important;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="container">
          <div className="nav-inner">
            <a className="brand" href="#beranda" onClick={closeMenu}>
              <span className="brand-mark">
                <Icon name="tomato" size={24} />
              </span>
              Pomodoro
            </a>

            <div className="nav-links" aria-label="Navigasi utama">
              {links.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>

            <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Buka menu">
              <Icon name={isOpen ? 'close' : 'menu'} size={22} />
            </button>
          </div>

          {isOpen && (
            <div className="mobile-menu">
              {links.map((item) => (
                <a key={item.label} href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;