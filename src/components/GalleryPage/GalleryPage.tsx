// src/components/GalleryPage/GalleryPage.tsx
import { FC } from 'react'
import { DirectGallery } from '@/components/DirectGallery/DirectGallery'
import { MasonryGrid } from '@/components/MasonryGrid/MasonryGrid'
import { ImageTile } from '@/components/ImageTile/ImageTile'
import { SectionData, MasonryVariant } from '@/types/section'
import styles from './GalleryPage.module.scss'

interface GalleryPageProps {
  data: SectionData;
  sectionName: string;
  gridVariant?: MasonryVariant;
  className?: string;
}

export const GalleryPage: FC<GalleryPageProps> = ({ 
  data, 
  sectionName,
  gridVariant = 'grid-four',
  className 
}) => {
  return (
    <div className={`${styles.galleryContainer} ${className || ''}`}>
      {/* Mobile view - direct gallery display */}
      <div className="direct-gallery">
        <DirectGallery 
          images={data.images}
          sectionName={sectionName}
        />
      </div>

      {/* Desktop view - masonry grid with modals */}
      <div className="masonry-grid">
        <MasonryGrid variant={gridVariant}>
          {data.images.map((image, index) => (
            <ImageTile
              key={index}
              src={image.src}
              alt={image.alt}
              style={image.style}
              behavior={image.behavior}
              gallery={image.gallery}
              sectionName={sectionName}
            />
          ))}
        </MasonryGrid>
      </div>
    </div>
  )
}