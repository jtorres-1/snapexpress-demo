export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="px-8 py-20 text-center">

        <h1 className="text-5xl md:text-6xl font-bold">
          Bring Your Designs To Life
        </h1>

        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
          A custom printing marketplace where brands can upload,
          customize, order, and receive their products anywhere.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="bg-white text-black px-8 py-4 rounded-xl">
            Start Designing
          </button>

          <button className="border border-white px-8 py-4 rounded-xl">
            Explore Products
          </button>

        </div>

      </section>


      {/* PRODUCTS */}
      <section className="px-8 py-16">

        <h2 className="text-4xl font-bold mb-10">
          Create Custom Products
        </h2>


        <div className="grid md:grid-cols-4 gap-6">

          {[
            "T-Shirts",
            "Hoodies",
            "Sweatshirts",
            "Hats"
          ].map((item) => (

            <div
              key={item}
              className="bg-zinc-900 rounded-xl p-6"
            >

              <div className="h-48 bg-zinc-800 rounded-lg flex items-center justify-center">
                {item}
              </div>


              <button className="mt-6 w-full bg-white text-black py-3 rounded-lg">
                Customize
              </button>

            </div>

          ))}

        </div>

      </section>



      {/* DESIGN STUDIO */}
      <section className="px-8 py-20">

        <h2 className="text-4xl font-bold text-center">
          Design Studio
        </h2>

        <p className="text-center mt-4 text-gray-300">
          Upload artwork, customize products, and prepare your order.
        </p>


        <div className="mt-12 grid md:grid-cols-3 gap-6">


          {/* TOOLS */}

          <div className="bg-zinc-900 rounded-xl p-6">

            <h3 className="text-xl font-bold mb-5">
              Customize
            </h3>


            <div className="space-y-4">

              <div className="border border-zinc-700 p-4 rounded-lg">
                Upload Design
              </div>

              <div className="border border-zinc-700 p-4 rounded-lg">
                Choose Product
              </div>

              <div className="border border-zinc-700 p-4 rounded-lg">
                Select Sizes
              </div>

              <div className="border border-zinc-700 p-4 rounded-lg">
                Pick Colors
              </div>

            </div>

          </div>



          {/* MOCK PRODUCT */}

          <div className="bg-zinc-900 rounded-xl p-6 flex items-center justify-center">

            <div className="w-56 h-64 bg-white rounded-xl text-black flex items-center justify-center text-center">

              Custom
              <br/>
              Apparel
              <br/>
              Preview

            </div>

          </div>



          {/* ORDER */}

          <div className="bg-zinc-900 rounded-xl p-6">

            <h3 className="text-xl font-bold mb-5">
              Order Summary
            </h3>


            <div className="space-y-3 text-gray-300">

              <p>
                Product: Hoodie
              </p>

              <p>
                Quantity: 50
              </p>

              <p>
                Custom Print: Yes
              </p>


              <hr />


              <p className="text-white text-2xl font-bold">
                Estimate: $750
              </p>


            </div>


            <button className="mt-8 w-full bg-white text-black py-3 rounded-lg">

              Continue Order

            </button>


          </div>


        </div>


      </section>




      {/* PROCESS */}

      <section className="px-8 py-20 text-center">

        <h2 className="text-4xl font-bold">
          From Design To Delivery
        </h2>


        <div className="mt-12 grid md:grid-cols-4 gap-5">


          <div className="bg-zinc-900 p-8 rounded-xl">
            Upload Design
          </div>


          <div className="bg-zinc-900 p-8 rounded-xl">
            Customize
          </div>


          <div className="bg-zinc-900 p-8 rounded-xl">
            Approve Order
          </div>


          <div className="bg-zinc-900 p-8 rounded-xl">
            Print & Ship
          </div>


        </div>


      </section>




      {/* VALUE */}

      <section className="px-8 py-20 text-center">

        <h2 className="text-4xl font-bold">
          Built For Growing Brands
        </h2>


        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">

          Give creators and businesses a simple way to
          turn ideas into finished products without
          complicated ordering.

        </p>


      </section>


    </div>
  )
}
