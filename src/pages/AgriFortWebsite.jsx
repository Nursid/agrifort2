import React, { useState } from 'react';
import { ChevronRight, Leaf, Users, BookOpen, Briefcase, Phone, Mail, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import NewSection from '../components/newSection';
import AboutSection from '../components/AboutSection';
import CommitmentSection from '../components/CommitmentSection';
import AgriSection from '../components/AgriSection';

const AgriFortWebsite = () => {
  const advantages = [
    { icon: Award, title: 'Manufacturing', description: 'State-of-the-art production facilities' },
    { icon: Leaf, title: 'R&D', description: 'Cutting-edge research and development' },
    { icon: Users, title: 'People at AgriFort', description: 'Experienced team of professionals' },
    { icon: BookOpen, title: 'Tech-based Products', description: 'Innovation-driven solutions' },
    { icon: Briefcase, title: 'Trusted Partnerships', description: 'Building lasting relationships' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <Navbar  />

      {/* Hero Section */}
      {/* <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Innovative Tech
              </span>
              <br />
              <span className="text-gray-700">to Transform Agriculture</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Empowering farmers with cutting-edge solutions. Farmer wins, we win.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#about" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-200 flex items-center justify-center">
                Explore Our Journey
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#portfolio" className="border-2 border-green-600 text-green-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-all duration-200">
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* <HeroSection /> */}
      <NewSection />


      {/* AgriFort Journey Section */}
      <AboutSection/>
     

     <CommitmentSection />
     <AgriSection />

      {/* The AgriFort Advantage */}
      <section id="highlights" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The AgriFort Advantage</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{advantage.title}</h3>
                  <p className="text-sm text-gray-600">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standards We Live By */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Standards We Live By</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality, integrity, and innovation guide every decision we make. Our commitment to excellence ensures the best outcomes for our partners and the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-2 rounded-lg">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">AgriFort</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming agriculture through innovation and technology.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Addresses</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Get in Touch</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="flex items-center"><Phone className="h-4 w-4 mr-2" /> Contact Us</p>
                <p className="flex items-center"><Mail className="h-4 w-4 mr-2" /> info@agrifort.com</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Grow Your Career</h4>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors text-sm">Join Our Team</a>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-green-500 transition-colors text-sm">Socials</a>
                <a href="#" className="block text-gray-400 hover:text-green-500 transition-colors text-sm">Media</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 AgriFort. All rights reserved. Innovating for a sustainable future.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AgriFortWebsite;