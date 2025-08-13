//car
let carArr = [];

class Car {


  constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
    this.nome = nome
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
    if (arr[i].nome === carClass.nome)
      return i;
  }
  return -1;
}

function SetCarToCompare(el, carClass) {

  if (carClass instanceof Car) {
    const pos = GetCarArrPosition(carArr, carClass)
    if (el.checked) {
        if (pos < 0)  carArr.push(carClass)

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

    console.log(tbody)

    for (let i = 0; i < carsData.length; i++) {
        for (let c = 0; c < tbody.children.length; i++) {
            let tr = tbody.children.namedItem('tr')
        }
    }
}
