"use client";

import { useState } from "react";

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Appointment Request - ${formData.serviceType}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService Type: ${formData.serviceType}\nPreferred Date: ${formData.preferredDate}\nPreferred Time: ${formData.preferredTime}\nMessage: ${formData.message}`
    );
    window.location.href = `mailto:info@alliedelectric.ca?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="book-appointment"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content */}
          <div>
            <div className="flex items-center gap-2 text-primary mb-4">
              <span className="text-xl">⚡</span>
              <span className="text-sm font-semibold uppercase tracking-wider">
                BOOK AN APPOINTMENT
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Fill out the form and we&apos;ll get back to you within 24 hours to
              confirm your appointment.
            </p>
            <p className="text-sm text-gray-400 mb-8">
              For emergencies, please call us directly.
            </p>

            <div className="space-y-4">
              <a
                href="tel:8076221168"
                className="flex items-center gap-3 text-primary hover:text-[#6BA836] transition-colors font-semibold text-lg"
              >
                CALL US NOW (807) 622-1168
              </a>
              <a
                href="mailto:info@alliedelectric.ca"
                className="flex items-center gap-3 text-primary hover:text-[#6BA836] transition-colors font-semibold text-lg"
              >
                info@alliedelectric.ca
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide"
                >
                  FULL NAME *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide"
                >
                  PHONE NUMBER *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="(807) 555-1234"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide"
                >
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide"
                >
                  SERVICE TYPE *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a service type</option>
                  <option value="Residential Electrical">Residential Electrical</option>
                  <option value="Commercial Electrical">Commercial Electrical</option>
                  <option value="Industrial Electrical">Industrial Electrical</option>
                  <option value="Generator Installation">Generator Installation</option>
                  <option value="Generator Service">Generator Service</option>
                  <option value="Emergency Service">Emergency Service</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="preferredDate"
                    className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide"
                  >
                    PREFERRED DATE
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide"
                  >
                    PREFERRED TIME
                  </label>
                  <input
                    type="time"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us about your electrical needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-[#6BA836] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
              >
                BOOK APPOINTMENT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
