window.showPastEvents = (contract, selector) => {
    contract.getPastEvents("NewHashValue", {fromBlock: 0, toBlock: 'latest'}, function (error, events) {
        const data = events.map(function (event) {
            return {
                blockNumber: event.blockNumber,
                senderAddress: event.returnValues[1],
                timestamp: new Date(event.returnValues[2] * 1000).toDateString(),
                hashValue: event.returnValues[0],
            }
        });

        window.showDataAsTable(selector, data.reverse(), "blockNumber", "responsive-table striped");
    });
}
