// The root web page

import App, { Container } from 'next/app';
import Router from 'next/router';

import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';
import { trackPageView } from '../lib/googleAnalytics';
import NProgress from 'nprogress';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;

    return { pageProps };
  }

  componentDidMount() {
    Router.onRouteChangeStart = () => {
      NProgress.start();
    };

    Router.onRouteChangeComplete = url => {
      NProgress.done();

      try {
        //console.log(`the url ${url}`);

        window.gtag('config', 'UA-122837373-1', {
          page_location: url
        });
      } catch (error) {
        //console.log(error);
        // silences the error in dev mode
        // and/or if gtag fails to load
      }
      //trackPageView(url);
    };

    Router.onRouteChangeError = () => {
      NProgress.done();
    };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
