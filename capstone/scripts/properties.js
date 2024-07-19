

const properties = [
  {
    propertyName: "2120 PALMETTO WAY",
    address: "120 Palmetto Way, St George Island, FL",
    price: 3500000,
    imageUrl:
      "https://res.cloudinary.com/dngcmvmez/image/upload/v1721357529/2120_PALMETTO_WAY_pdbfwg.jpg",
  },
  {
    propertyName: "4522 BAY POINT ROAD",
    address: "4522 Bay Point Road, Panama City Beach, FL",
    price: 3130000,
    imageUrl:
      "https://res.cloudinary.com/dngcmvmez/image/upload/v1721357530/4522_Bay_Point_Road_mlfvkf.jpg",
  },
  {
    propertyName: "14208 FRONT BEACH ROAD",
    address: "14208 Front Beach Road, Panama City Beach, FL",
    price: 2765000,
    imageUrl:
      "https://res.cloudinary.com/dngcmvmez/image/upload/v1721357529/14208_Front_Beach_Road_Panama_City_Beach_FL_cyxra5.jpg",
  },
  {
    propertyName: "526 BUNKERS COVE ROAD",
    address: "526 Bunkers Cove Road, Panama City, FL",
    price: 2125000,
    imageUrl:
      "https://res.cloudinary.com/dngcmvmez/image/upload/v1721357529/526_BUNKERS_COVE_ROAD_qbnmq5.jpg",
  },
  {
    propertyName: "3510 FOX RUN BOULEVARD",
    address: "3510 Fox Run Boulevard, Panama City Beach, FL",
    price: 1386500,
    imageUrl:
      "https://res.cloudinary.com/dngcmvmez/image/upload/v1721357529/3510_Fox_Run_Boulevard_Panama_City_Beach_FL_wvqegb.jpg",
  },
  {
    propertyName: "15817 FRONT BEACH ROAD UNIT: 1-1204",
    address: "15817 Front Beach Road 1-1204, Panama City Beach, FL",
    price: 810000,
    imageUrl:
      "https://res.cloudinary.com/dngcmvmez/image/upload/v1721357530/15817_Front_Beach_Road_1-1204_Panama_City_Beach_FL_fgthrz.jpg",
  },
  {
    propertyName: "8920 N NORTH LAGOON DRIVE",
    address: "8920 N North Lagoon Drive, Panama City Beach, FL",
    price: 795000,
    imageUrl:
      "https://res.cloudinary.com/dngcmvmez/image/upload/v1721357530/8920_N_North_Lagoon_Drive_Panama_City_Beach_FL_bxcrbv.jpg",
  },
  {
    propertyName: "305 BASIN BAYOU DRIVE",
    address: "305 Basin Bayou Drive, Panama City Beach, FL",
    price: 715000,
    imageUrl:
      "https://res.cloudinary.com/dngcmvmez/image/upload/v1721357529/305_Basin_Bayou_Drive_Panama_City_Beach_FL_mtce6m.jpg",
  },
  {
    propertyName: "120 FOX GLOVE LANE",
    address: "120 Fox Glove Lane, Panama City Beach, FL",
    price: 293000,
    imageUrl:
      "https://res.cloudinary.com/dngcmvmez/image/upload/v1721357529/120_FOX_GLOVE_LANE_gipkep.jpg",
  }
  
];

const propertyContainer = document.getElementById("cards_properties-container");

const subtitle = document.getElementById("property_sub-title");

function filterProperties(type) {
  switch (type) {
    case "luxury":
      return properties.filter((property) => {
        const price = property.price;
        return price >= 1000000;
      });
    case "regular":
      return properties.filter((property) => {
        const price = property.price;
        return price < 1000000;
      });
    
    // Display all properties
    default:
      return properties;
  }
}

function generatePropertiesCards(filteredProperties = properties) {
  // Default to all properties
  propertyContainer.innerHTML = ""; // Clear previous cards

  filteredProperties.forEach((property) => {
    const cardHTML = `
		  <div class="property_card">
        <div class="card_image">
			  <img src="${property.imageUrl}" alt="${property.propertyName}" loading="lazy">
        </div>
        <div class="card_text">
			  <h3>${property.propertyName}</h3>
			  <p>${property.address}</p>
			  <p>$${property.price}</p>
			  </div>
			  
		  </div>
	  `;
    propertyContainer.innerHTML += cardHTML;
  });
}

generatePropertiesCards();

document.getElementById("filter_luxury").addEventListener("click", () => {
  const filteredProperties = filterProperties("luxury");
  generatePropertiesCards(filteredProperties);
  subtitle.textContent = "luxury";
});

document.getElementById("filter_regular").addEventListener("click", () => {
  const filteredProperties = filterProperties("regular");
  generatePropertiesCards(filteredProperties);
  subtitle.textContent = "regular";
});

