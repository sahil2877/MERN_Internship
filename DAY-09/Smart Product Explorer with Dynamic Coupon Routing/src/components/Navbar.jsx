export default function Navbar({ search, setSearch }) {

  return (
    <div className='navbar'>

      <h2>Smart Explorer</h2>

    <input
  type='text'
  placeholder='Search premium products...'

  value={search}

  onChange={(e) => setSearch(e.target.value)}
/>

    </div>
  )
}
