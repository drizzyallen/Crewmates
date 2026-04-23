import { useState, useEffect } from "react"
import { useParams, Link } from "react-router"
import { supabase } from "./Client"

function DetailPage() {
    const { id } = useParams()
    const [dragon, setDragon] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchDragon = async () => {
            const { data, error } = await supabase
                .from('dragon')
                .select()
                .eq('dragon_id', id)
                .single()

            if (error) {
                console.error("Error fetching dragon:", error)
            } else {
                setDragon(data)
            }
            setLoading(false)
        }

        fetchDragon()
    }, [id])

    if (loading) return <p>Loading dragon details...</p>
    if (!dragon) return <p>Dragon not found.</p>

    return (
        <div className="dragon-details" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <h1>Dragon Summary</h1>
            <div style={{ width: '400px', border: '1px solid #ccc', borderRadius: '8px', padding: '20px', backgroundColor: '#f4f3ec', textAlign: 'left' }}>
                <h2>Name: {dragon.dragon_name}</h2>
                <p><strong>Name:</strong> {dragon.dragon_name}</p>
                <p><strong>Type:</strong> {dragon.dragon_type}</p>
                <p><strong>Diet:</strong> {dragon.dragon_diet}</p>
                <p><strong>Created At:</strong> {new Date(dragon.created_at).toLocaleString()}</p>
            </div>
            <Link to="/view" style={{ marginTop: '20px' }}>
                <button>Back to Squad</button>
            </Link>
            <Link to={`/update/${dragon.dragon_id}`} style={{ marginTop: '20px' }}>
                <button>Update</button>
            </Link>
        </div>
    )
}

export default DetailPage
