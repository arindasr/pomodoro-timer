import Icon from './Icon';

const Stats = () => {
  const stats = [
    { icon: 'focus', number: '24', label: 'Sesi fokus' },
    { icon: 'timer', number: '600', label: 'Menit belajar' },
    { icon: 'chart', number: '85%', label: 'Tingkat fokus' },
    { icon: 'sprout', number: '3', label: 'Siklus selesai' }
  ];

  return (
    <section className="section stats-section" id="statistik">
      <div className="container">
        <div>
          <p className="eyebrow">Ringkasan</p>
          <h2 className="section-title">Pencapaian minggu ini.</h2>
          <p className="section-copy">
            Statistik dibuat ringkas supaya progres terasa jelas tanpa memenuhi layar dengan dekorasi.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((item) => (
            <article className="stat-card" key={item.label}>
              <span className="icon-badge">
                <Icon name={item.icon === 'timer' ? 'loop' : item.icon} size={25} />
              </span>
              <div className="stat-number">{item.number}</div>
              <div>{item.label}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
