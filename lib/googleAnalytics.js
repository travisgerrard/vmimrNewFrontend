function trackPageView(url) {
  try {
    console.log(`the url ${url}`);

    window.gtag('config', 'UA-122837373-1', {
      page_location: url
    });
  } catch (error) {
    console.log(error);

    // silences the error in dev mode
    // and/or if gtag fails to load
  }
}
