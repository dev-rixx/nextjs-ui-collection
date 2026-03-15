export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-neutral-800">
        <h1 className="text-xl font-bold">rixx.dev</h1>

        <div className="flex gap-8 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">
            Home
          </a>
          <a href="#" className="hover:text-white transition">
            Services
          </a>
          <a href="#" className="hover:text-white transition">
            Projects
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 py-28 text-center">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Web & App Development <br /> For Modern Businesses
        </h2>

        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
          rixx.dev provides professional web and mobile application development
          services. We build fast, scalable, and modern digital products using
          technologies like React, Next.js, TypeScript, and modern cloud
          infrastructure.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
            Get Started
          </button>

          <button className="border border-neutral-700 px-6 py-3 rounded-lg hover:bg-neutral-900 transition">
            Contact Us
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-8 pb-24 grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-neutral-800 hover:border-neutral-600 transition">
          <h3 className="text-lg font-semibold mb-2">Web Development</h3>
          <p className="text-gray-400 text-sm">
            Custom websites and web applications built with modern technologies
            like React, Next.js and Tailwind.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-neutral-800 hover:border-neutral-600 transition">
          <h3 className="text-lg font-semibold mb-2">Mobile App Development</h3>
          <p className="text-gray-400 text-sm">
            High performance Android and cross-platform mobile apps designed for
            scalability and great user experience.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-neutral-800 hover:border-neutral-600 transition">
          <h3 className="text-lg font-semibold mb-2">UI / UX Design</h3>
          <p className="text-gray-400 text-sm">
            Modern and clean user interfaces that improve engagement and deliver
            a premium digital experience.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center py-20 border-t border-neutral-800">
        <h2 className="text-3xl font-semibold">
          Get Web & App Development Services
        </h2>

        <p className="text-gray-400 mt-4">
          Contact us for your project requirements
        </p>

        <div className="mt-8 space-y-2 text-gray-300">
          <p>
            📞 Phone:{" "}
            <a href="tel:8808993974" className="text-white hover:underline">
              8808993974
            </a>
          </p>

          <p>
            📧 Email:{" "}
            <a
              href="mailto:rixx.dev@gmail.com"
              className="text-white hover:underline"
            >
              rixx.dev@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 text-center py-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} rixx.dev — Web & App Development Services
      </footer>
    </main>
  );
}
