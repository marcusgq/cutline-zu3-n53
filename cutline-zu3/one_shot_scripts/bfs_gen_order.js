sd.edge_dict
sd.qi2xy_dict
sd.choosen
sd.bitCount
sd.maxAreaEdges
remove_edges=[
[10, 18],
[31, 39],
[39, 47],
[69, 76]
]
initqi='41'
function bfs_gen_order(sd,remove_edges,initqi) {
    let ret=[]
    let used={}
    let queue=[initqi]
    let edge_dict={}
    sd.maxAreaEdges.forEach(edge =>{
        let [q1,q2]=edge
        for (let index = 0; index < remove_edges.length; index++) {
            const element = remove_edges[index];
            if (q1==element[0] && q2==element[1]) {
                return
            }
        }

        if (q1 in edge_dict) {
            edge_dict[q1][q2]=1
        } else {
            edge_dict[q1]={[q2]:1}
        }
        if (q2 in edge_dict) {
            edge_dict[q2][q1]=1
        } else {
            edge_dict[q2]={[q1]:1}
        }
    })
    
    function getConnects(qi) {
        return Object.keys(edge_dict[qi])
    }
    function insertOne() {
        let qi=queue.shift()
        if (used[qi]) return;
        ret.push(qi)
        used[qi]=1
        getConnects(qi).forEach(qj => {
            queue.push(qj)
        });
    }
    while (queue.length) {
        insertOne()
    }
    return ret.map(v=>~~v)
}
ret=bfs_gen_order(sd,remove_edges,initqi)
console.log(JSON.stringify(ret))