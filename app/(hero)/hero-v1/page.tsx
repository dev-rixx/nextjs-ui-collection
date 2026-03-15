import Image from "next/image";

export default function Hero() {
  return (
    <main className="h-screen flex justify-center items-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/15 via-red/10 to-transparent z-10" />

      <div className="relative w-[1280px] h-[650px] mx-auto  rounded-2xl overflow-hidden bg-[#0c0c0c] border border-white/10 shadow-2xl">
        <nav className="absolute top-10 left-14 right-14 flex items-center justify-between text-white z-20">
          <div className="flex items-center gap-14">
            <div className="flex gap-1">
              <div className="w-3 h-6 bg-red-500 rotate-45"></div>
              <div className="w-3 h-6 bg-red-500 rotate-45 opacity-70"></div>
            </div>

            <ul className="flex gap-10 text-xs tracking-[0.25em] text-gray-300">
              <li className="hover:text-white cursor-pointer">ABOUT</li>
              <li className="hover:text-white cursor-pointer">GALLERY</li>
              <li className="hover:text-white cursor-pointer">CONTACTS</li>
            </ul>
          </div>
        </nav>

        <div className="absolute right-[120px] top-[60px] w-[420px] h-[420px] rounded-full bg-gradient-to-b from-red-500 to-red-900 z-0" />

        <div className="absolute bottom-[-60px] left-[48%] w-[140px] h-[140px] rounded-full bg-gradient-to-b from-red-500 to-red-900 z-0" />

        <div className="absolute right-[60px] bottom-0 z-10">
          <Image
            src="/hero/statue.png"
            alt="statue"
            width={480}
            height={600}
            className="object-contain"
          />
        </div>

        <div className="absolute left-14 top-[160px] z-20 text-white max-w-[420px]">
          <p className="text-[11px] tracking-[0.35em] text-gray-400 mb-4">
            OUR VERSION
          </p>

          <h1 className="text-[72px] font-semibold leading-none tracking-tight">
            DESIGN
          </h1>

          <p className="text-gray-400 mt-6 text-[15px] leading-relaxed">
            Our hobby is a modern and convenient design, the key to successful
            communication with the client.
          </p>

          {/* CTA */}
          <button className="mt-10 flex items-center gap-4 group">
            <span className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition">
              →
            </span>

            <span className="text-sm tracking-wide text-gray-300 group-hover:text-white">
              See More
            </span>
          </button>
        </div>

        <div className="absolute bottom-12 left-14 flex items-center gap-6 text-xs text-gray-400 z-20">
          <span>01</span>

          <div className="w-44 h-[2px] bg-gray-700 relative">
            <div className="absolute left-0 top-0 h-[2px] w-16 bg-white"></div>
          </div>

          <span>03</span>
        </div>
      </div>
    </main>
  );
}
