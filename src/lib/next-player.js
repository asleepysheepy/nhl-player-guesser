export function getNextPlayer(rosters, gameState) {
  if (!rosters.teams) { return null }

  if (gameState.team === 'league') {
    const team = getUniqueItem(rosters.teams, gameState.teamsIncluded)
    return getUniqueItem(team.players, gameState.playersIncluded)
  } else {
    const team = rosters.teams.find((t) => t.name === gameState.team)
    if (!team) { throw new Error() }

    return getUniqueItem(team.players, gameState.playersIncluded)
  }
}

function getUniqueItem(array, usedItems) {
  let item = getItem(array)

  while (usedItems.includes(item.id)) {
    item = getItem(array)
  }

  return item
}

function getItem(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}
