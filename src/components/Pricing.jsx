import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "99.000",
    period: "/bulan",
    highlight: false,
    features: [
      "1 agen aktif",
      "Chat tak terbatas",
      "Widget kustom basic",
      "Integrasi WhatsApp",
    ],
  },
  {
    name: "Growth",
    price: "199.000",
    period: "/bulan",
    highlight: true,
    features: [
      "3 agen aktif",
      "Routing percakapan",
      "Shortcut & template",
      "Integrasi multi-platform",
    ],
  },
  {
    name: "Pro",
    price: "399.000",
    period: "/bulan",
    highlight: false,
    features: [
      "10 agen aktif",
      "Analitik & laporan",
      "CSAT & rating",
      "Support prioritas",
    ],
  },
  {
    name: "Enterprise",
    price: "Hubungi kami",
    period: "",
    highlight: false,
    features: [
      "Kebutuhan kustom",
      "SLA & SSO",
      "Onboarding khusus",
      "Akses API penuh",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="paket" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Paket EPLink yang Fleksibel</h2>
          <p className="mt-3 text-slate-600">Pilih paket sesuai tahap pertumbuhan bisnis Anda. Upgrade kapan saja, tanpa ribet.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((p) => (
            <div key={p.name} className={`rounded-2xl border bg-white p-6 flex flex-col ${p.highlight ? "shadow-xl ring-1" : "shadow-sm"}`} style={p.highlight ? { borderColor: "#0d47a1", boxShadow: "0 10px 20px rgba(13,71,161,0.1)" } : {}}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-slate-900">{p.name}</h3>
                {p.highlight && (
                  <span className="text-xs font-semibold px-2 py-1 rounded-full text-white" style={{ backgroundColor: "#0d47a1" }}>
                    Terpopuler
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-3xl font-bold text-slate-900">{p.price}</span>
                <span className="text-slate-500">{p.period}</span>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-slate-700 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 h-5 w-5 rounded-full flex items-center justify-center text-white flex-none" style={{ backgroundColor: "#0d47a1" }}>
                      <Check size={14} />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#hubungi" className={`mt-6 w-full text-center px-4 py-2 rounded-md font-medium ${p.highlight ? "text-white" : "text-slate-700 border border-slate-300"}`} style={p.highlight ? { backgroundColor: "#0d47a1" } : {}}>
                {p.price === "Hubungi kami" ? "Hubungi Kami" : "Coba Sekarang"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
