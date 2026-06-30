export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* NAV - Clean like Riverr */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tighter">SnapExpress</h1>
          
          <div className="flex items-center gap-10 text-sm uppercase tracking-widest">
            <span className="hover:text-gray-400 cursor-pointer">Shop</span>
            <span className="hover:text-gray-400 cursor-pointer">Create</span>
            <span className="hover:text-gray-400 cursor-pointer">For Brands</span>
            <span className="hover:text-gray-400 cursor-pointer">Track</span>
          </div>

          <button className="bg-white text-black px-8 py-3 rounded-full font-medium text-sm tracking-wider hover:bg-gray-200 transition">
            START CREATING
          </button>
        </div>
      </nav>

      {/* HERO - Big & Bold */}
      <section className="pt-32 pb-24 px-8 text-center max-w-5xl mx-auto">
        <h2 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none">
          YOUR VISION.<br />OUR CRAFT.
        </h2>
        <p className="mt-8 text-2xl text-gray-400 max-w-2xl mx-auto">
          Premium custom apparel. Professional DTG, DTF &amp; embroidery. Built for brands.
        </p>
        <div className="mt-12 flex gap-4 justify-center">
          <button className="bg-white text-black px-10 py-4 rounded-full text-lg font-medium">Create Now</button>
          <button className="border border-white/50 px-10 py-4 rounded-full text-lg font-medium hover:bg-white/10">Browse Products</button>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="border-y border-white/10 py-4 text-center text-sm tracking-widest text-gray-500">
        SAME DAY SAMPLES • NATIONWIDE SHIPPING • 24x24 MEGA PRINTS
      </div>

      {/* PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-5xl font-bold tracking-tight text-center mb-16">Signature Products</h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { name: "Premium Oversized Tees", emoji: "👕" },
            { name: "Heavyweight Hoodies", emoji: "🧥" },
            { name: "Crewneck Sweatshirts", emoji: "👕" },
            { name: "Embroidered Hats", emoji: "🧢" }
          ].map((p) => (
            <div key={p.name} className="group">
              <div className="aspect-square bg-neutral-900 rounded-3xl flex items-center justify-center text-8xl mb-6 group-hover:scale-105 transition">
                {p.emoji}
              </div>
              <h3 className="text-xl font-semibold text-center">{p.name}</h3>
              <button className="mt-4 w-full py-3 border border-white/30 rounded-full text-sm hover:bg-white/5">Customize →</button>
            </div>
          ))}
        </div>
      </section>

      {/* DESIGN STUDIO */}
      <section className="bg-neutral-900 py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter">Pro Design Studio</h2>
              <p className="mt-6 text-2xl text-gray-400">Upload your artwork. See it on product instantly. Real-time previews.</p>
              <button className="mt-10 bg-white text-black px-10 py-4 rounded-full">Upload Design</button>
            </div>
            
            <div className="bg-black border border-white/10 rounded-3xl aspect-video flex items-center justify-center text-9xl">
              👕
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS VALUE FOR OWNER */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <h2 className="text-5xl font-bold tracking-tight text-center mb-16">Built for Print Shop Owners</h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          {[
            ["24/7 Brand Portal", "Your customers order directly. No more texts and emails."],
            ["Live Production Dashboard", "See every order, status, and fulfillment in one place."],
            ["Scale Without Chaos", "Automate quoting, tracking, and payments."]
          ].map(([title, desc]) => (
            <div key={title} className="bg-neutral-900 p-10 rounded-3xl">
              <h3 className="text-3xl font-bold mb-4">{title}</h3>
              <p className="text-gray-400 text-lg">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ADMIN DASHBOARD PREVIEW */}
      <section className="bg-neutral-950 py-20 border-t border-b border-white/10">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-bold tracking-tight text-center mb-4">Your Control Center</h2>
          <p className="text-center text-gray-400 mb-12">Real-time order management</p>

          <div className="bg-neutral-900 rounded-3xl p-8 md:p-12">
            <div className="flex justify-between items-center mb-10">
              <div className="text-xl font-medium">SnapExpress • Dashboard</div>
              <div className="px-4 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">LIVE</div>
            </div>
            
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-5 space-y-6">
                <div className="bg-black p-8 rounded-2xl">
                  <p className="text-gray-400">Today's Revenue</p>
                  <p className="text-6xl font-bold mt-2">$4,872</p>
                </div>
                <div className="bg-black p-8 rounded-2xl">
                  <p className="text-gray-400">Active Orders</p>
                  <p className="text-6xl font-bold mt-2 text-orange-400">23</p>
                </div>
              </div>
              
              <div className="md:col-span-7">
                <h4 className="font-medium mb-6">Recent Orders</h4>
                <div className="space-y-4">
                  {["Gio's Brand • 80 Hoodies", "Local Crew • 45 Tees", "Streetwear Co • Hats"].map((o, i) => (
                    <div key={i} className="bg-black p-6 rounded-2xl flex justify-between items-center">
                      <span>{o}</span>
                      <span className="text-green-400 text-sm">In Production</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 text-center text-gray-500 border-t border-white/10">
        SnapExpress Printing • Premium Custom Apparel Platform • Preview 2026
      </footer>
    </div>
  )
}
