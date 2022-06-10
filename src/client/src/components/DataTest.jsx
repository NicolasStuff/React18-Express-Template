import React, {useEffect, useState} from 'react'

function DataTest() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchDataTest = async () => {
      fetch("/api/users")
        .then(res => res.json())
        .then(json => setUsers(json.users));
      }
      fetchDataTest();
  }, []);
  return (
    <p className='text-3xl font-bold underline'>
      <code>GET /api/users</code>:{" "}
      {users.length ? users.join(", ") : "loading..."}
    </p>
  )
}

export default DataTest;