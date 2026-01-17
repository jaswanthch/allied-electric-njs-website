"use client";

export default function Contact() {
  const scrollToAppointment = () => {
    const element = document.getElementById("book-appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      content: "16-648 Squier Street",
      subContent: "Thunder Bay, ON",
    },
    {
      icon: "📞",
      title: "Phone",
      content: "(807) 622-1168",
      subContent: "",
    },
    {
      icon: "✉️",
      title: "Email",
      content: "info@alliedelectric.ca",
      subContent: "",
    },
    {
      icon: "🕐",
      title: "Hours",
      content: "24/7 Emergency Service",
      subContent: "Available anytime",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <span className="text-xl">⚡</span>
            <span className="text-sm font-semibold uppercase tracking-wider">
              CONTACT US
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re here to help with all your electrical needs in Thunder Bay.
            Contact us today!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg text-center"
            >
              <div className="text-primary text-4xl mb-4">{info.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {info.title}
              </h3>
              <p className="text-gray-300 mb-1">{info.content}</p>
              {info.subContent && (
                <p className="text-gray-400 text-sm">{info.subContent}</p>
              )}
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.1481377250093!2d-89.25257911011296!3d48.41530025773165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d5918ab07af93b5%3A0x6200a210d118fa30!2sAllied%20Electric!5e0!3m2!1sen!2sca!4v1768636808157!5m2!1sen!2sca"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
