import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <Link href="/listed-books">
      Listed Books
      </Link>
    </div>
  )
}

export default Navbar