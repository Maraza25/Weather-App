import React from "react";
import { StyleSheet, ImageBackground, StatusBar, Image } from "react-native";
import backgroundImage from "./assets/sky.png"; // Görseli import ile al

const App = () => {
  return (
    <>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        {/* Arka planda göstermek istediğiniz diğer bileşenleri buraya ekleyebilirsiniz */}
      </ImageBackground>
      <StatusBar barStyle="light-content" />
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // Resim boyutunu ayarlar
  },
});

export default App;
