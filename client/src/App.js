import React from "react";
import { Container } from "react-bootstrap";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Import Pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Jar from "./pages/Jar";
import MyRocks from "./pages/MyRocks";
import GetInspired from "./pages/GetInspired";
import WhatAreBigRocks from "./pages/WhatAreBigRocks";
//Import Components
import Header from "./components/Header";
import Footer from "./components/Footer";

import Layout from "./components/MyJar/Layout";
import Form from "./components/MyJar/Form";
import JarHeader from "./components/MyJar/JarHeader";
import ListItem from "./components/MyJar/ListItem";
import Lists from "./components/MyJar/Lists";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <main>
            <Container>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/rocks" component={MyRocks} />
              <Route exact path="/jar" component={Jar} />
              <Route exact path="/getinspired" component={GetInspired} />
              <Route
                exact
                path="/whatarebigrocks"
                component={WhatAreBigRocks}
              />
            </Container>
          </main>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
