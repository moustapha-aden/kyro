

const stats = [
  {

    value: '99.98%',
    label: 'Disponibilité garantie',

  },
  {

    value: '120+',
    label: 'Clients actifs',

  },
  {

    value: '15+',
    label: 'Années d\'expertise',

  },
  {

    value: '24/7',
    label: 'Support disponible',

  }
];

export default function Stats() {
  return (
    <section className="py-9 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
           
              <div className="text-5xl font-extralight tracking-[-0.05em] leading-none -2">
                {stat.value}
              </div>
              <div className="text-slate-600 font-extralight tracking-[-0.05em] leading-none">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
