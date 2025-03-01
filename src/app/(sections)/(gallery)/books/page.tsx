// src/app/(sections)/(gallery)/books/page.tsx
import { GalleryPage } from '@/components/GalleryPage/GalleryPage'
import { SectionData } from '@/types/section'
import styles from './styles.module.scss'

const booksData: SectionData = {
  title: "Our Favourite Books",
  description: "Book illustration and page layout",
  images: [
    {
      src: "02.webp",
      alt: "Marie-Lise",
      style: "standard",
      behavior: "carousel",
      gallery: [
        "02.1.webp",
        "02.2.webp", 
        "02.3.webp",
        "02.4.webp",
        "02.5.webp",
        "02.6.webp",
        "02.7.webp"
      ]
    },
    {
      src: "03.webp",
      alt: "Heraldic beasts and where to find them",
      style: "standard",
      behavior: "carousel",
      gallery: [
        "03.1.webp",
        "03.2.webp",
        "03.3.webp",
        "03.4.webp",
        "03.5.webp"
      ]
    },
    {
      src: "04.webp",
      alt: "Japanese love lyrics",
      style: "standard", 
      behavior: "carousel",
      gallery: [
        "04.1.webp",
        "04.2.webp",
        "04.3.webp",
        "04.4.webp",
        "04.5.webp",
        "04.6.webp",
        "04.7.webp"
      ]
    },
    {
      src: "05.webp",
      alt: "8 Lovers",
      style: "standard",
      behavior: "carousel", 
      gallery: [
        "05.1.webp",
        "05.2.webp",
        "05.3.webp",
        "05.4.webp",
        "05.5.webp",
        "05.6.webp"
      ]
    }
  ]
};

export default function BooksPage() {
  return (
    <GalleryPage
      data={booksData}
      sectionName="books"
      gridVariant="grid-two"
      className={styles.booksGallery}
    />
  )
}