"use client";

import Image from "next/image";

export default function Services() {
  const scrollToAppointment = () => {
    const element = document.getElementById("book-appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      title: "Residential Electrical",
      description: "Complete electrical solutions for homes, from repairs to full installations.",
      image: "/service-residential-img3.jpg",
    },
    {
      title: "Commercial Installations",
      description: "Professional electrical work for offices, retail spaces, and commercial buildings.",
      image: "/service-commercial-img4.jpg",
    },
    {
      title: "Industrial Electrical",
      description: "Heavy-duty electrical solutions for industrial facilities and equipment.",
      image: "/service-industrial-img5.jpg",
    },
    {
      title: "Emergency Repairs (24/7)",
      description: "Round-the-clock emergency electrical services when you need us most.",
      image: "/service-emergency-img6.jpg",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <span className="text-xl">⚡</span>
            <span className="text-sm font-semibold uppercase tracking-wider">
              OUR SERVICES
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Complete Electrical Solutions for Every Space
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Allied Electric provides tailored electrical services to meet your
            specific needs, whether residential, commercial, or industrial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content Section */}
              <div className="bg-gray-800 p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 text-base leading-relaxed flex-grow">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-primary hover:text-[#6BA836] font-bold text-base flex items-center gap-2 transition-colors mt-auto"
                >
                  Learn More
                  <span className="text-primary">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
