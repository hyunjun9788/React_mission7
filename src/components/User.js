import React from "react"

function User(props) {

    return(
        <p>
            <div>제 이름은 {props.name}입니다.</div>
            <div>나이는 {props.age}입니다.</div>
        </p>

    )
}

export default User