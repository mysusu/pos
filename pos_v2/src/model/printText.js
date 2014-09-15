/**
 * Created by susu on 14-9-15.
 */
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