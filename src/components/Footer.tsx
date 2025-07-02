
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/8714db40-c833-47d4-9572-b059a90acf70.png" 
              alt="Lakama Cleans" 
              className="h-12 w-auto"
            />
            <p className="text-gray-300">
              Professional cleaning services across Nairobi. Experience the joy of clean.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">L</span>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">C</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                Services
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <div className="space-y-2">
              <p className="text-gray-400">🏠 Home Cleaning</p>
              <p className="text-gray-400">🏢 Office Cleaning</p>
              <p className="text-gray-400">🏗 Post-Construction</p>
              <p className="text-gray-400">🦟 Fumigation</p>
              <p className="text-gray-400">🧽 Maintenance</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-cyan-400" />
                <span className="text-gray-400">+254 707 540 229</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-cyan-400" />
                <span className="text-gray-400">info@lakamacleans.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-cyan-400" />
                <span className="text-gray-400">Railways Museum, Nairobi</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-cyan-400" />
                <span className="text-gray-400">Mon-Sat: 8AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Lakama Cleans. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
                <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
