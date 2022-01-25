# Using this interface as the basis for another interface

This interface can be repurposed i.e. if multiple SimpleTimelock.sol contracts are deployed (each with their own unique elapsed time) you can simply following the instuctions below to create a new public repository which will be the basis of a new interface. This interface can also be repurposed for slightly different timelock functionality i.e. we use it for the LinearTimelock.sol smart contract also; see [this public implementation of this user interface](https://github.com/second-state/linear-timelock-user-interface) as an example of how to tweak this repo to achieve a slightly different outcome.

```
# First, check out this repo
git clone --bare https://github.com/second-state/simple-timelock-user-interface.git

# Change into its dir
cd simple-timelock-user-interface

```

Create a new repo using GitHub web interface (let's say call it `new-timelock-user-interface`)
You will now have access to a GitHub endpoint (which you own) like `git@github.com:second-state/new-timelock-user-interface.git`

```
# Now push the original simple-timelock-user-interface to your new new-timelock-user-interface

git push --mirror git@github.com:second-state/new-timelock-user-interface.git
```

Now remove the original repository and let's focus on your new repository. We are going to flatten all commits (remove the history so you have a clean history of commits only for the work you are doing moving forward).

```
# Clone your new repository
git@github.com:second-state/new-timelock-user-interface.git

# Change to the repo
cd new-timelock-user-interface

# Check out to a temporary branch:
git checkout --orphan TEMP_BRANCH

# Add all the files:
git add -A

# Commit the changes:
git commit -am "Initial commit"

# Delete the old branch:
git branch -D main

# Rename the temporary branch to master:
git branch -m main

# Finally, force update to our repository:
git push -f origin main
```

# PRIVATE - Timelock token User Interface (UI)

# What does it do?

Interacts with the timelock token which allows users to transfer tokens after a certain timespan has elapsed.

# How do end users interact with the timelock UI

Users simply enter their Ethereum mainnet address and click the transfer button. If tokens have cleared the vesting period then tokens will be transferred. If tokens are still locked, the user will get a Toastify message explaining the timelock.

![Screen Shot 2022-01-10 at 7 20 09 am](https://user-images.githubusercontent.com/9831342/148701427-3217e79a-3e02-4b71-b4b1-20d93729ac94.png)

# Where is the timelock smart contract

The [simple timelock smart contract](https://github.com/second-state/simple-timelock-smart-contract) is deployed on the Ethereum mainnet and then this UI source code us updated with the timelocks ABI, bytecode, contract address and deployment transaction hash. This timelock UI instantiates the timelock contract in order to interact and transfer tokens to end users and so forth.

# How to deploy this UI

Clone this repository

```
git clone git@github.com:second-state/simple-timelock-user-interface.git
```

## ABI and address of Timelock

Paste the ABI and the address of the timelock smart contract into the helper.js file

## Contract address of ERC20 (NOT timelock)

In addition to that, also paste the contract address of the **ERC20 contract** into the helper.js file. You will see the two addresses are clearly marked.

## Configuring

Open the package.json file and update any paths/URLs etc. to suite this new implementation

## Installing

Then simply type

```
npm install
```

## Running

To publish/deploy simply type

```
npm run deploy
```

The site will then be hosted to [https://second-state.github.io/simple-timelock-user-interface/html/](https://second-state.github.io/simple-timelock-user-interface/html/)
