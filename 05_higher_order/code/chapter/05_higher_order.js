var ancestry = JSON.parse(ANCESTRY_FILE);

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function reduceAncestors(person, f, defaultValue) {
  function valueFor(person) {
    if (person == null){
      console.log('Function: valueFor');
      console.log('This person doesnt exist (null) so returning 0');
      return defaultValue;
    }
    else
    console.log('Function: valueFor');
    console.log(person.name+"'s mother is: " + person.mother);
    console.log(person.name+"'s father is: " + person.father);
    return f(person, valueFor(byName[person.mother]),
                       valueFor(byName[person.father]));
  }
  return valueFor(person);
}

function sharedDNA(person, fromMother, fromFather) {
  if (person.name == "Pauwels van Haverbeke"){
    console.log('Function: sharedDNA');
    console.log('landed on Pauwels so returning 1');
    return 1;  
  }
  else {
    console.log('Function: sharedDNA')
    console.log('current person:' + person.name);
    console.log('from Mother:' + fromMother);
    console.log('from Father:' + fromFather);
    return (fromMother + fromFather) / 2;
  }
}


//var pauwels = byName["Pauwels van Haverbeke"];
//console.log(reduceAncestors(pauwels, sharedDNA, 0));

//var ph = byName["Philibert Haverbeke"];
//console.log(reduceAncestors(ph, sharedDNA, 0) / 4);

var random = byName["Joanna de Causmaecker"];
console.log(reduceAncestors(random, sharedDNA, 0));



// Your code here.
