//src/data/navigation.ts

import styles from '@/styles/modules/categories.module.scss'

export interface Category {
    id: string;
    path: string;
    image: string;
    style: string;
    title: string;
  }
  
  export const categories: Category[] = [
    { 
      id: 'vector',
      path: '/vector-images',
      image: '01.svg',
      style: styles.vector,
      title: 'Vector Images' 
    },
    { 
      id: 'books',
      path: '/books',
      image: '02.svg',
      style: styles.books,
      title: 'Books'
    },
    { 
      id: 'brand',
      path: '/brand',
      image: '03.svg',
      style: styles.brand,
      title: 'Brand Style'
    },
    { 
      id: 'icons',
      path: '/icon-sets',
      image: '04.svg',
      style: styles.icons,
      title: 'Icons'
    },
    { 
      id: 'pattern',
      path: '/patterns',
      image: '05.svg',
      style: styles.pattern,
      title: 'Patterns'
    },
    { 
      id: 'logo',
      path: '/logo',
      image: '06.svg',
      style: styles.logo,
      title: 'Logo'
    },
    { 
      id: 'web',
      path: '/websites',
      image: '07.svg',
      style: styles.web,
      title: 'Websites'
    },
    { 
      id: 'arts',
      path: '/arts',
      image: '08.svg',
      style: styles.arts,
      title: 'Arts'
    },
    { 
      id: 'slide',
      path: '/slide',
      image: '09.svg',
      style: styles.slide,
      title: 'Slide Decks'
    },
    { 
      id: 'toys',
      path: '/toys',
      image: '10.svg',
      style: styles.toys,
      title: 'Toys'
    },
    { 
      id: 'greeting',
      path: '/greeting-cards',
      image: '11.svg',
      style: styles.greeting,
      title: 'Greeting Cards'
    },
    { 
      id: 'about',
      path: '/about-us',
      image: '12.svg',
      style: styles.about,
      title: 'About Us'
    }
  ];