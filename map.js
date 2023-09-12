let map;

function initMap() {
    const ch= {lat: -29.9649828, lng: -51.6324878};
    const sj ={lat: -29.96311786, lng:-51.723352};
    const gc ={lat: -29.9088718, lng:-51.7658935};
    const tf ={lat: -29.9371344, lng:-51.71722};
  map = new google.maps.Map(document.getElementById("map"), {
    center:  ch ,
    zoom: 13,
  });

  const markerch= new google.maps.Marker({
    position: ch,
    map:map,
    title: 'Charqueadas (Sede)'
    
  })

  const markersj = new google.maps.Marker({
    position: sj,
    map:map,
    title: 'São Jerônimo',
  })
  const markergc = new google.maps.Marker({
    position: gc,
    map:map,
    title :'General Câmara',
  })
  const markertf = new google.maps.Marker({
    position: tf,
    map:map,
    title:'Triunfo',
    
  })
}

window.initMap = initMap;

const buttonMobile = document.getElementById('btn_mobile');

function toggleMenu(){
  const nav = document.getElementById('nav');
  
  nav.classList.toggle('active'); 
  
  
}



buttonMobile.addEventListener('click',toggleMenu);


