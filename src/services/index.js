

// const service = {
//     getData:  () => {
//          fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b4d2fcaa3980ad9354201f7a7782a3dd")
//         .then ( res => res.json())
//           .then ((data) => {
//             return {
//                 count: data.length,
//                 data: data
//             }
//           })
//         }
// }

// const service = function() {
//      fetch("https://ghibliapi.herokuapp.com/people")
//     .then(response => {
//     return response.json();
// })} ;

  // useEffect(() => {
  //   fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b4d2fcaa3980ad9354201f7a7782a3dd")
  //   .then(res => res.json())
  //   .then(data =>  setWeatherData(data))
  //  }, []);
  function extractElementsInRange(obj, start, end) {
    const keys = Object.keys(obj);
    const extractedElements = {};
  
    for (let i = start; i < end; i++) {
      const key = keys[i];
      extractedElements[key] = obj[key];
    }
  
    return extractedElements;
  }
  function setData(data, from, to){
    const stack = [data];
    const newObj = {};
    while (stack?.length > 0) {
      const currentObj = stack.pop();
      Object.keys(currentObj).forEach(key => {
         if (typeof currentObj[key] !== "object" &&
             key!== "id" &&
             key !== "cod" &&
             key !== "type" && 
             key !== "base" &&
             key !== "icon" &&
             key !== "dt"   
           ) {
            newObj[key] = currentObj[key]
            }
        if (typeof currentObj[key] === 'object' && currentObj[key] !== null) {
          stack.push(currentObj[key]);
        }
      });
    }
    return extractElementsInRange(newObj, from, to)
  }

const service = {
    getData: function({from,to}) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b4d2fcaa3980ad9354201f7a7782a3dd")
        .then( function(response) {
            if(response.status !== 200) {
                console.log("fetching issue" + response.status);
                return
            }
           
            else {
                return response.json();
              }
           })
        .then( function(result) {
            const returnIt = {
                data: setData(result, from, to),
                count: Object.keys(result).length
            }
            console.log(returnIt)
            return returnIt
        })
    }
}

export default service;