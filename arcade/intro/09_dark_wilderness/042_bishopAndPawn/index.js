// a -> h === W -> E, 1 -> 8 === S -> N

const bishopAndPawn = (bishop, pawn) => {

  let board = createBoard(), answer = false;
  let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  let nums = ['8', '7', '6', '5', '4', '3', '2', '1'];
  const bishop_coords = [nums.indexOf(bishop[1]), chars.indexOf(bishop[0])];
  const increments = [-1, 1];

  increments.forEach(y_adj => increments.forEach(x_adj => {
    if (!answer) {
      let y = bishop_coords[0] + y_adj, x = bishop_coords[1] + x_adj;
      while (board[y] && board[y][x]) {
        if (board[y][x] === pawn) { answer = true; break; }
        else { y += y_adj; x += x_adj; }
      }
    }
  }));

  return answer;
};

const createBoard = () => {
  let board = [];
  let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], nums = [8,7, 6, 5,4,3,2,1];
  nums.forEach(num => {
    let row = [];
    chars.forEach(char => row.push(char+num));
    board.push(row);
  })
  return board;
}

module.exports = { fns: [ bishopAndPawn, createBoard ] }
