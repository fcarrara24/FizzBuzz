const start = document.getElementById('start');

const hangingBorder = document.getElementById('hangingBorder');
const ropeLeft = document.getElementById('left');
const ropeRight = document.getElementById('right');

const ropeResetter = document.getElementById('restart')



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

ropeRight.addEventListener('click', function () {
    if (ropeLeft.style.display === "none") {
        reset();
        return;
    }
    console.log('right')
    ropeRight.style.display = "none";
    ropeResetter.style.display = "block";
    hangingBorder.classList.add('rotateRight');
});

ropeLeft.addEventListener('click', function () {
    if (ropeRight.style.display === "none") {
        reset();
        return;
    }
    console.log('left')

    ropeLeft.style.display = "none";
    ropeResetter.style.display = "block";
    hangingBorder.classList.add('rotateLeft');
});

ropeResetter.addEventListener('click', function () {
    if (hangingBorder.classList.contains('rotateRight') || hangingBorder.classList.contains('rotateLeft')) {
        reset();
    }
});

function reset() {
    hangingBorder.classList.remove('rotateRight');
    hangingBorder.classList.remove('rotateLeft');
    ropeLeft.style.display = "block";
    ropeRight.style.display = "block";
    ropeResetter.style.display = "none";
}