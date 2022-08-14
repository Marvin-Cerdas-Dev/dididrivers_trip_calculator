<!DOCTYPE html>
<?php include_once("includes/analyticstracking.php") ?>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content="En esta plataforma entradas la opcíón de verificar tus viajes de la plataforma Didi de una forma fácil y segura.">
        <meta name="keywords" content="DidiCalc, Calculadora, Viajes, Didi, Calcular Viaje, Calculadora de viajes, Viajes de Didi, México">
        <meta http-equiv="Expires" content="5">

        <!-- Canonical Tag -->        
        <link rel="canonical" href="https://crdidicalc.azurewebsites.net/country/mx/" />

        <!-- Facebook Meta Tags -->
        <meta property="og:url" content="https://crdidicalc.azurewebsites.net/">
        <meta property="og:type" content="website">
        <meta property="og:title" content="Calculadora de viajes de Didi">
        <meta property="og:description" content="Aquí podrás verificar tus viajes de la plataforma Didi de una forma fácil y segura">
        <meta property="og:image" content="https://crdidicalc.azurewebsites.net/img/calculator-128.png">

        <!-- Twitter Meta Tags -->
        <meta name="twitter:card" content="summary_large_image">
        <meta property="twitter:domain" content="crdidicalc.azurewebsites.net">
        <meta property="twitter:url" content="https://crdidicalc.azurewebsites.net/">
        <meta name="twitter:title" content="Calculadora de viajes de Didi">
        <meta name="twitter:description" content="Aquí podrás verificar tus viajes de la plataforma Didi de una forma fácil y segura">
        <meta property="twitter:image:alt" content="DidiCalc">
        <meta name="twitter:image" content="https://crdidicalc.azurewebsites.net/img/calculator-128.png">

        <!-- Favicon -->
        <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png">
        <meta name="theme-color" content="#ffffff">

        <script type="application/ld+json">
            {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "DidiCalc",
            "url": "https://crdidicalc.azurewebsites.net/",
            "address": "México",
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
            "url": "https://crdidicalc.azurewebsites.net/",
            "address": "México",
            "potentialAction": {
            "@type": "SearchAction",
            "target": "https://crdidicalc.azurewebsites.net/search?q={search_term_string}Buscar",
            "query-input": "required name=search_term_string"
            }
            }
        </script>

        <!-- build:css css/styles.css -->
        <link rel="stylesheet" href="css/default.css">
        <link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.css">        
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
        <?php include_once("includes/header.php") ?>
    </header>
    <div class="container-fluid">
        <div class="row">
            <div id="cal_details" class="col-sm-12 col-md-12 col-lg-12">
                <div class="border rounded padding-container">
                    <center>
                        <img class="img-responsive image-margin" src="img/shield-error.png" alt="Error en la página web"/>
                    </center>
                    <div class="caption">
                        <h1>Error en los calculos</h1>
                        <p>Se ha presentado un error a la hora de hacer los calculos, por favor vuelve seleccionar una opcion para realizar el calculo de tu viaje de Didi</p>
                        <p>
                            <button type="button" class="btn btn-update btn-lg btn-block" id="calc_details">Calculadora detallada</button>
                        </p>
                        <div class="mb-3 row">
                            <div class="col-sm-12 col-md-12 col-lg-12">
                                <div class="horizontal-center">
                                    <!--AdSense-->
                                    <?php include_once("includes/ads.php") ?>  
                                    <!--AdSense-->
                                </div>
                            </div>
                        </div>
                        <p>
                            <button type="button" class="btn btn-update btn-lg btn-block" id="calc_simple">Calculadora simple</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer><?php include_once("includes/footer.php") ?></footer>
    <!-- build:js js/js.js -->
    <script src="../../node_modules/jquery/dist/jquery.js"></script>
    <script src="../../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
    <script src="js/index-scripts.js"></script>
    <script src="js/form-scripts.js"></script>
    <script src="js/calculatescripts.js"></script>
    <script src="js/defaultscripts.js"></script>
    <script src="js/jquery.cookie.js"></script>
    <!-- endbuild -->
</body>
</html>
