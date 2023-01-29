/** 
 * Background.js
 * 배경 이미지 출력
 */

/**
 * document.createElement()
 * HTML Element 추가
 */

/**
 * document.(elements).appendChild()
 * 추가할 elements 선택 후 자식 요소 추가
 */

/**
 * document.(elements).append()
 * body 태그 맨 하단에 추가
 * appnedChild와 다르게 text를 사용할 수 있으며, 여러 개의 자식 요소를 추가할 수 있다.
 * ex) body.append("hi");
 *     body.append(bgImages, "hi");
 */

const IMAGE_CLASSNAME = "bg-image";

const images = [
  "bg-image1.jpg",
  "bg-image2.jpg",
  "bg-image3.jpg",
  "bg-image4.jpg",
  "bg-image5.jpg",
  "bg-image6.jpg",
  "bg-image7.jpg",
  "bg-image8.jpg",
  "bg-image9.jpg"
];

const chooseImage = images[Math.floor(Math.random() * images.length)];

const bgImages = document.createElement("img");

bgImages.classList.add(IMAGE_CLASSNAME);
bgImages.src = `images/${chooseImage}`;

// document.body.appendChild(bgImages); // img element 추가
document.querySelector("body").style.backgroundImage = `url(images/${chooseImage})`; // body element background-image 추가