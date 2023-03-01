const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

// som.addEventListener('input', (e) => {
//     console.log(e.target.value);
//     const request = new XMLHttpRequest();
//     request.open('GET', 'data.json');
//     request.setRequestHeader('Content-Type', 'application.json');
//     request.send();
//     request.addEventListener('load', () => {
//         console.log(request.response);
//         const data = JSON.parse(request.response);
//         console.log(data);
//         usd.value = (e.target.value / data.usd).toFixed(2);
//     })
// });


const convert = (elem, target, target2, num) => {
    elem.addEventListener('input', ()=> {
        const request = new XMLHttpRequest();
        request.open('GET', 'data.json');
        request.setRequestHeader('Content-Type', 'application.json');
        request.send();
        request.addEventListener('load', () => {
            const data = JSON.parse(request.response);
            switch (num) {
                case 0:
                    target.value = (elem.value / data.usd).toFixed(2);
                    target2.value = (elem.value / data.eur).toFixed(2);
                    break;
                case 1:
                    target.value = (elem.value * data.usd).toFixed(2);
                    target2.value = (elem.value / data.eurUsd).toFixed(2);
                    break;
                case 2:
                    target.value = (elem.value * data.eur).toFixed(2);
                    target2.value = (elem.value * data.eurUsd).toFixed(2);
                    break;
            }
            // isTrue
            //     ?target.value = (elem.value / data.usd).toFixed(2)
            //     :target.value = (elem.value * data.usd).toFixed(2);
            elem.value === "" && (target.value = "");
            elem.value === "" && (target2.value = "");
        })
    })
}

convert(som, usd, eur, 0);
convert(usd, som, eur, 1);
convert(eur, som, usd, 2);