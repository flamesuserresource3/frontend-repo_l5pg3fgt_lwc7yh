import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dewi Putri",
    role: "Owner, Toko Kue Manis",
    text: "Sejak pakai EPLink, balasan lebih cepat dan pelanggan makin puas. Konversi naik 35%!",
    rating: 5,
  },
  {
    name: "Rifqi Akbar",
    role: "Marketing, GadgetKu",
    text: "Integrasinya simpel tapi powerful. Tim bisa handle banyak chat tanpa kewalahan.",
    rating: 5,
  },
  {
    name: "Nadya S.",
    role: "Founder, Studio Skincare",
    text: "Analitiknya membantu kami tahu jam ramai dan topik pertanyaan, jadi strategi lebih tepat.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="review" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Apa Kata Pengguna EPLink</h2>
          <p className="mt-3 text-slate-600">Cerita asli dari pelaku bisnis yang sudah merasakan dampaknya.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative rounded-2xl border bg-white p-6 shadow-sm">
              <Quote className="absolute -top-4 -left-4 p-2 h-10 w-10 rounded-lg text-white" style={{ backgroundColor: "#0d47a1" }} />
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-3 text-slate-700">“{t.text}”</blockquote>
              <figcaption className="mt-5">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div id="hubungi" className="mt-14 text-center">
          <div className="inline-flex items-center gap-4 p-4 rounded-2xl border bg-white shadow-sm">
            <div className="text-left">
              <p className="font-semibold text-slate-900">Siap naikkan penjualan dengan EPLink?</p>
              <p className="text-sm text-slate-600">Konsultasi gratis untuk rekomendasi paket terbaik.</p>
            </div>
            <a href="#paket" className="px-5 py-2 rounded-md text-white font-medium" style={{ backgroundColor: "#0d47a1" }}>
              Lihat Paket
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
