const testimonials = [
  {
    author: "BECKA D.",
    description:
      "Fantastic Agent! Mario has helped my husband and I purchase two homes in Seagrove Beach within the last year. In both purchases she has been amazing to work with! With an extremely competitive market, Mario helped coach us through making the best offers. She was available to talk us through any questions we had and always treated us as we were her first priority. Mario also stayed in touch after each sale to help us find contacts in the areas for various enhancements we wanted to make for our rental testimonials. All of her contacts were extremely professional and high quality within their fields. This really shows that Mario is very dialed into the this every changing market. Mario and her team also made each closing extremely smooth even though we were out of town. I highly encourage you to reach out to Mario for help with buying or selling your home.",
  },
  {
    author: "MARSHAL M.",
    description:
      "Mario is a great REALTOR with a fantastic work ethic. She helped us find the perfect home in the area and let me tell you, everyone and their mother are REALTORS down here. I had dozens of agents wanting my business. What sets Mario apart is that she isn’t a retiree who does real estate deals on the side—this is her full time career and she is an incredibly hard worker to ensure that you will get the testimonials you want! Bottom line is that she made it happen for us through her superior negotiation skills when the testimonials in question had multiple offers equal to mine. Ultimately, she simply outhustled the other agents, and that is exactly the type of service every buyer is looking for.",
  },
  {
    author: "JAIMI E.",
    description:
      "Mario came highly recommended to us and we are so glad we went with her. She is extremely knowledgeable in all facets of the selling and buying process. She didnt just get it posted and passively wait for a buyer, but acted much more as a consultant and marketing agent. She is a great networker and has so many contacts through various industries that were able to help us in getting the house ready. All during a time it was very difficult to find labor. We had several things that were unusual with the sell of our home but her knowledge of the local real estate market and real estate market in general proved invaluable in helping navigate us through what would have been a nightmare without her. There were so many times throughout this process that I was very thankful we had chosen a true professional. I would not hesitate to recommend her to anyone asking.",
  },
  {
    author: "TANISHA C.",
    description:
      "We live out of state and worked with The Group over the past 3 months to find our dream house in FL. Mario and Scotty were both available to show us houses and from beginning to end they both provided us first class service. Scotty was our main contact and was always there to answer any questions and to help us find a home that fits all of our needs. I am a pretty picky person when it comes to looking at houses, but it did not matter, Scotty stepped up and took all our comments and found us what we were looking for. After we were in contract is when Scotty really stepped up. With us being out of state, he was there to oversee everything from the inspection to the final walk through and made sure all items were perfect for our closing.",
  },
  {
    author: "JOHN D.",
    description:
      "I recently worked with Mario to represent me in a home purchase in Santa Rosa Beach. I had not seen the house which I wanted to make an offer on nor had I met Mario. After speaking with her on the phone, I felt we would be a good match and asked her to send me some comps. My son went to see the house with her and gave his stamp of approval immediately. During the first week on the market she kept me informed as to the level of activity and by the end of the week, put together an offer. She did a great job with the presentation (first offer accepted) and followed up with the names of inspectors, made the appointments, negotiated the repairs to be done on the testimonials and put me together with a lender with a great interest rate as well as service.",
  },
  {
    author: "KIRK A.",
    description:
      "All I can say is Mario is outstanding in every way. Super fast responses to every question. Amazing follow-up skills. As I worked with Mario I mentioned to other friends in the real estate world that I was using her as my agent and they all unanimously gushed over her skills and performance for her customers.",
  },
  {
    author: "JERED L.",
    description:
      "Best experience ever. We bought our Panama City Beach house from Edmond, Oklahoma with no trouble. They called us the day of the listing and told us it was going on the market later that day. Walked us through rental income projections as well as a potential downside. We FaceTimed for the showing then picked us up from the airport after they accepted the offer. They also set us up with a local contractor who helped us after closing with some repairs. Closing was a breeze.",
  },
];

const testimonialsContainer = document.getElementById(
  "cards_testimonials-container"
);

function generatePropertiesCards(filteredProperties = testimonials) {
  // Default to all testimonials
  testimonialsContainer.innerHTML = ""; // Clear previous cards

  filteredProperties.forEach((testimonials) => {
    const cardHTML = `
          <div class="testimonials_card">
            <div class="testimonial_header">
                <img src="images/favicon.webp" alt="mario logo" loading="lazy"> 
                <h3>${testimonials.author}</h3>
            </div>
          <div class="testimonial_content">
                
                <p>${testimonials.description}</p>
                
          </div>
                
        </div>
        `;
    testimonialsContainer.innerHTML += cardHTML;
  });
}

generatePropertiesCards();
