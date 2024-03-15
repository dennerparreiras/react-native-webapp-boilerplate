import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Styled from 'styled-components/native';

const StyledText = Styled(Text)`
  color: blue;
  background-color: yellow;
`;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world! Test!</Text>
      <StyledText>Hello styled world!</StyledText>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
