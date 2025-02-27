// src/app/(sections)/(gallery)/slide/page.tsx
import { GalleryPage } from '@/components/GalleryPage/GalleryPage'
import { SectionData } from '@/types/section'
import styles from './styles.module.scss'

const slideData: SectionData = {
  title: "Our presentations design",
  description: "Slide decks and presentation portfolio",
  images: [
    {
      src: "02.png",
      alt: "Algae presentation (project 2022)",
      style: "standard",
      behavior: "carousel",
      gallery: [
        "02.1.jpg",
        "02.2.jpg",
        "02.3.jpg",
        "02.4.jpg",
        "02.5.jpg",
        "02.6.jpg",
        "02.7.jpg",
        "02.8.jpg",
        "02.9.jpg"
      ]
    },
    {
      src: "03.png",
      alt: "Vitasoy soy food producent presentation (project 2022)",
      style: "standard",
      behavior: "carousel",
      gallery: [
        "03.1.png",
        "03.2.png",
        "03.3.png",
        "03.4.png",
        "03.5.png",
        "03.6.png",
        "03.7.png"
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