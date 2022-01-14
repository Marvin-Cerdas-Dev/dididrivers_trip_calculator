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

    private function calculaDiferencia() {
        $this->difference = $this->earnings - $this->calculaGanancia();
    }

    // Conviente los valores de horas, minutos y segundos a minutos
    private function convertirMinutos($hours, $minutes, $seconds) {
        $htomin = $hours * 60;
        $stomin = $seconds / 60;
        return $htomin + $minutes + $stomin;
    }

    public function getKilometers() {
        return $this->kilometers;
    }

    public function getFare() {
        return $this->fare;
    }

    public function getTime() {
        return $this->time;
    }

    public function getMinimunFare() {
        return $this->minimunFare;
    }

    public function getTotalTolls() {
        $cadena = preg_split("/\s/", $this->tolls);
        $total = 0;
        for ($i = 0; $i < count($cadena); $i++) {
            if ($cadena[$i] != "+") {
                $total += (integer) $cadena[$i];
            }
        }
        return $total;
    }

    public function getTolls() {
        return $this->tolls;
    }

    // Calcula el monto de comision
    public function calculaComisionDidi() {
        if ($this->kilometers <= 1.5 && $this->fare == 0) {
            return (double) $this->minimunFare * (double) $this->Didifee;
        } else {
            return (double) ($this->calculaMontoTotalViaje() - (integer) $this->getTotalTolls()) * (double) $this->Didifee;
        }
    }

    public function toString_montoGanancia() {
        return ((double) $this->minimunFare - (double) $this->calculaComisionDidi()) + (double) $this->getTotalTolls();
    }

    public function getTotalTripPrice() {
        return $this->totalTripPrice;
    }

    public function getEarnings() {
        return $this->earnings;
    }

    public function getDifference() {
        return $this->difference;
    }

    private function calculaMontoTotalViaje() {
        if ($this->kilometers <= 1.5 && $this->fare == 0) {
            return (double) $this->minimunFare + (integer) $this->getTotalTolls();
        } else {
            $kilometers = (double) $this->kilometerFare * (double) $this->kilometers;
            $time = (double) $this->minuteFare * (double) $this->time;
            $fare = 0.0;
            if ($this->fare > 0) {
                $subTotal = $kilometers + $time;
                $fare = $subTotal * $this->fare;
            }
            return (double) $this->basicFare + (double) $kilometers + (double) $time + (double) $fare + (integer) $this->getTotalTolls();
        }
    }

    private function calculaGanancia() {
        return (double) $this->calculaMontoTotalViaje() - (double) $this->calculaComisionDidi();
    }

    //--------------------------------------------------------------------------------

    // Métodos de consulta de la clase de usan para mostrar los precios
    public function getBasicFare() {
        return $this->basicFare;
    }
    
    public function getKilometerFare() {
        return $this->kilometerFare;
    }

        public function getMinuteFare() {
        return $this->minuteFare;
    }
    
     function getExtraCharge10KmFare() {
        return $this->extraCharge10KmFare;
    }
}?>