import { Scissors, Star, Users, Award, Heart, Clock } from 'lucide-react';

export default function AboutPage() {
  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Master Stylist & Owner',
      experience: '15+ years',
      specialties: ['Color Correction', 'Bridal Styling', 'Precision Cuts']
    },
    {
      name: 'Emma Rodriguez',
      role: 'Senior Colorist',
      experience: '12+ years',
      specialties: ['Balayage', 'Highlights', 'Color Transformations']
    },
    {
      name: 'Jessica Chen',
      role: 'Hair Treatment Specialist',
      experience: '8+ years',
      specialties: ['Keratin Treatments', 'Hair Repair', 'Scalp Care']
    },
    {
      name: 'Maria Santos',
      role: 'Style Consultant',
      experience: '6+ years',
      specialties: ['Trendy Cuts', 'Styling', 'Hair Extensions']
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Beauty',
      description: 'We are passionate about helping every client discover their most beautiful self through expert hair care.'
    },
    {
      icon: Star,
      title: 'Excellence in Service',
      description: 'We strive for perfection in every service, ensuring each client receives the highest quality care.'
    },
    {
      icon: Users,
      title: 'Client-Centered Approach',
      description: 'Your satisfaction is our priority. We listen, understand, and deliver results that exceed expectations.'
    },
    {
      icon: Award,
      title: 'Professional Expertise',
      description: 'Our team continuously trains in the latest techniques and trends to provide cutting-edge services.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-rose-500" />
              <span className="text-2xl font-bold text-gray-900 font-playfair">Luxe Hair Studio</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-rose-500 font-medium transition-colors">Home</a>
              <a href="/about" className="text-gray-900 hover:text-rose-500 font-medium transition-colors">About</a>
              <a href="/services" className="text-gray-700 hover:text-rose-500 font-medium transition-colors">Services</a>
              <a href="/gallery" className="text-gray-700 hover:text-rose-500 font-medium transition-colors">Gallery</a>
              <a href="/contact" className="text-gray-700 hover:text-rose-500 font-medium transition-colors">Contact</a>
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
              About <span className="text-rose-500">Luxe Hair Studio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              For over a decade, we've been transforming lives through the art of hair styling. 
              Our passion for beauty and commitment to excellence has made us the premier destination 
              for hair care in the heart of downtown.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2010 by master stylist Sarah Mitchell, Luxe Hair Studio began as a dream 
                  to create a space where artistry meets luxury. What started as a small boutique salon 
                  has grown into the city's most trusted destination for hair transformation.
                </p>
                <p>
                  Our journey has been guided by a simple philosophy: every client deserves to feel 
                  beautiful and confident. We believe that great hair is not just about following trends, 
                  but about understanding each person's unique style and enhancing their natural beauty.
                </p>
                <p>
                  Today, our team of expert stylists continues to push the boundaries of creativity 
                  while maintaining the personal touch that has made us a beloved part of the community. 
                  We're not just a salon – we're your partners in looking and feeling your absolute best.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-[400px] bg-gradient-to-br from-rose-200 to-pink-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <Heart className="h-24 w-24 mx-auto mb-4 text-rose-400" />
                  <p className="text-lg">15 Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Luxe Hair Studio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-rose-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-10 w-10 text-rose-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our talented stylists are passionate professionals dedicated to bringing out your best look
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="w-24 h-24 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-12 w-12 text-rose-500" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-rose-500 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.experience} experience</p>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-700">Specialties:</p>
                    {member.specialties.map((specialty, idx) => (
                      <span key={idx} className="inline-block bg-rose-100 text-rose-700 text-xs px-2 py-1 rounded-full mr-1 mb-1">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-rose-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-playfair">Awards & Recognition</h2>
            <p className="text-xl text-rose-100 max-w-2xl mx-auto">
              We're honored to be recognized for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Hair Salon 2024</h3>
              <p className="text-rose-100">Downtown Beauty Awards</p>
            </div>
            <div className="text-center">
              <Star className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">5-Star Excellence</h3>
              <p className="text-rose-100">Consistently rated by clients</p>
            </div>
            <div className="text-center">
              <Users className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Choice</h3>
              <p className="text-rose-100">Voted by local residents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">
            Ready to Experience the Luxe Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust us with their hair. Book your appointment today 
            and discover why we're the premier choice for hair care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/booking" 
              className="bg-rose-500 text-white px-8 py-4 rounded-full hover:bg-rose-600 transition-colors font-medium"
            >
              Book Your Appointment
            </a>
            <a 
              href="/contact" 
              className="border-2 border-rose-500 text-rose-500 px-8 py-4 rounded-full hover:bg-rose-500 hover:text-white transition-colors font-medium"
            >
              Contact Us
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
                <span className="text-2xl font-bold font-playfair">Luxe Hair Studio</span>
              </div>
              <p className="text-gray-400">
                Transform your look with our expert stylists and premium hair care services.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-400">Hair Cuts</span></li>
                <li><span className="text-gray-400">Hair Coloring</span></li>
                <li><span className="text-gray-400">Hair Treatments</span></li>
                <li><span className="text-gray-400">Bridal Styling</span></li>
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