'use strict';

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');

setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});

setupClose.addEventListener('click', function () {
  setup.classList.add('invisible');
});

var wizard = document.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = wizardCoatColors[Math.floor(Math.random() * wizardCoatColors.length)];
});

var wizardEyes = wizard.querySelector('#wizard-eyes');
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = wizardEyesColors[Math.floor(Math.random() * wizardEyesColors.length)];
});

var fireball = document.querySelector('.setup-fireball-wrap');
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

fireball.addEventListener('click', function () {
  fireball.style.backgroundColor = fireballColors[Math.floor(Math.random() * fireballColors.length)];
});

var userName = document.querySelector('.setup-user-name');
userName.required = true;
userName.maxLength = 50;
