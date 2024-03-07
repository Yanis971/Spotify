import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlbums } from '../../redux/album/albumSlice'
import { selectAlbumsData } from '../../redux/album/albumSelector'
import PageLoader from '../../components/Loader/PageLoader'
import { AiFillAlert } from "react-icons/ai";

const Home = () => {
  //on récupère le hook useDispatch de react-redux
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAlbums()) //permet de mettre à jour les states albums et loading de albumSlice
  }, [])

  //on récupère notre selector pour avoir accès au données
  const { albums, loading } = useSelector(selectAlbumsData);
  const dataAlbum = albums['hydra:member']
  console.log('data albums', loading);

  return (
    <div>Home <AiFillAlert /></div>
  )
}

export default Home