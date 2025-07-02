
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
                comfort, and overall well-being.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're looking to refresh your home, maintain a pristine office, or tackle the 
                post-renovation mess, Lakama Cleans is here to help you every step of the way.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="brand-gradient rounded-lg p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg opacity-95">
                  "To deliver high-quality cleaning solutions with a focus on customer satisfaction, 
                  eco-friendly practices, and attention to detail. At Lakama Cleans, we pride ourselves 
                  on making your spaces cleaner, healthier, and more inviting."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Stats */}
      <section className="py-16">
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
                  We care about the environment, using green cleaning products to ensure a safe, healthy, and sustainable experience.
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

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-600">
                We show up when we say we will, deliver consistent results, and build lasting trust with every client.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on the standard of our work, ensuring every space meets our high expectations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Care</h3>
              <p className="text-gray-600">
                We treat every space with the same care and attention we'd give our own home.
              </p>
            </div>
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
