<!DOCTYPE html>
<?php include_once("includes/analyticstracking.php") ?>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content="En este sitio se encuentra con la cobertura por provincias y cantones donde se ofrece el servicio de Didi">
        <meta name="keywords" content="DidiCalc, Calculadora, Viajes, Didi, Calcular Viaje, Calculadora de viajes, Viajes de Didi, Cobertura, Cantones, Provincias, Costa Rica">
        <meta http-equiv="Expires" content="5">

        <!-- Canonical Tag -->        
        <link rel="canonical" href="https://crdidicalc.azurewebsites.net/country/cr/" />

        <!-- Facebook Meta Tags -->
        <meta property="og:url" content="https://crdidicalc.azurewebsites.net/">
        <meta property="og:type" content="website">
        <meta property="og:title" content="Calculadora de viajes de Didi">
        <meta property="og:description" content="Aquí podrás verificar tus viajes de la plataforma Didi de una forma fácil, segura y 100% gratuito">
        <meta property="og:image" content="https://crdidicalc.azurewebsites.net/img/calculator-128.png">

        <!-- Twitter Meta Tags -->
        <meta name="twitter:card" content="summary_large_image">
        <meta property="twitter:domain" content="crdidicalc.azurewebsites.net">
        <meta property="twitter:url" content="https://crdidicalc.azurewebsites.net/">
        <meta name="twitter:title" content="Calculadora de viajes de Didi">
        <meta name="twitter:description" content="Aquí podrás verificar tus viajes de la plataforma Didi de una forma fácil, segura y 100% gratuito">
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
        <link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.css">
        <!-- endbuild -->

        <!-- Title -->
        <title>DidiCalc - Cobertura del servicio de Didi</title>

    </head>
    <body>
        <!-- Cookies modal -->
        <?php include_once("includes/cookies_modal.php") ?>
        <!-- Content -->    
        <header>
            <?php include_once("includes/header.php") ?>
        </header>
        <div class="container-fluid">
            <div class="row">
                <div id="cal_details" class="g-col-sm-12 g-col-md-12 g-col-lg-12">
                    <div class="card card-margin">
                        <img src="img/didi_coverage_background.jpg" class="card-img-top" alt="Cobertura de servicios de Didi en tu ciudad">
                        <div class="card-body">
                            <h5 class="card-title">Cobertura del servicio de didi</h5>
                            <p class="card-text">
                                En este sitio se encuentra con la cobertura por provincias y cantones donde se ofrece el servicio de 
                                Didi Desde el noviembre del 2019 que Didi inició operaciones su cobertura está en:
                            <ul>
                                <li>San José</li>
                                <li>Heredia</li>
                                <li>Alajuela</li>
                                <li>Puntarenas</li>
                            </ul>
                                A continuación, puede ver el detalle de los cantones en los cuales Didi opera desde el inicio:
                            </p>
                            <p class="card-text">
                            <center>
                                <img class="img-fluid" src="img/mapa_covertura.svg"/>
                                <p class="fuente">Fuente: Aguilar Arroyo, Yenci (2019) Didi arranca este martes con promos que busca desbancar a Uber, La Teja, Fecha de consulta: 9 de abril del 2019. URL: <a href="https://www.lateja.cr/nacional/didi-arranca-este-martes-con-promos-que-buscan/VQE7MUUXBBFNLDV7TZKTZTPEQQ/story/" title="Didi arranca este martes con promos que busca desbancar a Uber" hreflang="es">https://www.lateja.cr/nacional/didi-arranca-este-martes-con-promos-que-buscan/VQE7MUUXBBFNLDV7TZKTZTPEQQ/story/</a></p>
                            </center>
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
