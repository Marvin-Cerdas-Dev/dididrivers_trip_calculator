<!DOCTYPE html>
<?php include_once("includes/analyticstracking.php") ?>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content="Este sitio muestra los contactos de ayuda que usted puede utilizar en caso de emergencia, mientras utiliza la plataforma Didi.">
        <meta name="keywords" content="DidiCalc, Didi, Ayuda, Emergencia, Socios, Plataforma, Contactos, Contactos de emergencia, Números de emergencia, Llamar a emergencias, Costa Rica">
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
        <title>DidiCalc - Ayuda en caso de emergencia</title>

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
                        <img src="img/emergency_help.jpg" class="card-img-top" alt="Servicios de ayuda de Didi">
                        <div class="card-body">
                            <h1 class="card-title">Ayuda en caso de emergencia</h1>
                            <p class="card-text justify-text">
                                Recuerdas que siempre es muy importante informar a las autoridades correspondientes de cualquier incidente o si necesitas ayuda inmediata por medio de número de emergencias.
                            </p>
                            <p class="card-text justify-text">
                                <a href="tel:911" class="btn btn-update" hreflang="es"><b>911</b></a>
                            </p>
                            <p class="card-text justify-text">
                                De igual formar desde sus inicios Didi implementó líneas telefónicas para brindar ayuda a sus usuarios y conductores en caso de emergencia.
                            </p>
                            <h6 class="card-title">Línea de ayuda para <b>Conductores</b></h6>
                            <p class="card-text justify-text">
                                <a href="tel:4002-3814" class="btn btn-update" hreflang="es"><b>4002-3814</b></a>
                            </p>
                            <h6 class="card-title">Línea de emergencia para <b>Conductores</b></h6>
                            <p class="card-text justify-text">
                                <a href="tel:4104-6037" class="btn btn-update" hreflang="es"><b>4104-6037</b></a>
                            </p>                
                            <h6 class="card-title">Línea de ayuda para <b>Usuarios</b></h6>
                            <p class="card-text justify-text">
                                <a href="tel:4000-6947" class="btn btn-update" hreflang="es"><b>4000-6947</b></a>
                            </p>
                            <h6 class="card-title">Contacto por chat <b>Usuarios y conductores</b></h6>
                            <p class="card-text justify-text">
                                Recuerda que ambas plataformas para usuarios como para conductores, cuentan con una opción de chat donde también se puede reportar un incidente.
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
