var planet_names = ["earth","pluton","mercurio","venus","marte","jupiter","uranus","nectuno","saturno"];

var Planet = function(){
    return {
      //atributos
    clockwise_translation: Math.round(Math.random()),
    size: Math.random() * (100 - 10) + 10,
    speed: Math.random() *(1 - 10) + 1, //px/sec
    color: "#AAA",
    orbit_size: Math.random() * (300 - 200) + 200,
    orbit_position: Math.random() * 360,
    name: planet_names.pop(),
    dom_orbit: null,
    dom_planet: null,
    rotation_proccess_id: null,
      //Metodos
    getSize: function(){
      return this.size + "px";
    },
    getSpeed: function(){
      return this.speed + "deg";
    },
    getOrbitsize: function(){
      return this.orbit_size + "px";
    },
    pushDOMElement: function(dom_parent) {
      //planet_orbit describe las orbitas de planetas
      var planet_orbit = document.createElement("li");
      //planet_body describe las propiedades del planeta
      var planet_body = document.createElement("span");
      planet_body.setAttribute("class","planet");
      planet_orbit.appendChild(planet_body);
      planet_body.textContent = this.name;
      planet_body.style.width = this.getSize();
      planet_body.style.height = this.getSize();
      planet_orbit.style.position = "absolute";
      planet_orbit.style.width = this.getOrbitsize();
      planet_orbit.style.height = this.getOrbitsize();
      planet_orbit.style.transform="rotate("+this.orbit_position+"deg)";
      planet_orbit.style.top = 0;
      planet_orbit.style.left = 0;
      planet_orbit.style.transformOrigin = "top left";
      planet_body.style.position = "absolute";
      planet_body.style.bottom = 0;
      planet_body.style.right = 0;
      dom_parent.appendChild(planet_orbit);
      this.dom_orbit = planet_orbit;
      this.dom_planet = planet_orbit;
    },
    startRotation: function(){
      var self = this;
      var freq = 10;
      self.rotation_proccess_id = setInterval(function(){
          if(self.clockwise_translation === 1){
              self.orbit_position += self.speed/freq;
          }else {
            self.orbit_position-= self.speed/freq;
          }

        self.dom_orbit.style.transform = "rotate("+self.orbit_position+"deg)";

      },1000/freq);
    }
  };//return
};//planet()


var number_of_planets = 8;
var planets = [];
while (number_of_planets-- > 0) {
  planets.push(Planet());
}

console.log(planets);
document.addEventListener("DOMContentLoaded", function(){
  var planetary_system = document.querySelector(".planets");
  console.log(planetary_system);
  for(var planet_pos in planets){
    planets[planet_pos].pushDOMElement(planetary_system);
    planets[planet_pos].startRotation();
  }

});
