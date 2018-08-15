/* Custom JS goes here */
/* File name:           contact.js
Author's name:          Riaz Ahmed
web site name:          https://github.com/riazahmedsg/COMP125-S2018-FinalTest.git
file description:       contains Javascript code Code      */
let objects;
(function(){
    class Contact {
        // your class definition goes here
        constructor(firstName = "", lastName = "", contactNumber = "", emailAddress = "") {
            this.firstName = firstName;
            this.lastName = lastName;
            this.contactNumber = contactNumber;
            this.emailAddress = emailAddress;
        }
    }

    objects.Contact = Contact;

})(objects || (objects = {}));