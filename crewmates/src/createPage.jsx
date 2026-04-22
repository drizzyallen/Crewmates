import { useState } from 'react'
import createPost from './createPost'

function createPage() {
    return(
        <>
        <h1>Create a Dragon</h1>
        <form>
            <label>Name</label>
            <input type="text" />
            <label>Color</label>
            <input type="text" />
            <button type="submit" onClick={createPost}>Create Dragon</button>
        </form>
        </>
    )

}
export default createPage