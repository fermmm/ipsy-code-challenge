import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// @ts-ignore
import styles from './SideBar.scss';

export interface PropsSideBar { 
   opened: boolean;
   onClose(): void;
}

class MainPage extends Component<PropsSideBar> {
   public render(): JSX.Element {
      return (
         <div className={`${styles.sideBarMainContainer} ${!this.props.opened && styles.closed}`}>
            <button 
               onClick={() => this.props.onClose()}
               className={styles.closeButton}
            >
               X
            </button>
            {this.props.children}
         </div>
      );
   }
}

export default hot(module)(MainPage);