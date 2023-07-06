let x = 1;

let a = {
    x: 2,
    b: function() {
        console.log(this.x);
    },
    c: () => {
        console.log(x);
    }
}

a.c(); // Output: 1