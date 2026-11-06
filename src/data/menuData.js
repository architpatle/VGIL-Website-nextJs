import { PRODUCTS_DATA } from './productsData';
import { SERVICES_DATA } from './servicesData';
import { INVESTORS_DATA } from './investorsData';
import { RESOURCE_DATA } from './resourceData';
import imgBlog from '../assets/Investors-Info-img/Blog.png';

export const MENU_DATA = {
  products: PRODUCTS_DATA.map(p => ({
    name: p.title,
    icon: p.icon,
    logo: p.logo,
    link: `/products/${p.slug}`
  })),
  services: SERVICES_DATA.map(s => ({
    name: s.title,
    icon: s.icon,
    logo: s.logo,
    link: `/services/${s.slug}`
  })),
  investors: INVESTORS_DATA.map(i => ({
    name: i.title,
    icon: i.icon,
    logo: i.logo,
    link: `/investors/${i.slug}`
  })),
  resource: [
    ...RESOURCE_DATA.map(r => ({
      name: r.title,
      icon: r.icon,
      logo: r.logo,
      link: `/resource/${r.slug}`
    }))
  ]
};
