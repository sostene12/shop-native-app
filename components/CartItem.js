import React,{useState} from "react";
import { View,Text, StyleSheet,Image,TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Feather";
import colors from "../colors";
import { changeQty } from "../redux/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({product}) =>{
  const dispatch = useDispatch();
    const [qty,setQty] = useState(product.quantity);
    const handleAdd = () => {
      setQty(qty >= 1 ? qty+1:qty);
      dispatch(changeQty({...product,quantity:qty}))
    }

    const handleMinus = () =>{
      setQty(qty >1 ? qty-1:qty);
      dispatch(changeQty({...product,quantity:qty}))
    }
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
            <TouchableOpacity onPress={() => handleMinus() }>
              <Ionicons name='chevron-left' size={25} style={styles.icon} />  
            </TouchableOpacity>
            <Text> {qty}</Text>
           <TouchableOpacity onPress={() => handleAdd() }>
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