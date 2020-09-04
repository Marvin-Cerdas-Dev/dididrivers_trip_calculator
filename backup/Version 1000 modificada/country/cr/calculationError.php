<!DOCTYPE html>
<?php include_once("../../includes/analyticstracking.php") ?>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content="Aquí podras verificar tus viajes de la plataforma Didi de una forma fácil y segura">
        <meta name="keywords" content="DidiCalc, Calculadora, Viajes, Didi, Calcular Viaje, Calculadora de viajes, Viajes de Didi">
        <meta http-equiv="Expires" content="5">

        <!-- Miniature -->
        <meta property="og:title" content="Calculadora de viajes de Didi" />
        <meta property="og:site_name" content="DidiCalc">
        <meta property="og:url" content="http://crdidicalc.azurewebsites.net/" />
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="Aquí podras verificar tus viajes de la plataforma Didi de una forma fácil y segura">
        <meta property="og:image" content="http://crdidicalc.azurewebsites.net/img/calculator_128.png">

        <!-- Favicon -->
        <link rel="apple-touch-icon" sizes="180x180" href="../../img/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="../../img/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="../../img/favicon-16x16.png">
        <link rel="manifest" href="../../img/manifest.json">
        <link rel="mask-icon" href="../../img/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="theme-color" content="#ffffff">

        <script type="application/ld+json">
            {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "DidiCalc",
            "url": "https://crdidicalc.azurewebsites.net/",
            "address": "Costa Rica",
            "sameAs": [
            "https://www.facebook.com/calculadoradeplataformasdigitales/"
            ]
            }
        </script>

        <script type="application/ld+json">
            {
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "DidiCalc",
            "url": "http://crdidicalc.azurewebsites.net/",
            "address": "Costa Rica",
            "potentialAction": {
            "@type": "SearchAction",
            "target": "http://crdidicalc.azurewebsites.net/search?q={search_term_string}Buscar",
            "query-input": "required name=search_term_string"
            }
            }
        </script>

        <script>
            AOS.init();
        </script>

        <!-- build:css ../../dist/css -->
        <link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.min.css">
        <link href="../../css/default.css" rel="stylesheet">        
        <link href="../../node_modules/aos/dist/aos.css" rel="stylesheet"> 
        <!-- endbuild -->

        <!-- Title -->
        <title>DidiCalc - Error en los calculos</title>   

    </head>
    <!-- Cookies modal -->
    <div class="modal fade" id="cookieModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-update" role="document">
            <div class="modal-content modal-content-update">
                <div class="modal-body">
                    <div class="notice d-flex justify-content-between align-items-center">
                        <div class="cookie-text">Al usar este sitio acepta el uso de cookies para análisis y contenido personalizado. <button id="learMore" type="button" class="btn btn-update2 buttons btn-sm">Leer más</button></div>
                        <div class="buttons d-flex flex-column flex-lg-row">
                            <button id="acept" type="button" class="btn btn-update buttons btn-sm" data-dismiss="modal">Acepto</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Content -->
    <header>
        <?php include_once("../../includes/header.php") ?>
    </header>
    <div class="container-fluid">
        <div class="row">
            <div id="cal_details" class="col-sm-12 col-md-12 col-lg-12">
                <div class="border rounded padding-container">
                    <center>
                        <img class="img-responsive image-margin" src="images/shield-error.png" alt="Error en la página web"/>
                    </center>
                    <div class="caption">
                        <h1>Error en los calculos</h1>
                        <p>Se ha presentado un error a la hora de hacer los calculos, por favor vuelve seleccionar una opcion para realizar el calculo de tu viaje de Didi</p>
                        <p>
                            <button type="button" class="btn btn-update btn-lg btn-block" id="calc_details">Calculadora detallada</button>
                        </p>
                        <p>
                            <!--AdSense-->
                            <?php include_once("../../includes/ads.php") ?>  
                            <!--AdSense-->
                        </p>
                        <p>
                            <button type="button" class="btn btn-update btn-lg btn-block" id="calc_simple">Calculadora simple</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer><?php include_once("../../includes/footer.php") ?></footer>
    <!-- JavaScript -->
    <!-- build:js ../../dis/js -->
    <script src="../../node_modules/jquery/dist/jquery.min.js"></script>
    <script src="../../node_modules/popper.js/dist/popper.min.js"></script>
    <script src="../../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="../../js/index-scripts.js"></script>
    <script src="../../js/jquery.cookie.js"></script>
    <script src="../../js/country.js"></script>
    <script src="../../js/form-scripts.js"></script>
    <script src="../../js/calculatescripts.js"></script>
    <script src="../../js/defaultscripts.js"></script>
    <script src="../../node_modules/aos/dist/aos.js"></script>
    <!-- endbuild -->
</body>
</html>
