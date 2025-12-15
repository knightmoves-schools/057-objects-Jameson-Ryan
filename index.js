let school = {
  name: 'Daleville',
  'average class size': 12,
  mascot: 'Bird',
};

document.getElementById('result').innerHTML = `${school.name} has an average class size of ${school['average class size']} and their mascot is a ${school.mascot}`;

