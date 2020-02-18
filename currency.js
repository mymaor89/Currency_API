const fetch = require("node-fetch");

    const url = "https://api.exchangerate-api.com/v4/latest/";
    const getData = async (code) => {
      try {
        const response = await fetch(url+code);
        const json = await response.json();
        return json;
      } catch (error) {
        console.log(error);
      }
    };
    
    
    module.exports = getData;