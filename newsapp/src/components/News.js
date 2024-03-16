import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
// import { Route } from "react-router-dom";


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
      }
      static propsType = {
          country: PropTypes.string, 
          pageSize: PropTypes.number,
          category: PropTypes.string,
      }
      capitalizeFirstLetter = (string)=> { 
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      

    constructor(props){
      super(props);
      this.state = {
          articles: [],
          loading: false,
          page:1
      }
      document.title = `${this.capitalizeFirstLetter(this.props.category)}- Knews`;
    }

  async componentDidMount(){
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=770fba465d614551b4d281c6a85628a8&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data= await fetch(url);
    let parseData= await data.json()
    console.log(parseData);
    this.setState({articles: parseData.articles,
     totalResults: parseData.totalResults,
     loading: false})
  }

  handleNextClick = async()=>{
    console.log("Next");
    if (!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=770fba465d614551b4d281c6a85628a8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data= await fetch(url);
      let parseData= await data.json()
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading: false
    })
  }
}

  handlePrevClick = async ()=>{
    console.log("Previous"); 
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=770fba465d614551b4d281c6a85628a8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data= await fetch(url);
    let parseData= await data.json()
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false
    })
  }


  render() {
    return (
      <div className='container my-4'>
        <h1 className='text-center my-3'>Knews - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}     
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return<div className='col-md-4' key={element.url}>
              <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div>  
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div>
      </div>
    )
  }
}

export default News