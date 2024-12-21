import React,{useState} from "react";
import './Home.css';

import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

const Home=()=>{
  const [category,setcategory] = useState('All')
  return(
    <div>
      <div>
      <Header/>
      <ExploreMenu category={category} setcategory={setcategory}/>
       <FoodDisplay category={category}/>
      </div>
       </div>
  )
} 
export default Home;