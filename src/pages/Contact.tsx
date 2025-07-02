
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 2 hours during business hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      location: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const whatsappUrl = "https://wa.me/254707540229?text=Hello%20Lakama%20Cleans,%20I%20would%20like%20to%20inquire%20about%20your%20cleaning%20services.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get a <span className="brand-gradient-text">Free Quote</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience the joy of clean? Get your personalized quote today.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Request Quote</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you with a personalized quote.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Type *
                    </label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger className="focus:ring-2 focus:ring-blue-500">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="home">🏠 Home Cleaning</SelectItem>
                        <SelectItem value="office">🏢 Office & Commercial</SelectItem>
                        <SelectItem value="construction">🏗 Post-Construction</SelectItem>
                        <SelectItem value="fumigation">🦟 Fumigation & Pest Control</SelectItem>
                        <SelectItem value="maintenance">🧽 Maintenance Cleaning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Location *
                    </label>
                    <Input
                      id="location"
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      placeholder="Your location in Nairobi"
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+254 XXX XXX XXX"
                        className="focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        className="focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Tell us more
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your space, any specific requirements, or questions you have..."
                      className="focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <Button type="submit" className="w-full btn-primary">
                    Request Quote
                  </Button>
                  <p className="text-sm text-gray-600 text-center">
                    We'll get back to you within 2 hours during business hours.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-blue-600" size={20} />
                    <div>
                      <p className="font-medium">Phone / WhatsApp</p>
                      <p className="text-gray-600">+254 707 540 229</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-blue-600" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@lakamacleans.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-blue-600" size={20} />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">Railways Museum, Haile Selassie Roundabout, Nairobi</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="text-blue-600" size={20} />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-gray-600">Mon–Sat: 8 am – 6 pm</p>
                      <p className="text-gray-600">Emergency cleanings on request</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Contact */}
              <Card className="bg-green-50 border-green-200 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MessageCircle className="text-green-600" size={24} />
                    <h3 className="text-lg font-semibold text-green-800">Quick WhatsApp Contact</h3>
                  </div>
                  <p className="text-green-700 mb-4">
                    Need immediate assistance? Send us a message on WhatsApp for faster response.
                  </p>
                  <Button 
                    asChild 
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card className="bg-blue-50 border-blue-200 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Payment Methods</h3>
                  <p className="text-blue-700 mb-4">
                    We accept multiple convenient payment options for your ease.
                  </p>
                  <div className="space-y-2">
                    <p className="text-blue-800 font-medium">• Mpesa</p>
                    <p className="text-blue-800 font-medium">• Bank Transfer</p>
                    <p className="text-blue-800 font-medium">• Cash</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
