import axios from "axios";

const getNewsItemHelper=async()=>{
   
        const response = await axios.get(
          "/api/news"
        );
      console.log(response.data);
      return {
        news:response.data
      }
    
}
const getNewsItemHelperById = async (id) => {
  const response = await axios.get(
    `/api/news/${id}`
  );
  console.log(response.data);
  return {
    newsItem: response.data,
  };
};
export const getNewsItems=()=>{
    return{
        type:"get_news",
        payload:getNewsItemHelper()
    }
}
export const getNewsItemsById = (id) => {
  return {
    type: "get_news_by_id",
    payload: getNewsItemHelperById(id),
  };
};