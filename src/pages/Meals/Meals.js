import React from 'react'
import { View, FlatList} from 'react-native'
import styles from "./Meals.style"
import UseApi from '../../hooks/UseApi'
// import { API_MEALS_URL } from '@env';

import MealsProduct from '../../components/MealsProduct/MealsProduct'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'

// API_MEALS_URL="https://www.themealdb.com/api/json/v1/1/filter.php?c="

const Meals = ({route,navigation}) => {

   const {strCategory} = route.params;
     const {data,error,loading} = UseApi('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + strCategory);
     console.log(route);
      if(loading){
        return <Loading />;
      }

      if(error){
        return <Error/>;
      }

   const renderMeals = ({item}) => <MealsProduct data={item} onSelect={() => handleDetailMeals(item.idMeal)} />
  
   const handleDetailMeals = (meal) => {
       navigation.navigate("DetailsPage", {meal})
   }
    return (
        <View style={styles.container}>
          <FlatList data={data.meals} renderItem={renderMeals}/>
        </View>
    )
}
export default Meals