import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2 } from "lucide-react";

export default function ServiceRequest() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = `Service Request from ${formData.firstName} ${formData.lastName}`;
    const body = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Request Details:
${formData.message}
    `;
    
    window.location.href = `mailto:Service@lazboy-columbus.com,sevans@lazboy-columbus.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Show confirmation and clear form
    setShowConfirmation(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-[#003B4F] flex items-center justify-center py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl"
      >
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-[#EAE0D5] mb-4">Service Request</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-[#EAE0D5] text-lg font-normal">First name (Required)</Label>
            <Input 
              type="text" 
              id="firstName" 
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="bg-[#EAE0D5] border-none h-12 text-[#003B4F] text-lg focus-visible:ring-[#EAE0D5]/50" 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-[#EAE0D5] text-lg font-normal">Last name (Required)</Label>
            <Input 
              type="text" 
              id="lastName" 
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="bg-[#EAE0D5] border-none h-12 text-[#003B4F] text-lg focus-visible:ring-[#EAE0D5]/50" 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#EAE0D5] text-lg font-normal">Email (Required)</Label>
            <Input 
              type="email" 
              id="email" 
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-[#EAE0D5] border-none h-12 text-[#003B4F] text-lg focus-visible:ring-[#EAE0D5]/50" 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-[#EAE0D5] text-lg font-normal">Phone (Required)</Label>
            <Input 
              type="tel" 
              id="phone" 
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="bg-[#EAE0D5] border-none h-12 text-[#003B4F] text-lg focus-visible:ring-[#EAE0D5]/50" 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-[#EAE0D5] text-lg font-normal">Tell us what you need help with... (Required)</Label>
            <Textarea 
              id="message" 
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="bg-[#EAE0D5] border-none min-h-[150px] text-[#003B4F] text-lg focus-visible:ring-[#EAE0D5]/50 resize-none" 
            />
          </div>

          <div className="flex justify-center pt-8">
            <Button 
              type="submit" 
              className="bg-[#B5C9C3] hover:bg-[#A3B8B2] text-[#003B4F] text-xl px-16 py-6 h-auto rounded-none w-full md:w-auto transition-colors duration-300"
            >
              Send
            </Button>
          </div>
        </form>
      </motion.div>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md bg-[#EAE0D5] border-none text-[#003B4F]">
          <DialogHeader className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#B5C9C3] flex items-center justify-center mb-2">
              <CheckCircle2 className="w-10 h-10 text-[#003B4F]" />
            </div>
            <DialogTitle className="text-2xl font-serif text-[#003B4F]">Email Draft Created!</DialogTitle>
            <DialogDescription className="text-[#003B4F]/80 text-lg">
              Your email client should have opened with your message ready to send. Please click "Send" in your email app to complete your request.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-6">
            <Button 
              onClick={() => setShowConfirmation(false)}
              className="bg-[#003B4F] text-[#EAE0D5] hover:bg-[#003B4F]/90 px-8"
            >
              Got it
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
