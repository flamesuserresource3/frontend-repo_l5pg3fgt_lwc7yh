import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} EPLink. Semua hak dilindungi.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#fitur" className="text-slate-600 hover:text-slate-900">Fitur</a>
          <a href="#paket" className="text-slate-600 hover:text-slate-900">Paket</a>
          <a href="#review" className="text-slate-600 hover:text-slate-900">Review</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <section id="fitur" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {[{
                title: "Siap Pakai & Mudah",
                desc: "Pasang widget live chat dalam hitungan menit. Tanpa coding, tanpa ribet.",
              }, {
                title: "Kolaborasi Tim",
                desc: "Bagi antrian, atur prioritas, dan pantau performa tiap agen.",
              }, {
                title: "Analitik Cerdas",
                desc: "Lihat jam ramai, topik pertanyaan, dan kepuasan pelanggan untuk keputusan cepat.",
              }].map((f) => (
                <div key={f.title} className="rounded-2xl border bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-lg" style={{ color: "#0d47a1" }}>{f.title}</h3>
                  <p className="mt-2 text-slate-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
