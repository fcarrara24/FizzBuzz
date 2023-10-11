const start = document.getElementById('start');

start.addEventListener('click', function () {
    const container = document.getElementById('codeContainer');
    let print;
    let div;
    let color;
    console.log(container.innerHTML);
    if (container.innerHTML === "") {
        for (let i = 1; i <= 100; i++) {
            //resetting addString & printstring
            div = '';
            color = '';
            if (i % 15 === 0) {
                color = 'red';
                print = 'FrizzBuzz';
            } else if (i % 3 === 0) {
                color = 'green';
                print = 'Fizz';
            } else if (i % 5 === 0) {
                color = 'yellow';
                print = 'Buzz';
            } else {
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
    } else {
        //cleaning all inside content
        container.innerHTML = "";
    }


});