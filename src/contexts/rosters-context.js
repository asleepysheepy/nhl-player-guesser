import React, { createContext, useContext, useEffect, useState } from 'react'
import useAxios from 'axios-hooks'

const TEAM_ROSTERS_URL = 'https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster'

const RostersContext = createContext()

function useRosters() {
  const [rosters, setRosters] = useState({})
  const [{ data, loading, error }] = useAxios(TEAM_ROSTERS_URL)

  useEffect(() => {
    if (data && !error) {
      setRosters({
        teams: data.teams.map((team) => ({
          id: team.id,
          name: team.name,
          players: team.roster.roster.map((player) => ({
            id: player.person.id,
            name: player.person.fullName,
          })),
        })),
      })
    }
  }, [data, error])

  return {
    rosters,
    loading,
    error,
  }
}

export function useRostersContext() {
  return useContext(RostersContext)
}

export function RostersContextProvider({ children }) {
  const rostersContext = useRosters()

  return (
    <RostersContext.Provider value={rostersContext}>
      {children}
    </RostersContext.Provider>
  )
}
