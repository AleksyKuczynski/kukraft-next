// src/app/(sections)/greeting-cards/page.tsx
import Image from 'next/image';
import styles from './styles.module.scss';
import { cardSections } from '@/data/greetingCardImages';

// Utility function to calculate proportional widths
const calculateProportionalWidths = (images: { filename: string, aspectRatio: number }[]): string[] => {
  // For equal heights, width ∝ 1/aspectRatio
  const inverseRatios = images.map(img => 1 / img.aspectRatio);
  const totalInverse = inverseRatios.reduce((sum, ratio) => sum + ratio, 0);
  
  // Calculate percentage widths
  return inverseRatios.map(ratio => `${(ratio / totalInverse) * 100}%`);
};

interface CardSectionProps {
  images: { filename: string, aspectRatio: number }[];
  icons: string[];
  priority?: boolean;
}

const CardSection = ({ images, icons, priority = false }: CardSectionProps) => {
  // Determine how many images go in the first row
  const firstRowCount = images.length >= 5 ? 3 : Math.min(2, images.length);
  const firstRowImages = images.slice(0, firstRowCount);
  const secondRowImages = images.slice(firstRowCount);
  
  // Calculate proportional widths for each row
  const firstRowWidths = calculateProportionalWidths(firstRowImages);
  const secondRowWidths = calculateProportionalWidths(secondRowImages);
  
  return (
    <div className={styles.wholeCard}>
      <div className={styles.cardBox}>
        {/* First row */}
        <div className={styles.cardContainer}>
          {firstRowImages.map((image, index) => (
            <div 
              key={`img-${index}`} 
              className={styles.cardImage}
              style={{ flex: `0 0 ${firstRowWidths[index]}` }}
            >
              <Image 
                src={`/img/sections/greeting-cards/${image.filename}`}
                alt={`Greeting Card ${image.filename}`}
                width={400}
                height={Math.round(400 * image.aspectRatio)}
                priority={priority && index === 0}
                loading={priority ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
        
        {/* Second row - conditionally shows remaining images */}
        {secondRowImages.length > 0 && (
          <div className={styles.cardContainer}>
            {secondRowImages.map((image, index) => (
              <div 
                key={`img-${index+firstRowCount}`} 
                className={styles.cardImage}
                style={{ flex: `0 0 ${secondRowWidths[index]}` }}
              >
                <Image 
                  src={`/img/sections/greeting-cards/${image.filename}`}
                  alt={`Greeting Card ${image.filename}`}
                  width={400}
                  height={Math.round(400 * image.aspectRatio)}
                  loading={priority ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        )}
        
        <div className={styles.dividerBox}>
          {icons.map((icon, index) => (
            <div key={`icon-${index}`}>
              <Image 
                src={`/img/sections/greeting-cards/${icon}`}
                alt={`Icon ${icon}`}
                width={40}
                height={40}
                loading={priority ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function GreetingCardsPage() {
  // Split sections between columns
  const leftSections = cardSections.slice(0, Math.ceil(cardSections.length/2));
  const rightSections = cardSections.slice(Math.ceil(cardSections.length/2));

  return (
    <section>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-6">
            {leftSections.map((section, index) => (
              <CardSection
                key={`section-left-${index}`}
                images={section.images}
                icons={section.icons}
                priority={index === 0} // Only the first section gets priority
              />
            ))}
          </div>
          <div className="col-12 col-xl-6">
            {rightSections.map((section, index) => (
              <CardSection
                key={`section-right-${index}`}
                images={section.images}
                icons={section.icons}
                priority={index === 0 && leftSections.length > 0} // First right section gets priority if there are left sections
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}