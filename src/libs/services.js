import { GraphQLClient, gql } from 'graphql-request';
import config from './config';

export const getBooks = async () => {
  const client = new GraphQLClient(config.GRAPHCMS.CONTENT_API);
  client.setHeader('authorization', `Bearer ${config.GRAPHCMS.PRIVATE_TOKEN}`);
  const queryItems = gql`
    query MyQuery {
      books(orderBy: bookOrder_ASC, stage: PUBLISHED) {
        id
        bookOrder
        title
        imageUrl
      }
    }
    `;
  return client.request(queryItems);
};

export const deleteBook = async (id) => {
  const client = new GraphQLClient(config.GRAPHCMS.CONTENT_API);
  client.setHeader('authorization', `Bearer ${config.GRAPHCMS.PRIVATE_TOKEN}`);
  const queryItems = gql`
      mutation MyMutation {
        unpublishBook(where: {id: "${id}"}, from: PUBLISHED){
          id
        }
      }
    `;
  return client.request(queryItems);
};

export const updateOrderById = async (id, order = 0) => {
  const client = new GraphQLClient(config.GRAPHCMS.CONTENT_API);
  client.setHeader('authorization', `Bearer ${config.GRAPHCMS.PRIVATE_TOKEN}`);
  const queryItems = gql`
      mutation MyMutation {
        updateBook(data: {bookOrder: ${order}}, where: {id: "${id}"}) {
          id
        }        
        publishBook(where: {id: "${id}"}, to: PUBLISHED) {
          id
        }
      }
    `;
  return client.request(queryItems);
};
