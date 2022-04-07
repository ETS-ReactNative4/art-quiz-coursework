import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Audio } from "expo-av";

function AudioItem() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading Sound");
    // const { sound } = await Audio.Sound.createAsync(
    //   (uri = "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4")
    // );
    const { sound } = await Audio.Sound.createAsync({
      uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    });

    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
}

export default AudioItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    justifyContent: "space-between",
  },
});
