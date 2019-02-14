import withApollo from 'next-with-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
import { ApolloLink, Observable } from 'apollo-link';
import { endpoint, prodEndpoint } from '../config';
import { createUploadLink } from 'apollo-upload-client';

function createClient({ headers }) {
  return new ApolloClient({
    link: createUploadLink({
      uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
      fetchOptions: {
        credentials: 'include'
      },
      headers
    }),

    cache: new InMemoryCache()
  });
}

export default withApollo(createClient);

// import withApollo from 'next-with-apollo';
// import ApolloClient from 'apollo-boost';
// import { endpoint, prodEndpoint } from '../config';

// function createClient({ headers }) {
//   console.log(headers);

//   return new ApolloClient({
//     uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
//     request: operation => {
//       operation.setContext({
//         fetchOptions: {
//           credentials: 'include'
//         },
//         headers
//       });
//     }
//   });
// }

// export default withApollo(createClient);
