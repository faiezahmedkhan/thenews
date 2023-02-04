import React, { Component } from 'react';
import Spinner from './Spinner'

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1 
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1a253836e6a8444ea061de2858502227&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
  
  }
  handelPreviousClick = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1a253836e6a8444ea061de2858502227&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ 
      page: this.state.page - 1,
      articles: parsedData.articles ,
      loading: false,
    })
  }
  handelNextClick = async () =>{ 
    if (!(this.state.page + 1  > Math.ceil(this.state.totalResults/20))){
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1a253836e6a8444ea061de2858502227&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({ 
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    })
  }
  }
  render() {

    return (
      <>
        <div className="container my-5">
          <div className="row">
          {this.state.loading && <Spinner />}
            {!this.state.loading && this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <figure className="snip1493">
                  <div className="image">
                    <img src={!element.urlToImage ? "https://www.hopkinsmedicine.org/-/media/feature/noimageavailable.ashx?mw=560&mh=320&hash=A258055CDF6293CC1D8ED48F041003D6" : element.urlToImage} alt="News Image" />
                  </div>
                  <figcaption>
                    {/* <div className="date">
                      <span className="day">28</span>
                      <span className="month">Oct</span></div> */}

                    <h6>{element.title ? element.title.slice(0, 60) : ''}...</h6>
                    <p>{element.description ? element.description.slice(0, 90) : ''}...</p>
                    <button className='btn btn-outline-secondary
                            btn-sm'><a href={element.url} target="_blank" rel="noreferrer">  </a> Read More </button>

                  </figcaption>
                </figure>
              </div>



            })}
            <div className="container d-flex justify-content-between mt-2">
              <button disabled={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.handelPreviousClick}> &larr; Previous</button>
              <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type='button' className='btn btn-dark' onClick={this.handelNextClick} >Next &rarr;</button>
            </div>
          </div>

        </div>

      </>
    )
  }
}
