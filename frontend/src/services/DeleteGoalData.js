export const DeleteGoalData = async (id) => {
    const apiUrl = `https://fitbit-backend.onrender.com/api/goals/${id}`;
  
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
      console.error('Error Deleting Goal:', error);
      return false;
    }
  };