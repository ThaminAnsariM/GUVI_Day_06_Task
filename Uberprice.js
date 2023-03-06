class UBER{
    constructor(Distance){
        this.Distance = Distance;
    }
    caluulateprice(){
        const Baseprice = 25;
        const perKM = 16;
        return Math.round(Baseprice + (this.Distance*perKM)).toFixed(2);

    }
}

var myride = new UBER(25);
console.log(`The total price of your ride is ${myride.caluulateprice()}-RS`);
