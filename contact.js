// var mainDiv = document.getElementById('workMap');
var cntObj = {
      contactImg: 'https://www.codeitbro.com/wp-content/uploads/2020/09/benefits-of-computer-programming.jpg',
      fullName: 'Conor McGregor',
      eMail: 'pixels@gmail.com',
      phone: '+994 55 555-55-55',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihil Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihil Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihil Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihilLorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihil',
  };
  
  
  function appendElementsContact() {
      let cntImg = document.createElement("img");
      cntImg.setAttribute('src', cntObj.contactImg);
      cntImg.setAttribute('alt', 'contactImg');
      let contactImg = document.getElementById("contactImg")
      contactImg.appendChild(cntImg);

  
      let cText = document.createElement("p");
      cText.innerHTML = cntObj.text
      let contactText = document.getElementById("contactText")
      contactText.appendChild(cText)

      let cEmail = document.createElement("span");
      cEmail.innerHTML = "Email : " + cntObj.eMail
      let contactEmail = document.getElementById("contactEmail")
      contactEmail.appendChild(cEmail)

      let cName = document.createElement("span");
      cName.innerHTML = "Ad Soyad : " + cntObj.fullName
      let contactName = document.getElementById("contactName")
      contactName.appendChild(cName)

      let cPhone = document.createElement("span");
      cPhone.innerHTML = "Əlaqə nömrəsi : " + cntObj.phone
      let contactPhone = document.getElementById("contactPhone")
      contactPhone.appendChild(cPhone)
  }
  
  appendElementsContact();
  