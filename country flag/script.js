



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
       row.appendChild(document.createTextNode(`${data[i].name}`));
       row.appendChild(document.createTextNode(`${data[i].capital}`));
       row.appendChild(document.createTextNode(`${data[i].region}`));
       row.appendChild(document.createTextNode(`${data[i].flag}`));
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


