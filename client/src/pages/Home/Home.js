import React ,{useEffect} from "react";
import { useDispatch } from "react-redux";
import Carrosell from "../../components/Carrosell/Carrosell";
import { currentUser } from "../../JS/action/UserAction";
import CategoryList from "../CategoryList/CategoryList";
import "./Home.css";






function Home() {
const dispatch=useDispatch()
  
useEffect(() => {
  dispatch(currentUser())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="grid">
      <div className="carrosell">
        <Carrosell />
      </div>
        <CategoryList/>
    </div>
  );
}

export default Home;
