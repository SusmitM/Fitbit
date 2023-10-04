export const GetFoodData=async()=>{
    try {
        const response = await fetch("https://fitbit-backend.onrender.com/api/food");
        if (response.status === 200) {
          const data = await response.json();
          return data?.data
         
         
        }
      } catch (error) {
        console.error(error);
      }

}