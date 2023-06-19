import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Categories from './pages/Categories/Categories';
import Meals from './pages/Meals/Meals';
import Details from './pages/Details/Details';
import colors from './style/colors';

const Stack = createNativeStackNavigator();

function Router() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesPage" component={Categories}  
        options={{title:"Categories",
                  headerTitleAlign:"center",
                  headerStyle: {backgroundColor: colors.darkblue},
                  headerTitleStyle: {color: colors.softgreen},}}/>
                  
        <Stack.Screen name="MealsPage" component={Meals} 
         options={{title:"Meals", 
                   headerTitleAlign:"center" ,
                   headerStyle: {backgroundColor:  colors.darkblue},
                   headerTitleStyle: {color:colors.softgreen},
                   headerTintColor: colors.softgreen}}/>

        <Stack.Screen name="DetailsPage" component={Details} 
        options={{title:"Detail",
                  headerTitleAlign:"center", 
                  headerStyle: {backgroundColor: colors.darkblue},
                  headerTitleStyle: {color:colors.softgreen},
                  headerTintColor: colors.softgreen}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}
export default Router