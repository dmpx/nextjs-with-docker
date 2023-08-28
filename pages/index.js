import React from 'react'
import Link from 'next/link'

export default function Home() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(open => !open)
  }
  return (
    <div>

      <p>pages</p>
      <button onClick={handleOpen}>button</button>
      {open ? 'block' : 'none'}

      <p>
        <Link href='/test'>Link App Router</Link>
      </p>

    </div>
  )
}
