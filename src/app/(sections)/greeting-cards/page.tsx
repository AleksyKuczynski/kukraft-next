// src/app/(sections)/greeting-cards/page.tsx
import Image from 'next/image'
import styles from './styles.module.scss'

interface CardSectionProps {
  images: string[];
  icons: string[];
}

const CardSection = ({ images, icons, priority = false }: CardSectionProps & { priority?: boolean }) => {
  // Determine how many images go in the first row
  const firstRowCount = images.length >= 5 ? 3 : Math.min(2, images.length);
  
  return (
    <div className={styles.wholeCard}>
      <div className={styles.cardBox}>
        {/* First row */}
        <div className={firstRowCount === 3 ? styles.cardContainerThree : styles.cardContainer}>
          {images.slice(0, firstRowCount).map((image, index) => (
            <div key={`img-${index}`} className={styles.cardImage}>
              <Image 
                src={`/img/sections/greeting-cards/${image}`}
                alt={`Greeting Card ${image}`}
                width={400}
                height={300}
                priority={priority && index === 0}
                loading={priority ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
        
        {/* Second row - conditionally shows remaining images */}
        {images.length > firstRowCount && (
          <div className={
            // If there's only one image in second row, use single container style
            images.length === firstRowCount + 1 ? styles.cardContainerSingle : styles.cardContainer
          }>
            {images.slice(firstRowCount).map((image, index) => (
              <div key={`img-${index+firstRowCount}`} className={styles.cardImage}>
                <Image 
                  src={`/img/sections/greeting-cards/${image}`}
                  alt={`Greeting Card ${image}`}
                  width={400}
                  height={300}
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


const cardSections = [
  // New Year with Snowbird
  {
    images: ['01.1.webp', '01.2.webp', '01.3.webp', '01.4.webp'],
    icons: ['NY.4.svg', 'NY.1.svg', 'NY.2.svg']
  },
  // Happy Cat
  {
    images: ['02.1.webp', '02.2.webp', '02.3.webp', '02.4.webp'],
    icons: ['fest.4.svg', 'fest.1.svg', 'fest.2.svg']
  },
  // Avantgarde Flowers
  {
    images: ['03.1.webp', '03.2.webp', '03.3.webp', '03.4.webp'],
    icons: ['SV.4.svg', 'SV.3.svg', 'SV.1.svg']
  },
  // Merry Christmas with an Angel
  {
    images: ['04.1.webp', '04.2.webp', '04.3.webp', '04.4.webp'],
    icons: ['NY.3.svg', 'NY.2.svg', 'NY.1.svg']
  },
  // Orthodox Esther with Bird
  {
    images: ['05.1.webp', '05.2.webp', '05.3.webp', '05.4.webp', '05.5.webp'],
    icons: ['esther.2.svg', 'esther.5.svg', 'esther.4.svg']
  },
  // Esther greeting card with Basket
  {
    images: ['06.1.webp', '06.2.webp', '06.3.webp', '06.4.webp'],
    icons: ['esther.3.svg', 'esther.1.svg', 'esther.5.svg']
  },
  // Merry Christmas with Snowflake
  {
    images: ['07.1.webp', '07.2.webp', '07.3.webp', '07.4.webp'],
    icons: ['NY.4.svg', 'NY.1.svg', 'NY.2.svg']
  },
  // Happy New Year with Mouse on Skates
  {
    images: ['08.1.webp', '08.2.webp', '08.3.webp', '08.4.webp'],
    icons: ['NY.4.svg', 'NY.1.svg', 'NY.3.svg']
  },
  // The Sagittarius
  {
    images: ['09.1.webp', '09.2.webp', '09.3.webp', '09.4.webp'],
    icons: ['zodiac.4.svg', 'zodiac.1.svg', 'zodiac.2.svg']
  },
  // Roses
  {
    images: ['10.1.webp', '10.2.webp', '10.3.webp'],
    icons: ['fest.1.svg', 'fest.4.svg', 'fest.3.svg']
  },
  // True Love with Teddy Bear
  {
    images: ['11.1.webp', '11.2.webp', '11.3.webp', '11.4.webp'],
    icons: ['SV.4.svg', 'SV.3.svg', 'SV.2.svg']
  },
  // The Gemini
  {
    images: ['12.1.webp', '12.2.webp', '12.3.webp'],
    icons: ['zodiac.1.svg', 'zodiac.4.svg', 'zodiac.5.svg']
  },
  // Merry Christmas with Fox
  {
    images: ['14.1.webp', '14.2.webp'],
    icons: ['NY.3.svg', 'NY.2.svg', 'NY.1.svg']
  }
]

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
  )
}