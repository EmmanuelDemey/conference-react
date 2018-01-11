import { LOAD_ALBUMS, LIKE_ALBUM, DISLIKE_ALBUM } from "../actions/albums";

// @flow
type ActionPayload = {
  type: string,
  payload: any
};
export function albums(state: any = {}, action: ActionPayload) {
  switch (action.type) {
    case LOAD_ALBUMS:
      return action.payload.reduce((acc, album) => {
        return {
          ...acc,
          [album.id]: {
            ...album
          }
        };
      }, {});
    case LIKE_ALBUM:
    case DISLIKE_ALBUM:
      const album = state[Object.keys(state).find(id => id === action.payload)];
      return {
        ...state,
        [album.id]: {
          ...album,
          like: action.type === LIKE_ALBUM
        }
      };
    default:
      return state;
  }
}
