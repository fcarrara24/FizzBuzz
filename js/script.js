const start = document.getElementById('start');

start.addEventListener('click', function () {
    const container = document.getElementById('codeContainer');
    let print;
    let div;
    let color;
    for (let i = 1; i <= 100; i++) {
        //resetting addString & printstring
        div = '';
        print = '';
        color = '';
        if (i % 3 === 0) {
            color = 'green';
            print = 'Fizz';
        }

        if (i % 5 === 0) {
            //if it was divided also by 3 it concat the string
            if (color === 'green') {
                color = 'red'
            } else {
                color = 'yellow';
            }
            print = print + 'Buzz';
        } else if (i % 3 !== 0) {
            color = 'blue';
            print = String(i);
        }

        console.log(print);
        //dinamically creating a div with standard class inside
        div = document.createElement("div");

        //attaching another class name
        div.classList.add('myCard')
        div.classList.add(color);

        //inserting the right container content
        div.textContent = print;

        container.append(div)
    }

    container.append(completeString);
});