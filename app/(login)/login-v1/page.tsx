"use client";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF } from "react-icons/fa";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = () => {
    console.log("Form Submited");
  };
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <Image
        src="/robot-bg.png"
        alt="bg"
        fill
        className="object-contain opacity-40 scale-110"
      />

      <div className="relative z-10 w-275 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl p-10 transition-all duration-500">
        <nav className="flex justify-between items-center text-white/80 mb-10">
          <div className="flex gap-6 text-sm font-medium leading-2 tracking-wider">
            {["Home", "About", "Blog", "Pages", "Contact"].map((item) => (
              <span
                key={item}
                className="cursor-pointer hover:text-gray-300 transition"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <span className="text-sm cursor-pointer hover:text-gray-300 transition">
              Sign in
            </span>

            <button className="bg-white text-black px-4 py-1 rounded-full text-sm hover:bg-gray-200 transition">
              Register
            </button>
          </div>
        </nav>

        {/* Content */}
        <div className="grid grid-cols-2 gap-10 items-center relative">
          {/* Left Image */}
          <div>
            <Image
              src="/robot-bg.png"
              alt="robot"
              width={400}
              height={400}
              className="object-contain absolute -bottom-35 h-160 w-120 transition-transform duration-700 "
            />
          </div>

          {/* Login Form */}
          <form onSubmit={handleLoginSubmit} className="text-white w-87.5">
            <h2 className="text-3xl font-semibold mb-6 leading-snug">
              Hello ! <br /> Welcome Back
            </h2>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="w-full mb-4 px-4 py-2 rounded-lg bg-white/90 text-black outline-none focus:ring-2 focus:ring-purple-500 transition"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-2 px-4 py-2 rounded-lg bg-white/90 text-black outline-none focus:ring-2 focus:ring-purple-500 transition"
            />

            <div className="text-right text-sm text-gray-300 mb-4 hover:text-white cursor-pointer transition">
              Recover Password?
            </div>

            <button className="w-full bg-white text-black py-2 cursor-pointer rounded-lg font-medium mb-6 transition-all duration-300 hover:bg-gray-200 hover:scale-[1.02] active:scale-95">
              Sign in
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1 h-px bg-white/30"></div>
              <span className="text-xs text-gray-300">Or continue with</span>
              <div className="flex-1 h-px bg-white/30"></div>
            </div>

            <div className="flex gap-4 justify-center mb-4">
              <button className="p-2 bg-white rounded-md shadow hover:scale-110 transition">
                <FcGoogle size={20} />
              </button>

              <button className="p-2 bg-white rounded-md shadow hover:scale-110 transition">
                <FaApple size={20} className="text-black" />
              </button>

              <button className="p-2 bg-white rounded-md shadow hover:scale-110 transition">
                <FaFacebookF size={20} className="text-blue-600" />
              </button>
            </div>

            <p className="text-sm text-center text-white/60">
              Don&apos;t have an account ?{" "}
              <span className="underline cursor-pointer text-white transition">
                Create Account
              </span>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
