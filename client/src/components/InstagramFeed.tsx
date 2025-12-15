import React from 'react';

export function InstagramFeed() {
  return (
    <div className="w-full">
      {/* @ts-ignore - Custom element from Behold widget */}
      <behold-widget feed-id="n7Wzw8yzK4PUvwMsXbO5"></behold-widget>
    </div>
  );
}
