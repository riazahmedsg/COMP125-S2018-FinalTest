/* Custom JS goes here */
/* File name:           addressbook.js
Author's name:          Riaz Ahmed
web site name:          riazahmedsg.github.io
file description:       contains Javascript code Code      */
(function () {
    class AddressBook {
        constructor() {
            this.Contacts = [];
        }

        // complete the addressbook class
        addItem(newItem) {
            this.items.push(newItem);
        }


    }

    objects.AddressBook = AddressBook;

})(objects || (objects = {}));




// let address = new AddressBook();
// address.addItem(item1);
// address.addItem(item2);
// address.addItem(item3);