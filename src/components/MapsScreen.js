import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Alert, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import axios from 'axios';

export default function MapsScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [repairShops, setRepairShops] = useState([]);
  const [markerLocation, setMarkerLocation] = useState(null); // Localização do marcador

  const requestLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        "Permissão Negada",
        "Para usar esta funcionalidade, você precisa permitir o acesso à sua localização.",
        [
          { text: "Cancelar", style: "cancel" },
          { text: "Configurações", onPress: () => Linking.openSettings() },
        ]
      );
      return false;
    }
    return true;
  };

  useEffect(() => {
    const getLocationAndShops = async () => {
      const hasPermission = await requestLocationPermission();
      if (!hasPermission) return;

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
      setMarkerLocation(loc.coords); // Define a localização inicial do marcador
      fetchNearbyShops(loc.coords);
    };

    getLocationAndShops();
  }, []);

  // Atualiza as oficinas próximas com base na posição do marcador
  const fetchNearbyShops = async (coords) => {
    const { latitude, longitude } = coords;
    const apiKey = 'AIzaSyCxBF7zoUrjhef3DAG6j7jzd8Vxpij0HMY'; // Substitua pela sua chave da API

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1500&type=car_repair&key=${apiKey}`
      );
      setRepairShops(response.data.results);
    } catch (error) {
      console.error("Erro ao buscar oficinas:", error);
    }
  };

  const handleMarkerDragEnd = (event) => {
    const newCoords = event.nativeEvent.coordinate;
    setMarkerLocation(newCoords);
    fetchNearbyShops(newCoords); // Atualiza as oficinas próximas
  };

  const region = {
    latitude: location ? location.latitude : -22.4322,
    longitude: location ? location.longitude : -46.9574,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      {errorMsg ? (
        <Text style={styles.errorMsg}>{errorMsg}</Text>
      ) : (
        <MapView
          style={styles.map}
          region={region}
          onRegionChangeComplete={(region) => setLocation({ latitude: region.latitude, longitude: region.longitude })}
        >
          {markerLocation && (
            <Marker
              coordinate={markerLocation}
              title="Você está aqui"
              description="Esta é sua localização atual"
              draggable // Permite arrastar o marcador
              onDragEnd={handleMarkerDragEnd} // Atualiza a posição ao arrastar
            />
          )}
          {repairShops.map((shop) => (
            <Marker
              key={shop.place_id}
              coordinate={{
                latitude: shop.geometry.location.lat,
                longitude: shop.geometry.location.lng,
              }}
              title={shop.name}
              description={shop.vicinity}
              pinColor="blue"
            />
          ))}
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  map: {
    flex: 1,
    borderRadius: 10,
    margin: 10,
    borderColor: '#00009C',
    borderWidth: 2,
  },
  errorMsg: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: 'red',
  },
});
