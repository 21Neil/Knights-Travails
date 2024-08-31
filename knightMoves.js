function knightMoves(start, end) {
  const graph = []

  function xyToNum(arr) {
    return arr[0] + arr[1] * 8
  }

  function numToXy(num) {
    return [num % 8, Math.floor(num / 8)]
  }

  function move(arr) {
    const [x, y] = arr
    const possibleMove = [
      [x + 1, y + 2], [x + 1, y - 2],
      [x - 1, y + 2], [x - 1, y - 2],
      [x + 2, y + 1], [x + 2, y - 1],
      [x - 2, y + 1], [x - 2, y - 1],
    ]
    
    function validMove(arr) {
      const [x, y] = arr
      return x >= 0 && y >=0 && x <= 7 && y <=7
    }

    return possibleMove.filter(validMove)
  }

  function generateGraph() {
    for (let i = 0; i <= 64; i++) {
      graph.push(move(numToXy(i)).map( xy => xyToNum(xy)))
    }
  }

  generateGraph()

  console.log(graph)
  
}

knightMoves()
