import './styles/UserCard.css'
const UserCard = ({ user, deleteUsers, setInfoUpdate, setIsDisable }) => {
const handleDelete = () =>{
deleteUsers('/users', user.id)

}

const handleEdit = () => {
setInfoUpdate(user)
setIsDisable(false)
}


  return (
    <article className="article__card">
        <h3>{user.first_name} {user.last_name}</h3>
        <hr />
        <ul>
            <li><span>Email: </span><span>{user.email}</span></li>
            <li><span>Birthday: </span>{user.birthday}</li>
        </ul>
        <button onClick={handleDelete}><i className='bx bx-trash'></i></button>
        <button onClick={handleEdit}><i className='bx bx-edit-alt' ></i></button>
    </article>
  )
}

export default UserCard