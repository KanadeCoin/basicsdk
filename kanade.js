//
// KanadeCoinBasicSDK v0.1.0
// https://kanadecoin.com/
//
// Copyright 2018 monolitht
// MIT license
//

// KanadeCoinオブエジェクト
var Kanade = {};

// KanadeCoinのプラグイン用
Kanade.plugins = {};

// KanadeCoinのコントラクトアドレス
Kanade.contractAddress = "0x8E5610ab5E39d26828167640EA29823fe1dD5843";

// KanadeCoinのABI
Kanade.ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"contractStartTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"addrLockUp","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"atto","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"addrAirDrop","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"addrDevTeam","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"addrDistribution","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lockupSeconds","outputs":[{"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"addrBounty","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[],"name":"initializeContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unLockup","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id_max32","type":"string"},{"name":"_recipient","type":"address"},{"name":"_finish","type":"uint128"},{"name":"_under","type":"uint256"}],"name":"createQuestion","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_id_max32","type":"string"}],"name":"getQuestion","outputs":[{"name":"","type":"uint256[4]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id_max32","type":"string"},{"name":"_number","type":"uint128"},{"name":"_amount","type":"uint256"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_id_max32","type":"string"}],"name":"getQuestionVotesAllCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_id_max32","type":"string"},{"name":"_position","type":"uint256"}],"name":"getQuestionVote","outputs":[{"name":"","type":"uint256[4]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_text","type":"string"}],"name":"putSaveData","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"getSaveData","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id_max32","type":"string"},{"name":"_recipient","type":"address"},{"name":"_volume","type":"uint64"},{"name":"_amount","type":"uint256"},{"name":"_finish","type":"uint128"}],"name":"createRandomBox","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_id_max32","type":"string"}],"name":"getRandomBox","outputs":[{"name":"","type":"uint256[5]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_id_max32","type":"string"},{"name":"_count","type":"uint256"}],"name":"drawRandomItem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_addrss","type":"address"},{"name":"_id_max32","type":"string"}],"name":"getRandomItems","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_recipients","type":"address[]"},{"name":"_values","type":"uint256[]"}],"name":"airDrop","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recipients","type":"address[]"},{"name":"_values","type":"uint256[]"}],"name":"rain","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];

// KanadeCoinのコントラクト
Kanade.contract = null;

// 結果コード
Kanade.resultCode = {
    Success          :  0,
    ConnectionError  : 10,
    ContractError    : 20,
    ArgumentError    : 30,
    InitializeError  : 40,
    NoLoginError     : 50
};

// 基本情報
Kanade.name     = null;
Kanade.symbol   = null;
Kanade.decimals = null;

// 状態
Kanade.isInitialized = false;

// 接続
Kanade.connect = function(provider, callback) {
    tmpName     = null;
    tmpSymbol   = null;
    tmpDecimals = null;

    if (provider === null && typeof window.web3 !== 'undefined') {
        if (!useEthClient()) {
            console.log("kanade:initial try-1");
            setTimeout(function() {
                if (!useEthClient()) {
                    console.log("kanade:initial try-2");
                    setTimeout(function() {
                        if (!useEthClient()) {
                            console.log("kanade:initial try-3");
                            callback(Kanade.resultCode.NoLoginError);
                        }
                    }, 2000);
                }
            }, 2000);
        }

        function useEthClient() {
            if (typeof web3.eth.defaultAccount === 'undefined') {
                return false;
            }
            window.web3 = new window.Web3(window.web3.currentProvider);
            Kanade.contract = window.web3.eth.contract(Kanade.ABI).at(Kanade.contractAddress);
            startGetInitialDatas(callback);
            return true;
        }

        return;
    }

    else if (typeof provider === 'string') {
        var Web3 = require('web3');
        window.web3 = new window.Web3();
        window.web3.setProvider(new web3.providers.HttpProvider(provider));
        Kanade.contract = window.web3.eth.contract(Kanade.ABI).at(Kanade.contractAddress);
        startGetInitialDatas(callback);
        return;
    }

    Kanade.disconnect();
    setTimeout(function() {
        callback(Kanade.resultCode.ArgumentError);
    }, 0);
    return;

    function startGetInitialDatas(callback) {
        getInitialDataName(callback);
    }

    function getInitialDataName(callback) {
        Kanade.contract.name(function(err, name) {
            if (err) {
                Kanade.contract.name(function(err, name) {
                    if (disconnectAndCallback(err, callback)) { return; }
                    tmpName = name;
                    getInitialDataDecimals(callback);
                });
            } else {
                tmpName = name;
                getInitialDataDecimals(callback);
            }
        });
    }

    function getInitialDataDecimals(callback) {
        Kanade.contract.decimals(function(err, decimals) {
            if (err) {
                Kanade.contract.decimals(function(err, decimals) {
                    if (disconnectAndCallback(err, callback)) { return; }
                    tmpDecimals = decimals.toNumber();
                    getInitialDataSymbol(callback);
                });
            } else {
                tmpDecimals = decimals.toNumber();
                getInitialDataSymbol(callback);
            }
        });
    }

    function getInitialDataSymbol(callback) {
        Kanade.contract.symbol(function(err, symbol) {
            if (err) {
                Kanade.contract.symbol(function(err, symbol) {
                    if (disconnectAndCallback(err, callback)) { return; }
                    tmpSymbol = symbol;
                    finishInitialize(callback);
                });
            } else {
                tmpSymbol = symbol;
                finishInitialize(callback);
            }
        });
    }

    function disconnectAndCallback(err, callback) {
        if (err) {
            console.log(err);
            Kanade.disconnect();
            callback(Kanade.resultCode.InitializeError);
            return true;
        } else {
            return false;
        }
    }

    function finishInitialize(callback) {
        if (tmpName !== null && tmpSymbol !== null && tmpDecimals !== null) {
            if (tmpName != "" && tmpSymbol != "" && tmpDecimals != -1) {
                Kanade.isInitialized = true;
                Kanade.name     = tmpName;
                Kanade.symbol   = tmpSymbol;
                Kanade.decimals = tmpDecimals;
                callback(Kanade.resultCode.Success);
            } else {
                Kanade.disconnect();
                callback(Kanade.resultCode.InitializeError);
            }
        }
    }
};

// 切断
Kanade.disconnect = function() {
    Kanade.contract      = null;
    Kanade.isInitialized = false;
    Kanade.name          = null;
    Kanade.symbol        = null;
    Kanade.decimals      = null;
}

// 残高確認
Kanade.balanceOf = function(address, callback) {
    if (!Kanade.isInitialized) {
        callback(Kanade.resultCode.InitializeError, 0);
        return;
    }
    if (typeof web3.eth.defaultAccount === 'undefined') {
        callback(Kanade.resultCode.NoLoginError, 0);
        return;
    }

    Kanade.contract.balanceOf(address, function(err, balance) {
        if (err) {
            console.log(err);
            callback(Kanade.resultCode.ContractError, 0);
        } else {
            callback(Kanade.resultCode.Success, balance);
        }
    });
};

// ランダムボックスを確認
Kanade.getRandomBox = function(randomBoxId, callback) {
    if (!Kanade.isInitialized) {
        callback(Kanade.resultCode.InitializeError, null);
        return;
    }
    if (typeof web3.eth.defaultAccount === 'undefined') {
        callback(Kanade.resultCode.NoLoginError, null);
        return;
    }

    Kanade.contract.getRandomBox(randomBoxId, function(err, randomBox) {
        if (err) {
            console.log(err);
            callback(Kanade.resultCode.ContractError, null);
        } else {
            var result = {
                isStarted : (randomBox[0].toNumber() == 1),
                recipient : randomBox[1].toString(16),
                volume    : randomBox[2],
                amount    : randomBox[3],
                finish    : randomBox[4]
            };
            callback(Kanade.resultCode.Success, result);
        }
    });
}

// ランダム数を確認
Kanade.getRandomItems = function(address, randomBoxId, callback) {
    if (!Kanade.isInitialized) {
        callback(Kanade.resultCode.InitializeError, null);
        return;
    }
    if (typeof web3.eth.defaultAccount === 'undefined') {
        callback(Kanade.resultCode.NoLoginError, null);
        return;
    }

    Kanade.contract.getRandomItems(address, randomBoxId, function(err, randomItems) {
        if (err) {
            console.log(err);
            callback(Kanade.resultCode.ContractError, null);
        } else {
            var items = [];
            for (var i = 0; i < randomItems.length; i++) {
                items.push(randomItems[i].toNumber());
            }
            callback(Kanade.resultCode.Success, items);
        }
    });
}

// ランダム数を購入
Kanade.drawRandomItem = function(randomBoxId, count, callback) {
    if (!Kanade.isInitialized) {
        callback(Kanade.resultCode.InitializeError, null);
        return;
    }
    if (typeof web3.eth.defaultAccount === 'undefined') {
        callback(Kanade.resultCode.NoLoginError, null);
        return;
    }

    Kanade.contract.drawRandomItem(randomBoxId, count, function(err, txHash) {
        if (err) {
            console.log(err);
            callback(Kanade.resultCode.ContractError, null);
        } else {
            callback(Kanade.resultCode.Success, txHash);
        }
    });
}

// 質問を生成する
Kanade.createQuestion = function(id, recipient, finish, under, callback) {
    if (!Kanade.isInitialized) {
        callback(Kanade.resultCode.InitializeError, null);
        return;
    }
    if (typeof web3.eth.defaultAccount === 'undefined') {
        callback(Kanade.resultCode.NoLoginError, null);
        return;
    }

    Kanade.contract.createQuestion(id, recipient, finish, under, function(err, txHash) {
        if (err) {
            console.log(err);
            callback(Kanade.resultCode.ContractError, null);
        } else {
            callback(Kanade.resultCode.Success, txHash);
        }
    });
}

// 質問情報を確認
Kanade.getQuestion = function(id, callback) {
    if (!Kanade.isInitialized) {
        callback(Kanade.resultCode.InitializeError, null);
        return;
    }
    if (typeof web3.eth.defaultAccount === 'undefined') {
        callback(Kanade.resultCode.NoLoginError, null);
        return;
    }

    Kanade.contract.getQuestion(id, function(err, questions) {
        if (err) {
            console.log(err);
            callback(Kanade.resultCode.ContractError, null);
        } else {
            var items = [];
            for (var i = 0; i < questions.length; i++) {
                items.push(questions[i].toNumber());
            }
            callback(Kanade.resultCode.Success, items);
        }
    });
}

// 質問に投票
Kanade.vote = function(id, number, amount, callback) {
    if (!Kanade.isInitialized) {
        callback(Kanade.resultCode.InitializeError, null);
        return;
    }
    if (typeof web3.eth.defaultAccount === 'undefined') {
        callback(Kanade.resultCode.NoLoginError, null);
        return;
    }

    Kanade.contract.vote(id, number, amount, function(err, txHash) {
        if (err) {
            console.log(err);
            callback(Kanade.resultCode.ContractError, null);
        } else {
            callback(Kanade.resultCode.Success, txHash);
        }
    });
}

// 質問情報を確認
Kanade.getQuestionVotesAllCount = function(id, callback) {
    if (!Kanade.isInitialized) {
        callback(Kanade.resultCode.InitializeError, 0);
        return;
    }
    if (typeof web3.eth.defaultAccount === 'undefined') {
        callback(Kanade.resultCode.NoLoginError, 0);
        return;
    }

    Kanade.contract.getQuestionVotesAllCount(id, function(err, votesAllCount) {
        if (err) {
            console.log(err);
            callback(Kanade.resultCode.ContractError, 0);
        } else {
            callback(Kanade.resultCode.Success, votesAllCount);
        }
    });
}

// 質問情報を確認
Kanade.getQuestionVote = function(id, position, callback) {
    if (!Kanade.isInitialized) {
        callback(Kanade.resultCode.InitializeError, null);
        return;
    }
    if (typeof web3.eth.defaultAccount === 'undefined') {
        callback(Kanade.resultCode.NoLoginError, null);
        return;
    }

    Kanade.contract.getQuestionVote(id, position, function(err, voteInfo) {
        if (err) {
            console.log(err);
            callback(Kanade.resultCode.ContractError, null);
        } else {
            var items = [];
            for (var i = 0; i < voteInfo.length; i++) {
                items.push(voteInfo[i].toNumber());
            }
            callback(Kanade.resultCode.Success, items);
        }
    });
}

// テキストデータを保存
Kanade.putSaveData = function(text, callback) {
    if (!Kanade.isInitialized) {
        callback(Kanade.resultCode.InitializeError, null);
        return;
    }
    if (typeof web3.eth.defaultAccount === 'undefined') {
        callback(Kanade.resultCode.NoLoginError, null);
        return;
    }

    Kanade.contract.putSaveData(text, function(err, txHash) {
        if (err) {
            console.log(err);
            callback(Kanade.resultCode.ContractError, null);
        } else {
            callback(Kanade.resultCode.Success, txHash);
        }
    });
}

// テキストデータを取得
Kanade.getSaveData = function(address, callback) {
    if (!Kanade.isInitialized) {
        callback(Kanade.resultCode.InitializeError, null);
        return;
    }
    if (typeof web3.eth.defaultAccount === 'undefined') {
        callback(Kanade.resultCode.NoLoginError, null);
        return;
    }

    Kanade.contract.getSaveData(address, function(err, text) {
        if (err) {
            console.log(err);
            callback(Kanade.resultCode.ContractError, null);
        } else {
            callback(Kanade.resultCode.Success, text);
        }
    });
}

// RAIN機能を実行
Kanade.rain = function(recipients, values, callback) {
    if (!Kanade.isInitialized) {
        callback(Kanade.resultCode.InitializeError, null);
        return;
    }
    if (typeof web3.eth.defaultAccount === 'undefined') {
        callback(Kanade.resultCode.NoLoginError, null);
        return;
    }

    Kanade.contract.rain(recipients, values, function(err, txHash) {
        if (err) {
            console.log(err);
            callback(Kanade.resultCode.ContractError, null);
        } else {
            callback(Kanade.resultCode.Success, txHash);
        }
    });
}


// 送金
Kanade.transfer = function(toAddr, amount, callback) {
    if (!Kanade.isInitialized) {
        callback(Kanade.resultCode.InitializeError, null);
        return;
    }
    if (typeof web3.eth.defaultAccount === 'undefined') {
        callback(Kanade.resultCode.NoLoginError, null);
        return;
    }

    Kanade.contract.transfer(toAddr, amount, function(err, txHash) {
        if (err) {
            console.log(err);
            callback(Kanade.resultCode.ContractError, null);
        } else {
            callback(Kanade.resultCode.Success, txHash);
        }
    });
}
