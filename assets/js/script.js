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
  
  //#5
  resolver3ss = ()=> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Información enviada');
      }, 3000);
    });
  }

  //#6
  async function asyncCall() {
    const resultado = await resolver3ss();
    const resultado2 = await get_albumes();
    console.log(resultado, resultado2);
  }
  
  asyncCall();
  get_albumes();
