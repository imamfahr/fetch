const getDataCountry = async () => {
    try {
      let response = await fetch(
        `https://restcountries.eu/rest/v2/all`
      );
      let data = await response.json();
      console.log("countrydata", data);
      return data;
    } catch {
      console.log("error bos");
    }
  };

  countryData = getDataCountry(1);
  console.log(countryData)

  for(let i =0;i<countryData[10];i++){
      document.getElementById('result-set').innerHTML=
      `<tr>
      <td>${countryData[i].name}</td>
      <td>${countryData[i].capital}</td>
      <td>${countryData[i].Region}</td>
      <td>${countryData[i].flag}</td>
      </tr>
      `;
  }
