<?php
class viajeEconomy {

    private $basicFare = 3.00;
    private $kilometerFare = 3.00;
    private $minuteFare = 2.00;
    private $extraCharge10KmFare = 0.00;
    private $minimunFare = 30.00;
    private $profit = 0.85;
    private $Didifee = 0.15;
    private $kilometers = 0.00;
    private $time = 0.00;
    private $fare = 0.00;
    private $tolls;
    private $difference = 0.00;
    private $earnings = 0.00;
    private $totalTripPrice = 0.00;
    private $pendingAmount = 0.00;
    private $discount = 0.00;
    private $extraAmount = 0.00;
    private $payment = "";
    private $rfc = "";
    private $guanajuato = "";    

    function __construct($kilometers, $hours, $minutes, $seconds, $fare, $tolls, $earnings, $totalTripPrice, $pendingAmount, $discount, $extras, $payment, $rfc, $eGuanajuato) { 
        $this->kilometers = $kilometers;
        $this->time = $this->convertirMinutos($hours, $minutes, $seconds);
        if ($fare > 1 && $fare < 2) {
            $this->fare = $fare - 1;
        } else {
            $this->fare = $fare;
        }
        $this->tolls = $tolls;
        $this->earnings = $earnings;
        $this->totalTripPrice = $totalTripPrice;
        $this->pendingAmount = $pendingAmount;
        $this->discount = $discount;
        $this->extraAmount = $extras;
        $this->payment = $payment;
        $this->rfc = $rfc;
        $this->guanajuato = $eGuanajuato; 
        $this->difference = $this->calculateDifference();
    }

//###################################### Métodos getters #######################################################    

    public function getBasicFare() { 
        return $this->basicFare;
    }

    public function getKilometerFare() {
        return $this->kilometerFare;
    }

    public function getMinuteFare() { 
        return $this->minuteFare;
    }

    public function getExtraCharge10KmFare() { 
        return $this->extraCharge10KmFare;
    }

    public function getMinimunFare() {
        return $this->minimunFare;
    }

    public function getProfit() { 
        return $this->profit;
    }

    public function getDidifee() { 
        return $this->Didifee;
    }

    public function getKilometers() { 
        return $this->kilometers;
    }

    public function getTime() {
        return $this->time;
    }

    public function getFare() {  
        return $this->fare;
    }

    public function getTolls() { 
        return $this->tolls;
    }

    public function getDifference() { 
        return $this->difference;
    }

    public function getEarnings() {  
        return $this->earnings;
    }

    public function getTotalTripPrice() {  
        return $this->totalTripPrice;
    }

    function getPendingAmount() {
        return $this->pendingAmount;
    }

    function getDiscount() {
        return $this->discount;
    }

    function getExtraAmount() {
        return $this->extraAmount;
    }
        
    public function getTotalTolls() { 
        $cadena = preg_split("/\s/", $this->getTolls());
        $total = 0;
        for ($i = 0; $i < count($cadena); $i++) {
            if ($cadena[$i] != "+") {
                $total += (integer) $cadena[$i];
            }
        }
        return $total;
    }

    function getPayment() {
        return $this->payment;
    }

    function getRfc() {
        return $this->rfc;
    }
    
    function getGuanajuato() {
        return $this->guanajuato;
    }    
    
//###################################### Métodos de calculo #######################################################
    // Conviente los valores de horas, minutos y segundos a minutos
    private function convertirMinutos($hours, $minutes, $seconds) {// Si esta interno
        $htomin = $hours * 60;
        $stomin = $seconds / 60;
        return $htomin + $minutes + $stomin;
    }

    public function calculaMontoTotalViaje() { 
        if ($this->getKilometers() <= 1.5 && $this->getFare() == 0) {
            if ($this->getPayment() == "Efectivo") {
                return (double) $this->getMinimunFare() + (double) $this->getExtraAmount() + (integer) $this->getTotalTolls() + $this->getPendingAmount();
            } else {
                return (double) $this->getMinimunFare() + (double) $this->getExtraAmount() + (integer) $this->getTotalTolls();
            }
        } else {
            $fare = 0.0;
            if ($this->getFare() > 0) {
                $subTotal = $this->calculaKilometraje() + $this->calculaTiempo();
                $fare = $subTotal * $this->getFare();
            }
            $pending = 0.0;
            if ($this->getPayment() == "Efectivo") {
                $pending = (float) $this->getPendingAmount();
            }
            return (float) $this->getBasicFare() + (float) $this->calculaKilometraje() +
                    (float) $this->calculaTiempo() + (float) $fare + 
                    (integer) $this->getTotalTolls() + (float) $this->getExtraAmount() + $pending;
        }
    }

    public function calculaTarifaDinamica() { 
        $subTotal = $this->calculaKilometraje() + $this->calculaTiempo();
        return number_format($subTotal * $this->getFare(), 2);
    }

    public function calculaKilometraje() { 
            return $this->getKilometers() * $this->getKilometerFare();
    }

    public function calculaTiempo() { 
        return $this->getTime() * $this->getMinuteFare();
    }

    public function calculaComisionDidi() {        
        if ($this->getKilometers() <= 1.5 && $this->getFare() == 0) {
            return number_format(-($this->getMinimunFare() * $this->getDidifee()), 2);
        } else {
            if ($this->getPayment() == "Efectivo") {
                return -1 * (($this->calculaMontoTotalViaje() - $this->getExtraAmount() - $this->getTotalTolls() - $this->getPendingAmount()) * $this->getDidifee());
            } else {
                return -1 * (($this->calculaMontoTotalViaje() - $this->getExtraAmount() - $this->getTotalTolls()) * $this->getDidifee());
            }
        }
    }
    
    // Calculate the IVA for online service with RCF
    public function calculaIvaServiciosLineaRFC(){
        return -1 * ($this->calculaGanancia() * 0.08);
    }

    // Calculate the ISR with RCF
    public function calculaISRRFC(){
        return -1 * ($this->calculaGanancia() * 0.021);
    }
    
    // Calculate the IVA for online service without RCF
    public function calculaIvaServiciosLinea(){
        return -1 * ($this->calculaGanancia() * 0.16);
    }

    // Calculate the ISR without RCF 
    public function calculaISR(){
        return -1 * ($this->calculaGanancia() * 0.20);
    }    
    
    public function calculaIvaServiciosPlataforma(){
        return $this->calculaComisionDidi() * 0.16;
    }

    public function calculaIvaGuanajuato(){
        return -1 * ($this->calculaGanancia() * 0.021);
    }    
    
    public function calculaTaxes(){
        if ($this->getRfc() == "Yes"){
            $ivaSL = (float) $this->calculaIvaServiciosLineaRFC();
            $isr = (float) $this->calculaISRRFC(); 
            $ivaSP = (float) $this->calculaIvaServiciosPlataforma();
            if ($this->getGuanajuato() == "Yes"){
                $ivaGuanajuato = (float) $this->calculaIvaGuanajuato();
                $total = $ivaSL + $isr + $ivaSP + $ivaGuanajuato;
                return $ivaSL + $isr + $ivaSP + $ivaGuanajuato;
            } else {
                return $ivaSL + $isr + $ivaSP;
            }      
        }
        if ($this->getRfc() == "No"){
            $ivaSL = (float) $this->calculaIvaServiciosLinea();
            $isr = (float) $this->calculaISR();
            $ivaSP = (float)  $this->calculaIvaServiciosPlataforma();
            if ($this->getGuanajuato() == "Yes"){
                $ivaGuanajuato = (float) $this->calculaIvaGuanajuato();
                return ($ivaSL + $isr + $ivaSP + $ivaGuanajuato);
            } else {
                return ($ivaSL + $isr + $ivaSP);
            }
        }
    }

    public function calculaGanancia() {
        $total = (float) $this->calculaMontoTotalViaje() - $this->getExtraAmount() - $this->getTotalTolls();
        $uberfee = (float) $this->calculaComisionDidi() * -1;
        return ($total - $uberfee) + $this->getExtraAmount() + $this->getTotalTolls();
    }

     private function calculateDifference() {
        $uberfee = (float) $this->calculaComisionDidi() * -1;
        return (float) $this->getEarnings() - ($this->calculaMontoTotalViaje() - $uberfee + $this->calculaTaxes());
    }
    
//###################################### Métodos toString #######################################################

    public function toString_montoKilometraje() { 
            echo "&#36;" . $this->calculaKilometraje() . " => " .
            " (" . "&#36;" . $this->getKilometers() . " x " . "&#36;" . $this->getKilometerFare() . ")";
    }

    public function toString_montoTiempo() { 
        echo "&#36;" . number_format($this->calculaTiempo(), 2) . " => " .
        " (" . number_format($this->getTime(), 2) .
        " x " . "&#36;" . number_format($this->getMinuteFare(), 2) . ")";
    }

    public function toString_montoDinamica() { 
        echo "&#36;" . $this->calculaTarifaDinamica() . " => " .
        " (" . $this->getFare() .
        " x (" . "&#36;" . number_format($this->calculaKilometraje(), 2) . " + " . "&#36;" . number_format($this->calculaTiempo(), 2) . "))";
    }

    public function toString_montoGanancia() {
        // Importante se suma minimunFare y calculaComisionDidi ya que el resultado de calculaComisionDidi() es negativo
        return ((double) $this->minimunFare + (double) $this->calculaComisionDidi()) + (double) $this->getExtraAmount() + (double) $this->getTotalTolls();
    }
    
    public function toString_taxes(){
        if ($this->getRfc() == "Yes"){
            echo "<ul>" . 
                "<li>I.V.A. por ingresos en línea = " . "&#36;" . number_format($this->calculaIvaServiciosLineaRFC(), 2) . "</li>" .
                "<li>ISR por ingresos percibidos en línea = " . "&#36;" . number_format($this->calculaISRRFC(), 2) . "</li>" .
                "<li>I.V.A sobre la tarifa del servicio de Didi = " . "&#36;" . number_format($this->calculaIvaServiciosPlataforma(), 2) . "</li>";
                if ($this->getGuanajuato() == "Yes") { 
                    echo "<li>Impuesto estado de Guanajuato = " . "&#36;" . number_format($this->calculaIvaGuanajuato(), 2) . "</li>";
                }
            echo "</ul>" . 
            "Monto total de impuestos = " . "&#36;" . number_format($this->calculaTaxes(), 2);
        }    
         if ($this->getRfc() == "No"){
            echo "<ul>" . 
                "<li>I.V.A. por ingresos en línea = " . "&#36;" . number_format($this->calculaIvaServiciosLinea(), 2) . "</li>" .
                "<li>ISR por ingresos percibidos en línea = " . "&#36;" . number_format($this->calculaISR(), 2) . "</li>" .
                "<li>I.V.A sobre la tarifa del servicio de Didi = " . "&#36;" . number_format($this->calculaIvaServiciosPlataforma(), 2) . "</li>";
                if ($this->getGuanajuato() == "Yes") { 
                    echo "<li>Impuesto estado de Guanajuato = " . "&#36;" . number_format($this->calculaIvaGuanajuato(), 2) . "</li>";
                }
            echo "</ul>" . 
            "Monto total de impuestos = " . "&#36;" . number_format($this->calculaTaxes(), 2);
        }            
    }

    public function toString_taxesModal(){
        if ($this->getRfc() == "Yes"){
            echo "<BR>";
            echo "- I.V.A. por ingresos en línea = " . "&#36;" . number_format($this->calculaIvaServiciosLineaRFC(), 2) . "<BR>" .
                "- ISR por ingresos percibidos en línea = " . "&#36;" . number_format($this->calculaISRRFC(), 2) . "<BR>" .
                "- I.V.A sobre la tarifa del servicio de Didi = " . "&#36;" . number_format($this->calculaIvaServiciosPlataforma(), 2) . "<BR>";
                if ($this->getGuanajuato() == "Yes") { 
                    echo "- Impuesto estado de Guanajuato = " . "&#36;" . number_format($this->calculaIvaGuanajuato(), 2) . "<BR>";
                }
            echo "Monto total de impuestos = " . "&#36;" . number_format($this->calculaTaxes(), 2);
        }    
         if ($this->getRfc() == "No"){
            echo "<BR>"; 
            echo "- I.V.A. por ingresos en línea = " . "&#36;" . number_format($this->calculaIvaServiciosLinea(), 2) . "<BR>" .
                "- ISR por ingresos percibidos en línea = " . "&#36;" . number_format($this->calculaISR(), 2) . "<BR>" .
                "- I.V.A sobre la tarifa del servicio de Didi = " . "&#36;" . number_format($this->calculaIvaServiciosPlataforma(), 2) . "<BR>";
                if ($this->getGuanajuato() == "Yes") { 
                    echo "- Impuesto estado de Guanajuato = " . "&#36;" . number_format($this->calculaIvaGuanajuato(), 2) . "<BR>";
                }
            echo "Monto total de impuestos = " . "&#36;" . number_format($this->calculaTaxes(), 2);
        }            
    }
    
    public function toString_montoTotal() { 
        echo "&#36;" . number_format($this->calculaMontoTotalViaje(), 2) . " => ";
        if ($this->getKilometers() <= 1.5 && $this->getFare() == 0) {
            echo "(&#36;" . $this->getMinimunFare();
            if ($this->getTotalTolls() > 0) {
                echo " + " . "&#36;" . $this->getTotalTolls();
            }
            if ($this->getExtraAmount() > 0) {
                echo " + " . "&#36;" . $this->getExtraAmount();
            }            
            if ($this->getPayment() == "Efectivo") {
                echo " + " . "&#36;" . $this->getPendingAmount();
            }
        } else {
            echo "(&#36;" . (float) $this->getBasicFare() .
            " + " . "&#36;" . (float) $this->calculaKilometraje() .
            " + " . "&#36;" . number_format($this->calculaTiempo(), 2);
            if ($this->getFare() > 0) {
                echo " + " . "&#36;" . $this->calculaTarifaDinamica();
            }
            if ($this->getTotalTolls() > 0) {
                echo " + " . "&#36;" . $this->getTotalTolls();
            }
            if ($this->getExtraAmount() > 0) {
                echo " + " . "&#36;" . $this->getExtraAmount();
            }            
            if ( $this->getPayment() == "Efectivo") {
                echo " + " . "&#36;" . $this->getPendingAmount();
            }
        }
        echo ")";
    }

    public function toString_Ganancia() {
        $uberfee = $this->calculaComisionDidi() * -1;
        echo "&#36;" . number_format($this->calculaGanancia() + $this->calculaTaxes(), 2) . " => " .
        "(&#36;" . number_format($this->calculaMontoTotalViaje(), 2) .
        " - " . "&#36;" . number_format($uberfee, 2) .
        " - " . "&#36;" . number_format($this->calculaTaxes(), 2) . ")";
    }

    public function toStringSimple() {
        echo
        'Kilómetros = ' . number_format($this->getKilometers(), 2) . '<br>' .
        'Tiempo = ' . number_format($this->getTime(), 2) . '<br>';
        if ($this->getFare() > 0) {
            echo 'Tarifa dinámica = ' . number_format($this->getFare(), 2) . '<br>';
        }
        if ($this->getTotalTolls() > 0) {
            echo 'Peajes = &#36;' . $this->getTotalTolls() . '<br>';
        }
        if ($this->getExtraAmount() > 0) {
            echo 'Gratificación extra = &#36;' . $this->getExtraAmount() . '<br>';
        }
        echo "Comisión de Didi = &#36;" . $this->calculaComisionDidi() . '<br>';
        echo "Monto total de impuestos = " . "&#36;" . number_format($this->calculaTaxes(), 2) . '<br>';
        echo 'Monto total del viaje: &#36;' . number_format($this->calculaMontoTotalViaje(), 2);
    }

    public function toStringDifference(){
        echo "&#36;" . number_format($this->calculateDifference(), 2);
    }
}
?>