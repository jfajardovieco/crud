
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import axios from 'axios'
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
console.log(users)

const handleNewUser = () =>{
setIsDisable(false)
}
  return (
    
    <div>
      
      <h1>Users</h1>
      <button className='form__button' onClick={handleNewUser}>create new user</button>
      <FormUser 
      createUser={createUsers}
      infoUpdate={infoUpdate}
      updateUsers={updateUsers}
      setInfoUpdate={setInfoUpdate}
      isDisable={isDisable}
      setIsDisable={setIsDisable}
      />
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
