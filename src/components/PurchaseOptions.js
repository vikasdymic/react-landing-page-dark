import React, { Component } from 'react';
import classNames from 'classnames';

import PurchaseOption from './PurchaseOption';

class PurchaseOptions extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this)
  }

  // componentDidMount() {
  //   global.document.addEventListener( 'click', this.handleClick, false )
  // }
  //
  // componentWillUnmount() {
  //   global.document.addEventListener( 'click', this.handleClick, false )
  // }
  //
  // handleClick(event) {
  //   if( event.target.classList.contains('option') && event.target.props.optionIsActive !== '') { event.target.state.setState( optionIsActive : 'true' ) }
  // }

  render() {
    return (
      <section className='purchaseoptions'>
        <h2 className='purchaseoptions__h2'>Etiam sit amet orci</h2>
        <p className='purchaseoptions__p'>Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        <div className='purchaseoptions__items'>
          <PurchaseOption
            optionTitle='Lorem ipsum'
            optionCost='33'
            optionDescription='Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et.'
            optionButton='Purchase Now'
            optionIsActive='false'
            key={1}
            onClick
          />
          <PurchaseOption
            optionTitle='Lorem ipsum'
            optionCost='66'
            optionDescription='Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et.'
            optionButton='Purchase Now'
            optionIsActive='true'
            key={2}
          />
          <PurchaseOption
            optionTitle='Lorem ipsum'
            optionCost='99'
            optionDescription='Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et.'
            optionButton='Purchase Now'
            optionIsActive ='false'
            key={3}
          />
        </div>
      </section>
    );
  }
}

export default PurchaseOptions;
