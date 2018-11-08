import React from 'react'

class Section extends React.Component {

  render() {

    let name = this.props.name
    let id = this.props.id

    return(
      <h2 className="section" id={ id }>{ name }</h2>
    )
  }
}

export default Section;
