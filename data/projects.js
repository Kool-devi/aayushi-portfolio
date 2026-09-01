/* ═══════════════════════════════════════════════════════════════
   PROJECT INDEX — single source of truth

   Homepage cards, hover previews, and “Also check out” all
   read from this list. To add a case study:

   1. Add an object below (id must match data-project on the page)
   2. Duplicate project-template.html as project-<id>.html
   3. Set published: true once the page is ready to link

   Homepage shows every entry, in this order.
   “Also check out” shows other published entries only.
   ═══════════════════════════════════════════════════════════════ */

window.PORTFOLIO = window.PORTFOLIO || {};

window.PORTFOLIO.email = 'hello@aayushi.design';

window.PORTFOLIO.projects = [
  {
    id: 'darkroast',
    name: 'DarkRoast',
    title: 'Redesigning the project workspace for faster creative collaboration',
    category: 'Creative operations',
    location: '',
    year: '',
    href: 'project-darkroast.html',
    thumbnail: '',
    preview: '',
    emailSubject: 'DarkRoast case study',
    published: true
  },
  {
    id: 'delicut',
    name: 'Delicut',
    title: "Delicut's meal plan subscription",
    category: 'Meal subscription',
    location: 'UAE',
    year: '2025',
    href: 'project-delicut.html',
    thumbnail: 'Mockups/Delicut/Project Landing.jpg',
    preview: 'Mockups/Delicut/Home Page Image.jpg',
    emailSubject: 'Delicut case study',
    published: true
  },
  {
    id: 'ux-research',
    name: 'UX Research',
    title: 'UX Research',
    category: 'Research',
    year: '',
    href: '',
    thumbnail: '',
    preview: '',
    emailSubject: '',
    published: false
  }
];
