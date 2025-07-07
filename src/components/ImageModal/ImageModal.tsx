// src/components/ImageModal/ImageModal.tsx
'use client'

import { FC } from 'react'
import Image from 'next/image'
import styles from './ImageModal.module.scss'

interface ImageModalProps {
  id: string;
  images: string[];
  alt: string;
  sectionName: string;
  variant: 'single' | 'carousel';
  sizeVariant?: 'compact' | 'large';
}

export const ImageModal: FC<ImageModalProps> = ({
  id,
  images,
  alt,
  sectionName,
  variant,
  sizeVariant = 'compact'
}) => {
  const isSingle = variant === 'single';
  const carouselId = `carousel-${id}`;
  const offcanvasClass = sizeVariant === 'compact' ? styles.offcanvasCompact : styles.offcanvasLarge;

  return (
    <div 
      className={`offcanvas offcanvas-end ${styles.offcanvas} ${offcanvasClass}`}
      tabIndex={-1} 
      id={id}
      aria-labelledby={`${id}-label`}
    >
      {isSingle ? (
        <>
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id={`${id}-label`}></h5>  
            <button 
              type="button" 
              className={`btn-close-white text-reset ${styles.btnClose}`} 
              data-bs-dismiss="offcanvas" 
              aria-label="Close"
            >
              <Image 
                src="/img/interface/close.svg" 
                alt="Close" 
                width={24} 
                height={24}
              />
            </button>
          </div>
          <div className="offcanvas-body">
            <div 
              className={styles.imgOffcanvas}
              style={{ backgroundImage: `url(/img/sections/${sectionName}/${images[0]})` }}
            ></div>
          </div>
        </>
      ) : (
        <div id={carouselId} className={`carousel slide carousel-fade ${styles.carousel}`}>
          <div className="offcanvas-header">
            <button
              type="button"
              className={styles.carouselControlPrev}
              data-bs-target={`#${carouselId}`}
              data-bs-slide="prev"
            >
              <Image 
                src="/img/interface/left.svg" 
                alt="Previous" 
                width={24} 
                height={24}
              />
            </button>
            <button 
              type="button" 
              className={`btn-close-white text-reset ${styles.btnClose}`}
              data-bs-dismiss="offcanvas" 
              aria-label="Close"
            >
              <Image 
                src="/img/interface/close.svg" 
                alt="Close" 
                width={24} 
                height={24}
              />
            </button>
            <button
              type="button"
              className={styles.carouselControlNext}
              data-bs-target={`#${carouselId}`}
              data-bs-slide="next"
            >
              <Image 
                src="/img/interface/right.svg" 
                alt="Next" 
                width={24} 
                height={24}
              />
            </button>
          </div>

          <div className={`carousel-indicators ${styles.carouselIndicators}`}>
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target={`#${carouselId}`}
                data-bs-slide-to={index}
                aria-label={`Slide ${index + 1}`}
                className={index === 0 ? 'active' : ''}
              ></button>
            ))}
          </div>

          <div className="offcanvas-body">
            <div className="carousel-inner">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className={`carousel-item ${index === 0 ? 'active' : ''}`}
                >
                  <Image 
                    src={`/img/sections/${sectionName}/${image}`}
                    className={styles.imgCarousel}
                    alt={`${alt}${index > 0 ? ` - ${index + 1}` : ''}`}
                    width={800}
                    height={600}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};