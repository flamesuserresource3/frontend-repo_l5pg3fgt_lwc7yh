import { Rocket, Shield, Zap, Check } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `radial-gradient(circle at 20% 20%, #0d47a1 0, transparent 40%), radial-gradient(circle at 80% 30%, #0d47a1 0, transparent 35%), radial-gradient(circle at 50% 80%, #0d47a1 0, transparent 40%)` }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "#0d47a1" }}>
              EPLink • Penyedia Live Chat
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Ubah Pengunjung Jadi Pelanggan dengan Live Chat Profesional
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Bangun kepercayaan, jawab pertanyaan lebih cepat, dan tingkatkan konversi dengan solusi Live Chat lengkap dari EPLink.
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
              {[{icon: Rocket, text: "Setup cepat & mudah"}, {icon: Shield, text: "Keamanan & privasi data"}, {icon: Zap, text: "Notifikasi real-time"}, {icon: Check, text: "Integrasi multi-platform"}].map(({icon:Icon, text}) => (
                <li key={text} className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: "#0d47a1" }}>
                    <Icon size={16} />
                  </div>
                  {text}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#paket" className="px-6 py-3 rounded-md text-white font-medium shadow-md" style={{ backgroundColor: "#0d47a1" }}>Lihat Paket</a>
              <a href="#fitur" className="px-6 py-3 rounded-md border border-slate-300 text-slate-700 font-medium">Pelajari Fitur</a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="h-full w-full grid grid-cols-12">
                <div className="col-span-3 border-r border-slate-200 p-3 bg-slate-50">
                  {["Semua", "Menunggu", "Aktif", "Selesai"].map((t) => (
                    <div key={t} className="px-3 py-2 text-sm rounded-md mb-2 last:mb-0 cursor-default hover:bg-white">
                      {t}
                    </div>
                  ))}
                </div>
                <div className="col-span-9 p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-slate-200" />
                    <div>
                      <p className="font-semibold">Pengunjung #352</p>
                      <p className="text-xs text-slate-500">Butuh bantuan memilih paket</p>
                    </div>
                    <span className="ml-auto text-xs px-2 py-1 rounded-full text-white" style={{ backgroundColor: "#0d47a1" }}>Aktif</span>
                  </div>
                  <div className="mt-4 space-y-3 text-sm">
                    <div className="max-w-[80%] bg-slate-100 rounded-lg p-3">Halo, paket apa yang cocok untuk toko saya?</div>
                    <div className="max-w-[80%] bg-[#e8f0fe] rounded-lg p-3 ml-auto">Halo! Untuk penjualan awal, paket Starter sudah sangat cukup. Nanti bisa upgrade kapan saja.</div>
                    <div className="max-w-[70%] bg-slate-100 rounded-lg p-3">Ada integrasi WhatsApp juga?</div>
                    <div className="max-w-[80%] bg-[#e8f0fe] rounded-lg p-3 ml-auto">Tentu! Integrasi multi-platform termasuk di semua paket EPLink.</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500 text-center">Ilustrasi antarmuka Live Chat EPLink</p>
          </div>
        </div>
      </div>
    </section>
  );
}
