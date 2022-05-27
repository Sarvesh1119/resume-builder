import React from 'react'

const Card = (props) => {
    return (
        <div className="space">
            <div className="card">
                {props.children}
            </div>
        </div>
    )
}

export default Card