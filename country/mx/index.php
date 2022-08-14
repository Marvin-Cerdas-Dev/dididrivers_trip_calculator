<!DOCTYPE html>
<?php include_once("includes/analyticstracking.php") ?>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content="Aquí podras verificar tus viajes de la plataforma Didi de una forma fácil y segura">
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
        <title>DidiCalc - Calculadora de viajes de Didi</title>       

    </head>
    <body>
        <!-- Cookies modal -->
        <?php include_once("includes/cookies_modal.php") ?>
        <!-- Content -->    
        <header>
            <?php include_once("includes/header.php") ?>
        </header>
        <div id="carousel" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                    <img src="img/carousel_1.jpg" class="d-block w-100" alt="Seguridad">
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="img/carousel_2.jpg" class="d-block w-100" alt="Confianza">
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="img/carousel_3.jpg" class="d-block w-100" alt="Un servicio 100% Gratuito">
                </div>
            </div>
        </div>              
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-4 card-margin">
                    <div class="card h-100">
                        <img class="img-responsive card-img-top" src="img/administrate.jpg" alt="Administre sus ganancias"/>
                        <div class="card-body">
                            <h5 class="card-title">Administre tus ganancias</h5>
                            <p class="card-text justify-text">Con Didical podras dar seguimiento a tus ganancias de una forma fácil, rápida y segura.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 card-margin">
                    <div class="card h-100">
                        <img class="img-responsive card-img-top" src="img/free_service.jpg" alt="Servicio 100% gratuito"/>
                        <div class="card-body">
                            <h5 class="card-title">100% Gratuito</h5>
                            <p class="card-text justify-text">Didical es una plataroma 100% gratuita, para los socios conductores, por lo que no tendras que preocuparte por cargos mensuales.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 card-margin">
                    <div class="card h-100">
                        <img class="img-responsive card-img-top" src="img/security.jpg" alt="Seguridad en sus consultas"/>
                        <div class="card-body">
                            <h5 class="card-title">Seguridad</h5>
                            <p class="card-text justify-text">El sistama de Didical nunca almacena tus consultas, además contamos con encriptacion SSL.</p>
                        </div>
                    </div>
                </div>
                <div id="jumbotron" class="bg-image p-5 shadow-1-strong mb-4 bg-light text-white">
                    <div class="container-fluid py-5">
                        <h1 class="display-5 fw-bold">Didicalc</h1>
                        <p class="col-md-8 fs-4">Una herramienta especialmente pensada para socios condutores.</p>
                        <hr>
                        <p>Hemos logrado crear una plataforma, para que tu como conductor de Didi, puedas calcular de forma detallada un viaje completado. Aquí podrás saber de manera precisa tus ingresos estimados para cada viaje y si el mismo está siendo correctamente calculado. Además si tus viaje está mal calculado tendras la posibilidad copiar un mensaje listo para que lo envies a la plataforma de soporte.</p>                            
                    </div>
                </div>            
                <div class="col-sm-12 col-md-12 col-lg-6 card-margin">
                    <div class="card h-100">
                        <img src="img/calculate_details.jpg" alt="Calculadora de viajes de Didi detallada" />
                        <div class="card-body">
                            <h5 class="card-title">Calculadora detallada</h5>
                            <p class="card-text justify-text">En calculadora de viajes de Didi detallada hemos logrado crear una plataforma, para que tu como conductor de Didi, puedas calcular de forma detallada un viaje completado. Aquí podrás saber de manera precisa tus ingresos estimados para cada viaje y si el mismo está siendo correctamente calculado. Además si tus viaje está mal calculado tendras la posibilidad copiar un mensaje listo para que lo envies a la plataforma de soporte.</p>
                        </div>
                        <div class="container-fluid my-2">
                            <div class="d-grid gap-2 col-md-12 col-md-12 col-lg-12 col-sm-12 text-center">
                                <button type="button" class="btn btn-update btn-lg btn-block" id="calc_details">Calcular</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-6 card-margin">
                    <div class="card h-100">
                        <img src="img/calculate_simple.jpg" alt="alculadora de viajes de Didi simple" />
                        <div class="card-body">
                            <h5 class="card-title">Calculadora simple</h5>
                            <p class="card-text justify-text">En la calculadora de viajes de Didi simple, como conductor de Didi, encontrarás una manera rápida de calcular tu viaje realizado, en pocos pasos y sin complicaciones, esta herramienta te permitirá saber si tus ganancias fueron corectas o no de una forma muy simple.</p>
                        </div>
                        <div class="container-fluid my-2">
                            <div class="d-grid gap-2 col-md-12 col-md-12 col-lg-12 col-sm-12 text-center">
                                <button type="button" class="btn btn-update btn-lg" id="calc_simple">Calcular</button>                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer><?php include_once("./includes/footer.php") ?></footer> 
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
