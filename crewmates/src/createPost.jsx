import { supabase } from './Client'

const createPost = async (event, post) => {
    event.preventDefault()

    const { data, error } = await supabase
        .from('dragon')
        .insert({dragon_name: post.dragon_name, dragon_type: post.dragon_type, dragon_diet: post.dragon_diet})
        .select()

    if (error) {
        console.error("Supabase Insert Error:", error)
        alert("Failed to create post. Check console for details.")
    } else {
        console.log("Post created successfully:", data)
        window.location = "/"
    }
}

export default createPost