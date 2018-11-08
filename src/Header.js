import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = { menuOpen: false }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState({
      menuOpen: !this.state.menuOpen
    },() => {
      if (this.state.menuOpen === true) {
        document.body.classList.add('lockScroll')
      }
      // else if (document.body.querySelector('.previewModal') !== null && document.body.querySelector('.previewModal').className === 'previewModal hack slideOutRight') {
      //   // console.log('HACK');
      //   document.body.classList.remove('lockScroll')
      // }
       else if (document.body.querySelector('.previewModal') !== null) {
        document.body.classList.add('lockScroll')
      } else {
        document.body.classList.remove('lockScroll')
      }
    })

    if (e.target.nodeName === 'LI') {
      if (document.body.querySelector('.previewModal') !== null) {
        // hack to handle closing modal without state
        document.body.querySelector('.previewModal').classList.add('hack')
        document.body.querySelector('.previewModal').classList.remove('slideInRight')
        document.body.querySelector('.previewModal').classList.add('slideOutRight')
        document.body.querySelector('.menu').classList.remove('slideOutLeft')
        document.body.querySelector('.menu').classList.add('slideInLeft')
      }
    }
  }

  sections() {
    let sections = this.props.sections
    let sectionsList = []

    for (let i = 0; i < sections.length; i++) {
      sectionsList.push(
        <AnchorLink
        href={`#s` + i}
        onClick={ this.handleClick }
        key={ i }
        >
          <li>{ sections[i].name }</li>
        </AnchorLink>
      )
    }

    return sectionsList
  }

  render() {

    // let name = this.props.name
    let hamburgerClass = "hamburger hamburger--collapse"
    // let sections = this.props.sections

    return(
      <div>
        <header
          className={ this.state.menuOpen ? 'menuOpen' : null }
          >

          <div className="placeholder"></div>

          <h1
            className={ this.state.menuOpen ? 'venue hidden'  : 'venue' }
            >
              {/* { name } */}
              <img src="/cromwell_st_logo.png" alt="Cromwell St"/>
          </h1>

          <div className="placeholder"></div>

          <div
            className={ this.state.menuOpen ? hamburgerClass + ' is-active' : hamburgerClass }
            onClick={ this.handleClick }>
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>

        </header>

        { this.state.menuOpen ?
          <div className="linksWrapper">
            <ul className="links">

              <li><img src="/cromwell_st_white.png" alt="Cromwell St"/></li>

              { this.sections() }

            </ul>
          </div>
          :
          null
        }
      </div>
    )
  }
}

export default Header;
