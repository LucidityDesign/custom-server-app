import React from 'react'
import App, { Container } from 'next/app'

export default class NextApp extends App {

    static async getInitialProps ({ Component, ctx }) {
        const
            { asPath, query, store, isServer, req } = ctx,
            pageProps = {

                // Call page-level getInitialProps
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
            }
        console.log('pageProps', pageProps)

        return { pageProps }
    }

    render () {
        const { Component, pageProps, store } = this.props

        return (
            <Container>
                <Component { ...pageProps } />
            </Container>
        )
    }
}
