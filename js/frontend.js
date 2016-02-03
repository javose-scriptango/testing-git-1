/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

jQuery(document).ready(function ($) {

//var
    var display = jQuery("#display");
    var g = new Outils();
    var mail = "jsantiago@conversationnel.fr";
    var outils = g.tester_email(mail);

    var test = new Test();
    test.param_de_classe_prive = "big,oi"
    var param_de_classe = test.param_de_classe_prive;

    truc = "dffd";
//functions
            function resolve(res) {
                console.log(res);
            }

    function reject(err) {
        console.log(err);
    }

//ev
    display.html(param_de_classe);


var promise = new Promise(function(resolve, reject) {
 truc = "chose";

  if (truc) {
    resolve("Ces trucs ont marché !");
  }
  else {
    reject(Error("Ça a foiré"));
  }
});

promise.then(function(result) {
  console.log(result); // "Ces trucs ont marché !"
}, function(err) {
  console.log(err); // Error: "Ça a foiré"
});





})


