<!DOCTYPE html>
<?php include_once("includes/analyticstracking.php") ?>
<?php include_once("includes/viajeExpress.php") ?>
<?php include_once("./includes/viajeEconomy.php") ?>
<?php $viajeExpress = new viajeExpress(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0) ?>
<?php $viajeEconomy = new viajeEconomy(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0) ?>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content="Aquí podrás verificar cuales son las tarifas oficiales de la plataforma Didi.">
        <meta name="keywords" content="DidiCalc, Calculadora, Viajes, Didi, Calcular Viaje, Calculadora de viajes, Viajes de Didi, Tarifas, Precio, Montos, Costa Rica">
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
        <title>DidiCalc - Tarifas de Didi en Costa Rica</title>

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
                        <img src="img/didi_fares_background.jpg" class="card-img-top" alt="Tarifas de los servicios de Didi">
                        <div class="card-body">
                            <h1 class="card-title">Tarifas de Didi</h1>
                            <p class="card-text justify-text">
                                A partir del 19 de noviembre del 2019 la empresa china Didi empezó sus 
                                operaciones en Costa Rica ofreciendo descuentos para los usuarios y 
                                beneficios económicos a los conductores.<br><br>
                                Este servicio opera en San José, Alajuela, Heredia, Cartago y Puntarenas 
                                (ver todos cantones de cobertura <a href="coverage.php" hreflang="es">
                                <b>aquí</b></a>)<br><br>
                                Las tarifas ofrecidas para los conductores son las siguientes:<br><br>
                                <b>Didi Express</b>
                            <ul>
                                <li>Tarifa mínima: <?php echo "&#8353;" . $viajeExpress->getMinimunFare() ?></li>
                                <li>Tarifa base: <?php echo "&#8353;" . $viajeExpress->getBasicFare() ?></li>
                                <li>&ensp;+ por km: <?php echo "&#8353;" . $viajeExpress->getKilometerFare() ?>/km</li>
                                <li>&ensp;+ por minuto: <?php echo "&#8353;" . $viajeExpress->getMinuteFare() ?>/min</li>
                                <li>Distancia larga: <?php echo "&#8353;" . $viajeExpress->getExtraCharge10KmFare() ?>/km (Se cobrará una tarifa de distancia larga en viajes cuyo recorrido excedan los 10km)</li>
                            </ul>
                            <b>Didi Economy</b>
                            <ul>
                                <li>Tarifa mínima: <?php echo "&#8353;" . $viajeEconomy->getMinimunFare() ?></li>
                                <li>Tarifa base: <?php echo "&#8353;" . $viajeEconomy->getBasicFare() ?></li>
                                <li>&ensp;+ por km: <?php echo "&#8353;" . $viajeEconomy->getKilometerFare() ?>/km</li>
                                <li>&ensp;+ por minuto: <?php echo "&#8353;" . $viajeEconomy->getMinuteFare() ?>/min</li>
                                <li>Distancia larga: <?php echo "&#8353;" . $viajeEconomy->getExtraCharge10KmFare() ?>/km (Se cobrará una tarifa de distancia larga en viajes cuyo recorrido excedan los 10km)</li>
                            </ul>
                            </p>
                            <p class="card-text justify-text">
                                Puede verificar de forma detallada sus ganancias aquí:
                            </p>
                            <div class="container-fluid my-2">
                                <div class="d-grid gap-2 col-md-12 col-md-12 col-lg-12 col-sm-12 text-center">
                                    <button type="button" class="btn btn-update btn-lg btn-block" id="calc_details">Verificar ganancias de forma detallada</button>
                                </div>
                            </div>
                            <p class="card-text justify-text">
                                También si lo prefiere puede verificar sus ganancias de forma simple aquí:
                            </p>
                            <div class="container-fluid my-2">
                                <div class="d-grid gap-2 col-md-12 col-md-12 col-lg-12 col-sm-12 text-center">
                                    <button type="button" class="btn btn-update btn-lg btn-block" id="calc_simple">Verificar ganancias  de forma simple</button>
                                </div>
                            </div>                         
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
