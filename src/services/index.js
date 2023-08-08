  import {transformObjectKeys} from "./dataOperations"
  function extractElementsInRange(obj, start, end) {
    const keys = Object.keys(obj);
    const extractedElements = {};
    for (let i = start; i < end; i++) {
      const key = keys[i];
      extractedElements[key] = obj[key];
    }
    const renamedElements = transformObjectKeys(extractedElements);
    return renamedElements;
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
             key !== "name" &&
             key !== "country" &&
             key !== "dt" &&
             key !== "1h" &&
             key !=="all"
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
    getData: function({from,to,city}) {
      // lat={lat}&lon={lon}&dt={time}
       return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=b4d2fcaa3980ad9354201f7a7782a3dd`)
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
          //console.log(result)
            const returnIt = {
                data: setData(result, from, to),
                count: Object.keys(result).length
            }
            return returnIt
        })
    }
}

export default service;