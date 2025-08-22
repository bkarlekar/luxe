import {
  Scissors,
  Sparkles,
  Star,
  Users,
  Clock,
  DollarSign,
  CheckCircle,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      category: "Hair Cuts & Styling",
      icon: Scissors,
      description: "Expert cuts and styling for every hair type and lifestyle",
      services: [
        {
          name: "Women's Cut & Style",
          price: "399",
          duration: "60 min",
          description: "Precision cut with wash, style, and finish",
        },
        {
          name: "Men's Cut & Style",
          price: "199",
          duration: "45 min",
          description: "Classic and modern cuts with styling",
        },
        {
          name: "Children's Cut",
          price: "149",
          duration: "30 min",
          description: "Gentle cuts for kids 12 and under",
        },
        {
          name: "Bang Trim",
          price: "99",
          duration: "15 min",
          description: "Quick fringe refresh between cuts",
        },
        {
          name: "Blowout & Style",
          price: "199",
          duration: "45 min",
          description: "Professional wash and style",
        },
      ],
    },
    {
      category: "Hair Coloring",
      icon: Sparkles,
      description: "Transform your look with our expert color services",
      services: [
        {
          name: "Full Color",
          price: "199",
          duration: "2-3 hours",
          description: "Complete color transformation",
        },
        {
          name: "Root Touch-up",
          price: "149",
          duration: "90 min",
          description: "Refresh your roots and maintain color",
        },
        {
          name: "Highlights/Lowlights",
          price: "399",
          duration: "3-4 hours",
          description: "Dimensional color with foils",
        },
        {
          name: "Balayage",
          price: "499",
          duration: "3-4 hours",
          description: "Hand-painted natural highlights",
        },
        {
          name: "Color Correction",
          price: "999",
          duration: "4-6 hours",
          description: "Fix previous color mishaps",
        },
      ],
    },
    {
      category: "Hair Treatments",
      icon: Star,
      description: "Restore and nourish your hair with professional treatments",
      services: [
        {
          name: "Keratin Treatment",
          price: "999",
          duration: "3 hours",
          description: "Smooth and strengthen damaged hair",
        },
        {
          name: "Deep Conditioning",
          price: "699",
          duration: "45 min",
          description: "Intensive moisture treatment",
        },
        {
          name: "Scalp Treatment",
          price: "599",
          duration: "60 min",
          description: "Cleanse and nourish your scalp",
        },
        {
          name: "Hair Glossing",
          price: "499",
          duration: "60 min",
          description: "Add shine and seal color",
        },
        {
          name: "Olaplex Treatment",
          price: "399",
          duration: "90 min",
          description: "Repair and rebuild hair bonds",
        },
      ],
    },
    {
      category: "Special Occasions",
      icon: Users,
      description: "Look stunning for your special moments",
      services: [
        {
          name: "Bridal Hair & Makeup",
          price: "1999",
          duration: "3 hours",
          description: "Complete bridal beauty package",
        },
        {
          name: "Bridal Trial",
          price: "999",
          duration: "2 hours",
          description: "Practice run for your big day",
        },
        {
          name: "Special Event Styling",
          price: "799",
          duration: "90 min",
          description: "Elegant styles for any occasion",
        },
        {
          name: "Prom/Formal Styling",
          price: "699",
          duration: "90 min",
          description: "Glamorous looks for formal events",
        },
        {
          name: "Hair Extensions",
          price: "999",
          duration: "3-4 hours",
          description: "Add length and volume",
        },
      ],
    },
  ];

  const packages = [
    {
      name: "Signature Makeover",
      price: "1299",
      originalPrice: "1499",
      duration: "4-5 hours",
      description: "Complete transformation with cut, color, and style",
      includes: [
        "Consultation",
        "Cut & Style",
        "Full Color or Highlights",
        "Deep Conditioning Treatment",
        "Professional Photos",
      ],
    },
    {
      name: "Bridal Beauty Package",
      price: "$399",
      originalPrice: "$450",
      duration: "5-6 hours",
      description: "Everything you need for your perfect wedding day",
      includes: [
        "Bridal Trial",
        "Wedding Day Hair & Makeup",
        "Touch-up Kit",
        "Bridal Party Discount",
        "Professional Photos",
      ],
    },
    {
      name: "Monthly Maintenance",
      price: "999",
      originalPrice: "1499",
      duration: "2-3 hours",
      description: "Keep your look fresh with regular touch-ups",
      includes: [
        "Root Touch-up",
        "Trim & Style",
        "Deep Conditioning",
        "Scalp Massage",
        "Product Consultation",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-rose-500" />
              <span className="text-2xl font-bold text-gray-900 font-playfair">
                Luxe Hair Studio
              </span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-rose-500 font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-rose-500 font-medium transition-colors"
              >
                About
              </a>
              <a
                href="/services"
                className="text-gray-900 hover:text-rose-500 font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="/gallery"
                className="text-gray-700 hover:text-rose-500 font-medium transition-colors"
              >
                Gallery
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-rose-500 font-medium transition-colors"
              >
                Contact
              </a>
            </nav>

            <a
              href="/booking"
              className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition-colors font-medium"
            >
              Book Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-playfair">
              Our <span className="text-rose-500">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of professional hair services
              designed to enhance your natural beauty and boost your confidence.
              From precision cuts to stunning color transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="mb-20 last:mb-0">
                <div className="text-center mb-12">
                  <div className="bg-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-10 w-10 text-rose-500" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
                    {category.category}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {service.name}
                        </h3>
                        <span className="text-2xl font-bold text-rose-500">
                          {service.price}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-3">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                      <button className="w-full mt-4 bg-rose-500 text-white py-2 px-4 rounded-full hover:bg-rose-600 transition-colors font-medium">
                        Book This Service
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Service Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Save money with our specially curated packages designed for
              complete transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative"
              >
                {pkg.originalPrice && (
                  <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Save $
                    {parseInt(pkg.originalPrice.replace("$", "")) -
                      parseInt(pkg.price.replace("$", ""))}
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-rose-500">
                    {pkg.price}
                  </span>
                  {pkg.originalPrice && (
                    <span className="text-xl text-gray-400 line-through ml-2">
                      {pkg.originalPrice}
                    </span>
                  )}
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{pkg.duration}</span>
                </div>

                <p className="text-gray-600 mb-6">{pkg.description}</p>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900">
                    Package Includes:
                  </h4>
                  {pkg.includes.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-rose-500 text-white py-3 px-4 rounded-full hover:bg-rose-600 transition-colors font-medium">
                  Book Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-rose-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-playfair">
                Pricing Information
              </h2>
              <p className="text-lg text-gray-600">
                Transparent pricing with no hidden fees. All services include
                consultation and aftercare advice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <DollarSign className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No Hidden Fees
                </h3>
                <p className="text-gray-600 text-sm">
                  All prices include consultation and styling
                </p>
              </div>

              <div className="text-center">
                <Clock className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Flexible Scheduling
                </h3>
                <p className="text-gray-600 text-sm">
                  Book appointments that fit your schedule
                </p>
              </div>

              <div className="text-center">
                <Star className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Premium Products
                </h3>
                <p className="text-gray-600 text-sm">
                  Only the finest professional-grade products
                </p>
              </div>

              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Satisfaction Guarantee
                </h3>
                <p className="text-gray-600 text-sm">
                  We stand behind every service we provide
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl border border-rose-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Important Notes:
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  • Prices may vary based on hair length, thickness, and
                  condition
                </li>
                <li>
                  • Color correction pricing determined after consultation
                </li>
                <li>
                  • 24-hour cancellation policy applies to all appointments
                </li>
                <li>• Gratuity is appreciated but not required</li>
                <li>• We accept cash, credit cards, and digital payments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 font-playfair">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the difference our expert
            stylists can make. Your perfect look is just one appointment away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/booking"
              className="bg-white text-rose-500 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-medium"
            >
              Book Your Appointment
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-rose-500 transition-colors font-medium"
            >
              Ask Questions
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scissors className="h-8 w-8 text-rose-500" />
                <span className="text-2xl font-bold font-playfair">
                  Luxe Hair Studio
                </span>
              </div>
              <p className="text-gray-400">
                Transform your look with our expert stylists and premium hair
                care services.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/gallery"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-400">Hair Cuts</span>
                </li>
                <li>
                  <span className="text-gray-400">Hair Coloring</span>
                </li>
                <li>
                  <span className="text-gray-400">Hair Treatments</span>
                </li>
                <li>
                  <span className="text-gray-400">Bridal Styling</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>123 Beauty Lane</p>
                <p>Downtown, NY 10001</p>
                <p>(555) 123-4567</p>
                <p>info@luxehairstudio.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Luxe Hair Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}