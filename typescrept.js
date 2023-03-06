class circle{

    constructor(radius){
        this.radius=radius;
    }

    getarea(){
        return  Math.round(Math.PI * this.radius ** 2).toFixed(2);
    }

    getdiameter(){
        return this.radius*2;
    }
    getcircumfrence(){
        return Math.round(2 * Math.PI * this.radius).toFixed(2);
    }


}   
var rad = new circle(10);
console.log(rad.getarea());
console.log(rad.getdiameter());
console.log(rad.getcircumfrence());