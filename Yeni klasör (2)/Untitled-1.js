
var cars={
    brand:Bmw,
    model:i8,
    color:black,
    packet:automatic,
    year:2011,

}
var car2={
    brand:Toyota,
    model:Prado,
    packet:avtomatic,
    color:silver,
    year:2019,
}
var car3={
    brand:Chevrolet,
    model:camaro,
    packet:manual,
    color:yellow,
    year:2007,
}
var car4={
    brand:kia,
    model:rio,
    packet:manual,
    color:silver,
    year:2005,
}
var car5={
    brand:hunday,
    model:Sonata,
    packet:automatic,
    color:silver,
    year:2017,
}
var car6={
    brand:tesla,
    model:Sserie,
    packet:automatic,
    color:silver,
    year:2019,
}

var machine
[
{
    brand:Bmw,
    model:i8,
    packet:automatic,   
    color:black,
    year:2011,
},

{
    brand:Toyota,
    model:Prado,
    packet:avtomatic,
    color:silver,
    year:2019,
},

{
    brand:Chevrolet,
    model:camaro,
    packet:manual,
    color:yellow,
    year:2007,
},

{
    brand:kia,
    model:rio,
    packet:manual,
    color:silver,
    year:2005,
},

{
    brand:hunday,
    model:Sonata,
    packet:automatic,
    color:silver,
    year:2017,
},

{
    brand:tesla,
    model:Sserie,
    packet:automatic,
    color:silver,
    year:2019,
},
]
var machine = 0;
var yenimasin =0;
for (i = 0; i < machine.length ; i++) {
    if(machine[i]>yenimasin)
    yenimasin = machine[i]
}
console.log(machine[i])