/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Test
//constructeur
function Test() {
    //variable d'instance public
    this.param_de_classe_public = "dunnowhatyoumean";
    //variable d'instance privé
    var param_de_classe_prive = "variable_prive_donc";
    //methode prive
    this.get_param_de_classe_prive = function () {

        return param_de_classe_prive;

    };
}

//méthodes
Test.prototype = {
    //getter
    get_param: function () {
        return this.param_de_classe_public;

    }
//end
};












