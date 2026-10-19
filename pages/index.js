export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-md flex items-center justify-center text-white font-bold">BE</div>
          <span className="font-semibold text-xl">Bông D yêu</span>
        </div>
        <nav className="space-x-6 text-sm text-slate-600 hidden md:block">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#how" className="hover:text-slate-900">How it works</a>
          <a href="#buy" className="hover:text-slate-900">Buy</a>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Tangem-style hardware wallet — now: Bông D yêu</h1>
          <p className="mt-4 text-slate-700">Giữ tài sản số của bạn an toàn — thiết kế đơn giản, không pin, bảo mật phần cứng, dễ dùng với điện thoại.</p>

          <div className="mt-6 flex gap-3">
            <a href="#buy" className="inline-flex items-center px-5 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700">Buy now</a>
            <a href="#how" className="inline-flex items-center px-5 py-3 border border-slate-200 rounded-md text-slate-700 hover:bg-slate-50">Learn more</a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold">No middlemen</h3>
              <p className="text-sm text-slate-500">Only you hold the keys.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold">NFC-powered</h3>
              <p className="text-sm text-slate-500">Tap your phone to use the card.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-[320px] h-[200px] bg-white rounded-2xl shadow-2xl flex items-center justify-center">
            <img src="/card.svg" alt="card" className="w-64 h-auto" />
          </div>
        </div>
      </section>

      <section id="features" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Features</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="font-semibold">Seedless option</h4>
            <p className="text-sm text-slate-500 mt-2">Secure by design — optional recovery phrase for advanced users.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="font-semibold">Chip certified</h4>
            <p className="text-sm text-slate-500 mt-2">High-grade secure element.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="font-semibold">Multi-token</h4>
            <p className="text-sm text-slate-500 mt-2">Support for many chains and tokens.</p>
          </div>
        </div>
      </section>

      <section id="how" className="max-w-6xl mx-auto px-6 py-12 bg-slate-50 rounded-t-xl">
        <h2 className="text-2xl font-bold">How it works</h2>
        <ol className="mt-4 space-y-3 text-slate-600">
          <li>1. Tap the card to your phone to pair.</li>
          <li>2. Approve transactions on the card.</li>
          <li>3. Recover with multi-card recovery if needed.</li>
        </ol>
      </section>

      <footer id="buy" className="max-w-6xl mx-auto px-6 py-10 text-center">
        <p className="text-slate-600">© Bông D yêu — Demo landing</p>
      </footer>
    </main>
  )
}
