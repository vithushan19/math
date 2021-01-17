import React, { useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useSubscription,
  gql,
  useMutation,
} from "@apollo/client";
import { WebSocketLink } from "apollo-link-ws";
import Race from "./../components/Race";
import Navbar from "./../components/Navbar";

//https://vithushan.auth0.com/login?client=R8d5SngeS7x4F2P4qXe0NiyEY2w5uaJd&protocol=oauth2&response_type=token%20id_token&redirect_uri=http://localhost:3000/callback&scope=openid%20profile

const link = process.browser
  ? new WebSocketLink({
      uri: `ws://localhost:4000/`,
      options: {
        reconnect: true,
      },
    })
  : null;

const client = new ApolloClient({
  link,
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const GET_MESSAGES = gql`
  subscription {
    messages {
      id
      content
      user
    }
  }
`;

const ADD_USER = gql`
  mutation($user: String!, $content: String!) {
    postMessage(user: $user, content: $content)
  }
`;

const DELETE_USER = gql`
  mutation($id: ID!) {
    deleteMessage(id: $id)
  }
`;

const Messages = ({ user }) => {
  const { data } = useSubscription(GET_MESSAGES);
  if (!data) {
    return null;
  }
  return JSON.stringify(data);
};

const JoinButton = () => {
  const [addUser] = useMutation(ADD_USER);
  const onClick = () => {
    console.log("Join");
    addUser({
      variables: { user: "Player", content: "0" },
    });
  };
  return (
    <div>
      <button onClick={onClick}>Join Now</button>
    </div>
  );
};

const LeaveButton = () => {
  const [deleteUser] = useMutation(DELETE_USER);
  const onClick = () => {
    console.log("Leave");
    deleteUser({ variables: { id: 0 } });
  };
  return (
    <div>
      <button onClick={onClick}>Leave Now</button>
    </div>
  );
};

const Dash = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <Navbar/>
        <Race />
        <JoinButton />
        <LeaveButton />
        <Messages user="Vithushan" />
      </div>
    </ApolloProvider>
  );
};

export default Dash;
