import {
  Scissors,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: "",
    stylist: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [error, setError] = useState("");

  const services = [
    {
      id: "womens-cut",
      name: "Women's Cut & Style",
      duration: "60 min",
      price: "999",
    },
    {
      id: "mens-cut",
      name: "Men's Cut & Style",
      duration: "45 min",
      price: "199",
    },
    {
      id: "full-color",
      name: "Full Color",
      duration: "2-3 hours",
      price: "499",
    },
    {
      id: "highlights",
      name: "Highlights/Lowlights",
      duration: "3-4 hours",
      price: "599",
    },
    { id: "balayage", name: "Balayage", duration: "3-4 hours", price: "499" },
    {
      id: "keratin",
      name: "Keratin Treatment",
      duration: "3 hours",
      price: "999",
    },
    {
      id: "bridal",
      name: "Bridal Hair & Makeup",
      duration: "3 hours",
      price: "1299",
    },
    {
      id: "deep-conditioning",
      name: "Deep Conditioning",
      duration: "45 min",
      price: "399",
    },
  ];

  const stylists = [
    {
      id: "sarah",
      name: "Sarah Mitchell",
      title: "Master Stylist & Owner",
      specialties: ["Color Correction", "Bridal Styling"],
    },
    {
      id: "emma",
      name: "Emma Rodriguez",
      title: "Senior Colorist",
      specialties: ["Balayage", "Highlights"],
    },
    {
      id: "jessica",
      name: "Jessica Chen",
      title: "Hair Treatment Specialist",
      specialties: ["Keratin Treatments", "Hair Repair"],
    },
    {
      id: "maria",
      name: "Maria Santos",
      title: "Style Consultant",
      specialties: ["Trendy Cuts", "Styling"],
    },
  ];

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
  ];

  // Generate next 30 days for date selection
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const availableDates = generateDates();

  const handleInputChange = (field, value) => {
    setBookingData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error("Failed to book appointment");
      }

      setIsBooked(true);
    } catch (err) {
      setError(
        "Failed to book appointment. Please try again or call us directly."
      );
      console.error("Booking error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getSelectedService = () =>
    services.find((s) => s.id === bookingData.service);
  const getSelectedStylist = () =>
    stylists.find((s) => s.id === bookingData.stylist);

  if (isBooked) {
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

        {/* Success Message */}
        <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center py-20">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">
                Appointment Booked!
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Thank you for booking with Luxe Hair Studio. We've sent a
                confirmation email with all the details.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Appointment Details:
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Service:</strong> {getSelectedService()?.name}
                  </p>
                  <p>
                    <strong>Stylist:</strong> {getSelectedStylist()?.name}
                  </p>
                  <p>
                    <strong>Date:</strong> {bookingData.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {bookingData.time}
                  </p>
                  <p>
                    <strong>Duration:</strong> {getSelectedService()?.duration}
                  </p>
                  <p>
                    <strong>Price:</strong> {getSelectedService()?.price}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/"
                  className="bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition-colors font-medium"
                >
                  Back to Home
                </a>
                <a
                  href="/contact"
                  className="border-2 border-rose-500 text-rose-500 px-8 py-3 rounded-full hover:bg-rose-500 hover:text-white transition-colors font-medium"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-playfair">
              Book Your <span className="text-rose-500">Appointment</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Schedule your transformation with our expert stylists. Choose your
              service, preferred stylist, and convenient time slot.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step <= currentStep
                        ? "bg-rose-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step}
                  </div>
                  {step < 4 && (
                    <div
                      className={`w-full h-1 mx-4 ${
                        step < currentStep ? "bg-rose-500" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-sm text-gray-600">
              <span>Service</span>
              <span>Stylist</span>
              <span>Date & Time</span>
              <span>Details</span>
            </div>
          </div>

          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-playfair">
                Choose Your Service
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => handleInputChange("service", service.id)}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                      bookingData.service === service.id
                        ? "border-rose-500 bg-rose-50"
                        : "border-gray-200 hover:border-rose-300"
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <div className="flex justify-between items-center text-gray-600 mb-2">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.duration}
                      </span>
                      <span className="text-rose-500 font-semibold">
                        {service.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Stylist Selection */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-playfair">
                Choose Your Stylist
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stylists.map((stylist) => (
                  <div
                    key={stylist.id}
                    onClick={() => handleInputChange("stylist", stylist.id)}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                      bookingData.stylist === stylist.id
                        ? "border-rose-500 bg-rose-50"
                        : "border-gray-200 hover:border-rose-300"
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full flex items-center justify-center mr-4">
                        <User className="h-8 w-8 text-rose-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {stylist.name}
                        </h3>
                        <p className="text-rose-500 font-medium">
                          {stylist.title}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Specialties:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {stylist.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="bg-rose-100 text-rose-700 text-xs px-2 py-1 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Date & Time Selection */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-playfair">
                Select Date & Time
              </h2>

              {/* Date Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Choose Date
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                  {availableDates.slice(0, 14).map((date, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        handleInputChange("date", formatDate(date))
                      }
                      className={`p-3 rounded-lg border text-center transition-all ${
                        bookingData.date === formatDate(date)
                          ? "border-rose-500 bg-rose-50 text-rose-700"
                          : "border-gray-200 hover:border-rose-300"
                      }`}
                    >
                      <div className="text-sm font-medium">
                        {date.toLocaleDateString("en-US", { weekday: "short" })}
                      </div>
                      <div className="text-lg font-semibold">
                        {date.getDate()}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              {bookingData.date && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Choose Time
                  </h3>
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleInputChange("time", time)}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          bookingData.time === time
                            ? "border-rose-500 bg-rose-50 text-rose-700"
                            : "border-gray-200 hover:border-rose-300"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 4: Personal Details */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-playfair">
                Your Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={bookingData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={bookingData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={bookingData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Notes
                  </label>
                  <textarea
                    rows={3}
                    value={bookingData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 resize-none"
                    placeholder="Any special requests or notes..."
                  />
                </div>
              </div>

              {/* Booking Summary */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Booking Summary
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong>Service:</strong> {getSelectedService()?.name}
                  </p>
                  <p>
                    <strong>Stylist:</strong> {getSelectedStylist()?.name}
                  </p>
                  <p>
                    <strong>Date:</strong> {bookingData.date}
                  </p>
                  <p>
                    <strong>Time:</strong> {bookingData.time}
                  </p>
                  <p>
                    <strong>Duration:</strong> {getSelectedService()?.duration}
                  </p>
                  <p>
                    <strong>Price:</strong> {getSelectedService()?.price}
                  </p>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            {currentStep < 4 ? (
              <button
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && !bookingData.service) ||
                  (currentStep === 2 && !bookingData.stylist) ||
                  (currentStep === 3 &&
                    (!bookingData.date || !bookingData.time))
                }
                className="flex items-center space-x-2 bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Next</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={
                  isSubmitting ||
                  !bookingData.name ||
                  !bookingData.email ||
                  !bookingData.phone
                }
                className="flex items-center space-x-2 bg-rose-500 text-white px-8 py-3 rounded-lg hover:bg-rose-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Booking...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="h-4 w-4" />
                    <span>Book Appointment</span>
                  </>
                )}
              </button>
            )}
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