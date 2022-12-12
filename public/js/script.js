// ====================> Calculating header height
const viewPortHeight = window.innerHeight;
const navBarHeight = document.querySelector(`.navigation-bar`).offsetHeight;
const headerHeight = document.querySelector(`.section-hero`);
headerHeight.style.height = `${viewPortHeight - navBarHeight}px`;

// ====================> Store latitude and longitude
const lngLat = [78.0421, 27.1751];

// ====================> Map box
// ==========> Setting up the map
const accessToken = `pk.eyJ1IjoibWUtc291cm92diIsImEiOiJjbGFvYWlheGwwMDdlM3hxZXV0aWk0OW1iIn0.Hy20I06F6uLh9u3jIA639A`;
mapboxgl.accessToken = accessToken;
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: lngLat,
  zoom: 16,
});
// ==========> Setting up the map marker
const marker = new mapboxgl.Marker({
  anchor: `bottom`,
  color: `#f87474`,
  draggable: false,
})
  .setLngLat(lngLat)
  .addTo(map);
