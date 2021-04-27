let rectangles = [
    { width: 2, height: 2, color: "red" },
    { width: 2, height: 8, color: "green" },
    { width: 3, height: 2, color: "brown" },
    { width: 2, height: 3, color: "black" },
    { width: 4, height: 4, color: "red" },
    { width: 5, height: 4, color: "black" },
    { width: 1, height: 4, color: "white" },
    { width: 2, height: 2, color: "black" },
    { width: 1, height: 3, color: "orange" },
    { width: 1, height: 1, color: "white-red" }
];
let hasColor = c => rectangle => rectangle.color == c;
let isSqure = rectangle => rectangle.width == rectangle.height;
let calcArea = rectangle => rectangle.width * rectangle.height;
let calcPerimeter = rectangle => (rectangle.width + rectangle.height) * 2;

const and = (l, r) => data => l(data) && r(data);
const or = (l, r) => data => l(data) || r(data);

let sum = elements => elements.reduce((a, b) => a + b, 0);
let max = elements => elements.reduce((a, b) => a >= b ? a : b,false);

const filter = f => a => a.filter(f);
const map = f => a => a.map(f);
const reduce = (f,p) => m => m.reduce(f,p);

const flow = (...params) => data => params.reduce((result, fn) => fn(result) , data);    
const combine = (...params) => data => params.reduceRight((result, fn) => fn(result), data); 

const all = (...params) =>params.reduce(and, ()=>true) 
const any = (...params) =>params.reduce(or,()=>false)

let maxAreaBlackSquareFlow = flow(
    filter(all(hasColor('orange'), isSqure)),
    map(calcArea),
    max
);

let sumPerimetersRedSquares = flow(
    filter(hasColor('red')),
    map(calcPerimeter),
    sum
);
console.log(maxAreaBlackSquareFlow(rectangles))