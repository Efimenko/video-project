import React from 'react'
import { fetchTemplate } from "../fetch";
import { IMAGE_PATH } from '../consts'

export default class Main extends React.Component {
  state = {
    loading: true
  }

  componentDidMount() {
    fetchTemplate("/trending/movie/week").then(({ results }) =>
      this.setState({ trends: results, loading: false })
    );
  }

  renderList = (data = []) => {
    return (
      <ul class="list">
        {data.map(({title, poster_path}) => (<li className="list__item">
          <div className="card">
            <img src={`${IMAGE_PATH}${poster_path}`} alt={`${title} poster`} className="card__image"/>
            <h2 className="card__title">{title}</h2>
          </div>
        </li>))}
      </ul>
    )
  }

  render() {
    const {loading, trends} = this.state
    return (<main className="wrapper">
      {loading ? 'Loading...' : this.renderList(trends)}
    </main>);
  }
}