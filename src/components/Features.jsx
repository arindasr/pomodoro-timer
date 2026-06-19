import Icon from './Icon';

const Features = () => {
  const features = [
    {
      icon: 'focus',
      title: 'Fokus Terstruktur',
      desc: 'Belajar dalam interval yang jelas supaya perhatian tidak gampang pecah.'
    },
    {
      icon: 'cup',
      title: 'Rehat yang Cukup',
      desc: 'Jeda pendek membantu otak tetap segar tanpa kehilangan ritme.'
    },
    {
      icon: 'chart',
      title: 'Progres Terlihat',
      desc: 'Sesi dan menit belajar terasa lebih konkret saat kamu melacaknya.'
    },
    {
      icon: 'sprout',
      title: 'Kebiasaan Tumbuh',
      desc: 'Mulai dari sesi kecil, lalu bangun konsistensi yang enak dijalani.'
    }
  ];

  return (
    <section className="section" id="fitur">
      <div className="container">
        <div>
          <p className="eyebrow">Fitur utama</p>
          <h2 className="section-title">Fokus tanpa ribet.</h2>
          <p className="section-copy">
            Semua elemen dibuat secukupnya: mudah dibaca, mudah ditekan, dan tidak mencuri perhatian dari belajar.
          </p>
        </div>

        <div className="cards-grid">
          {features.map((item) => (
            <article className="card" key={item.title}>
              <span className="icon-badge">
                <Icon name={item.icon} size={26} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
