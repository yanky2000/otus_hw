const { ApolloServer, gql } = require("apollo-server");
const { moovies, users } = require("./fixtures");
const uuidv1 = require("uuid/v1");

const typeDefs = gql`
  type Moovie {
    id: Int!
    title: String!
    genre: String
    price: Float
  }

  type Order {
    id: ID!
    moovies: [Moovie]
    buyer: User!
  }

  type User {
    id: Int!
    username: String!
  }

  type Query {
    moovies: [Moovie]
    orders: [Order]
    getOneMoovie(id: Int): Moovie
  }

  type OrderError {
    message: String
  }

  type Mutation {
    addOrder(buyerId: Int, moovieId: Int): Order
    deleteOrder(orderId: ID): DeleteOrderResponseType
  }

  union DeleteOrderResponseType = Order | OrderError
`;

const orders = [];

const resolvers = {
  DeleteOrderResponseType: {
    __resolveType(obj) {
      if (obj.id) return "Order";
      if (obj.message) return "OrderError";
    }
  },

  Query: {
    moovies: () => moovies,
    orders: () => orders,
    getOneMoovie: (parent, { id }) => {
      return moovies.find(moovie => moovie.id === id);
    }
  },

  Mutation: {
    addOrder(parent, { buyerId, moovieId }) {
      const buyer = users.find(user => user.id === buyerId);
      if (!buyer) throw new Error(`cannot find user with ID:${buyerId}`);

      const moovieToAdd = moovies.find(moovie => moovie.id === moovieId);

      const newOrder = {
        id: uuidv1(),
        buyer,
        moovies: [moovieToAdd]
      };

      orders.push(newOrder);

      return newOrder;
    },

    deleteOrder(parent, { orderId }) {
      let orderToRemove;
      let _index;
      if (!orders.length) return { message: `No order with id:${orderId}` };

      for (let i = 0; i < orders.length; i++) {
        if (orders[i].id === orderId) {
          orderToRemove = orders[i];
          _index = i;
          break;
        }
      }

      if (!orderToRemove) return { message: `No order with id:${orderId}` };

      const res = orders.splice(_index, 1);
      return res[0];
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
