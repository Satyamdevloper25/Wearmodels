"use client"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6">
              About <span className="text-secondary italic instrument">WearModels</span>
            </h2>
            <p className="text-lg text-muted mb-6 leading-relaxed">
              We specialize in transforming simple product mockups into stunning professional model photography and
              videos. Our team of experienced photographers and creative professionals work with fashion brands,
              e-commerce businesses, and marketing agencies to create compelling visual content that drives conversions.
            </p>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              With years of experience in fashion photography and digital marketing, we understand what it takes to make
              products look irresistible. From concept to final delivery, we handle every aspect of the creative
              process.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                <div className="text-sm text-muted">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">150+</div>
                <div className="text-sm text-muted">Happy Clients</div>
              </div>
            </div>

            <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/90 transition-colors">
              Learn More About Our Process
            </button>
          </div>

          <div className="relative">
            <img
              src="/professional-photographer-working-with-model-in-st.jpg"
              alt="Professional photography studio"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-card-foreground">Quality Guaranteed</div>
                  <div className="text-sm text-muted">Professional results every time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
