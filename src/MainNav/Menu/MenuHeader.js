import { h, Component } from 'preact';
import classnames from 'classnames';

import styles from '../../assets/stylesheets/main_nav/main_nav_menu_header.module.scss';

function MenuHeader(props) {
  const {
    children,
    header,
    active,
  } = props;

  const classes = [
    styles['primary-nav-header-wrapper'],
    children && styles['has-children'],
    active && styles['active'],
  ];

  return (
    <li className={classnames(...classes)} data-has-children="true">
      <span className={styles["menu-header"]}>{ header }</span>
      { children }
    </li>
  );
};

export default MenuHeader;
