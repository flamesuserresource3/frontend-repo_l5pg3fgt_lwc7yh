import { MessageCircle, Phone, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#home", label: "Beranda" },
    { href: "#fitur", label: "Fitur" },
    { href: "#paket", label: "Paket" },
    { href: "#review", label: "Review" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg flex items-center justify-center text-white" style={{ backgroundColor: "#0d47a1" }}>
              <MessageCircle size={20} />
            </div>
            <span className="font-semibold text-lg tracking-tight" style={{ color: "#0d47a1" }}>EPLink</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-slate-900 transition-colors">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#paket" className="px-4 py-2 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 transition">Lihat Paket</a>
            <a href="#hubungi" className="px-4 py-2 rounded-md text-white flex items-center gap-2 shadow" style={{ backgroundColor: "#0d47a1" }}>
              <Phone size={18} /> Konsultasi
            </a>
          </div>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 rounded-md border border-slate-300">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-100">
                  {n.label}
                </a>
              ))}
              <a href="#paket" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md border border-slate-300">Lihat Paket</a>
              <a href="#hubungi" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-white text-center" style={{ backgroundColor: "#0d47a1" }}>
                Konsultasi
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
