import React from "react";
import { Route } from "react-router-dom";
import { FilmList } from "../components";
import { fetchTemplate } from "../fetch";

const useTrends = endpoint => {
  const [state, setState] = React.useState({ loading: true });
  const { loading, trends } = state;
  React.useEffect(() => {
    fetchTemplate("/trending/movie/" + endpoint).then(({ results }) =>
      setState({ trends: results, loading: false })
    );
  }, [endpoint]);
  return state;
};

const Main = props => {
  const [activeTab, setActiveTab] = React.useState("week");
  const { loading, trends } = useTrends(activeTab);
  return (
    <main className="wrapper">
      <button onClick={() => setActiveTab("week")}>week</button>
      <button onClick={() => setActiveTab("day")}>day</button>
      <Route
        path="/popular"
        render={() => (
          loading
            ? "Loading..."
            : <FilmList films={trends} />
          )
        }
      />
      <Route path="/film/:filmId" />
    </main>
  );
};

export default Main;
