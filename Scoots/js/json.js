const requestRentals = 'data/data.json';
fetch(requestRentals)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const vehicles = jsonObject['vehicle'];
    for (let i = 0; i < vehicles.length; i++ ) {
        let vehicle = document.createElement('tr');
        vehicle.setAttribute("id","vehicle" + i);
        vehicle.setAttribute("class","vehicle");

        let name = document.createElement('td');
        name.setAttribute("class","vehiclename")

        let persons = document.createElement('td');
        persons.setAttribute("class","persons")

        let halfRes = document.createElement('td');
        halfRes.setAttribute("class","halfRes");

        let fullRes = document.createElement('td');
        fullRes.setAttribute("class","fullRes");

        let halfWalk = document.createElement('td');
        halfWalk.setAttribute("class","halfWalk");

        let fullWalk = document.createElement('td');
        fullWalk.setAttribute("class","fullWalk");
name.textContent = vehicles[i].rental;
persons.textContent = vehicles[i].seats;
halfRes.textContent = vehicles[i].rh; 
fullRes.textContent = vehicles[i].rf; 
halfWalk.textContent = vehicles[i].wh; 
fullWalk.textContent = vehicles[i].wf; 

vehicle.appendChild(name);
vehicle.appendChild(persons);
vehicle.appendChild(halfRes);
vehicle.appendChild(fullRes);
vehicle.appendChild(halfWalk);
vehicle.appendChild(fullWalk);
document.querySelector('tbody').appendChild(vehicle);
    }
      });
const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navBar');
menubutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
