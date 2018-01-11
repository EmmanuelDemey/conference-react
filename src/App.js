import React, { Component } from "react";
import "./App.css";
import Album from "./album/album";
import { loadAlbums, dislikeAlbum, likeAlbum } from "./actions/albums";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    albums: Object.keys(state.albums).map(id => state.albums[id])
  };
};
const mapDispatchToProps = {
  loadAlbums,
  like(album) {
    if (album.like) {
      return dislikeAlbum(album.id);
    } else {
      return likeAlbum(album.id);
    }
  }
};

class App extends Component {
  static defaultProps = {
    albums: []
  };
  static propTypes = {
    albums: PropTypes.arrayOf(PropTypes.object)
  };

  componentDidMount() {
    this.props.loadAlbums();
  }
  render() {
    const albumsList = this.props.albums.map(album => (
      <Album data={album} like={this.props.like} />
    ));

    return (
      <div className="App">
        <header>
          <h1> My Spotify Music - Miles Davis</h1>
        </header>
        <main>{albumsList}</main>
        <footer>
          Ceci est l'application de démo pour présenter React @EmmanuelDemey
        </footer>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
