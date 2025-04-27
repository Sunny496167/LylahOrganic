import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Master Perfumer',
      image: '/images/team/perfumer.jpg',
      bio: 'With over 15 years of experience in crafting unique fragrances.'
    },
    // Add more team members
  ];

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-16">
        <div className="absolute inset-0">
          <img
            src="/images/about-hero.jpg"
            alt="About LYLAH"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Our Story</h1>
            <p className="text-lg md:text-xl max-w-2xl">
              Crafting exceptional fragrances since 2008
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At LYLAH, we believe that fragrance is more than just a scent—it's an 
              expression of individuality, a catalyst for memories, and a daily 
              source of joy and confidence.
            </p>
            <p className="text-gray-600">
              Our mission is to create exceptional fragrances that inspire and 
              delight, while maintaining our commitment to sustainability and 
              ethical practices.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="/images/mission.jpg"
              alt="Our Mission"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Quality', 'Sustainability', 'Innovation'].map((value, index) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-medium text-gray-900 mb-4">{value}</h3>
                <p className="text-gray-600">
                  {/* Add value description */}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-serif text-center text-gray-900 mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900">{member.name}</h3>
              <p className="text-primary-600 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
