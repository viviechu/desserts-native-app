import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import SignUp from './SignUp';

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 300,
  },
  wrapper: {
  },
 slide: {
   flex: 1,
   justifyContent: 'flex-start',
   alignItems: 'center',
 },
 text: {
   color: '#fff',
   fontSize: 30,
   fontWeight: 'bold',
 },
 backgroundImage: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   resizeMode: 'stretch',
 },
 heading: {
   fontSize: 20,
   fontWeight: "500",
   color: '#fff',
   padding: 10,
   margin: 20,
 },
 subHeading: {
   fontSize: 15,
   fontWeight: "500",
   color: '#fff',
   padding: 10,
   margin: 0,
 },
});

export default class Home extends Component {
  constructor(props) {
    super(props);

  }

  static propTypes = {
      navigator: PropTypes.object.isRequired,
  }

  _onForward = () => {
    this.props.navigator.push({
      component: SignUp,
      title: 'Sign Up',
    });
 }

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide}>
           <Image source={require('../../static/images/jumbotron-with-opacity.png')} style={styles.backgroundImage}>
             <Text style={styles.heading}>
               Got a sweet tooth? We&#39;ve got the cure!
             </Text>
             <TouchableOpacity style={styles.button} onPress={this._onForward}>
               <Text style={{fontWeight: "700"}}>Sign Up</Text>
             </TouchableOpacity>
          </Image>
        </View>
         <View style={styles.slide}>
           <Image source={require('../../static/images/v3_background.png')} style={styles.backgroundImage}>
               <Text style={styles.subHeading}>
                 After purchasing a monthly subscription,
               </Text>
                <Text style={styles.subHeading}>
                  you will receive an email with
                </Text>
                <Text style={styles.subHeading}>
                  vouchers during the first day of every month.
                </Text>
          </Image>
         </View>
         <View style={styles.slide}>
           <Image source={require('../../static/images/v2_background.png')} style={styles.backgroundImage}>
             <Text style={styles.subHeading}>
               Venture out to all of the locations
             </Text>
             <Text style={styles.subHeading}>
               we&#39;ve hand-picked for you.
             </Text>
          </Image>
         </View>
       </Swiper>
    );
  }
}
