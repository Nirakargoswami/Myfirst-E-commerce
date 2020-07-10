

const getdata = fetch => {
return fetch("https://swapi.dev/api/people")
.then( responce => responce.json())
.then( data => {
return {
  count: data.count,
  result:data.results
}


})


}

 ;
  


 const Secondmethod_DATA = async (fetch) => {
const DATA = await fetch("https://swapi.dev/api/people")
const responce = await DATA.json()
return {
  count: responce.count,
  result : responce.result
}

 }





  module.exports = {
    Secondmethod_DATA,
    getdata,
  };