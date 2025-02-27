// src/data/aboutUsContent.ts
import { AboutUsSection } from '@/types/aboutUs'

export const aboutUsContent: Record<string, AboutUsSection> = {
  en: {
    values: [
      { 
        type: 'heading1',
        content: 'We are Natalya and Alexey Kuczynski, a family of designers'
      },
      {
        type: 'heading2',
        content: 'We are against the war in Ukraine. The genocide of Ukrainians must be stopped immediately'
      },
      { 
        type: 'value', 
        content: 'We stand for freedom and equality' 
      },
      {
        type: 'value',
        content: 'We believe that business must be responsible and want everything we make to bring joy to people and motivate them into giving the good to others'
      },
      {
        type: 'value',
        content: 'We support organizations that help neurodivergent people because we are concerned with their inclusion into society and would like to support such initiatives in the future, including voluntary work'
      },
      {
        type: 'value',
        content: 'We are happy cat parents and donators at animal shelters. Adopt, don\'t buy is our principle, and we urge you to do the same'
      },
      { 
        type: 'value', 
        content: 'We are open to everything new and we enjoy learning very much' 
      },
      {
        type: 'heading2',
        content: 'Let\'s work together to make this world better, more just, more beautiful, and kinder'
      }
    ],
    skills: {
      title: 'Our skills',
      items: [
        'website design',
        'vector graphics',
        'book illustration',
        'page layout&makeup',
        'brand style and logos',
        'presentations and infographics',
        'handmade toys and exclusive greeting cards'
      ]
    },
    tools: {
      title: 'Our tools',
      items: [
        'Figma',
        'Blender 3D',
        'CorelDRAW',
        'Adobe Indesign',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'OLFA sharp cuts',
        'Rotring technical pen',
        'Janome sewing machine'
      ]
    }
  },
  pl: {
    values: [
      {
        type: 'heading1',
        content: 'My to rodzina designerów — Natalia i Aleks Kuczyńscy'
      },
      {
        type: 'heading2',
        content: 'Jesteśmy przeciwko agresji rosyjskiej na Ukrainę. Genocyd Ukraińców powinien się skończyc natychmiast'
      },
      {
        type: 'value',
        content: 'Wspieramy wolność i równość'
      },
      {
        type: 'value',
        content: 'Wierzymy, że biznes musi być odpowiedzialnym i chcemy, aby wszystko, co robimy, sprawiało przyjemność ludziom i pobudzało ich do dobrego'
      },
      {
        type: 'value',
        content: 'Wspieramy organizacje, które pomagają osobom z niepełnosprawnością umysłową, ponieważ obawiamy się o ich włączenie do społeczeństwa i chcielibyśmy wspierać podobne inicjatywy w przyszłości, w tym w ramach wolontariatu'
      },
      {
        type: 'value',
        content: 'Jesteśmy happy cats parents i darczyńcami schronisk dla zwierząt. Wyznajemy zasadę Adopt, don\'t buy i zachęcamy do tego samego'
      },
      {
        type: 'value',
        content: 'Jesteśmy otwarci na nowości i uwielbiamy naukę'
      },
      {
        type: 'heading2',
        content: 'Pracujmy razem na rzecz lepszego, sprawiedliwszego, piękniejszego i milszego świata!'
      }
    ],
    skills: {
      title: 'Nasze zdolności',
      items: [
        'łamanie książek',
        'grafika wektorowa',
        'ilustracja książkowa',
        'prezentacje i infografiki',
        'design stron internetowych',
        'logo oraz identyfikacja wizualna',
        'ręcznie robione zabawki oraz ekskluzywne kartki życzeniowe'
      ]
    },
    tools: {
      title: 'Nasze narzędzia',
      items: [
        'Figma',
        'Blender 3D',
        'CorelDRAW',
        'Adobe Indesign',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'OLFA noże',
        'Rotring rapidograf',
        'Janome maszyna do szycia'
      ]
    }
  },
  fr: {
    values: [
      {
        type: 'heading1',
        content: 'Nous sommes une famille de designers — Natalia et Alex Kuczynski'
      },
      {
        type: 'heading2',
        content: 'Nous sommes contre l\'agression russe en Ukraine. Le génocide des Ukrainiens doit être arrêté immédiatement'
      },
      {
        type: 'value',
        content: 'Nous supportons sans restriction la liberté et l\'égalité pour tous'
      },
      {
        type: 'value',
        content: 'Nous voudrions que tout ce que nous faisons rende les gens heureux et leur permette de se sentir mieux'
      },
      {
        type: 'value',
        content: 'Nous soutenons les organisations qui aident les personnes handicapées mentales parce que nous sommes préoccupés par leur inclusion dans la société et nous voudrions soutenir des initiatives similaires à l\'avenir, y compris le volontariat'
      },
      {
        type: 'value',
        content: 'Nous adorons les chats et soutenons deux refuges pour animaux abandonnés. Nous vous demandons: «Adoptez, n\'achetez pas»'
      },
      {
        type: 'value',
        content: 'Nous aimons tout ce que est neuf, amusant, vivant et non conventionnel'
      },
      {
        type: 'heading2',
        content: 'Coopérons pour un monde meilleur, plus juste, plus beau et plus gentil!'
      }
    ],
    skills: {
      title: 'Nos habiletés',
      items: [
        'illustration de livre',
        'mise en page du livre',
        'graphiques vectoriels',
        'conception de site Web',
        'logo et identification visuelle',
        'présentations et infographies',
        'jouets faits à la main et cartes de vœux exclusives'
      ]
    },
    tools: {
      title: 'Nos outils',
      items: [
        'Figma',
        'Blender 3D',
        'CorelDRAW',
        'Adobe Indesign',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'OLFA coupeurs',
        'Rotring stylo technique',
        'Janome machine à coudre'
      ]
    }
  }
};