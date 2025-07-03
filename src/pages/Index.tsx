
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Leaf, Users, Calendar, MapPin, Sparkles, Star, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-cyan-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Experience the <span className="brand-gradient-text">Joy of Clean</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl">
                Professional cleaning services for homes, offices, and post-construction projects across Nairobi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="btn-primary text-lg px-8 py-4">
                  <Link to="/contact">Get Your Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="btn-secondary text-lg px-8 py-4">
                  <Link to="/services">Explore All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/ed24baad-9239-4863-83b1-4413b2229f9c.png"
                alt="Professional cleaning team at work"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Lakama Cleans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose <span className="brand-gradient-text">Lakama Cleans?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Star className="text-blue-800" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Over 7 Years Experience</h3>
              <p className="text-gray-600">Proven service in Nairobi with consistent quality results.</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="text-blue-800" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trained & Fully Insured</h3>
              <p className="text-gray-600">Professional team you can trust with complete peace of mind.</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Leaf className="text-blue-800" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly Products</h3>
              <p className="text-gray-600">Safe for families & pets, protecting your health and environment.</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="text-blue-800" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Fits your life or business schedule perfectly.</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle className="text-blue-800" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">No hidden fees - you know exactly what you're paying for.</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="text-blue-800" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nairobi Coverage</h3>
              <p className="text-gray-600">Serving homes and businesses throughout Nairobi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview with Images */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          </div>
          
          {/* Featured Services with Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/lovable-uploads/1d2ecfc2-46ca-4e62-aa90-45f9f645360d.png"
                alt="Home cleaning supplies and equipment"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Home Cleaning</h3>
                <p className="text-lg opacity-90">Come home to a fresh, healthy, welcoming space.</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/lovable-uploads/e1c0b012-7761-4048-a732-7e636f50ae76.png"
                alt="Professional office cleaning service"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Office Cleaning</h3>
                <p className="text-lg opacity-90">For spotless workspaces that impress staff & clients.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Post-Construction & Renovation</h3>
                <p className="text-gray-600 mb-4">
                  We handle dust & debris so your space is move-in ready.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fumigation & Pest Control</h3>
                <p className="text-gray-600 mb-4">
                  Protect your property from pests, professionally.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Maintenance Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Weekly or bi-weekly plans to keep everything effortlessly clean.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild className="btn-primary">
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 brand-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience the Joy of Clean?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Get your free quote today and let us make your space sparkle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-4">
              <Link to="/contact">Get Your Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
