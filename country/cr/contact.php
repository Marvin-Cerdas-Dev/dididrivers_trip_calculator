<!DOCTYPE html> 
<?php include_once("includes/analyticstracking.php") ?>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content="Aquí podrás verificar tus viajes de la plataforma Didi de una forma fácil, segura y 100% gratuito">
        <meta name="keywords" content="DidiCalc, Calculadora, Viajes, Didi, Calcular Viaje, Calculadora de viajes, Viajes de Didi, didicalc, loading, usar, este, sitio, DIDI, VIAJES DIDI, VIAJES, CALCULADOR, Calculadora viajes Didi, Costa Rica, México, Chile, paises, privacidad, política, services, país, selecione">
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
            "url": "https://crdidicalc.azurewebsites.net/",
            "address": "Costa Rica",
            "potentialAction": {
            "@type": "SearchAction",
            "target": "https://crdidicalc.azurewebsites.net/search?q={search_term_string}Buscar",
            "query-input": "required name=search_term_string"
            }
            }
        </script>

        <script>
            // Example starter JavaScript for disabling form submissions if there are invalid fields
            (function () {
                'use strict';
                window.addEventListener('load', function () {
                    // Fetch all the forms we want to apply custom Bootstrap validation styles to
                    var forms = document.getElementsByClassName('needs-validation');
                    // Loop over them and prevent submission
                    var validation = Array.prototype.filter.call(forms, function (form) {
                        form.addEventListener('submit', function (event) {
                            if (form.checkValidity() === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                            form.classList.add('was-validated');
                        }, false);
                    });
                }, false);
            })();
        </script>
        
        <!--AdSense-->
        <?php include_once("includes/ads.php") ?>     

        <!-- build:css css/styles.css -->
        <link rel="stylesheet" href="css/default.css" > 
        <link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.css">
        <!-- endbuild -->

        <!-- Title -->
        <title>DidiCalc - Contactando...</title>

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
                <div class="card md-3 card-update">
                    <img src="img/contact-us.jpg" class="img-responsive card-img-top" alt="Formulario de contacto">
                    <div class="card-body">
                        <form class="needs-validation" action="sendmessage.php" method="POST" novalidate>
                            <div class="form-group">
                                <label for="contactName">Nombre</label>
                                <input name="contactName" type="text" class="form-control" id="contactName" placeholder="José Rodriguez Salzar" required>
                                <div class="invalid-feedback">
                                    Debe ingresar su nombre
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="contactEmail">Correo electrónico</label>
                                <input name="contactEmail" type="email" class="form-control" id="contactEmail" placeholder="sunombre@domain.com" required>
                                <div class="invalid-feedback">
                                    Debe ingresar su correo electrónico
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="contactType">Tipo de consulta</label>
                                <select name="contactType" class="form-control" id="contactType" placeholder="Seleccione una opción" required>
                                    <option value="Consulta">Consulta</option>
                                    <option value="Sugerencia">Sugerencias</option>
                                    <option value="Ayuda">Ayuda</option>
                                    <option value="Opinión">Opinión</option>
                                    <option value="Otros">Otros</option>
                                </select>                          
                            </div>                                     
                            <div class="form-group">
                                <label for="contactMessage">Mensaje</label>
                                <textarea name="conctactMessage" class="form-control" id="contactMessage" rows="4" placeholder="Escribe tu mensaje aquí" required></textarea>
                                <div class="invalid-feedback">
                                    Debe escribir un mensaje
                                </div>                            
                            </div>
                            <div class="form-group">
                                <button name="contactSubmit" type="submit" class="btn btn-update btn-lg btn-block" id="contactSumit">Enviar</button>
                            </div>
                        </form>
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
