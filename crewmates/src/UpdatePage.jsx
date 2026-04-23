import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { supabase } from './Client'

function UpdatePage() {
    const { id } = useParams()
    const navigate = useNavigate()
    
    // Hold the dragon info state
    const [post, setPost] = useState({
        dragon_name: "",
        dragon_type: "",
        dragon_diet: ""
    })

    // Fetch the specific dragon's current data when the page loads
    useEffect(() => {
        const fetchDragon = async () => {
            const { data, error } = await supabase
                .from('dragon')
                .select()
                .eq('dragon_id', id)
                .single()

            if (error) {
                console.error("Error fetching dragon:", error)
            } else if (data) {
                // Populate the state with the fetched data
                setPost({
                    dragon_name: data.dragon_name,
                    dragon_type: data.dragon_type,
                    dragon_diet: data.dragon_diet
                })
            }
        }
        
        fetchDragon()
    }, [id])

    // Update state on input change
    const handleChange = (event) => {
        const { name, value } = event.target
        setPost(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // Update the row in the database
    const handleSubmit = async (event) => {
        event.preventDefault()
        
        const { error } = await supabase
            .from('dragon')
            .update({
                dragon_name: post.dragon_name, 
                dragon_type: post.dragon_type, 
                dragon_diet: post.dragon_diet
            })
            .eq('dragon_id', id)

        if (error) {
            console.error("Error updating dragon:", error)
            alert("Failed to update dragon")
        } else {
            console.log("Dragon updated successfully")
            // Redirect back to the view page
            navigate('/view')
        }
    }

    // Provide a way to delete the dragon (Bonus functionality!)
    const handleDelete = async () => {
        const { error } = await supabase
            .from('dragon')
            .delete()
            .eq('dragon_id', id)
            
        if (error) {
            console.error("Error deleting dragon:", error)
            alert("Failed to delete dragon")
        } else {
            console.log("Dragon deleted successfully")
            navigate('/view')
        }
    }

    return (
        <>
            <h1>Update Dragon</h1>
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
                
                <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                    <button type="submit">Update Dragon</button>
                    <button type="button" onClick={handleDelete} style={{ backgroundColor: '#ff4444', color: 'white', borderColor: '#ff4444' }}>Delete Dragon</button>
                </div>
            </form>
        </>
    )
}

export default UpdatePage
