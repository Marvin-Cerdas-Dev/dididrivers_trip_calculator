<!DOCTYPE html>
<?php include_once("includes/analyticstracking.php") ?>
<?php include_once("includes/viajeExpress.php") ?>
<?php $viaje = new viajeExpress(0, 0, 0, 0, 0, 0, 0, 0) ?>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content="Aquí podras verificar cuales son las tarifas oficiales de la plataforma Didi">
        <meta name="keywords" content="DidiCalc, Calculadora, Viajes, Didi, Calcular Viaje, Calculadora de viajes, Viajes de Didi, Tarifas, Precio, Montos">
        <meta http-equiv="Expires" content="5">

        <!-- Miniature -->
        <meta property="og:title" content="Calculadora de viajes de Didi" />
        <meta property="og:site_name" content="DidiCalc">        
        <meta property="og:url" content="http://crdidicalc.azurewebsites.net/" />
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="Aquí podras verificar cuales son las tarifas oficiales de la plataforma Didi">
        <meta property="og:image" content="http://crdidicalc.azurewebsites.net/images/calculator_256.png">

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

        <!-- Favicon -->
        <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png">
        <link rel="manifest" href="images/manifest.json">
        <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5">
        <meta name="theme-color" content="#ffffff">

        <!-- Title -->
        <title>DidiCalc - Tarifas de Didi en Costa Rica</title>

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

        <!-- Default Css Style -->
        <link href="css/default.css" rel="stylesheet">        

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
                <img src="images/didi_fares_background.jpg" class="card-img-top" alt="Didi Fares">
                <div class="card-body">
                    <h1 class="card-title">Tarifas de Didi</h1>
                    <p class="card-text">
                        A partir del 19 de noviembre del 2019 la empresa china Didi empesó sus operaciones en Costa Rica ofreciendo descuentos para los usurios y deneficios económicos a los conductores.<br><br>
                        Este servicio opera en San José, Alajuela, Heredia, Cartago y Puntarenas (ver todos cantones de covertura <a href="didiCoverage.php" hreflang="es"><b>aquí</b></a>)<br><br>
                        La tarifas ofrecidas para los conductores son las siguientes:<br>
                    <ul>
                        <li>Tarifa mínima: <?php echo "&#8353;" . $viaje->getMinimunFare() ?></li>
                        <li>Tarifa base: <?php echo "&#8353;" . $viaje->getBasicFare() ?></li>
                        <li>&ensp;+ por km: <?php echo "&#8353;" . $viaje->getKilometerFare() ?>/km</li>
                        <li>&ensp;+ por minuto: <?php echo "&#8353;" . $viaje->getMinuteFare() ?>/min</li>
                        <li>Distancia larga: <?php echo "&#8353;" . $viaje->getExtraCharge10KmFare() ?>/km (Se cobrará una tarifa de distancia larga en viajes cuyo recorrido excedan los 10km)</li>
                    </ul>
                    </p>
                    <p class="card-text">
                        Puede verificar de forma detallada sus ganancias aquí:
                    </p>
                    <p class="card-text">
                        <button type="button" class="btn btn-update btn-lg btn-block" id="calc_details">Verificar ganancias detallada</button>
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
                        <button type="button" class="btn btn-update btn-lg btn-block" id="calc_simple">Verificar ganancias simple</button>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <footer><?php include_once("includes/footer.php") ?></footer>


    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <!-- Scripst -->
    <script src="js/defaultscripts.js"></script>
    <script src="js/jquery.cookie.js"></script>
</body>
</html>
