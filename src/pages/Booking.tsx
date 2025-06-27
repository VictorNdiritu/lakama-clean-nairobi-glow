import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: "",
    location: "",
    date: "",
    time: "",
    frequency: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Booking submitted:", bookingData);
    toast({
      title: "Booking Confirmed!",
      description: "We'll send you a confirmation email with all the details.",
    });
    // Reset form
    setBookingData({
      service: "",
      location: "",
      date: "",
      time: "",
      frequency: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      notes: ""
    });
    setCurrentStep(1);
  };

  const services = [
    { value: "residential", label: "Residential Cleaning" },
    { value: "office", label: "Office & Commercial" },
    { value: "construction", label: "Post-Construction" },
    { value: "fumigation", label: "Fumigation & Pest Control" },
    { value: "regular", label: "Regular Cleaning Package" },
    { value: "deep", label: "Deep Cleaning" }
  ];

  const timeSlots = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Book Your Cleaning Service</h1>
          <p className="text-lg text-gray-600">Follow the steps below to schedule your cleaning service</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= step ? 'bg-teal-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`h-1 w-full mx-4 ${
                    currentStep > step ? 'bg-teal-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Service</span>
            <span>Location & Date</span>
            <span>Contact Info</span>
            <span>Confirmation</span>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              {currentStep === 1 && (
                <>
                  <User className="text-teal-600" size={24} />
                  <span>Step 1: Select Service</span>
                </>
              )}
              {currentStep === 2 && (
                <>
                  <MapPin className="text-teal-600" size={24} />
                  <span>Step 2: Location & Schedule</span>
                </>
              )}
              {currentStep === 3 && (
                <>
                  <User className="text-teal-600" size={24} />
                  <span>Step 3: Contact Information</span>
                </>
              )}
              {currentStep === 4 && (
                <>
                  <Calendar className="text-teal-600" size={24} />
                  <span>Step 4: Confirmation</span>
                </>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Step 1: Service Selection */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Choose Your Service *
                  </label>
                  <Select value={bookingData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a cleaning service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Frequency
                  </label>
                  <Select value={bookingData.frequency} onValueChange={(value) => handleInputChange("frequency", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="How often do you need this service?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="one-time">One-time service</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* Step 2: Location & Schedule */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location Area *
                  </label>
                  <Select value={bookingData.location} onValueChange={(value) => handleInputChange("location", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your area in Nairobi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="westlands">Westlands</SelectItem>
                      <SelectItem value="karen">Karen</SelectItem>
                      <SelectItem value="kileleshwa">Kileleshwa</SelectItem>
                      <SelectItem value="lavington">Lavington</SelectItem>
                      <SelectItem value="parklands">Parklands</SelectItem>
                      <SelectItem value="upperhill">Upper Hill</SelectItem>
                      <SelectItem value="kilimani">Kilimani</SelectItem>
                      <SelectItem value="runda">Runda</SelectItem>
                      <SelectItem value="other">Other (please specify in notes)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <Input
                      type="date"
                      value={bookingData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <Select value={bookingData.time} onValueChange={(value) => handleInputChange("time", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>{time}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      value={bookingData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+254 707 540 229"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    value={bookingData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="lakamacleans@gmail.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Address *
                  </label>
                  <Textarea
                    value={bookingData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Please provide your complete address including building name, floor, and any access instructions"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Notes or Requirements
                  </label>
                  <Textarea
                    value={bookingData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    placeholder="Any specific instructions, areas of focus, or special requirements"
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Service:</strong> {services.find(s => s.value === bookingData.service)?.label}</p>
                      <p><strong>Frequency:</strong> {bookingData.frequency}</p>
                      <p><strong>Date:</strong> {bookingData.date}</p>
                      <p><strong>Time:</strong> {bookingData.time}</p>
                    </div>
                    <div>
                      <p><strong>Name:</strong> {bookingData.name}</p>
                      <p><strong>Phone:</strong> {bookingData.phone}</p>
                      <p><strong>Email:</strong> {bookingData.email}</p>
                      <p><strong>Location:</strong> {bookingData.location}</p>
                    </div>
                  </div>
                  {bookingData.notes && (
                    <div className="mt-4">
                      <p><strong>Notes:</strong> {bookingData.notes}</p>
                    </div>
                  )}
                </div>
                <div className="bg-teal-50 p-4 rounded-lg">
                  <p className="text-teal-800">
                    <strong>Next Steps:</strong> After confirmation, we'll send you a detailed email with service information, 
                    payment options, and contact details for your assigned cleaning team.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
              >
                Back
              </Button>
              {currentStep < 4 ? (
                <Button
                  onClick={handleNext}
                  className="bg-teal-600 hover:bg-teal-700"
                  disabled={
                    (currentStep === 1 && !bookingData.service) ||
                    (currentStep === 2 && (!bookingData.location || !bookingData.date || !bookingData.time)) ||
                    (currentStep === 3 && (!bookingData.name || !bookingData.phone || !bookingData.email || !bookingData.address))
                  }
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  Confirm Booking
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Booking;
