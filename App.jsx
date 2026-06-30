export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      <section className="px-8 py-20 text-center">
        <h1 className="text-5xl font-bold">
          Bring Your Designs To Life
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          Custom apparel printing for brands, creators, and businesses.
          Upload your design, customize products, and we handle fulfillment.
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


      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold mb-10">
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
              className="bg-zinc-900 rounded-xl p-8"
            >
              <div className="h-40 bg-zinc-800 rounded-lg mb-5 flex items-center justify-center">
                Product Preview
              </div>

              <h3 className="text-xl font-semibold">
                {item}
              </h3>

              <button className="mt-5 w-full bg-white text-black py-3 rounded-lg">
                Customize
              </button>
            </div>
          ))}

        </div>
      </section>


      <section className="px-8 py-20 text-center">
        <h2 className="text-4xl font-bold">
          From Design To Delivery
        </h2>

        <div className="mt-10 grid md:grid-cols-4 gap-5">

          <div>Upload Design</div>
          <div>Customize Product</div>
          <div>Approve Order</div>
          <div>We Ship It</div>

        </div>
      </section>

    </div>
  )
}
