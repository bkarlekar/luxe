import { Scissors, Sparkles, Star, Users, Camera, Heart, Filter } from 'lucide-react';
import { useState } from 'react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work', icon: Camera },
    { id: 'cuts', name: 'Hair Cuts', icon: Scissors },
    { id: 'color', name: 'Hair Color', icon: Sparkles },
    { id: 'bridal', name: 'Bridal', icon: Heart },
    { id: 'treatments', name: 'Treatments', icon: Star }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'cuts',
      title: 'Modern Bob Cut',
      description: 'Sleek and sophisticated bob with subtle layers',
      stylist: 'Sarah Mitchell',
      beforeAfter: false
    },
    {
      id: 2,
      category: 'color',
      title: 'Balayage Highlights',
      description: 'Natural-looking highlights with seamless blending',
      stylist: 'Emma Rodriguez',
      beforeAfter: true
    },
    {
      id: 3,
      category: 'bridal',
      title: 'Romantic Updo',
      description: 'Elegant bridal hairstyle with soft curls',
      stylist: 'Jessica Chen',
      beforeAfter: false
    },
    {
      id: 4,
      category: 'cuts',
      title: 'Layered Long Hair',
      description: 'Face-framing layers for movement and volume',
      stylist: 'Maria Santos',
      beforeAfter: false
    },
    {
      id: 5,
      category: 'color',
      title: 'Platinum Blonde',
      description: 'Complete color transformation to platinum',
      stylist: 'Emma Rodriguez',
      beforeAfter: true
    },
    {
      id: 6,
      category: 'treatments',
      title: 'Keratin Treatment',
      description: 'Smooth, frizz-free hair transformation',
      stylist: 'Jessica Chen',
      beforeAfter: true
    },
    {
      id: 7,
      category: 'cuts',
      title: 'Pixie Cut',
      description: 'Bold and edgy short cut with texture',
      stylist: 'Sarah Mitchell',
      beforeAfter: false
    },
    {
      id: 8,
      category: 'color',
      title: 'Ombre Hair',
      description: 'Gradual color transition from dark to light',
      stylist: 'Emma Rodriguez',
      beforeAfter: false
    },
    {
      id: 9,
      category: 'bridal',
      title: 'Braided Crown',
      description: 'Intricate braided style for outdoor wedding',
      stylist: 'Maria Santos',
      beforeAfter: false
    },
    {
      id: 10,
      category: 'cuts',
      title: 'Shag Haircut',
      description: 'Trendy shag with face-framing layers',
      stylist: 'Sarah Mitchell',
      beforeAfter: false
    },
    {
      id: 11,
      category: 'color',
      title: 'Rose Gold Hair',
      description: 'Trendy rose gold color with subtle highlights',
      stylist: 'Emma Rodriguez',
      beforeAfter: true
    },
    {
      id: 12,
      category: 'treatments',
      title: 'Hair Glossing',
      description: 'Added shine and color enhancement',
      stylist: 'Jessica Chen',
      beforeAfter: true
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

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
              <a href="/about" className="text-gray-700 hover:text-rose-500 font-medium transition-colors">About</a>
              <a href="/services" className="text-gray-700 hover:text-rose-500 font-medium transition-colors">Services</a>
              <a href="/gallery" className="text-gray-900 hover:text-rose-500 font-medium transition-colors">Gallery</a>
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
              Our <span className="text-rose-500">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of stunning hair transformations. From dramatic makeovers to subtle enhancements, 
              see the artistry and expertise that sets Luxe Hair Studio apart.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-rose-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-rose-100 hover:text-rose-700'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Image Placeholder */}
                <div className="aspect-[4/5] bg-gradient-to-br from-rose-200 to-pink-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <Camera className="h-16 w-16 mx-auto mb-2 text-rose-400" />
                      <p className="text-sm">{item.title}</p>
                    </div>
                  </div>
                  
                  {/* Before/After Badge */}
                  {item.beforeAfter && (
                    <div className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Before & After
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-rose-500 font-medium">By {item.stylist}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-rose-500 text-white px-8 py-4 rounded-full hover:bg-rose-600 transition-colors font-medium">
              Load More Photos
            </button>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">Follow Us on Instagram</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest work and behind-the-scenes content
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <div key={item} className="aspect-square bg-gradient-to-br from-rose-200 to-pink-200 rounded-lg overflow-hidden group cursor-pointer">
                <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Camera className="h-8 w-8 text-rose-400" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://instagram.com/luxehairstudio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors font-medium"
            >
              <Camera className="h-5 w-5" />
              <span>@luxehairstudio</span>
            </a>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-playfair">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from real clients about their transformations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Sarah completely transformed my hair! I went from damaged, over-processed hair to healthy, beautiful locks. The balayage is absolutely perfect!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-rose-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Jennifer L.</p>
                  <p className="text-gray-600 text-sm">Balayage & Cut</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Emma is a color genius! She knew exactly what would work with my skin tone. I've never felt more confident about my hair color."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-rose-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Michelle R.</p>
                  <p className="text-gray-600 text-sm">Color Correction</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The team made my wedding day perfect! My hair looked amazing all day and night. Thank you for making me feel like a princess!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-rose-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Amanda K.</p>
                  <p className="text-gray-600 text-sm">Bridal Package</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-rose-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 font-playfair">Ready for Your Transformation?</h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Join our gallery of satisfied clients. Book your appointment today and let us create your perfect look.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/booking" 
              className="bg-white text-rose-500 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-medium"
            >
              Book Your Appointment
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-rose-500 transition-colors font-medium"
            >
              View Our Services
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