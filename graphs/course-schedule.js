function canFinish(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);

  for (const [a, b] of prerequisites) {
    graph[b].push(a);
  }

  const state = new Array(numCourses).fill(0); // 0 = não visitado, 1 = visitando, 2 = visitado

  function hasCycle(v) {
    if (state[v] === 1) return true; // ciclo detectado
    if (state[v] === 2) return false; // já verificado, sem ciclo

    state[v] = 1; // marcando como "visitando"

    for (const neighbor of graph[v]) {
      if (hasCycle(neighbor)) return true;
    }

    state[v] = 2; // marcando como "visitado"
    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }

  return true;
}

console.log(canFinish(2, [[1, 0]])); // true
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
); // false (ciclo)
