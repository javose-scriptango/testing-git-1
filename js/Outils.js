/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Outils
//constructeur
function Outils() {
}

//méthodes
Outils.prototype = {
    //détecter mobile
    getMobileOperatingSystem: function () {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i))
        {
            return 'iOS';

        }
        else if (userAgent.match(/Android/i))
        {

            return 'Android';
        }
        else
        {
            return 'unknown';
        }
    },
    //tester mail
    tester_email: function (un_email) {

        var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');

        if (reg.test(un_email))
        {
            return(true);
        }
        else
        {
            return(false);
        }
    },
//cookie
    createCookie: function (name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        }
        else
            var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    },
    readCookie: function (name) {

        var nameEQ = name + "=";
        var ca = document.cookie.split(';');

        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }

        return null;

    },
    eraseCookie: function (name) {

        createCookie(name, "", -1);
    },
//popup
    affichage_popup: function (nom_de_la_page) {
        popup = window.open(nom_de_la_page, "partage réseaux sociaux", config = 'height=600, width=600, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
        popup.focus();
    },
//rend durée au foramt h/m/s
    lisibilite_nombre: function (nbr)
    {
        var nombre = '' + nbr;
        var retour = '';
        var count = 0;
        for (var i = nombre.length - 1; i >= 0; i--)
        {
            if (count != 0 && count % 3 == 0)
                retour = nombre[i] + ' ' + retour;
            else
                retour = nombre[i] + retour;
            count++;
        }

        return retour;
    },
//to close browser without Prompt or Warning, it can also be called from Flash
    closeWindows: function () {
        var browserName = navigator.appName;
        var browserVer = parseInt(navigator.appVersion);
        //alert(browserName + " : "+browserVer);

        //document.getElementById("flashContent").innerHTML = "<br>&nbsp;<font face='Arial' color='blue' size='2'><b> You have been logged out of the Game. Please Close Your Browser Window.</b></font>";

        if (browserName == "Microsoft Internet Explorer") {
            var ie7 = (document.all && !window.opera && window.XMLHttpRequest) ? true : false;
            if (ie7)
            {
                //This method is required to close a window without any prompt for IE7 & greater versions.
                window.open('', '_parent', '');
                window.close();
            }
            else
            {
                //This method is required to close a window without any prompt for IE6
                this.focus();
                self.opener = this;
                self.close();
            }
        } else {
            //For NON-IE Browsers except Firefox which doesnt support Auto Close
            try {
                this.focus();
                self.opener = this;
                self.close();
            }
            catch (e) {

            }

            try {
                window.open('', '_self', '');
                window.close();
            }
            catch (e) {

            }
        }
    },
//retour json wp
    normaliser_retour: function (variable_json) {
        vj = variable_json.substr(0, variable_json.length - 1);
        vje = eval('(' + vj + ')');
        return vje;
    },
//loader
    afficher_loader: function () {
        image_loader.css({"display": "block"});
    },
    supprimer_loader: function () {
        image_loader.css({"display": "none"});
    }

//end
};












