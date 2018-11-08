import React from 'react'
import ReactDom from 'react-dom'
import PreviewItem from './PreviewItem.js'
import Swipe from 'react-easy-swipe'

class MenuItem extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      previewOpen: false,
      id: null
    }

    this.handleClick = this.handleClick.bind(this)
    this.onSwipeRight = this.onSwipeRight.bind(this)
  }

  handleClick(e) {
    let id = e.target.id

    if (document.body.querySelector('.previewModal') !== null) {
      document.body.querySelector('.previewModal').classList.remove('slideInRight')
      document.body.querySelector('.previewModal').classList.add('slideOutRight')
      document.querySelector('.menu').classList.add('slideInLeft')
      setTimeout(() => {
        this.setState(
          {
            previewOpen: !this.state.previewOpen,
            id: id
          }, () => {
            document.querySelector('.menu').classList.toggle('slideOutLeft')
            if (this.state.previewOpen) {
              document.body.classList.add('lockScroll')
            } else {
              document.body.classList.remove('lockScroll')
            }
          }
        )
      }, 200)
    } else {
      this.setState(
        {
          previewOpen: !this.state.previewOpen,
          id: id
        }, () => {
          document.body.classList.toggle('lockScroll')
          document.querySelector('.menu').classList.toggle('slideOutLeft')
        })
    }
  }

  trimDescription(d) {
    let description = d

    if ( description.length > 60) {
      description = description.substring(0,60).trim() + "..."
      return description
    } else {
      return description
    }
  }

  trimName(n) {
    let name = n

    if ( name.length > 30) {
      name = name.substring(0,30).trim() + "..."
      return name
    } else {
      return name
    }
  }

  onSwipeRight() {
    document.body.querySelector('.previewModal').classList.remove('slideInRight')
    document.body.querySelector('.previewModal').classList.add('slideOutRight')
    document.querySelector('.menu').classList.add('slideInLeft')
    setTimeout(() => {
      this.setState(
        {
          previewOpen: !this.state.previewOpen
        }, () => {
          document.querySelector('.menu').classList.toggle('slideOutLeft')
          if (this.state.previewOpen) {
            document.body.classList.add('lockScroll')
          } else {
            document.body.classList.remove('lockScroll')
          }
        }
      )
    }, 200)
  }

  render() {

    let id = this.props.id
    let name = this.props.name
    let trimmedName = this.trimName(name)
    let price = this.props.price
    let tags = this.props.tags
    let image = this.props.image
    let description = this.props.description
    let trimmedDescription = this.trimDescription(description)
    let style = {
      backgroundImage: 'url(' + image + ')',
      backgroundSize: 'cover'
    }

    return(
      <div>
        {/* if menu item is even or odd, for alternating cards */}
        { id % 2 === 0 ?
          <div
            className="menuItem"
            onClick={ this.handleClick }
            id={ id }
            >

            <div
              className="leftBox"
              style = { style }
              id={ id }
              >
            </div>

            <div className="rightBox" id={ id }>
              <h3 className="title" id={ id }>{ trimmedName }</h3>

              <p className="bodyText" id={ id }>{ trimmedDescription }</p>

              <div className="info" id={ id }>
                <span className="price" id={ id }>{ price }</span>
                <span className="tags" id={ id }>{ tags }</span>
              </div>
            </div>

            { this.state.previewOpen ?
              ReactDom.createPortal(
                <Swipe
                  onSwipeRight = { this.onSwipeRight }
                >
                  <PreviewItem
                  previewOpen = { this.state.previewOpen }
                  id = { this.state.id }
                  name = { name }
                  price = { price }
                  tags = { tags }
                  image = { image }
                  description = { description }
                  style = { style }
                />
              </Swipe>
              , document.querySelector('.App'))
            :
              null
            }

          </div>
        :
          <div
            className="menuItem"
            onClick={ this.handleClick }
            id={ id }
            >

            <div
              className="rightBox"
              style = { style }
              id={ id }
              >
            </div>

            <div className="leftBox" id={ id }>
              <h3 className="title" id={ id }>{ trimmedName }</h3>

              <p className="bodyText" id={ id }>{ trimmedDescription }</p>

              <div className="info" id={ id }>
                <span className="price" id={ id }>{ price }</span>
                <span className="tags" id={ id }>{ tags }</span>
              </div>
            </div>

            { this.state.previewOpen ?
              ReactDom.createPortal(
                <Swipe
                  onSwipeRight = { this.onSwipeRight }
                >
                  <PreviewItem
                  previewOpen = { this.state.previewOpen }
                  id = { this.state.id }
                  name = { name }
                  price = { price }
                  tags = { tags }
                  image = { image }
                  description = { description }
                  style = { style }
                />
              </Swipe>
              , document.querySelector('.App'))
            :
              null
            }

          </div>
        }
      </div>
    )
  }
}

export default MenuItem;
