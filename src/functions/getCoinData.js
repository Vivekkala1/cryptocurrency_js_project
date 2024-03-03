import axios from "axios";

export const getCoinData=(id,setIsLoading)=>{
   const myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("ERROR>>>", error);
      setIsLoading(false)
    });

    return myData;
}