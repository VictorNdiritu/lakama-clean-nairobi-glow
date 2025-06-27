
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Home, Building, HardHat, Bug, RotateCcw, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Cleaning",
      description: "Complete home cleaning services including deep cleaning, regular maintenance, and move-in/move-out cleaning.",
      features: [
        "Kitchen and bathroom deep cleaning",
        "Floor mopping and vacuuming",
        "Dusting and surface cleaning",
        "Window cleaning (interior)",
        "Appliance cleaning"
      ],
      startingPrice: "KSh 3,000",
      popular: true
    },
    {
      icon: Building,
      title: "Office & Commercial Cleaning",
      description: "Professional cleaning services for offices, retail spaces, and commercial properties.",
      features: [
        "Daily or weekly office cleaning",
        "Reception and common area maintenance",
        "Restroom sanitization",
        "Trash removal and recycling",
        "Floor care and maintenance"
      ],
      startingPrice: "KSh 5,000",
      popular: false
    },
    {
      icon: HardHat,
      title: "Post-Construction Cleaning",
      description: "Thorough cleanup services after construction, renovation, or remodeling projects.",
      features: [
        "Debris and dust removal",
        "Paint and adhesive cleanup",
        "Window and surface cleaning",
        "Floor preparation and cleaning",
        "Final touch-up cleaning"
      ],
      startingPrice: "Custom Quote",
      popular: false
    },
    {
      icon: Bug,
      title: "Fumigation & Pest Control",
      description: "Professional pest control and fumigation services to keep your space pest-free.",
      features: [
        "Comprehensive pest inspection",
        "Safe fumigation treatments",
        "Preventive pest control",
        "Follow-up treatments",
        "Eco-friendly options available"
      ],
      startingPrice: "KSh 2,500",
      popular: false
    },
    {
      icon: RotateCcw,
      title: "Regular Cleaning Packages",
      description: "Scheduled cleaning services with flexible frequencies to maintain your space consistently.",
      features: [
        "Weekly, bi-weekly, or monthly service",
        "Consistent cleaning team",
        "Customized cleaning checklist",
        "Priority booking",
        "Discounted rates for regular clients"
      ],
      startingPrice: "KSh 2,500",
      popular: false
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning Specialist",
      description: "Intensive cleaning services for spaces that need extra attention and care.",
      features: [
        "Detailed carpet and upholstery cleaning",
        "Tile and grout restoration",
        "Cabinet and fixture deep cleaning",
        "Mold and mildew treatment",
        "Odor elimination"
      ],
      startingPrice: "KSh 4,500",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Cleaning Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional cleaning solutions tailored to your needs. From residential homes to commercial spaces, 
            we deliver exceptional results every time.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-shadow ${service.popular ? 'ring-2 ring-teal-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="text-teal-600" size={32} />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-teal-500 mr-2">✓</span>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-teal-600">{service.startingPrice}</span>
                      {service.startingPrice !== "Custom Quote" && (
                        <span className="text-gray-500 text-sm">per service</span>
                      )}
                    </div>
                    <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                      <Link to="/booking">Book This Service</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Custom Cleaning Solution?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us for personalized cleaning packages and competitive pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link to="/contact">Get Custom Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-teal-600">
              <Link to="/booking">Book Standard Service</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
