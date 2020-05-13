import CreateDataContext from './CreateDataContext'
 
const blogReducer = (state, action) =>{
    switch(action.type){
        case 'add_blogpost':
            return [...state,
                 {
                     id: Math.floor(Math.random() *9999),
                     title: action.payload.title,
                     content: action.payload.content
                    }
                ];
        case 'delete_blogPost':
            return  state.filter(blogPost=> blogPost.id !==action.payload)
        
        case 'edit_blogPost':
            return state.map((blogPost) =>{
               return  blogPost.id === action.payload.id ? action.payload : blogPost
            })
               
        default:
            return state
    }
}

const addBlogPosts = dispatch =>{
       return (title, content, callback) =>{
        dispatch({type: 'add_blogpost', payload: {title, content} })
        callback();
       };
    };
const deleteBlogPost = dispatch =>{
    return (id) =>{
        dispatch({type: 'delete_blogPost', payload:id})
    }
}

const editBlogPost = dispatch=>{
    return (id, title, content, callback) =>{
        dispatch({type: 'edit_blogPost', payload:{id: id, title: title, content: content}})
        callback();
    }
}

export const {Context, Provider} = CreateDataContext(
        blogReducer,
        {addBlogPosts, deleteBlogPost, editBlogPost},
        [{title: 'Rony', content: 'I am a bad boy', id:1}]
    );