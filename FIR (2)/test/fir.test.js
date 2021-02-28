const { assert } = require("chai");
//const { Item } = require("react-bootstrap/lib/Breadcrumb");

const fir = artifacts.require("./publicFIR.sol");

contract('FIR', function([reporter]){

    var result,res,result2;

    before(async function(){
        var fir1 = await fir.new();
        result = await fir1.reportcomplaint('John', 'Robbery',0, {from:reporter});
        res = await fir1.issueresolved(1,{from:reporter});
        result2 = await fir1.reports.call(1);
        var update1 = await fir1.updateprogress('Accused arrested',1);
    })

    describe('Reported',async function(){
        it('reports', async function(){
            var result1 = await result.logs[0].args;
            console.log(await result1.timestamp.toString());
            assert(result1.imp,'low');
        })
        it('resolves', async function(){

            console.log(result2);
            //console.log(await result2.timestamp.toString());*/
            //console.log(await res);
            assert(1,1);
        })

    })

    before(async function(){

    })

    describe('Updated', async function(){
        it('updates', async function(){
            var q;
            var t=await fir1.id;
            var ress;
            for(var i=0;i<t; i++){
                ress = await fir1.progresses.call(i);
                if(ress.firid===1)
                {
                    console.log(ress.update)
                }
            }
        })
    })

})