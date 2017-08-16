import { h, Component } from 'preact';
import PropTypes from 'prop-types';

import styles from '../../assets/stylesheets/main_nav/main_nav_submenu.module.scss';

function Intro(props) {
  const {
    cta,
    text,
    imgSrc,
    linkHref,
  } = props;

  return (
    <li className={styles["intro has-cta"]}>
      <p>{ text }</p>
      <div className={styles["cta-container"]}>
        <div className={styles["cta"]}>
          <a rel="nofollow" data-behavior="TrackAnalyticsOnClick" data-analytics-event-data={`{&quot;name&quot;:&quot;Used main nav&quot;,&quot;properties&quot;:{&quot;navigateTo&quot;:&quot;${ linkHref }&quot;,&quot;navigateFrom&quot;:&quot;/templates/main_nav&quot;,&quot;clickedFrom&quot;:&quot;mega menu&quot;}}`}
            href={ linkHref }>
            <button className={styles["action"]}>
              { cta }
            </button>
          </a>
          <span className={styles["info"]}></span>
        </div>

        <img alt="PolicyGenius" className={styles["info-image"]} src={ imgSrc } />
      </div>
    </li>
  );
};

Intro.propTypes = {
  cta: PropTypes.string,
  text: PropTypes.node,
};

export default Intro;
