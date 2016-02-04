/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

jQuery(document).ready(function ($) {

//var
    display = jQuery("#display");
    g = new Outils();
    var mail = "jsantiago@conversationnel.fr";
    outils = g.tester_email(mail);

    test = new Test();
    test.param_de_classe_prive = "big,oi"
    param_de_classe = test.param_de_classe_prive;

    FB = "";
    id_utilisateur = "";
    accessToken_utilisateur = "";


//functions
    function recuperer_commentaires() {



        var promise = new Promise(function (resolve, reject) {

            FB.api('me/posts?limit=5000', function (response) {



                if (response && !response.error) {




                    for (noeud in response.data) {







                        var id_du_post_recursive = response.data[noeud].id;
                   



                        FB.api("/" + id_du_post_recursive, function (response) {



                            if (response && !response.error) {




                                if (typeof response.comments != "undefined") {

                                    var truc = response.comments.data;

                                    for (var j = 0; j < truc.length; j++) {




                                        var prout = truc[j]["from"]["id"];
                                        




                                       
                                                console.log("contenu commentaire : " + truc[j]["message"]);
                                           
                                           




//                                        

                                        


                                    }

                                }


                            }
                            else {

                            }


                        })




                    }




                    resolve();






                }
                else {
                    reject(Error(response.error));
                }





            })

        })



    }

    function recuperer_posts() {
        var promise = new Promise(function (resolve, reject) {
            FB.api('me/posts?limit=5000', function (response) {



                if (response && !response.error) {







                    for (noeud in response.data) {
                        console.log("image post : " + response.data[noeud].picture + " description : " + response.data[noeud].description);
                        if (response.data[noeud].type == "link") {


                        }
                    }

                    resolve();
                }
                else {
                    reject(Error(response.error));
                }




            })




        })

    }

    function recuperer_nb_videos() {
        var promise = new Promise(function (resolve, reject) {
            FB.api('me/posts?limit=5000', function (response) {

                if (response && !response.error) {





                    for (noeud in response.data) {

                        if (response.data[noeud].type == "video") {



                            var id_video = response.data[noeud].id;



                            FB.api(id_video, function (response) {

                                console.log("source video : " + response.source);
                                console.log("visuel video : " + response.picture);



                            })





                        }
                    }
                    resolve();
                }
                else {
                    reject(Error(response.error));
                }




            })

        })

    }

    function recuperer_nb_photos() {
        var promise = new Promise(function (resolve, reject) {
            FB.api('me/albums?limit=5000', function (response) {

                if (response && !response.error) {

                    for (noeud in response.data) {

                        var id_album = response.data[noeud].id;


                        FB.api(id_album + "/photos", function (response) {
                            for (noeud in response.data) {

                                console.log("id photo album : " + response.data[noeud].id);

                            }
                        })



                    }
                    resolve();
                }
                else {
                    reject(Error(response.error));
                }


            })

        });
    }

    function recuperer_statuts() {

        var promise = new Promise(function (resolve, reject) {

            FB.api("me/posts?limit=5000", function (response) {




                if (response && !response.error) {







                    for (noeud in response.data) {

                        console.log("message status : " + response.data[noeud].message);

                    }

                    resolve();


                }
                else {

                    reject(Error(response.error));

                }



            })

        });

    }

    function recuperer_infos_utilisateur() {

        var promise = new Promise(function (resolve, reject) {

            FB.api("/me/picture?width=800", function (response) {

                if (response && !response.error) {

                    var url_vatar = response.data.url;
                    display.html("<img src=\"" + url_vatar + "\"/>");

                    resolve(url_vatar);

                }
                else {

                    reject(Error(response.error));

                }
            });
        });

        promise.then(function (response) {
            console.log("Succès infos_utilisateur !", response);

            return recuperer_statuts();
        }).then(function (response) {
            console.log("Succès _statuts !", response);

            return recuperer_nb_photos();


        }).then(function (response) {
            console.log("Succès _nb_photos !", response);

            return recuperer_nb_videos();

        }).then(function (response) {
            console.log("Succès _nb_videos !", response);
            return recuperer_posts();


        }).then(function (response) {
            console.log("Succès _posts !", response);
            return recuperer_commentaires();


        }).then(function (response) {
            console.log("Succès _commentaires !", response);
           


        }).catch(function (error) {
            console.log("Échec !", error);
        });



    }

    function init_facebook() {
        //FB
        jQuery.ajaxSetup({cache: true});
        jQuery.getScript('//connect.facebook.net/fr_FR/all.js', function () {
            FB.init({
                appId: APPID_FB,
                status: true,
                xfbml: true,
                version: 'v2.5'
            });

            //


            FB.getLoginStatus(function (response) {
                //facebook : connecté à l'appli

                if (response.status === 'connected') {




                    var uid = response.authResponse.userID;
                    id_utilisateur = uid;
                    var accessToken = response.authResponse.accessToken;
                    accessToken_utilisateur = accessToken;


                    recuperer_infos_utilisateur();











                    // facebook : pas connecté à l'appli ou pas connecté du tout
                } else if (response.status === 'not_authorized') {




                    location.href = 'https://www.facebook.com/dialog/oauth/?client_id=' + APPID_FB + '&display=page&redirect_uri=' + URL_RETOUR + '&scope=user_status, user_photos, user_posts, user_videos';
                    return false;

                } else {



                    location.href = 'https://www.facebook.com/dialog/oauth/?client_id=' + APPID_FB + '&display=page&redirect_uri=' + URL_RETOUR + '&scope=user_status, user_photos, user_posts, user_videos';



                }
            });

        });


    }


//ev
    display.html(param_de_classe);


//    var promise = new Promise(function (resolve, reject) {
//        jQuery.ajax({
//            type: "GET",
//            url: 'http://localhost:8888/php/frontend.php',
//            data: {}
//        }).done(function (msg) {
//
//            var truc = eval('(' + msg + ')')
//
//
//            if (typeof truc == 'object') {
//                resolve(truc);
//            }
//            else {
//                reject(Error("Ça a foiré"));
//            }
//        });
//    });
//
//    promise.then(function (result) {
//        console.log(result); // "Ces trucs ont marché !"
//    }, function (err) {
//        console.log(err); // Error: "Ça a foiré"
//    });

//facebook
    init_facebook();





//end
})

