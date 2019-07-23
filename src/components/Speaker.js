import React, { Component } from 'react';

class Speaker extends Component {
  render() {
    return (
      <article className='speaker'>
        <img
          className='speaker__image'
          src={this.props.speakerImage ? this.props.speakerImage : null}
          alt={this.props.speakerImageAlt}
        />
        <div className='speaker__textwrapper'>
          <h2 className='speaker__textwrapper__h2'>{this.props.speakerName}</h2>
          <h3 className='speaker__textwrapper__h3'>{this.props.speakerJob}</h3>
          <p className='speaker__textwrapper__p'>{this.props.speakerDescription}</p>
        </div>
      </article>
    );
  }
}

export default Speaker;
