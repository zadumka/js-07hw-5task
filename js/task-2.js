
  
  const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

  let gallery = document.querySelector(".gallery");

  let imageElements = images.map(function (image) {
    let newImage = document.createElement("img");
    newImage.src = image.url;
    newImage.alt = image.alt;
    newImage.style.cssText = "width: 100%;";

    let li = document.createElement("li");
    li.appendChild(newImage);
    return li;
  });

  gallery.append(...imageElements);
  gallery.style.cssText = "display: flex; gap: 40px; list-style-type: none;";
