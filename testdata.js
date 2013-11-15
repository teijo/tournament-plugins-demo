var groupInit = {
  teams: [
    {id: 10, name: "YoDa",  format: "sc2", data: { faction: "t" } },
    {id: 11, name: "First", format: "sc2", data: { faction: "p" } },
    {id: 12, name: "MC",    format: "sc2", data: { faction: "p" } },
    {id: 13, name: "Ret",   format: "sc2", data: { faction: "z" } },
    {id: 14, name: "Kas",   format: "sc2", data: { faction: "t" } },
    {id: 15, name: "XIorD", format: "sc2", data: { faction: "z" } }
  ],
  matches: [
    { "id": 0, "round": 1, "a": { "team": 0, "score": 1 }, "b": { "team": 1, "score": 2 } },
    { "id": 1, "round": 1, "a": { "team": 0, "score": 2 }, "b": { "team": 2, "score": 1 } },
    { "id": 2, "round": 1, "a": { "team": 1, "score": 2 }, "b": { "team": 2, "score": 1 } },
    { "id": 3, "round": 2, "a": { "team": 0, "score": 2 }, "b": { "team": 3, "score": 0 } },
    { "id": 4, "round": 2, "a": { "team": 1, "score": 0 }, "b": { "team": 3, "score": 2 } },
    { "id": 5, "round": 2, "a": { "team": 2, "score": 0 }, "b": { "team": 3, "score": 2 } },
    { "id": 6, "round": 3, "a": { "team": 0, "score": 2 }, "b": { "team": 4, "score": 1 } },
    { "id": 7, "round": 3, "a": { "team": 1, "score": 2 }, "b": { "team": 4, "score": 0 } },
    { "id": 8, "round": 3, "a": { "team": 2, "score": 2 }, "b": { "team": 4, "score": 0 } },
    { "id": 9, "round": 4, "a": { "team": 3, "score": 2 }, "b": { "team": 4, "score": 1 } },
    { "id": 10, "round": 4, "a": { "team": 0, "score": 2 }, "b": { "team": 5, "score": 0 } },
    { "id": 11, "round": 4, "a": { "team": 1, "score": 2 }, "b": { "team": 5, "score": 1 } },
    { "id": 12, "round": 5, "a": { "team": 2, "score": 2 }, "b": { "team": 5, "score": 1 } },
    { "id": 13, "round": 5, "a": { "team": 3, "score": 2 }, "b": { "team": 5, "score": 0 } },
    { "id": 14, "round": 5, "a": { "team": 4, "score": 2 }, "b": { "team": 5, "score": 1 } }
  ]
}

var bracketInit = {
  teams : [
    [groupInit.teams[0], groupInit.teams[1]],
    [groupInit.teams[2], groupInit.teams[3]]
  ],
  results : [[
    [[1,2], [3,4]],
    [[5,6]]
  ], [
    [[7,8]],
    [[9,10]]
  ], [
    [[1,12], [13,14]],
    [[15,16]]
  ]]
}
