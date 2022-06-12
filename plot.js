console.log(cityGrowths);

//he first step is to sort the cities by population growth. For this she will use the sort() method, which in turn will call an anonymous function to sort objects by the Increase_from_2016 property.
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 


//The next step is to select only the top five cities by population growth. We'll use slice() to perform this task
var topFiveCities = sortedCities.slice(0,5);


//Now we need to create two arrays: an array of city names, and an array of corresponding population growths.
var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));


//Create a Bar Chart with the Arrays
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);