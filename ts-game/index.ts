
let cells = document.querySelectorAll('.cell')
let gameBoard = document.querySelector('#bord')
let message = document.querySelector('#message') as HTMLDivElement
let winner = document.querySelector('#winner') as HTMLElement
let restart = document.querySelector('#restart') as HTMLElement
let winsArr = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]
let steps: number = 0

enum Player {
  first = 'x',
  second = 'o'
}
let currentPlayer: Player = Player.first

cells.forEach(item => {
  let cell = item as HTMLElement
  cell.addEventListener('click', cellClick, { once: true })

})


restart.addEventListener('click', (e) => {
  message.style.display = 'none'
  steps = 0
  currentPlayer = Player.first
  gameBoard.classList.remove(Player.first, Player.second)
  gameBoard.classList.add(Player.first)
  cells.forEach(item => {
    let cell = item as HTMLDivElement
    cell.classList.remove(Player.first, Player.second)

    cell.removeEventListener('click', cellClick)
    cell.addEventListener('click', cellClick, { once: true })
  })
})

// 单元格点击事件
function cellClick(event: MouseEvent): void {
  let target = event.target as HTMLElement
  target.classList.add(currentPlayer)
  steps += 1
  let isWin = checkWin(currentPlayer)
  if (isWin) {
    message.style.display = 'block'
    winner.innerText = currentPlayer + '赢了！'
    return
  }
  if (steps === 9) {
    message.style.display = 'block'
    winner.innerText = '双方平局！'
    return
  }

  currentPlayer = currentPlayer === Player.first ? Player.second : Player.first
  gameBoard.classList.remove(Player.first, Player.second)
  gameBoard.classList.add(currentPlayer)

}

// 判赢
function checkWin(player: Player): boolean {
  return winsArr.some(item => {
    let cellIndex1 = item[0]
    let cellIndex2 = item[1]
    let cellIndex3 = item[2]

    if (
      hasClass(cells[cellIndex1], player) &&
      hasClass(cells[cellIndex2], player) &&
      hasClass(cells[cellIndex3], player)
    ) {
      return true
    }
    return false
  })
}

function hasClass(el: Element, name: string): boolean {
  return el.classList.contains(name)
}