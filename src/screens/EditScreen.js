import React, {useContext} from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {

    const id = navigation.getParam('id');
    //console.log(id);

    const {state, editBlogPost} = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === id);

    return <BlogPostForm 
        initialValues={{ title: blogPost.title, content: blogPost.content}}
     onSubmit={(title, content) => {
        // console.log(id, title, content);
        editBlogPost(id, title, content, () => navigation.pop());
    }}/>
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
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

export default EditScreen;