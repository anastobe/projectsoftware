import React,{ useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  Animated,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';


const SearchInputField = ({ onChangeText = () => { }, ...props }) => {

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', height: 50, width: 350, backgroundColor: "#D9D9D9", borderRadius: 10, shadowColor: '#000' }} >
      <View style={{ width: 20, height: 20, backgroundColor: "red" }} />
      <TextInput
        style={{
          width: '85%',
          paddingLeft: 10,
        }}
        value={props?.value}
        onChangeText={onChangeText}
        maxLength={40}
        placeholder={'Search'}
        placeholderTextColor={'#414141'}
      />
      <View style={{ width: 20, height: 20, backgroundColor: "red" }} />
    </View>
  );
};


const Home = () => {

    const [searchBoxValue, setsearchBoxValue] = useState("")

    function renderCircleAccount() {
        return(
            [{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8}].map(()=>{
                return(
                <View style={{ width: 50, height: 50, borderColor: "red", borderWidth: 1.5, borderRadius: 50, alignItems: "center", justifyContent: "center", marginRight: 20 }} >
                    <Text>A</Text>
                </View>
                )
            })
        )
    }

    return (
    <View style={{ flex: 1 }} >
        <ScrollView horizontal={true} >
          {renderCircleAccount()}

        </ScrollView>

          <SearchInputField
            value={searchBoxValue}
            onChangeText={setsearchBoxValue}
          />

    </View>
  )
}

export default Home






// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   Image,
//   useColorScheme,
//   View,
// } from 'react-native';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from './src/screen/home';
// import Second from './src/screen/second';
// import Thired from './src/screen/thired';
// import Fourth from './src/screen/fourth';
// import Fifth from './src/screen/fifth';
// import { NavigationContainer } from '@react-navigation/native';

// function App(): JSX.Element {

//   const Tab = createBottomTabNavigator();

//   return (
//     <NavigationContainer independent={true} >
//    <Tab.Navigator>
//       <Tab.Screen         
//         options={{
//           headerShown: false,
//           tabBarShowLabel: true,
//           tabBarIcon: ({focused}) => (
//             <View
//             style={{
//               alignItems: 'center',
//               paddingVertical: 15,
//               width: '100%',
//               height: 50,
//               bottom: 0,
//               backgroundColor: '#fff',
//             }}>
//             <Image
//               source={{uri: "data:image/jpeg;base64,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"}}
//               style={{
//                 width: 20,
//                 height: 20,
//               }}
//               resizeMode="contain"
//             />
//           </View>
//           )}}    
//         name="Home" component={Home} />
//       <Tab.Screen 
//         options={{
//           headerShown: false,
//           tabBarIcon: ({focused}) => (
//             <View
//               style={{
//                 alignItems: 'center',
//                 paddingVertical: 15,
//                 height: 50,
//                 width: "100%",
//                 backgroundColor: '#fff',
//               }}>
//               <View style={{flexDirection: 'row'}}>
//                 <Image
//                   source={{uri: "data:image/jpeg;base64,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"}}
//                   style={{
//                     width: 20,
//                     height: 20,
//                   }}
//                   resizeMode="contain"
//                 />
//               </View>
//             </View>
//           )}}    
//       name="Second" component={Second} />
//       <Tab.Screen 
//         options={{
//           headerShown: false,
//           tabBarIcon: ({focused}) => (
//             <View
//               style={{
//                 alignItems: 'center',
//                 paddingVertical: 15,
//                 height: 70,
//                 width: 70,
//                 top: -20,
//                 borderRadius: 50,
//                 backgroundColor: 'red',
//               }}>
//               <View style={{flexDirection: 'row'}}>
//                 <Image
//                   source={{uri: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fservmask.com%2Fimg%2Fproducts%2Furl.png&imgrefurl=https%3A%2F%2Fservmask.com%2Fproducts%2Furl-extension&tbnid=yTNl0ZjUvRKIJM&vet=12ahUKEwjyqO7E-5X9AhXCbKQEHW2CBx4QMyhMegUIARCeAQ..i&docid=QXD1O0vpqKtWCM&w=400&h=402&q=url%20image&ved=2ahUKEwjyqO7E-5X9AhXCbKQEHW2CBx4QMyhMegUIARCeAQ"}}
//                   style={{
//                     width: 20,
//                     height: 20,
//                   }}
//                   resizeMode="contain"
//                 />
//               </View>
//             </View>
//           )}} 
//       name="Thired" component={Thired} />
//       <Tab.Screen 
//         options={{
//           headerShown: false,
//           tabBarIcon: ({focused}) => (
//             <View
//               style={{
//                 alignItems: 'center',
//                 paddingVertical: 15,
//                 height: 50,
//                 width: "100%",
//                 backgroundColor: '#fff',
//               }}>
//               <View style={{flexDirection: 'row'}}>
//                 <Image
//                   source={{uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJsAlgMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABCEAABAwIDBQUFBQMMAwAAAAABAAIDBBEFEiEGEzFBkSJRUmGBIzJCcaEUM2KSsRWT0QcWJFNUVXOiweHw8UNygv/EABkBAQADAQEAAAAAAAAAAAAAAAABAgQDBf/EACgRAAICAQMDAgcBAAAAAAAAAAABAhEDBBIxEyFRIkEFFBVCYXGBUv/aAAwDAQACEQMRAD8A69md4j1SZneI9UIViQzO8R6ozO8R6oQgDM7xHqjM7xHqhCAMzvEeqMzvEeqRGqWBczu89UZnd56osiyWAzO7z1Rmd4j1RZIlgXM7xHqjM7xHqhCAMzvEeqMzvEeqEIAzO8R6ozO8R6oQgJackyG/chFN94fkhVII0JbIspJEQlsiyWBEiUhKAgEATg1DnNjALja/C/NQ1FbFTtu65JNgBzRJshtLknslyrFuxZ59yJoHmUx2Kzj4Iz6H+Kv05FOrEyxCYWrFft1zfvKcEfgcrFPjNDOQwy7qQ/DJp9eCPHJErJFlxKnEJLKhcRCWyLJYEQlsiyWB9P8AeH5JUQe/6IUEDLIsnoUlhlkWT0IBltQqNRiTGyGOCzg09uQnst1be3fbMPIKPFcQEWaCJzcwtncXWDb3sD3AkAf/AEO9Ytj7EgZhlt7w1byF+Njawvq12nfp0jD3ZxnP2RkI3nNd195pmLjqDobdRw0BB0U7DpbuH0/53/VUYnizCcobwDvht5G9rWBOh4Dh2lJKN5TlocWn3m3Njw7tO8DhxcVaillt7WZbvAdfW2n/AD18lBUxQbouijL7X1a7XT9fmoqGmeCDMGAaDI4a8benAqWcmCN72BmXLdzXCx4N53vzTh9gYas3Yvuy4j8QWGqiLFX6ubMSTa57hb6LEVcvFbMaM0yah2jrMJeA12+p+cLzp6Hkt6wfF6TGKfe0jzmbbeRO0cwnhcf68CuVzNbJDLI6eKPICQ1zu046aAKtheNV9Pi9IaatELm+yYZG5mW5NcByJ6K2TTLJG48iGd43T4O2IsoqGpFXStmsM3Bwa7MARoRdWF5bVHoppjLIT0KCRYB2z8kJ0PvH5IQqNQnW8kW8lFlqG2VTFav7HSue3LvXdmMO0u4mw+pA+ZCu2WkYziZr9paqgp4959hiEb7jN2ngEjLxcCDZ1jcWaRzXSEdzKTe1Eb5bneOls29t7I61tLG5do0kCzmP0OV1iCLqZjsuUStfHoSGkFrmCxLrNJBFmkDsOIzSHTgtexPaLD8NkBfI+eYhmZsT7udETf7y1j2Wi7ZBf2jlcZjWHU9YaGprIWSMLTM33Wu0MryCM0bsz8o4A6WWvpyq6Mm5XyZ9smVzhN2XEneDgbAZnj4SQBlZ8SsskMZG87Lsw3l+zcgZ3eHmWjmtaq8cpaEOhmkzzbqMuij4OzvzyatJZ3DUArGz7R1FQ54iIhY58h7Ghc154OtodLDgojglIPIkbu6sig9m+aNsjG3LS61/Zk+Q4nvKhrsQdSzsDWgQl4bvMwynRl/dPK3MrRm1g8kOq+OoXRaamV61mdx2WBsrXU72kPzF2V4OuY9xNlr1TPx1UM1WNdVjamqGuq1Y8bSo4TmuRKyfQ6pmAmhnrJ2V85pwYTuZrtbu33BDgXEWI5LF1M5ebAqu4mxsATbgtTh6aOClcrOwbHVeIUsrjihoWCd3aEcl8x0s8G548+umq3tcto6tuD4VS7+rFRC9zGQyWjjcGOAtexcTbjc8vVdA2bxAYnhUc4N+Xvh3Ly6ei8LPHvuPXwvtRkkJ1kW8lms70LF73ohKwa+iEIFQn2RZQSMNgLu4DUrjGzGJftSuxWJkEjpaipkq3StG8ZZzsrSW3DmlpLSHM1434Lsde4soal7eLYXkdCvMuC1Zw6ro6wQsmMBDgyS4B07xqFt0uPdGRnzypov43NLiG0Fe9kche6UlrBme4MFmt4gEjKG2JCkwrC6iWohkmjMNPHPG2Qv7LgC4XIbcOIHkupbAY1FVYbV4g4PtFE4mB1Q2V7GxsYOJAdrYnUkarbDjVCHlp3ote7vs77CwcTfTlkP0711nrZw9Cico6aEvU2cL2iqqitx+tqY4p5YnSWjeWPN2gAA9oX5c1BFJU84JvyFd/fiNMGB4a5w7RtuyCMo10NjxsPmQFH+2cLsM1QxvAG7T2TYOsdONiD17iqr4hNRrag9HFu7OFiWf+om/IUOkqNfYTfkK7xFiNFO90dPI18rWl2XKQefl5H6d4VtmUsDi0ai/BPqEv8j5SPk85yyVJ4U835CqUkdW860837sr03ZvhHRGVvhb0U/Upr7UVeii/uPMH2ap/s037spppqn+zT/u3L1Blb4W9EZW+EdFD+Izfsi60kF7nHdlqNtXs7BFiNK6pAe6zKiNz2ixs3L7N2WwsOPM/JbVsDBUUOIYjTOqRJRyWlporEGLU3aAQNNRYAACyftJFEMaqHkRNcQNSG3JLABxcD8Ks7NOBxD2ZO7IdoHEtFuHxuH6LjOblFvydYxqRtNkJ44Issp3GtSpQNUIQKhAQoskjnjEsEsZGj2FvULy1kdDeF/vxnI75jQr1SvOe3mGuwra/E6fLaN8xmi/9X9r6Ekei36GdNozaiN0zMfyX41heD1+I/tiVscNTTiMFzSQ7U3Bt5FdAn2t2MqGSMdXxDeXzFrXjjmueH4ndVwkFWKGlkrqyGkhMYlmdlYZHhjb25k6BacumhOTmzlHJKKpHf48Z2dcGObUwgFkcrcz7XBf2XWcebgD87EqczYKXuH2aOQySPYQyHPd4zOcNOfaefUrR6Hfx4PFmfITHhseYMkkcAYpdbWc8ad4AH6K6+AGvyyRDTFJx2ohzgJ+KH/U/wAMDxo77mbFPjez1OySaVk0A3Yc+UUkrLMdYAl2XQHIB55fJUKraygxCWih2dxNr6iN+Z0eVxD48pBDrjXUjzWuEUxoDE9tPupKHDw5h3YBG8dcEbxlwm7MYFS0+1sNXSzMa2V9W37PGIwxga8MAFpHHmD/ALK3Tgou+RulaOg1OP0mH0banFM1My9nPyOc0eoGnrZUf5+7Mf3tF+V38FnxTROidFLG18bhZzHNuCO4hct262Gw3Ds1dhlVBTX1NFNIBf8Aw+fp+irpo4pvbO0Rmlkj3gboNu9mf70j/I7+CfDtrs7UTMhhxON0jzla3KRc/Miy4i2nvyTJaYOY5pGhFlv+QxeWZlqcng65i1dFV175aSYSMc0EBj7k5Wnk2QHj5K5s1GTiTnPuXNY4guJva4HxAOHHvI0XN6rbGcUEgMNqrMSx188TATc6PLiT6rqWxschoXVE0e7e8NBYL2abXIF+69vmCsmbFLHDuaMU1OXY2DghKgLEaQCROCRWIFQiyVVJEK5j/LXgJnoafHadhL6X2VRYXvGTofRx/wA3kunqKpp4qqnlp6hjZIZWlj2OGjmniFfHNwkpIrJblR5VureE1hocTpKsOLdzMx5IJvYHXgQeHmFe212ZqdlMZdSPzPpJbupJz8bO4/iHA+h5rAiQL2FJSiY3FpnXIJ6bGKOaSgJnhlFbTMcYXXJcN624MTjyPH/ZZGJuarbKYsofWwTA7q2kkGXwDndcr2dx2XC6ymbI8GgFS2WeIxNfce6SARe4aToONrLeMHxfDKy8eHShzqaGFzgYY4uxDNYO1Z4HeZCyTg4v8HVOzJxmRtHH7R4/olGDaRw92Yj+tHer2ESuZi1I58rsgkrCbyE2/pLe+Y/p6FU5C+Nhju0ZBIz75umSqbbgzucpHF7i5tmm75mff+OsA8PkuXJJs020rG4nFHEGGhG8bNI4gEFrmszDtXsHOI1HK60Ta/ZM4XWT1kUzpIZDvCZOLQ51mtDr3dbzty4rNMkc5+aVt2F2ckTNOhlfIeXcwLHbQ4+2bC48CniMtRTuZmqC4ANIaNABxIuR8h06Yd0JrZ/Ss6kvUaxHBcJstPYcFkadgdZLUxZRYDUrW8nc5KBicOwo4pikFGG5mvcC8A/D3eug9V3qhpm0lJHA3XIOPeea1fYLADQ0prahoEsurRbgOAPQnqfJbgvP1WbqOvBpxY9qsRKhCynYEIQrFRUIQqkghCEBitpcAoNpMKkw/Eoy6N3aY9ps+Nw4OaeR/wCl522w2UxPZOs3Vewy0rz7GsY05JPI+F3kfS69PKCto6avppKatgiqKeQZXxStDmuHmCu2LM8f6KSgpHkoSLObG17KXaCnbM97YqoOpZCw65ZBl/XKuhbVfyMskMlRsvViJzjf7JVOJZ8mvAuPkb/MLmONbK7RYI4jEsIqo2j/AMsbDJH+Ztx1stqzQmuTnsaZ12Z0ropJXurQ/dvc67eDsjXH/NE/opXzCmmmknmnYxkxdmeWtHZnmfz/AMMLStldsaXEhNSY9NT01TcNbJZrRI0jK6+a/a1eeQOcnvWrbR7QVeK1rxVNigjjc4CKF4LLlxdckaON3GxtwXKMG3RZvsbLjO09S6qkpqCqD6LdNjD8gu72Ya43IuOf1VKlqi45nuLnHUkm5K1ukkfUvDKZj53HQNiaXnoFu+z2wW02Jlj30goKc8ZKwljreTPev5ED0WvfCEfBw2ybJKeqAtZb5spstLO5lfi8ZbGNY6d7dXebgeA8lldmdiMNwPJM+9ZWDXfSgWafwt5fPUrZ1gzZ0+0TRGFchpbRCELKdAQhKEJBIlQrECAoJUOc96M6gmh7pmN4lQPr4Wd5SkNdxCjdTwu4hKFEb8ZgZxBVeTaGBnwlTPw+ndxChdg9K7yShRWk2qph8KgftnSs0yhWXbPUjlG7ZmjP/SkUYerx/Aau4q8Mopr8d5A11+oVaCr2Sifni2fwtjvE2kYD+izp2VojyCP5q0Q4WCWxRFSbTYfCMtLTwwjujYG/orse01O7lr81G3ZqkbzHRStwClaoBOzHoXcGqZuMQu+EqBuD07VK3DYGoCduJRO5FStq4j3hQNo4G8iniGJvL6oCyJWO4OTwVXGUck7OlAnSKNjiTZCkqVc6M6jQr0SSZ0Z1GhKBJnRnUaEoEmdGdRoSgSZ0Z1GhKA/OjOmIUUB+8RvExCUB+cozpiEoEmdGdRoU0CxA677eSE2m+8PyQoB//9k="}}
//                   style={{
//                     width: 20,
//                     height: 20,
//                   }}
//                   resizeMode="contain"
//                 />
//               </View>
//             </View>
//           )}} 
//       name="Fourth" component={Fourth} />
//       <Tab.Screen
//         options={{
//           headerShown: false,
//           tabBarIcon: ({focused}) => (
//             <View
//             style={{
//               alignItems: 'center',
//               paddingVertical: 15,
//               width: '100%',
//               height: 50,
//               bottom: 0,
//               backgroundColor: '#fff',
//             }}>
//             <Image
//               source={{uri: "data:image/jpeg;base64,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"}}
//               style={{
//                 width: 20,
//                 height: 20,
//               }}
//               resizeMode="contain"
//             />
//           </View>
//           )}} 
//       name="Fifth" component={Fifth} />
//     </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;


