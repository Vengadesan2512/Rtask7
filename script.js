let vgd = new XMLHttpRequest();
vgd.open("GET", "https://restcountries.com/v3.1/all");
vgd.send();

vgd.onload = function() {
    if (vgd.status === 200) {
        const data = JSON.parse(vgd.response);

   
        data.forEach((country) => {
            console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.svg}`);
        });

      
        const asianCountries = data.filter((country) => country.region === "Asia");
        console.log(asianCountries);

   
        const smallPopulationCountries = data.filter((country) => country.population < 200000);
        console.log(smallPopulationCountries);

     
        const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
        console.log(`Total Population: ${totalPopulation}`);


        const usdCountries = data.filter((country) => {
            return country.currencies && Object.keys(country.currencies).includes('USD');
        });
        console.log(usdCountries);
    } else {
        console.log(`Error: ${vgd.status}`);
    }
};




    