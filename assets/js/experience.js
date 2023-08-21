AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Engineer",
    cardImage: "assets/images/experience-page/currant_logo.jpeg",
    place: "Currant",
    time: "(June, 2023 - present)",
    desp: "Construction of the architecture and the implementation of said architecture for Flexymob, the online platform used to faciliated mobility.",
  },
  {
    title: "Software Trainer",
    cardImage: "assets/images/experience-page/sabanet_log.jpeg",
    place: "Sabanet Albania",
    time: "(June, 2023 - present)",
    desp: "Train new recruits in Software Development starting from general programming paradigm in Java up to advance Spring Boot skills.",
  },
  {
    title: "CHIEF TECHNOLOGY OFFICERS",
    cardImage: "assets/images/experience-page/sabanet_log.jpeg",
    place: "Sabanet Albania",
    time: "(June, 2021 - June 2023)",
    desp: "As the CTO at Sabanet Albania, my main duties consist of (but are not limited to): <li>Managing the development team.</li> <li>Making key software architectural decision.</li> <li>Identifying risks and mitigating them.</li><li>Interviewing candidates for technical positions.</li><li>Enabling communication between our team and our oversea colleagues.</li>",
  },
  {
    title: "SOFTWARE ENGINEER ",
    cardImage: "assets/images/experience-page/bnt_electronics_logo.png",
    place: "BNT ELECTRONICS",
    time: "(Jan - Jun, 2021)",
    desp: "<li>I implement reliable, extendable and maintainable business logic for our proprietary software by following OOP paradigm and well tested design patterns.</li><li>The technologies are mostly use are Java and NodeJs.</li>",
  },
  {
    title: "PROGRAMMING LECTURER",
    cardImage: "assets/images/experience-page/smart_center_logo.png",
    place: "SMART CENTER",
    time: "(Apr, 20 - Dec, 20)",
    desp: "<li>Lesson giving in Python, Java and C# programming to students starting from highschool up to graduate.</li>",
  },
  {
    title: "LEAD SOFTWARE ENGINEER",
    cardImage: "assets/images/experience-page/vesa_solution_logo.png",
    place: " VESA SOLUTIONS",
    time: "(Jan, 20 - Dec, 20)",
    desp: "<li>Software Developer at Vesa Solutions. My duties consist of overseeingthe development of our applications from the planning stage to the deployment and maintenance stage as well as developing stage, leadingour developer team and training new recruits.</li><li>The technologies I use include: NodeJs (ExpressJs, NestJs), React, Angular, Python (Django).</li><li>All of the project I have worked on (aside from the one that were implemented in Django) have their back-end implemented with NodeJs (either ExpressJs or NestJs).</li>",
  },
  {
    title: "PROGRAMMER INTERN",
    cardImage: "assets/images/experience-page/lufthansa_industry_logo.png",
    place: "LUFTHANSA INDUSTRY SOLUTIONS",
    time: "(Sep, 19 - Oct, 19)",
    desp: "<li>Creation of message routing through the Tibco platform and Java EE.</li>",
  },
  {
    title: "PROGRAMMER INTERN",
    cardImage: "assets/images/experience-page/albtelecom_logo.jpg",
    place: "ALBTELECOM SH.A",
    time: "(Jun, 19 - Jul, 19)",
    desp: "<li>Training in the usage of SAP technology to manage client’s contracts.</li>",
  },
  {
    title: "INTERN IN DIGITAL MARKETING AND GOOGLE ADWORDS",
    cardImage: "assets/images/experience-page/local_web_logo.png",
    place: "LOCAL WEB",
    time: "(Jun, 17 - Jul, 17)",
    desp: "<li>My main activities consisted of the expansion of our clients business through digital marketing</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "RIN Compiler",
    cardImage: "assets/images/experience-page/coding.jpg",
    description:
      "BASIC compiler written in C#.",
    url: "https://github.com/JonJakova/rin"
  },
  {
    title: "SPYCAM - Python Security Camera",
    cardImage: "assets/images/experience-page/coding.jpg",
    description:
      "A python based security camera that can be used to monitor a room. It uses OpenCV to detect motion and send an email to the user.",
    url:"https://github.com/JonJakova/spycam"
  },
  {
    title: "Movie Chart",
    cardImage: "assets/images/experience-page/coding.jpg",
    description:
      "A platform which displays information about future and past movies releases. It auto-updated daily.",
    url:"https://github.com/JonJakova/movie-chart"
  },
  {
    title: "LunaDB",
    cardImage: "assets/images/experience-page/coding.jpg",
    description:
      "A simple key-value pair storage implemented in Rust.",
    url:"https://github.com/JonJakova/luna_db"
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description, url }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <a href="${url}" target="_blank" rel="noopener noreferrer">
        <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      </a>
      
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const via_egnatia = [
  {
    title: "VIA EGNATIA 2.0",
    subtitle: "Winner",
    image: "assets/images/experience-page/via_egnatia_hackathon.png",
    desp: "Hackathon to develop digital tourism of the archaeological site of Apollonia, a rich and important city of Illyria founded by colonists from Corinth and ancient Corfu around 600 BC.",
    href: "https://museonazionaleromano.beniculturali.it/en/2020/11/via-egnatia-2-0/",
  },
];

const showCards3 = () => {
  let output = "";
  via_egnatia.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" target="_blank" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
