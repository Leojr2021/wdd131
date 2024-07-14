// Current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Last modified date
document.getElementById("lastModified").textContent =
  "Last Modification: " + document.lastModified;

// Store the selected elements that we are going to use.
const mainnav = document.querySelector("nav");
const hambutton = document.querySelector("#menu");

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});

/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
];

const templeContainer = document.getElementById("cards_container");

const subtitle = document.getElementById("sub_title");

function filterTemples(type) {
  switch (type) {
    case "old":
      return temples.filter((temple) => {
        const yearDedicated = parseInt(temple.dedicated.split(",")[0]);
        return yearDedicated < 1900;
      });
    case "new":
      return temples.filter((temple) => {
        const yearDedicated = parseInt(temple.dedicated.split(",")[0]);
        return yearDedicated > 2000;
      });
    case "large":
      return temples.filter((temple) => temple.area > 90000);
    case "small":
      return temples.filter((temple) => temple.area < 10000);
    // Display all temples
    default:
      return temples;
  }
}

function generateTempleCards(filteredTemples = temples) {
  // Default to all temples
  templeContainer.innerHTML = ""; // Clear previous cards

  filteredTemples.forEach((temple) => {
    const cardHTML = `
		  <div class="temple_card">
			   
			  <h3>${temple.templeName}</h3>
			  <p>Location: ${temple.location}</p>
			  <p>Dedicated: ${temple.dedicated}</p>
			  <p>Size: ${temple.area} sq ft</p>
			  <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
		  </div>
	  `;
    templeContainer.innerHTML += cardHTML;
  });
}

generateTempleCards();

document.getElementById("filter_home").addEventListener("click", () => {
  const filteredTemples = filterTemples("home");
  generateTempleCards(filteredTemples);
  subtitle.textContent = "Home";
});

document.getElementById("filter_old").addEventListener("click", () => {
  const filteredTemples = filterTemples("old");
  generateTempleCards(filteredTemples);
  subtitle.textContent = "Old";
});
document.getElementById("filter_new").addEventListener("click", () => {
  const filteredTemples = filterTemples("new");
  generateTempleCards(filteredTemples);
  subtitle.textContent = "new";
});
document.getElementById("filter_large").addEventListener("click", () => {
  const filteredTemples = filterTemples("large");
  generateTempleCards(filteredTemples);
  subtitle.textContent = "Large";
});
document.getElementById("filter_small").addEventListener("click", () => {
  const filteredTemples = filterTemples("small");
  generateTempleCards(filteredTemples);
  subtitle.textContent = "Small";
});
