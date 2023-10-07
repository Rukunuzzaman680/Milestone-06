function greeting(greetingHandler, name) {
  greetingHandler(name);
}

function greetingMorning(name) {
  console.log('Good morning', name);
}

function greetingEvening(name) {
  console.log('Good Evening', name);
}

function greetingNight(name) {
  console.log('Good Night', name);
}

greeting(greetingMorning, 'Tom Cruise');
greeting(greetingEvening, 'Tom Hanks');
greeting(greetingEvening, 'Tom Cook');
