function CardsDemo() {
  return (
    <div className="px-5 py-10">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Cards
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src="https://picsum.photos/400/250" />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              Modern UI
            </h2>

            <p>Beautiful responsive components.</p>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsDemo
