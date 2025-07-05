// src/app/(sections)/(gallery)/websites/page.tsx
import { GalleryPage } from '@/components/GalleryPage/GalleryPage'
import { SectionData } from '@/types/section'
import styles from './styles.module.scss'

const websitesData: SectionData = {
  title: "Our website design",
  description: "Web development and design portfolio",
  images: [
    {
      src: "01.1.webp",
      alt: "Novotrans Holding site since 2014",
      style: "standard",
      behavior: "carousel",
      gallery: [
        "01.1.webp",
        "01.2.webp",
        "01.3.webp",
        "01.4.webp"
      ]
    },
    {
      src: "02.1.webp",
      alt: "Novotrans group site since 2016",
      style: "standard",
      behavior: "carousel",
      gallery: [
        "02.1.webp",
        "02.2.webp",
        "02.3.webp",
        "02.4.webp"
      ]
    },
    {
      src: "03.1.webp",
      alt: "School biology site (project)",
      style: "standard",
      behavior: "carousel",
      gallery: [
        "03.1.webp",
        "03.2.webp",
        "03.3.webp"
      ]
    },
    {
      src: "04.1.webp",
      alt: "Novotrans group site (project 2018)",
      style: "standard",
      behavior: "carousel",
      gallery: [
        "04.1.webp",
        "04.2.webp",
        "04.3.webp"
      ]
    }
  ]
};

export default function WebsitesPage() {
  return (
    <GalleryPage
      data={websitesData}
      sectionName="websites"
      gridVariant="grid-two"
      className={styles.websitesGallery}
    />
  )
}