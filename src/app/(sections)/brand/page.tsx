// src/app/(sections)/brand/page.tsx
import Image from 'next/image'
import styles from './styles.module.scss'

interface BrandSectionProps {
  bgColor: string;
  mainImages: string[];
  additionalImages: string[];
}

const BrandSection = ({ bgColor, mainImages, additionalImages }: BrandSectionProps) => (
  <div className="row col-12" style={{ backgroundColor: bgColor, borderBottom: 'solid 1px black' }}>
    {mainImages.map((image, index) => (
      <div key={`main-${index}`} className="div-brand col-12 col-md-6 col-xl-4 col-xxl-3">
        <Image 
          src={`/img/sections/brand/${image}`}
          alt="Brand Design"
          width={400}
          height={400}
          className={styles.brandImage} 
        />
      </div>
    ))}
    <div className="row div-brand col-12 col-md-6 col-xl-12 col-xxl-3">
      {additionalImages.map((image, index) => (
        <div key={`add-${index}`} className="div-brand col-12 col-xl-6 col-xxl-12">
          <Image 
            src={`/img/sections/brand/${image}`}
            alt="Brand Design"
            width={400}
            height={400}
            className={styles.brandImage}
          />
        </div>
      ))}
    </div>
  </div>
)

const brandSections = [
    {
      bgColor: '#b8d8d6', // Argo stevedoring
      mainImages: ['01.1.svg', '01.2.svg', '01.3.svg'],
      additionalImages: ['01.4.svg', '01.5.svg']
    },
    {
      bgColor: '#e1c8c1', // ant furniture
      mainImages: ['04.1.svg', '04.2.svg', '04.3.svg'],
      additionalImages: ['04.4.svg', '04.5.svg']
    },
    {
      bgColor: '#a6e6a6', // Vitasoy
      mainImages: ['06.1.svg', '06.2.svg', '06.3.svg'],
      additionalImages: ['06.4.svg', '06.5.svg']
    },
    {
      bgColor: '#dcdfe0', // Novotrans
      mainImages: ['03.1.svg', '03.2.svg', '03.3.svg'],
      additionalImages: ['03.4.svg', '03.5.svg']
    },
    {
      bgColor: '#ddd3ce', // Fa mineur
      mainImages: ['05.1.svg', '05.2.svg', '05.3.svg'],
      additionalImages: ['05.4.svg', '05.5.svg']
    },
    {
      bgColor: '#88c7ed', // Novotrans rail car
      mainImages: ['02.1.svg', '02.2.svg', '02.3.svg'],
      additionalImages: ['02.4.svg', '02.5.svg']
    }
  ]

export default function BrandPage() {
  return (
    <section>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {brandSections.map((section, index) => (
            <BrandSection
              key={`section-${index}`}
              bgColor={section.bgColor}
              mainImages={section.mainImages}
              additionalImages={section.additionalImages}
            />
          ))}
        </div>
      </div>
    </section>
  )
}