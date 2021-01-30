import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: '#f5f5f5',
    fontSize: 32,
    marginTop: 5,
    marginBottom: 5,
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    marginTop: 5,
    marginBottom: 5,
    padding: 20,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  buttonText: {
    fontSize: 20,
    color: '#f5f5f5',
    padding: 10,
  },
  thumbnail: {
    marginBottom: 5,
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});
