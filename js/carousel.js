//carousel

/**
 * CHANGING CAROUSEL
 */

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {
  constructor(image, title, url) {
    this.image = image;
    this.title = title;
    this.url = url;
  }

  static CreateTags() {
    return {
      imgContainer: document.createElement("div"),
      imgLink: document.createElement("a"),
      img: document.createElement("img"),
      text: document.createElement("p"),
    };
  }

  static InsertImg(arr) {
    if (this.image == null && typeof arr !== "object" && arr.length == 0)
      throw "Imagem inválida.";

    const container = document.getElementById("carousel");
    const subContainer = document.createElement('div')
    subContainer.id = "carousel-subcontainer"

    let images = [];

    // Criando elementos
    for (let i in arr) {
      const newDom = Carousel.CreateTags();
      newDom.img.src = arr[i].image;
      newDom.img.title = arr[i].title || "";
      newDom.imgLink.href = arr[i].url || "#";
      newDom.text.textContent = arr[i].title || "";
      // Append
      newDom.imgLink.appendChild(newDom.img);
      newDom.imgContainer.appendChild(newDom.imgLink);
      newDom.imgContainer.appendChild(newDom.text);
      subContainer.appendChild(newDom.imgContainer)
      images.push(newDom.imgContainer);
    }
    container.appendChild(subContainer);
    return images;
  }

  static Start(arr) {
    if (arr) {
      console.log(arr);
      if (arr.length > 0) {
        const images = this.InsertImg(arr);
        Carousel._sequence = 0;
        Carousel._size = arr.length;
        Carousel.Next(images); //start
        Carousel._interval = setInterval(function () {
          Carousel.Next(images);
        }, 5000);
      }
    } else {
      throw "Method Start need a Array Variable.";
    }
  }

  static Next(imgs) {
    const container = document.getElementById('carousel')

    // container.style.transform = `translateX(-100%)`

  }
}
