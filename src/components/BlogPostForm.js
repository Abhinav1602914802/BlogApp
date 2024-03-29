import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={Styles.label}>Enter Title:</Text>
            <TextInput 
            style={Styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}/>
            <Text style={Styles.label}>Enter Content:</Text>
            <TextInput 
            style={Styles.input}
            value={content}
            onChangeText={(text) => setContent(text)}/>
            <Button 
            title="Save Blog Post"
            onPress={() => onSubmit(title, content)}
            />
        </View>
    );

};

const Styles = StyleSheet.create({
    input:{
        fontSize:18,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom:15,
        margin:5
    },
    label:{
        fontSize: 18,
        marginBottom:5,
        marginLeft:5
    }
});

export default BlogPostForm;