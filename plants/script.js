/*burger*/

const burgerIcon = document.querySelector('.burger-icon');
const headerNav = document.querySelector('.header-navigation');
const headerNavLi = document.querySelectorAll('.header-nav-list-li');
const oneSpan = document.querySelector('.one-span');
const twoSpan = document.querySelector('.two-span');
const toggleMenu = () => {
  document.body.classList.toggle('lock');
  headerNav.classList.toggle('active');
  burgerIcon.classList.toggle('active');
  oneSpan.classList.toggle('active');
  twoSpan.classList.toggle('active');
}

burgerIcon.addEventListener('click', e => {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_headerNav = target == headerNav || headerNav.contains(target);
  let its_burgerIcon = target == burgerIcon;
  let headerNav_is_active = headerNav.classList.contains('active');
  if (!its_headerNav && !its_burgerIcon && headerNav_is_active) {
    toggleMenu();
  }

  if (burgerIcon.classList.contains('active')) {
    document.body.classList.remove('lock');
    headerNav.classList.remove('active');
    burgerIcon.classList.remove('active');
    oneSpan.classList.remove('active');
    twoSpan.classList.remove('active');
  }
})

/*blur*/

const garden = document.querySelector('.garden');
const garden2 = document.querySelector('.garden2');
const planting = document.querySelector('.planting');
const planting2 = document.querySelector('.planting2');
const planting3 = document.querySelector('.planting3');
const lawn = document.querySelector('.lawn');
const btnGarden = document.querySelector('.btn-garden');
const btnLawn = document.querySelector('.btn-lawn');
const btnPlantingn = document.querySelector('.btn-plantingn');

function buttonGarden() {
  btnGarden.addEventListener('click', () => {
    planting.classList.toggle('active');
    planting2.classList.toggle('active');
    planting3.classList.toggle('active');
    lawn.classList.toggle('active');
  });
}

function buttonLawn() {
  btnLawn.addEventListener('click', () => {
    planting.classList.toggle('active');
    planting2.classList.toggle('active');
    planting3.classList.toggle('active');
    garden.classList.toggle('active');
    garden2.classList.toggle('active');
  });
}

function buttonPlanting() {
  btnPlantingn.addEventListener('click', () => {
    garden.classList.toggle('active');
    garden2.classList.toggle('active');
    lawn.classList.toggle('active');
  });
}

function service() {
  btnGarden.addEventListener('click', buttonGarden());
  btnLawn.addEventListener('click', buttonLawn());
  btnPlantingn.addEventListener('click', buttonPlanting());
}
service()

/*price*/

const price = document.querySelectorAll(".select");
let i;

for (i = 0; i < price.length; i++) {
  price[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/*city*/

/*const cities = {
  city: "Canandaigua, NY",
  phone: "+1	585	393 0001",
  office_adress: "151 Charlotte Street",

  city: "New York City",
  phone: "+1	212	456 0002",
  office_adress: "9 East 91st Street",

  city: "Yonkers, NY",
  phone: "+1	914	678 0003",
  office_adress: "511 Warburton Ave",

  city: "Sherrill, NY",
  phone: "+1	315	908 0004",
  office_adress: "14 WEST Noyes BLVD",
}*/


document.querySelectorAll('.select-city').forEach(function (selectCity) {
  const nameSelectCity = selectCity.querySelector('.name-select-city');
  const cityList = selectCity.querySelector('.city-list');
  const cityListItem = cityList.querySelectorAll('.city-list-item');
  const cityInput = selectCity.querySelector('.city-input');

  nameSelectCity.addEventListener('click', function (e) {
    cityList.classList.toggle('city-list--visible');
    this.classList.add('name-select-city--active');
  });

  const canandaiguaCity = document.querySelector('.canandaiguacity');
  const newYourCity = document.querySelector('.new-york-city');
  const yonkersCity = document.querySelector('.yonkers-city');
  const sherrillCity = document.querySelector('.sherrill-city');


  cityListItem.forEach(function (listItem) {
    document.querySelectorAll('.city-list li')[0].addEventListener('click', () => {
      canandaiguaCity.style.display = "flex";
      newYourCity.style.display = "none";
      yonkersCity.style.display = "none";
      sherrillCity.style.display = "none";
    });
    document.querySelectorAll('.city-list li')[1].addEventListener('click', () => {
      canandaiguaCity.style.display = "none";
      newYourCity.style.display = "flex";
      yonkersCity.style.display = "none";
      sherrillCity.style.display = "none";
    });
    document.querySelectorAll('.city-list li')[2].addEventListener('click', () => {
      canandaiguaCity.style.display = "none";
      newYourCity.style.display = "none";
      yonkersCity.style.display = "flex";
      sherrillCity.style.display = "none";
    });
    document.querySelectorAll('.city-list li')[3].addEventListener('click', () => {
      canandaiguaCity.style.display = "none";
      newYourCity.style.display = "none";
      yonkersCity.style.display = "none";
      sherrillCity.style.display = "flex";
    });

    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      nameSelectCity.innerText = this.innerText;
      nameSelectCity.focus();
      cityInput.value = this.dataset.value;
      cityList.classList.remove('city-list--visible');
    });
  });

  document.addEventListener('click', function (e) {
    if (e.target !== nameSelectCity) {
      nameSelectCity.classList.remove('nameSelectCity--active');
      cityList.classList.remove('cityList--visible');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      nameSelectCity.classList.remove('nameSelectCity--active');
      cityList.classList.remove('cityList--visible');
    }
  });
});