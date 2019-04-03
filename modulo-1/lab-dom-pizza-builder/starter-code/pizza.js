// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperonni: { name: 'Pepperonni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderPepperonni() {
  document.querySelectorAll('.pep').forEach((pepperonni) => {
    if (state.pepperonni) {
      pepperonni.style.visibility = 'visible';
    } else {
      pepperonni.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((greenPepper) => {
    if (state.greenPeppers) {
      greenPepper.style.visibility = 'visible';
    } else {
      greenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  const sauceWhite = document.getElementsByClassName('sauce');
  if (state.whiteSauce) {
    sauceWhite[0].setAttribute('id', 'sauce-white');
  } else {
    sauceWhite[0].removeAttribute('id');
  }
}

function renderGlutenFreeCrust() {
  const crust = document.getElementsByClassName('crust');
  if (state.glutenFreeCrust) {
    crust[0].setAttribute('id', 'crust-gluten-free');
  } else {
    crust[0].removeAttribute('id');
  }
}

function renderPepperonniButton() {
  const pepperonni = document.getElementById('btn-pepperonni');
  if (state.pepperonni) {
    pepperonni.setAttribute('class', 'btn active');
  } else {
    pepperonni.setAttribute('class', 'btn');
  }
}

function renderMushroomButton() {
  const mushroom = document.getElementById('btn-mushrooms');
  if (state.mushrooms) {
    mushroom.setAttribute('class', 'btn active');
  } else {
    mushroom.setAttribute('class', 'btn');
  }
}

function renderGreenPepperButton() {
  const greemPep = document.getElementById('btn-green-peppers');
  if (state.greenPeppers) {
    greemPep.setAttribute('class', 'btn active');
  } else {
    greemPep.setAttribute('class', 'btn');
  }
}

function renderWhiteSauceButton() {
  const whiteSauce = document.getElementById('btn-sauce');
  if (state.whiteSauce) {
    whiteSauce.setAttribute('class', 'btn active');
  } else {
    whiteSauce.setAttribute('class', 'btn');
  }
}

function renderCrustButton() {
  const crust = document.getElementById('btn-crust');
  if (state.glutenFreeCrust) {
    crust.setAttribute('class', 'btn active');
  } else {
    crust.setAttribute('class', 'btn');
  }
}

function renderPepperonniPrice() {
  const pepperonni = document.getElementById('price-pepperonni');
  if (state.pepperonni) {
    pepperonni.style.display = 'block';
  } else {
    pepperonni.style.display = 'none';
  }
}

function renderMushroomPrice() {
  const mushroom = document.getElementById('price-mushrooms');
  if (state.mushrooms) {
    mushroom.style.display = 'block';
  } else {
    mushroom.style.display = 'none';
  }
}

function renderGreenPepperPrice() {
  const greenPepper = document.getElementById('price-green-peppers');
  if (state.greenPeppers) {
    greenPepper.style.display = 'block';
  } else {
    greenPepper.style.display = 'none';
  }
}

function renderWhiteSoucePrice() {
  const sauce = document.getElementById('price-sauce');
  if (state.whiteSauce) {
    sauce.style.display = 'block';
  } else {
    sauce.style.display = 'none';
  }
}

function renderCrustPrice() {
  const crust = document.getElementById('price-crust');
  if (state.glutenFreeCrust) {
    crust.style.display = 'block';
  } else {
    crust.style.display = 'none';
  }
}

function renderTotalPrice() {
  renderPepperonniPrice();
  renderMushroomPrice();
  renderGreenPepperPrice();
  renderWhiteSoucePrice();
  renderCrustPrice();
  let totalPrice = basePrice;
  const price = document.getElementById('total-price');
  if (state.pepperonni) {
    totalPrice += ingredients.pepperonni.price;
  }
  if (state.mushrooms) {
    totalPrice += ingredients.mushrooms.price;
  }
  if (state.greenPeppers) {
    totalPrice += ingredients.greenPeppers.price;
  }
  if (state.whiteSauce) {
    totalPrice += ingredients.whiteSauce.price;
  }
  if (state.glutenFreeCrust) {
    totalPrice += ingredients.glutenFreeCrust.price;
  }
  price.innerText = `$${totalPrice}`;
}

function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderPepperonniButton();
  renderMushroomButton();
  renderGreenPepperButton();
  renderWhiteSauceButton();
  renderCrustButton();

  renderTotalPrice();
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('#btn-pepperonni').onclick = () => {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('#btn-mushrooms').onclick = () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('#btn-green-peppers').onclick = () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('#btn-sauce').onclick = () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('#btn-crust').onclick = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
