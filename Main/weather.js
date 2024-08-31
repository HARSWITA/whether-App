const http = require("http");
const fs = require ("fs");
var requests = require("requests");


const homeFile = fs.readFileSync("home.html","utf-8");
//console.log(homeFile);


const replaceVal = (tempVal,orgVal) => {
       let temperature = tempVal.replace("{%tempVal%}",orgVal.main.temp);
        temperature = temperature.replace("{%temp-min%}",orgVal.main.temp_min);
        temperature = temperature.replace("{%temp-max%}",orgVal.main.temp_max);
        temperature = temperature.replace("{%location%}",orgVal.name);
        temperature = temperature.replace("{%country%}",orgVal.sys.country);
        temperature = temperature.replace("{%tempStatus%}",orgVal.weather[0].main);
        
        // console.log(temperature);
        return temperature;
};

const server = http.createServer((req,res)=>{

    if(req.url=="/"){
        
        requests('https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=9e02b5b4f40f99bc4359adc4c8563d18')
       
        .on("data",  (chunkdata)=> {

            const objData = JSON.parse(chunkdata); // convert jsondata into objectdata.

            const arrData = [objData];   // change objectdata into arrayData.
           // console.log(arrData[0].main.temp);

           // map method
            const realTimeData = arrData.map((val)=> {
                //console.log(val.main); // here we received all the data of main in api file using map
                return replaceVal(homeFile,val);
            }).join(" ");     
            // use .join(" ") because convert the data into string

            //console.log(realTimeData);
            res.write(realTimeData);
        })
        
        .on('end', (err)=> {
          if (err) return console.log('connection closed due to errors', err);
          res.end();
          //console.log('end');
        });

    }
    else {
        res.end("File not found");
      }
});

server.listen(2000,"127.0.0.1",() => {
    console.log("listening to the port no 2000");
}); 





// https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=9e02b5b4f40f99bc4359adc4c8563d18