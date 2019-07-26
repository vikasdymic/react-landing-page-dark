import React, { Component } from 'react';

class PurchaseOption extends Component {
  constructor(props) {
    super(props);
  }

  setActiveAll = () => {
    return this.props.itemKey === this.props.activeKey ? 'option option--active' : 'option';
  }

  setActiveCost = () =>  {
    return this.props.itemKey === this.props.activeKey ? 'option__cost option__cost--active' : 'option__cost';
  }

  render() {
    return (
      <article className={this.setActiveAll()} data-key={this.props.itemKey}>
        <h4 className='option__title'>{this.props.optionTitle}</h4>
        <p className={this.setActiveCost()}>{this.props.optionCost}</p>
        <p className='option__description'>{this.props.optionDescription}</p>
        <button className='option__button' type='button' value={this.props.optionButton}>{this.props.optionButton}</button>
      </article>
    );
  }
}

export default PurchaseOption;
