const start = document.getElementById('start');

start.addEventListener('click', function () {
    let print;
    for (let i = 1; i <= 100; i++) {
        print = ''
        if (i % 3 === 0) {
            print = 'Fix';
        }

        if (i % 5 === 0) {
            //if it was divided also by 3 it concat the string
            print = print + 'Buzz';
        } else if (i % 3 !== 0) {
            print = i;
        }

        console.log(print);
    }
});