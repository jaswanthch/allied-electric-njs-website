"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-0 px-0 bg-white"
    >
      <div className="grid md:grid-cols-2 min-h-[600px]">
        {/* Left Side - Image */}
        <div className="relative h-[600px] md:h-auto">
          <Image
            src="/about-electrician-img2.jpg"
            alt="Allied Electric technician"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="bg-gray-800 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-primary mb-4">
            <span className="text-xl">⚡</span>
            <span className="text-sm font-semibold uppercase tracking-wider">
              WHO WE ARE
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Partner in Smart Electrical Solutions
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            From residential wiring to commercial installations, Allied Electric
            delivers safe, efficient, and future-ready electrical services with
            certified expertise. Our skilled team ensures every project is powered
            with precision and care.
          </p>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-primary mb-2">
                <span className="text-xl">⚡</span>
                <h3 className="text-xl font-semibold text-primary">
                  Power with Purpose
                </h3>
              </div>
              <p className="text-gray-300 ml-8">
                Reliable, smart, and energy-efficient electrical work for modern
                living.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-primary mb-2">
                <span className="text-xl">⚡</span>
                <h3 className="text-xl font-semibold text-primary">
                  Service You Can Trust
                </h3>
              </div>
              <p className="text-gray-300 ml-8">
                Licensed professionals with transparent pricing and on-time delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
