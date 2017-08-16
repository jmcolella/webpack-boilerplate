import { h, Component } from 'preact';
import classnames from 'classnames';

import PrimaryMenuHeader from './Menu/PrimaryMenuHeader';
import SubMenu from './SubMenu';
import Intro from './SubMenu/Intro';
import SubMenuList from './SubMenu/SubMenuList';

import styles from '../assets/stylesheets/main_nav/main_nav.module.scss';

function MainNav() {
  return (
    <nav className={styles["wrapper"]}>
      <div className={styles['panel']} data-behavior="MainNav">
        <div className={styles['container']}>
          <div className={styles['logo']}>
            <a data-behavior="TrackAnalyticsOnClick" data-analytics-event-data="{&quot;name&quot;:&quot;Used main nav&quot;,&quot;properties&quot;:{&quot;navigateTo&quot;:&quot;/&quot;,&quot;navigateFrom&quot;:&quot;/templates/main_nav&quot;}}"
              href="/">
              <img alt="PolicyGenius" src="https://res-3.cloudinary.com/policygenius/image/upload/v1/general/pg-logo-tab.svg" />
            </a>
          </div>
          <div className={styles["panel-wrapper"]}>
            <div className={styles["primary-panel"]} data-primary-panel="">
              <div className={styles["primary-panel-wrapper"]} data-primary-panel-wrapper="">
                <ul className={classnames(styles["menu"], styles["primary-nav"])}>
                <PrimaryMenuHeader
                  header="Insurance Quotes & Guides"
                >
                    <SubMenu
                      headerText="Life Insurance"
                      headerLink="/life-insurance/"
                    >
                      <Intro
                        cta="Get A Free Quote"
                        text={
                          <p>
                            Life insurance is a financial safety net for your loved ones. <strong>Compare plans today.</strong>
                          </p>
                        }
                        imgSrc="https://res-2.cloudinary.com/policygenius/image/upload/v1/general/life"
                        linkHref="/life-insurance/"
                      />
                      <SubMenuList
                        header="Types of Life Insurance"
                        listItems={[
                          { title: "Term Life Insurance", href: "/life-insurance/term-life-insurance/", },
                          { title: "Level Term Life Insurance", href: "/life-insurance/level-term-life-insurance/", },
                          { title: "Return of Premium Life Insurance", href: "/life-insurance/return-of-premium-life-insurance/", },
                          { title: "No Medical Exam Life Insurance", href: "/life-insurance/no-medical-exam-life-insurance/", },
                          { title: "Whole Life Insurance", href: "/life-insurance/whole-life-insurance/", },
                        ]}
                      />
                      <SubMenuList
                        header="Helpful Resources"
                        listItems={[
                          { title: "Life Insurance Advice", href: "/life-insurance/learn/", },
                          { title: "Life Insurance Calculator", href: "/life-insurance/quotes/basic_info", },
                          { title: "Best Life Insurance Companies", href: "/life-insurance/best-life-insurance-companies/", },
                          { title: "Term vs. Whole Life Insurance", href: "/life-insurance/learn/whole-life-versus-term-life-insurance/", },
                          { title: "Life Insurance Shopping Guide", href: "/life-insurance/learn/shopping-advice/", },
                        ]}
                      />
                      <SubMenuList
                        header="Life Insurance Company Reviews"
                        listItems={[
                          { title: "Banner Life", href: "/life-insurance/companies/banner-life/review/", },
                          { title: "Lincoln Financial", href: "/life-insurance/companies/lincoln-national-life/review/", },
                          { title: "Pacific Life", href: "/life-insurance/companies/pacific-life/review/", },
                          { title: "Prudential", href: "/life-insurance/companies/prudential/review/", },
                          { title: "View All Companies", href: "/life-insurance/companies/", },
                        ]}
                      />
                      <li className="mobile-scroll-buffer"></li>
                    </SubMenu>
                  </PrimaryMenuHeader>
                </ul>
                  <ul>
                    <li>Test content</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;


// class MainNavigator extends React.Component {
  // constructor() {
    // super()
    // this.state = {
      // count: 0
    // }
  // }
  // handleClick() {
    // console.log('YEEEEEAAAHHH');
    // this.setState({count: this.state.count++})
  // }

  // render() {
    // return (
      // <div className={styles['container']}>
        // <p className={styles['text']}>Count: {this.state.count}</p>
        // <a onClick={ this.handleClick.bind(this) }>Click Me</a>
      // </div>
    // );
  // }
// };
