// src/app/(sections)/(gallery)/patterns/page.tsx
import { GalleryPage } from '@/components/GalleryPage/GalleryPage'
import { SectionData } from '@/types/section'
import styles from './styles.module.scss'

const patternsData: SectionData = {
  title: "Our patterns",
  description: "Original patterns and ornamental designs",
  images: [
    {
      src: "01.svg",
      alt: "Fantasy plant pattern",
      style: "standard",
      behavior: "modal"
    },
    {
      src: "02.svg",
      alt: "Victorian plant pattern",
      style: "standard",
      behavior: "modal"
    },
    {
      src: "03.svg",
      alt: "Kashubian plant pattern",
      style: "standard",
      behavior: "modal"
    },
    {
      src: "04.svg",
      alt: "Gothic-style pattern",
      style: "standard",
      behavior: "modal"
    },
    {
      src: "05.svg",
      alt: "Persian plant pattern",
      style: "standard",
      behavior: "modal"
    },
    {
      src: "06.svg",
      alt: "Chinese fantasy pattern",
      style: "standard",
      behavior: "modal"
    },
    {
      src: "07.svg",
      alt: "Iconic Cats pattern",
      style: "standard",
      behavior: "modal"
    },
    {
      src: "08.svg",
      alt: "New Year pattern with Foxes",
      style: "standard",
      behavior: "modal"
    },
    {
      src: "09.svg",
      alt: "New Year pattern with Owls",
      style: "standard",
      behavior: "modal"
    },
    {
      src: "10.svg",
      alt: "Esther pattern with Rabbits",
      style: "standard",
      behavior: "modal"
    },
    {
      src: "11.svg",
      alt: "Stone Age style pattern",
      style: "standard",
      behavior: "modal"
    },
    {
      src: "12.svg",
      alt: "New Year pattern with Owls",
      style: "standard",
      behavior: "modal"
    }
  ]
};

export default function PatternsPage() {
  return (
    <GalleryPage
      data={patternsData}
      sectionName="patterns"
      className={styles.patternsGallery}
    />
  )
}