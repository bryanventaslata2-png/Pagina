export default function LandingPage() {
  const plans = [
    { name: 'Preuniversitario', desc: 'Preparación específica para universidades como Central, ESPOCH, UTA, UNACH y más.' },
    { name: 'Clases Particulares', desc: 'Refuerzo personalizado en materias clave con enfoque en resultados.' },
    { name: 'Asesoramiento Universitario', desc: 'Acompañamiento integral en el proceso de ingreso y elección de carrera.' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <section className="bg-gradient-to-r from-[#0173b2] to-[#0b4f7a] text-white px-8 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img src="/logo-buho.png" alt="Logo El Búho" className="w-20 h-20 object-contain rounded-full bg-white p-1" />
              <h1 className="text-5xl font-bold leading-tight">Centro de Capacitación El Búho</h1>
            </div>
            <p className="mt-6 text-lg text-slate-200">
              Tu puerta al éxito en Latacunga. Preparación académica de alto nivel con docentes especializados y resultados comprobados.
            </p>
            <div className="mt-8 flex gap-4">
              <button className="bg-white text-slate-900 px-6 py-3 rounded-2xl shadow-lg font-semibold">Inscribirme</button>
              <button className="border border-white px-6 py-3 rounded-2xl">Ver programas</button>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-3xl p-8 shadow-2xl">
            <div className="aspect-video rounded-2xl bg-white/20 flex items-center justify-center text-white text-lg">
              Imagen principal / video institucional
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Programas destacados</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-3xl shadow-lg border p-8 hover:shadow-2xl transition">
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="mt-4 text-slate-600">{plan.desc}</p>
              <button className="mt-6 px-5 py-3 rounded-2xl bg-slate-900 text-white">Más información</button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">¿Por qué elegir El Búho?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-3xl bg-white shadow">14 años de experiencia</div>
            <div className="p-6 rounded-3xl bg-white shadow">+1000 estudiantes aceptados</div>
            <div className="p-6 rounded-3xl bg-white shadow">90% cumple su sueño universitario</div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 rounded-3xl bg-white shadow">Estudiantes becados y destacados</div>
            <div className="p-6 rounded-3xl bg-white shadow">Preparación específica por universidad</div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="rounded-3xl bg-[#0173b2] text-white p-10 text-center">
          <h2 className="text-3xl font-bold">Inicia hoy tu camino al éxito</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-6 text-left items-center">
            <div className="grid gap-4">
              <iframe
                title="Sede 1"
                src="https://www.google.com/maps?q=Calle+Quito+y+Tarqui,+Latacunga&output=embed"
                className="w-full h-40 rounded-2xl border-0"
                loading="lazy"
              />
              <iframe
                title="Sede 2"
                src="https://www.google.com/maps?q=Avenida+Napo+y+Guayaquil,+Latacunga&output=embed"
                className="w-full h-40 rounded-2xl border-0"
                loading="lazy"
              />
            </div>
            <div className="text-slate-300 space-y-3">
              <p><strong>Sede 1:</strong> Calle Quito y Tarqui, Latacunga</p>
              <p><strong>Sede 2:</strong> Avenida Napo y Guayaquil, Latacunga</p>
              <p><strong>Horario:</strong> 08:00 a 18:00</p>
              <p><strong>WhatsApp:</strong> 0969084115</p>
            </div>
          </div>
          <a href="https://wa.me/593969084115" className="inline-block mt-6 bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold">Contactar por WhatsApp</a>
        </div>
      </section>

      <section className="bg-[#f4e2a2] py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900">Estudiantes en todas las carreras</h2>
          <p className="mt-4 text-center text-slate-700 max-w-3xl mx-auto">Acompañamos a estudiantes que sueñan con ingresar a Medicina, Ingeniería, Derecho, Psicología, Arquitectura, Enfermería, Sistemas y muchas más. Nuestra metodología se adapta a cualquier carrera y universidad.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 pb-20">
        <div className="rounded-3xl border-2 border-[#0173b2] p-10 text-center shadow-xl">
          <h2 className="text-3xl font-bold">Promoción especial por grupos</h2>
          <p className="mt-4 text-lg text-slate-600">Si vienes con tus amigos, cada integrante recibe <strong>15% de descuento</strong> en su matrícula.</p>
          <p className="mt-2 text-slate-500">Ideal para compañeros de colegio, hermanos o grupos de preparación universitaria.</p>
        </div>
      </section>

      <section className="bg-white py-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Universidades a las que llegan nuestros estudiantes</h2>
          <p className="mt-4 text-slate-600">Preparamos alumnos para su ingreso a universidades de todo el Ecuador, en todas las carreras y modalidades.</p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Universidad Central',
              'ESPOCH',
              'UTA',
              'UNACH',
              'ESPOL',
              'Universidad de Guayaquil',
              'ESPE',
              'Yachay Tech'
            ].map((uni) => (
              <div key={uni} className="rounded-3xl border p-6 shadow-lg bg-white hover:shadow-2xl transition">
                <div className="h-20 rounded-2xl bg-slate-100 flex items-center justify-center text-sm text-slate-500">
                  Logo de {uni}
                </div>
                <p className="mt-4 font-semibold text-slate-700">{uni}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Así vivimos la experiencia El Búho</h2>
          <p className="mt-4 text-center text-slate-600">Acompañamos a nuestros estudiantes en su crecimiento académico, vocacional y universitario con espacios reales de aprendizaje.</p>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
              <img src="/experiencia-buho-1.png" alt="Orientación vocacional" className="w-full h-[320px] object-cover" />
              <div className="p-6">
                <p className="font-semibold text-slate-700">Descubre quién eres y qué quieres ser</p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
              <img src="/experiencia-buho-2.png" alt="Clases en aula" className="w-full h-[320px] object-cover" />
              <div className="p-6">
                <p className="font-semibold text-slate-700">Seguimos formando futuros universitarios</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
