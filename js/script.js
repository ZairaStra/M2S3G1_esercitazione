class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
}

const user1 = new User("Mara", "Maionchi", 84, "Milano");
console.log(user1);

const user2 = new User("Costantino", "Della Gherardesca", 48, "Como");
console.log(user2);

const ageCompare = function (firstUser, secondUser) {
  if (firstUser.age > secondUser.age) {
    console.log(firstUser.firstName + " " + firstUser.lastName + " è più grande di " + secondUser.firstName + " " + secondUser.lastName);
  } else {
    console.log(secondUser.firstName + " " + secondUser.lastName + " è più grande di " + firstUser.firstName + " " + firstUser.lastName);
  }
};

ageCompare(user1, user2);

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

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  ownerCompare(firstOwner, secondOwner) {
    if (firstOwner === secondOwner) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

const form = document.getElementById("form");
const ul = document.querySelector("ul");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = document.getElementById("add-pet-name").value;
  const ownerName = document.getElementById("add-pet-property").value;
  const species = document.getElementById("add-pet-species").value;
  const breed = document.getElementById("add-pet-breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);

  const li = document.createElement("li");
  li.textContent = `Name: ${newPet.petName} Species: ${newPet.species} Breed: ${newPet.breed} Owner: ${newPet.ownerName}`;

  ul.appendChild(li);

  form.reset();

  ownerCompare();
});
