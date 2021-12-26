window.onload = function () {
  var map = document.getElementById("map");
  var data = {
    showGrid: false,
    baseImage: "./images/1.png",
    banner: "./images/contact.jpg",
    fullName: "Eşqin İbrahimov",
    email: "heyatqutusu@gmail.com",
    phone: "+994 51 345 25 17",
    headline: "🎁 QUTU AL, BALACA TUNARA HƏYAT VER! <br> 🎁 1 QUTU (XANA) – 10 ₼",
    counter: 'Test',
    logo: "./images/logo.png",
    instagram: 'https://www.instagram.com/heyatqutusu.az/',
    text: "<b>Həyatqutusu.az nədir?</b> <br>10 000 qutudan (xanadan) ibarət olan xeyriyyə veb-səhifəsidir. Səhifənin əsas məqsədi talassemiyadan əziyyət çəkən Tunarın əməliyyatı üçün 100 000 AZN toplamaqdır. Bu məqsədlə hər bir xananın qiyməti 10 AZN təşkil edir.<br>luptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihil Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihilLorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Errohil",
    areas,
  };

  function appendElements() {
    document.getElementById("headline").innerHTML = data.headline;
    document.getElementById("counter").innerHTML = data.counter;
    const logo = document.getElementById("logo");
    const logoImg = document.createElement("img");
    logoImg.setAttribute("src", data.logo);
    logo.appendChild(logoImg);

    const instagram = document.getElementById("instagram");
    instagram.setAttribute("href", data.instagram);

    let isContactOrAbout = page === 'about' || page === 'contact';
    if (isContactOrAbout) {
      let cntImg = document.createElement("img");
      cntImg.setAttribute("src", data.banner);
      cntImg.setAttribute("alt", "contact image");
      let banner = document.getElementById("banner");
      banner.appendChild(cntImg);

      let cText = document.createElement("p");
      cText.innerHTML = data.text;
      let contactText = document.getElementById("contactText");
      contactText.appendChild(cText);

      let cEmail = document.createElement("span");
      cEmail.innerHTML = data.email;
      let contactEmail = document.getElementById("contactEmail");
      contactEmail.appendChild(cEmail);

      let cName = document.createElement("span");
      cName.innerHTML = data.fullName;
      let contactName = document.getElementById("contactName");
      contactName.appendChild(cName);

      let cPhone = document.createElement("span");
      cPhone.innerHTML = data.phone;
      let contactPhone = document.getElementById("contactPhone");
      contactPhone.appendChild(cPhone);
    } else {
      const holder = document.getElementById("mapHolder");
      if (!data.showGrid) {
        let oImg = document.createElement("img");
        holder.style.display = "none";
        oImg.setAttribute("src", data.baseImage);
        oImg.setAttribute("alt", "img");
        oImg.setAttribute("height", "100%");
        oImg.setAttribute("width", "100%");
        let pixels = document.getElementById("pixels");
        oImg.setAttribute("usemap", "#map");
        pixels.appendChild(oImg);
      } else {
        for (let i = 0; i < 100; i++) {
          for (let j = 0; j < 100; j++) {
            const span = document.createElement("span");
            span.classList.add("holderSpan");
            span.setAttribute("title", `Xana nömrə: ${j + 1}-${i + 1}`);
            holder.appendChild(span);
          }
        }
        holder.setAttribute("usemap", "#map");
      }

      for (let ar of data.areas) {
        let area = document.createElement("area");
        const { title, url, alt, start, end } = ar;
        area.setAttribute(
          "coords",
          start.concat(end).map((i) => (i - 1) * 10)
        );
        area.setAttribute("title", title);
        area.setAttribute("href", url);
        area.setAttribute("target", "_blank");
        area.setAttribute("alt", alt);
        area.setAttribute("shape", "rect");
        map.appendChild(area);
      }
    }
  }
  appendElements();
};
