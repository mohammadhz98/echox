import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageSponsors from '@site/src/components/HomepageSponsors';

import styles from './index.module.css';

const description = `Echo is a high-performance web framework for building robust and scalable applications in Go.
  With its minimalist design and powerful features, Echo enables developers to create efficient APIs and web
  applications with ease. Harness the speed, flexibility, and simplicity of Echo to accelerate your Go development
  projects.`;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <img 
          className={styles.heroTerminal}
          src={require('../../static/img/terminal.png').default}
          alt="Terminal"
        />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/quick-start">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.tagline}`}
      description={description}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageSponsors />
      </main>
    </Layout>
  );
}
