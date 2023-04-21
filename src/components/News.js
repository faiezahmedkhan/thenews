import React, { Component } from 'react';
import Spinner from './Spinner';
import PropsTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
       country: 'in',
       pageSize: 8,
       category:'general',
  }
  static PropsTypes = {
    country: PropsTypes.string,
    pageSize: PropsTypes.number,
    category: PropsTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1 ,
      totalResults: 0
    }
  }
  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1a253836e6a8444ea061de2858502227&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    
  }
  async componentDidMount() {
    this.updateNews();
  
  }
  handelPreviousClick = async () =>{
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1a253836e6a8444ea061de2858502227&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({ 
    //   page: this.state.page - 1,
    //   articles: parsedData.articles ,
    //   loading: false,
    // })
    this.setState({page: this.state.page - 1});
    this.updateNews();
  }
  handelNextClick = async () =>{ 
  //   if (!(this.state.page + 1  > Math.ceil(this.state.totalResults/20))){
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1a253836e6a8444ea061de2858502227&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading: true});
  //   let data = await fetch(url);
  //   let parsedData = await data.json();

  //   this.setState({ 
  //     page: this.state.page + 1,
  //     articles: parsedData.articles,
  //     loading: false,
  //   })
  // }
  this.setState({page: this.state.page + 1});
  this.updateNews();
  }

  fetchMoreData = async() => {
    this.setState({page: this.state.page + 1});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1a253836e6a8444ea061de2858502227&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ 
       articles: this.state.articles.concat( parsedData.articles),
       totalResults: parsedData.totalResults})

  };
  render() {

    return (
      <>
        <div className="container my-5">



       {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className='container'>
          <div className="row">
          {/* {this.state.loading && <Spinner />} */}

          

            {this.state.articles.map((element) => {
              return  <div className="col-md-4" key={element.url}>
                
                <figure className="snip1493">
               
                  <div className="image">
                  
                    <img src={!element.urlToImage ? "https://www.hopkinsmedicine.org/-/media/feature/noimageavailable.ashx?mw=560&mh=320&hash=A258055CDF6293CC1D8ED48F041003D6" : element.urlToImage} alt="News Image" />
                  </div>
                  <figcaption>
                  
                 

                    <h6>{element.title ? element.title.slice(0, 60) : ''}...</h6>
                    <p>{element.description ? element.description.slice(0, 90) : ''}...</p>
                    <div className='d-flex justify-content-between align-self-end'>
                    <button className='btn btn-outline-secondary btn-sm'><a href={element.url} target="_blank" rel="noreferrer">  </a> Read More </button>
                    <p className="card-text"><small className="text-black text-bold">By: {!element.author?"Unknown":element.author } <br /> Date: {new Date(element.publishedAt).toGMTString()}</small></p>
                    </div>
                  </figcaption>
                  
                </figure>
              </div>



            })}
            </div>
            </div>



            
            </InfiniteScroll>
          
          </div>

        

      </>
    )
  }
}