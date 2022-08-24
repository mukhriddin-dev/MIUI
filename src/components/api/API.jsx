import axios from "axios";

const BASE_URL="http://localhost:8080/";


const CATEGORY_URL="http://localhost:8080/category";
const NEWS_URL="http://localhost:8080/news";
const USER_URL="https://reqres.in/api/users"


const UI={

getCategory: ()=> axios.get(CATEGORY_URL),
addCategor:(params)=>axios.post(CATEGORY_URL, params)

}  


const data={

   getNews: ()=> axios.get(NEWS_URL),
   getUser: ()=> axios.get(USER_URL)

}





export default { UI , data };




