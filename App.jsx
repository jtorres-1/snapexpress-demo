export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
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

      {/* HERO */}
      <section className="pt-32 pb-24 px-8 text-center max-w-5xl mx-auto">
        <h2 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none">
          YOUR VISION.<br />OUR CRAFT.
        </h2>
        <p className="mt-8 text-2xl text-gray-400 max-w-2xl mx-auto">
          Premium custom apparel. Professional DTG, DTF & embroidery. Built for brands.
        </p>
        <div className="mt-12 flex gap-4 justify-center">
          <button className="bg-white text-black px-10 py-4 rounded-full text-lg font-medium">Create Now</button>
          <button className="border border-white/50 px-10 py-4 rounded-full text-lg font-medium hover:bg-white/10">Browse Products</button>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-5xl font-bold tracking-tight text-center mb-16">Signature Products</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {["Premium Oversized Tees", "Heavyweight Hoodies", "Crewneck Sweatshirts", "Embroidered Hats"].map(name => (
            <div key={name} className="group">
              <div className="aspect-square bg-neutral-900 rounded-3xl flex items-center justify-center text-8xl mb-6 group-hover:scale-105 transition">👕</div>
              <h3 className="text-xl font-semibold text-center">{name}</h3>
              <button className="mt-4 w-full py-3 border border-white/30 rounded-full text-sm hover:bg-white/5">Customize →</button>
            </div>
          ))}
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="bg-neutral-900 py-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-bold tracking-tight text-center mb-4">Owner Dashboard</h2>
          <p className="text-center text-gray-400 text-xl mb-12">Real-time control of your print business</p>
          
          <div className="bg-black rounded-3xl p-12 border border-white/10">
            <div className="flex justify-between mb-10">
              <div>SnapExpress Control Panel</div>
              <div className="text-green-400">● LIVE</div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-neutral-900 p-8 rounded-2xl">$4,872 Today's Revenue</div>
                <div className="bg-neutral-900 p-8 rounded-2xl">23 Active Orders</div>
              </div>
              <div>
                <h4 className="mb-4">Recent Orders</h4>
                <div className="space-y-3">
                  {["Gio's • 80 Hoodies", "Streetwear Co • 45 Tees", "Local Crew • Hats"].map((o,i) => (
                    <div key={i} className="bg-neutral-900 p-5 rounded-2xl flex justify-between">
                      <span>{o}</span>
                      <span className="text-green-400">In Production</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 text-center text-gray-500 border-t border-white/10">
        SnapExpress • Premium Custom Printing Platform • Live Preview
      </footer>
    </div>
  )
}
