const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');
const contentDiv = document.getElementById('content');

// "event name", callback function
menuBtn.addEventListener('click', () => {
  // console.log("cllllllicked!!");
  mobileMenu.classList.add('active');
}); // end of menuBtn click

closeBtn.addEventListener('click', () => {
  // console.log("cllllllicked!!");
  mobileMenu.classList.remove('active');
}); // end of menuBtn click

const displayCategory = (category, properties) => {
  // console.log({category});
  const sectionElement = document.createElement('section');
  sectionElement.classList.add('slider');

  const containerDiv = document.createElement('div');
  containerDiv.classList.add('slider_container');

  const sliderGrid = document.createElement('div');
  sliderGrid.classList.add('slider_grid');

  //const sectionTitle = document.createElement('h2');
  //sectionTitle.textContent = category.label.plural;

  //containerDiv.appendChild(sectionTitle);

  // document.body.appendChild(sectionElement);

  // console.log(category.label.singular)
  // 1. filter properties
  const filteredProperties = properties.filter((property) => {
    return category.label.singular === property.type;
  });

  // console.log({filteredProperties});
  filteredProperties.forEach((property) => {
    const articleElement = document.createElement('article');
    articleElement.classList.add('slider_item');

    const propertyHtml = `
    <h3 class="property--title">${property.name}</h3>
    <p class="property--description">${property.description}</p>
    <p class="property--price">${property.price}</p> 
    `;
    articleElement.innerHTML = propertyHtml;

    sliderGrid.appendChild(articleElement);
    // const propertyTitle= document.createElement('h3');
    // propertyTitle.classList.add('property--title');
  });
  // 2. loop and append properties
  containerDiv.appendChild(sliderGrid);
  sectionElement.appendChild(containerDiv);
  contentDiv.appendChild(sectionElement);
}; // end of displayCategory

Promise.all([
  // fetch 1
  fetch('js/properties.json').then((response) => response.json()),
  // fetch 2
  fetch('js/categories.json').then((response) => response.json()),
])
  .then(([properties, categories]) => {
    // console.log({properties});
    // console.log({categories});
    categories.forEach((category) => {
      displayCategory(category, properties);
    });
  })
  .catch((error) => {
    console.error('There was a problem fetching the data:', error);
  });
