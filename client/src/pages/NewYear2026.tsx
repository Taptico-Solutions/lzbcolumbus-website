import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function NewYear2026() {
  return (
    <Layout>
      <div className="bg-[#E6E2D5] min-h-screen pb-20">
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full overflow-hidden">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029768615/CIItMjewbURpzkRk.jpg" 
            alt="The Evans Family - Happy New Year 2026" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white p-8 max-w-3xl animate-fade-in-up">
              <h1 className="font-serif text-5xl md:text-7xl mb-6 drop-shadow-lg">Happy New Year 2026</h1>
              <p className="text-xl md:text-2xl font-light tracking-wide drop-shadow-md">
                From our family to yours, wishing you comfort and joy.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-20 relative z-10">
          <Card className="bg-white shadow-xl border-none overflow-hidden">
            <CardContent className="p-8 md:p-12">
              
              {/* Letter Section */}
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="font-serif text-3xl text-[#003349] mb-6">A Note from the Evans Family</h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  As we step into 2026, we find ourselves reflecting on the incredible community that has supported us for another year. La-Z-Boy Columbus isn't just a furniture store to us; it's a place where we get to help neighbors build the backdrops for their most cherished memories.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  This year, our resolution is simple: to continue bringing you the highest quality comfort with the personal touch you deserve. We're excited to introduce new collections, host more community events, and help you create a home that truly feels like a sanctuary.
                </p>
                <img 
                  src="/images/logo-final.png" 
                  alt="La-Z-Boy Columbus" 
                  className="h-12 mx-auto opacity-80"
                />
              </div>

              <Separator className="my-12" />

              {/* Design Tips Section */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663029768615/FMfaYnUVFzjloCRo.jpg" 
                    alt="Cozy Living Room" 
                    className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#003349] mb-4">Post-Holiday Reset: 3 Tips</h3>
                  <p className="text-gray-600 mb-6">
                    The tree is down, the glitter is swept away. Instead of seeing your space as "empty," view it as a fresh canvas.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <span className="font-serif text-[#C25B3C] text-xl font-bold">01</span>
                      <div>
                        <h4 className="font-bold text-[#003349]">Winter Un-Decorate</h4>
                        <p className="text-sm text-gray-600">Let your surfaces stay clear for a few days. Allow the architectural details to breathe before re-styling.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-serif text-[#C25B3C] text-xl font-bold">02</span>
                      <div>
                        <h4 className="font-bold text-[#003349]">Warmth Without Kitsch</h4>
                        <p className="text-sm text-gray-600">Swap festive plaids for rich velvet pillows, chunky knit throws, and warm ambient lighting.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="font-serif text-[#C25B3C] text-xl font-bold">03</span>
                      <div>
                        <h4 className="font-bold text-[#003349]">Layer Your Rugs</h4>
                        <p className="text-sm text-gray-600">Add texture and warmth from the ground up. A plush rug over a flat weave adds instant coziness.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Resolutions & Giveaway */}
              <div className="bg-[#F5F5F5] rounded-xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="font-serif text-2xl text-[#003349] mb-6">2026 Design Resolutions</h3>
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="font-bold text-[#003349] mb-2">Design for how you live.</h4>
                        <p className="text-gray-600 text-sm">Stop saving the "good room" for guests. Reclaim every square foot for your daily enjoyment.</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="font-bold text-[#003349] mb-2">Find your signature style.</h4>
                        <p className="text-gray-600 text-sm">Commit to finding <em>your</em> look, not just what's trending. Create a home that reflects you.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center flex flex-col justify-center items-center bg-white p-8 rounded-xl shadow-md border-2 border-[#C25B3C]/20">
                    <h3 className="font-serif text-2xl text-[#C25B3C] mb-2">Comfort Club Giveaway</h3>
                    <p className="text-gray-600 mb-6">Win a premium La-Z-Boy pillow to start your year in comfort!</p>
                    <img 
                      src="/images/gallery-1.jpg" 
                      alt="Pillow Prize" 
                      className="w-48 h-48 object-cover rounded-full mb-6 border-4 border-[#E6E2D5]"
                    />
                    <Button 
                      className="bg-[#003349] hover:bg-[#003349]/90 text-white px-8 py-6 text-lg"
                      onClick={() => window.location.href = '/comfort-club'}
                    >
                      Enter to Win
                    </Button>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
