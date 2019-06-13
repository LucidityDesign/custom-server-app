import React from 'react'

export default class a extends React.Component {
  static async getInitialProps (a) {
    return { stars: 5 }
  }

  render () {
    return (<div>
      <span>Hello world</span>
      { false && <img src="__404__" alt="" /> }
    </div>)
  }
}
