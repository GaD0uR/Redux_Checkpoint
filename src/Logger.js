const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("dispatching", action);
      let result = next(action);
      console.log("next state", store.getState());
      return result;
    };
  };
};

export default logger;
