import React from 'react'
import './GrieveBox.css'
import {Avatar, Button} from "@material-ui/core"


function GrieveBox(){
    return (
        <div className='grieveBox'>
            <form>
                <div className='grieveBox_input'>
                <Avatar>OP</Avatar>
                <input placeholder='Whats on your mind'></input>
                </div>
                <input className='grieveBox_inputImg' placeholder='Enter Image URL' type = 'text'></input>
                <Button className="grieveBox_grieveButton">Grieve</Button>
            </form>

        </div>
    )
}
export default GrieveBox