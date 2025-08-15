import Link from 'next/link'
export default function Nav(){
  return (
    <nav className="w-full max-w-5xl mx-auto flex items-center justify-between py-6 px-4">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="90's-G Logo" width="40" height="40" className="rounded-full" />
        <span className="font-extrabold tracking-widest text-lg">90'S-G</span>
      </div>
      <div className="flex items-center gap-5">
        <Link href="/">Home</Link>
        <Link href="/booking">Booking</Link>
      </div>
    </nav>
  )
}