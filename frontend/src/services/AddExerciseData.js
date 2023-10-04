export const AddExerciseData=async (data)=>{
    const apiUrl = 'https://fitbit-backend.onrender.com/api/exercises';

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
      console.error('Error creating exercise:', error);
     
    }
  }
  

