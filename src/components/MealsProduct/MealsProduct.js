import React from 'react'
import { View,Text,TouchableWithoutFeedback,Image } from 'react-native'
import styles from "./MealsProduct.style"

const MealsProduct = ({onSelect,data}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>

        <View style={styles.container}>
              <Image source={{uri: data.strMealThumb}} style={styles.image}/>
              <View style={styles.container_title}>
                 <Text style={styles.title}>{data.strMeal}</Text>
              </View>
        </View>
        </TouchableWithoutFeedback>

    )
}

export default MealsProduct