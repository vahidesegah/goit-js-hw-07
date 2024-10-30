const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];
  
  // ul.gallery öğesini seç
  const gallery = document.querySelector('.gallery');
  
  // images dizisinden gelen her resim için <li> ve <img> oluştur
  const galleryItems = images
    .map(({ url, alt }) => {
      return `
        <li class="gallery-item">
          <img src="${url}" alt="${alt}" class="gallery-image">
        </li>`;
    })
    .join(''); 
// Dizi elemanlarını birleştir
  

// Galeriyi DOM'a ekle
  gallery.insertAdjacentHTML('beforeend', galleryItems);

