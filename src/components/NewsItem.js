import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, img_url, news_url, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: 1 }}>
            {source}
          </span>
          <img src={!img_url ? "https://scitechdaily.com/images/Webb-Reveals-Intricate-Networks-of-Gas-and-Dust.jpg" : img_url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}</small></p>
            <a rel="noreferrer" href={news_url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
