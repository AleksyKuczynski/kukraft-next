// src/app/(sections)/(gallery)/websites/page.tsx
import { GalleryPage } from '@/components/GalleryPage/GalleryPage'
import { SectionData } from '@/types/section'
import styles from './styles.module.scss'

const websitesData: SectionData = {
  title: "Our website design",
  description: "Web development and design portfolio",
  images: [
    {
      src: "01.1.jpg",
      alt: "Novotrans Holding site since 2014",
      style: "standard",
      behavior: "carousel",
      gallery: [
        "01.1.jpg",
        "01.2.jpg",
        "01.3.jpg",
        "01.4.jpg"
      ]
    },
    {
      src: "02.1.jpg",
      alt: "Novotrans group site since 2016",
      style: "standard",
      behavior: "carousel",
      gallery: [
        "02.1.jpg",
        "02.2.jpg",
        "02.3.jpg",
        "02.4.jpg"
      ]
    },
    {
      src: "03.1.jpg",
      alt: "School biology site (project)",
      style: "standard",
      behavior: "carousel",
      gallery: [
        "03.1.jpg",
        "03.2.jpg",
        "03.3.jpg"
      ]
    },
    {
      src: "04.1.jpg",
      alt: "Novotrans group site (project 2018)",
      style: "standard",
      behavior: "carousel",
      gallery: [
        "04.1.jpg",
        "04.2.jpg",
        "04.3.jpg"
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