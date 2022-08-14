<?php
if (isset($_POST['contactSubmit'])) {
    $name = $_POST['contactName'];
    $from = $_POST['contactEmail'];
    $type = $_POST['contactType'];
    $msg = $_POST['conctactMessage'];

    $to = 'info.cc.service@gmail.com';
    $subject = 'Didical - ' . $type;
    $subject = 'Copia de contacto - Didical - ' . $type;
    $message = 'Nombre: ' . $name . '\n' . 'Correo electrónico: ' . $from . '\n' . 'Mensaje: ' . $msg;
    $message2 = 'Nombre: ' . $name . '\n' . 'Correo electrónico: ' . $from . '\n' . 'Mensaje: ' . $msg;
    $headers = 'From: ' . $from;
    $headers2 = "From:" . $to;

    mail($to, $subject, $message, $headers); // Send the customer contact to our email
    mail($from, $subject2, $message2, $headers2); //Send a copy of the contact to the customer
}
?>
<!DOCTYPE html>
<?php include_once("includes/analyticstracking.php") ?>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content="Aquí podras verificar tus viajes de la plataforma Didi de una forma fácil y segura">
        <meta name="keywords" content="DidiCalc, Calculadora, Viajes, Didi, Calcular Viaje, Calculadora de viajes, Viajes de Didi, didicalc, loading, usar, este, sitio, DIDI, VIAJES DIDI, VIAJES, CALCULADOR, Calculadora viajes Didi, Costa Rica, México, Chile, paises, privacidad, política, services, país, selecione">
        <meta http-equiv="Expires" content="5">

        <!-- Canonical Tag -->        
        <link rel="canonical" href="https://crdidicalc.azurewebsites.net/country/cr/" />

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

        <!-- build:css css/styles.css -->
        <link rel="stylesheet" href="css/default.css" > 
        <link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.css">
        <!-- endbuild -->


        <script async src="https://www.google.com/recaptcha/api.js"></script>


        <script>
            // How this code snippet works:
            // This logic overwrites the default behavior of `grecaptcha.ready()` to
            // ensure that it can be safely called at any time. When `grecaptcha.ready()`
            // is called before reCAPTCHA is loaded, the callback function that is passed
            // by `grecaptcha.ready()` is enqueued for execution after reCAPTCHA is
            // loaded.
            if (typeof grecaptcha === 'undefined') {
                grecaptcha = {};
            }
            grecaptcha.ready = function (cb) {
                if (typeof grecaptcha === 'undefined') {
                    // window.__grecaptcha_cfg is a global variable that stores reCAPTCHA's
                    // configuration. By default, any functions listed in its 'fns' property
                    // are automatically executed when reCAPTCHA loads.
                    const c = '___grecaptcha_cfg';
                    window[c] = window[c] || {};
                    (window[c]['fns'] = window[c]['fns'] || []).push(cb);
                } else {
                    cb();
                }
            }

            // Usage
            grecaptcha.ready(function () {
                grecaptcha.render("container", {
                    sitekey: "ABC-123"
                });
            });
        </script>


        <!-- Title -->
        <title>DidiCalc - Tarifas de Didi en Costa Rica</title>

    </head>
    <body>
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
                    <img src="img/contact-us.jpg" class="img-responsive card-img-top" alt="Formulario de contacto">
                    <div class="card-body">
                        <?php
                        if (mail($to, $subject, $message, $headers) && // Send the customer contact to our email
                                mail($from, $subject2, $message2, $headers2)) {
                            ?>
                            <h2 class="center-text">Muchas gracias! Su mensaje ha sido enviado</h2>
                        <?php } else { ?>
                            <h2 class="center-text">Lo sentimos ha ocurrido un error</h2>   
<?php } ?>

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
        <script src="js/form-scripts.js"></script>
        <script src="js/calculatescripts.js"></script>
        <script src="js/defaultscripts.js"></script>
        <script src="js/jquery.cookie.js"></script>
        <!-- endbuild -->
    </body>
</html>

