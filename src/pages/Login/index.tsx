import React from 'react'
import { Feather as Icon } from '@expo/vector-icons'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const navigation = useNavigation()

  function handleNavigateHome () {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>ORGANIZATION</Text>
          <Text style={styles.description}>Membership Management</Text>
        </View>
      </View>

      <View style={styles.body}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          // value={}
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          // value={}
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <RectButton style={styles.button} onPress={handleNavigateHome}>
          <View style={styles.buttonIcon}>
            <Icon name="arrow-right" color="#FFF" size={24} />
          </View>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </RectButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#00A8E8'
  },

  header: {
    flex: 1,
    justifyContent: 'center'
  },

  title: {
    color: '#00171F',
    fontSize: 32,
    FontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64
  },

  description: {
    color: '#5C5C5C',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24
  },

  body: {},

  input: {
    color: '#5C5C5C',
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16
  },

  button: {
    backgroundColor: '#003459',
    height: 60,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 8
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.333)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    textAlign: 'left',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16
  }
})

export default Login
