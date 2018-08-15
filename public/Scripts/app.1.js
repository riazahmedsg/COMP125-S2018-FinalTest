/* Custom JS goes here */
/* File name:           app.js
Author's name:          Riaz Ahmed
web site name:          https://github.com/riazahmedsg/COMP125-S2018-FinalTest.git
file description:       contains Javascript code Code      */
(function(){

    function Start() {
        console.log(`%c App Started...`,"color:blue; font-size: 30px; font-weight:bold;");
       // Your Code goes here
       let XHR;
       let addressBook;
       let Contacts;
      
        // function loadProjects () {
        XHR = new XMLHttpRequest();
        XHR.addEventListener('readystatechange', function () {
            if ((this.status === 200) &&
                (this.readyState === 4)) {
                data = JSON.parse(this.responseText)
                console.log('Data finished loading');
                console.log(`Myprop: ${data.myprop}`);
                console.log(`Yourprop: ${data.yourprop}`);

                document.getElementById('riaz').textContent = data.myprop;
                document.getElementById('nusrat').textContent = data.yourprop;
                

            }

        })
        XHR.open('GET', "data.json");
        XHR.send()

    }

    window.addEventListener("load", Start);
})();