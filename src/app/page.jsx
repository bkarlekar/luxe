import {
  Calendar,
  Clock,
  Star,
  Phone,
  MapPin,
  Scissors,
  Sparkles,
  Users,
} from "lucide-react";

export default function HomePage() {
  const services = [
    { name: "Hair Cut & Styling", price: "From $45", icon: Scissors },
    { name: "Hair Coloring", price: "From $85", icon: Sparkles },
    { name: "Hair Treatment", price: "From $65", icon: Star },
    { name: "Bridal Styling", price: "From $150", icon: Users },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Amazing service! My hair has never looked better. The stylists really know what they're doing.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      text: "Professional, friendly, and talented team. I always leave feeling confident and beautiful.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      text: "Best salon in town! They transformed my hair completely. Highly recommend!",
      rating: 5,
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
                className="text-gray-900 hover:text-rose-500 font-medium transition-colors"
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
                className="text-gray-700 hover:text-rose-500 font-medium transition-colors"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-playfair">
                Transform Your Look at
                <span className="text-rose-500"> Luxe Hair Studio</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience premium hair care with our expert stylists. From cuts
                to color, we create stunning looks that reflect your unique
                style and personality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/booking"
                  className="bg-rose-500 text-white px-8 py-4 rounded-full hover:bg-rose-600 transition-colors font-medium text-center"
                >
                  Book Appointment
                </a>
                <a
                  href="/services"
                  className="border-2 border-rose-500 text-rose-500 px-8 py-4 rounded-full hover:bg-rose-500 hover:text-white transition-colors font-medium text-center"
                >
                  View Services
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[500px] bg-gradient-to-br from-rose-200 to-pink-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <Scissors className="h-24 w-24 mx-auto mb-4 text-rose-400" />
                  <p className="text-lg">Professional Hair Styling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our range of professional hair services designed to
              enhance your natural beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-rose-500 font-medium text-lg">
                    {service.price}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <a
              href="/services"
              className="bg-rose-500 text-white px-8 py-4 rounded-full hover:bg-rose-600 transition-colors font-medium"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
              Why Choose Luxe Hair Studio?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional service and stunning
              results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-10 w-10 text-rose-500" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Expert Stylists
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team of certified professionals brings years of experience
                and ongoing education to every appointment.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-10 w-10 text-rose-500" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Premium Products
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We use only the finest professional-grade products to ensure
                your hair looks and feels amazing.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-rose-500" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Personalized Care
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every client receives a customized consultation to create a look
                that's uniquely yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-900">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-rose-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-rose-100">(555) 123-4567</p>
            </div>
            <div>
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-rose-100">
                Aeropolis
                <br />
                Lohegaon, Pune
              </p>
            </div>
            <div>
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="text-rose-100">
                Mon-Sat: 9AM-7PM
                <br />
                Sun: 10AM-5PM
              </p>
            </div>
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
                <p>Aeropolis</p>
                <p>Lohegaon, Pune</p>
                <p>(+91) 97660 89901</p>
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