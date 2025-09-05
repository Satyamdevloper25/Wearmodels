"use client"

export default function LabsSection() {
  const portfolioItems = [
    {
      id: 1,
      title: "Fashion Apparel Transformation",
      before: "/plain-white-t-shirt-mockup.jpg",
      after: "/professional-model-wearing-stylish-t-shirt-in-stud.jpg",
      category: "Apparel",
    },
    {
      id: 2,
      title: "Luxury Watch Photography",
      before: "/simple-watch-product-mockup.jpg",
      after: "/luxury-watch-on-model-wrist-professional-lighting.jpg",
      category: "Accessories",
    },
    {
      id: 3,
      title: "Cosmetics Brand Shoot",
      before: "/basic-cosmetic-product-mockup.jpg",
      after: "/professional-model-applying-makeup-with-product.jpg",
      category: "Beauty",
    },
    {
      id: 4,
      title: "Footwear Collection",
      before: "/plain-shoe-mockup-white-background.jpg",
      after: "/model-wearing-stylish-shoes-in-urban-setting.jpg",
      category: "Footwear",
    },
    {
      id: 5,
      title: "Jewelry Showcase",
      before: "/simple-jewelry-mockup.jpg",
      after: "/elegant-model-wearing-jewelry-professional-portrai.jpg",
      category: "Jewelry",
    },
    {
      id: 6,
      title: "Activewear Campaign",
      before: "/basic-activewear-mockup.jpg",
      after: "/fitness-model-in-activewear-dynamic-pose.jpg",
      category: "Activewear",
    },
  ]

  return (
    <section id="labs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-secondary italic instrument">Labs</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Explore our portfolio of transformations. See how we convert simple mockups into professional model
            photography that drives results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.before || "/placeholder.svg"}
                      alt={`${item.title} - Before`}
                      className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-500"
                    />
                    <img
                      src={item.after || "/placeholder.svg"}
                      alt={`${item.title} - After`}
                      className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">Hover to see transformation</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">{item.title}</h3>
                  <p className="text-muted text-sm">Professional model photography transformation</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
