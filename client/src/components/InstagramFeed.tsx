import React from 'react';

export function InstagramFeed() {
  // ---------------------------------------------------------------------------
  // INSTRUCTIONS FOR AUTOMATIC FEED (WIDGET INTEGRATION):
  // ---------------------------------------------------------------------------
  // 1. Sign up for a service like Elfsight (https://elfsight.com/instagram-feed-instalink/)
  //    or SnapWidget (https://snapwidget.com/).
  // 2. Connect your @lazboycolumbus account and customize your feed view.
  // 3. Copy the "Embed Code" they provide.
  // 4. REPLACE the entire return statement below with the widget code.
  //
  // EXAMPLE (Elfsight):
  // return (
  //   <div className="elfsight-app-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" data-elfsight-app-lazy></div>
  // );
  //
  // NOTE: You may also need to add the script tag to index.html or use a useEffect hook.
  // ---------------------------------------------------------------------------

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        "/images/insta-1.jpg",
        "/images/insta-2.jpg",
        "/images/insta-3.jpg",
        "/images/insta-4.jpg"
      ].map((src, index) => (
        <a 
          key={index}
          href="https://www.instagram.com/lazboycolumbus/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-square overflow-hidden rounded-lg block"
        >
          <img 
            src={src} 
            alt="Instagram post" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
            <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h.165zm-1.996 1.426c-2.503 0-2.836.01-3.825.055-.922.042-1.423.196-1.757.326-.443.172-.76.377-1.093.71-.333.333-.538.65-.71 1.093-.13.334-.284.835-.327 1.757-.044.99-.055 1.324-.055 3.825 0 2.503.011 2.836.055 3.825.043.922.197 1.423.327 1.757.172.443.377.76.71 1.093.71.333.333.65.538 1.093.71.334.13.835.284 1.757.327.99.044 1.324.055 3.825.055 2.503 0 2.836-.011 3.825-.055.922-.043 1.423-.197 1.757-.327.443-.172.76-.377 1.093-.71.333-.333.65.538-1.093-.71-.334-.13-.835-.284-1.757-.327-.989-.044-1.323-.055-3.824-.055zm3.825 3.825a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.426a3.709 3.709 0 100 7.418 3.709 3.709 0 000-7.418z" clipRule="evenodd" />
            </svg>
          </div>
        </a>
      ))}
    </div>
  );
}
