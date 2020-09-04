<!DOCTYPE html>
<?php include_once("includes/analyticstracking.php") ?>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content="En este sitio se encuentra con la covertura por provincias y cantones donde se ofrece el servicio de Didi">
        <meta name="keywords" content="DidiCalc, Calculadora, Viajes, Didi, Calcular Viaje, Calculadora de viajes, Viajes de Didi, Covertura, Cantones, Provincias">
        <meta http-equiv="Expires" content="5">

        <!-- Miniature -->
        <meta property="og:title" content="Calculadora de viajes de Didi" />
        <meta property="og:site_name" content="DidiCalc">
        <meta property="og:url" content="http://crdidicalc.azurewebsites.net/" />
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="En este sitio se encuentra con la covertura por provincias y cantones donde se ofrece el servicio de Didi">
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
        <title>DidiCalc - Covertura del servicio de Didi</title>

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
                <img src="images/didi_coverage_background.jpg" class="card-img-top" alt="Didi coverage">
                <div class="card-body">
                    <h5 class="card-title">Covertura del servicio de didi</h5>
                    <p class="card-text">
                        Desde el noviembre del 2019 que Didi inició operaciones su covertura está en:
                    <ul>
                        <li>San José</li>
                        <li>Heredia</li>
                        <li>Alajuela</li>
                        <li>Puntarenas</li>
                    </ul>
                    A continuación puede ver el detalle de los cantones en los cuales Didi opera desde el inicio:
                    </p>
                    <p class="card-text">
                        <!--AdSense-->
                        <?php include_once("includes/ads.php") ?>  
                        <!--AdSense-->
                    </p>
                    <p class="card-text">
                    <center>
                        <img class="img-fluid" src="images/mapa_covertura.svg"/>
                        <p class="fuente">Fuente: Aguilar Arroyo, Yenci (2019) Didi arranca este martes con promos que busca desbancar a Uber, La Teja, Fecha de consulta: 9 de abril del 2019. URL: <a href="https://www.lateja.cr/nacional/didi-arranca-este-martes-con-promos-que-buscan/VQE7MUUXBBFNLDV7TZKTZTPEQQ/story/" title="Didi arranca este martes con promos que busca desbancar a Uber" hreflang="es">https://www.lateja.cr/nacional/didi-arranca-este-martes-con-promos-que-buscan/VQE7MUUXBBFNLDV7TZKTZTPEQQ/story/</a></p>
                    </center>
                    </p>
                </div>
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
