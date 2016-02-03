/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class Human {
 
  constructor(firstName = "John", lastName = "Doe") {
    /* Et oui les paramètres par défaut existent! */
 
    /* membres d'instance */
    this.firstName = firstName;
    this.lastName = lastName;
  }
 
  hello() {
    console.log(this.firstName);
  }
 
}
 
export default Human;