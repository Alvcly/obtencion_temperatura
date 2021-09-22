
const semana = function week (json,dato){return select (json,dato)} //te devuelve todos los valores de la semana (72)

let dia = function day (dia,json,dato) { //te devuelve todos los valores del día (24-8)
    if (dia > 4 || dia < 0){
        console.error ("No se encontró el día");
    }
    let solución = select (json,dato)
    return solución [dia]
}

let hora = function hour (dia,hora,json,dato){//te devuelve el valor de la hora correspondiente al día
    if (dia > 4 || dia < 0){
        console.error ("No se encontró el día");
    }
    if ( hora < 0 || hora > 23){
        console.error ("No se encontró la hora");
    }
    let solución1 = select (json,dato)
    let solución = solución1 [dia]
    return solución [hora]
}

exports.semana=semana;

exports.dia=dia;

exports.hora=hora

function select (json,dato) {
    let semana = []
    for (const d of json.report.location.day) {
        let día = []
        let value
        for (const h of d.hour) {
            let secure = value // parece ser que funciona correctamente
            try {
                if (dato == "t"){//temperatura
                    value = /*await*/ parseFloat(h.temp._attributes.value)
                }
                else if (dato == "w"){//viento
                    value = /*await*/ parseFloat(h.wind._attributes.value)
                }
                else if (dato == "r"){//lluvia
                    value = /*await*/ parseFloat(h.rain._attributes.value)
                }
                else if (dato == "h"){//humedad
                    value = /*await*/ parseFloat(h.humidity._attributes.value)
                }
                else if (dato == "u"){//Ultravioleta
                    value = /*await*/ parseFloat(h.uv_index._attributes.value)
                }
                else return console.error ("No existe esa orden")
            } catch (error) {
                console.error("ERROR: no se puede convertir")
            return secure
            } día.push(value)
        } semana.push(día)
    }
    return semana
}