window.onload = function () {
  var workMap = document.getElementById("workMap");
  var myObj = {
    imageUrl: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e6e26d9aa5428000759e96c%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D960%26cropY1%3D122%26cropY2%3D965",
    contactImg: 'https://www.codeitbro.com/wp-content/uploads/2020/09/benefits-of-computer-programming.jpg',
    fullName: 'Conor McGregor',
    eMail: 'pixels@gmail.com',
    phone: '+994 55 555-55-55',
    text: 'Lorem ipsum dolor nitcg um recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihil Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihilLorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Errohil',
    areas: [
      {
        url: "site1.com",
        title: "site1",
        start: [0, 0],
        end: [1, 1],
        alt: "alt",
      },
      {
        url: "site2.com",
        title: "site2",
        start: [1, 0],
        end: [10, 1],
        alt: "alt",
      },
      {
        url: "site3.com",
        title: "site3",
        start: [10, 0],
        end: [11, 1],
        alt: "alt",
      },
      {
        url: "site4.com",
        title: "site4",
        start: [11, 0],
        end: [12, 1],

        alt: "alt",
      },
      {
        url: "site5.com",
        title: "site5",
        start: [12, 0],
        end: [13, 1],

        alt: "alt",
      },
      {
        url: "site6.com",
        title: "site6",
        start: [13, 0],
        end: [14, 1],

        alt: "alt",
      },
      {
        url: "site7.com",
        title: "site7",
        start: [14, 0],
        end: [15, 1],

        alt: "alt",
      },
      {
        url: "site8.com",
        title: "site8",
        start: [15, 0],
        end: [16, 2],

        alt: "alt",
      },
      {
        url: "site9.com",
        title: "site9",
        start: [16, 0],
        end: [18, 2],

        alt: "alt",
      },
      {
        url: "site10.com",
        title: "site10",
        start: [18, 0],
        end: [19, 1],

        alt: "alt",
      },
      {
        url: "site11.com",
        title: "site11",
        start: [19, 0],
        end: [21, 2],

        alt: "alt",
      },
      {
        url: "site12.com",
        title: "site12",
        start: [0, 1],
        end: [1, 2],

        alt: "alt",
      },
      {
        url: "site13.com",
        title: "site13",
        start: [0, 2],
        end: [1, 3],

        alt: "alt",
      },
      {
        url: "site14.com",
        title: "site14",
        start: [0, 3],
        end: [1, 4],

        alt: "alt",
      },
      {
        url: "site14.com",
        title: "site14",
        start: [0, 4],
        end: [3, 5],

        alt: "alt",
      },
      {
        url: "site15.com",
        title: "site15",
        start: [0, 5],
        end: [1, 6],

        alt: "alt",
      },
      {
        url: "site16.com",
        title: "site16",
        start: [0, 6],
        end: [3, 9],

        alt: "alt",
      },
      {
        url: "site17.com",
        title: "site17",
        start: [0, 9],
        end: [2, 11],

        alt: "alt",
      },
      {
        url: "site18.com",
        title: "site18",
        start: [0, 11],
        end: [1, 12],

        alt: "alt",
      },
      {
        url: "site19.com",
        title: "site19",
        start: [0, 12],
        end: [1, 13],

        alt: "alt",
      },
      {
        url: "site20.com",
        title: "site20",
        start: [0, 13],
        end: [1, 14],

        alt: "alt",
      },
      {
        url: "site21.com",
        title: "site21",
        start: [0, 14],
        end: [3, 15],

        alt: "alt",
      },
      {
        url: "site22.com",
        title: "site22",
        start: [0, 15],
        end: [1, 16],

        alt: "alt",
      },
      {
        url: "site23.com",
        title: "site23",
        start: [0, 16],
        end: [1, 17],

        alt: "alt",
      },
      {
        url: "site24.com",
        title: "site24",
        start: [0, 17],
        end: [1, 18],

        alt: "alt",
      },
      {
        url: "site25.com",
        title: "site25",
        start: [0, 18],
        end: [1, 19],

        alt: "alt",
      },
      {
        url: "site26.com",
        title: "site26",
        start: [0, 19],
        end: [3, 20],
        alt: "alt",
      },
      {
        url: "site27.com",
        title: "site27",
        start: [0, 20],
        end: [9, 26],

        alt: "alt",
      },
    ],
  };

  function appendElements() {
    let isContact = window.location.pathname.includes('contact')
    if (isContact) {
      let cntImg = document.createElement("img");
      cntImg.setAttribute('src', myObj.contactImg);
      cntImg.setAttribute('alt', 'contactImg');
      let contactImg = document.getElementById("contactImg")
      contactImg.appendChild(cntImg);

      let cText = document.createElement("p");
      cText.innerHTML = myObj.text
      let contactText = document.getElementById("contactText")
      contactText.appendChild(cText)

      let cEmail = document.createElement("span");
      cEmail.innerHTML = "Email : " + myObj.eMail
      let contactEmail = document.getElementById("contactEmail")
      contactEmail.appendChild(cEmail)

      let cName = document.createElement("span");
      cName.innerHTML = "Ad Soyad : " + myObj.fullName
      let contactName = document.getElementById("contactName")
      contactName.appendChild(cName)

      let cPhone = document.createElement("span");
      cPhone.innerHTML = "Əlaqə nömrəsi : " + myObj.phone
      let contactPhone = document.getElementById("contactPhone")
      contactPhone.appendChild(cPhone)
    }
    else {
      let oImg = document.createElement("img");
      oImg.setAttribute("src", myObj.imageUrl);
      oImg.setAttribute("alt", "img");
      oImg.setAttribute("height", "100%");
      oImg.setAttribute("width", "100%");
      oImg.setAttribute("usemap", "#workmap");
      let pixels = document.getElementById("pixels");
      pixels.appendChild(oImg);

      for (let ar of myObj.areas) {
        let area = document.createElement("area");
        const { title, url, alt, start, end } = ar;
        area.setAttribute(
          "coords",
          start.concat(end).map((i) => i * 10)
        );
        area.setAttribute("title", title);
        area.setAttribute("href", url);
        area.setAttribute("target", "_blank");
        area.setAttribute("alt", alt);
        area.setAttribute("shape", "rect");
        workMap.appendChild(area);
      }
    }
  }
  appendElements();
};


