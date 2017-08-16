import { h, Component } from 'preact';

import styles from '../../assets/stylesheets/main_nav/main_nav_submenu.module.scss';

function SubMenuList(props) {
  const {
    header,
    listItems,
  } = props;

  return (
    <li className={styles["list"]}>
      <h3 className={styles["menu-header"]}>{ header }</h3>
      <ul>
        {
          listItems.map(item =>
            <li>
              <a alt="PolicyGenius" data-behavior="TrackAnalyticsOnClick" data-analytics-event-data={`{&quot;name&quot;:&quot;Used main nav&quot;,&quot;properties&quot;:{&quot;navigateTo&quot;:&quot;${ item.href }&quot;,&quot;navigateFrom&quot;:&quot;/templates/main_nav&quot;,&quot;clickedFrom&quot;:&quot;mega menu&quot;}}`}
                href={ item.href }>
                { item.title }
              </a>
            </li>
          )
        }
      </ul>
    </li>
  );
};

export default SubMenuList;
