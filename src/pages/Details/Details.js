import React from 'react'
import { View,FlatList,Linking } from 'react-native'
import styles from './Details.style'
import UseApi from '../../hooks/UseApi'
import DetailsProduct from '../../components/DetailsProduct/DetailsProduct'
import Loading from '../../components/Loading/Loading'

API_DETAIL_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="

const Details = ({route}) => {
    const {meal}= route.params;
    const {data,loading,error} = UseApi(`${API_DETAIL_URL}${meal}`)


    const renderDetailSelect = ({item}) => <DetailsProduct data={item} onLink={() => handleLinkClick(item.strYoutube)} />;

     if (loading) {
        return <Loading/>;
        
     }
     if (error) {
        return <Error/>;
        
     }
      const handleLinkClick = (url) => {
        Linking.openURL(url);
      }
     return(
            <View style={styles.container}>
                <FlatList data={data.meals} renderItem={renderDetailSelect}/>
            </View>
     
    )
}
export default Details