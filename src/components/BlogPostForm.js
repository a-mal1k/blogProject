import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'


const BlogPostForm =({onSubmit, initialValues}) =>{
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent]  = useState(initialValues.content)

    return(
        <View>
           <Text style={styles.text}>Enter Title</Text>
           <TextInput style={styles.input} value={title} onChangeText ={text=> setTitle(text)}/>
           <Text style={styles.text}>Enter Content</Text>
           <TextInput style={styles.input} value={content} onChangeText={content => setContent(content)}/>
           <Button
            title="Save Blog Post"
            onPress={()=> onSubmit(title, content)}
             />
        </View>
    );
}

BlogPostForm.defaultProps={
    initialValues:{
        title:'',
        content:''
    }
};
const styles = StyleSheet.create({
    text:{
        fontSize:18,
        fontWeight:"bold",
        alignSelf:"center"
    },
    input:{
        borderWidth:.5,
        borderColor:'gray',
        padding:5,
        margin:10
    }
});

export default BlogPostForm;