//创建地图
var map = new AMap.Map('container', {
    zoom: 13,
    center: [104.07, 30.57],
    mapStyle: "amap://styles/macaron" //设置地图的显示样式
});

var distCountry = new AMap.DistrictLayer.Province({
    zIndex: 10, //设置图层层级
    adcode: [510000, 500000],
    // 不同省份单独配置样式
    styles: {
        '510000': { // 四川样式
            fill: {color: 'rgba(224,243,219,0.6)'},
            stroke: {color: 'rgba(60,179,113,0.8)', width: 1}
        },
        '500000': { // 重庆样式
            fill: {color: 'rgba(255,248,220,0.6)'},
            stroke: {color: 'rgba(255,165,0,0.8)', width: 1}
        }
    },
    zooms: [2, 20], //设置图层显示范围
    SOC: "CHN", //设置显示国家
    depth: 2, //设置数据显示层级，0：显示国家面，1：显示省级，当国家为中国时设置depth为2的可以显示市一级
});

//3、设置行政区图层样式
distCountry.setStyles({
    "stroke-width": 2, //描边线宽
    fill: function (data) {
        //设置区域填充颜色，可根据回调信息返回区域信息设置不同填充色
        //回调返回区域信息数据，字段包括 SOC(国家代码)、NAME_ENG(英文名称)、NAME_CHN(中文名称)等
        //国家代码名称说明参考 https://a.amap.com/jsapi_demos/static/demo-center/js/soc-list.json
        return "#ffffffe7";
    },
});

//4、将简易行政区图层添加到地图
map.add(distCountry);

map.addControl(new AMap.ToolBar({position: 'RT'}));
map.addControl(new AMap.Scale({}));

AMapUI.loadUI(['overlay/AwesomeMarker', 'overlay/SimpleInfoWindow'],
    function (AwesomeMarker, SimpleInfoWindow) {
        var infoWindow = new SimpleInfoWindow({
            offset: new AMap.Pixel(0, -31)
        });

        // 配置项：可根据你的实际情况修改
        const IMG_BASE_PATH = '../imgs/'; // 图片基础路径
        const IMG_FORMATS = ['jpg', 'png', 'jpeg', 'gif']; // 支持的图片格式
        const IMG_MAX_COUNT = 10; // 最多检测的图片数量（如 乐山大佛01 ~ 乐山大佛10）

        /**
         * 核心函数：根据title自动检测并获取所有存在的图片
         * @param {string} title 标记点标题（如"乐山大佛"）
         * @returns {Promise<Array>} 存在的图片列表
         */
        async function getAutoPhotosByTitle(title) {
            const photos = [];
            // 遍历 01 ~ IMG_MAX_COUNT，检测对应图片是否存在
            for (let i = 1; i <= IMG_MAX_COUNT; i++) {
                const index = i.toString().padStart(2, '0'); // 补零：1 → 01，2 → 02
                // 遍历所有支持的图片格式
                for (const format of IMG_FORMATS) {
                    const imgName = `${title}${index}.${format}`;
                    const imgUrl = `${IMG_BASE_PATH}${imgName}`;
                    // 检测图片是否存在
                    const exists = await checkImageExists(imgUrl);
                    if (exists) {
                        photos.push({
                            url: imgUrl,
                            alt: `${title}${index}`
                        });
                        // 同一序号只取第一个存在的格式（避免重复）
                        break;
                    }
                }
            }
            return photos;
        }

        /**
         * 辅助函数：检测图片文件是否存在
         * @param {string} url 图片地址
         * @returns {Promise<boolean>} 是否存在
         */
        function checkImageExists(url) {
            console.log("url: "+ url)
            return new Promise((resolve) => {
                const img = new Image();
                // 图片加载成功 → 存在
                img.onload = () => resolve(true);
                // 图片加载失败（404/跨域等）→ 不存在
                img.onerror = () => resolve(false);
                // 禁止缓存（避免旧缓存影响检测）
                img.src = `${url}?t=${new Date().getTime()}`;
            });
        }

        // 提前定义图片渲染的辅助函数（复用性更高）
        function renderPhotos(photos) {
            if (!photos || photos.length === 0) {
                return ''; // 无图片时返回空
            }

            // 图片容器样式：自适应宽度，内部图片横向排列（多张）或居中（单张）
            return `
                <div class="marker-photos-container" style="margin: 10px 0; display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
                    ${photos.map(photo => `
                        <img 
                            src="${photo.url}" 
                            alt="${photo.alt || '图片'}" 
                            class="marker-photo" 
                            style="width: 120px; height: 90px; object-fit: cover; border-radius: 4px; cursor: pointer;"
                            onclick="window.open('${photo.url}', '_blank')"
                        >
                    `).join('')}
                </div>
            `;
        }

        for (let item of data) {
            var marker = new AwesomeMarker({
                awesomeIcon: item.awesomeIcon,
                iconLabel: item.iconLabel,
                iconStyle: item.iconStyle,
                map: map,
                position: item.position,
                title: item.title,
                label: {
                    content: "<div class='label-content-text'>" + item.title + "</div>",
                    offset: new AMap.Pixel(0, -31)
                }
            });
            marker.type = item.type;
            marker.type = item.type;
            marker.title = item.title;
            marker.infoTitle = item.title + "<a style='margin-left: 5px;' target='_blank' href='//uri.amap.com/marker?position=" + item.position[0] + "," + item.position[1] + "&name=" + item.title + "&callnative=1'>高德</a>";
            // 核心改造：将图片渲染到 infoBody 中
            // 拼接原有 infoBody 和图片内容（如果有图片）
            // marker.infoBody = (item.infoBody || '') + renderPhotos(item.photos);
            marker.on('mouseover', function () {
                this.setTop(true);
                this.setLabel({
                    content: "<div class='label-content-text'>" + this.getTitle() + "</div>",
                    offset: new AMap.Pixel(0, -31)
                });
            });
            marker.on('mouseout', function () {
                this.setLabel();
            });
            marker.on('click',async  function (e) {
                map.setFitView([e.target]);
                // 1. 根据title自动获取所有存在的图片
                // console.log("e.target.title: "+e.target.title);
                const photos = await getAutoPhotosByTitle(e.target.title);
                // 2. 渲染图片HTML并拼接到原有infoBody
                const photoHtml = renderPhotos(photos);
                // console.log("photoHtml: "+photoHtml);
                // console.log("photoHtml: "+e.target.infoBody);
                const infoBodyContent = e.target.infoBody || ''; // 兜底为空字符串
                const finalInfoBody = infoBodyContent.trim() ? (infoBodyContent + photoHtml) : photoHtml;
                // const finalInfoBody = (e.target.infoBody || e.target.infoBody.trim()) ? (e.target.infoBody + photoHtml) : photoHtml;
                // 3. 更新弹窗内容
                infoWindow.setInfoTitle(e.target.infoTitle);
                infoWindow.setInfoBody(finalInfoBody);
                infoWindow.open(map, e.target.getPosition());
                // e.target.markOnAMAP({
                //     name: e.target.title,
                //     position: e.target.getPosition()
                // })
            });
        }
    });

function filterMarker(type) {
    // console.log('checkbox', document.getElementById("checkbox").checked);
    let showOnly = document.getElementById("checkbox").checked;
    let allMarkers = map.getAllOverlays('marker');
    allMarkers.forEach((marker) => {
        if (showOnly) {
            if (marker.type === type) {
                marker.show();
                marker.visible = true;
            } else {
                marker.hide();
                marker.visible = false;
            }
        } else {
            if (marker.type === type) {
                if (marker.visible) {
                    marker.hide();
                    marker.visible = false;
                } else {
                    marker.show();
                    marker.visible = true;
                }
            }
        }
    });
    map.setFitView();
}

//添加折线图
for (let polyline of polylines) {
    map.add(polyline);
}


// 地图加载完成
map.on("complete", function () {
    // 无参数时，自动自适应所有覆盖物
    map.setFitView();
});

