import { useEffect, useState } from 'react'
import React from 'react'
import { List } from './list'
import { SearchPanel } from './search-panel'

const apiUrl = process.env.REACT_APP_API_URL
export const ProjectList = () => {
  const [params, setParams] = useState({
    name: '',
    personId: '',
  })

  const [list, setList] = useState([])

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`${apiUrl}/projects`).then(async (res) => {
      if (res.ok) {
        setList(await res.json())
      }
    })
  }, [params])

  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json())
      }
    })
  }, [])

  return (
    <div>
      <SearchPanel params={params} setParams={setParams} users={users} />
      <List list={list} users={users} />
    </div>
  )
}
