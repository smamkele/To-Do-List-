import ImagePicker from 'react-native-image-picker';
import { Text, View, StyleSheet, Image, Button, ScrollView } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button/src/themes/blue';
import React, { Component } from 'react';


export default class MyImage extends Component {
  state = {
    pickedImage: null
  }
  pickImageHandler = () => {
    ImagePicker.showImagePicker({ title: "Pick an Image", maxWidth: 800, maxHeight: 600 }, res => {
      if (res.didCancel) {
        console.log("User cancelled!");
      } else if (res.error) {
        console.log("Error", res.error);
      } else {        
        this.setState({          
          pickedImage: { uri: res.uri }       
        });
      
      }
    });
  } 
  render() {
    return (
      <ScrollView>           
          <View >
          <AwesomeButton type="primary" onPress={this.pickImageHandler} >Pick Image</AwesomeButton>              
          </View> 
          <View style={styles.placeholder}>
          <Image source={this.state.pickedImage} style={styles.previewImage} />
        </View>  
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems:"center"
  },
  textStyle: {
    fontWeight:"bold",
    fontSize:30,
    textAlign:"center",
    color:"red",
    marginTop:10
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "70%",
    height: 280,
    marginTop:50,
  },
  button: {
    width: "80%",
    marginTop:20,
    flexDirection:"row",
    justifyContent: "space-around"
  },
  previewImage: {
      width: "100%",
      height: "100%"
  }
});

