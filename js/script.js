class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  ageCompare(anotherUser) {
    if (this.age > anotherUser.age) {
      return this.firstName + " " + this.lastName + " è più grande di " + anotherUser.firstName + " " + anotherUser.lastName;
    } else {
      return anotherUser.firstName + " " + anotherUser.lastName + " è più grande di " + this.firstName + " " + this.lastName;
    }
  }
}
const user1 = new User("Mara", "Maionchi", 84, "Milano");
console.log(user1);

const user2 = new User("Costantino", "Della Gherardesca", 48, "Como");
console.log(user2);

console.log(user2.ageCompare(user1));

/* class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
}

const form = document.getElementById("form");
const ul = document.querySelector("ul");

form.onsubmit = function (event) {
  event.preventDefault();

  const petName = document.getElementById("add-pet-name").value;
  const ownerName = document.getElementById("add-owner-name").value;
  const species = document.getElementById("add-pet-species").value;
  const breed = document.getElementById("add-pet-breed").value;

  const addPet = new Pet(petName, ownerName, species, breed);

  const newLi = document.createElement("li");

  newLi.innerText = `Nome animale: ${addPet.petName}; nome padrone: ${addPet.ownerName}; specie: ${addPet.species}; razza: ${addPet.breed}`;
  ul.appendChild("newLi");

  form.reset();
};
 */

const form = document.getElementById("form");
const ul = document.querySelector("ul");
const pets = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  ownerCompare(secondPet) {
    if (this.ownerName === secondPet.ownerName) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = document.getElementById("add-pet-name").value;
  const ownerName = document.getElementById("add-pet-property").value;
  const species = document.getElementById("add-pet-species").value;
  const breed = document.getElementById("add-pet-breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);

  const li = document.createElement("li");
  li.textContent = `Nome animale: ${newPet.petName}, nome proprietario: ${newPet.ownerName}, specie: ${newPet.species}, razza: ${newPet.breed}`;

  ul.appendChild(li);

  form.reset();

  //ESERCIZIO1

  class User {
    constructor(_firstName, _lastName, _age, _location) {
      this.firstName = _firstName;
      this.lastName = _lastName;
      this.age = _age;
      this.location = _location;
    }

    compareAge(anotherUser) {
      if (this.age > anotherUser.age) {
        console.log(`${this.firstName} è più vecchio di ${anotherUser.firstName}`);
      } else if (this.age < anotherUser.age) {
        console.log(`${this.firstName} è più giovane di ${anotherUser.firstName}`);
      } else {
        console.log(`${this.firstName} e ${anotherUser.firstName} hanno la stessa età`);
      }
    }
  }

  const user1 = new User("Valeria", "Pagliarini", 29, "Fano");
  const user2 = new User("Mario", "Rossi", 30, "Roma");

  user1.compareAge(user2);

  /*ESERCIZIO 2*/

  class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
      this.petName = _petName;
      this.ownerName = _ownerName;
      this.species = _species;
      this.breed = _breed;
    }

    compareOwner(otherPet) {
      if (this.ownerName === otherPet.ownerName) {
        console.log("true");
      } else {
        console.log("false");
      }
    }
  }

  const form = document.getElementById("form");
  const ul = document.getElementById("ul");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;

    const newPet = new Pet(petName, ownerName, species, breed);

    const li = document.createElement("li");
    li.textContent = `Name: ${newPet.petName} Species: ${newPet.species} Breed: ${newPet.breed} Owner: ${newPet.ownerName}`;

    ul.appendChild(li);

    form.reset();
  });
});
