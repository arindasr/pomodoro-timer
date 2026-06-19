const HowItWorks = () => {
  const steps = [
    { title: 'Pilih Tugas', desc: 'Tulis satu hal yang mau kamu selesaikan sekarang.' },
    { title: 'Fokus 25 Menit', desc: 'Kerjakan tanpa pindah konteks sampai timer selesai.' },
    { title: 'Istirahat 5 Menit', desc: 'Ambil jeda singkat untuk minum, peregangan, atau menarik napas.' },
    { title: 'Ulangi Ritmenya', desc: 'Setelah beberapa siklus, ambil istirahat yang lebih panjang.' }
  ];

  return (
    <section className="section band" id="cara-kerja">
      <div className="container">
        <div className="split-heading">
          <div>
            <p className="eyebrow">Cara kerja</p>
            <h2 className="section-title">Ritme kecil yang gampang diulang.</h2>
            <p className="section-copy">
              Pomodoro membantu kamu mulai dari langkah yang jelas, bukan dari semangat yang harus selalu besar.
            </p>
          </div>
          <a className="btn btn-secondary" href="#statistik">
            Lihat progres
          </a>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <span className="step-number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
