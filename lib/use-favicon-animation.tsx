import { useEffect } from 'react';

const faviconOpen = '/favicon.ico';
const faviconClosed = '/favicon-closed.ico';

export default function useFaviconAnimation() {
  useEffect(() => {
    let favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }

    let isOpen = true;

    const toggleFavicon = () => {
      favicon.href = isOpen ? faviconClosed : faviconOpen;
      
      if (isOpen) {
        setTimeout(() => {
          favicon.href = faviconOpen;
        }, 200);
      }


      isOpen = !isOpen;
    };

   
    const intervalId = setInterval(toggleFavicon, 2000);

   
    return () => clearInterval(intervalId);
  }, []);

}