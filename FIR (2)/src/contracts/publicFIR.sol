pragma solidity ^0.5.0;
//pragma experimental ABIEncoderV2;

contract publicFIR {

    uint public firid= 0;
    uint public id=0;
    
    enum level {low, medium, high}

    struct progress {
        uint id;
        uint firid;
        string update;
        uint timestamp;
        address officer;
    }

    struct report {
        uint id;
        string name;
        string complaint;
        level imp;
        bool resolved;
        uint timestamp;
        address reporter;
    }

    mapping(uint => report) public reports; 
    mapping(uint => progress) public progresses;

    event reported (
        uint id,
        string name,
        string complaint,
        level imp,
        bool resolved,
        uint timestamp,
        address reporter
    );

    event updated (
        uint id,
        uint firid,
        string update,
        uint timestamp,
        address officer
    );

    function reportcomplaint(string calldata _name, string calldata _complaint, level _imp) external {
        //level _imp = level.low;
        firid++;
        //time memory timestamp = converttime(31536000);
        reports[firid] = report(firid, _name, _complaint, _imp, false, block.timestamp, msg.sender);
        emit reported(firid, _name, _complaint, _imp, false, block.timestamp, msg.sender);
    }

    function issueresolved(uint _id) public {
        require(reports[_id].reporter == msg.sender);
        //time memory timestamp = converttime(block.timestamp);
        reports[firid].resolved = true;
    }

    function updateprogress(string calldata _update, uint _id) external {
        id++;
        progresses[id]=progress(id, _id, _update, block.timestamp, msg.sender);
        emit updated(id, _id, _update, block.timestamp, msg.sender);
    }
}