//Hans, Fernanda y Francisca
//#1 ES6 todo
//#2
const get_albumes = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
  //#3
    try {
      const datos = await fetch(url);
      const albumes = await datos.json();
  //#4    
      console.log(albumes.slice(0, 20));
    } catch (error) {
      console.log(error);
    }
  };
  
  get_albumes();
