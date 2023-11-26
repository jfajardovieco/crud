
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {
  const [infoUpdate, setInfoUpdate] = useState()
  const [isDisable, setIsDisable] = useState(true)
  const url ='https://users-crud.academlo.tech/'
  const [users, getUsers, createUsers,deleteUsers, updateUsers] = useFetch(url)
  useEffect(() =>{
    getUsers('/users')
  }, [])


const handleNewUser = () =>{
setIsDisable(false)
}
  return (
    
    <div className='app__container'>
      
      <h1>Users</h1>
      <button className='form__button' onClick={handleNewUser}>create new user</button>
      <article className='article__user'>
      <FormUser 
      createUser={createUsers}
      infoUpdate={infoUpdate}
      updateUsers={updateUsers}
      setInfoUpdate={setInfoUpdate}
      isDisable={isDisable}
      setIsDisable={setIsDisable}
      />
      </article>
      <div>
        {
          users?.map(user =>(
              <UserCard 
              key={user.id}
              user={user}
              deleteUsers={deleteUsers}
              setInfoUpdate={setInfoUpdate}
              setIsDisable={setIsDisable}
              />
          ))
        }
      </div>
    </div>
  )
}

export default App
