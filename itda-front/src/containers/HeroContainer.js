import Hero from '../components/Hero';
import flagGBR from '../images/img-flag-gbr.jpeg';

const heroData = {
  index: [
    {
      flag: flagGBR,
      country: 'SAFe Agile',
      event: 'Atlassian Summit',
    },
    {
      flag: flagGBR,
      country: 'SAFe Agile',
      event: 'Atlassian Summit',
    },
    {
      flag: flagGBR,
      country: 'SAFe Agile',
      event: 'Atlassian Summit',
    },
    {
      flag: flagGBR,
      country: 'SAFe Agile',
      event: 'Atlassian Summit',
    },
    {
      flag: flagGBR,
      country: 'SAFe Agile',
      event: 'Atlassian Summit',
    },
    {
      flag: flagGBR,
      country: 'SAFe Agile',
      event: 'Atlassian Summit',
    },
  ],
  greeting: [
    {
      flag: flagGBR,
      country: 'SAFe Agile',
      rate: 0,
      post: 0,
    },
    {
      flag: flagGBR,
      country: 'OpenStack',
      rate: 0,
      post: 0,
    },
    {
      flag: flagGBR,
      country: 'Java',
      rate: 0,
      post: 0,
    },
    {
      flag: flagGBR,
      country: 'Linux',
      rate: 0,
      post: 0,
    },
    {
      flag: flagGBR,
      country: 'Atlassian',
      rate: 0,
      post: 0,
    },
    {
      flag: flagGBR,
      country: 'AWS',
      rate: 0,
      post: 0,
    },
  ],
};

const HeroContainer = ({ type }) => {
  return <Hero type={type} data={heroData[type]} />;
};

export default HeroContainer;
