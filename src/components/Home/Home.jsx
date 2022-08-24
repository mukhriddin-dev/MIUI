import React, { useState, useEffect } from 'react';
import API from "../api/API";
import ActionAreaCard from "../UI/Card/Card";
import BasicTextFields from "../UI/Input/Input"
import CircularProgressWithLabel from "../UI/Progress/Spinner";
const Home = () => {

   const [user, setUser] = useState([]);
   const [loading, setLoading] = useState(false);

   const { data } = API;

   const fetchData = async () => {
      try {
         setLoading(false)
         const response = await data.getUser();
         console.log(response);
         setUser(response.data.data);
         setLoading(true)
      } catch (e) {
         console.log("bu xato" + e);
      }
   };

   useEffect(() => {
      fetchData();
   }, []);



   if(user.length===0){
      return <CircularProgressWithLabel/>
   }


   return (
      <>





         <div className="grid-continer">

           



            { loading ? 
               user.map((item) => {
                  return <ActionAreaCard key={item.id} data={item} />
               }) 
               
               : 
               
               <CircularProgressWithLabel/>

            }
         </div>
      </>
   );
};

export default Home;