const filteredGamesReducer = (state = [], action) => {
    // If the type is 'FILTEREDGAMES', return the payload
    if (action.type === "FILTEREDGAMES") {
      return action.payload;
    }
  
    // Return the state by default
    return state;
  };
  
  export default filteredGamesReducer;
  