import React, { Component } from 'react'
import News from './News'


export default class Newslist extends Component {
  render() {
    return (
      <>
      <div className="container my-4">
        <div className="row">
          <div className="col-md p-0">
          <News/>
         
    
          </div>
          
        </div>
      </div>
      
      </>
    )
  }
}
