// create and export middleware function here

export const loggerMiddleware = (store) => {
  return (next) => {
    return (action) => {
      console.log(store.getState());
      next(action);

    }
  }
}
