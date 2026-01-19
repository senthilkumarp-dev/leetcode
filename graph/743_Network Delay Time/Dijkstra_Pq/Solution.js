/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(item) {
        this.heap.push(item);
        this._bubbleUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown();
        return top;
    }

    _bubbleUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.heap[p][0] <= this.heap[i][0]) break;
            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
            i = p;
        }
    }

    _bubbleDown() {
        let i = 0;
        const n = this.heap.length;
        while (true) {
            let l = 2 * i + 1, r = 2 * i + 2, smallest = i;

            if (l < n && this.heap[l][0] < this.heap[smallest][0]) smallest = l;
            if (r < n && this.heap[r][0] < this.heap[smallest][0]) smallest = r;

            if (smallest === i) break;
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}
   let pq  =  new MinHeap();
  let adj = Array.from({ length: n + 1 }, () => []);
   for(let i = 0 ; i <times.length ;i++){
    adj[times[i][0]].push([times[i][1],times[i][2]])
   }
   let dist = Array(n+1).fill(Infinity);
   dist[k]=0;
   pq.push([0,k]);
   while(!pq.isEmpty()){
    let [d , u] = pq.pop();
    if(d > dist[u]) continue;
    for(let [v , w] of adj[u]){
        if( dist[u] + w   < dist[v]){
            dist[v] = dist[u] + w;
            pq.push([dist[v] , v])
        }
    }
   }
   let max = -Infinity;
   console.log(dist)
   for(let i = 1 ; i <=n ; i++){
    if(dist[i]== Infinity)return -1;
    max = Math.max(max,dist[i]);
   }
   return  max;
};