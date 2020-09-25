import React, { useEffect } from 'react'
import './Map.scss'


const Map = props => {


    const L = window.L

    const {setMap, mainOffice, officeTwo, setTwoMarker, setMainMarker} = props
    
    useEffect(() => {
        const mymap = L.map('map').setView(mainOffice, 13);
        setMap(mymap)

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGlicyIsImEiOiJja2Y5dTFqdTEwaDgxMnBsZDBrbjlubHZ2In0.qJN_c8RoKyxcuwymQTw-PA', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoidGlicyIsImEiOiJja2Y5dTFqdTEwaDgxMnBsZDBrbjlubHZ2In0.qJN_c8RoKyxcuwymQTw-PA'
    }).addTo(mymap);

    
    const mainOfficeMarker = L.marker(mainOffice).addTo(mymap);
    mainOfficeMarker.bindPopup('<p class="popup">Main Office</p>').openPopup()
    setMainMarker(mainOfficeMarker)
    
    const officeTwoMarker = L.marker(officeTwo).addTo(mymap);
    officeTwoMarker.bindPopup('<p class="popup">Office II</p>')
    setTwoMarker(officeTwoMarker)

    }, [L, mainOffice, officeTwo, setMap, setMainMarker, setTwoMarker])



    return(
        <div id="map"></div>
    )
}

export default Map