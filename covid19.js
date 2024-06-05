async function fetchCovidData(url) {
    try {
        const response = await fetch(url);
        const result = await response.json();
        
        // Accessing the total data for a specific state
        const state = "UT"; // Replace with the desired state code
        const totalData = result[state].delta;
        console.log(totalData);
        
        // Printing the recovered value
        const recovered = totalData.recovered;
        console.log("Recovered:", recovered);

    } catch (error) {
        console.log(error);
    } finally {
        console.log("Operation Completed");
    }
}

fetchCovidData("https://api.covid19india.org/v4/min/data.min.json");
