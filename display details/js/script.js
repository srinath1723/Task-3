const API_URL="https://restcountries.com/v3.1/all";

function reqListener() {
    const countriesData=JSON.parse(this.responseText);
    console.log(countriesData)
    for(let i=0;i<countriesData.length;i++)
    {
        // From this Api "https://restcountries.com/v3.1/all" we where sortlisted name,region,subregion,population.
        console.log(countriesData[i].name.common,countriesData[i].region,countriesData[i].subregion,countriesData[i].population)
    }
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET",API_URL);
  req.send();
  