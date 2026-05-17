function TableDemo() {
  return (
    <div className="px-5 py-10 overflow-x-auto">
      <h2 className="text-4xl font-bold text-center mb-8">
        Table
      </h2>

      <table className="table bg-base-100 rounded-xl">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Sahil</td>
            <td>Frontend Dev</td>
            <td>
              <div className="badge badge-success">
                Active
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableDemo
