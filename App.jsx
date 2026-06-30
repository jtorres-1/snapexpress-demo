export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">

      {/* NAV */}
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold">
          SnapExpress
        </h1>

        <div className="flex gap-8 text-gray-300">
          <span>Shop</span>
          <span>Create</span>
          <span>Brands</span>
          <span>Track Order</span>
        </div>

        <button className="bg-white text-black px-5 py-2 rounded-full">
          Start Designing
        </button>
      </nav>


      {/* HERO */}
      <section className="px-10 py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-6xl font-bold leading-tight">
            Bring Your
            <br/>
            Vision To Life
          </h2>

          <p className="mt-6 text-xl text-gray-400">
            Create custom apparel, upload your designs,
            and have your products produced and delivered.
          </p>


          <div className="mt-8 flex gap-4">

            <button className="bg-blue-600 px-8 py-4 rounded-xl">
              Create Product
            </button>

            <button className="border border-gray-700 px-8 py-4 rounded-xl">
              Explore Shop
            </button>

          </div>
        </div>


        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-10 h-96 flex items-center justify-center">

          <div className="bg-white text-black rounded-2xl p-10 text-center">

            <div className="text-6xl">
              👕
            </div>

            <h3 className="text-2xl font-bold mt-4">
              Custom Hoodie
            </h3>

            <p>
              Your design. Your brand.
            </p>

          </div>

        </div>

      </section>



      {/* PRODUCTS */}
      <section className="px-10 py-16">

        <h2 className="text-4xl font-bold mb-10">
          Create Custom Products
        </h2>


        <div className="grid md:grid-cols-4 gap-6">


          {[
            "T-Shirts",
            "Hoodies",
            "Sweatshirts",
            "Hats"
          ].map((item)=>(
            
            <div className="bg-neutral-900 rounded-2xl p-6 hover:scale-105 transition">

              <div className="h-40 bg-neutral-800 rounded-xl flex items-center justify-center text-6xl">
                👕
              </div>

              <h3 className="text-xl font-bold mt-5">
                {item}
              </h3>

              <button className="mt-4 bg-white text-black px-5 py-2 rounded-full">
                Customize
              </button>

            </div>

          ))}


        </div>

      </section>




      {/* DESIGN STUDIO */}
      <section className="px-10 py-20">

        <div className="bg-neutral-900 rounded-3xl p-10">

          <h2 className="text-4xl font-bold">
            Design Studio
          </h2>


          <p className="text-gray-400 mt-3">
            Upload artwork and preview your products instantly.
          </p>



          <div className="mt-10 grid md:grid-cols-2 gap-10">


            <div className="border border-dashed border-gray-600 rounded-2xl h-72 flex items-center justify-center">

              Upload Your Design

            </div>



            <div className="bg-neutral-800 rounded-2xl flex items-center justify-center">

              <div className="text-center">

                <div className="text-8xl">
                  👕
                </div>

                <h3 className="text-2xl">
                  Your Brand Here
                </h3>

              </div>

            </div>


          </div>

        </div>


      </section>




      {/* PROCESS */}
      <section className="px-10 py-20">

        <h2 className="text-4xl font-bold">
          From Design To Delivery
        </h2>


        <div className="grid md:grid-cols-4 gap-5 mt-10">


          {[
            "Upload",
            "Customize",
            "Order",
            "Delivered"
          ].map((step)=>(

            <div className="bg-neutral-900 p-8 rounded-2xl">

              <h3 className="text-xl font-bold">
                {step}
              </h3>

              <p className="text-gray-400 mt-2">
                Simple workflow for creators and brands.
              </p>

            </div>

          ))}


        </div>


      </section>



      {/* FOOTER */}
      <footer className="border-t border-neutral-800 p-8 text-center text-gray-500">

        SnapExpress Printing Marketplace

      </footer>


    </div>
  )
}
