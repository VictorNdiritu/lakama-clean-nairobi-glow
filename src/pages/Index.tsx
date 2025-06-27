
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Leaf, Users, Calendar, MapPin, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              We Clean, <span className="text-teal-600">You Relax</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional cleaning services across Nairobi. From homes to offices, 
              we deliver spotless results so you can focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-4">
                <Link to="/booking">Book Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-teal-600 text-teal-600 hover:bg-teal-50">
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Lakama Cleans?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly Supplies</h3>
              <p className="text-gray-600">Safe, green cleaning products that protect your family and the environment.</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trained Professionals</h3>
              <p className="text-gray-600">Experienced, vetted cleaning experts who deliver consistent quality.</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Book one-time or recurring services that fit your busy lifestyle.</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-teal-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nairobi Coverage</h3>
              <p className="text-gray-600">Serving homes and businesses throughout Nairobi and surrounding areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive cleaning solutions for every need
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Sparkles className="text-teal-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Residential Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Deep cleaning and regular maintenance for your home
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="text-teal-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Office & Commercial</h3>
                <p className="text-gray-600 mb-4">
                  Professional cleaning for workspaces and commercial properties
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <CheckCircle className="text-teal-600 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Post-Construction</h3>
                <p className="text-gray-600 mb-4">
                  Thorough cleanup after construction or renovation projects
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for a Spotless Space?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your cleaning service today and experience the Lakama difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link to="/booking">Schedule Cleaning</Link>
            </Button>
            <Button asChild size="lg" className="text-lg px-8 py-4 bg-white text-teal-600 hover:bg-gray-100">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
