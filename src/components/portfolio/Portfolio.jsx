import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/slavic_club.png';
import IMG2 from '../../assets/Dublin.jpg';
import IMG3 from '../../assets/evosuite.png';
import Res from '../../assets/Research.pdf';
import SlavicClubPoster from '../../assets/slavic_club_flyer.doc.pdf';


// Data for portfolio items
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Slavic Club',
    links: [
      {
        label: 'Facebook',
        url: 'https://www.facebook.com/slavicclub/',
      },
      {
        label: 'Download Flyer',
        url: SlavicClubPoster, // Corrected to use the variable directly
        isDownload: true,
      },
    ],
  },
  {
    id: 2,
    image: IMG2,
    title: 'Travel Writing in Ireland',
    links: [
      {
        label: 'WordPress',
        url: 'https://wordpress.com/ppc/lohp-campaign/?utm_source=google&utm_campaign=google_search_wpcom_acquisition_brand_us_en&utm_medium=paid_search&keyword=wordpress&creative=685174474764&campaignid=20879142434&adgroupid=157130594819&matchtype=e&device=c&network=g&targetid=kwd-313411415&utm_content=&gad_source=1&gclid=Cj0KCQjw99e4BhDiARIsAISE7P905Jh3XdjCiKIfSAVTkRk5_y9t4Q-Wm--yDTYFRNsiE48tDsjHP5MaAkZsEALw_wcB',
      },
      {
        label: 'Blog',
        url: 'https://vleontravelwriting.wordpress.com/?_gl=1*v2kg5e*_gcl_au*OTA3MTEyOTI3LjE3Mjk1NjU3ODA.',
      },
    ],
  },
  {
    id: 3,
    image: IMG3,
    title: 'Research',
    links: [
      {
        label: 'Professor Ayad',
        url: 'https://cahsi.utep.edu/experts/amani-ayad/',
      },
      {
        label: 'Download Research PDF',
        url: Res, // Corrected to use the variable directly
        isDownload: true,
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, links }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className={`btn ${link.isDownload ? '' : 'btn-primary'}`}
                    target={link.isDownload ? '_self' : '_blank'}
                    download={link.isDownload ? true : undefined}
                    rel={link.isDownload ? undefined : 'noopener noreferrer'}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
