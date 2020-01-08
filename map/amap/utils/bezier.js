/*
贝塞尔曲线算法的Javascript实现：https://blog.csdn.net/cuixiping/article/details/6872095
 */

/*
参考维基百科
http://zh.wikipedia.org/wiki/%E8%B2%9D%E8%8C%B2%E6%9B%B2%E7%B7%9A
*/

/*
坐标结构体
*/
function Point2D(x, y) {
    this.x = x || 0.0;
    this.y = y || 0.0;
}

/*
 cp在此是四個元素的陣列:
 cp[0]為起始點，或上圖中的P0
 cp[1]為第一個控制點，或上圖中的P1
 cp[2]為第二個控制點，或上圖中的P2
 cp[3]為結束點，或上圖中的P3
 t為參數值，0 <= t <= 1
*/
function PointOnCubicBezier(cp, t) {
    var ax, bx, cx;
    var ay, by, cy;
    var tSquared, tCubed;
    var result = new Point2D;

    /*計算多項式係數*/

    cx = 3.0 * (cp[1].x - cp[0].x);
    bx = 3.0 * (cp[2].x - cp[1].x) - cx;
    ax = cp[3].x - cp[0].x - cx - bx;

    cy = 3.0 * (cp[1].y - cp[0].y);
    by = 3.0 * (cp[2].y - cp[1].y) - cy;
    ay = cp[3].y - cp[0].y - cy - by;

    /*計算位於參數值t的曲線點*/

    tSquared = t * t;
    tCubed = tSquared * t;

    result.x = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].x;
    result.y = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].y;

    return result;
}

/*
 ComputeBezier以控制點cp所產生的曲線點，填入Point2D結構的陣列。
 呼叫者必須分配足夠的記憶體以供輸出結果，其為<sizeof(Point2D) numberOfPoints>
*/

function ComputeBezier(cp, numberOfPoints, curve) {
    var dt;
    var i;

    dt = 1.0 / (numberOfPoints - 1);

    for (i = 0; i < numberOfPoints; i++)
        curve[i] = PointOnCubicBezier(cp, i * dt);
}

var cp = [
    new Point2D(112.93886, 28.22778), new Point2D(117.06354, 30.54294), new Point2D(118.0548, 36.8131), new Point2D(116.40717, 39.90469)
];
var numberOfPoints = 1000;
var curve = [];
ComputeBezier(cp, numberOfPoints, curve);


let result = [];
curve.forEach((item, index) => {
    let point = {
        name: index + '/' + curve.length,
        lnglat: Array.of(item.x, item.y)
    }
    result.push(point);
});
console.log(result);






