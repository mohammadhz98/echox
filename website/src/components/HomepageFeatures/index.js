import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Optimized Router',
    Svg: require('@site/static/img/0568-rocket.svg').default,
    description: (
      <>
        Highly optimized HTTP router with zero dynamic memory allocation which smartly prioritizes routes.
      </>
    ),
  },
  {
    title: 'Scalable',
    Svg: require('@site/static/img/0075-cloud.svg').default,
    description: (
      <>
        Build robust and scalable RESTful API, easily organized into groups.
      </>
    ),
  },
  {
    title: 'Automatic TLS',
    Svg: require('@site/static/img/0221-license2.svg').default,
    description: (
      <>
        Automatically install TLS certificates from Let's Encrypt.
      </>
    ),
  },
  {
    title: 'HTTP/2',
    Svg: require('@site/static/img/0567-speed-fast.svg').default,
    description: (
      <>
        HTTP/2 support improves speed and provides better user experience.
      </>
    ),
  },
  {
    title: 'Middleware',
    Svg: require('@site/static/img/0893-funnel.svg').default,
    description: (
      <>
        Many built-in middleware to use, or define your own. Middleware can be set at root, group or route level.
      </>
    ),
  },
  {
    title: 'Data Binding',
    Svg: require('@site/static/img/0101-database-upload.svg').default,
    description: (
      <>
        Data binding for HTTP request payload, including JSON, XML or form-data.
      </>
    ),
  },
  {
    title: 'Data Rendering',
    Svg: require('@site/static/img/0102-database-download.svg').default,
    description: (
      <>
        API to send variety of HTTP response, including JSON, XML, HTML, File, Attachment, Inline, Stream or Blob.
      </>
    ),
  },
  {
    title: 'Templates',
    Svg: require('@site/static/img/0780-code.svg').default,
    description: (
      <>
        Template rendering using any template engine.
      </>
    ),
  },
  {
    title: 'Extensible',
    Svg: require('@site/static/img/0243-equalizer.svg').default,
    description: (
      <>
        Customized central HTTP error handling. Easily extendable API.
      </>
    ),
  }
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--left padding-horiz--md">
        <h3>
          <Svg className={styles.featureSvg} role="img" />
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
