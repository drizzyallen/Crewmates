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
            
            <label>Type</label>
            <input type="text" name="dragon_type" value={post.dragon_type} onChange={handleChange} />

            <label>Diet</label>
            <div className="radio-container">
                {["Spicy foods", "Raw meat", "Vegan", "Sea food", "Sweets", "Breakfast 24/7", "Fruits", "Ice cubes"].map(diet => (
                    <label key={diet} style={{ display: 'block', fontWeight: 'normal', margin: '4px 0' }}>
                        <input 
                            type="radio" 
                            name="dragon_diet" 
                            value={diet} 
                            checked={post.dragon_diet === diet} 
                            onChange={handleChange} 
                            style={{ marginRight: '8px' }}
                        />
                        {diet}
                    </label>
                ))}
            </div>
            
            <button type="submit">Create Dragon</button>
        </form>
        </>
    )
}

export default createPage