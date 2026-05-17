function Navbar() {

  return (

    <div className="navbar bg-base-100 shadow-lg px-5 sticky top-0 z-50">

      <div className="flex-1">

        <a className="text-3xl font-bold text-primary">
          TailwindUI Lab
        </a>

      </div>


      <div className="hidden md:flex gap-3">

        <a className="btn btn-ghost">
          Home
        </a>

        <a className="btn btn-ghost">
          Components
        </a>

        <a className="btn btn-primary">
          Docs
        </a>

      </div>

    </div>

  )

}

export default Navbar