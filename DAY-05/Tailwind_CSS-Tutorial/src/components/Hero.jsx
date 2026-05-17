function Hero() {
  return (
    <div className="hero min-h-[70vh]">
      <div className="hero-content text-center">
        <div>
          <div className="badge badge-secondary mb-4">
            TAILWIND + DAISYUI
          </div>

          <h1 className="text-5xl md:text-7xl font-bold">
            Component Showcase
          </h1>

          <p className="py-6 text-lg max-w-2xl mx-auto">
            Explore beautiful Tailwind CSS and DaisyUI components.
          </p>

          <button className="btn btn-primary btn-lg">
            Explore Components
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
