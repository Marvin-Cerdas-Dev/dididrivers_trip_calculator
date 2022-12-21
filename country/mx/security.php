<!DOCTYPE html>
<?php include_once("includes/analyticstracking.php") ?>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content="Enlistamos las opciones de seguridad provistas por la plataforma, antes de un viaje, durante un viaje y después de un viaje, donde se destacan Zonas de Riesgo, Monitoreo de viaje, Localización GPS, Botón de Emergencia, Verificación facial del pasajero entre otras, las cuales te ayudaran a tu seguridad.">
        <meta name="keywords" content="Seguridad, DidiCalc, Calculadora, Viajes, Didi, Calcular Viaje, Calculadora de viajes, Viajes de Didi, México, Zonas de Riesgo, Monitoreo de viaje, Localización GPS, Botón de Emergencia, Verificación facial del pasajero">
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

        <!--AdSense-->
        <?php include_once("includes/ads.php") ?>     

        <!-- build:css css/styles.css -->
        <link rel="stylesheet" href="css/default.css">
        <link rel="stylesheet" href="../../node_modules/bootstrap/dist/css/bootstrap.css">        
        <!-- endbuild -->

        <!-- Title -->
        <title>DidiCalc - Covertura del servicio de Didi</title>

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
                            <h1 class="card-title">Recomendaciones de seguridad</h1>
                            <p class="card-text justify-text">
                                Para la plataforma tu seguridad es muy importante por ello se brindan recomendaciones
                                antes, durante y al finalizar un viaje.
                            </p>
                            <h2>Antes de un viaje</h2>
                            <div class="container-fluid">
                                <div class="row">                    
                                    <div class="col-lg-6 col-md-12 col-sm-12 card-margin">
                                        <div class="card h-100">
                                            <img src="img/facial-recognition-icons.png" class="icon-center" alt="Verificación facial del pasajero">
                                            <div class="card-body">
                                                <h3>Verificación facial del pasajero</h3>
                                                <p class="card-text justify-text">
                                                    Los pasajeros que en horario nocturno realicen su primer viaje, 
                                                    además de la documentación oficial, deberán realizar una validación 
                                                    facial, para poder solicitar el viaje.
                                                </p>
                                            </div>
                                        </div>
                                    </div>    
                                    <div class="col-lg-6 col-md-12 col-sm-12 card-margin">
                                        <div class="card h-100">
                                            <img src="img/lock_icon.png" class="icon-center" alt="Encriptación de tu número de teléfono">
                                            <div class="card-body">
                                                <h3>Encriptación de tu número de teléfono</h3>
                                                <p class="card-text justify-text">
                                                    La plataforma oculta tu número de teléfono con el fin que el pasajero
                                                    no tenga tus datos reales. El mismo únicamente podrán contactarse por
                                                    temas de servicio a través de la aplicación.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 card-margin">
                                        <div class="card h-100">
                                            <img src="img/contact_message.png" class="icon-center" alt="Contactos de Confianza">
                                            <div class="card-body">
                                                <h3>Contactos de Confianza</h3>
                                                <p class="card-text justify-text">
                                                    Tienes la opción de elegir hasta cinco personas, para compartirles
                                                    la información de tus viajes en tiempo real.
                                                </p>
                                            </div>
                                        </div>
                                    </div>    
                                    <div class="col-lg-6 col-md-12 col-sm-12 card-margin">
                                        <div class="card h-100">
                                            <img src="img/gps_location.png" class="icon-center" alt="Visibilidad del destino">
                                            <div class="card-body">
                                                <h3>Visibilidad del destino</h3>
                                                <p class="card-text justify-text">
                                                    La aplicación de Didi, es la única aplicación que te muestra el 
                                                    destino del pasajero, antes de aceptar el viaje.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 card-margin">
                                        <div class="card h-100">
                                            <img src="img/didi-guests.png" class="icon-center" alt="DiDi Invitado">
                                            <div class="card-body">
                                                <h3>Pasajero Invitado</h3>
                                                <p class="card-text justify-text">
                                                    Es una nueva funcionalidad de la aplicación donde los pasajeros 
                                                    pueden indicar en la misma si están pidiendo el viaje para alguien 
                                                    más. De esta forma, tú sabrás exactamente a quién recoges.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <div class="col-sm-12 col-md-12 col-lg-12">
                                    <div class="horizontal-center">
                                        <!--AdSense-->
                                        <?php include_once("includes/ads.php") ?>  
                                        <!--AdSense-->
                                    </div>
                                </div>
                            </div>
                            <h2>Durante un viaje</h2>
                            <div class="container-fluid">
                                <div class="row">                    
                                    <div class="col-lg-6 col-md-12 col-sm-12 card-margin">
                                        <div class="card h-100">
                                            <img src="img/red_x.png" class="icon-center" alt="Zonas de Riesgo">
                                            <div class="card-body">
                                                <h3>Zonas de Riesgo</h3>
                                                <p class="card-text justify-text">
                                                    Se han Identificado las zonas de riesgo para protegerte durante el
                                                    viaje, por lo que no será posible solicitar viajes desde o hacia 
                                                    estas zonas. Actualmente se cuenta con aproximadamente 300 zonas
                                                    restringidas, las cuales se van actualizando de manera constante. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>    
                                    <div class="col-lg-6 col-md-12 col-sm-12 card-margin">
                                        <div class="card h-100">
                                            <img src="img/location.png" class="icon-center" alt="Monitoreo de Viaje">
                                            <div class="card-body">
                                                <h3>Monitoreo de viaje</h3>
                                                <p class="card-text justify-text">
                                                    En caso que necesites ayuda, puedes presionar el Botón de Emergencia 
                                                    dentro de tu aplicación, para enlazarte al 911 y la aplicación rastrea 
                                                    tu ubicación exacta.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 card-margin">
                                        <div class="card h-100">
                                            <img src="img/share-location.png" class="icon-center" alt="Compartir Viaje">
                                            <div class="card-body">
                                                <h3>Compartir Viaje</h3>
                                                <p class="card-text justify-text">
                                                    Cuando viajas en la plataforma siempre puedes compartir tu ubicación en tiempo
                                                    real y los datos del viaje.
                                                </p>
                                            </div>
                                        </div>
                                    </div>    
                                    <div class="col-lg-6 col-md-12 col-sm-12 card-margin">
                                        <div class="card h-100">
                                            <img src="img/audio-recording.png" class="icon-center" alt="Grabación de Audio Manual o Automática">
                                            <div class="card-body">
                                                <h3>Grabación de audio manual o automática</h3>
                                                <p class="card-text justify-text">
                                                    Existe la opción que encada viaje de grabar el audio del mismo, o también 
                                                    puedes activar la grabación automática, para que todos tus viajes se graben 
                                                    sin excepción. Puedes estar tranquilo, ya que la aplicación solo escucha tu 
                                                    audio, únicamente cuando reportas un incidente de seguridad.
                                                </p>
                                            </div>
                                        </div>
                                    </div>                             
                                    <div class="col-lg-6 col-md-12 col-sm-12 card-margin">
                                        <div class="card h-100">
                                            <img src="img/emergency-button.png" class="icon-center" alt="Botón de Emergencia">
                                            <div class="card-body">
                                                <h3>Botón de emergencia</h3>
                                                <p class="card-text justify-text">
                                                    Si necesitas ayuda, presiona el Botón de Emergencia dentro de tu aplicación 
                                                    para enlazarte al 911 y Didi rastreará tu ubicación exacta.
                                                </p>
                                            </div>
                                        </div>
                                    </div>    
                                    <div class="col-lg-6 col-md-12 col-sm-12 card-margin">
                                        <div class="card h-100">
                                            <img src="img/gps-satellite.png" class="icon-center" alt="Localización GPS">
                                            <div class="card-body">
                                                <h3>Localización GPS</h3>
                                                <p class="card-text justify-text">
                                                    Monitoreamos todos los viajes para que, si reportas un incidente, podamos
                                                    reaccionar de forma inmediata.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 card-margin">
                                        <div class="card h-100">
                                            <img src="img/protection.png" class="icon-center" alt="Alianza con C5">
                                            <div class="card-body">
                                                <h3>Alianza con C5</h3>
                                                <p class="card-text justify-text">
                                                    Didi se unió al C5 de Guadalajara y del Estado de México. Por lo que en caso 
                                                    de que necesites ayuda, se les notificará cuando presiones el Botón de Emergencia, 
                                                    para que puedan asistirte.
                                                </p>
                                            </div>
                                        </div>
                                    </div>    
                                    <div class="col-lg-6 col-md-12 col-sm-12 card-margin">
                                        <div class="card h-100">
                                            <img src="img/video-recording.png" class="icon-center" alt="Cámaras de Seguridad DiDi">
                                            <div class="card-body">
                                                <h3>Cámaras de Seguridad DiDi</h3>
                                                <p class="card-text justify-text">
                                                    La empresa Didi ha Instalado cámaras en más de 900 vehículos en Guadalajara. 
                                                    Si detectas alguna situación de riesgo, puedes presionar el botón de emergencia y
                                                    se comenzará a grabar el video del viaje. El soporte Didi recibe una alerta
                                                    para evaluar la situación en tiempo real y de ser necesario, enviar apoyo
                                                    a tu ubicación.<br>
                                                    <i>*Disponible solo en Guadalajara.</i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>                             
                                    <div class="col-lg-6 col-md-12 col-sm-12 card-margin">
                                        <div class="card h-100">
                                            <img src="img/woman-driver.png" class="icon-center" alt="DiDi Mujer">
                                            <div class="card-body">
                                                <h3>Didi Mujer</h3>
                                                <p class="card-text justify-text">
                                                    Si eres conductora, Con la aplicación Didi, puedes decidir si quieres 
                                                    realizar viajes solo con pasajeras mujeres.
                                                </p>
                                            </div>
                                        </div>
                                    </div>    
                                    <div class="col-lg-6 col-md-12 col-sm-12 card-margin">
                                        <div class="card h-100">
                                            <img src="img/insurance-care.png" class="icon-center" alt="Viaje con Cobertura">
                                            <div class="card-body">
                                                <h3>Viaje con cobertura</h3>
                                                <p class="card-text justify-text">
                                                    Cuando viajas usando la plataforma de Didi, tienes una cobertura de 
                                                    responsabilidad civil, la cual incluye gastos médicos por siniestro.
                                                </p>
                                            </div>
                                        </div>
                                    </div>                             
                                    <div class="col-lg-6 col-md-12 col-sm-12 card-margin">
                                        <div class="card h-100">
                                            <img src="img/artificial-intelligence.png" class="icon-center" alt="Inteligencia Artificia">
                                            <div class="card-body">
                                                <h3>Inteligencia artificial</h3>
                                                <p class="card-text justify-text">
                                                    La aplicación utiliza Inteligencia Artificia (AI) para cuidarte durante tus 
                                                    viajes. Los modelos Hércules, Clío y Temis analizan características de los 
                                                    viajes, los pasajeros, zonas, horarios e historial, para identificar cualquier 
                                                    riesgo y alertarte o rechazar esa solicitud.
                                                </p>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                            <h2>Después un viaje</h2>
                            <div class="container-fluid">
                                <div class="row">                    
                                    <div class="col-lg-6 col-md-12 col-sm-12 card-margin">
                                        <div class="card h-100">
                                            <img src="img/phone-support.png" class="icon-center" alt="Soporte Telefónico 24/7">
                                            <div class="card-body">
                                                <h3>Soporte telefónico 24/7</h3>
                                                <p class="card-text justify-text">
                                                    Puedes llamar al soporte telefónico en el número 
                                                    <a href="tel:8007258888"> 800 725 8888</a>, la aplicación cuenta con atención 24/7.
                                                </p>
                                            </div>
                                        </div>
                                    </div>    
                                    <div class="col-lg-6 col-md-12 col-sm-12 card-margin">
                                        <div class="card h-100">
                                            <img src="img/rating-survey.png" class="icon-center" alt="Califica a tu Pasajero">
                                            <div class="card-body">
                                                <h3>Califica a tu pasajero</h3>
                                                <p class="card-text justify-text">
                                                    Tienes la oportunidad de califica a tu pasajero después de cada viaje. Si tuviste 
                                                    una mala experiencia puedes seleccionar “No volver a viajar con este pasajero” y 
                                                    reportar cualquier conducta inapropiada.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 card-margin">
                                        <div class="card h-100">
                                            <img src="img/contact-distance.png" class="icon-center" alt="Evita viajar con el mismo pasajero">
                                            <div class="card-body">
                                                <h3>Limitar viajar con el mismo pasajero</h3>
                                                <p class="card-text justify-text">
                                                    Por tu seguridad si lo prefieres, puedes elegir la opción de no volver a viajar con
                                                    alguna persona. La plataforma no te volverá a asignar a esta persona en el futuro.

                                                </p>
                                            </div>
                                        </div>
                                    </div>    
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
