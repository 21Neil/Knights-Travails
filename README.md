# Knight Travails

使用 JavaScript 實作「騎士移動」算法。使用 graph 資料結構，並以廣度優先演算法算出西洋棋中騎士從起點到達終點所需的最少移動次數，並提供具體的移動路徑。

## 功能與方法

### `knightMoves(start, end)`

計算國際象棋棋盤上，騎士從起點移動到終點的最短路徑。使用廣度優先搜尋 (BFS) 算法來確保路徑最短。

- **參數**：
  - `start` (Array): 騎士的起始位置 `[x, y]`，其中 `x` 和 `y` 是棋盤上的坐標，範圍為 0-7。
  - `end` (Array): 騎士的目標位置 `[x, y]`，坐標同樣範圍為 0-7。
  
- **返回**：`void`，函式會在控制台輸出所需的步數及移動路徑。

## 內部實作細節

### `xyToNum(arr)`

將 `[x, y]` 坐標轉換為單一數字，用於圖的表示。

- **參數**：
  - `arr` (Array): 棋盤上的位置 `[x, y]`。
  
- **返回**：一個整數，用於表示棋盤上的位置。

### `numToXy(num)`

將單一數字轉換為 `[x, y]` 坐標。

- **參數**：
  - `num` (Number): 單一數字表示的棋盤位置。
  
- **返回**：`Array`，表示棋盤上的位置 `[x, y]`。

### `move(arr)`

計算騎士從當前位置可能移動到的所有合法位置。

- **參數**：
  - `arr` (Array): 當前棋盤上的位置 `[x, y]`。
  
- **返回**：`Array`，包含所有可能的移動位置 `[x, y]`。

### `validMove(arr)`

檢查移動是否在棋盤範圍內。

- **參數**：
  - `arr` (Array): 欲移動到的位置 `[x, y]`。
  
- **返回**：`boolean`，若移動有效則返回 `true`，否則返回 `false`。

### `generateGraph()`

生成整個棋盤的移動圖，每個位置都有一個鏈結到合法移動位置的列表。

- **返回**：`void`

### `BFS(start, end)`

使用廣度優先搜尋 (BFS) 來尋找從起點到終點的最短路徑。

- **參數**：
  - `start` (Number): 起點的數字表示。
  - `end` (Number): 終點的數字表示。
  
- **返回**：`Array`，包含最短路徑中的所有位置。

## 使用示例

以下是如何使用這個 `knightMoves` 函數的簡單示例：

```javascript
knightMoves([3, 3], [4, 3]);
// 輸出: 
// You made it in 3 moves! Here's your path:
// [3, 3]
// [5, 4]
// [3, 5]
// [4, 3]
```

## Demo

![demo](/demo/demo.png)
