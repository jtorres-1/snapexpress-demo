export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">

      {/* NAV */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-neutral-800">
        <h1 className="text-3xl font-bold tracking-tight">SnapExpress</h1>

        <div className="flex gap-8 text-gray-300">
          <span className="hover:text-white cursor-pointer">Shop</span>
          <span className="hover:text-white cursor-pointer">Create</span>
          <span className="hover:text-white cursor-pointer">For Brands</span>
          <span className="hover:text-white cursor-pointer">Track Order</span>
        </div>

        <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
          Start Designing
        </button>
      </nav>

      {/* HERO */}
      <section className="px-8 md:px-16 py-24 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div>
          <h2 className="text-6xl md:text-7xl font-bold leading-tight">
            Bring Your<br />
            Vision To Life
          </h2>
          <p className="mt-6 text-2xl text-gray-400">
            Professional custom apparel for brands. Upload designs, order online, and track production in real time.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-500 px-10 py-4 rounded-2xl text-lg font-medium transition">
              Create Product Now
            </button>
            <button className="border border-gray-700 hover:border-gray-500 px-10 py-4 rounded-2xl text-lg font-medium transition">
              Browse Products
            </button>
          </div>

          <p className="mt-8 text-gray-500">Trusted by apparel brands nationwide</p>
        </div>

        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 flex items-center justify-center relative overflow-hidden">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center shadow-2xl">
            <div className="text-7xl mb-4">👕</div>
            <h3 className="text-3xl font-bold">Custom Hoodie</h3>
            <p className="text-gray-300 mt-2">Your design • Your colors • Your brand</p>
          </div>
        </div>
      </section>

      {/* BUSINESS VALUE - This section sells the OWNER */}
      <section className="bg-neutral-900 py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Why Printing Shops Are Switching</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["24/7 Orders", "Never miss an order again. Brands can order even when you're closed."],
              ["80% Less Admin", "Automated quoting and order management."],
              ["National Scale", "Sell to brands across the country, not just local clients."]
            ].map(([title, desc]) => (
              <div key={title} className="bg-neutral-950 p-8 rounded-3xl">
                <div className="text-5xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-8 md:px-16 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Popular Custom Products</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: "Premium T-Shirts", emoji: "👕" },
            { name: "Heavy Hoodies", emoji: "🧥" },
            { name: "Crewnecks", emoji: "👕" },
            { name: "Snapback Hats", emoji: "🧢" }
          ].map((item) => (
            <div key={item.name} className="bg-neutral-900 rounded-3xl p-6 hover:scale-105 transition-all group">
              <div className="h-52 bg-neutral-800 rounded-2xl flex items-center justify-center text-7xl mb-6 group-hover:scale-110 transition">
                {item.emoji}
              </div>
              <h3 className="text-xl font-bold">{item.name}</h3>
              <button className="mt-6 w-full bg-white text-black py-3 rounded-2xl font-medium hover:bg-gray-200">
                Customize →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* DESIGN STUDIO PREVIEW */}
      <section className="px-8 md:px-16 py-20 bg-neutral-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-3">Instant Design Studio</h2>
          <p className="text-gray-400 text-xl">Upload → Customize → Preview in seconds</p>

          <div className="mt-12 grid md:grid-cols-2 gap-10">
            <div className="border-2 border-dashed border-gray-700 rounded-3xl h-96 flex flex-col items-center justify-center hover:border-blue-500 transition">
              <div className="text-6xl mb-6">📤</div>
              <p className="text-2xl font-medium">Drop your design here</p>
              <p className="text-gray-500 mt-2">PNG, SVG, or PSD supported</p>
            </div>

            <div className="bg-neutral-800 rounded-3xl p-10 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-6">👕</div>
                <h3 className="text-3xl font-bold">Your Brand On Point</h3>
                <p className="text-gray-400 mt-3">Real-time preview on multiple products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-8 md:px-16 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">From Design To Delivery</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "1. Upload", desc: "Submit your artwork" },
            { step: "2. Customize", desc: "Choose products & styles" },
            { step: "3. Approve", desc: "Review mockups & pricing" },
            { step: "4. Delivered", desc: "Printed & shipped to your customers" }
          ].map((item, i) => (
            <div key={i} className="bg-neutral-900 p-8 rounded-3xl text-center">
              <div className="text-4xl font-mono text-blue-500 mb-4">{item.step}</div>
              <h3 className="font-bold text-xl">{item.desc}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ADMIN DASHBOARD PREVIEW - MOST IMPORTANT FOR OWNER */}
      <section className="px-8 md:px-16 py-20 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-3 text-center">Owner Dashboard</h2>
          <p className="text-center text-gray-400 text-xl mb-12">Everything you need in one place</p>

          <div className="bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden">
            {/* Fake top bar */}
            <div className="bg-neutral-900 px-8 py-4 flex justify-between items-center border-b border-neutral-800">
              <div className="font-medium">SnapExpress Dashboard</div>
              <div className="text-green-400">• Live</div>
            </div>

            <div className="p-8 grid md:grid-cols-12 gap-8">
              {/* Stats */}
              <div className="md:col-span-5 space-y-6">
                <div className="bg-neutral-900 p-6 rounded-2xl">
                  <p className="text-gray-400">Today's Revenue</p>
                  <p className="text-5xl font-bold mt-2">$2,847</p>
                </div>
                <div className="bg-neutral-900 p-6 rounded-2xl">
                  <p className="text-gray-400">Pending Orders</p>
                  <p className="text-5xl font-bold mt-2 text-orange-400">14</p>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="md:col-span-7">
                <h3 className="font-medium mb-4">Recent Orders</h3>
                <div className="space-y-3">
                  {["BrandX Hoodies • 45 units", "Streetwear Co • 120 Tees", "Local Crew • Custom Caps"].map((order, i) => (
                    <div key={i} className="bg-neutral-900 p-4 rounded-2xl flex justify-between">
                      <div>{order}</div>
                      <div className="text-green-400">In Production</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 py-12 text-center text-gray-500">
        <p>SnapExpress — Custom Printing Platform Demo</p>
        <p className="mt-2 text-sm">Built as a preview for [Client Name] • June 2026</p>
      </footer>
    </div>
  )
}
