const act = function actualidad (json,dato) {
    let estado = []
    let value
    if (dato == "t" || dato == "a"){//temperatura ºC
        try{
            value = /*await*/ parseFloat(json.current.temperature._attributes.value) // temperatura en kelvin
        }
        catch (error) {
            console.error("ERROR: no se puede obtener la temperatura")
            value = 273
            return value
            }
            estado.push(value-273) 
    }
    if (dato == "w" || dato == "a"){//viento m/s
        try{
            value = /*await*/ parseFloat(json.current.wind.speed._attributes.value)//velocidad del viento en m/s
        }
        catch (error) {
            console.error("ERROR: no se puede obtener el viento")
            value = 0
            return value
        } estado.push(value) 
    }
    if (dato == "h" || dato == "a"){//humedad %
        try{
            value = /*await*/ parseFloat(json.current.humidity._attributes.value)//humedad en %
        }
        catch (error) {
            console.error("ERROR: no se puede obtener la humedad")
            value = 0
            return value
        } estado.push(value) 
    }
    if (dato == "p" || dato == "a"){//presión hPa
        try{
            value = /*await*/ parseFloat(json.current.pressure._attributes.value)
        }
        catch (error) {
            console.error("ERROR: no se puede obtener la presión")
            return 0
        } estado.push(value) 
    }
    if(dato != "t" && dato != "w" && dato != "h" && dato != "p" && dato != "a"){
        console.error ("No existe esa orden")
    }
    return estado
}

exports.act=act