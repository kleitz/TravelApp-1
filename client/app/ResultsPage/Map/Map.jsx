import React, { PropTypes } from 'react';

const Map = props => (
  <div className="mapContainer container-fluid" ref={map => props.handleInitMapRender(map)} />
  );

export default Map;