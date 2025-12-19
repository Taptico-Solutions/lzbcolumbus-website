import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className={cn(
                  "group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-all duration-300",
                  index === 0 ? "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto" : ""
                )}>
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  {image.category && (
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {image.category}
                    </div>
                  )}
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
