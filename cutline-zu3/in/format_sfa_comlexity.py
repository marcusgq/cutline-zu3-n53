
import json
import sys
import re
from math import ceil,floor



def load_data():
    with open('sfa_comlexity.md') as fid:
        ss=fid.read()
    d1=ss.split('## ')[1:]
    pa=re.compile(r"""(.*)\s*```json([\s\S]*)```\s*([\s\S]*)""")
    d2 = [pa.match(s1).groups() for s1 in d1]
    return d2

def processOne(match,ti):
    jobj=json.loads(match[1])
    intf=ceil if jobj['use00'] else floor
    bign = intf(int(jobj['xsize'])*int(jobj['ysize'])*0.5)
    broken=json.loads(jobj['brokenBits'])
    order=[ii for ii in range(bign) if ii not in broken]
    jobj['generatingCircuit']=[
        {
            "type": "generatingCircuit",
            "qubitNumber": bign-len(broken),
            "elided": "",
            "pattern": "IJKLKLIJIJKLKLIJIJKLKLIJIJKLKLIJIJKLKLIJIJKLKLIJIJKLKLIJIJKLKLIJIJKLKLIJIJKLKLIJIJKLKLIJIJKLKLIJIJKLKLIJIJKLKLIJIJKLKLIJIJKLKLIJ"[:int(jobj['depth'])],
            "seed": "13874234",
            "simulationFilename": "",
            "auxiliaryFilename": "",
            "experimentFilename": "",
            "order": [
                {
                    "type": "orderlist",
                    "order": json.dumps(order)
                }
            ],
            "sfaCut": "-1",
            "pepsCut": "[8,3,8,15,20,15,20,27]",
            "pepsPath": [
                {
                    "type": "orderlist",
                    "order": json.dumps(order)
                }
            ],
            "gateArgs": [
                {
                    "type": "gateArgs",
                    "unknow": "[0.5,0.1666666667,0,0,0]"
                }
            ]
        }
    ]
    pa="012323010123230101232301012323010123230101232301012323010123230101232301012323010123230101232301"[:int(jobj['depth'])]
    gen=f"""{{n:[{bign-len(broken)}],d:[{int(jobj['depth'])}],tpl:'{ti}',p:mp('IJKL','{pa}'),s:'circuit/tn{ti}_{{n}}_{{d}}_IJKL_fullcircuit.txt',target:['EXP','once']}},"""
    # print(gen)
    task=f'''
    taskindex=$(({ti}+ii*100))
    echo current: $taskindex

    python evaluate_complexity_updated.py circuit_dir:circuit/tn{ti}_{bign-len(broken)}_{int(jobj['depth'])}_IJKL_fullcircuit.txt path_name:output/test_task55_$taskindex.path openlegs:21 max_size:60
    '''
    # print(task)
    return jobj,gen,task

if __name__ == "__main__":
    pass
    d0=load_data()
    d1=[processOne(di,ti) for ti,di in enumerate(d0,2) ]
    d2=list(zip(*d1))
    print(',\n'.join([json.dumps(ji) for ji in d2[0]]))
    print('\n'.join(d2[1]))
    print('\n'.join(d2[2]))

    
