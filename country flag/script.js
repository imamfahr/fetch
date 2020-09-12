



const getDataCountry = async () => {
    try {
      let response = await fetch(
        `https://restcountries.eu/rest/v2/all`
      );
      let data = await response.json();
      console.log("countrydata", data);
      // appendchild to add new table row

      callCountryData(data)

      let tbl = document.getElementById('result-set');

      for (let i = 0; i<data.length; i++){
       let tblBody = document.createElement('tbody');
       let row = document.createElement('tr');
       row.innerHTML=`
      <td>
      ${data[i].name}      
      </td>
      <td>
      ${data[i].capital}         
      </td>
      <td>
      ${data[i].region}         
      </td>
      <td>
      <img src="${data[i].flag}" style="width:200px; height:100px" alt="">
      </td>
      `
      //  row.appendChild(document.createTextNode(`${data[i].name}`));
      //  row.appendChild(document.createTextNode(`${data[i].capital}`));
      //  row.appendChild(document.createTextNode(`${data[i].region}`));
      //  row.appendChild(document.createTextNode(`${data[i].flag}`));
       tblBody.appendChild(row);
       tbl.appendChild(tblBody);
      }


    }
     catch {
      console.log("error bos");
    }
  };

  
  
  countryData = getDataCountry(1);
  console.log(countryData)
  
  
  function callCountryData(data){
    console.log("countrydata", data)
  }


