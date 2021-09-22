const toJson = require ('./lib/toJson');
const prev = require ('./lib/selectMR');
const situacion = require ('./lib/selectOW');


(async () => {
    let json1;
    let json2;
    // API para la previsión de Meteored
    const urlMR = `http://api.tiempo.com/index.php?api_lang=es&localidad=7544&affiliate_id=4b2y7nx2qfoq&v=2.0&h=1`

    // API para la información metereológico de Openweather
    const apiKey = "a892d969dcf87bddedfa11bb4e038d9f" // APIKey para la situación actual de Openweather
    const lat = "39.488890"
    const lon = "-0.398776"
    const urlOW = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&mode=xml`

    const axios = require('axios').default;

    const xml1 = await axios.get(urlMR)
    json1 = JSON.parse(toJson(xml1.data));

    const xml2 = await axios.get(urlOW)
    json2 = JSON.parse(toJson(xml2.data));

    //////***Previsión del tiempo: "info"="t" (temperatura  ºC);"w" (viento m/s);"r" (lluvia);"h" ( % humedad);"u" (índice ultravioletas)
    ////función para extraer previsión semanales: prev.semana(json,"info")
    // let prevTempSem = prev.semana(json1,"t")

    ////función para extraer previsión de un día de la semana: select.dia(dia,json,"info")
    // let prev1Temp = prev.dia(1,json1,"t")

    //// función para extraer previsión de una hora de un día de la semana: select.hora(dia,hora,json,"info")
    // let prevHoyTemp12 = prev.hora(0,12,json1,"t")

    //////*** Situación actual: "info"="a" (todo); "t" (temperatura ºC);"w" (viento m/s); "h" ( % humedad); "p" (presión hPa)
    //// función para extraer la información actual del sítio: situacion.act(json,"info")
    // let actTemp = situacion.act(json2,"w")

    setInterval(() => {}, 1000);
})();