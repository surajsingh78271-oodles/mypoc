/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  TouchableOpacity
  
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import InputMob from './src/Input';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  
  const [togglePassword,setTogglePassword] = useState(false)

  return (
    <SafeAreaView >
      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Editss <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView> */}
      <ScrollView style={{paddingHorizontal:25,paddingVertical:20}}>
        <Text style={{fontSize:40, fontWeight:'bold',color:"black"}}>Helper by</Text>
        <Text style={{fontSize:120,lineHeight:140, paddingVertical:0, fontWeight:'bold',color:"black"}}>B<Text style={{color:"orange"}}>oo</Text>kmyhelp</Text>
        <View style={{marginVertical:15}}>
          <Text style={{fontSize:40, fontWeight:'bold',color:"black"}}>Welcome Back!</Text>
          <Text style={{fontSize:30, fontWeight:'600',color:"grey"}}>Hello again, you've been missed!</Text>
        </View>
        <View>
          <View style={{marginVertical:20}}>
            <TextInput
            placeholder="Email"
            style={{  borderWidth:1, fontSize:25,padding:15,borderRadius:8}}
            />
          </View>
          <View style={{marginVertical:20}}>
          <TextInput
            placeholder="Password"
            // secureTextEntry={true}
            style={{ borderColor:"black", borderWidth:1, fontSize:25,padding:15,borderRadius:8}}
            />

          </View>
          <Text style={{textAlign:"right",fontSize:35, color:"orange", fontWeight:"700"}}>Forgot Password</Text>
          <View style={{paddingVertical:30}}>
            <TouchableOpacity style={{backgroundColor:"grey", padding:30, borderRadius:20}}>
              <Text style={{fontSize:35,color:"white", textAlign:"center"}}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:30, fontWeight:"600",marginVertical:20}}>Don't have an account? <Text style={{color:"orange"}}>Sign Up</Text></Text>
            <Text style={{fontSize:30, fontWeight:"600"}}>Need any assistance? <Text style={{color:"orange"}}>Contact Support</Text></Text>

          </View>

          
        </View>

        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
