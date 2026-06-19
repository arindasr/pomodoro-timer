import Icon from './Icon';

const Footer = () => {
  const navigation = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Fitur', href: '#fitur' },
    { label: 'Cara Kerja', href: '#cara-kerja' },
    { label: 'Statistik', href: '#statistik' }
  ];

  const resources = [
    { label: 'Tips Fokus', href: '#fitur' },
    { label: 'Panduan Pomodoro', href: '#cara-kerja' },
    { label: 'Bantuan', href: '#statistik' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#beranda">
              <span className="brand-mark">
                <Icon name="tomato" size={24} />
              </span>
              Pomodoro
            </a>
            <p>
              Timer belajar yang dibuat lebih tenang: fokus pada ritme, progres, dan ruang bernapas.
            </p>
          </div>

          <div>
            <h4>Navigasi</h4>
            <nav className="footer-links" aria-label="Navigasi footer">
              {navigation.map((item) => (
                <a href={item.href} key={item.label}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4>Sumber Daya</h4>
            <nav className="footer-links" aria-label="Sumber daya">
              {resources.map((item) => (
                <a href={item.href} key={item.label}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Pomodoro. Dibuat untuk sesi belajar yang lebih rapi.</p>
          <div className="footer-legal">
            <a href="#fitur">Privacy</a>
            <a href="#cara-kerja">Terms</a>
            <a href="#statistik">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
