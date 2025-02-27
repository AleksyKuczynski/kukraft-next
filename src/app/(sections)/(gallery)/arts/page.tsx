// src/app/(sections)/(gallery)/arts/page.tsx
import { GalleryPage } from '@/components/GalleryPage/GalleryPage'
import { SectionData } from '@/types/section'
import styles from './styles.module.scss'

const artsData: SectionData = {
  title: "Nat Kuczynska's artistic bio",
  description: "Ink drawing, dot-work and pencil art",
  images: [
    {
      src: "01.jpg",
      alt: "The Morning - woman sitting, graphics, fantasy long hair, artistic hairstyle, dot-work, technical pen, ink picture by Natalia Kuczynska",
      style: "compact",
      behavior: "modal"
    },
    {
      src: "02.jpg",
      alt: "The Evening - woman standing, graphics, fantasy long hair, artistic hairstyle, dot-work, technical pen, ink picture by Natalia Kuczynska",
      style: "compact",
      behavior: "modal"
    },
    {
      src: "03.jpg",
      alt: "The Flamingo - flamingo, graphics, mottled feathers, dot-work, technical pen, ink picture by Natalia Kuczynska",
      style: "compact",
      behavior: "modal"
    },
    {
      src: "04.jpg",
      alt: "Lady Mouse trotting - the owl, the mouse, the death, Paul Verlain, graphics, colored paper, dot-work, technical pen, ink picture by Natalia Kuczynska",
      style: "compact",
      behavior: "modal"
    },
    {
      src: "05.jpg",
      alt: "The Scorpio - the scorpio, the hand, the danger, graphics, colored paper, dot-work, technical pen, ink picture by Natalia Kuczynska",
      style: "compact",
      behavior: "modal"
    },
    {
      src: "06.jpg",
      alt: "The Rat crying - the rat, the tear, graphics, colored paper, dot-work, technical pen, ink picture by Natalia Kuczynska",
      style: "compact",
      behavior: "modal"
    },
    {
      src: "07.jpg",
      alt: "Irises - irises, graphics, colored paper, dot-work, colored pencils, technical pen, picture by Natalia Kuczynska",
      style: "compact",
      behavior: "modal"
    },
    {
      src: "08.jpg",
      alt: "The Carpfish - the carp, traditional Chinese style, graphics, colored paper, white ink, dot-work, technical pen, ink picture by Natalia Kuczynska",
      style: "compact",
      behavior: "modal"
    },
    {
      src: "09.jpg",
      alt: "The Baal - the toad, the girl, the cat, fantasy style, dream, graphics, colored paper, dot-work, technical pen, ink picture by Natalia Kuczynska",
      style: "compact",
      behavior: "modal"
    },
    {
      src: "10.jpg",
      alt: "The Hornet - the hornet, fantasy style, graphics, colored paper, dot-work, technical pen, ink picture by Natalia Kuczynska",
      style: "compact",
      behavior: "modal"
    },
    {
      src: "11.jpg",
      alt: "The Drunk Cat - the cat, the bottle, the wine, wednesday evening, fantasy style, graphics, colored paper, dot-work, technical pen, ink picture by Natalia Kuczynska",
      style: "compact",
      behavior: "modal"
    },
    {
      src: "12.jpg",
      alt: "Old Jeans and High Boots - the jeans, Levi's 501, Dr.Martens boots, old clothes, favourite clothes, outstretched knees, graphics, ink picture by Natalia Kuczynska",
      style: "compact",
      behavior: "modal"
    },
    {
      src: "13.jpg",
      alt: "The Crows - four crows, emotions, happy crow, fantasy style, graphics, dot-work, technical pen, ink picture by Natalia Kuczynska",
      style: "compact",
      behavior: "modal"
    },
    {
      src: "14.jpg",
      alt: "Gorgon Medusa - Medusa Gorgon, the writer, love, fantasy style, graphics, dot-work, technical pen, ink picture by Natalia Kuczynska",
      style: "compact",
      behavior: "modal"
    },
    {
      src: "15.jpg",
      alt: "The Rats - three rats, art-deco style, pattern, graphics, colored paper, ink picture by Natalia Kuczynska",
      style: "compact",
      behavior: "modal"
    }
  ]
};

export default function ArtsPage() {
  return (
    <GalleryPage
      data={artsData}
      sectionName="arts"
      className={styles.artsGallery}
    />
  )
}