const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      setTimeout(() => {
        resolve("Hey!");
      }, 2000);
    } else {
      const error = new Error("Whooops!");
      reject(error);
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
