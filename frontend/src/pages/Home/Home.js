import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ReactLoading from 'react-loading'
import { useNavigate } from 'react-router-dom'

import './Home.css';
import { getAllPhotos, like } from '../../slices/photoSlice';
import PhotoItem from '../../components/PhotoItem';
import LikeContainer from '../../components/LikeContainer';

const Home = () => {
  const Navigate= useNavigate()
  const {loading, photos} = useSelector( state => state.photo)
  console.log(photos)
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllPhotos())
  },[like])
  

  if(photos.length == 0) return(
    <h1> Ainda não há fotos publicadas </h1>
  )  

if(loading) return(
  <ReactLoading className='loading' type='bubbles'  color='#0096f6' height={100} width={100} />
)
return(
  
    <div id='photo'>
         <h1> ola </h1> 
    </div>

)

};

export default Home;
