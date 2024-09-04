function knightMoves(start, end) {
  const graph = [];
  const queue = [];
  const visited = [];

  generateGraph();

  const numResult = BFS(xyToNum(start), xyToNum(end))
  const result = numResult.map( num => numToXy(num))

  function xyToNum(arr) {
    return arr[0] + arr[1] * 8;
  }

  function numToXy(num) {
    return [num % 8, Math.floor(num / 8)];
  }

  function move(arr) {
    const [x, y] = arr;
    const possibleMove = [
      [x + 1, y + 2],
      [x + 1, y - 2],
      [x - 1, y + 2],
      [x - 1, y - 2],
      [x + 2, y + 1],
      [x + 2, y - 1],
      [x - 2, y + 1],
      [x - 2, y - 1],
    ];

    function validMove(arr) {
      const [x, y] = arr;
      return x >= 0 && y >= 0 && x <= 7 && y <= 7;
    }

    return possibleMove.filter(validMove);
  }

  function generateGraph() {
    for (let i = 0; i <= 64; i++) {
      graph.push(move(numToXy(i)).map(xy => xyToNum(xy)));
    }
  }

  function BFS(start, end) {
    if (start === end) return [start];

    queue.push([start, graph[start]]);

    while (queue.length !== 0) {
      const current = queue.shift();

      for (const neighbor of current[1]) {
        queue.push([neighbor, graph[neighbor]]);
        if(!visited[current[0]]) visited[neighbor] = [current[0]]
        if(visited[current[0]]) visited[neighbor] = [...visited[current[0]], current[0]]
        if (neighbor === end) {
          visited[neighbor].push(neighbor)
          return visited[neighbor];
        }
      }
    }
  }
  
  console.log(`You made it in ${result.length - 1} move! Here's your path`)
  result.forEach( xy => console.log(xy))
}

knightMoves([3, 3], [4, 3])
