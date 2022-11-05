function convertirGradosCentigradosAGradosFahrenheit(valueC) {
    var Fah = 0
    var escrGrados = document.getElementById("spanGrados")
    var escrRes = document.getElementById("span2")
    Fah = 32 + (9 * valueC / 5)
    escrGrados.innerText = valueC + "ºC se convierten en " + Fah + "ºF"
    if (Fah >= 212) {
        escrRes.innerText = "Punto de ebullición del agua"
    } else if (Fah >= 98.6 && Fah < 212) {
        escrRes.innerText = "Temperatura del cuerpo humano"
    } else if (Fah >= 77 && Fah < 98.6) {
        escrRes.innerText = "Temperatura ambiente"
    } else if (Fah >= 32 && Fah < 77) {
        escrRes.innerText = "Punto de congelación del agua"
    } else if (Fah >= -459.58 && Fah < 32) {
        escrRes.innerText = "Cero absoluto"
    } else {
        escrRes.innerText = ""
    }
}

function calcularPorcentajes(valor1) {
    var Resp = 0
    var escrResp = document.getElementById("spanRes")
    if (valor1 < 500) {
        Resp = valor1 + (valor1 * 0.5)
        escrResp.innerText = "De " + valor1 + " el porcentaje es: " + Resp
    } else if (valor1 >= 500) {
        Resp = valor1 - (valor1 * 0.07)
        escrResp.innerText = "De " + valor1 + " el porcentaje es: " + Resp
    } else {
        escrResp.innerText = "Error"
    }
}

function generarTablaHTML(numF, numC) {
    var relle = numF * numC
    var contFilas = 0
    var contColum = 0
    var tabla = document.getElementById("espacioTabla")
    tabla.innerHTML = ""
    while (contFilas < numF) {
        var filas = tabla.insertRow()
        while (contColum < numC) {
            var celda = filas.insertCell()
            celda.innerHTML = relle
            contColum++
            relle--
        }
        contColum = 0
        contFilas++
    }
}