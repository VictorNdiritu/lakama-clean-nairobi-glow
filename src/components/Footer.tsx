
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/8714db40-c833-47d4-9572-b059a90acf70.png" 
              alt="Lakama Cleans Limited" 
              className="h-12 w-auto"
            />
            <p className="text-gray-300">
              Professional cleaning services across Nairobi. We clean, you relax.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <p className="text-gray-300">Residential Cleaning</p>
              <p className="text-gray-300">Office Cleaning</p>
              <p className="text-gray-300">Post-Construction</p>
              <p className="text-gray-300">Fumigation</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span className="text-gray-300">+254 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span className="text-gray-300">info@lakamacleans.co.ke</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} />
                <span className="text-gray-300">Mon-Sat: 8AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Lakama Cleans Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
