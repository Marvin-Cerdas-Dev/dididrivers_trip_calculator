<!DOCTYPE html>
<?php include_once("includes/analyticstracking.php") ?>
<?php include_once("includes/viajeExpress.php") ?>
<?php include_once("./includes/viajeProtect.php") ?>
<?php include_once("./includes/viajeEconomy.php") ?>
<?php include_once("./includes/viajeEntrega.php") ?>
<?php $viajeExpress = new viajeExpress(0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0) ?>
<?php $viajeProtect = new viajeProtect(0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0) ?>
<?php $viajeEntrega = new viajeEntrega(0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0) ?>
<?php $viajeEconomy = new viajeEconomy(0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0) ?>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content="Aquí podras verificar cuales son las tarifas oficiales de la plataforma Didi">
        <meta name="keywords" content="DidiCalc, Calculadora, Viajes, Didi, Calcular Viaje, Calculadora de viajes, Viajes de Didi, Tarifas, Precio, Montos, México">
        <meta http-equiv="Expires" content="5">

        <!-- Canonical Tag -->        
        <link rel="canonical" href="https://crdidicalc.azurewebsites.net/country/mx/" />
        
        <!-- Facebook Meta Tags -->
        <meta property="og:url" content="https://crdidicalc.azurewebsites.net/">
        <meta property="og:type" content="website">
        <meta property="og:title" content="Calculadora de viajes de Didi">
        <meta property="og:description" content="Aquí podrás verificar tus viajes de la plataforma Didi de una forma fácil y segura">
        <meta property="og:image" content="https://crdidicalc.azurewebsites.net/img/calculator_128.png">

        <!-- Twitter Meta Tags -->
        <meta name="twitter:card" content="summary_large_image">
        <meta property="twitter:domain" content="crdidicalc.azurewebsites.net">
        <meta property="twitter:url" content="https://crdidicalc.azurewebsites.net/">
        <meta name="twitter:title" content="Calculadora de viajes de Didi">
        <meta name="twitter:description" content="Aquí podrás verificar tus viajes de la plataforma Didi de una forma fácil y segura">
        <meta property="twitter:image:alt" content="DidiCalc">
        <meta name="twitter:image" content="https://crdidicalc.azurewebsites.net/img/calculator_128.png">

        <!-- Favicon -->
        <link rel="apple-touch-icon" sizes="180x180" href="img/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="img/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicon-16x16.png">
        <link rel="mask-icon" href="img/safari-pinned-tab.svg" color="#5bbad5">
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
            "url": "http://crdidicalc.azurewebsites.net/",
            "address": "México",
            "potentialAction": {
            "@type": "SearchAction",
            "target": "http://crdidicalc.azurewebsites.net/search?q={search_term_string}Buscar",
            "query-input": "required name=search_term_string"
            }
            }
        </script>

        <!-- build:css css/styles.css -->
        <link rel="stylesheet" href="css/default.css">
        <link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.css">        
        <!-- endbuild -->

        <!-- Title -->
        <title>DidiCalc - Tarifas de Didi en México</title>

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
            <div class="card md-3 card-update">
                <img src="img/didi_fares_background.jpg" class="card-img-top" alt="Tarifas de los servicios de Didi">
                <div class="card-body">
                    <h1 class="card-title">Tarifas de Didi</h1>
                    <p class="card-text">
                    A partir del 2018 la empresa china Didi empesó sus operaciones en México tarifas muy accesible para los usurios y deneficios económicos a los conductores.<br><br>
                    Este servicio opera las cuidades de:
                    <ul>
                        <li>Aguascalientes</li>
                        <li>Cancún</li>
                        <li>Celaya</li>
                        <li>Chihuahua</li>
                        <li>Ciudad Juárez</li>
                        <li>Ciudad de México</li>
                        <li>Ciudad Obregón</li>
                        <li>Ciudad Victoria</li>
                        <li>Colima</li>
                        <li>Cuernavaca</li>
                        <li>Culiacán</li>
                        <li>Durango</li>
                        <li>Ensenada</li>
                        <li>Guadalajara</li>
                        <li>Guanajuato</li>
                        <li>Hermosillo</li>
                        <li>Irapuato</li>
                        <li>La Paz</li>
                        <li>León</li>
                        <li>Los Mochis – Guasave</li>
                        <li>Matamoros</li>
                        <li>Manzanillo</li>
                        <li>Mazatlán</li>
                        <li>Mérida</li>
                        <li>Mexicali</li>
                        <li>Monterrey</li>
                        <li>Nuevo Laredo</li>
                        <li>Oaxaca</li>
                        <li>Puebla</li>
                        <li>Querétaro</li>
                        <li>Reynosa</li>
                        <li>Saltillo</li>
                        <li>San Juan del Río</li>
                        <li>San Luis Potosí</li>
                        <li>San Miguel de Allende</li>
                        <li>Silao</li>
                        <li>Tampico</li>
                        <li>Tepic</li>
                        <li>Tijuana</li>
                        <li>Toluca</li>
                        <li>Zacatecas</li>
                    </ul>
                    La tarifas ofrecidas para los conductores son las siguientes:<br><br>
                    <b>Didi Express</b>
                    <ul>
                        <li>Tarifa mínima: <?php echo "&#36;" . $viajeExpress->getMinimunFare() ?></li>
                        <li>Tarifa base: <?php echo "&#36;" . $viajeExpress->getBasicFare() ?></li>
                        <li>&ensp;+ por km: <?php echo "&#36;" . $viajeExpress->getKilometerFare() ?>/km</li>
                        <li>&ensp;+ por minuto: <?php echo "&#36;" . $viajeExpress->getMinuteFare() ?>/min</li>
                    </ul>
                    <b>Didi Protect</b>
                    <ul>
                        <li>Tarifa mínima: <?php echo "&#36;" . $viajeProtect->getMinimunFare() ?></li>
                        <li>Tarifa base: <?php echo "&#36;" . $viajeProtect->getBasicFare() ?></li>
                        <li>&ensp;+ por km: <?php echo "&#36;" . $viajeProtect->getKilometerFare() ?>/km</li>
                        <li>&ensp;+ por minuto: <?php echo "&#36;" . $viajeProtect->getMinuteFare() ?>/min</li>
                    </ul>
                    <b>Didi Entrega</b>
                    <ul>
                        <li>Tarifa mínima: <?php echo "&#36;" . $viajeEntrega->getMinimunFare() ?></li>
                        <li>Tarifa base: <?php echo "&#36;" . $viajeEntrega->getBasicFare() ?></li>
                        <li>&ensp;+ por km: <?php echo "&#36;" . $viajeEntrega->getKilometerFare() ?>/km</li>
                        <li>&ensp;+ por minuto: <?php echo "&#36;" . $viajeEntrega->getMinuteFare() ?>/min</li>
                    </ul>                        
                    <b>Didi Economy</b>
                    <ul>
                        <li>Tarifa mínima: <?php echo "&#36;" . $viajeEconomy->getMinimunFare() ?></li>
                        <li>Tarifa base: <?php echo "&#36;" . $viajeEconomy->getBasicFare() ?></li>
                        <li>&ensp;+ por km: <?php echo "&#36;" . $viajeEconomy->getKilometerFare() ?>/km</li>
                        <li>&ensp;+ por minuto: <?php echo "&#36;" . $viajeEconomy->getMinuteFare() ?>/min</li>
                    </ul>
                    </p>
                    <p class="card-text">
                        Puede verificar de forma detallada sus ganancias aquí:
                    </p>
                    <p class="card-text">
                        <button type="button" class="btn btn-update btn-lg btn-block" id="calc_details">Verificar ganancias de forma detallada</button>
                    </p>
                    <p class="card-text">
                        <!--AdSense-->
                        <?php include_once("includes/ads.php") ?>  
                        <!--AdSense-->
                    </p>
                    <p class="card-text">
                        También si lo prefiere puede verificar sus ganancias de forma simple aquí:
                    </p>
                    <p class="card-text">
                        <button type="button" class="btn btn-update btn-lg btn-block" id="calc_simple">Verificar ganancias  de forma simple</button>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <footer><?php include_once("includes/footer.php") ?></footer>
    <!-- build:js js/js.js -->
    <script src="../../node_modules/jquery/dist/jquery.js"></script>
    <script src="../../node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
    <script src="../../node_modules/bootstrap/dist/js/bootstrap.js"></script>
    <script src="js/index-scripts.js"></script>
    <script src="js/jquery.cookie.js"></script>
    <script src="js/form-scripts.js"></script>
    <script src="js/calculatescripts.js"></script>
    <script src="js/defaultscripts.js"></script>
    <!-- endbuild -->
</body>
</html>
