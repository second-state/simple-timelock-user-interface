const abi = [
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "_erc20_contract_address",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "AllocationPerformed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "TokensDeposited",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "TokensUnlocked",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "allIncomingDepositsFinalised",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "alreadyWithdrawn",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "balances",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "recipients",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            }
        ],
        "name": "bulkDepositTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "contractBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "depositTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "erc20Contract",
        "outputs": [
            {
                "internalType": "contract IERC20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "finalizeAllIncomingDeposits",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "initialTimestamp",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_timePeriodInSeconds",
                "type": "uint256"
            }
        ],
        "name": "setTimestamp",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "timePeriod",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "timestampSet",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferAccidentallyLockedTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferTimeLockedTokensAfterTimePeriod",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "withdrawEth",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
];

// Address of the simple timelock instance
const simple_address = '0x34C9A9C8bf9E85a6f84De6e249773e6E1B7c2456';


// IMPORTANT - which address are you pasting here?
// THIS MUST BE THE ERC20 ADDRESS NOT THE TIMELOCK ADDRESS
const erc20_contract_address = '0x23D91837fceE9b52D76e2BE18410D9b2522f681D';

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

class Amounts {

    constructor() {
        this.locked = new ethers.BigNumber.from('0');
        this.withdrawn = new ethers.BigNumber.from('0');
        this.available = new ethers.BigNumber.from('0');
        this.cliffEdge = new ethers.BigNumber.from('0');
        this.currentTime = new ethers.BigNumber.from('0');
        this.mostRecentUnlockTimestamp = new ethers.BigNumber.from('0');
        this.weiPerSecond = new ethers.BigNumber.from('0');
    }

    getLocked() {
        return this.locked;
    }

    getWithdrawn() {
        return this.withdrawn;
    }

    getAvailable() {
        return this.available;
    }

    getCliffEdge() {
        return this.cliffEdge;
    }

    getCurrentTime() {
        return this.currentTime;
    }

    getMostRecentUnlockTimestamp() {
        return this.mostRecentUnlockTimestamp;
    }

    setLocked(_locked) {
        this.locked = this.locked.add(_locked);
    }

    setWithdrawn(_withdrawn) {
        this.withdrawn = this.withdrawn.add(_withdrawn);
    }

    setAvailable(_available) {
        this.available = this.available.add(_available);
    }

    setCliffEdge(_cliffEdge) {
        this.cliffEdge = _cliffEdge;
    }

    setCurrentTime(_currentTime) {
        this.currentTime = _currentTime;
    } 

    reset() {
        this.locked = new ethers.BigNumber.from('0');
        this.withdrawn = new ethers.BigNumber.from('0');
        this.available = new ethers.BigNumber.from('0');
        this.releaseEdge = new ethers.BigNumber.from('0');
        this.currentTime = new ethers.BigNumber.from('0');
    }
}

var simpleAmounts = new Amounts();
var provider;
var signer;

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Page has loaded ...");
    window.ethereum.enable();
    connectWallet().then(() => {
        console.log("Wallet connected in page load section");
        updateBalances().then(() => {
            console.log("Ready to unlock tokens ...")
        });
    });
});

async function connectWallet() {
    simpleAmounts.reset();
    window.ethereum.enable();
    console.log('Called connect wallet which is inside helper.js');
    provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(provider);
    signer = provider.getSigner();
    console.log(signer);
    var addressOfSigner = await signer.getAddress();
    document.getElementById("eth_address").value = addressOfSigner;
    document.getElementById("connect_wallet_text").style.color = "#00FF7F";
    document.getElementById("connect_wallet_text").innerHTML = "Wallet connected ✔";

}

function clearInput() {
    document.getElementById("eth_address").value = '';
    document.getElementById("state_amount").value = '';
}

async function updateBalances() {
    simpleAmounts.reset();

    window.ethereum.enable();

    provider = new ethers.providers.Web3Provider(window.ethereum);

    // Current time
    var currentBlock = await provider.getBlock("latest");
    currentTime = currentBlock.timestamp;
    currentTimeBN = new ethers.BigNumber.from(currentTime);
    simpleAmounts.setCurrentTime(currentTimeBN);
    console.log("Current time: " + simpleAmounts.getCurrentTime());

    // Instantiate simple timelock contract
    simpleTimeLockContract = new ethers.Contract(simple_address, abi, provider);

    // Cliff edge timestamp
    timePeriod = await simpleTimeLockContract.timePeriod();
    timePeriodBN = new ethers.BigNumber.from(timePeriod);
    simpleAmounts.setCliffEdge(timePeriodBN);

    // If we have not hit the unlock period then just send a message and end processing
    if (
        currentTime < simpleAmounts.getCliffEdge()) {
        console.log("No tokens available yet");
        var unlockCommences = new Date(timePeriod * 1000);
        var toastResponse = JSON.stringify({
            avatar: "../images/favicon.ico",
            text: "Unlocking commences at: " + unlockCommences.toLocaleString(),
            duration: 10000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            backgroundColor: "linear-gradient(to right, #FF6600, #FFA500)",
            stopOnFocus: false, // Prevents dismissing of toast on hover
            onClick: function() {} // Callback after click
        });
        var toastObject = JSON.parse(toastResponse);
        Toastify(toastObject).showToast();
    } else {
        // If we have entered the unlock period then go ahead and get the amounts first
        document.getElementById("pb").style.width = '0%';
        console.log("Disabling button");
        document.getElementById("button_calculate_balances").disabled = true;
        document.getElementById("button_calculate_balances").value = "Calculating balances, please wait ...";
        document.getElementById("pb").style.transition = "all 30s linear 0s";
        document.getElementById("pb").style.width = '80%';
        var toastResponse;

        // Eth address
        console.log("Calculating balances");
        eth_address = document.getElementById('eth_address').value;
        var pattern = /0x[a-fA-F0-9]{40}/;
        var resultRegex = pattern.exec(eth_address);
        if (resultRegex != null) {
            var recipientAddress = resultRegex[0];
            // Balance locked 
            simpleUsersBalance = await simpleTimeLockContract.balances(resultRegex[0]);
            simpleUsersBalanceBN = new ethers.BigNumber.from(simpleUsersBalance);
            simpleAmounts.setLocked(simpleUsersBalanceBN);
            console.log("User's balance: " + simpleAmounts.getLocked());

            // Amount already withdrawn
            simpleAlreadyWithdrawn = await simpleTimeLockContract.alreadyWithdrawn(resultRegex[0]);
            simpleAlreadyWithdrawnBN = new ethers.BigNumber.from(simpleAlreadyWithdrawn);
            simpleAmounts.setWithdrawn(simpleAlreadyWithdrawnBN);
            console.log("Already withdrawn: " + simpleAmounts.getWithdrawn());

            // Populate UI with values
            console.log("Adding start:");
            console.log(simpleAmounts.getLocked());
            console.log("Adding end.");

            if (ethers.utils.formatEther(simpleAmounts.getLocked()) < 1 && ethers.utils.formatEther(simpleAmounts.getLocked()) > 0) {
                document.getElementById("locked").innerHTML = "< 1";
            } else {
                document.getElementById("locked").innerHTML = ethers.utils.formatEther(simpleAmounts.getLocked());
            }

            if (ethers.utils.formatEther(simpleAmounts.getWithdrawn()) < 1 && ethers.utils.formatEther(simpleAmounts.getWithdrawn()) > 0) {
                document.getElementById("withdrawn").innerHTML = "< 1";
            } else {
                document.getElementById("withdrawn").innerHTML = ethers.utils.formatEther(simpleAmounts.getWithdrawn());
            } 

            // Calculate how many tokens are available, given the current time period and how much time has elapsed so far        
            if (simpleAmounts.getCurrentTime() >= simpleAmounts.getCliffEdge()) {
                // The maximum time period has passed, so all locked tokens are available now and forever
                simpleAmounts.setAvailable(simpleAmounts.getLocked());
                console.log("No time lock in place, all tokens are available");
            } else {
                simpleAmounts.setAvailable(0);
            }
            if (ethers.utils.formatEther(simpleAmounts.getAvailable()) < 1 && ethers.utils.formatEther(simpleAmounts.getAvailable()) > 0) {
                document.getElementById("available").innerHTML = "< 1";
            } else {
                document.getElementById("available").innerHTML = ethers.utils.formatEther(simpleAmounts.getAvailable());
            }
            // Print value which will be written to state_amount input box
            //console.log("Max available: " + ethers.utils.formatUnits(available).toString());
            document.getElementById("state_amount").value = ethers.utils.formatUnits(simpleAmounts.getAvailable(), 0);
            document.getElementById("pb").style.transition = "all 0.1s linear 0s";
            document.getElementById("pb").style.width = '100%';
            sleep(1000).then(() => {
                document.getElementById("pb").classList.remove("progress-bar-animated");
                document.getElementById("button_calculate_balances").disabled = false;
                document.getElementById("button_calculate_balances").value = "Refresh/Calculate Balances";
                document.getElementById("pb").style.width = '0%';
            });
        } else {
            var toastResponse = JSON.stringify({
                avatar: "../images/favicon.ico",
                text: "Not a valid Ethereum address!",
                duration: 10000,
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                backgroundColor: "linear-gradient(to right, #FF6600, #FFA500)",
                stopOnFocus: false, // Prevents dismissing of toast on hover
                onClick: function() {} // Callback after click
            });
            var toastObject = JSON.parse(toastResponse);
            Toastify(toastObject).showToast();
        }
    }
}

async function calculateBalances() {
    simpleAmounts.reset();
    await updateBalances();
}

async function onButtonClickTransfer() {
    simpleAmounts.reset();
    await updateBalances();
    // Provider
    window.ethereum.enable()
    provider = new ethers.providers.Web3Provider(window.ethereum);

    // Signer
    signer = provider.getSigner();
    console.log(signer);

    // Instantiate all 3 timelock contracts
    simpleTimeLockContract = new ethers.Contract(simple_address, abi, signer);

    // UI mods
    document.getElementById("pb").style.width = '0%';
    console.log("Disabling button");
    document.getElementById("button_transfer_tokens").disabled = true;
    document.getElementById("pb").style.transition = "all 30s linear 0s";
    document.getElementById("pb").style.width = '80%';

    // Init toast response
    var toastResponse;

    // Amount to unlock
    state_amount = document.getElementById('state_amount').value;

    // Ensure that state amount is a real number, if not then we skip everything and send a toast message 
    try {
        stateAmountInWei = new ethers.BigNumber.from(state_amount);
        console.log("Big Number: " + stateAmountInWei);
    } catch (err) {
        sleep(1000).then(() => {
            document.getElementById("pb").style.transition = "all 1s linear 0s";
            document.getElementById("pb").style.width = '100%';
            document.getElementById("pb").classList.remove("progress-bar-animated");
            document.getElementById("button_transfer_tokens").disabled = false;
            document.getElementById("pb").style.width = '0%';
        });
        var toastResponse = JSON.stringify({
            avatar: "../images/favicon.ico",
            text: "Token amount is not a valid number!",
            duration: 10000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            backgroundColor: "linear-gradient(to right, #FF6600, #FFA500)",
            stopOnFocus: false, // Prevents dismissing of toast on hover
            onClick: function() {} // Callback after click
        });
        var toastObject = JSON.parse(toastResponse);
        Toastify(toastObject).showToast();
        console.log("Token amount is not a valid number");
        sleep(1000).then(() => {
            document.getElementById("pb").style.transition = "all 1s linear 0s";
            document.getElementById("pb").style.width = '100%';
            document.getElementById("pb").classList.remove("progress-bar-animated");
            document.getElementById("button_transfer_tokens").disabled = false;
            document.getElementById("pb").style.width = '0%';
        });
        throw "exit";
    }
    if (stateAmountInWei > 0 && stateAmountInWei <= simpleAmounts.getAvailable()) {
        eth_address = document.getElementById('eth_address').value;
        var pattern = /0x[a-fA-F0-9]{40}/;
        var resultRegex = pattern.exec(eth_address);
        if (resultRegex != null) {
            var recipientAddress = resultRegex[0];
            response = await simpleTimeLockContract.transferTimeLockedTokensAfterTimePeriod(erc20_contract_address, recipientAddress, stateAmountInWei);
            var toastResponse = JSON.stringify({
                avatar: "../images/favicon.ico",
                text: "Congratulations, tokens unlocked!",
                duration: 10000,
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                backgroundColor: "linear-gradient(to right, #454A21, #607D3B)",
                stopOnFocus: false, // Prevents dismissing of toast on hover
                onClick: function() {} // Callback after click
            });
            var toastObject = JSON.parse(toastResponse);
            Toastify(toastObject).showToast();
        } else {
            var toastResponse = JSON.stringify({
                avatar: "../images/favicon.ico",
                text: "Not a valid Ethereum address!",
                duration: 10000,
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                backgroundColor: "linear-gradient(to right, #FF6600, #FFA500)",
                stopOnFocus: false, // Prevents dismissing of toast on hover
                onClick: function() {} // Callback after click
            });
            var toastObject = JSON.parse(toastResponse);
            Toastify(toastObject).showToast();
        }
    } else {
        var toastResponse = JSON.stringify({
            avatar: "../images/favicon.ico",
            text: "Please re-check token amount and try again!",
            duration: 10000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            backgroundColor: "linear-gradient(to right, #FF6600, #FFA500)",
            stopOnFocus: false, // Prevents dismissing of toast on hover
            onClick: function() {} // Callback after click
        });
        var toastObject = JSON.parse(toastResponse);
        Toastify(toastObject).showToast();
    }
    sleep(1000).then(() => {
        document.getElementById("pb").style.transition = "all 0.1s linear 0s";
        document.getElementById("pb").style.width = '100%';
        document.getElementById("pb").classList.remove("progress-bar-animated");
        document.getElementById("button_transfer_tokens").disabled = false;
        document.getElementById("pb").style.width = '0%';
    });
}