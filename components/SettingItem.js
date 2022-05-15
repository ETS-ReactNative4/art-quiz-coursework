import { View, Text, Switch, StyleSheet } from "react-native";

function SettingItem({ title, onPress, isEnabled }) {
  return (
    <View style={styles.settingItem}>
      <Text style={styles.title}>{title}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#EB268A" }}
        thumbColor={isEnabled ? "#C88BF9" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onPress}
        value={isEnabled}
        style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
      />
    </View>
  );
}

export default SettingItem;

const styles = StyleSheet.create({
  settingItem: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // padding: 25,
  },
  title: { fontSize: 24 },
});
