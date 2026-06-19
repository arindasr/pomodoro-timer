import Icon from './Icon';

const Hero = ({ onNavigate }) => {
  return (
    <section className="hero" id="beranda">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Focus, plan, rest, repeat</p>
          <h1>
            Belajar fokus, <span>tetap ringan.</span>
          </h1>
          <p className="section-copy">
            Timer Pomodoro yang bersih, hangat, dan gampang dipakai untuk sesi belajar harian tanpa visual yang ramai.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={onNavigate}>
              <Icon name="tomato" size={20} />
              Mulai Timer
            </button>
            <a className="btn btn-secondary" href="#cara-kerja">
              <Icon name="sprout" size={20} />
              Lihat Cara Kerja
            </a>
          </div>

          <div className="mini-proof">
            <span className="proof-pill">
              <Icon name="sparkle" size={18} />
              10.000+ pelajar
            </span>
            <span>dibantu membangun ritme fokus yang lebih rapi.</span>
          </div>
        </div>

        <div className="hero-panel" aria-label="Preview timer pomodoro">
          <div className="focus-card">
            <div className="focus-card-top">
              <span className="mode-pill">
                <Icon name="focus" size={18} />
                Fokus
              </span>
              <span className="session-pill">3 sesi</span>
            </div>
            <div className="timer-preview">25:00</div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: '66%' }} />
            </div>
          </div>

          <div className="hero-metrics">
            <div className="metric-chip">
              <strong>25m</strong>
              <span>fokus</span>
            </div>
            <div className="metric-chip">
              <strong>5m</strong>
              <span>rehat</span>
            </div>
            <div className="metric-chip">
              <strong>4x</strong>
              <span>siklus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
