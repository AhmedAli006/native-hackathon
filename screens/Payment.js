/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, {useState,useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import { RadioButton } from 'react-native-paper';

import styles from '../styling';
const style = StyleSheet.create(styles);

const Payment = () =>{
    const [checked, setChecked] = useState(false);
    const [PaymentObj, setPaymentObj] = useState([]);


return<>
<View>
    <View style={style.navbar}>
          <Text style={[style.fs2, style.textBold, style.p2, style.textWhite]}>
            payment methods
          </Text>
        </View>

        <View style={{marginTop:150}}>
        <View style={[{marginVertical:10,marginHorizontal:20 },style.flexRow,style.justifyContentBetween]}>
            <Text style={[style.fs2]}>debit</Text>
       
            <RadioButton
        value="debit"
        status={ checked === 'debit' ? 'checked' : 'unchecked' }
        onPress={() => setChecked(true)}
      />

        </View>

        <View style={[{marginVertical:10,marginHorizontal:20 },style.flexRow,style.justifyContentBetween]}>
            <Text style={[style.fs2]}>credit</Text>
            <RadioButton
        value="credit"
        status={ checked === 'credit' ? 'checked' : 'unchecked' }
        onPress={() => setChecked(true)}
      />

        </View>
        <View style={[style.borderBlack,{borderWidth:1,margin:5},{margin:15}]}>
        <TextInput
          style={styles.inputField}
          type="email"
          placeholder="Enter name"
          onChangeText={(e) => setPaymentObj({ ...PaymentObj, name: e })}
        />
        </View>
        <View style={[style.borderBlack,{borderWidth:1,margin:5},{margin:15}]}>
        <TextInput
          style={styles.inputField}
          type="number"
          placeholder="Enter 14 digit number"
          onChangeText={(e) => setPaymentObj({ ...PaymentObj, cardnum: e })}
        />
        </View>
        <View style={[{flexDirection:'row',justifyContent:'center'}]}>
            <View style={[style.borderBlack,{borderWidth:1,width:"50%",marginHorizontal:1}]}>

            <TextInput
          style={styles.inputField}
          type="number"
          placeholder="Enter issue date"
          onChangeText={(e) => setPaymentObj({ ...PaymentObj, issuedate: e })}
          />
          </View>
          <View style={[style.borderBlack,{borderWidth:1,width:"40%",marginHorizontal:2}]}>

          <TextInput
          style={styles.inputField}
          type="number"
          placeholder="Enter Valid/to date"
          onChangeText={(e) => setPaymentObj({ ...PaymentObj, validnum: e })}
          />
          </View>
        </View>
        <View style={[style.borderBlack,{borderWidth:1,margin:5},{margin:15}]}>
        <TextInput
          style={styles.inputField}
          type="email"
          placeholder="Enter 3 digit code"
          onChangeText={(e) => setPaymentObj({ ...PaymentObj, specialnum: e })}
        />
        </View>

        </View>
</View>

</>
}

export default Payment;