// boolean type
let isGood: boolean = true;

const sum = (x: number , y:number) : number => {
    return x+y;
}
//number

//Tuple
let basket: [string , number]
basket = ['hello' , 6];

// enum
enum Size { Small = 1 , Medium = 2 , Large = 3};

let sizeName : string  = Size[3];   // would print Large

let sizeNum : number = Size.Large;  // would print  3

let anything : any = "nooo";
anything = 5;
anything = "yes";
anything = true;

// void
let dance = () : void => {
    console.log('dance with me');
}

let error = () : never => {
    throw Error('ops');
}

// interface
interface RobotArmy {
    count : number,
    type : string,
    magic? : string  // it's optional param , maybe exist maybe not
}

let fight = (robots : RobotArmy) => 
{
    console.log(robots.type , "fight");
}

// type assertion ( casting)
let code : any = 200;

let code2 : number;
code2 = <number> code;

code2 = code as number;


// class
class Animal {
    private name : string;

    constructor(name : string)
    {
        this.name = name;
    }

    getName()
    {
        return this.name;
    }
}
let lion  = new Animal('lion');
console.log(lion.getName());

// union
let confused : string | number = "12";
confused = 12;