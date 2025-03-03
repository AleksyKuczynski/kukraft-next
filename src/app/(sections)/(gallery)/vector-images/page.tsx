// src/app/(sections)/vector-images/page.tsx
import { GalleryPage } from '@/components/GalleryPage/GalleryPage'
import { SectionData } from '@/types/section'
import styles from './styles.module.scss'

const vectorImagesData: SectionData = {
  title: "Vector Graphic Images",
  description: "Original vector illustrations",
  images: [
    {
      src: "01.svg",
      alt: "Birds",
      style: "standard",
      behavior: "modal",
      gallery: ["01.1.svg"]
    },
    {
      src: "02.svg",
      alt: "Funny Cats and their Friends",
      style: "standard",
      behavior: "modal",
      gallery: ["02.1.svg"]
    },
    {
      src: "03.svg",
      alt: "Heraldry",
      style: "standard",
      behavior: "modal",
      gallery: ["03.1.svg"]
    },
    {
      src: "04.svg",
      alt: "Kaliningrad city navigation",
      style: "standard",
      behavior: "carousel",
      gallery: ["04.1.webp", "04.2.webp"]
    },
    {
      src: "05.svg",
      alt: "Heraldry book illustrations",
      style: "standard",
      behavior: "carousel",
      gallery: [
        "05.1.svg",
        "05.2.svg",
        "05.3.svg",
        "05.4.svg",
        "05.5.svg"
      ]
    },
    {
      src: "06.svg",
      alt: "Snowflakes",
      style: "standard",
      behavior: "carousel",
      gallery: ["06.1.svg", "06.2.svg"]
    },
    {
      src: "07.svg",
      alt: "Funny Foxes",
      style: "standard",
      behavior: "modal",
      gallery: ["07.1.svg"]
    },
    {
      src: "08.svg",
      alt: "Calligraphic lettering",
      style: "standard",
      behavior: "modal",
      gallery: ["08.1.svg"]
    },
    {
      src: "09.svg",
      alt: "Butterflies",
      style: "standard",
      behavior: "carousel",
      gallery: ["09.1.webp", "09.2.webp"]
    },
    {
      src: "10.svg",
      alt: "Butterfly greeting card",
      style: "standard",
      behavior: "carousel",
      gallery: ["10.1.svg", "10.2.svg"]
    },
    {
      src: "11.svg",
      alt: "The Mice",
      style: "standard",
      behavior: "modal",
      gallery: ["11.1.svg"]
    },
    {
      src: "12.svg",
      alt: "World architecture",
      style: "standard",
      behavior: "carousel",
      gallery: [
        "12.1.svg",
        "12.2.svg",
        "12.3.svg"
      ]
    },
    {
      src: "13.svg",
      alt: "Creepy Flowers",
      style: "standard",
      behavior: "modal",
      gallery: ["13.1.svg"]
    },
    {
      src: "14.svg",
      alt: "Heraldic Rosewind",
      style: "standard",
      behavior: "modal",
      gallery: ["14.1.svg"]
    },
    {
      src: "15.svg",
      alt: "Slepowron Coat of Arms",
      style: "standard",
      behavior: "modal",
      gallery: ["15.1.svg"]
    },
    {
      src: "16.webp",
      alt: "Woman's Day constructivist greeting card",
      style: "standard",
      behavior: "carousel",
      gallery: ["16.1.webp", "16.1.webp"]
    },
    {
      src: "17.svg",
      alt: "Rail Cars",
      style: "standard",
      behavior: "modal",
      gallery: ["17.1.svg"]
    },
    {
      src: "18.webp",
      alt: "Happy New Year",
      style: "standard",
      behavior: "modal",
      gallery: ["18.1.webp"]
    },
    {
      src: "19.svg",
      alt: "Forest Foxes",
      style: "standard",
      behavior: "modal",
      gallery: ["19.1.svg"]
    }
  ]
};

export default function VectorImagesPage() {
  return (
    <GalleryPage
      data={vectorImagesData}
      sectionName="vector-images"
      className={styles.vectorImagesGallery}
    />
  )
}