/* Custom JS goes here */
/* File name:           app.js
Author's name:          Riaz Ahmed
web site name:          https://github.com/riazahmedsg/COMP125-S2018-FinalTest.git
file description:       contains Javascript code Code      */
(function () {

    function Start() {
        console.log(`%c App Started...`, "color:blue; font-size: 30px; font-weight:bold;");
        // Your Code goes here
        // App variables
        let XHR;
        let addressBook;
        let Contacts;
        //
        function insertHTML(sourceURL, destTag) {
            let target = document.querySelector(destTag);

            XHR = new XMLHttpRequest();
            XHR.addEventListener("readystatechange", function () {
                if (this.status === 200) {
                    if (this.readyState === 4) {
                        target.innerHTML = this.responseText;
                       

                        if (document.title == "Contacts") {
                            loadJSON();
                        }
                    }
                }
            });
            XHR.open("GET", sourceURL);
            XHR.send();
        }
        //
        function loadJSON() {

            XHR = new XMLHttpRequest();
            XHR.addEventListener("readystatechange", function () {
              if (this.status === 200) {
                if (this.readyState === 4) {
                  addressBook = JSON.parse(this.responseText);
                  console.log("Data finished loading");
        
                  createContacts();
        
                  displayData();
                }
              }
            });
            XHR.open("GET", "data.json");
            XHR.send();
          }
        //
        function createContacts() {
            addressBook.Contacts.forEach(contact => {
              let newContact = new objects.Contact(
                contact.id, contact.name, contact.number, contact.email);
              Contacts.push(newContact);
            });
          }
        //
        function displayData() {

            let tbody = document.querySelector("contactList");
            tbody.innerHTML = "";
        
            Contacts.forEach(contact => {
        
              let tr = document.createElement("tr");
              let th = document.createElement("th");
              th.setAttribute("scope", "row");
              th.textContent = contact.id;
              tr.appendChild(th);
        
              // loop through each property of the contact object
              // then add the property value to the column
              for (const property in contact) {
                if (contact.hasOwnProperty(property)) {
                  if (property != "id") {
                    let td = document.createElement("td");
                    td.textContent = contact[property];
                    tr.appendChild(td);
                  }
                }
              }
        
              let editTd = document.createElement("td");
              let editButton = document.createElement("button");
              editButton.setAttribute("class", "btn btn-primary btn-sm");
              editButton.setAttribute("data-id", contact.id);
              editButton.innerHTML = "<i class='fa fa-edit fa-lg'></i> Edit";
              editTd.appendChild(editButton);
              tr.appendChild(editTd);
        
              editButton.addEventListener("click", (event) => {
                let id = event.currentTarget.getAttribute("data-id");
                console.log(`Editing Item: ${id}`);
              });
        
        
              let deleteTd = document.createElement("td");
              let deleteButton = document.createElement("button");
              deleteButton.setAttribute("class", "btn btn-danger btn-sm");
              deleteButton.setAttribute("data-id", contact.id);
              deleteButton.innerHTML = "<i class='fa fa-trash fa-lg'></i> Delete";
              deleteTd.appendChild(deleteButton);
              tr.appendChild(deleteTd);
        
              deleteButton.addEventListener("click", (event) => {
                let id = event.currentTarget.getAttribute("data-id");
                console.log(`Deleting Item: ${id}`);
        
                let contactToDelete = Contacts.find(function (contact) {
                  return contact.id == id;
                });
        
                Contacts.splice(Contacts.indexOf(contactToDelete), 1);
        
                displayData();
              });
        
        
        
              tbody.appendChild(tr);
            });
        
          }
        //
        function Start() {
            console.log(
              `%c App Initializing...`,
              "font-weight: bold; font-size: 20px;"
            );
        
            Contacts = [];
        
           
          }
        //

        //


    }

    window.addEventListener("load", Start);
})();