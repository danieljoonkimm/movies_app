const Reducer = (state, action) => {
  console.log('state: ', state)
  console.log('action: ', action)
  switch (action.type) {
      case 'SEARCH_TEXT':
          return {
              ...state,
              text: action.payload
          };
      default:
          return state;
  }
};

export default Reducer;