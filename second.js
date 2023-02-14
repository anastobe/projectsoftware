import React from 'react'
import {View, Text} from "react-native"
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


const Second = () => {

    let markers = [{
        title: 'hello',
        coordinates: {
          latitude: 3.148561,
          longitude: 101.652778
        },
      },
      {
        title: 'hello',
        coordinates: {
          latitude: 3.149771,
          longitude: 101.655449
        },  
      }]

  return (
    <View>
       
<MapView
// provider={PROVIDER_GOOGLE}
style={{ width: "100%", height: 300 }}
  region={{ 
    latitude:  37.77953987654474,
    longitude: -122.42760675027966,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
}}
  onRegionChange={(e)=>{ console.log("Asasasasas",e); }}
>
     <Marker title="nazmabad" coordinate={{ latitude: 37.768390237376856,
          longitude: -122.42780623957515 }} >
     </Marker>

     <Marker title="nazmabad" coordinate={{ latitude: 37.78446109120381,
          longitude: -122.42243176326156 }} >
     </Marker>

  {/* {markers.map((marker, index) => (
   <Marker
      key={index}
      coordinate={marker.coordinates}
    />
  ))} */}
</MapView>


    </View>
  )
}

export default Second



// android:name="com.google.android.geo.API_KEY"
// android:value="AIzaSyBwHMubvclzXd3zzZWykHUl-dBuqA-Rcik"/>
