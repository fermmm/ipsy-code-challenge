import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// @ts-ignore
import styles from './CssTest.scss';

export interface PropsCssTest { }
export interface StateCssTest { }

class CssTest extends Component<PropsCssTest, StateCssTest> {
   items: string[] = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed. Ut enim ad minim veniam.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed. Ut enim ad minim veniam.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed. Ut enim ad minim veniam.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed. Ut enim ad minim veniam.',
   ];
   
   public render(): JSX.Element {
      return (
         <div className={styles.cssTestMainContainer}>           
            <img src={'https://ak9.picdn.net/shutterstock/videos/8889499/thumb/1.jpg'} className={styles.image}/>
            <div className={styles.textContainer} >
               <div className={styles.title}>
                  Technology
               </div>
               <div className={styles.itemsContainer}>
                  {
                     this.items.map((text, i) => 
                        <div className={styles.item} key={i}>
                           <div className={styles.itemNumber}>
                              {i}
                           </div>
                           <div className={styles.itemText}>
                              {text}
                           </div>
                        </div>
                     )
                  }

               </div>
            </div>
         </div>
      );
   }
}

export default hot(module)(CssTest);