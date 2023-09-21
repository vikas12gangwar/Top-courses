import React,{useEffect, useState} from "react";
import { apiUrl,filterData } from "./data";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Spinner  from "./components/Spinner";

import './index.css';
import { toast } from "react-toastify";

const App=()=>{

  const[courses,setCourses]=useState(null);
  const[loading ,setLoading]=useState(true);
  const[category,setCategory]=useState(filterData[0].title)

  async  function   fetchData(){
         setLoading(true);
        try{
          let  res=await fetch(apiUrl);
          let output=await res.json();
          setCourses(output);

  
        }
        catch(error){
        
          toast.error("Something went wrong")
  
        }
        setLoading(false);
      }

  
   useEffect(()=>{
 
    fetchData();
   },[])
  //  console.log("outputn",courses)
  return(
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
          <Navbar/>
      </div>
      <div className="">
        <div>
              <Filter filterData={filterData}
              category={category}
              setCategory={setCategory}/>
          </div>
          <div className="w-11/12   max-w-[1200px] mx-auto flex  flex-wrap justify-center items-center min-h-[50vh]">
              {
                loading ? (<Spinner/>):(   <Cards courses={courses} category={category} />)
              }
          </div>
      </div>
        

     
    </div>
  )
}

export default App;
