const API_URL="https://restcountries.com/v3.1/all";

function reqListener() {
    const countriesData=JSON.parse(this.responseText);
    console.log(countriesData)
    for(let i=0;i<countriesData.length;i++)
    {
        // From this Api "https://restcountries.com/v3.1/all" we where sortlisted countries flags.
        console.log(countriesData[i].flags.svg)
    }
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET",API_URL);
  req.send();
  