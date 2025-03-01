// src/app/(sections)/icon-sets/page.tsx
import { SectionData } from '@/types/section'
import { MasonryGrid } from '@/components/MasonryGrid/MasonryGrid'
import { ImageTile } from '@/components/ImageTile/ImageTile'

const iconSetsData: SectionData = {
  title: "Original Icon Sets",
  description: "Icon design and illustration",
  images: [
    {
      src: "01.svg",
      alt: "Biology icon set",
      style: "standard",
      behavior: "static"
    },
    {
      src: "02.svg",
      alt: "Office intranet icon set",
      style: "standard",
      behavior: "static"
    },
    {
      src: "03.webp",
      alt: "Fantastic flowers icon set",
      style: "standard",
      behavior: "static"
    },
    {
      src: "04.svg",
      alt: "Restaurant food icon set",
      style: "standard",
      behavior: "static"
    },
    {
      src: "05.webp",
      alt: "Chemistry lab icon set",
      style: "standard",
      behavior: "static"
    },
    {
      src: "06.webp",
      alt: "Alternate chemistry lab icon set",
      style: "standard",
      behavior: "static"
    },
    {
      src: "07.webp",
      alt: "Biology insects icon set",
      style: "standard",
      behavior: "static"
    },
    {
      src: "08.webp",
      alt: "Fantasy game pets icons",
      style: "standard",
      behavior: "static"
    },
    {
      src: "09.svg",
      alt: "Human interaction icon set",
      style: "standard",
      behavior: "static"
    },
    {
      src: "10.svg",
      alt: "Photo actions icons",
      style: "standard",
      behavior: "static"
    },
    {
      src: "11.svg",
      alt: "Sea railroad logistics icon set",
      style: "standard",
      behavior: "static"
    }
  ]
};

export default function IconSetsPage() {
  return (
    <MasonryGrid variant="grid-four">
      {iconSetsData.images.map((image, index) => (
        <ImageTile
          key={index}
          src={image.src}
          alt={image.alt}
          style={image.style}
          behavior={image.behavior}
          sectionName="icon-sets"
        />
      ))}
    </MasonryGrid>
  )
}