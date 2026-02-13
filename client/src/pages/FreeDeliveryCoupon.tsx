import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { subscribeToMailchimp } from "@/lib/mailchimp";
import { Printer, Check, Truck } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subscribe: z.boolean().default(true),
});

export default function FreeDeliveryCoupon() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema) as any, // Cast to any to bypass strict type check on resolver
    defaultValues: {
      name: "",
      email: "",
      subscribe: true,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    
    try {
      // If user opted in to subscribe, send to Mailchimp
      if (values.subscribe) {
        const data = {
          EMAIL: values.email,
          FNAME: values.name.split(' ')[0],
          LNAME: values.name.split(' ').slice(1).join(' '),
          tags: "Free Delivery Coupon"
        };
        
        // We attempt to subscribe but don't block the coupon if it fails (e.g. already subscribed)
        await subscribeToMailchimp(data).catch(console.error);
      }
      
      // Also send to Formspree/Email if configured (simulated here for now)
      // In a real scenario, we would post to the Formspree endpoint here.
      
      setIsSubmitted(true);
      toast.success("Coupon unlocked!");
      window.scrollTo(0, 0);
      
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  const handlePrint = () => {
    window.print();
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 print:bg-white print:p-0 print:h-screen print:flex print:items-center print:justify-center">
        <style>{`
          @media print {
            @page { margin: 0; size: auto; }
            body * { visibility: hidden; }
            #coupon-container, #coupon-container * { visibility: visible; }
            #coupon-container { 
              position: absolute; 
              left: 0; 
              top: 0; 
              width: 100%; 
              margin: 0;
              border: none !important;
              box-shadow: none !important;
            }
            /* Hide header/footer if they exist outside this component */
            header, footer, nav { display: none !important; }
          }
        `}</style>
        <div id="coupon-container" className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden border-2 border-[#002D5C] print:shadow-none print:border-4 print:w-full print:max-w-none print:rounded-none">
          {/* Coupon Header */}
          <div className="bg-[#002D5C] text-white p-8 text-center print:bg-white print:text-black">
            <div className="flex justify-center mb-4">
              <Truck className="h-16 w-16 text-[#C25B3C] print:text-black" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-2">Free Delivery Coupon</h1>
            <p className="text-lg opacity-90 print:text-black">La-Z-Boy Home Furnishings & Décor</p>
          </div>

          {/* Coupon Body */}
          <div className="p-8 md:p-12 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-semibold text-[#002D5C] print:text-black">Award-Winning White Glove Service</h2>
              <p className="text-gray-600 print:text-black">Present this coupon at time of purchase to receive free delivery.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg print:bg-transparent print:border print:border-gray-300">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Check className="h-5 w-5 text-[#C25B3C] print:text-black" />
                  What's Included:
                </h3>
                <ul className="space-y-3 text-sm text-gray-700 print:text-black">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>You’ll receive a call one hour before your furniture arrives.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Your furniture will be unboxed, put together, and placed in your room by professionals.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Nothing will be left outside in the rain.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg print:bg-transparent print:border print:border-gray-300">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Check className="h-5 w-5 text-[#C25B3C] print:text-black" />
                  Valid On:
                </h3>
                <ul className="space-y-3 text-sm text-gray-700 print:text-black">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>All La-Z-Boy living room, dining room, and bedroom furniture.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Great brands like Hammary, American Drew, and Kincaid.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t-2 border-dashed border-gray-300 pt-6 text-xs text-gray-500 text-justify print:text-black">
              <p><strong>Please note:</strong> Coupon must be presented at time of purchase and cannot be combined with any other offers, discounts, or clearance furniture. Coupon is not valid on past sales or deliveries outside our standard delivery zone.</p>
            </div>
          </div>

          {/* Coupon Footer / Print Button */}
          <div className="bg-gray-100 p-6 text-center print:hidden">
            <Button onClick={handlePrint} size="lg" className="bg-[#002D5C] hover:bg-[#001F40] gap-2">
              <Printer className="h-5 w-5" />
              Print Coupon
            </Button>
            <p className="mt-4 text-sm text-gray-500">Or take a screenshot and show it on your phone!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8 w-full">
            <div className="uppercase tracking-wide text-sm text-[#C25B3C] font-semibold mb-1">Limited Time Offer</div>
            <h1 className="block mt-1 text-3xl leading-tight font-bold text-[#002D5C]">Get Your Free Delivery Coupon</h1>
            <p className="mt-4 text-gray-500">
              Fill out the form below to receive your Free Delivery Coupon. Bring it with you when shopping at your nearest La-Z-Boy store to get free delivery of your purchase for a limited time!
            </p>

            <div className="mt-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subscribe"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-gray-50">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Join the Comfort Club
                          </FormLabel>
                          <p className="text-sm text-muted-foreground">
                            Receive exclusive offers, design tips, and news from La-Z-Boy Columbus.
                          </p>
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-[#C25B3C] hover:bg-[#A04830] text-lg h-12" disabled={isLoading}>
                    {isLoading ? "Generating Coupon..." : "Get Coupon"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
