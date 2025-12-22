import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
  label?: "Before" | "After";
}

interface TransformationGalleryProps {
  images: GalleryImage[];
  title?: string;
  description?: string;
}

export function TransformationGallery({ 
  images, 
  title = "More Transformations", 
  description = "Explore more angles and details from our recent design projects."
}: TransformationGalleryProps) {
  return (
    <section className="py-12 bg-secondary/10 rounded-xl">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-10">
          <h3 className="font-serif text-3xl text-primary mb-3">{title}</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="group relative overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="relative w-full">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-auto object-contain max-h-[500px] mx-auto"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    
                    {/* Label Badge */}
                    {image.label && (
                      <div className={cn(
                        "absolute top-4 left-4 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg backdrop-blur-md",
                        image.label === "Before" 
                          ? "bg-slate-800/90 text-white border border-slate-600" 
                          : "bg-white/90 text-primary border border-primary/20"
                      )}>
                        {image.label}
                      </div>
                    )}

                    {/* Category Badge */}
                    {image.category && (
                      <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {image.category}
                      </div>
                    )}
                  </div>
                  <div className="p-3 bg-white border-t">
                    <p className="text-sm font-medium text-center text-muted-foreground">{image.alt}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-full p-0 overflow-hidden bg-transparent border-none shadow-none">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
