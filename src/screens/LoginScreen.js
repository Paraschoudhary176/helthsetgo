import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('user@test.com');
  const [password, setPassword] = useState('123456');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (email === 'user@test.com' && password === '123456') {
      navigation.replace('Products');
    } else {
      Alert.alert('Login Failed', 'Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.jpg')} style={styles.logo} />
      <Text style={styles.title}>Welcome to HealthSetGo</Text>

      {/* Email Input with Icon */}
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/email.png')}
          style={{
            height: 20,
            width: 20,
            resizeMode: 'contain',
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
      </View>

      {/* Password Input with Eye Toggle */}
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/padlock.png')}
          style={{
            height: 20,
            width: 20,
            resizeMode: 'contain',
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image
            source={
              showPassword
                ? require('../assets/show.png')
                : require('../assets/hide.png')
            }
            style={{
              height: 20,
              width: 20,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {width: 120, height: 120, marginBottom: 20, resizeMode: 'contain'},
  title: {
    fontSize: 26,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '100%',
  },
  icon: {marginRight: 5},
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  eyeIcon: {
    marginLeft: 5,
  },

  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  buttonText: {color: 'white', fontWeight: 'bold'},
});
