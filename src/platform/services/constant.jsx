import Home from '../../pages/home/Home';
import AboutUs from '../../pages/AboutUs';
import ContactUs from '../../pages/ContactUs';
import Order from '../../pages/Order';
import Portfolio from '../../pages/Portfolio';

export const to = {
  home      : '/home',
  aboutUs   : '/about-us',
  contactUs : '/contact-us',
  order     : '/order-website',
  portfolio : '/portfolio'
};

export const routes = [
  {
    exact     : true,
    component : Home,
    path      : to.home
  },
  {
    exact     : true,
    component : AboutUs,
    path      : to.aboutUs
  },
   {
    exact     : true,
    component : ContactUs,
    path      : to.contactUs
  },
  {
    exact     : true,
    component : Order,
    path      : to.order
  },
  {
    exact     : true,
    component : Portfolio,
    path      : to.portfolio
  }
];