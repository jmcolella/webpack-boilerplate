import { h, Component } from 'preact';

import styles from '../../assets/stylesheets/main_nav/main_nav_submenu.module.scss';

function SubMenu(props) {
  const {
    children,
    headerText,
    headerLink,
  } = props;

  return (
    <div className={styles["submenu-wrapper"]} data-submenu-wrapper="">
      <ul className={styles["submenu"]} data-menu-aim="">
        <li className={styles["has-content"]} data-has-content="true">
          <a className={styles["submenu-header"]} data-submenu-header="" data-behavior="TrackAnalyticsOnClick" data-analytics-event-data={`{&quot;name&quot;:&quot;Used main nav&quot;,&quot;properties&quot;:{&quot;navigateTo&quot;:&quot;${ headerLink }&quot;,&quot;navigateFrom&quot;:&quot;/templates/main_nav&quot;,&quot;clickedFrom&quot;:&quot;secondary nav&quot;}}`}
            href={ headerLink }>{ headerText }</a>
          <div className={styles["submenu-wrapper"]} data-submenu-wrapper="">
            <ul className={styles["menu secondary-panel"]} data-secondary-panel="">
              <li className={styles["menu-header back"]} data-back=""><span>{ headerText }</span></li>

              { children }
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SubMenu;
