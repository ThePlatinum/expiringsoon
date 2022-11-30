import { Image, Pressable, StyleSheet, Text } from 'react-native';

export function AuthLogo({ auth }) {
  return (
    <>
      <Image style={styles.image} source={require('../assets/logo-dark.png')} />
      <Text style={ styles.title } > {auth} </Text>
    </>
  );
}

export function FootNote({ navigation, auth }) {
  if (auth == 'register') return (
    <Pressable onPress={() => navigation.navigate('login') }>
      <Text style={styles.footnote}> Go to Login </Text>
    </Pressable>
  )
  else return (
    <Pressable onPress={() => navigation.navigate('register') }>
      <Text style={styles.footnote}> New User? Register </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 60,
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 40,
  },
  title: {
    fontWeight: '600',
    marginBottom: 40,
    fontSize: 20,
  },
  footnote: {
    marginTop: 20,
    marginBottom: 40,
  }
});
