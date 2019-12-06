// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header = document.createElement('div'),
    date = document.createElement('span'),
    lambdaHead = document.createElement('h1'),
    temperature = document.createElement('span');

    header.classList.add('header');
    date.classList.add('date');
    temperature.classList.add('temp');

    date.textContent = "SMARCH 28, 2019";
    lambdaHead.textContent = "Lambda Times";
    temperature.textContent = "98°";

    header.appendChild(date);
    header.appendChild(lambdaHead);
    header.appendChild(temperature);

    return header;
}

const headerContent = document.querySelector('.header-container');

headerContent.appendChild(Header());