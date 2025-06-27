
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
    preferredDate: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours with a detailed quote.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      preferredDate: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const whatsappUrl = "https://wa.me/254XXXXXXXXX?text=Hello%20Lakama%20Cleans,%20I%20would%20like%20to%20inquire%20about%20your%20cleaning%20services.";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience spotless cleaning? Contact us for a free quote or to schedule your service.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Request a Quote</CardTitle>
                <p className="text-gray-600">Fill out the form below and we'll get back to you with a personalized quote.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+254 XXX XXX XXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Type *
                    </label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential Cleaning</SelectItem>
                        <SelectItem value="office">Office & Commercial</SelectItem>
                        <SelectItem value="construction">Post-Construction</SelectItem>
                        <SelectItem value="fumigation">Fumigation & Pest Control</SelectItem>
                        <SelectItem value="regular">Regular Cleaning Package</SelectItem>
                        <SelectItem value="deep">Deep Cleaning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date
                    </label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Details
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your space, any specific requirements, or questions you have..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                    Send Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-teal-600" size={20} />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+254 XXX XXX XXX</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-teal-600" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@lakamacleans.co.ke</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-teal-600" size={20} />
                    <div>
                      <p className="font-medium">Service Area</p>
                      <p className="text-gray-600">Nairobi & Surrounding Areas</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="text-teal-600" size={20} />
                    <div>
                      <p className="font-medium">Working Hours</p>
                      <p className="text-gray-600">Mon-Sat: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sunday: By Appointment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Contact */}
              <Card className="bg-green-50 border-green-200">
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

              {/* Emergency Contact */}
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Cleaning</h3>
                  <p className="text-red-700 mb-4">
                    Need urgent cleaning services? Call us directly for same-day or emergency cleaning solutions.
                  </p>
                  <p className="text-red-800 font-semibold">Emergency Line: +254 XXX XXX XXX</p>
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
