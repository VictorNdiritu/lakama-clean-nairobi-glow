
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Shield, Leaf, Award, Star, Users, Calendar, Smile } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                About <span className="brand-gradient-text">Lakama Cleans</span>
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                Professional Cleaning Services You Can Rely On
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Welcome to Lakama Cleans, your trusted partner for all your cleaning and maintenance needs. 
                At Lakama Cleans, we understand that a clean and well-maintained space can enhance productivity, 
                comfort, and overall well-being. That's why we are committed to providing professional and reliable 
                cleaning services for homes, offices, and renovation sites.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mission is simple: to deliver high-quality cleaning solutions with a focus on customer satisfaction, 
                eco-friendly practices, and attention to detail. Whether you're looking to refresh your home, maintain a 
                pristine office, or tackle the post-renovation mess, Lakama Cleans is here to help you every step of the way.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/f32069f5-e935-455e-ae91-8ef804e2916d.png"
                alt="Professional cleaning supplies and equipment"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img
                src="/lovable-uploads/9e77b1be-379b-4a1c-861c-3bb40622715c.png"
                alt="Post-construction cleaning service"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Post-Construction Expertise</h3>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in post-construction and renovation cleanup, handling everything from dust removal 
                to final touch-ups. Our team has the equipment and expertise to transform construction sites 
                into pristine, move-in ready spaces.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Pest Control</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our fumigation and pest control services protect your property using safe, effective methods. 
                We provide thorough inspections, targeted treatments, and follow-up services to ensure your 
                space remains pest-free.
              </p>
            </div>
            <div className="order-1 md:order-2 relative">
              <img
                src="/lovable-uploads/e0ab9ada-77c4-43b1-a845-9f7e4ac7a6ae.png"
                alt="Professional fumigation and pest control service"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Lakama Cleans?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-blue-800" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Experienced Professionals</h3>
                <p className="text-gray-600">
                  Our team is trained and experienced in providing high-quality cleaning services tailored to your needs.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="text-blue-800" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Eco-Friendly Products</h3>
                <p className="text-gray-600">
                  We care about the environment, which is why we use green cleaning products to ensure a safe, healthy, and sustainable cleaning experience.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smile className="text-blue-800" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Satisfaction</h3>
                <p className="text-gray-600">
                  We're committed to exceeding your expectations with every service. Your satisfaction is our top priority.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-blue-800" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  We work around your schedule, offering both one-time and recurring cleaning services to suit your convenience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 brand-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience the Lakama Difference?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            At Lakama Cleans, we pride ourselves on making your spaces cleaner, healthier, and more inviting. 
            Let us handle the cleaning, so you can focus on what matters most. Reach out today to learn more!
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

export default About;
