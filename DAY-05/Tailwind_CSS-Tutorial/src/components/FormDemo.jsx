function FormDemo() {
  return (
    <div className="px-5 py-10 max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">
        Forms
      </h2>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body space-y-4">
          <input type="text" placeholder="Name" className="input input-bordered" />
          <input type="email" placeholder="Email" className="input input-bordered" />
          <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>

          <button className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default FormDemo
