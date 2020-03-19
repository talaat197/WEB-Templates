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