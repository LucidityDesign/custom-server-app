import React from 'react'

export default class Error extends React.Component {
    static getInitialProps ({ res, err }, a, b, c) {
        const statusCode = (res) ? res.statusCode : ((err) ? err.statusCode : null)

        return { statusCode }
    }

    render () {
        return (
            <h1>ERROR</h1>
        )
    }
}
