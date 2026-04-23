import { useState, useEffect } from "react"
import { supabase } from "./Client"
import { Link, useNavigate } from "react-router"

function ViewPage() {
    const [dragons, setDragons] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchDragons = async () => {
            // Use the Supabase client to fetch data, no axios or URL needed!
            const { data, error } = await supabase
                .from('dragon')
                .select()
                .order('created_at', { ascending: false })

            if (error) {
                console.error("Error fetching dragons:", error)
            } else {
                setDragons(data)
            }
        }

        fetchDragons()
    }, [])

    return (
        <div className="dragon-container">
            <h1>Your Dragon Squad</h1>
            <div className="dragon-list">
                {dragons.length > 0 ? (
                    dragons.map((dragon) => (
                        <div 
                            key={dragon.dragon_id} 
                            className="dragon-card" 
                            style={{ width: '250px', height: '250px', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '16px', display: 'inline-flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#f4f3ec', verticalAlign: 'top', boxSizing: 'border-box', cursor: 'pointer' }}
                            onClick={() => navigate(`/dragon/${dragon.dragon_id}`)}
                        >
                            <h3>{dragon.dragon_name}</h3>
                            <p>Type: {dragon.dragon_type}</p>
                            <p>Diet: {dragon.dragon_diet}</p>
                            <Link to={`/update/${dragon.dragon_id}`} onClick={(e) => e.stopPropagation()}>
                                <button style={{ width: '100%', padding: '10px', marginTop: '15px' }}>Update</button>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>No dragons found. Go create some!</p>
                )}
            </div>
        </div>
    )
}

export default ViewPage
