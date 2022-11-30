import React, { useEffect } from "react";
import styled from "styled-components";
import db from "../firebase";
import { collection, getDocs } from 'firebase/firestore/lite';
import ImgSilder from "./imgSilder";
import Movies from "./movies";
import Viewers from "./viewers";


const Home = () => {
  useEffect(()=>{
    console.log(getSnap(db))
  },[])
    
  async function getSnap(db) {
    const movies = collection(db,'movies');
    console.log('movie',movies)
    const moviesSnap = await getDocs(movies);
    console.log('moviesSnap',moviesSnap)
    const movieList = moviesSnap.docs.map(doc => {
      return {id: doc.id, ...doc.data};
    });
    console.log(movieList);
    

}


  return (<Container>
    <ImgSilder />
    <Viewers />
    <Movies />
  </Container>
  )
};

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
     background: url("/images/home-background.png") center center / cover no-repeat fixed;
     content: "";
     position: absolute;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     z-index: -1; 
  }
`;
