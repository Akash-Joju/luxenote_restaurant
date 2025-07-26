export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">
        Welcome to <span className="text-indigo-600">LuxeBite</span>
      </h2>
      <p className="text-lg text-gray-700 leading-8 mb-10">
        At <strong>LuxeBite</strong>, we don’t just serve meals—we craft unforgettable
        culinary experiences. Nestled in the heart of the city, our restaurant blends
        modern elegance with timeless flavors to bring you the ultimate dining escape.
      </p>

      <div className="grid md:grid-cols-2 gap-10 text-left">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Our Philosophy</h3>
          <p className="text-gray-600 leading-7">
            We believe that fine dining should be accessible, immersive, and inspired by
            global influences. Every dish at LuxeBite is made with locally sourced,
            seasonal ingredients and presented with artful precision.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Experience Luxe</h3>
          <p className="text-gray-600 leading-7">
            From romantic dinners to grand celebrations, LuxeBite offers a luxurious
            ambiance, personalized service, and a curated menu designed by renowned chefs.
            Indulge in our signature dishes and let your senses be delighted.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <p className="text-md text-gray-700">
          Whether you're here for a weekend brunch, an intimate dinner, or a private event—
          we promise an extraordinary experience. Come taste the difference at LuxeBite.
        </p>
      </div>
    </section>
  )
}
