export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">

      <nav className="flex justify-between items-center p-6 border-b">
        <h1 className="text-2xl font-bold">
          SnapExpress
        </h1>

        <div className="space-x-6 text-sm">
          Products
          Design
          Brands
        </div>
      </nav>


      <section className="px-8 py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>

          <h2 className="text-6xl font-bold leading-tight">
            Turn your ideas into real products.
          </h2>

          <p className="mt-6 text-xl text-gray-600">
            Create custom clothing, upload your designs,
            and get your products printed and shipped.
          </p>

          <button className="mt-8 bg-black text-white px-8 py-4 rounded-full">
            Start Creating
          </button>

        </div>


        <div className="bg-gray-100 rounded-3xl h-96 flex items-center justify-center">

          <div className="bg-white rounded-xl shadow-xl w-56 h-72 flex items-center justify-center text-xl">
            Hoodie Preview
          </div>

        </div>


      </section>



      <section className="p-8">

        <h2 className="text-4xl font-bold mb-8">
          Create anything
        </h2>


        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">

          {[
            "T-Shirts",
            "Hoodies",
            "Hats",
            "Posters",
            "Stickers"
          ].map(x=>

            <div className="rounded-2xl bg-gray-100 p-8 text-center">
              <div className="h-32 flex items-center justify-center">
                {x}
              </div>

              <button className="bg-black text-white px-5 py-2 rounded-full">
                Customize
              </button>

            </div>

          )}

        </div>

      </section>



      <section className="p-8">

        <h2 className="text-4xl font-bold mb-8">
          Design Studio
        </h2>


        <div className="grid md:grid-cols-3 gap-6">


          <div className="border rounded-3xl p-6">

            <h3 className="font-bold text-xl">
              Customize
            </h3>

            <div className="mt-5 space-y-4">

              <div className="border p-3 rounded-xl">
                Upload Artwork
              </div>

              <div className="border p-3 rounded-xl">
                Choose Product
              </div>

              <div className="border p-3 rounded-xl">
                Pick Color
              </div>

              <div className="border p-3 rounded-xl">
                Add Branding
              </div>

            </div>

          </div>



          <div className="bg-gray-100 rounded-3xl flex items-center justify-center">

            <div className="bg-white shadow-xl rounded-xl w-52 h-64 flex items-center justify-center">
              Your Design
            </div>

          </div>



          <div className="border rounded-3xl p-6">

            <h3 className="text-xl font-bold">
              Order
            </h3>

            <p className="mt-5">
              Hoodie
            </p>

            <p>
              Quantity: 50
            </p>

            <p>
              Delivery Ready
            </p>


            <button className="mt-8 w-full bg-black text-white py-3 rounded-full">
              Continue
            </button>

          </div>


        </div>

      </section>



      <section className="p-8 py-20 text-center">

        <h2 className="text-5xl font-bold">
          From idea to delivery.
        </h2>


        <div className="mt-10 flex justify-center gap-6 flex-wrap">

          <div className="p-6 rounded-2xl bg-gray-100">
            Design
          </div>

          <div className="p-6 rounded-2xl bg-gray-100">
            Print
          </div>

          <div className="p-6 rounded-2xl bg-gray-100">
            Ship
          </div>

        </div>

      </section>


    </div>
  )
}
