//car
let carArr = [];

class Car {


  constructor(modelo, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
    this.modelo = modelo
    this.preco = preco
    this.alturaCacamba = alturaCacamba
    this.alturaVeiculo = alturaVeiculo
    this.alturaSolo = alturaSolo
    this.capacidadeCarga = capacidadeCarga
    this.motor = motor
    this.potencia = potencia
    this.volumeCacamba = volumeCacamba
    this.roda = roda
    this.image = image
  }
}

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].modelo === carClass.modelo)
      return i;
  }
  return -1;
}

function SetCarToCompare(el, carClass) {

  if (carClass instanceof Car) {
    const pos = GetCarArrPosition(carArr, carClass)
    if (el.checked) {
      if (pos < 0) carArr.push(carClass)

      if (carArr.length > 2) carArr = carArr.filter((el, i, arr) => i > arr.length - arr.length)
    } else {
      carArr = carArr.filter((el, i) => i != pos)
    }
  } else {
    throw "You need set a Car Class";
  }
}

function ShowCompare() {
  if (carArr.length < 2) {
    alert("Precisa marcar 2 carros para apresentar a comparação");
    return;
  }

  UpdateCompareTable(carArr);
  document.getElementById("compare").style.display = "block";
}

function HideCompare() {
  document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable(carsData) {
  if (typeof carsData === "object" && carsData.length === 0)
    throw "Dados vazios"

  const table = document.querySelector('div#compare table')

  const tbody = table.querySelector('tbody')

  carsData.map(function (el) {
    for (let i = 0; i < tbody.children.length; i++) {
      let tr = tbody.children[i]
      let td = [];

      for (let _td = 0; _td < tr.children.length; _td++) {
        if (tr.children[_td].id.length > 0) td.push(tr.children[_td])
      }

      /**
       * Todos os índices da classe possuem mesmo nome que os ids das células
       * logo, os índices serão passados em lowerCase para comparar com os ids das células
       */
      function compararIndices() {
        const indices = Object.keys(el).map((v) => v.toLowerCase())
        const indicesNormais = Object.keys(el)
        // console.log(indicesNormais)
        let tdId;
        for (let i= 0; i < td.length; i++) {
          td[i].innerHTML = ''
          tdId = td[i].id.toLowerCase()
          for (let _i= 0; _i < indices.length; _i++) {
            if (tdId.includes(indices[_i])) {
              console.log()
              td[i].innerHTML = el[indicesNormais[_i]]
            }
            // console.log("IGUAL " + tdId + " " + indices[_i])
          }
        }
        // tdId.every((el, index) => {
        //   console.log(el)
        // })
      }

      compararIndices()

      /*
      for (let i = 0; i < td.length; i++) {
        td[i].innerHTML = ''
        switch (td[i].id) {
          case ('compare_image_' + i):
            const img = document.createElement('img')
            img.src = carsData[i].image
            td[i].appendChild(img)  
            break;
          case ("compare_modelo_" + i):
            td[i].innerHTML = carsData[i].modelo
            break;
          case ("compare_alturacacamba_" + i):
            td[i].innerHTML = carsData[i].alturaCacamba
            break;
          case ("compare_alturaveiculo_" + i):
            td[i].innerHTML = carsData[i].alturaVeiculo
            break;
          case ("compare_capacidadecarga_" + i):
            td[i].innerHTML = carsData[i].capacidadeCarga
            break;
          case ("compare_alturasolo_" + i):
            td[i].innerHTML = carsData[i].alturaSolo
            break;
          case ("compare_motor_" + i):
            td[i].innerHTML = carsData[i].motor
            break;
          case ("compare_potencia_" + i):
            td[i].innerHTML = carsData[i].potencia
            break;
          case ("compare_volumecacamba_" + i):
            td[i].innerHTML = carsData[i].volumeCacamba
            break;
          case ("compare_roda_" + i):
            td[i].innerHTML = carsData[i].roda
            break;
          case("compare_preco_" + i):
            td[i].innerHTML = carsData[i].preco
            break;
          default:
            break;
        }
        
      }
      */

    }
  })
}
