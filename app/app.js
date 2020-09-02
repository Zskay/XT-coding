const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();


request.open('GET', 'https://api.spaceXdata.com/v3/launches?limit=100', true);
request.onload = function () {

  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(flight => {
 
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      var img = new Image();
      img.src = flight.links.mission_patch;
      img.setAttribute("class", "misson-patch");
      img.setAttribute("alt", "misson-patch");
      
      const h1 = document.createElement('h1');
      h1.textContent = flight.mission_name;

      const p = document.createElement('p');
      const p2 = document.createElement('p');
      const p3 = document.createElement('p');
      const p4 =  document.createElement('p');
  
      flight.mission_id = flight.mission_id;      
      flight.launch_year = flight.launch_year;  
      flight.launch_success = flight.launch_success;

      const check = ['rocket', 'first_stage', 'cores', 'land_success'];
      const land = check.reduce((object, path) => {
        return (object || {})[path];
      }, flight)

    
      p.textContent = `Misson ID: ${flight.mission_id}`;  
      p2.textContent = `Launch Year: ${flight.launch_year}`;    
      p3.textContent = `Successful Launch: ${flight.launch_success}`;     
      p4.textContent = `Successful Landing: ${land}`;
      
      container.appendChild(card);
      card.appendChild(img)
      card.appendChild(h1);
      card.appendChild(p);
      card.appendChild(p2);
      card.appendChild(p3);
      card.appendChild(p4);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `error`;
    app.appendChild(errorMessage);
  }

}

request.send();



function filteryear(y){
  var yearf = new XMLHttpRequest();

  yearf.open('GET', 'https://api.spacexdata.com/v3/launches?limit=100&launch_success=true', true);
  yearf.onload = function () {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      data.forEach(flight => {
        if(flight.launch_year==y){
          const card = document.createElement('div');
          card.setAttribute('class', 'card');
    
          var img = new Image();
          img.src = flight.links.mission_patch;
          img.setAttribute("class", "misson-patch");
          img.setAttribute("alt", "misson-patch");
          
          const h1 = document.createElement('h1');
          h1.textContent = flight.mission_name;
    
          const p = document.createElement('p');
          const p2 = document.createElement('p');
          const p3 = document.createElement('p');
          const p4 =  document.createElement('p');
      
          flight.mission_id = flight.mission_id;      
          flight.launch_year = flight.launch_year;  
          flight.launch_success = flight.launch_success  
    
          const check = ['rocket', 'first_stage', 'cores', 'land_success'];
          const land = check.reduce((object, path) => {
            return (object || {})[path];
          }, flight)
    
        
          p.textContent = `Misson ID: ${flight.mission_id}`;  
          p2.textContent = `Launch Year: ${flight.launch_year}`;    
          p3.textContent = `Successful Launch: ${flight.launch_success}`;     
          p4.textContent = `Successful Landing: ${land}`;
          
          container.appendChild(card);
          card.appendChild(img)
          card.appendChild(h1);
          card.appendChild(p);
          card.appendChild(p2);
          card.appendChild(p3);
          card.appendChild(p4);
        }
        
      });
    } else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `error`;
      app.appendChild(errorMessage);
    }
  
  
  }
  
  yearf.send();
}

function filterlaunch(){
  var launchsuc = new XMLHttpRequest();

  launchsuc.open('GET', 'https://api.spacexdata.com/v3/launches?limit=100&launch_success=true', true);
  launchsuc.onload = function () {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      data.forEach(flight => {
   
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
  
        var img = new Image();
        img.src = flight.links.mission_patch;
        img.setAttribute("class", "misson-patch");
        img.setAttribute("alt", "misson-patch");
        
        const h1 = document.createElement('h1');
        h1.textContent = flight.mission_name;
  
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const p4 =  document.createElement('p');
    
        flight.mission_id = flight.mission_id;      
        flight.launch_year = flight.launch_year;  
        flight.launch_success = flight.launch_success  
  
        const check = ['rocket', 'first_stage', 'cores', 'land_success'];
        const land = check.reduce((object, path) => {
          return (object || {})[path];
        }, flight)
  
      
        p.textContent = `Misson ID: ${flight.mission_id}`;  
        p2.textContent = `Launch Year: ${flight.launch_year}`;    
        p3.textContent = `Successful Launch: ${flight.launch_success}`;     
        p4.textContent = `Successful Landing: ${land}`;
        
        container.appendChild(card);
        card.appendChild(img)
        card.appendChild(h1);
        card.appendChild(p);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
      });
    } else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `error`;
      app.appendChild(errorMessage);
    }
  
  
  }
  
  launchsuc.send();
}



function filterland(){
  var landsuc = new XMLHttpRequest();

  landsuc.open('GET', 'https://api.spacexdata.com/v3/launches?limit=100&launch_success=true', true);
  landsuc.onload = function () {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      data.forEach(flight => {
   
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
  
        var img = new Image();
        img.src = flight.links.mission_patch;
        img.setAttribute("class", "misson-patch");
        img.setAttribute("alt", "misson-patch");
        
        const h1 = document.createElement('h1');
        h1.textContent = flight.mission_name;
  
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const p4 =  document.createElement('p');
    
        flight.mission_id = flight.mission_id;      
        flight.launch_year = flight.launch_year;  
        flight.launch_success = flight.launch_success  
  
        const check = ['rocket', 'first_stage', 'cores', 'land_success'];
        const land = check.reduce((object, path) => {
          return (object || {})[path];
        }, flight)
  
      
        p.textContent = `Misson ID: ${flight.mission_id}`;  
        p2.textContent = `Launch Year: ${flight.launch_year}`;    
        p3.textContent = `Successful Launch: ${flight.launch_success}`;     
        p4.textContent = `Successful Landing: ${land}`;
        
        container.appendChild(card);
        card.appendChild(img)
        card.appendChild(h1);
        card.appendChild(p);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
      });
    } else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `error`;
      app.appendChild(errorMessage);
    }
  
  
  }
  
  landsuc.send();
}


