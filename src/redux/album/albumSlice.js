import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../constants/apiConstant";

const albumSlice = createSlice({
  //on lui donne un nom
  name: 'albums',
  //on doit initialiser les states (les valeurs par defaut)
  initialState: {
    albums : [], //on initialise un tableau vide pour stocker la futur liste d'albums
    loading: false,// on initialise le state loading à false pour pouvoir gérer l'attente des requetes asynchrone
  },
  //methode qui permet de remplir les states (mise en rayon)
  reducers: {
    setAlbums: (state, action)=>{
      state.albums = action.payload
    },
    setLoading: (state, action)=>{
      state.loading = action.payload
    },
  }
});

export const {setAlbums, setLoading} = albumSlice.actions;

//on crée la méthode qui permet de récupérer les données des albums de la BDD
export const fetchAlbums = () => async dispatch => {
  try {
    //on passe le state loading à true pour signifier qu'on attend une réponse
    dispatch(setLoading(true));

    const response = await axios.get(`${apiUrl}/alba?page=1&isActive=true`);
    //on set les données dans le state albums
    dispatch(setAlbums(response.data));
    //on repasse le state loading a false pour signifier qu'on a fini d'attendre
    dispatch(setLoading(false));
  } catch (error) {
    console.log(error);
    dispatch(setLoading(false));
  }
};

// On exporte notre reducer
export default albumSlice.reducer;