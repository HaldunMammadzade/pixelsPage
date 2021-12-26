window.onload = function () {
  var map = document.getElementById("map");
  var data = {
    showGrid: false,
    baseImage: "./images/1.png",
    fullName: "Eşqin İbrahimov",
    email: "heyatqutusu@gmail.com",
    phone: "+994 51 345 25 17",
    headline: "🎁 QUTU AL, TUNARIN HƏYATINI QURTAR! <br> 🎁 1 QUTU (XANA) – 10 ₼",
    about: {
      banner: './images/contact.jpg',
      text: "<b>heyatqutusu.az nədir?</b> <br>Ana səhifəsi 10 000 qutudan (xanadan) ibarət olan xeyriyyə yönümlü saytdır. Saytın əsas məqsədi talassemiyadan əziyyət çəkən 6 yaşlı Tunarın ilik nəqli əməliyyatı üçün 100 000 AZN toplamaqdır. Buna görə hər bir xananın qiyməti 10 AZN təşkil edir.<br><br> luptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihil Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihilLorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Errohil",
    },
    contact: {
      banner: './images/contact.jpg',
      text: "<b>Qutu (xana) necə alınır?</b> <br> Qutu almaq üçün sadəcə sol tərəfdə (və ya instaqram səhifəmizdə) qeyd olunmuş hesaba köçürmə etmək və bu köçürmənin qəbzini bizə göndərmək kifayətdir. Ardınca köçürülən məbləğ müqabilində xana ayrılır. Siz bu xanada olmasını istədiyiniz vizualı və bu vizuala tıkladıqda aparacağı linki qeyd edirsiniz. <br><br> <b>Nümunə<b/> Yardım hesabına 250 AZN ödəmisiniz. Bu o deməkdir ki, siz artıq 25 qutu (xana) sahibisiniz. Səhifədən sizə 5x5 ölçülü sahə ayrılır. Bu sahəyə sizin vizual, həmçinin  link yerləşdirilir və 2022-ci ilin dekabrınadək aktiv qalır.  quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihilLorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quiorohil",
    },
    counter: '<div style="border: 3px inset #ffffff; text-align: center; width: 110%; border-radius:15px;">Qalan qutuların sayı<br> <b> <center> 9919 </b> </div>',
    logo: "./images/logo.png",
    instagram: 'https://www.instagram.com/heyatqutusu.az/',
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
      cntImg.setAttribute("src", data[page].banner);
      cntImg.setAttribute("alt", "contact image");
      let banner = document.getElementById("banner");
      banner.appendChild(cntImg);

      let cText = document.createElement("p");
      cText.innerHTML = data[page].text;
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
