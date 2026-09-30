// node generateCircuit.js
let counterorder = false // give up order when using this flag but use same makefile process
// node jsfile a1
let withOrder = false
let pepsOrder = []
if (process.argv[2] === 'order') {
    withOrder = true
}
if (process.argv[2] === 'counterorder') {
    withOrder = true
    counterorder = true // give up order when using this flag but use same makefile process
}

const { StructDataClass, seeds } = require('./main.js')
const fs = require('fs')

let tplInput = JSON.parse(fs.readFileSync('in/generateCircuit.json', { encoding: 'utf-8' }))
let pepsCut = JSON.parse(fs.readFileSync('in/pepsCut.json', { encoding: 'utf-8' }))
if (withOrder && !counterorder) pepsOrder = JSON.parse(fs.readFileSync('output/orders_peps.json', { encoding: 'utf-8' }));

// b=[4, 5, 11, 12, 13, 19, 20, 26, 27, 28, 29, 34, 35, 36, 37, 42, 43, 44, 49, 50, 51, 56, 57, 58, 63, 64, 65, 66, 71, 72, 73, 78, 79, 80, 86, 87, 88, 94, 95, 96, 102, 103, 104, 110, 111]
// c=[];c1=c2=~~(0.5*b.length);c.push(b[c1]);while(c.length<b.length){c1-=1;if(c1>=0)c.push(b[c1]);c2+=1;if(c2<b.length)c.push(b[c2])}
// [57, 56, 58, 51, 63, 50, 64, 49, 65, 44, 66, 43, 71, 42, 72, 37, 73, 36, 78, 35, 79, 34, 80, 29, 86, 28, 87, 27, 88, 26, 94, 20, 95, 19, 96, 13, 102, 12, 103, 11, 104, 5, 110, 4, 111]
const part1s = [
    '[1, 2, 8, 9, 10, 15, 16, 17, 23, 25, 31, 32, 33, 38, 39, 40, 41, 45, 46, 47, 48, 53, 54, 55, 56, 61, 62]', // 0
    '[[63, 64, 69, 70, 71, 72, 76, 77, 78, 79, 83, 84, 85, 86, 87, 91, 92, 93, 65,66,67,73,74,81,88,89,95,96]]', // 1
]

/* [
    71,79,72,64,56,63,70,78,86,94,87,80,73,65,57,49,41,48,55,62,69,77,85,93,101,
    66,58,50,42,34,26,33,40,47,54,61,53,46,39,32,25,18,11,19,27,35,43,51,59,
    74,81,88,95,102,109,108,100,92,84,76,68,60,
    38,31,24,17,10,3,4,12,20,28,36,44,52,82,89,96,103,110,111,104,112,
    107,99,91,83,90,98,106,30,23,16,9,2,1,8,0,5,13,21,29,22,14,6
    ] 
    
[71,79,72,64,56,63,70,78,86,94,87,80,73,65,57,49,41,48,55,62,69,77,85,93,101,66,58,50,42,34,26,33,40,47,54,61,53,46,39,32,25,18,11,19,27,35,43,51,59,74,81,88,95,102,109,108,100,92,84,76,68,60,38,31,24,17,10,3,4,12,20,28,36,44,52,82,89,96,103,110,111,104,112,107,99,91,83,90,98,106,30,23,16,9,2,1,8,0,5,13,21,29,22,14,6]

    */

let mp = (ps, ns) => Array.from(ns).map(v => ps[v]).join('')

let tasks = [
    { meta: 1 },
    // Verification
    // { n: [15, 18, 21, 24, 27, 30, 33], d: [10], p: mp('IJKL', '2323010123'), e: '6layer', s: 'circuit/sycamore{n}_{d}_IJKL_fullcircuit_Verification.txt', target: ['EXP', 'SA', 'once'] },
    // { n: [36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99, 102, 105], d: [10], p: mp('IJKL', '2323010123'), e: '0layer', s: 'circuit/sycamore{n}_{d}_IJKL_E0layer_Verification.txt', target: ['EXP', 'PATCH', 'PEPSTime', 'super', 'once'] },
/*
    {n:[53],d:[20],p:mp('IJKL','0123230101232301012320'),tpl: '1', pe:'0layer',s:'circuit/sycamore{n}_{d}_IJKL_E0layer_list2.txt',target:['EXP', 'once']},
    { n: [15, 18, 21, 24, 27, 30], d: [10, 12], tpl: '1', p: mp('IJKL', '01232301'), e: '6layer', s: 'circuit/sycamore{n}_{d}_IJKL_E6layer_Verification.txt', target: ['EXP', 'SA', 'once'] },
    { n: [35, 39, 43, 47, 51, 55, 59, 63, 67, 71, 75, 79, 83], d: [10, 12], tpl: '1', p: mp('IJKL', '01232301'), e: '6layer', s: 'circuit/sycamore{n}_{d}_IJKL_E6layer_Verification.txt', target: ['EXP', 'once'] },
    { n: [15, 19, 23, 27, 31], d: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36], tpl: '1', p: mp('IJKL', '01232301'), s: 'circuit/sycamore{n}_{d}_IJKL_fullcircuit_Verification.txt', target: ['EXP', 'SA'] },
    { n: [35, 39, 43, 47, 51, 55, 59, 63, 67, 71, 75, 79, 83], d: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36], tpl: '1', p: mp('IJKL', '01232301'), s: 'circuit/sycamore{n}_{d}_IJKL_fullcircuit_Verification.txt', target: ['EXP'] },
    { n: [15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59, 63, 67, 71, 75, 79, 83], d: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36], tpl: '0', p: mp('IJKL', '01232301'), e: '0layer', s: 'circuit/sycamore{n}_{d}_IJKL_E0layer_2patch_Verification.txt', target: ['EXP', 'PATCH'] },
    { n: [15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 55, 59, 63, 67, 71, 75, 79, 83], d: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36], tpl: '1', p: mp('IJKL', '01232301'), e: '0layer', s: 'circuit/sycamore{n}_{d}_IJKL_E0layer_3patch_Verification.txt', target: ['EXP', 'PATCH'] },
    { meta: 2 },

    // supremacy
    { n: [83], d: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36], tpl: '0', p: mp('IJKL', '01232301'), e: '0layer', s: 'circuit/sycamore{n}_{d}_IJKL_E0layer_2patch.txt', target: ['EXP', 'PATCH'] },
    { n: [83], d: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36], tpl: '1', p: mp('IJKL', '01232301'), e: '0layer', s: 'circuit/sycamore{n}_{d}_IJKL_E0layer_3patch.txt', target: ['EXP', 'PATCH'] },
    { n: [83], d: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36], tpl: '0', p: mp('IJKL', '01232301'), s: 'circuit/sycamore{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP'] },
*/
{ n: [53,56], d: [12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 36], tpl: '1', p: mp('IJKL', '01232301'), s: 'circuit/sycamore{n}_{d}_IJKL_fullcircuit_Verification.txt', target: ['EXP'] },
{ n: [53,56], d: [12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 36], tpl: '1', p: mp('IJKL', '01232301'), e: '0layer', s: 'circuit/sycamore{n}_{d}_IJKL_E0layer_4patch_Verification.txt', target: ['EXP', 'PATCH'] },
 {meta: 2}
    /*
    { n: [56], d: [20], tpl: '3', p: mp('IJKL', '01232301012323010123'), s: 'circuit/tn3_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [60], d: [24], tpl: '4', p: mp('IJKL', '012323010123230101232301'), s: 'circuit/tn4_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [67], d: [32], tpl: '5', p: mp('IJKL', '01232301012323010123230101232301'), s: 'circuit/tn5_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [70], d: [24], tpl: '6', p: mp('IJKL', '012323010123230101232301'), s: 'circuit/tn6_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [74], d: [28], tpl: '7', p: mp('IJKL', '0123230101232301012323010123'), s: 'circuit/tn7_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [101], d: [24], tpl: '8', p: mp('IJKL', '012323010123230101232301'), s: 'circuit/tn8_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [100], d: [24], tpl: '9', p: mp('IJKL', '012323010123230101232301'), s: 'circuit/tn9_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [98], d: [24], tpl: '10', p: mp('IJKL', '012323010123230101232301'), s: 'circuit/tn10_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [86], d: [24], tpl: '11', p: mp('IJKL', '012323010123230101232301'), s: 'circuit/tn11_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [86], d: [28], tpl: '12', p: mp('IJKL', '0123230101232301012323010123'), s: 'circuit/tn12_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [84], d: [28], tpl: '13', p: mp('IJKL', '0123230101232301012323010123'), s: 'circuit/tn13_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [85], d: [28], tpl: '14', p: mp('IJKL', '0123230101232301012323010123'), s: 'circuit/tn14_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [83], d: [28], tpl: '15', p: mp('IJKL', '0123230101232301012323010123'), s: 'circuit/tn15_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [82], d: [28], tpl: '16', p: mp('IJKL', '0123230101232301012323010123'), s: 'circuit/tn16_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [89], d: [28], tpl: '17', p: mp('IJKL', '0123230101232301012323010123'), s: 'circuit/tn17_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [83], d: [28], tpl: '18', p: mp('IJKL', '0123230101232301012323010123'), s: 'circuit/tn18_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [88], d: [28], tpl: '19', p: mp('IJKL', '0123230101232301012323010123'), s: 'circuit/tn19_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [82], d: [28], tpl: '20', p: mp('IJKL', '0123230101232301012323010123'), s: 'circuit/tn20_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [87], d: [28], tpl: '21', p: mp('IJKL', '0123230101232301012323010123'), s: 'circuit/tn21_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [82], d: [28], tpl: '22', p: mp('IJKL', '0123230101232301012323010123'), s: 'circuit/tn22_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [80], d: [28], tpl: '23', p: mp('IJKL', '0123230101232301012323010123'), s: 'circuit/tn23_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [87], d: [28], tpl: '24', p: mp('IJKL', '0123230101232301012323010123'), s: 'circuit/tn24_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [85], d: [28], tpl: '25', p: mp('IJKL', '0123230101232301012323010123'), s: 'circuit/tn25_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [84], d: [28], tpl: '26', p: mp('IJKL', '0123230101232301012323010123'), s: 'circuit/tn26_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [87], d: [28], tpl: '27', p: mp('IJKL', '0123230101232301012323010123'), s: 'circuit/tn27_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [82], d: [28], tpl: '28', p: mp('IJKL', '0123230101232301012323010123'), s: 'circuit/tn28_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [83], d: [28], tpl: '29', p: mp('IJKL', '0123230101232301012323010123'), s: 'circuit/tn29_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [83], d: [28], tpl: '30', p: mp('IJKL', '0123230101232301012323010123'), s: 'circuit/tn30_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [72], d: [34], tpl: '31', p: mp('IJKL', '0123230101232301012323010123230101'), s: 'circuit/tn31_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [72], d: [36], tpl: '32', p: mp('IJKL', '012323010123230101232301012323010123'), s: 'circuit/tn32_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [83], d: [30], tpl: '33', p: mp('IJKL', '012323010123230101232301012323'), s: 'circuit/tn33_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },
    { n: [83], d: [32], tpl: '34', p: mp('IJKL', '01232301012323010123230101232301'), s: 'circuit/tn34_{n}_{d}_IJKL_fullcircuit.txt', target: ['EXP', 'once'] },

    { meta: 3 },
    // Check

    { n: [83], d: [12], tpl: '1', p: mp('IJKL', '01232301'), e: '0layer', s: 'sycamore{n}_{d}_IJKL_CheckARun.txt', target: ['EXP', 'Check', 'A_Run', 'PATCH', 'once'] },
    { n: [83], d: [12], tpl: '0', p: mp('IJKL', '01232301'), e: '0layer', s: 'circuit/sycamore{n}_{d}_IJKL_CheckBRun.txt', target: ['EXP', 'Check', 'B_Run', 'PATCH', 'once'] },

    // { n: [105], d: [10], p: mp('IJKL', '0123230101'), e: '0layer', s: 'circuit/sycamore{n}_{d}_IJKL_CheckARun.txt', target: ['EXP', 'Check', 'A_Run', 'PATCH', 'once'] },

    // { n: [105], d: [10], p: mp('IJKL', '0123230101'), e: '0layer', s: 'circuit/sycamore{n}_{d}_IJKL_CheckBRun.txt', target: ['EXP', 'Check', 'B_Run', 'PATCH', 'once'] },

    // for warm up
    { n: [15], d: [8], p: mp('IJKL', '01232301'), e: '4layer', s: 'circuit/sycamore{n}_{d}_IJKL_E4layer.txt', target: ['PEPS'] },
    { n: [15], d: [8], p: mp('IJKL', '01232301'), e: '4layer', s: 'circuit/sycamore{n}_{d}_IJKL_E4layer_Auxliary.txt', target: ['SA'] },
*/
]

const taskDisplay = [['n', 'depth', 'name', 'task', 'input', 'targets', 'seedIndex', 'circuitIndex', 'taskIndex']]
let inputs = []
let PEPSInputs = []
let PEPSTimeInputs = []
let SFATimeInputs = []

let circuitIndex = 1;
let taskIndex = 1;
let meta = 0

tasks.forEach(t => {
    if (t.meta) {
        meta = t.meta
        return
    }
    t.n.forEach(n => {
        t.d.forEach(d => {
            seeds.forEach((seed, seedi) => {
                if (seedi !== 0 && ((t.target.indexOf('EXP') === -1 && t.target.indexOf('seeds') === -1 && t.target.indexOf('eseeds') === -1) || t.target.indexOf('once') !== -1)) {
                    // ((不含EXP 且 不含seeds) 或 含once) 时只用 seedi==0
                    return;
                }
                if (seedi >= 20 && (t.target.indexOf('EXP') !== -1 || t.target.indexOf('eseeds') !== -1)) {
                    // EXP 只用 seedi<20
                    return;
                }
                let r = s => (s || '').split('{n}').join(n).split('{d}').join(d)
                let tpli = ~~r(t.tpl)
                let input = JSON.parse(JSON.stringify(tplInput[tpli]))
                let peps = pepsCut[tpli]
                input.generatingCircuit[0].qubitNumber = n
                input.depth = d + ''
                input.part1 = r(t.part1) || input.part1
                input.parts = r(t.parts) || input.parts
                input.generatingCircuit[0].pattern = r(t.p)
                input.generatingCircuit[0].elided = r(t.e)
                input.generatingCircuit[0].sfaCut = r(t.sfaCut) || '-1'
                input.generatingCircuit[0].pepsCut = r(t.pc) || JSON.stringify((peps[n] || peps[0]).c || peps[0].c)
                input.generatingCircuit[0].pepsPath[0].order = JSON.stringify((peps[n] || peps[0]).p || peps[0].p)
                if (t.order) input.generatingCircuit[0].order[0].order = t.order
                let rr = s => r(s).split('.txt').join((seedi === 0 ? '' : '.s' + seedi) + '.txt')
                input.generatingCircuit[0].simulationFilename = rr(t.s)
                if (t.target.indexOf('EXP') !== -1) input.generatingCircuit[0].experimentFilename = rr(t.s) + '.qcis'
                input.generatingCircuit[0].auxiliaryFilename = rr(t.s) + '.json'
                input.generatingCircuit[0].seed = seed
                if (t.target.indexOf('PEPS') !== -1) {
                    if (withOrder && !counterorder) {
                        input.generatingCircuit[0].pepsPath[0].order = JSON.stringify(pepsOrder[PEPSInputs.length].order);
                        if (t.target.indexOf('PEPSTime') !== -1) PEPSTimeInputs.push([input, t, n, d, input.generatingCircuit[0].simulationFilename]);
                    }
                    PEPSInputs.push([input, t, n, d, input.generatingCircuit[0].simulationFilename]);
                }
                if (t.target.indexOf('SFATime') !== -1 && seedi == 0) SFATimeInputs.push([input, t, n, d, input.generatingCircuit[0].simulationFilename]);
                inputs.push(input)
                if (meta === 2) {
                    taskIndex++
                }
                if (meta === 3) {
                    taskIndex = -1
                }
                taskDisplay.push([n, d, (input.generatingCircuit[0].simulationFilename || '/').split('/')[1], JSON.stringify(t), JSON.stringify(input), t.target.join('_') || 'null', seedi, circuitIndex, taskIndex])
                circuitIndex++;
            })
        })
    })
})
fs.writeFileSync('output/inputs.json', '[\n' + inputs.map(v => JSON.stringify(v)).join('\n,\n') + '\n]', { encoding: 'utf-8' })
if (withOrder) {
    fs.writeFileSync('output/PEPSTimeInputs.json', '[\n' + PEPSTimeInputs.map(v => JSON.stringify(v)).join('\n,\n') + '\n]', { encoding: 'utf-8' });
    fs.writeFileSync('output/SFATimeInputs.json', '[\n' + SFATimeInputs.map(v => JSON.stringify(v)).join('\n,\n') + '\n]', { encoding: 'utf-8' });
} else {
    fs.writeFileSync('output/dimensionTasks.json', '[\n' + PEPSInputs.map(v => JSON.stringify(v)).join('\n,\n') + '\n]', { encoding: 'utf-8' });
}

let baseDir = '../MeteorCircuit'
fs.mkdirSync(baseDir + '/circuit', { recursive: true })
inputs.forEach(input => {
    let sd = new StructDataClass();
    sd.import(input)
    sd.generateCircuit(args => {
        if (args.simulationFilename) {
            fs.writeFileSync(baseDir + '/' + args.simulationFilename, args.circuit, { encoding: 'utf-8' })
        } else {
            // console.log(args.circuit)
        }
        if (args.auxiliaryFilename) {
            fs.writeFileSync(baseDir + '/' + args.auxiliaryFilename, args.auxiliaryText, { encoding: 'utf-8' })
        }
        if (args.experimentFilename) {
            fs.writeFileSync(baseDir + '/' + args.experimentFilename, args.experiment, { encoding: 'utf-8' })
        }
    })
})

if (withOrder) {
    fs.writeFileSync('output/circuits.json', JSON.stringify({ outFileName: 'output/circuits.xlsx', title: ['circuits'], data: [taskDisplay] }, null, 4), { encoding: 'utf-8' })
}