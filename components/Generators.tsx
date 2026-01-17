"use client";

export default function Generators() {
  const scrollToAppointment = () => {
    const element = document.getElementById("book-appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const generatorSeries = [
    {
      name: "RESV Series",
      range: "8-12 kW",
      description: "Perfect for smaller homes and essential circuits",
    },
    {
      name: "RCA Series",
      range: "14-20 kW",
      description: "Ideal for medium-sized homes and businesses",
    },
    {
      name: "RCL Series",
      range: "24-60 kW",
      description: "For large homes and commercial applications",
    },
  ];

  const features = [
    { icon: "⚡", text: "8-60 KW Range" },
    { icon: "🔄", text: "Auto Transfer" },
    { icon: "📱", text: "Remote Monitoring" },
  ];

  return (
    <section
      id="generators"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="flex items-center gap-2 text-primary mb-4">
              <span className="text-xl">⚡</span>
              <span className="text-sm font-semibold uppercase tracking-wider">
                ALLIED POWER SYSTEMS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Kohler Generator Solutions
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We provide and install Kohler standby generators ranging from 8KW
              to 60KW to ensure you never lose power. Our automatic transfer
              systems and remote monitoring keep you connected.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-primary/20 p-4 rounded-lg text-center"
                >
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <p className="text-white text-sm font-semibold">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToAppointment}
              className="bg-primary hover:bg-[#6BA836] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Explore Generator Solutions
              <span>→</span>
            </button>
          </div>

          {/* Right Side - Generator Series Cards */}
          <div className="space-y-4">
            {generatorSeries.map((series, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-lg border-l-4 border-primary"
              >
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {series.name}
                </h3>
                <p className="text-xl font-semibold text-white mb-2">
                  {series.range}
                </p>
                <p className="text-gray-300">{series.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
