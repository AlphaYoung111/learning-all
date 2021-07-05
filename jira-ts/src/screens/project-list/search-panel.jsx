import React from 'react'

export const SearchPanel = ({ params, setParams, users }) => {
  return (
    <form>
      <div>
        <input
          type="text"
          value={params.name}
          onChange={(e) =>
            setParams({
              ...params,
              name: e.target.value,
            })
          }
        />

        <select
          value={params.personId}
          onChange={(e) =>
            setParams({
              ...params,
              personId: e.target.value,
            })
          }
        >
          {users.map((user) => {
            return (
              <option value={user.id} key={user.id}>
                {user.name}
              </option>
            )
          })}
        </select>
      </div>
    </form>
  )
}
