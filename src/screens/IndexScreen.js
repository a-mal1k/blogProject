import React, {useContext} from 'react'
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native'
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons'


const IndexScreen = ({navigation}) =>{
    const {state, deleteBlogPost} = useContext(Context)
    return (
        <View>
            <Text style={styles.textStyle}>IndexScreen</Text>
            <FlatList 
            keyExtractor={blogPost => blogPost.title}
            data={state}
            renderItem={({item}) =>{
             return( 
                <TouchableOpacity onPress={()=>navigation.navigate('Show', {id: item.id})}>
                 <View style={styles.row}>
                  <Text style={styles.title}>{item.title} - {item.id}</Text>
                 
                  <TouchableOpacity onPress={()=> deleteBlogPost(item.id)}>
                   <Feather style={styles.icon} name="trash" />
                  </TouchableOpacity>
                 </View>
                </TouchableOpacity>
             );
            }} 
            />
        </View>
    );
}
IndexScreen.navigationOptions=({navigation}) =>{
    return {
        headerRight: () =>(
            <TouchableOpacity onPress={()=> navigation.navigate('Create')}>
                <Feather name="plus" size={30}/>
            </TouchableOpacity>
        )
    
    }
}
const styles = StyleSheet.create({
    textStyle:{
        alignSelf:"center",
        fontSize:18,
        fontWeight:"bold"
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:10,
        paddingHorizontal:10,
        borderBottomWidth:.5,
        borderBottomColor:"gray"
        },
    title:{
        fontSize:18,
    },
    icon:{       
         fontSize:24,
    }
});

export default IndexScreen;