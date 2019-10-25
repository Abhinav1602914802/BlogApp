import React, {useContext} from 'react';
import { View, StyleSheet, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import  Feather  from 'react-native-vector-icons/Feather';

const IndexScreen = (props) => {

    console.log(props);
    const {state, addBlogPost, deleteBlogPost} = useContext(Context);
    //console.log(state);
    return (<View>
        <FlatList 
            data =  { state }
            keyExtractor = {blogPost => blogPost.title}
            renderItem = {({item}) => {
                return (
                    <TouchableOpacity onPress = {()=>props.navigation.navigate('Show', {id: item.id})}>
                        <View style={Styles.row}>
                            <Text style={Styles.title}>{item.title}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather name = "trash" style={Styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                );
            }
        }
        />
    </View>);
}

IndexScreen.navigationOptions = (props) => {
    return{
        headerRight: <TouchableOpacity onPress={() => props.navigation.navigate('Create')}>
            <Feather name='plus' size={30} />
        </TouchableOpacity>
    };
}

const Styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical:20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon:{
        fontSize: 24
    }
});

export default IndexScreen;