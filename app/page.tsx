import MenuAccordion from "./components/MenuAccordion";
import GiftsAccordion from "./components/GiftsAccordion";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col p-4">
      {/* Sticky top navigation (no background colors) */}
      <header className="sticky top-0 z-50">
        <nav className="backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b border-black/[.08] dark:border-white/[.12]">
          <div className="max-w-5xl mx-auto py-3 flex items-center justify-between">
            <a
              href="#top"
              className="font-semibold tracking-tight text-base sm:text-lg"
            >
              2025 Xebia Data Cooking Workshop Series
            </a>
            <a
              href="/online-russian-cooking-workshop.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
            >
              Download recipe (PDF)
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight flex items-center gap-3">
              <img
                src="/images/ru-flag.png"
                alt="Russian flag"
                className="h-6 w-auto sm:h-8 border"
              />
              2025 Online Russian Cooking Workshop
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg opacity-80">
              Hosted by Rozallia & Almaz — cook along, learn techniques, and
              enjoy classic flavors.
            </p>
          </div>
        </section>

        {/* Menu Accordion with Tabs */}
        <section id="menu">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold">Menu</h2>
            <p className="mt-3 opacity-80">
              Traditional Russian cooking workshop dishes. Expand each to
              explore details.
            </p>
            <MenuAccordion />
          </div>
        </section>

        {/* Gifts Section */}
        <section id="gifts" className="mt-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold">Gifts</h2>
            <p className="mt-3 opacity-80">
              Special Russian treats and beverages. Click to explore each gift.
            </p>
            <GiftsAccordion />
          </div>
        </section>
      </main>

      <footer className="px-4 sm:px-6 py-6 border-t border-black/[.08] dark:border-white/[.12]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm">© 2025 Rozallia & Almaz & Xebia Data ❤️</p>
          <div className="flex gap-4 text-sm">
            <a href="#top" className="hover:underline">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
