// src/app/(sections)/(gallery)/slide/page.tsx
import { GalleryPage } from '@/components/GalleryPage/GalleryPage'
import { SectionData } from '@/types/section'
import styles from './styles.module.scss'

const slideData: SectionData = {
  title: "Our presentations design",
  description: "Slide decks and presentation portfolio",
  images: [
    {
      src: "02.webp",
      alt: "Algae presentation (project 2022)",
      style: "standard",
      behavior: "carousel",
      gallery: [
        "02.1.webp",
        "02.2.webp",
        "02.3.webp",
        "02.4.webp",
        "02.5.webp",
        "02.6.webp",
        "02.7.webp",
        "02.8.webp",
        "02.9.webp"
      ]
    },
    {
      src: "03.webp",
      alt: "Vitasoy soy food producent presentation (project 2022)",
      style: "standard",
      behavior: "carousel",
      gallery: [
        "03.1.webp",
        "03.2.webp",
        "03.3.webp",
        "03.4.webp",
        "03.5.webp",
        "03.6.webp",
        "03.7.webp"
      ]
    }
  ]
};

export default function SlidePage() {
  return (
    <GalleryPage
      data={slideData}
      sectionName="slide"
      gridVariant="grid-two"
      className={styles.slideGallery}
    />
  )
}