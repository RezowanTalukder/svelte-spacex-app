<script
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBi5ftCsmbv6mIcLaAeMcLJEgxRdsfRBcE&callback=initMap&v=weekly"
	defer>

function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

initMap();
</script>


<div id="map" class="w-screen h-full" />
