import React, { useState } from 'react'
import './GrieveBox.css'
import { Avatar, Button } from "@material-ui/core"
import axios from 'axios'




function GrieveBox(props) {
    const [content, setContent] = useState('')
    // useEffect(() => {

    // },[])

    const addPost = () => {
        axios.post('/api/posts', { content })
            .then((res) => {
                props.getPosts()
                setContent('')
            })
    }



    return (
        <div className='grieveBox'>
            <form>
                <div className='grieveBox_input'>
                    <Avatar>OP</Avatar>
                    <input placeholder="What's bringing you down?" onChange={(e) => setContent(e.target.value)}></input>
                </div>
                <Button className="grieveBox_grieveButton" onClick={() => addPost()}>Grieve</Button>
            </form>

        </div>
    )
}
export default GrieveBox