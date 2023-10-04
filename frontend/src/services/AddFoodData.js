export const AddFoodData=async (data)=>{
    const apiUrl = 'https://fitbit-backend.onrender.com/api/food';

    const headers = {
      'Content-Type': 'application/json',
    };
    const requestBody = JSON.stringify(data);
  
    const options = {
      method: 'POST',
      headers: headers,
      body: requestBody,
    };
  
    try {
      const response = await fetch(apiUrl, options);
      if(response.status===201){
        return true
      }
      return false
    } catch (error) {
      console.error('Error creating food:', error);
     
    }
  }
  

