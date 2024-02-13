//console.log("js has been loaded"); /*allows u to play a string/argument*/


const menuBtn= document.getElementById("menuBtn")
const mobileMenu= document.getElementById("mobileMenu")
const closeBtn= document.getElementById("closeBtn")

//"event name", callback function
menuBtn.addEventListener("click", function(){
    //console.log("clicked!")
    mobileMenu.classList.add("active")
});//end of Btn click

closeBtn.addEventListener("click", function(){
    //console.log("clicked!")
    mobileMenu.classList.remove("active")
});//end of Btn click

//array of objects

//function renderProperties(properties) {
    properties.forEach((room) => {
        const roomInfo = document.createElement("article");
      
        const roomNameElement = document.createElement("h3");
        roomNameElement.textContent = room.name;
      
        const roomPriceElement = document.createElement("p");
        roomPriceElement.textContent = `Price: $${room.price}`;
      
        const roomTypeElement = document.createElement("p");
        roomTypeElement.textContent = `Type: ${room.type}`;
      
        const roomGuestsElement = document.createElement("p");
        roomGuestsElement.textContent = `Guests: ${room.guests}`;
      
        const roomDescriptionElement = document.createElement("p");
        roomDescriptionElement.textContent = room.description;
      
        roomInfo.appendChild(roomNameElement);
        roomInfo.appendChild(roomPriceElement);
        roomInfo.appendChild(roomTypeElement);
        roomInfo.appendChild(roomGuestsElement);
        roomInfo.appendChild(roomDescriptionElement);
      
        document.body.appendChild(roomInfo);
      });//end of forEach
}//end of renderProperties

Promise.all([
  // fetch 1
  fetch('properties.json').then(response => response.json()),
  // fetch 2
  fetch('categories.json').then(response => response.json())
  ])
  .then(([properties, categories]) => {
    //console.log({properties})
    //console.log({categories})
    categories.forEach(category => {
      displayCategory(category, properties);
    });
  })
  .catch((error) => {
    console.error("There was a problem fetching the data:", error);
  });

  const displayCategory =(category, properties)=>{
      console.log("displaying category")
      const sectionElement = document.createElement('section')

      const sectionTitle=document.createElement('h2');
      sectionTitle
      
      sectionElement.appendChild(sectionTitle);

      document.body.appendChild(sectionElement);
  } //end of dispalyCategory 