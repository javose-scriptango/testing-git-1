/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//var
var outils = new Outils();
Object.defineProperty(window, 'DOSSIER_RACINE', {value: "testing-git-1/", writable: false});
Object.defineProperty(window, 'RACINE_SERVEUR', {value: outils.getBaseURL(), writable: false});
Object.defineProperty(window, 'RACINE_VISUEL', {value: outils.getBaseURL() + "images/", writable: false});
Object.defineProperty(window, 'APPID_FB', {value: "942597269163157", writable: false});
Object.defineProperty(window, 'URL_RETOUR', {value: RACINE_SERVEUR + DOSSIER_RACINE, writable: false});