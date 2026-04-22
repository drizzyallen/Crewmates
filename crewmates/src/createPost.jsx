import { supabase } from './Client'

const createPost = async (event) => {
    event.preventDefault()

    await supabase
        .from('dragon')
        .insert({dragon_name: post.dragon_name, dragon_type: post.dragon_type, dragon_diet: post.dragon_diet})
        .select()

        window.location = "/"
}

export default createPost