// src/app/(sections)/(gallery)/books/page.tsx
import { GalleryPage } from '@/components/GalleryPage/GalleryPage'
import { SectionData } from '@/types/section'
import styles from './styles.module.scss'

const booksData: SectionData = {
  title: "Our Favourite Books",
  description: "Book illustration and page layout",
  images: [
    {
      src: "02.jpg",
      alt: "Marie-Lise",
      style: "standard",
      behavior: "carousel",
      gallery: [
        "02.1.jpg",
        "02.2.jpg", 
        "02.3.jpg",
        "02.4.jpg",
        "02.5.jpg",
        "02.6.jpg",
        "02.7.jpg"
      ]
    },
    {
      src: "03.jpg",
      alt: "Heraldic beasts and where to find them",
      style: "standard",
      behavior: "carousel",
      gallery: [
        "03.1.jpg",
        "03.2.jpg",
        "03.3.jpg",
        "03.4.jpg",
        "03.5.jpg"
      ]
    },
    {
      src: "04.jpg",
      alt: "Japanese love lyrics",
      style: "standard", 
      behavior: "carousel",
      gallery: [
        "04.1.jpg",
        "04.2.jpg",
        "04.3.jpg",
        "04.4.jpg",
        "04.5.jpg",
        "04.6.jpg",
        "04.7.jpg"
      ]
    },
    {
      src: "05.jpg",
      alt: "8 Lovers",
      style: "standard",
      behavior: "carousel", 
      gallery: [
        "05.1.jpg",
        "05.2.jpg",
        "05.3.jpg",
        "05.4.jpg",
        "05.5.jpg",
        "05.6.jpg"
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