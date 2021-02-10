import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, ActivityIndicator} from 'react-native';

import MapboxGL from '@react-native-mapbox-gl/maps';
import {lineString as makeLineString} from '@turf/helpers';
import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions';

import MapIcons from './MapIcons';

const accessToken =
  'pk.eyJ1IjoiZGF2b3phcmQiLCJhIjoiY2treHo2a3VtMDF2eTJ2cXh1M2RrZGxpYSJ9.HijsPmOumqnL-coJ9aH70g';
const directionsClient = MapboxDirectionsFactory({accessToken});

MapboxGL.setAccessToken(accessToken);

// Coordenadas
const startLocations = [
  [-38.575379639498735, -3.7130485978445145],
  [-38.564531474386094, -3.7145410650930057],
  [-38.57291518787743, -3.7124731772064163],
];

const destinationLocations = [
  [-38.56685400102532, -3.7263128926934903],
  [-38.57796584554977, -3.704595749740985],
  [-38.579055676555214, -3.717485215786414],
];
const UserLocation = [-38.57157346207785, -3.716817043539434];
const CenterCoordinate = UserLocation;

const RoutesMap = () => {
  const [loading, setLoading] = useState(true);
  const [running, setRunning] = useState(null);
  const [cycling, setCycling] = useState(null);
  const [driving, setDriving] = useState(null);

  const fetchRunningRoute = async () => {
    if (running) return;
    const reqOptions = {
      waypoints: [
        {coordinates: startLocations[0]},
        {coordinates: destinationLocations[0]},
      ],
      profile: 'walking',
      geometries: 'geojson',
    };
    const res = await directionsClient.getDirections(reqOptions).send();
    const newRoute = makeLineString(res.body.routes[0].geometry.coordinates);
    setRunning(newRoute);
  };

  const fetchCyclingRoute = async () => {
    if (cycling) return;
    const reqOptions = {
      waypoints: [
        {coordinates: startLocations[1]},
        {coordinates: destinationLocations[1]},
      ],
      profile: 'walking',
      geometries: 'geojson',
    };
    const res = await directionsClient.getDirections(reqOptions).send();
    const newRoute = makeLineString(res.body.routes[0].geometry.coordinates);
    setCycling(newRoute);
  };

  const fetchDrivingRoute = async () => {
    if (driving) return;
    const reqOptions = {
      waypoints: [
        {coordinates: startLocations[2]},
        {coordinates: destinationLocations[2]},
      ],
      profile: 'driving',
      geometries: 'geojson',
    };
    const res = await directionsClient.getDirections(reqOptions).send();
    const newRoute = makeLineString(res.body.routes[0].geometry.coordinates);
    setDriving(newRoute);
  };

  const startPoints = () => {
    const slocations = startLocations;
    const array = [];
    [...slocations].forEach((element, index) => {
      let ballColor = null;
      let dotColor = null;
      if (index === 0) {
        ballColor = 'rgb(21,212,400)';
        dotColor = '#15d4d8';
      }
      if (index === 1) {
        ballColor = 'rgb(72,91,400)';
        dotColor = '#485bdd';
      }
      if (index === 2) {
        ballColor = '#369ada';
        dotColor = 'rgb(54,154,400)';
      }
      array.push(
        <MapboxGL.PointAnnotation
          key={index}
          id="destination"
          title="destination location"
          coordinate={element}>
          <View style={[styles.innerCircle, {backgroundColor: ballColor}]}>
            <View style={[styles.dotCircle, {backgroundColor: dotColor}]} />
          </View>
        </MapboxGL.PointAnnotation>
      );
    });
    return array.map((item) => item);
  };

  const destinationPoints = () => {
    const dlocations = destinationLocations;
    const array = [];
    [...dlocations].forEach((element, index) => {
      let ballColor = null;
      let dotColor = null;
      if (index === 0) {
        ballColor = 'rgb(21,212,400)';
        dotColor = '#15d4d8';
      }
      if (index === 1) {
        ballColor = 'rgb(72,91,400)';
        dotColor = '#485bdd';
      }
      if (index === 2) {
        ballColor = '#369ada';
        dotColor = 'rgb(54,154,400)';
      }
      array.push(
        <MapboxGL.PointAnnotation
          key={index}
          id="destination"
          title="destination location"
          coordinate={element}>
          <View style={[styles.innerCircle, {backgroundColor: ballColor}]}>
            <View style={[styles.dotCircle, {backgroundColor: dotColor}]} />
          </View>
        </MapboxGL.PointAnnotation>
      );
    });
    return array.map((item) => item);
  };

  const renderRunningRoute = () => {
    fetchRunningRoute();
    return (
      <MapboxGL.ShapeSource id="runningSource" shape={running}>
        <MapboxGL.LineLayer id="runningFill" style={layerStyles.running} />
      </MapboxGL.ShapeSource>
    );
  };

  const renderCyclingRoute = () => {
    fetchCyclingRoute();
    return (
      <MapboxGL.ShapeSource id="cyclingSource" shape={cycling}>
        <MapboxGL.LineLayer id="cyclingFill" style={layerStyles.cycling} />
      </MapboxGL.ShapeSource>
    );
  };

  const renderDrivingRoute = () => {
    fetchDrivingRoute();
    return (
      <MapboxGL.ShapeSource id="drivingSource" shape={driving}>
        <MapboxGL.LineLayer id="drivingFill" style={layerStyles.driving} />
      </MapboxGL.ShapeSource>
    );
  };

  return (
    <>
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="small" color="#fff" />
        </View>
      )}
      <SafeAreaView style={styles.container}>
        <View style={styles.flex}>
          <MapboxGL.MapView
            logoEnabled={false}
            compassEnabled={false}
            zoomEnabled
            onDidFinishRenderingMapFully={() => setLoading(false)}
            centerCoordinate={CenterCoordinate}
            zoomLevel={13}
            style={styles.flex}>
            <MapboxGL.Camera
              zoomLevel={13}
              animationMode="flyTo"
              animationDuration={0}
              centerCoordinate={CenterCoordinate}
              followUserLocation={false}
              defaultSettings={{
                centerCoordinate: CenterCoordinate,
                followUserLocation: false,
                followUserMode: 'normal',
              }}
            />
            {renderRunningRoute()}
            {renderCyclingRoute()}
            {renderDrivingRoute()}
            {destinationPoints()}
            {startPoints()}
          </MapboxGL.MapView>
          <MapIcons onPress={() => {}} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  loader: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0, .5)',
    height: '100%',
    width: '100%',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startRouteButton: {
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    right: 10,
    top: 20,
    width: 100,
    height: 100,
    zIndex: 200,
  },
  text: {
    position: 'absolute',
    right: 8,
    top: 8,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
  innerCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});

const layerStyles = {
  running: {
    lineColor: '#15d4d8',
    lineCap: MapboxGL.LineJoin.Round,
    lineWidth: 3,
    lineOpacity: 0.84,
  },
  cycling: {
    lineColor: '#485bdd',
    lineCap: MapboxGL.LineJoin.Round,
    lineWidth: 3,
    lineOpacity: 0.84,
  },
  driving: {
    lineColor: '#369ada',
    lineCap: MapboxGL.LineJoin.Round,
    lineWidth: 3,
    lineOpacity: 0.84,
  },
};

export default RoutesMap;
