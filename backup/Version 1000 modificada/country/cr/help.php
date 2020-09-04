<!DOCTYPE html>
<?php include_once("../../includes/analyticstracking.php") ?>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content="Este sitio muestra los contactos de ayuda que usted puede utilizar en caso de emergencia, mientras utiliza la plataforma Didi">
        <meta name="keywords" content="DidiCalc, Didi, Ayuda, Emergencia, Socios, Plataforma, Contactos, Contactos de emergencia, Números de emergencia, Llamar a emergencias">
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
        <title>DidiCalc - Ayuda en caso de emergencia</title>

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
            <div class="card md-3 card-update">
                <img src="../../img/emergency_help.jpg" class="card-img-top" alt="Servicios de ayuda de Didi">
                <div class="card-body">
                    <h1 class="card-title">Ayuda</h1>
                    <p class="card-text">
                        Desde sus inicios Didi implementó lineas telefónicas para brindar ayuda a sus usurios y conductores en caso de emergencia.
                    </p>
                    <h6 class="card-title">Linea de emergencia para <b>Conductores</b></h6>
                    <p class="card-text">
                        <a href="tel:4002-6947" class="btn btn-update" hreflang="es"><b>4002-6947</b></a>
                    </p>
                    <h6 class="card-title">Linea de emergencia para <b>Usuarios</b></h6>
                    <p class="card-text">
                        <a href="tel:4002-3814" class="btn btn-update" hreflang="es"><b>4002-3814</b></a>
                    </p>
                    <p class="card-text">
                        <!--AdSense-->
                        <?php include_once("../../includes/ads.php") ?>  
                        <!--AdSense-->
                    </p>
                    <p class="card-text">
                        Recuerdas que siempre es muy importante informar a las autoridades correspondientes de cualquier incidentes o si necesitas ayuda inmediata por medio de número de emergencias.
                    </p>
                    <p class="card-text">
                        <a href="tel:911" class="btn btn-update" hreflang="es"><b>911</b></a>
                    </p>
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
