import { h, Component } from 'preact';
import classnames from 'classnames';

import styles from '../../assets/stylesheets/main_nav/main_nav_primary_menu.module.scss';

function PrimaryMenuHeader(props) {
  const {
    children,
    header,
    active,
  } = props;

  const classes = [
    styles['header-wrapper'],
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

export default PrimaryMenuHeader;
