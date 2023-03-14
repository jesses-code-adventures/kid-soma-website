export const NavigationLinks = [
  { name: "home", href: "/" },
  { name: "stems", href: "stems" },
  { name: "samples", href: "samples" },
  { name: "lyrics", href: "lyrics" },
  //    { name: "podcast", href: 'podcast'},
  { name: "contact", href: "contact" },
];

export const SiteMetadata = {
  title: "kid soma",
  description:
    "the world of kid soma, an electronic/ambient music producer from sydney.",
  author: {
    name: "Jesse Williams",
    twitter: "@jessesbeets",
    url: "linktr.ee/jessegwilliams/",
    email: "jesse@negativespacesounds.com",
    summary: "kid soma producer/performer/just generally around.",
  },
  org: {
    name: "kid soma",
    twitter: "@jessesbeets",
    url: import.meta.env.BASE_URL,
    email: "angusrjperry@gmail.com",
    summary: "the man whose website it is.",
  },
  location: "Sydney, NSW 2000",
  latlng: [-33.8469759, 150.3715249] as [number, number],
  repository: "https://github.com/jesses-code-adventures/kid-soma-website",
  social: [
    {
      name: "Email",
      link: "mailto:angusrjperry@gmail.com",
      icon: "envelope",
    },
    //   {
    //     name: 'Phone',
    //     link: '02 8288 4200',
    //     icon: 'telephone',
    //   },
    //   {
    //     name: 'LinkedIn',
    //     link: 'https://www.linkedin.com/company/givetelau/mycompany/',
    //     icon: 'linkedin',
    //   },
    //   {
    //     name: 'Facebook',
    //     link: 'https://www.facebook.com/GiveTel/',
    //     icon: 'facebook',
    //   },
    {
      name: "Instagram",
      link: "https://www.instagram.com/kid.soma/",
      icon: "instagram",
    },
    // {
    //   name: 'Github',
    //   link: 'https://github.com/hellothamcom',
    //   icon: 'github',
    // },
  ],
  buildTime: new Date().toString(),
};
