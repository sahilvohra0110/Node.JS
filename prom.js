async function getProducts() {
    try {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  getProducts();