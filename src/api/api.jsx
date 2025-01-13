// fetchproducts()
//this func available on other file when import
export const fetchProducts = async () => {//async()-->return promise, network request take time
  //handle errors-->try-catch  
  try {//true condition
    //fetch()-->make a http request to a url and return the list of products
    //await-->wait for the fetch request 
    const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();// convert the response into js object-->.json()
      return data;
    } catch (error) {//false condition-->error occurs during execution
      console.error('Error fetching products:', error);
      return [];
    }
  };
  
  export const fetchProductById = async (id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  };
  