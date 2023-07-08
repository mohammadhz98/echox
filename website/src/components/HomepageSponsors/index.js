import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const SponsorList = [
  {
    name: 'Shiguredo Inc.',
    logo: require('@site/static/img/shiguredo-logo.png').default,
    link: 'https://shiguredo.jp'
  },
  {
    name: 'microCMS',
    logo: require('@site/static/img/microcms-logo.png').default,
    link: 'https://microcms.co.jp'
  },
  {
    name: 'DoiT',
    logo: require('@site/static/img/doit-logo.png').default,
    link: 'https://doit.com'
  }
];

function Sponsor({name, logo, link}) {
  return (
    <div className={clsx('col col--2')}>
      <div className="text--left padding-horiz--md">
        <h4>{name}</h4>
        <a href="https://shiguredo.jp" target="_blank">
          <img className={styles.sponsorLogo} src={logo} alt={name} />
        </a>
      </div>
    </div>
  );
}

export default function HomepageSponsors() {
  return (
    <section className={styles.sponsors}>
      <div className="container">
        <h1 className="text--left">Sponsors</h1>
        <div className="row">
          {SponsorList.map((props, idx) => (
            <Sponsor key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
