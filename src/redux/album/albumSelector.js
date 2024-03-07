import { createSelector } from "@reduxjs/toolkit";

//on récupère les données du slice que l'on met dans des constantes
const selectAlbums = state => state.albums.albums;
const selectLoading = state => state.albums.loading;
//on crée le selector 
export const selectAlbumsData = createSelector(
  [selectAlbums, selectLoading],
  //on effectue une destructuration des données
  (albums, loading) => ({ albums, loading })

);