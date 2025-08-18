from collections import deque

class Solution:
    # Function to return Breadth First Search Traversal of given graph.
    def bfs(self, adj):
        ans = []
        vis = [False] * len(adj)
        q = deque()

        q.append(0)
        vis[0] = True

        while q:
            node = q.popleft()
            ans.append(node)
            for it in adj[node]:
                if not vis[it]:
                    vis[it] = True
                    q.append(it)

        return ans
