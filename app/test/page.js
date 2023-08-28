'use client'
import React from 'react'
import Link from 'next/link'

function Test() {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(open => !open)
  }

  return (
    <div>
      <button onClick={handleOpen}>button</button>
      {open ? 'block' : 'none'}

      <p>
        <Link href='/'>back</Link>
      </p>
    </div>
  )
}

export default Test