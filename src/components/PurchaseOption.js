import React, { Component } from 'react';
import classNames from 'classnames';


class PurchaseOption extends Component {
  constructor(props) {
    super(props);
    // this.returnClasses=this.returnClasses.bind(this)
    this.state = {activeSelected : ''}
    // this.handleClick = this.handleClick.bind(this)
    this.setState = this.setState.bind(this);
  }

  render() {
    let activeOption = 'option';
    let costAmountActive = 'option__cost';
    if (this.props.optionIsActive === 'true'){
      activeOption += ' option--active';
      costAmountActive += ' option__cost--active';
    } else if (this.props.optionIsActive === 'false') {
      activeOption += '';
      costAmountActive += '';
    }

    return (
      <article className={activeOption} data-key={this.props.key}>
        <h4 className='option__title'>{this.props.optionTitle}</h4>
        <p className={costAmountActive}
        >{this.props.optionCost}</p>
        <p className='option__description'>{this.props.optionDescription}</p>
        <button className='option__button' type='button' value={this.props.optionButton}>{this.props.optionButton}</button>
      </article>
    );
  }
}

export default PurchaseOption;
