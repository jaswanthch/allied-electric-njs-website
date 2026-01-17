"use client";

import Image from "next/image";

export default function Hero() {
  const scrollToAppointment = () => {
    const element = document.getElementById("book-appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[600px] flex items-center px-4 sm:px-6 lg:px-8 pt-24"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/electrician-at-work.jpg"
          alt="Electrician at work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-6xl relative z-10 py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-primary mb-4">
            <span className="text-xl">⚡</span>
            <span className="text-sm font-semibold uppercase tracking-wider">
              TRUSTED POWER
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Smart and Reliable Electrical Solutions for Every Space
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed">
            Allied Electric specializes in smart, safe, and efficient electrical
            solutions for homes and businesses. From quick repairs to complete
            rewiring and smart home upgrades, our certified electricians deliver
            excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToAppointment}
              className="bg-primary hover:bg-[#6BA836] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book a Technician
            </button>
            <a
              href="tel:8076221168"
              className="bg-white hover:bg-gray-50 text-primary border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md"
            >
              (807) 622-1168
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
