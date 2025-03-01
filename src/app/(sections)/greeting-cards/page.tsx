// src/app/(sections)/greeting-cards/page.tsx
import Image from 'next/image'
import styles from './styles.module.scss'

interface CardSectionProps {
  images: string[];
  icons: string[];
}

const CardSection = ({ images, icons }: CardSectionProps) => (
  <div className={styles.wholeCard}>
    <div className={styles.cardBox}>
      <div className={styles.cardContainer}>
        {images.slice(0, 2).map((image, index) => (
          <div key={`img-${index}`} className={styles.cardImage}>
            <Image 
              src={`/img/sections/greeting-cards/${image}`}
              alt={`Greeting Card ${image}`}
              width={800}
              height={600}
              loading={index < 4 ? "eager" : "lazy"}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        ))}
      </div>
      {images.length > 2 && (
        <div className={styles.cardContainer}>
          {images.slice(2).map((image, index) => (
            <div key={`img-${index+2}`} className={styles.cardImage}>
              <Image 
                src={`/img/sections/greeting-cards/${image}`}
                alt={`Greeting Card ${image}`}
                width={800}
                height={600}
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
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
              width={48}
              height={48}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
)

const cardSections = [
  {
    images: ['01.1.webp', '01.2.webp', '01.3.webp', '01.4.webp'],
    icons: ['NY.4.svg', 'NY.1.svg', 'NY.2.svg']
  },
  {
    images: ['02.1.webp', '02.2.webp', '02.3.webp', '02.4.webp'],
    icons: ['fest.4.svg', 'fest.1.svg', 'fest.2.svg']
  },
  {
    images: ['03.1.webp', '03.2.webp', '03.3.webp', '03.4.webp'],
    icons: ['SV.4.svg', 'SV.3.svg', 'SV.1.svg']
  },
  {
    images: ['06.1.webp', '06.3.webp', '06.4.webp', '06.2.webp'],
    icons: ['esther.3.svg', 'esther.1.svg', 'esther.5.svg']
  },
  {
    images: ['09.1.webp', '09.3.webp', '09.2.webp', '09.4.webp'],
    icons: ['zodiac.4.svg', 'zodiac.1.svg', 'zodiac.2.svg']
  },
  {
    images: ['11.1.webp', '11.2.webp', '11.3.webp', '11.4.webp'],
    icons: ['SV.4.svg', 'SV.3.svg', 'SV.2.svg']
  },
  {
    images: ['12.1.webp', '12.2.webp', '12.3.webp'],
    icons: ['zodiac.1.svg', 'zodiac.4.svg', 'zodiac.5.svg']
  }
]

export default function GreetingCardsPage() {
  return (
    <section>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-6">
            {cardSections.slice(0, Math.ceil(cardSections.length/2)).map((section, index) => (
              <CardSection
                key={`section-left-${index}`}
                images={section.images}
                icons={section.icons}
              />
            ))}
          </div>
          <div className="col-12 col-xl-6">
            {cardSections.slice(Math.ceil(cardSections.length/2)).map((section, index) => (
              <CardSection
                key={`section-right-${index}`}
                images={section.images}
                icons={section.icons}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}