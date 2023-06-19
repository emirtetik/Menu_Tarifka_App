import React from 'react'
import { View,Text,Image,TouchableOpacity } from 'react-native'
import styles from "./DetailsProduct.style"

function DetailsProduct({data,onLink}) {
    return(
        <View style={styles.container}>
                <Image source={{uri: data.strMealThumb}} style={styles.image}/>
            <View style={styles.body_container}>
            <Text style={styles.header}>{data.strMeal}</Text>
            <Text style={styles.country}>{data.strArea}</Text>
            <Text style={styles.text}>{data.strInstructions}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={onLink}>
                    <Text style={styles.text_button}>Watch on Youtube</Text>
                </TouchableOpacity>


        </View>
    )
    
}
export default DetailsProduct