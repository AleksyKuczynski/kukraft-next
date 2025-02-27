// src/components/DirectGallery/DirectGallery.tsx
import Image from 'next/image'
import styles from './DirectGallery.module.scss'
import { ImageContent } from '@/types/section'

interface DirectGalleryProps {
  images: ImageContent[];  
  sectionName: string;
}

export const DirectGallery = ({ images, sectionName }: DirectGalleryProps) => {
  return (
    <div className={styles.galleryContainer}>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image
              src={`/img/sections/${sectionName}/${image.src}`}
              alt={image.alt}
              width={800}
              height={800}
              className={styles.thumbnail}
            />
            {image.gallery?.slice(1).map((galleryImage, galleryIndex) => (
              <Image
                key={galleryIndex}
                src={`/img/sections/${sectionName}/${galleryImage}`}
                alt={`${image.alt} - ${galleryIndex + 2}`}
                width={800}
                height={800}
                className={styles.thumbnail}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}