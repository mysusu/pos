//TODO: Please write code in this file.
function printInventory(inputs) {
    var allItem = loadAllItems();
    var promot = loadPromotions()[0];
    var Itemcount = [];
    var promotCount = [];
    var goodsPrint = [];
    var freePrint = [];
    var totalMoney = 0;
    var cutMoney = 0;


    _.map(allItem, function (allI) {
        _.map(inputs,function(input){
            if (allI.barcode == input.substring(0, 10)) {
                if (!Itemcount.length) {
                    var aItem = allI;
                    aItem.count = input.length > 10 ? Number(input.substring(11, input.length)) : 1;
//
                    Itemcount.push(aItem);
                } else {

                    for (var c = 0, length = Itemcount.length; c < length; c++) {
                        if (Itemcount[c].barcode == input.substring(0, 10)) {
                            Itemcount[c].count = input.length > 10 ?
                                (Number(input.substring(11, input.length)) + Itemcount[c].count) : (Itemcount[c].count + 1);
                            break;
                        }
                        if (Itemcount[c].barcode != input.substring(0, 10) && c == Itemcount.length - 1) {
                            var bItem = allI;
                            bItem.count = input.length > 10 ?
                                Number(input.substring(11, input.length)) : 1;
                            Itemcount.push(bItem);
                        }
                    }
                }
            }

        });

    });//var evens = _.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
// → [2, 4, 6]
    _.map(Itemcount, function (n) {
        var even = _.find(promot.barcodes, function (promot_bar) {
            return promot_bar == n.barcode && n.count >= 3
        });
        if (even) {
            n.subTotalm = (n.count - parseInt(n.count / 3)) * n.price;
            var promotCounts = {name: n.name, price: n.price, unit: n.unit, count: 1};
            promotCount.push(promotCounts);
        }
        else {
            n.subTotalm = n.count * n.price;
        }

    });
    _.map(Itemcount, function (itemCount) {
        goodsPrint.push("名称：" + itemCount.name + "，数量：" + itemCount.count + itemCount.unit + "，单价："
            + itemCount.price.toFixed(2) + "(元)，小计：" + itemCount.subTotalm.toFixed(2)
            + "(元)\n");
        totalMoney += itemCount.subTotalm;
    });
    _.map(promotCount, function (proC) {
        freePrint.push("名称：" + proC.name + "，数量：" + proC.count + proC.unit + "\n");
        cutMoney += proC.price;
    });
    var text =
        '***<没钱赚商店>购物清单***\n' +

        goodsPrint.join("") +
        '----------------------\n' +
        '挥泪赠送商品：\n' +
        freePrint.join("") +
        '----------------------\n' +
        '总计：' + totalMoney.toFixed(2) + '(元)\n' +
        '节省：' + cutMoney.toFixed(2) + '(元)\n' +
        '**********************';
    console.log(text);

}