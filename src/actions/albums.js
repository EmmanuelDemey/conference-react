import axios from "../api";

export const LOAD_ALBUMS = "LOAD_ALBUMS";
export const LOAD_ALBUM = "LOAD_ALBUM";
export const LIKE_ALBUM = "LIKE_ALBUM";
export const DISLIKE_ALBUM = "DISLIKE_ALBUM";

export const loadAlbums = () => {
  return dispatch => {
    axios
      .get(`artists/0kbYTNQb4Pb1rPbbaF0pT4/albums?album_type=album&limit=50`)
      .then(res => {
        dispatch({
          type: LOAD_ALBUMS,
          payload: res.data.items.map(album => {
            return {
              ...album,
              like: false
            };
          })
        });
      });
  };
};

export const likeAlbum = id => {
  return {
    type: LIKE_ALBUM,
    payload: id
  };
};

export const dislikeAlbum = id => {
  return {
    type: DISLIKE_ALBUM,
    payload: id
  };
};
