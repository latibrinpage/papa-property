export default function LoginPage() {
  return (
    <main className="mx-auto max-w-md px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/80">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-papa-red">Admin access</p>
        <h1 className="mt-3 text-3xl font-black text-papa-navy">Login</h1>

        <form className="mt-6 space-y-4">
          <input type="email" placeholder="Email address" className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
          <input type="password" placeholder="Password" className="w-full rounded-2xl border border-slate-200 px-4 py-3" />
          <button type="button" className="w-full rounded-full bg-papa-navy px-6 py-3 font-bold text-white hover:bg-papa-blue">Continue to dashboard</button>
        </form>
      </div>
    </main>
  )
}
