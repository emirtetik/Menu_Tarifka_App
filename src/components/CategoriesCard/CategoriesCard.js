import React from 'react'
import { View,Text,TouchableWithoutFeedback,Image } from 'react-native'
import styles from "./CategoriesCard.style"

function CategoriesCard({data,onSelect}) {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>

        <View style={styles.container}>
             <Image style={styles.image} source={{uri: data.strCategoryThumb}}/>
        <View style={styles.container_title}>
            <Text style={styles.title}>{data.strCategory}</Text>
        </View>

        </View>
        </TouchableWithoutFeedback>

    )
    
}

export default CategoriesCard