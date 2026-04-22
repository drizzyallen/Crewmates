import { useState } from 'react'
import createPost from './createPost'

function createPage() {
    const [post, setPost] = useState({
        dragon_name: "",
        dragon_type: "",
        dragon_diet: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setPost(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        createPost(event, post)
    }

    return(
        <>
        <h1>Create a Dragon</h1>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="dragon_name" value={post.dragon_name} onChange={handleChange} />
            
            <label>Color</label>
            <input type="text" name="dragon_type" value={post.dragon_type} onChange={handleChange} />

            <label>Diet</label>
            <input type="text" name="dragon_diet" value={post.dragon_diet} onChange={handleChange} />
            
            <button type="submit">Create Dragon</button>
        </form>
        </>
    )
}

export default createPage