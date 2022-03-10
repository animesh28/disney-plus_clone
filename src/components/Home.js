import React, { useEffect } from 'react'
import styled from 'styled-components';
import homeBg from '../assets/images/home-background.png'
import ImgSlider from './ImgSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommend from './Recommend';
import Trending from './Trending';
import Viewers from './Viewers';
import { useDispatch, useSelector } from 'react-redux'
import db from './firebase'
import { setMovies } from '../features/movie/movieSlice'
import { selectUserName } from '../features/user/userSlice'
import { collection, getDocs } from "firebase/firestore";

function Home() {
  const dispatch = useDispatch()
  const userName = useSelector(selectUserName)

  let recommended = []
  let newDisney = []
  let originals = []
  let trending = []

  useEffect(async () => {
    const moviesRef = collection(db, "movies");
    const snapshot = await getDocs(moviesRef);
    snapshot.docs.map(doc => {
      switch(doc.data().type) {
        case 'recommend':
          recommended = [...recommended, {id: doc.id, ...doc.data()}]
          break;
        case 'new':
          newDisney = [...newDisney, {id: doc.id, ...doc.data()}]
          break;
        case 'original':
          originals = [...originals, {id: doc.id, ...doc.data()}]
          break;
        case 'trending':
          trending = [...trending, {id: doc.id, ...doc.data()}]
          break;
      }
    })
  
    dispatch(
      setMovies({
        recommended: recommended,
        newDisney: newDisney,
        originals: originals,
        trending: trending,
      })
    )
  }, [userName])
  

  return (
    <Container>
        <ImgSlider/>
        <Viewers/>
        <Recommend/>
        <NewDisney/>
        <Originals/>
        <Trending/>
    </Container>
  )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &::before {
        content: '';
        background: url(${homeBg}) center center / cover no-repeat fixed;
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`

export default Home