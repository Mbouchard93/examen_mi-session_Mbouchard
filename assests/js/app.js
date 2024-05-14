class Speaker {
    constructor(
      name,
      description,
      price,
      brand,
      hasFreeDelivery,
      isInStock,
      rating,
      colour
    ) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.brand = brand;
      this.hasFreeDelivery = hasFreeDelivery;
      this.isInStock = isInStock;
      this.rating = rating;
      this.colour = colour;
    }
   
    toHtml() {
        const entries = Object.entries(this);
        const div = document.createElement('div')

        entries.forEach(entry =>{
            const name = document.createElement('span');
            const value = document.createElement('span');

        name.textContent = entry[0];
        name.textContent = entry [1]; 

            div.appendChild(name);
            div.appendChild(value);
        });
        return div;
    }
  };


  const speakers = [
    new Speaker(
      "Echo Dot",
      "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
      "47.99",
      "Amazon",
      true,
      true,
      4.5,
      "black"
    ),
    new Speaker(
      "Echo Dot",
      "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
      "47.99",
      "Amazon",
      true,
      true,
      4.5,
      "black"
    ),
    new Speaker(
      "Echo Dot",
      "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
      "47.99",
      "Amazon",
      true,
      true,
      4.5,
      "black"
    ),
    new Speaker(
      "Echo Dot",
      "Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
      "47.99",
      "Amazon",
      true,
      true,
      4.5,
      "black"
    ),
  ];

  const containerhtml = document.querySelector('.containerhtml');


  speakers.forEach(speaker => {
    containerhtml.appendChild(speaker.toHtml());
})

