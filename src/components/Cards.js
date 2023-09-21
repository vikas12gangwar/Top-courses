import React ,{useState} from 'react'
import Card from './Card'

const Cards=(props)=> {
  let courses=props.courses.data;
  let category=props.category;
  const[likedCourses,setLikedCourses]=useState([]);
  // console.log("vikas",courses);


    const getcourses=()=>{
      
      
      if(category==="All"){
        let allCourses=[];
        Object.values(courses).forEach(array=>{
            array.forEach(course=>{
              allCourses.push(course);
          })
        })
        return allCourses;

      }
      else{
        return(courses[category]);


      }
        
       

    }
    // getcourses();
   return (
    <div className='flex flex-wrap gap-4 mb-4  justify-center'  > 
      {
      getcourses().map((courses)=>{
      return(<Card key={courses.id} course={courses} likedCourses={likedCourses}  setLikedCourses={setLikedCourses}/>)  
      })
       
      }
    </div>
  )
}
export default  Cards;