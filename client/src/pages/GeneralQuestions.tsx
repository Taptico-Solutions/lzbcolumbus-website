import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function GeneralQuestions() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    question: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link with multiple recipients
    const recipients = "mrice@lazboy-columbus.com,sevans@lazboy-columbus.com";
    const subject = `General Question from ${formData.firstName} ${formData.lastName}`;
    const body = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Question:
${formData.question}
    `;
    
    window.location.href = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
          <h1 className="font-serif text-4xl md:text-5xl text-[#EAE0D5] mb-4">General Questions</h1>
          <p className="text-[#EAE0D5]/80 text-lg">We're here to help! Send us your questions and we'll get back to you shortly.</p>
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
            <Label htmlFor="question" className="text-[#EAE0D5] text-lg font-normal">What's on your mind? (Required)</Label>
            <Textarea 
              id="question" 
              name="question"
              required
              value={formData.question}
              onChange={handleChange}
              className="bg-[#EAE0D5] border-none min-h-[150px] text-[#003B4F] text-lg focus-visible:ring-[#EAE0D5]/50 resize-none" 
            />
          </div>

          <div className="flex justify-center pt-8">
            <Button 
              type="submit" 
              className="bg-[#B5C9C3] hover:bg-[#A3B8B2] text-[#003B4F] text-xl px-16 py-6 h-auto rounded-none w-full md:w-auto transition-colors duration-300"
            >
              Send Question
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
