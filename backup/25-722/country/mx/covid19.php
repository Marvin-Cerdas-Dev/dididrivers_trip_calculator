<!DOCTYPE html>
<?php include_once("includes/analyticstracking.php") ?>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content="Este sitio te muestra cuáles son los lineamiento de la plataforma Didi, en relación de la pandemia de Covid-19">
        <meta name="keywords" content="DidiCalc, Calculadora, Viajes, Didi, Calcular Viaje, Calculadora de viajes, Viajes de Didi, Covid-19, Protocolos de viaje, Pandemia Covid-19, Requisitos de viaje, México">
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
        <title>DidiCalc - Medidas contra la pandemia del Covid-19</title>

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
                <img src="img/covid19.jpg" class="card-img-top" alt="Recomendaciones ante la pandemia del Covid-19 por parte de Didi">
                <div class="card-body">
                    <h1 class="card-title">Protocolos de viaje ante el Covid-19</h1>
                    <h6 class="card-title"><b>Es muy importante que no manejés si no te sentís bien</b></h6>
                    <p class="card-text">
                        <b>Si tienes sintomas de gripe</b> como, tos, dolor de cuerpo, agotamiento, dolor de garganta, fiebre, congestion nasal, dolor de garganta, estornudos, o si por alguna razón pierdes el olfato y/o el gusto. <b>No conduzcas y consultes con los servicios de salud pertinentes.</b>  
                    </p>
                    <h6 class="card-title"><b>Si estas conduciendo</b></h6>
                    <p class="card-text">
                    <ul>
                        <li>No salgás de casa si estás enfermo o te sientes mal.</li> 
                        <li>De ser posible, utilizá mascarilla o cubreboca cuando estés conectado con la app de DiDi.</li> 
                        <li>Con el fin de tener mayor distanciamiento social, te recomendamos (de manera opcional) sugerirle al Usuario que utilice el asiento de atrás.</li> 
                        <li>Viajá con las ventanas abiertas para mantener el vehículo ventilado.</li> 
                        <li>Si el Usuario utiliza efectivo como método de pago, definfectate las manos después de recibirlo.</li>  
                    </ul>
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
                    <h6 class="card-title"><b>Salud y limpieza de tu vehiculo</b></h6>
                    <p class="card-text">
                    <ul>
                        <li>Utilizá un paño limpio y líquido desinfectante para limpiar tu vehículo, incluyendo los asientos, las manillas de las puertas y los cinturones de seguridad.</li>
                        <li>Lávate las manos con agua y jabón, o desinfectalas con alcohol en gel, antes y después del viaje.</li>
                        <li>Desinfecá tu celular diariamente.</li> 
                    </ul>
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
<script src="../../node_modules/bootstrap/dist/js/bootstrap.js"></script>
<script src="js/index-scripts.js"></script>
<script src="js/jquery.cookie.js"></script>
<script src="js/form-scripts.js"></script>
<script src="js/calculatescripts.js"></script>
<script src="js/defaultscripts.js"></script>
<!-- endbuild -->
</body>
</html>
