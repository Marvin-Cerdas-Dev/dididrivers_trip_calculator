<!DOCTYPE html>
<?php include_once("includes/analyticstracking.php") ?>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content="Aquí podras verificar tus viajes de la plataforma Didi de una forma fácil y segura">
        <meta name="keywords" content="DidiCalc, Calculadora, Viajes, Calcular tarifa DiDi, Didi, Cotizar Viaje, Calculadora de viajes, Didi cotizar viaje, Cotizar Viaje Didi, usar, este, sitio, DIDI, DiDi calcular tarifa, VIAJES DIDI, VIAJES, Calculadora DiDi, CALCULADOR, Calculadora viajes Didi, Costa Rica, México, paises, privacidad, política, servicios, país, selecione, calcular tarifa didi, simulador didi">
        <meta http-equiv="Expires" content="5">

        <!-- Canonical Tag -->        
        <link rel="canonical" href="https://crdidicalc.azurewebsites.net/country/cr/" />

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
        
        <!--AdSense-->
        <?php include_once("includes/ads.php") ?> 

        <!-- build:css css/styles.css -->
        <link rel="stylesheet" href="css/default.css" >     
        <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css">
        <!-- endbuild -->

        <!-- Title -->
        <title>DidiCalc - Política de privacidad</title>

    </head>
    <body>
        <!-- Cookies modal -->
        <?php include_once("includes/cookies_modal.php") ?>
        <!-- Content -->    
        <header>
            <?php include_once("includes/prev_header.php") ?>
        </header>
        <div class="container-fluid">
            <div class="row">
                <div id="cal_details" class="g-col-sm-12 g-col-md-12 g-col-lg-12">
                    <div class="card card-margin padding-container">
                        <h1 class="center-text">CALCULADOR DE VIAJES DE DIDI</h1>
                        <h2 class="center-text">Selecione su país</h2>
                        <div class="rounded mx-auto d-block center-text">
                            <a id="flag-cr" href="country/cr/index.php">
                                <img class="img-fluid" src="img/costa_rica.png" alt="Costa Rica"  width="60%" height="60%">
                            </a>
                        </div>
                        <div class="rounded mx-auto d-block center-text">
                            <a id="flag-mx" href="country/mx/index.php">
                                <img class="img-fluid" src="img/mexico.png" alt="México" width="60%" height="60%">
                            </a>  
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer><?php include_once("includes/footer.php") ?></footer>
        <!-- build:js js/js.js -->
        <script src="node_modules/jquery/dist/jquery.js"></script>
        <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
        <script src="js/defaultscripts.js"></script>
        <script src="js/index-scripts.js"></script>
        <script src="js/jquery.cookie.js"></script>
        <!-- endbuild -->
    </body>
</html>

