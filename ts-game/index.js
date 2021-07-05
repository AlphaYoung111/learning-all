var cells = document.querySelectorAll('.cell');
var gameBoard = document.querySelector('#bord');
var message = document.querySelector('#message');
var winner = document.querySelector('#winner');
var restart = document.querySelector('#restart');
var winsArr = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
var steps = 0;
var Player;
(function (Player) {
    Player["first"] = "x";
    Player["second"] = "o";
})(Player || (Player = {}));
var currentPlayer = Player.first;
cells.forEach(function (item) {
    var cell = item;
    cell.addEventListener('click', cellClick, { once: true });
});
restart.addEventListener('click', function (e) {
    message.style.display = 'none';
    steps = 0;
    currentPlayer = Player.first;
    gameBoard.classList.remove(Player.first, Player.second);
    gameBoard.classList.add(Player.first);
    cells.forEach(function (item) {
        var cell = item;
        cell.classList.remove(Player.first, Player.second);
        cell.removeEventListener('click', cellClick);
        cell.addEventListener('click', cellClick, { once: true });
    });
});
// 单元格点击事件
function cellClick(event) {
    var target = event.target;
    target.classList.add(currentPlayer);
    steps += 1;
    var isWin = checkWin(currentPlayer);
    if (isWin) {
        message.style.display = 'block';
        winner.innerText = currentPlayer + '赢了！';
        return;
    }
    if (steps === 9) {
        message.style.display = 'block';
        winner.innerText = '双方平局！';
        return;
    }
    currentPlayer = currentPlayer === Player.first ? Player.second : Player.first;
    gameBoard.classList.remove(Player.first, Player.second);
    gameBoard.classList.add(currentPlayer);
}
// 判赢
function checkWin(player) {
    return winsArr.some(function (item) {
        var cellIndex1 = item[0];
        var cellIndex2 = item[1];
        var cellIndex3 = item[2];
        if (hasClass(cells[cellIndex1], player) &&
            hasClass(cells[cellIndex2], player) &&
            hasClass(cells[cellIndex3], player)) {
            return true;
        }
        return false;
    });
}
function hasClass(el, name) {
    return el.classList.contains(name);
}
