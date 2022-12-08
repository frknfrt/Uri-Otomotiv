import React, { useEffect } from 'react';



function App() {
  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin
      // *default, no-cache, reload, force-cache, only-if-cached
      // include, *same-origin, omit
      headers: {
        
        'Access-Control-Allow-Origin':"*",
        'Content-Type': 'application/json'
       // 'Content:-Type': 'application/x-www-form-urlencoded',
      },
   body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response; // parses JSON response into native JavaScript objects
  }
  

  useEffect(() => {
 
postData('https://app.spechy.com:8080/api/auth/register',
 { namesurname:"Ahmetfiratt",
   email:"Ahmetfirat@gmail.com",
   password:"P@ssword",
   phone:"05313525251" 
})
.then(data => {
  console.log(data); // JSON data parsed by `data.json()` call
});
  },[]);


  return (
    <div>
  Selamun Aleyküm
    </div>
  );
}

export default App;
