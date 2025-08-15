import Head from 'next/head'
import { SITE } from '../site.config'
import Nav from '../components/Nav'

export default function Booking(){
  function submit(e){
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    const subject = encodeURIComponent("Booking request — " + (data.name || ""))
    const body = encodeURIComponent(Object.entries(data).map(([k,v])=>`${k}: ${v}`).join("\n"))
    window.location.href = `mailto:${SITE.EMAIL}?subject=${subject}&body=${body}`
  }
  return (
    <>
      <Head><title>Booking — {SITE.NAME}</title></Head>
      <main className="min-h-screen flex flex-col">
        <Nav />
        <section className="flex-1 flex flex-col items-center px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-widest mt-8">Book a Session</h1>
          <form onSubmit={submit} className="mt-6 w-full max-w-xl grid gap-3 text-left bg-black/60 border border-gold/50 rounded-xl p-5">
            <input name="name" placeholder="Name" className="px-4 py-3 rounded bg-black border border-gold/40" required />
            <input type="email" name="email" placeholder="Email" className="px-4 py-3 rounded bg-black border border-gold/40" required />
            <input name="phone" placeholder="Phone" className="px-4 py-3 rounded bg-black border border-gold/40" />
            <input type="date" name="date" className="px-4 py-3 rounded bg-black border border-gold/40" />
            <input type="time" name="time" className="px-4 py-3 rounded bg-black border border-gold/40" />
            <textarea name="message" rows="3" placeholder="What do you need? Recording, mixing, mastering..." className="px-4 py-3 rounded bg-black border border-gold/40" />
            <button className="mt-2 px-6 py-3 rounded bg-gold text-black font-bold hover:opacity-90">Send Request</button>
          </form>
        </section>
      </main>
    </>
  )
}