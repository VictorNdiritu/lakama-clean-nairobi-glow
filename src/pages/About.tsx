
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Shield, Leaf, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                About Lakama Cleans
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Born in the heart of Nairobi, Lakama Cleans was founded with a simple mission: 
                to simplify lives through cleanliness. We understand that in today's busy world, 
                maintaining a clean space shouldn't be another burden on your shoulders.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                What started as a small local cleaning service has grown into Nairobi's trusted 
                partner for residential and commercial cleaning solutions, always staying true 
                to our roots and commitment to exceptional service.
              </p>
              <Button asChild className="bg-teal-600 hover:bg-teal-700">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-teal-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg opacity-90">
                  "To simplify lives through cleanliness by providing reliable, 
                  professional cleaning services that give our clients the freedom 
                  to focus on what truly matters to them."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-teal-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Reliability</h3>
                <p className="text-gray-600">
                  We show up when we say we will, deliver consistent results, and build lasting trust with every client.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-teal-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on the standard of our work, ensuring every space meets our high expectations.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-teal-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Discretion</h3>
                <p className="text-gray-600">
                  We respect your privacy and space, working quietly and professionally in your personal or business environment.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="text-teal-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Environmental Care</h3>
                <p className="text-gray-600">
                  We use eco-friendly products and sustainable practices to protect both your health and our planet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Proudly Serving Nairobi
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-teal-500 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Expertise</h4>
                    <p className="text-gray-600">We understand Nairobi's unique cleaning challenges and requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-teal-500 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Focused</h4>
                    <p className="text-gray-600">Supporting local families and businesses is at the heart of what we do.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-teal-500 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Flexible Solutions</h4>
                    <p className="text-gray-600">From one-time deep cleans to regular maintenance, we adapt to your needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-teal-500 text-xl">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Trusted Professionals</h4>
                    <p className="text-gray-600">Our team is trained, vetted, and committed to maintaining your trust.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience the Difference?</h3>
              <p className="text-gray-600 mb-6">
                Join hundreds of satisfied clients across Nairobi who trust Lakama Cleans for their cleaning needs.
              </p>
              <div className="space-y-3">
                <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link to="/booking">Book Your First Clean</Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-teal-600 text-teal-600 hover:bg-teal-50">
                  <Link to="/contact">Get a Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
