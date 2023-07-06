let a = {
    x:1,
    y:2
}

let b = {
    y:4
}

b.__proto__ = a;

console.log(b.y , b.x);