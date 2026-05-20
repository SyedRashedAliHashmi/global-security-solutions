"use client"
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}
import { motion } from "framer-motion"

import { Phone, MessageCircle, Shield, Camera } from "lucide-react"

export default function Home() {
  const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}
  return (
    <main className="min-h-screen pb-20 bg-black text-white">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-yellow-500/20">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">

          {/* LOGO + BRAND */}
          <div className="flex items-center gap-3">

            <img
              src="/logo.png"
              alt="Global Security Solutions"
              className="w-10 h-10 object-contain rounded-md"
            />

            <div>
              <h1 className="text-yellow-400 font-bold text-sm md:text-base">
                GLOBAL SECURITY SOLUTIONS
              </h1>
              <p className="text-gray-400 text-[10px] md:text-xs">
                CCTV Installation • Security Systems
              </p>
            </div>

          </div>

          {/* MENU */}
          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* CALL BUTTON */}
          <a
            href="tel:8919276612"
            className="bg-yellow-400 text-black px-4 py-2 rounded-md font-bold flex items-center gap-2"
          >
            <Phone size={16} /> Call
          </a>

        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="pt-32 text-center px-4">
<motion.div
    variants={fadeUp}
    initial="hidden"
    animate="show"
  >
        {/* LOGO IN HERO */}
        <div className="flex justify-center mb-6">
          <div className="bg-black/40 border border-yellow-500/30 p-3 rounded-2xl backdrop-blur-md">

            <img
              src="/logo.png"
              alt="Logo"
              className="w-40 h-40 object-contain mx-auto"
            />

          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-4xl md:text-6xl font-bold">
          Smart CCTV Security Solutions
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Professional CCTV Installation, Maintenance & Surveillance Systems for Homes, Offices,
          Industries and Commercial Buildings.
        </p>

        {/* TELANGANA LINE */}
        <p className="text-yellow-400 mt-3 font-semibold">
          🚀 Serving All Over Telangana
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">

          <a
            href="tel:8919276612"
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/918919276612"
            target="_blank"
            className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg hover:scale-105 transition"
          >
            💬 WhatsApp Quote
          </a>

        </div>

        </motion.div>

</section>

      {/* SERVICES */}
      <motion.section
  id="services"
  className="py-20 px-4"
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>


        <h2 className="text-center text-3xl font-bold mb-10">
          Our Services
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          {[
            "CCTV Installation",
            "CCTV Maintenance",
            "DVR / NVR Setup",
            "WiFi Camera Setup",
            "Remote Monitoring",
            "Industrial Security"
          ].map((item, i) => (
            <div key={i}
              className="bg-white/5 border border-yellow-500/20 p-6 rounded-xl hover:scale-105 transition">

              <h3 className="text-yellow-400 font-semibold">{item}</h3>
              <p className="text-gray-400 text-sm mt-2">
                Professional and reliable security solution.
              </p>

            </div>
          ))}

        </div>
      </motion.section>
{/* PRODUCTS */}
<section id="products" className="py-20 px-4">

  <h2 className="text-center text-3xl font-bold mb-4">
    Our Security Products
  </h2>

  <p className="text-center text-gray-400 mb-10">
    High-quality CCTV systems for homes, offices & industries
  </p>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

    {[
      { name: "Dome Camera", img: "dome.jpg" },
      { name: "Bullet Camera", img: "bullet.jpg" },
      { name: "PTZ Camera", img: "ptz.jpg" },
      { name: "WiFi Camera", img: "wifi.jpg" },
      { name: "DVR System", img: "dvr.jpg" },
      { name: "NVR System", img: "nvr.jpg" }
    ].map((p, i) => (
      <div
        key={i}
        className="bg-white/5 border border-yellow-500/20 rounded-xl overflow-hidden hover:scale-105 transition"
      >

        {/* IMAGE */}
        <img
          src={`/products/${p.img}`}
          alt={p.name}
          className="w-full h- 40 object-cover"
        />

        {/* CONTENT */}
        <div className="p-4">

          <h3 className="text-yellow-400 font-semibold text-lg">
            {p.name}
          </h3>

          <p className="text-gray-400 text-sm mt-2">
            Professional grade security solution for modern surveillance.
          </p>

          <a
            href="https://wa.me/918919276612"
            target="_blank"
            className="inline-block mt-4 bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold"
          >
            Inquiry on WhatsApp
          </a>

        </div>

      </div>
    ))}
  </div>

</section>

  {/* BRANDS */}
<section className="py-20 px-4">

  <h2 className="text-center text-3xl font-bold mb-4">
    Trusted Security Brands
  </h2>

  <p className="text-center text-gray-400 mb-10">
    We work with world-leading CCTV and security manufacturers
  </p>

  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 items-center">

    {[
      "hikvision.png",
      "cpplus.png",
      "dahua.png",
      "uniview.png",
      "zkteco.png"
    ].map((img, i) => (
      <div
        key={i}
        className="  flex items-center justify-center hover:scale-105 transition"
      >
        <img
          src={`/brands/${img}`}
          alt="brand"
          className="overflow-hidden rounded-xl border border-yellow-500/20 group"
        />
      </div>
    ))}

  </div>

</section>
{/* GALLERY */}
<section className="py-20 px-4 bg-black">

  <h2 className="text-center text-3xl font-bold mb-4">
    Our CCTV Installations
  </h2>

  <p className="text-center text-gray-400 mb-10">
    Real projects completed across Telangana
  </p>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">

    {["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"].map((img, i) => (
      <div
        key={i}
        className="relative overflow-hidden rounded-xl border border-yellow-500/20 group"
      >

        <img
          src={`/gallery/${img}`}
          className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition"></div>

      </div>
    ))}

  </div>

</section>

{/* STATS */}
<section className="py-20 px-4">

  <h2 className="text-center text-3xl font-bold mb-10">
    Our Achievements
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">

    <div className="bg-white/5 border border-yellow-500/20 p-6 rounded-xl">
      <h3 className="text-4xl font-bold text-yellow-400">500+</h3>
      <p className="text-gray-400 mt-2">Installations Completed</p>
    </div>

    <div className="bg-white/5 border border-yellow-500/20 p-6 rounded-xl">
      <h3 className="text-4xl font-bold text-yellow-400">300+</h3>
      <p className="text-gray-400 mt-2">Happy Clients</p>
    </div>

    <div className="bg-white/5 border border-yellow-500/20 p-6 rounded-xl">
      <h3 className="text-4xl font-bold text-yellow-400">5+ Years</h3>
      <p className="text-gray-400 mt-2">Industry Experience</p>
    </div>

    <div className="bg-white/5 border border-yellow-500/20 p-6 rounded-xl">
      <h3 className="text-4xl font-bold text-yellow-400">24/7</h3>
      <p className="text-gray-400 mt-2">Customer Support</p>
    </div>

  </div>

</section>

{/* TESTIMONIALS */}
<section className="py-20 px-4">

  <h2 className="text-center text-3xl font-bold mb-4">
    What Our Clients Say
  </h2>

  <p className="text-center text-gray-400 mb-10">
    Trusted by homes, shops, offices & industries across Telangana
  </p>

  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

    {[
      {
        name: "Ramesh Kumar",
        review: "Excellent CCTV installation service. Very professional and quick response.",
      },
      {
        name: "Srinivas Rao",
        review: "Best security company in our area. Cameras quality is very good.",
      },
      {
        name: "Farhana Begum",
        review: "Installed cameras in our shop. Very satisfied with service and support.",
      }
    ].map((t, i) => (
      <div
        key={i}
        className="bg-white/5 border border-yellow-500/20 p-6 rounded-xl hover:scale-105 transition"
      >

        <p className="text-gray-300 text-sm">"{t.review}"</p>

        <h3 className="text-yellow-400 font-semibold mt-4">
          - {t.name}
        </h3>

      </div>
    ))}

  </div>

</section>
      {/* CONTACT */}
      <section id="contact" className="py-20 text-center px-4">

        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

        <p className="text-gray-400">Godavarikhani, Telangana</p>

        <p className="text-gray-400 mt-2">
          📞 8919276612 | 9000976073
        </p>

        <div className="mt-6">
          <a
            href="https://wa.me/918919276612"
            className="bg-green-500 px-6 py-3 rounded-lg font-bold"
          >
            WhatsApp Now
          </a>
        </div>

      </section>
{/* MOBILE STICKY CTA */}
<div className="fixed bottom-0 left-0 w-full md:hidden z-50">

  <div className="grid grid-cols-2">

    {/* CALL BUTTON */}
    <a
      href="tel:8919276612"
      className="bg-yellow-400 text-black py-4 font-bold flex items-center justify-center gap-2"
    >
      📞 Call Now
    </a>

    {/* WHATSAPP BUTTON */}
    <a
      href="https://wa.me/918919276612"
      target="_blank"
      className="bg-green-500 text-white py-4 font-bold flex items-center justify-center gap-2"
    >
      💬 WhatsApp
    </a>

  </div>

</div>
      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/918919276612"
        target="_blank"
        className="fixed bottom-5 right-5 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg"
      >
        💬
      </a>
{/* FOOTER */}
<footer className="border-t border-white/10 bg-black/60 backdrop-blur-md pt-16 pb-10 px-4">

  <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

    {/* COMPANY */}
    <div>

      <div className="flex items-center gap-3 mb-4">

        <img
          src="/logo.png"
          alt="Global Security Solutions"
          className="w-12 h-12 object-contain"
        />

        <div>
          <h3 className="text-yellow-400 font-bold">
            GLOBAL SECURITY SOLUTIONS
          </h3>

          <p className="text-gray-400 text-sm">
            CCTV & Security Systems
          </p>
        </div>

      </div>

      <p className="text-gray-400 text-sm leading-6">
        CCTV installation, maintenance and surveillance solutions for homes,
        offices, shops and industries across Telangana.
      </p>

    </div>

    {/* SERVICES */}
    <div>

      <h3 className="text-yellow-400 font-semibold mb-4">
        Services
      </h3>

      <ul className="space-y-2 text-gray-400 text-sm">

        <li>CCTV Installation</li>
        <li>DVR / NVR Setup</li>
        <li>WiFi Camera Setup</li>
        <li>Remote Monitoring</li>
        <li>Industrial Surveillance</li>

      </ul>

    </div>

    {/* SERVICE AREAS */}
    <div>

      <h3 className="text-yellow-400 font-semibold mb-4">
        Service Areas
      </h3>

      <ul className="space-y-2 text-gray-400 text-sm">

        <li>Hyderabad</li>
        <li>Karimnagar</li>
        <li>Peddapalli</li>
        <li>Godavarikhani</li>
        <li>All Over Telangana</li>

      </ul>

    </div>

    {/* CONTACT */}
    <div>

      <h3 className="text-yellow-400 font-semibold mb-4">
        Contact
      </h3>

      <div className="space-y-3 text-gray-400 text-sm">

        <p>📞 8919276612</p>
        <p>📞 9000976073</p>
        <p>📧 rafeeqrazamd@gmail.com</p>
        <p>
          Main Chowrasta, Godavarikhani,
          Peddapalli, Telangana - 505209
        </p>

      </div>

    </div>

  </div>

  {/* BOTTOM */}
  <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">

    © 2026 Global Security Solutions. All Rights Reserved.

    <div className="mt-2 text-yellow-400">
      Developed by Hashmi Dev Team
    </div>

  </div>

</footer>
    </main>
  )
}