// var mainDiv = document.getElementById('workMap');
var cntObj = {
      contactImg: '/img.jpg',
      fullName: 'Name Surname: Conor McGregor',
      eMail: 'Email: pixels@gmail.com',
      phone: 'Phone: +994 55 555-55-55',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihiliure, quibusdam cum recusandae nisi ut odio nesciunt debitis sint quioptio, voluptates saepe. Error commodi reiciendis quia neque officiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nihil',
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
      cEmail.innerHTML = cntObj.eMail
      let contactEmail = document.getElementById("contactEmail")
      contactEmail.appendChild(cEmail)

      let cName = document.createElement("span");
      cName.innerHTML = cntObj.fullName
      let contactName = document.getElementById("contactName")
      contactName.appendChild(cName)

      let cPhone = document.createElement("span");
      cPhone.innerHTML = cntObj.phone
      let contactPhone = document.getElementById("contactPhone")
      contactPhone.appendChild(cPhone)
  }
  
  appendElementsContact();
  