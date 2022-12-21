<!DOCTYPE html>
<?php include_once("includes/analyticstracking.php") ?>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="description" content="Aquí podrás verificar tus viajes de la plataforma Didi de una forma fácil, segura y 100% gratuito">
        <meta name="keywords" content="DidiCalc, Calculadora, Viajes, Didi, Calcular Viaje, Calculadora de viajes, Viajes de Didi, México">
        <meta http-equiv="Expires" content="5">

        <!-- Canonical Tag -->        
        <link rel="canonical" href="https://crdidicalc.azurewebsites.net/country/mx/" />

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
        <title>DidiCalc - Calculadora detallada</title>

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
                <div class="col-sm-12 col-md12 col-lg-12">
                    <div class="thumbnail center">
                        <div class="horizontal-center litle-margins"><h1>Calcular viaje detallado</h1></div>
                        <div id="main" class="caption">
                            <form id="form_details_calc" class="form-horizontal" method="post" action="calculate.php">                            
                                <div class="mb-3 row">
                                    <label for="calculation_type" class="col-sm-2 col-form-label" hidden="true">Tipo de cálculo:</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" id="calculating" name="calculating" Value="Details"hidden="true">
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="service" class="col-md-4 col-lg-2 control-label">Tipo de Servicio:</label>
                                    <div class="btn-group col-sm-12 col-md-8 col-lg-6" role="group" aria-label="Tipo de servicio">
                                        <input type="radio" class="btn-check" id="serviceExpress" name="service" value="Express" autocomplete="off" checked>
                                        <label class="btn btn-secondary" for="serviceExpress">Express</label>

                                        <input type="radio" class="btn-check" id="serviceProtect" name="service" value="Protect" autocomplete="off">
                                        <label class="btn btn-secondary" for="serviceProtect">Protect</label>

                                        <input type="radio" class="btn-check" id="serviceEntrega" name="service" value="Entrega" autocomplete="off">
                                        <label class="btn btn-secondary" for="serviceEntrega">Entrega</label>

                                        <input type="radio" class="btn-check" id="serviceEconomy" name="service" value="Economy" autocomplete="off">
                                        <label class="btn btn-secondary" for="serviceEconomy">Economy</label>
                                    </div>
                                </div>                                
                                <div class="mb-3 row">
                                    <label for="payment" class="col-md-4 col-lg-2 control-label">Método de pago:</label>
                                    <div class="btn-group col-sm-12 col-md-8 col-lg-6" role="group" aria-label="Método de pago">
                                        <input type="radio" class="btn-check" id="Creditcard" name="payment" value="Tarjeta" autocomplete="off" checked>
                                        <label class="btn btn-secondary" for="Creditcard">Tarjeta</label>
                                        <input type="radio" class="btn-check" id="Cash" name="payment" value="Efectivo" autocomplete="off">
                                        <label class="btn btn-secondary" for="Cash">Efectivo</label>
                                    </div>
                                </div>                                
                                <div class="mb-3 row">
                                    <label for="payment" class="col-md-4 col-lg-2 control-label">Cuentas con RFC:</label>
                                    <div class="btn-group col-sm-12 col-md-8 col-lg-6" role="group" aria-label="Cuenta RFC">
                                        <input type="radio" class="btn-check" id="RFC-Yes" name="RFC" value="Yes" autocomplete="off" checked>
                                        <label class="btn btn-secondary" for="RFC-Yes"> Si</label>

                                        <input type="radio" class="btn-check" id="RFC-No" name="RFC" value="No" autocomplete="off">
                                        <label class="btn btn-secondary" for="RFC-No"> No</label>
                                    </div>
                                </div>                                
                                <div class="mb-3 row">
                                    <label for="payment" class="col-md-4 col-lg-2 control-label">Vives en Guanajuato:</label>
                                    <div class="btn-group col-sm-12 col-md-8 col-lg-6" role="group" aria-label="Vive Guanajuato">
                                        <input type="radio" class="btn-check" id="Guanajuato-Yes" name="Guanajuato" value="Yes" autocomplete="off" >
                                        <label class="btn btn-secondary" for="Guanajuato-Yes"> Si</label>

                                        <input type="radio" class="btn-check" id="Guanajuato-No" name="Guanajuato" value="No" autocomplete="off" checked>
                                        <label class="btn btn-secondary" for="Guanajuato-No"> No</label>
                                    </div>
                                </div>                                
                                <div class="mb-3 row">
                                    <label for="totalTripPrice" class="col-sm-2 col-md-4 col-lg-2 col-form-label">Monto total del viaje:</label>
                                    <div class="col-sm-10 col-md-8 col-lg-10">
                                        <input type="number" class="form-control" id="totalTripPrice" name="totalTripPrice" step="any" min="0" placeholder="Monto total del viaje">
                                        <div id="val_totalTripPrice" class="alert alert-danger validation" role="alert" hidden="true"></div>
                                    </div>
                                </div>                                
                                <div class="mb-3 row">
                                    <label for="discount" class="col-sm-2 col-md-4 col-lg-2 col-form-label">Descuento:</label>
                                    <div class="col-sm-10 col-md-8 col-lg-10">
                                        <input type="number" class="form-control" id="discount" name="discount" step="any" min="0" placeholder="Descuento">
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="pendingamount" class="col-sm-2 col-md-4 col-lg-2 col-form-label">Saldo pendiente:</label>
                                    <div class="col-sm-10 col-md-8 col-lg-10">
                                        <input type="number" class="form-control" id="pendingamount" name="pendingamount" step="any" min="0" placeholder="Saldo pendiente">
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="earnings" class="col-sm-2 col-md-4 col-lg-2 col-form-label">Ganancia obtenida:</label>
                                    <div class="col-sm-10 col-md-8 col-lg-10">
                                        <input type="number" class="form-control" id="earnings" name="earnings" step="any" min="0" placeholder="Ganancia obtenida">
                                        <div id="val_earnings" class="alert alert-danger validation" role="alert" hidden="true"></div>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="kilometers" class="col-sm-2 col-md-4 col-lg-2 col-form-label">Kilómetros recorridos:</label>
                                    <div class="col-sm-10 col-md-8 col-lg-10">
                                        <input type="number" class="form-control" id="kilometers" name="kilometers" step="any" min="0.1" placeholder="Kilómetros recorridos">
                                        <div id="val_kilometers" class="alert alert-danger validation" role="alert" hidden="true"></div>
                                    </div>
                                </div>
                                <div class="mb-3 row row-cols-lg-5 align-items-center">
                                    <label for="time" class="col-sm-2 col-md-4 col-lg-2 col-form-label">Tiempo de duración:</label>
                                    <div class="col-12 col-form-label">
                                        <input type="number" id="hours" name="hours" class="form-control" placeholder="Horas">
                                    </div>
                                    <div class="col-12 col-form-label">
                                        <input type="number" id="minutes" name="minutes" class="form-control" placeholder="Minutos">
                                    </div>
                                    <div class="col-12 col-form-label">
                                        <input type="number" id="seconds" name="seconds" class="form-control" placeholder="Segundos">
                                    </div>
                                    <div class="col-12 col-form-label">
                                        <button type="button" class="btn btn-update" data-bs-toggle="modal" data-bs-target="#informationModal">Has Click para ayuda</button>
                                    </div>
                                    <label for="val_time" class="col-sm-2 col-md-4 col-lg-2 col-form-label"></label>
                                    <div class="col-sm-12 col-md-12 col-lg-10 col-form-label">
                                        <div id="val_time" class="alert alert-danger validation" role="alert" hidden="true"></div>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="extra" class="col-sm-2 col-md-4 col-lg-2 col-form-label">Gratificación extra:</label>
                                    <div class="col-sm-10 col-md-8 col-lg-10">
                                        <input type="number" class="form-control" id="extra" name="extra" step="any" min="1" placeholder="Gratificacion extra">
                                    </div>
                                </div> 
                                <div class="mb-3 row">
                                    <label for="extra" class="col-sm-2 col-md-4 col-lg-2 col-form-label">Tarifa dinámica:</label>
                                    <div class="col-sm-10 col-md-8 col-lg-10">
                                        <select class="form-select"  id="fare" name="fare">
                                            <option value="" selected="">Seleccione una opción</option>
                                            <option value="1.1">1.1x</option>
                                            <option value="1.2">1.2x</option>
                                            <option value="1.3">1.3x</option>
                                            <option value="1.4">1.4x</option>
                                            <option value="1.5">1.5x</option>
                                            <option value="1.6">1.6x</option>
                                            <option value="1.7">1.7x</option>
                                            <option value="1.8">1.8x</option>
                                            <option value="1.9">1.9x</option>
                                            <option value="2.0">2.0x</option>
                                            <option value="2.1">2.1x</option>
                                            <option value="2.2">2.2x</option>
                                            <option value="2.3">2.3x</option>
                                            <option value="2.4">2.4x</option>
                                            <option value="2.5">2.5x</option>
                                            <option value="2.6">2.6x</option>
                                            <option value="2.7">2.7x</option>
                                            <option value="2.8">2.8x</option>
                                            <option value="2.9">2.9x</option>
                                            <option value="3.0">3.0x</option>
                                            <option value="3.1">3.1x</option>
                                            <option value="3.2">3.2x</option>
                                            <option value="3.3">3.3x</option>
                                            <option value="3.4">3.4x</option>
                                            <option value="3.5">3.5x</option>
                                            <option value="3.6">3.6x</option>
                                            <option value="3.7">3.7x</option>
                                            <option value="3.8">3.8x</option>
                                            <option value="3.9">3.9x</option>
                                            <option value="4.0">4.0x</option>
                                            <option value="4.1">4.1x</option>
                                            <option value="4.2">4.2x</option>
                                            <option value="4.3">4.3x</option>
                                            <option value="4.4">4.4x</option>
                                            <option value="4.5">4.5x</option>
                                            <option value="4.6">4.6x</option>
                                            <option value="4.7">4.7x</option>
                                            <option value="4.8">4.8x</option>
                                            <option value="4.9">4.9x</option>
                                            <option value="5.0">5.0x</option>
                                        </select>   
                                    </div>
                                </div>
                                <div id="wrap-toll-1" class="mb-3 row row-cols-lg-5 align-items-center">
                                    <label for="toll-1" class="col-sm-2 col-md-4 col-lg-2 col-form-label">Monto de peajes:</label>
                                    <div class="col-sm-1 col-md-4 col-lg-6 col-form-label">
                                        <input type="number" id="toll-1" name="toll-1" class="form-control" placeholder="Peaje 1">
                                    </div>
                                    <div class="col-sm-1 col-md-2 col-lg-2 col-form-label">
                                        <button type="button" id="add_toll" class="btn btn-update btn-sm">+</button>
                                    </div>
                                    <div class="col-12 col-form-label">
                                        <div id="val_toll-1" class="alert alert-danger validation" for="toll-1" role="alert" hidden="true"></div>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="extra" class="col-sm-2 col-md-4 col-lg-2 col-form-label d-none" hidden="True">Cantidad de peajes:</label>
                                    <div class="col-sm-10 col-md-8 col-lg-10">
                                        <input type="number" class="form-control d-none" id="num-tolls" name="num-tolls" value="" hidden="True">
                                    </div>
                                </div> 
                                <div class="mb-3 row">
                                    <label for="extra" class="col-sm-2 col-md-4 col-lg-2 col-form-label d-none" hidden="True">Monto de peajes selecionados:</label>
                                    <div class="col-sm-10 col-md-8 col-lg-10">
                                        <input type="text" class="form-control d-none" id="selected_tolls" name="selected_tolls" value="" hidden="True">
                                    </div>
                                </div>                                                               
                                <div class="mb-3 row">
                                    <div class="d-grid gap-2 col-sm-12 col-md-12 col-lg-12">
                                        <button id="btn_simple_calc" type="submit" class="btn btn-update btn-lg btn-block">Calcular</button>
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <div class="d-grid gap-2 col-sm-12 col-md-12 col-lg-12">
                                        <button type="reset" class="btn btn-update2 btn-lg btn-block">Borrar</button>
                                    </div>
                                </div>                                                
                            </form>    
                        </div>          
                    </div>    
                </div>
            </div>
        </div>  
    </div>

    <!-- Information Modal -->
    <div id="informationModal" class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Información general</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h5><strong>Información general del uso de la calculadora</strong></h5>
                    <p>A continuación, se detalla una explicación para cada uno de los campos de la calculadora de viajes</p>
                    <h5>Monto total del viaje</h5>
                    <p>El monto total del viaje hace referencia al valor total pagado por el viaje, eso quiere decir, el monto que pagó el cliente por el viaje. Al igual que las ganancias del viaje, en caso de existir números decimales estos se deben escribir con punto (.)</p>
                    <h5>Descuento</h5>
                    <p>Este valor corresponde al monto total de los descuentos aplicados a un viaje por parte de la plataforma.</p>                              
                    <h5>Saldo pendiente</h5>
                    <p>Este monto corresponde a las tarifas que el cliente tiene pendientes por viajes anteriores y cancela en este viaje. Si el cliente no tiene montos pendientes este campo puede quedar vacío.</p>                              
                    <h5>Ganancias obtenidas</h5>
                    <p>Las ganancias obtenidas en el viaje corresponden al monto que se pagará por haber realizado el viaje. En caso de que existan números decimales, los mismo deben ser ingresados con punto (.) Por ejemplo: ₡ 5180.95</p>
                    <h5>Kilómetros recorridos</h5>
                    <p>Este dato corresponde a el total de kilómetros recorridos en el viaje, si este dato no es un número entero, se debe utilizar un punto (.) para los decimales. Por ejemplo: Un kilómetro y medio = 1.5</p>                              
                    <h5>Tiempo de duración</h5>
                    <p><b>Horas:</b> Corresponde a la cantidad de horas que duró el viaje. Si el viaje duró menos de 1 hora, debes colocar cero (0). Este campo solo acepta números del 0 al 24.<br>
                        <b>Minutos:</b> Lo minutos es la cantidad de minutos que duró el viaje. Este dato no puede ser igual a cero (0). Este campo acepta números del 1 al 59.<br>
                        <b>Segundos:</b> Los segundo son la cantidad de segundos que alcanzó el viaje. Si el mismo quedó en minutos exactos debes colocar cero (0). Este campo acepta números del 0 al 59. 
                        <i>Nota:</i> Ninguno de estos campos acepta números negativos.
                    </p>                              
                    <h5>Tarifa dinámica</h5>
                    <p>Esta corresponde a la tarifa dinámica aplicada al viaje. Si el vieja no fue con tarifa dinámica puedes dejar este campo sin modificación.</p>                              
                    <h5>Monto de peajes</h5>
                    <p>Corresponde a los peajes pagados durante el viaje, podrás agregar los diferentes peajes pagados según corresponda, puedes agregar mas campos solo apretantod el botón de más "+".</p>                              
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-update2" data-bs-dismiss="modal">Cerrar</button>  
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












