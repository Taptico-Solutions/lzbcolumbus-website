import React from 'react';
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  initial: string;
}

const reviews: Review[] = [
  {
    author: "Eric Brew",
    rating: 5,
    text: "I walked into La-Z-Boy of Columbus today for the second time and was genuinely surprised when Jason recognized me right away. In a world where customer service seems to be fading fast, this was a refreshing reminder of what it should look like.",
    date: "1 month ago",
    initial: "E"
  },
  {
    author: "Warren Barsaleau",
    rating: 5,
    text: "My wife and I went shopping for 2 recliners... The salesperson that waited on us was Jason Hall - who was WONDERFUL! We sat in a couple of recliners before he approached us, and we conversed about our needs.",
    date: "3 weeks ago",
    initial: "W"
  },
  {
    author: "Amanda Allred",
    rating: 5,
    text: "I just wanted to take a moment to sincerely thank the owner, Bryan Evans for stepping in and doing the right thing after my recent experience as a customer. Your professionalism, integrity, and genuine care for your customers truly stood out.",
    date: "1 month ago",
    initial: "A"
  },
  {
    author: "Shannon Pritchett",
    rating: 5,
    text: "Kenneth was very helpful. It explained everything about the sectionals we wanted, he went over all the warranty information. Casey came out and was very professional and helpful too.",
    date: "3 weeks ago",
    initial: "S"
  },
  {
    author: "Blue Heeler",
    rating: 5,
    text: "Walked in and was greeted by Jason. He was awesome!!! Answered every question we had and wasn’t pushy like most sales people are. Allowed us time and space to browse and discuss before purchasing.",
    date: "1 month ago",
    initial: "B"
  },
  {
    author: "Jerry Adams",
    rating: 5,
    text: "Jason let us look around the store and was available for questions. He gave us plenty of space to shop on our own. When we decided on a purchase, we came back the next day and bought the items.",
    date: "3 months ago",
    initial: "J"
  },
  {
    author: "Ben Cochran",
    rating: 5,
    text: "Kenneth was knowledgeable and answered every question we had. From fabric selections to things we may need to look out for when purchasing furniture. He knew it all. Kind and respectful of our time.",
    date: "1 month ago",
    initial: "B"
  },
  {
    author: "Ed Parker",
    rating: 5,
    text: "Have bought furniture from LA-Z-BOY for many years. The quality has always been there. I’d also like to compliment Aulashua on his easy going and logical approach to my needs.",
    date: "3 weeks ago",
    initial: "E"
  },
  {
    author: "Cynthia Reynolds",
    rating: 5,
    text: "Jason spent plenty of time with us. He did not hover… was very knowledgeable, patient and kind. His ability to truly understand our design preference was amazing.",
    date: "1 month ago",
    initial: "C"
  },
  {
    author: "Roberto Thillet",
    rating: 5,
    text: "Mr. Kenneth Llera was very courteous, caring and professional. He made sure that I tried everything available in the store until I found the perfect recliner that fit my needs.",
    date: "2 months ago",
    initial: "R"
  }
];

export function GoogleReviewFeed() {
  return (
    <div className="w-full overflow-hidden py-10">
      <div className="relative w-full">
        {/* Gradient Masks for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

        {/* Scrolling Container */}
        <div className="flex animate-scroll hover:pause-scroll w-max gap-6 px-4">
          {/* Duplicate the array to create seamless loop */}
          {[...reviews, ...reviews].map((review, index) => (
            <Card key={index} className="w-[350px] md:w-[400px] flex-shrink-0 bg-white rounded-xl border-none shadow-lg">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg">
                      {review.initial}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{review.author}</p>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-6 h-6" />
                </div>
                
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                  "{review.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
