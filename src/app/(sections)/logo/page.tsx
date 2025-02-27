// src/app/(sections)/logo/page.tsx
import { SectionData } from '@/types/section'
import { MasonryGrid } from '@/components/MasonryGrid/MasonryGrid'
import { ImageTile } from '@/components/ImageTile/ImageTile'

const logoData: SectionData = {
  title: "Our logo designs",
  description: "Logo and brand identity design",
  images: [
    {
      src: "01.svg",
      alt: "IT Serwiss logo",
      style: "wide",
      behavior: "static"
    },
    {
      src: "02.svg",
      alt: "ant furniture logo",
      style: "wide",
      behavior: "static"
    },
    {
      src: "03.svg",
      alt: "KVRZ logo",
      style: "wide",
      behavior: "static"
    },
    {
      src: "04.svg",
      alt: "Moscow Amsterdam logo",
      style: "wide",
      behavior: "static"
    },
    {
      src: "05.svg",
      alt: "Sportlook logo",
      style: "wide",
      behavior: "static"
    },
    {
      src: "06.svg",
      alt: "New Resources logo",
      style: "wide",
      behavior: "static"
    },
    {
      src: "07.svg",
      alt: "ARGO logo",
      style: "wide",
      behavior: "static"
    },
    {
      src: "08.svg",
      alt: "ARGO alternate logo",
      style: "wide",
      behavior: "static"
    },
    {
      src: "09.svg",
      alt: "CS logo",
      style: "wide",
      behavior: "static"
    },
    {
      src: "10.svg",
      alt: "IT service logo",
      style: "wide",
      behavior: "static"
    },
    {
      src: "11.svg",
      alt: "CS alternate logo",
      style: "wide",
      behavior: "static"
    }
  ]
};

export default function LogoPage() {
  return (
    <MasonryGrid variant="grid-four">
      {logoData.images.map((image, index) => (
        <ImageTile
          key={index}
          src={image.src}
          alt={image.alt}
          style={image.style}
          behavior={image.behavior}
          sectionName="logo"
        />
      ))}
    </MasonryGrid>
  )
}