// @flow
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./album.css";

type AlbumType = {
  name: string,
  images: Array<any>
};

type Props = {
  data: AlbumType,
  like: any
};

Album.defaultProps = {
  data: {}
};

Album.propTypes = {
  data: PropTypes.object.isRequired,
  like: PropTypes.func.isRequired
};

function Album(props: Props) {
  const { data: album, like } = props;
  const className = album.like ? "like" : "";
  return (
    <button className={className} onClick={() => like(album)}>
      <h2>{album.name}</h2>
      <img src={album.images[1].url} alt={album.name} />
    </button>
  );
}

export default Album;
