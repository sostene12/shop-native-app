import React,{useState} from "react";
import { View,Text, StyleSheet,Image,TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Feather";
import colors from "../colors";

const CartItem = ({product}) =>{
    const [qty,setQty] = useState(product.quantity);
    return(
        <View>
        <View style={styles.product}>
        <Image source={{uri:product.image}} resizeMode="contain" style={{width:70,height:50}} />
        <Text>{product.title}</Text>
        <Text>${product.price}</Text>
         </View>
         <View style={styles.quantity}>
          <Text>Qty</Text>
          <View style={styles.qtyValue}>
            <TouchableOpacity onPress={() => setQty(qty >1 ? qty-1:qty) }>
              <Ionicons name='chevron-left' size={25} style={styles.icon} />  
            </TouchableOpacity>
            <Text> {qty}</Text>
           <TouchableOpacity onPress={() => setQty(qty >= 1 ? qty+1:qty) }>
            <Ionicons name='chevron-right' size={25} style={styles.icon} />
           </TouchableOpacity>
          </View>
          
         </View>
      </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    product:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'space-between',
        
      },
      payBtn:{
        backgroundColor:colors.green,
        marginVertical:30,
        width:'60%',
        alignSelf:'center',
        alignItems:'center',
        paddingVertical:10,
        borderRadius:8,
      },
      quantity:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"80%",
        alignSelf:"center"
      },
      qtyValue:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-around',
        width:"50%"
      },
      icon:{
        color:"white",
        backgroundColor:"green",
        borderRadius:30
      }
})