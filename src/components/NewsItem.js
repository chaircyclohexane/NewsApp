import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
    static propTypes = {

    }

    render() {
        let { title, description, imageURL, newsURL, author, onTime,source } = this.props;
        return (
            <>
                <div className="card" style={{ width: "18rem" }}>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <img src={imageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsURL} className="btn btn-sm btn-dark">Go somewhere</a>
                        <footer className="blockquote-footer my-3">{author} <cite title="Source Title">on {onTime}</cite></footer>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
