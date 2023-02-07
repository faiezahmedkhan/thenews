import React, { Component } from 'react'
import News from './News'


export default class Newslist extends Component {
  render() {
    return (
      <>
     
          <News pageSize={15} country='in' category='general' author='author' date='publishedAt'/>
         
    
          
      </>
    )
  }
}
