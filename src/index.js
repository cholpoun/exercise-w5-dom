console.log("Start Here 😉");



// // Get references to the radio buttons and the box element
const darkRadio = document.getElementById('dark');
const lightRadio = document.getElementById('light');
const crazyRadio = document.getElementById('crazy');
const box = document.getElementById('boxThatChangesColor');


const changeBoxColor = (theme) => {
    switch (theme) {
        case 'dark':
            box.style.backgroundColor = 'gray';
            break;
        case 'light':
            box.style.backgroundColor = 'red';
            break;
        case 'crazy':
            box.style.backgroundColor = 'green';
    }
};

// Add event listeners   
// to the radio buttons
darkRadio.addEventListener('change', () => changeBoxColor('dark'));
lightRadio.addEventListener('change', () => changeBoxColor('light'));
crazyRadio.addEventListener('change', () => changeBoxColor('crazy'));

// Initial color based on the default checked radio button
// changeBoxColor('dark');
