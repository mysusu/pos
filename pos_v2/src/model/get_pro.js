/**
 * Created by susu on 14-9-15.
 */
function get_promot_in_Itemcount(pro, n) {
    return _.find(pro.barcodes, function (promot_bar) {
        return promot_bar == n.barcode && n.count >= 3
    });
}

function len(allI, input) {
    var bItem = allI;
    bItem.count =
            input.length > 10 ?
        Number(input.substring(11, input.length)) : 1;
    return bItem;
}

function item_count_s(Itemcount, input) {
    return _.find(Itemcount, function (itemCount) {
        return itemCount.barcode == input.substring(0, 10)
    });
}

function printText(goods,free,total,cut) {
    formattedDateStr = current_time();
    var texts =
        '***<没钱赚商店>购物清单***\n' +
        '打印时间：' + formattedDateStr + '\n' +
        '----------------------\n' +
        goods.join("") +
        '----------------------\n' +
        '挥泪赠送商品：\n' +
        free.join("") +
        '----------------------\n' +
        '总计：' + total.toFixed(2) + '(元)\n' +
        '节省：' + cut.toFixed(2) + '(元)\n' +
        '**********************';
    return texts;
}

function current_time() {
    dateDigitToString = function (num) {
        return num < 10 ? '0' + num : num;
    };
    var currentDate = new Date(),
        year = dateDigitToString(currentDate.getFullYear()),
        month = dateDigitToString(currentDate.getMonth() + 1),
        date = dateDigitToString(currentDate.getDate()),
        hour = dateDigitToString(currentDate.getHours()),
        minute = dateDigitToString(currentDate.getMinutes()),
        second = dateDigitToString(currentDate.getSeconds()),
        formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
    return formattedDateString;
}