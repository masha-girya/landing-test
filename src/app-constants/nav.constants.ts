export const ROUTES = {
  home: {
    title: 'Owly',
    link: '/',
  },
  features: {
    title: 'Features',
    link: '#features',
  },
  about: {
    title: 'About',
    link: '#about',
  },
  faq: {
    title: 'FAQ',
    link: '#faq',
  },
};

export const NAV = Object.values(ROUTES).slice(1);

export const FOOTER_NAV = [
  [
    {
      title: 'About us',
      link: '/',
    },
    {
      title: 'Our story',
      link: '/',
    },
    {
      title: 'Blog',
      link: '/',
    },
    {
      title: 'Contact us',
      link: '/',
    },
  ],
  [
    {
      title: 'Grown Up Stuff',
      link: '/',
    },
    {
      title: 'FAQs',
      link: '/',
    },
    {
      title: 'Privacy Policy',
      link: '/',
    },
    {
      title: 'Terms & Conditions',
      link: '/',
    },
  ],
];
