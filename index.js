import Head from 'next/head'
import Nav from '../components/Nav'
import { SITE } from '../site.config'

export default function Home(){
  return (
    <>
      <Head><title>{SITE.NAME}</title></Head>
      <main className="min-h-screen flex flex-col">
        <Nav />
        <section className="flex-1 flex flex-col items-center text-center px-6">
          <img src="/logo.png" alt="90's-G emblem" className="w-40 h-40 mt-8" />
          <h1 className="text-5xl font-extrabold tracking-widest mt-4">90'S-G RECORDING STUDIO</h1>
          <p className="mt-3 text-xl opacity-90">Recording • Mixing • Mastering</p>
          <div className="mt-8">
            <a href="/booking" className="px-6 py-3 rounded bg-gold text-black font-bold hover:opacity-90">Book a Session</a>
          </div>
        </section>
        <footer className="py-6 text-center opacity-70 border-t border-gold/40">
          Contact: <a href={`mailto:${SITE.EMAIL}`}>{SITE.EMAIL}</a> • <a href={`tel:${SITE.PHONE}`}>{SITE.PHONE}</a>
        </footer>
      </main>
    </>
  )
}