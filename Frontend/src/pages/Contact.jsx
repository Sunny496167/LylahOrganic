import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Hero Section */}
      <div className="bg-amber-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Keep In Touch with Us</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We do not sell product from our corporate headquarters in New York City. If you want to visit please reach out to our customer service team first.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-6xl mx-auto py-16 px-4 md:px-8 relative overflow-hidden">
        {/* Animated Gradient Background Elements */}
        
        <h1 className="text-4xl md:text-5xl font-serif mb-8 text-center relative z-10">Get in Touch</h1>
        
        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          {/* Contact Form */}
          <div className="bg-zinc-900 p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium">Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-amber-500 py-2"
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-amber-500 py-2"
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium">Phone number:</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(123) 456-7890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-amber-500 py-2"
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium">Message:</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-amber-500 py-2 resize-none"
                ></textarea>
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 px-8 rounded-full transition"
              >
                {loading ? 'Sending...' : 'SEND NOW'}
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-gray-400">
              We do not sell products from our corporate headquarters in New York City. If you want to visit, please reach out to our customer service team first.
            </p>
            
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-semibold text-white">Visit us:</p>
                <p>Sydney Road, Billboard Street 2219-11C</p>
              </div>
              
              <div>
                <p className="font-semibold text-white">Email us:</p>
                <p>aromesupport@mail.com</p>
              </div>
              
              <div>
                <p className="font-semibold text-white">Call us:</p>
                <p>+1 (880) 567 891 505</p>
              </div>
              
              <div>
                <p className="font-semibold text-white">We are open:</p>
                <p>Monday – Friday: 8:00–20:00</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/4 text-amber-400 text-4xl opacity-30 z-0">✧</div>
        <div className="absolute bottom-1/4 left-1/4 text-amber-400 text-3xl opacity-30 z-0">✧</div>
      </main>
    </div>
  );
}