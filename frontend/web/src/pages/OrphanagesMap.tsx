import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Map, TileLayer } from 'react-leaflet';

import mapMarkerImg from '../assets/map-marker.svg';

import '../style/pages/orphanagesMap.css';

import 'leaflet/dist/leaflet.css';

const Orphanage: React.FC = () => {
  return (
    <>
      <div id='page-map'>
        <aside>
          <header>
            <img src={mapMarkerImg} alt='MapMarker' />
            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando a sua visita</p>
          </header>

          <footer>
            <strong>Luanda </strong>
            <span>Distrito do Kilamba</span>
          </footer>
        </aside>

        <Map
          center={[-9.0031055, 13.2548163]}
          zoom={15}
          style={{ width: '100%', height: '100%' }}
        >
          {/* <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' /> */}
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
        </Map>

        <Link to='/' className='create-orphanage'>
          <FiPlus size={24} color='#fff' />
        </Link>
      </div>
    </>
  );
};

export default Orphanage;
