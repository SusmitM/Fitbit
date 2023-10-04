export const DeleteExerciseData = async (id) => {
    const apiUrl = `https://fitbit-backend.onrender.com/api/exercises/${id}`;
  
    const headers = {
      'Content-Type': 'application/json',
    };
  
    const options = {
      method: 'DELETE',
      headers: headers,
    };
  
    try {
      const response = await fetch(apiUrl, options);
      
      if (response.status === 204) {
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error Deleting Exercises:', error);
      return false;
    }
  };