import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "./album/albumSlice";

const store = configureStore({
  reducer: {
  // Ajouter les futurs reducers ici
  albums: albumReducer,
  }
})

export default store