// src/components/ImageTile/ImageTile.tsx
import { FC } from 'react'
import Image from 'next/image'
import { ImageStyle, ImageBehavior } from '@/types/section'
import { ImageModal } from '@/components/ImageModal/ImageModal'
import styles from './ImageTile.module.scss'

interface ImageTileProps {
  src: string;
  alt: string;
  style?: ImageStyle;
  behavior?: ImageBehavior;
  gallery?: string[];
  sectionName: string;
}

export const ImageTile: FC<ImageTileProps> = ({ 
  src, 
  alt, 
  style = 'standard',
  behavior = 'static',
  gallery,
  sectionName 
}) => {
  const id = `${sectionName}-${src.split('.')[0]}`
  const hasModal = behavior !== 'static'
  const isCarousel = behavior === 'carousel'

  return (
    <div className={styles.imageWrapper}>
      {hasModal ? (
        <button 
          className={styles.imageButton}
          data-bs-toggle="offcanvas" 
          data-bs-target={`#${id}`}
        >
          <Image
            src={`/img/sections/${sectionName}/${src}`}
            alt={alt}
            width={400}
            height={400}
            className={`${styles.thumbnail} ${styles[style]}`}
          />
        </button>
      ) : (
        <Image
          src={`/img/sections/${sectionName}/${src}`}
          alt={alt}
          width={400}
          height={400}
          className={`${styles.thumbnail} ${styles[style]}`}
        />
      )}

      {hasModal && (
        <ImageModal
          id={id}
          images={isCarousel && gallery ? gallery : [src]}
          alt={alt}
          sectionName={sectionName}
          variant={isCarousel ? 'carousel' : 'single'}
        />
      )}
    </div>
  )
}