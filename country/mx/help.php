<!DOCTYPE html>
<?php include_once("includes/analyticstracking.php") ?>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content="Este sitio muestra los contactos de ayuda para conductores en caso de emergencia, mientras utiliza la plataforma Didi, Además podras encontrar la línea de ayuda para conductores México, asi una sección de preguntas frecuentes.">
        <meta name="keywords" content="DidiCalc, Didi, Ayuda, Emergencia, Socios, Plataforma, Contactos, Contactos de emergencia, Números de emergencia, Llamar a emergencias, México, Ayuda para conductores en caso de emergencia">
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
                            <h1 class="card-title">Ayuda para conductores en caso de emergencia</h1>
                            <p class="card-text justify-text">
                                Durante una emergencia, debes presionar el botón de seguridad que se encuentra en la pantalla principal de la app. Este botón abre una línea directa con un equipo especializado, que identificará la situación a bordo y actuará acorde a ella eficazmente. Ten en consideración que esta herramienta está diseñada para ser usada solo en situaciones de emergencia durante el viaje.
                            </p>
                            <h6 class="card-title">Linea de ayuda para <b>Conductores</b></h6>
                            <p class="card-text justify-text justify-text">
                                <a href="tel: 800-725-8888" class="btn btn-update" hreflang="es"><b>800-725-8888</b></a>
                            </p>
                            <p class="card-text justify-text">
                                <!--AdSense-->
                                <?php include_once("includes/ads.php") ?>  
                                <!--AdSense-->
                            </p>                    
                            <h1 class="card-title">Preguntas frecuentes</h1>

                            <div class="accordion" id="accordionQuestions">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            ¿Cuáles documentos necesito para poder se conductor registrado de Didi?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionQuestions" >
                                        <div class="accordion-body">
                                            <p class="justify-text">Para poder ser conductor registrado, necesitaras:</p>
                                            <ul>
                                                <li>Certificado de no antecedentes penales federales (El mismo de no pude tener más de 3 meses de haber sido expedido).</li>
                                                <li>Identificación oficial vigente (INE, IFE).</li>
                                                <li>Licencia de conducir, vigente.</li>
                                                <li>Un documento en donde aparezca tu CURP.</li>
                                                <li>Si eres extranjero: (FM, pasaporte), vigente.</li>
                                            </ul>       
                                            <p class="justify-text">Es important mencionar que esta información puede cambiar en conformidad con las legislaciones locales. Contacta a soporte DiDi para confirmar los requerimientos en tu ciudad.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            ¿Qué documentos necesito para ser socio no conductor registrado?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionQuestions" >
                                        <div class="accordion-body">
                                            <p class="justify-text">Para pode ser socio registrado, necesitaras:</p>
                                            <ul>
                                                <li>Identificación oficial vigente (INE, IFE).</li>
                                                <li>Tarjeta de circulación (vigente) del vehículo que quieres dar de alta.</li>
                                                <li>Seguro del vehículo, vigente.</li>
                                                <li>Documento en donde aparezca tu CURP.</li>
                                                <li>Si eres extranjero: (FM, pasaporte), vigente.</li>
                                            </ul>       
                                            <p class="justify-text">Es important mencionar que esta información puede cambiar en conformidad con las legislaciones locales. Contacta a soporte DiDi para confirmar los requerimientos en tu ciudad.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            ¿Puedo agregar un vehícul un conductor si no soy socio no conductor?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionQuestions" >
                                        <div class="accordion-body">
                                            <p class="justify-text">Únicamente los socios no conductores podrán agregar vehículos conductores a sus flotas. Sin embargo, puedes referir a otros conductores para que manejen en la aplicación con tu código y recibas beneficios. Si eres Conductor y deseas convertirte en Socio No Conductor, lo puedes solicitar directamente con Soporte DiDi llamando al 01 800 725 8888 o puedes acudir al Club de Conductores más cercano a tu ubicación, cuya dirección podrás ver en la App.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            ¿Cuáles vehículos están permitidos en DiDi?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionQuestions" >
                                        <div class="accordion-body">
                                            <p class="justify-text">Las características de los vehículos que acepta actualmente en DiDi son:</p>
                                            <ul>
                                                <li>Modelo 2012 o más reciente.</li>
                                                <li>4 puertas mínimo.</li>
                                                <li>Vehículo en buenas condiciones, sin daños estéticos.</li>
                                                <li>Capacidad para al menos 4 pasajeros (adicionales al del conductor).</li>
                                                <li>Ventanas y aire acondicionado con funcionalidad normal.</li>
                                                <li>Cinturones de seguridad en todos los asientos.</li>
                                                <li>Frenos ABS.</li>
                                                <li>Airbags para conductor y pasajero.</li>
                                                <li>Seguro privado con cobertura amplia.</li>
                                                <li>El vehículo no debe tener emblemas comerciales.</li>
                                                <li>Debe tener verificación con holograma 0, 00 o híbridos (para recorridos en CDMX).</li>
                                                <li>Valor factura mínimo de $200,000.00 MXN.</li>
                                            </ul>       
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            ¿Puedo usar DiDi si  tengo una discapacidad?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionQuestions" >
                                        <div class="accordion-body">
                                            <p class="justify-text">En DiDi alentamos que conductores con diferentes habilidades puedan conducir, siempre que dicha discapacidad no limite el manejo seguro. Si tienes dudas puntuales, puedes contactar al soporte DiDi al <a href="tel: 800-725-8888" class="btn btn-update" hreflang="es"><b>800-725-8888</b></a></p>
                                        </div>
                                    </div>
                                </div>                            
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            ¿Qué puedo hace si tengo problemas con el registro?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionQuestions" >
                                        <div class="accordion-body">
                                            <p class="justify-text">Pueden existir diversas razones por las cuales estés teniendo problemas con el registro, para poder brindarte una mejor solución, por favor contacta a Soporte DiDi al <a href="tel: 800-725-8888" class="btn btn-update" hreflang="es"><b>800-725-8888</b></a> o informarnos en el campo de abajo e indícanos el tipo de problema que estás presentando.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                            ¿Cómo se calculan las tarifas?
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionQuestions" >
                                        <div class="accordion-body">
                                            <p class="justify-text">Todas las tarifas se calculan con base en distancia recorrida, duración de viaje y una tarifa base.</p>
                                            <p class="justify-text">
                                                Puede verificar de forma detallada sus ganancias aquí:
                                            </p>
                                            <div class="container-fluid my-2">
                                                <div class="d-grid gap-2 col-md-12 col-md-12 col-lg-12 col-sm-12 text-center">
                                                    <button type="button" class="btn btn-update btn-lg btn-block" id="calc_details">Verificar ganancias de forma detallada</button>
                                                </div>
                                            </div>
                                            <p class="justify-text">
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
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                            ¿Qué puedo hace si no puedo cerrar el viaje?
                                        </button>
                                    </h2>
                                    <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionQuestions" >
                                        <div class="accordion-body">
                                            <p class="justify-text">Preciona en “Carreras” y selecciona la carrera en la que tuviste el problema, luego ve a “Detalles de la carrera” y “Ayuda” y “problemas con la carrera” y selecciona la opción más cercana al problema que ocurrió.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                            ¿Cómo puedo aceptar un viaje?
                                        </button>
                                    </h2>
                                    <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionQuestions" >
                                        <div class="accordion-body">
                                            <p class="justify-text">Una vez que tengas una alerta de servicio, en la parte inferior de la pantalla verás la opción de “aceptar”, recuerda, tienes 15 segundos para aceptar haciendo clic en el botón correspondiente.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                            ¿Cómo se puede identificar a tu pasajero?
                                        </button>
                                    </h2>
                                    <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionQuestions" >
                                        <div class="accordion-body">
                                            <p class="justify-text">Una vez aceptado el viaje, podrás ver en tu pantalla el nombre de tu pasajero. Podrás comunicarte con él para acordar un punto de encuentro y/o para preguntarle sobre algún factor para facilitar su identificación. Por tu seguridad, siempre confirma que el pasajero que está subiendo a tu automóvil corresponda al usuario que aparece en la app. En caso que no sea así, por favor contacta al usuario para confirmar la situación. Asuntos relacionados: Quiero comunicarme con mi pasajero.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                            ¿Cómo consultar el historial de viajes?
                                        </button>
                                    </h2>
                                    <div id="collapseEleven" class="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#accordionQuestions" >
                                        <div class="accordion-body">
                                            <p class="justify-text">Para consultar tu historial de viajes: haz clic en “Mi billetera” y selecciona “Historial de viajes”, se desplegará la lista de todos los viajes que has realizado.</p>
                                        </div>
                                    </div>
                                </div>    
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                            ¿Cómo reportar si tuve una mala experiencia en un viaje?
                                        </button>
                                    </h2>
                                    <div id="collapseTwelve" class="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#accordionQuestions" >
                                        <div class="accordion-body">
                                            <p class="justify-text">Puese hacer clic en “Carreras” y selecciona la carrera que tuvo el problema, luego ve a “Detalles de la carrera” y “Ayuda” y “problemas con la carrera” y selecciona la opción correspondiente al problema que ocurrió, por favor bríndanos la mayor cantidad de información posible sobre lo que pasó.</p>
                                        </div>
                                    </div>
                                </div>                                  
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                                            ¿Cómo agregar un contacto de emergencia?
                                        </button>
                                    </h2>
                                    <div id="collapseThirteen" class="accordion-collapse collapse" aria-labelledby="headingThirteen" data-bs-parent="#accordionQuestions" >
                                        <div class="accordion-body">
                                            <p class="justify-text">Puese ingresar a la sección “Detalles de viaje” en la parte superior derecha de la pantalla, haz click en “Servicios de emergencia” y luege selecionar a “Contactos de emergencia”, ahí podrás incluir o editar la información de tus contactos de emergencia.</p>
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