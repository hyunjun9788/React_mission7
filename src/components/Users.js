import User from "./User";
function Users() {
    const profiles = [
        {
            name: "박재성",
            age: 20
        },
        {
            name: '김태훈',
            age: 25
        },
        {
            name: "이지현",
            age: 28
        }
    ]
    return (
        <div>
            <User name={profiles[0].name} age={profiles[0].age}/>
            <User name={profiles[1].name} age={profiles[1].age}/>
            <User name={profiles[2].name} age={profiles[2].age}/>
        </div>
    )
}

export default Users