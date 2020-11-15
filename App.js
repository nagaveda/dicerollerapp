
import React, {useState} from 'react';
import {
  Text, 
  View, 
  Image, 
  TouchableOpacity,
  StyleSheet,
  
} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {

  const [dice1, setDice1] = useState(DiceOne);
  const [dice2, setDice2] = useState(DiceOne);
  
  const rollDice1 = () =>{
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDice1(DiceOne);
        break;
      case 2:
        setDice1(DiceTwo);
        break;
      case 3:
        setDice1(DiceThree);
        break;
      case 4:
        setDice1(DiceFour);
        break;
      case 5:
        setDice1(DiceFive);
        break;
      case 6:
        setDice1(DiceSix);
        break;
      default:
        setDice1(DiceThree);
        break;
    }
    
  }

  const rollDice2 = () =>{
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDice2(DiceOne);
        break;
      case 2:
        setDice2(DiceTwo);
        break;
      case 3:
        setDice2(DiceThree);
        break;
      case 4:
        setDice2(DiceFour);
        break;
      case 5:
        setDice2(DiceFive);
        break;
      case 6:
        setDice2(DiceSix);
        break;
      default:
        setDice2(DiceThree);
        break;
    }

  }

  return (
    <>
      <View style={styles.container}>
      <TouchableOpacity onPress={rollDice1}>
        <Image style={styles.image} source={dice1} />
      </TouchableOpacity>
      <TouchableOpacity onPress={rollDice2}>
      <Image style={styles.image} source={dice2} />
      </TouchableOpacity>
        {/* <TouchableOpacity onPress={rollDice1}>
          <Text style={styles.gamePlayButton}>Play Game</Text>
        </TouchableOpacity> */}
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#222831",
    justifyContent:"center",
    alignItems:"center"
  },
  gamePlayButton:{
    color:"#F2A365",
    fontSize:20,
    borderRadius:5,
    borderColor:"#30475E",
    borderWidth:3,
    marginTop:30,
    paddingHorizontal:40,
    paddingVertical:10,
    fontWeight:"bold"


  },
  image:{
    width:200,
    height:200,
    margin:20
  }
})

export default App;
