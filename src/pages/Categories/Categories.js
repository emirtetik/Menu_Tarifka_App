import { View,Text,FlatList } from 'react-native'
import React from 'react'
import styles from "./Categories.style"
import UseApi from '../../hooks/UseApi'
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard'
// import {API_URL} from '@env'

// API_URL="https://www.themealdb.com/api/json/v1/1/categories.php"


function Categories({navigation}) {
      const {data,error,loading} = UseApi('https://www.themealdb.com/api/json/v1/1/categories.php')
      
      const renderCategories = ( {item} ) => <CategoriesCard data={item} onSelect={() => handleSelect (item.strCategory)}/>;

       const handleSelect = strCategory => {
           navigation.navigate("MealsPage", {strCategory})
       }
    return(
        <View style={styles.container}> 
            <FlatList 
              data={data.categories}
              renderItem={renderCategories}

             />
        </View>
    )
    
}
export default Categories