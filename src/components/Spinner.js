import React, { Component } from 'react'
import slide from './slide';

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center my-5 '>
        <img src={slide.loader}/>
      </div>
    )
  }
}
