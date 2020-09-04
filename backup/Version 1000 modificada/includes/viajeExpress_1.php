<?php

class viajeExpress {

    private $basicFare = 320.00;
    private $kilometerFare = 192.00;
    private $minuteFare = 32.00;
    private $extraCharge10KmFare = 40.00;
    private $minimunFare = 755;
    private $profit = 0.85;
    private $Didifee = 0.15;
    private $kilometers = 0.00;
    private $time = 0.00;
    private $fare = 0.00;
    private $tolls;
    private $difference = 0.00;
    private $earnings = 0.00;
    private $totalTripPrice = 0.00;
    
    function __construct($kilometers, $hours, $minutes, $seconds, $fare, $tolls, $earnings, $totalTripPrice) {
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
        $this->calculaDiferencia();
    }

    // Return the basic fare
    public function getBasicFare() {
        return $this->basicFare;
    }

    // Return the kilometer fare
    public function getKilometerFare() {
        return $this->kilometerFare;
    }
    
    // Return the minute fare
    public function getMinuteFare() {
        return $this->minuteFare;
    }
    
    // Return the extra charge fare for the surplus 10 Km
    function getExtraCharge10KmFare() {
        return $this->extraCharge10KmFare;
    }

    // Return the Minimun fare
    function getMinimunFare() {
        return $this->minimunFare;
    }

           
    public function getKilometros_recorridos() {
        return $this->kilometers;
    }

    ##

    public function getTiempo_duracion() {
        return $this->time;
    }

    ##

    public function getTarifa_dinamica() {
        return $this->fare;
    }

    ##

    public function getPeajes() {
        return $this->tolls;
    }

    ##

    public function getMontoGanado() {
        return $this->earnings;
    }

    ##

    public function getMontoTotalDelViaje() {
        return $this->totalTripPrice;
    }

    public function getDiferencia() {
        return $this->diference;
    }

    ##

    public function calculaKilometraje() {
        if ($this->kilometers > 10) {
            $excess = $this->kilometers - 10;
            return (10 * $this->kilometerFare) + ($excess * $this->extraCharge10KmFare);
        } else {
            return $this->kilometers * $this->kilometerFare;
        }
    }

    ##

    public function convertirMinutos($hours, $minutes, $seconds){
        $htomin = $hours * 60;
        $stomin = $seconds / 60;
        return $htomin + $minutes + $stomin;
    }

    public function calculaTiempo() {
        return $this->time * $this->minuteFare;
    }

    ##

    public function calculaTarifaDinamica() {
        $subTotal = $this->calculaKilometraje() + $this->calculaTiempo();
        return $subTotal * $this->fare;
    }

    ##

    public function calculaTotalViaje() {
        if ($this->kilometers <= 1) {
            $fare = 0;
            if ($this->fare > 0) {
                $fare = $this->minimunFare * $this->fare;
            }
            return (double)($this->minimunFare + $fare) * (double)$this->profit + (double)$this->tolls;
        } else {
            $kilometers = $this->calculaKilometraje();
            $time = $this->calculaTiempo();
            $fare = 0.0;
            if ($this->fare > 0) {
                $fare = $this->calculaTarifaDinamica();
            }
            return (double)$this->basicFare + (double)$kilometers + (double)$time + (double)$fare + (double)$this->tolls;
        }
    }

    ##

    public function calculaComisionDidi() {
        return (double)($this->calculaTotalViaje() - (double)$this->tolls) * (double)$this->Didifee;
    }

    ##

    public function calculaGanancia() {
        return (double)$this->calculaTotalViaje() - (double)$this->calculaComisionDidi();
    }

    ##

    public function calculaDiferencia() {
        $this->diference = $this->earnings - $this->calculaGanancia();
    }

    public function toString() {
        echo
        'Kilómetros: ' . number_format($this->kilometers, 2) . '<br>' .
        'Tiempo: ' . number_format($this->time, 2) . '<br>';
        if ($this->fare > 0) {
            echo 'Tarifa dinámica: ' . number_format($this->fare, 2) . '<br>';
        }
        if ($this->tolls > 0) {
            echo 'Peajes: &#8353;' . $this->tolls . '<br>';
        }
        echo 'Ganancia: &#8353;' . number_format($this->calculaGanancia(), 2);
    }

    ##

    public function toString_montoKilometraje() {
        if ($this->kilometers > 10) {
            $excess = $this->kilometers - 10;
            echo "&#8353;" . $this->calculaKilometraje() .
            " (20 * " . "&#8353;" . $this->kilometerFare . ") + (" . $excess . "&#8353;" . $this->extraCharge10KmFare . ")";
        } else {
            echo "&#8353;" . $this->calculaKilometraje() .
            " (" . "&#8353;" . $this->getKilometros_recorridos() . " x " . "&#8353;" . $this->getKilometerFare() . ")";
        }
    }

    ##

    public function toString_montoTiempo() {
        echo "&#8353;" .  number_format($this->calculaTiempo(), 2) . " (" . number_format($this->getTiempo_duracion(), 2) . "min" .
        " x " . "&#8353;" . $this->getMinuteFare() . ")";
    }

    ##

    public function toString_montoDinamica() {
        echo "&#8353;" . number_format($this->calculaTarifaDinamica(), 2) . " (" . $this->getTarifa_dinamica() .
        " x (" . "&#8353;" . $this->calculaKilometraje() . " + " . "&#8353;" . number_format($this->calculaTiempo(), 2) . "))";
    }

    ##

    public function toString_montoTotal() {
        echo "&#8353;" . number_format($this->calculaTotalViaje(), 2) . " (" . "&#8353;" . $this->getBasicFare() .
        " + " . "&#8353;" . $this->calculaKilometraje() . " + " . "&#8353;" . number_format($this->calculaTiempo(), 2);
        if ($this->getTarifa_dinamica() > 0) {
            echo " + " . "&#8353;" . number_format($this->calculaTarifaDinamica(), 2);
        }
        if ($this->getPeajes() > 0) {
            echo " + " . "&#8353;" . $this->getPeajes();
        }
        echo ")";
    }

}

?>