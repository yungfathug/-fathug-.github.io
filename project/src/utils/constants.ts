import { LookbookItem } from '../types';

export const AUTHOR_NAME = "[Your Name]";
export const AUTHOR_TAGLINE = "Street Style Meets Editorial";

export const ABOUT_ME_TEXT = `
  Fashion has always been my canvas for self-expression. I blend street style elements 
  with editorial aesthetics to create looks that are both wearable and visually striking. 
  My style philosophy centers around intentional styling, sustainable choices, and the 
  belief that fashion should be accessible to everyone.
  
  Through this digital lookbook, I share my personal style journey and hope to inspire 
  others to experiment with their own unique fashion voice.
`;

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/yourusername",
  tiktok: "https://tiktok.com/@yourusername",
};

export const GALLERY_ITEMS: LookbookItem[] = [
  {
    id: 1,
    imageUrl: "https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg",
    title: "Summer Urban",
    description: "A light summer outfit with urban influences, perfect for warm city days. Combines comfort with style using breathable fabrics and layered accessories.",
    shopUrl: "#shop-summer-urban"
  },
  {
    id: 2,
    imageUrl: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
    title: "Casual Elegance",
    description: "Elevated casual wear that transitions seamlessly from day to evening. The structured blazer adds a touch of sophistication to an otherwise relaxed ensemble.",
    shopUrl: "#shop-casual-elegance"
  },
  {
    id: 3,
    imageUrl: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg",
    title: "Monochrome Minimalism",
    description: "A study in monochrome styling with clean lines and minimal accessories. This look demonstrates how simplicity can create maximum impact.",
    shopUrl: "#shop-monochrome"
  },
  {
    id: 4,
    imageUrl: "https://images.pexels.com/photos/2896840/pexels-photo-2896840.jpeg",
    title: "Street Luxe",
    description: "Mixing high and low elements for an eclectic street style with luxury touches. The contrast between casual and refined creates visual interest.",
    shopUrl: "#shop-street-luxe"
  },
  {
    id: 5,
    imageUrl: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg",
    title: "Modern Vintage",
    description: "Contemporary styling with vintage-inspired pieces creates a timeless look with modern sensibility. The mix of eras results in a unique personal style statement.",
    shopUrl: "#shop-modern-vintage"
  },
  {
    id: 6,
    imageUrl: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg",
    title: "Textural Play",
    description: "An exploration of texture mixing with varied fabrics creating depth and visual interest. The juxtaposition of different textures elevates a simple color palette.",
    shopUrl: "#shop-textural-play"
  }
];