import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import SideBar from '../../UI/SideBar/SideBar';
import CssTest from '../../UI/CssTest/CssTest';

// @ts-ignore
import styles from './MainPage.scss';

export interface PropsMainPage { }
export interface StateMainPage {
   sideBarOpened: boolean;
}

class MainPage extends Component<PropsMainPage, StateMainPage> {
   state: StateMainPage = {
      sideBarOpened: false
   };

   public render(): JSX.Element {
      return (
         <>
            <SideBar opened={this.state.sideBarOpened} onClose={() => this.setState({sideBarOpened: false})}/>
            <div className={styles.mainPageContainer}>
               <button
                  onClick={() => this.setState({sideBarOpened: true})}
                  className={styles.openSideBarButton}
               >
                  Open sidebar
               </button>
               <CssTest />
            </div>
         </>
      );
   }
}

export default hot(module)(MainPage);
