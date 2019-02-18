import React from "react";
import { Route } from "react-router-dom";
import { FilmList } from "../components";
import { fetchTemplate } from "../fetch";

export default class Main extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    fetchTemplate("/trending/movie/week").then(({ results }) =>
      this.setState({ trends: results, loading: false })
    );
  }

  render() {
    const { loading, trends } = this.state;
    return (
      <main className="wrapper">
        <Route path="/popular" render={
          () => loading ? 'Loading...' : <FilmList films={trends} />
        } />
        <Route path="/film/:filmId" />
      </main>
    );
  }
}
