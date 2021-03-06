//创建地图
var map = new AMap.Map('container', {
    zoom: 11,
    center: center
});

AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function (PathSimplifier, $) {

    if (!PathSimplifier.supportCanvas) {
        alert('当前环境不支持 Canvas！');
        return;
    }

    var pathSimplifierIns = new PathSimplifier({
        zIndex: 100,
        //autoSetFitView:false,
        map: map, //所属的地图实例

        getPath: function (pathData, pathIndex) {

            return pathData.path;
        },
        getHoverTitle: function (pathData, pathIndex, pointIndex) {

            if (pointIndex >= 0) {
                //point
                return pathData.name + '，点：' + pointIndex + '/' + pathData.path.length;
            }

            return pathData.name + '，点数量' + pathData.path.length;
        },
        renderOptions: {

            renderAllPointsIfNumberBelow: 100 //绘制路线节点，如不需要可设置为-1
        }
    });

    window.pathSimplifierIns = pathSimplifierIns;

    //设置数据
    pathSimplifierIns.setData([{
        name: '路线0',
        path: path
    }]);

    //对第一条线路（即索引 0）创建一个巡航器
    var navg1 = pathSimplifierIns.createPathNavigator(0, {
        loop: true, //循环播放
        speed: 1000, //巡航速度，单位千米/小时
        pathNavigatorStyle: {
            width: 100,
            height: 100,
            content: PathSimplifier.Render.Canvas.getImageContent(
                './climb.png',
                function onload() {
                    pathSimplifierIns.renderLater();
                },
                function onerror(e) {
                    alert('图片加载失败！');
                })
            // contentImagePath: './climb.png'
        }
    });

    navg1.start();
});

AMapUI.loadUI(['misc/MarkerList', 'overlay/AwesomeMarker', 'overlay/SimpleInfoWindow'],
    function (MarkerList, AwesomeMarker, SimpleInfoWindow) {

        //即jQuery/Zepto
        var $ = MarkerList.utils.$;

        var defaultIconStyle = 'red', //默认的图标样式
            hoverIconStyle = 'green', //鼠标hover时的样式
            selectedIconStyle = 'purple' //选中时的图标样式
        ;

        //默认的图标标签
        var defaultIconLabel = {
                style: {
                    color: '#333',
                    fontSize: '14px'
                }
            },
            //鼠标hover时的标签
            hoverIconLabel = {
                style: {
                    color: '#ffffff',
                    fontSize: '14px'
                }
            },
            //选中时的图标标签
            selectedIconLabel = {
                style: {
                    color: '#c3a083',
                    fontSize: '14px'
                }
            }
        ;

        var markerList = new MarkerList({
            //关联的map对象
            map: map,
            //列表的dom容器的id
            listContainer: 'my-list',
            //选中状态（通过点击列表或者marker）时在Marker和列表节点上添加的class，可以借此编写css控制选中时的展示效果
            selectedClassNames: 'selected',
            //返回数据项的Id
            getDataId: function (dataItem, index) {
                //index表示该数据项在数组中的索引位置，从0开始，如果确实没有id，可以返回index代替
                return dataItem.id;
            },
            //返回数据项的位置信息，需要是AMap.LngLat实例，或者是经纬度数组，比如[116.789806, 39.904989]
            getPosition: function (dataItem) {
                return dataItem.position;
            },
            //返回数据项对应的Marker
            getMarker: function (dataItem, context, recycledMarker) {

                //存在可回收利用的marker
                if (recycledMarker) {
                    //直接更新内容返回
                    // recycledMarker.setLabel(label);
                    return recycledMarker;
                }

                //返回一个新的Marker
                return new AwesomeMarker({
                    //设置awesomeIcon
                    awesomeIcon: 'photo',
                    containerClassNames: 'my-marker',
                    iconLabel: defaultIconLabel,
                    iconStyle: defaultIconStyle,
                    map: map,
                });
            },
            //返回数据项对应的infoWindow
            getInfoWindow: function (dataItem, context, recycledInfoWindow) {

                var tpl = '<p><%- dataItem.id %>：<%- dataItem.infoWinContent %><p>';

                //MarkerList.utils.template支持underscore语法的模板
                var content = MarkerList.utils.template(tpl, {
                    dataItem: dataItem,
                    dataIndex: context.index
                });

                if (recycledInfoWindow) {
                    //存在可回收利用的infoWindow, 直接更新内容返回
                    // recycledInfoWindow.setContent(content);
                    recycledInfoWindow.setInfoTitle(dataItem.name);
                    recycledInfoWindow.setInfoBody(dataItem.address);
                    return recycledInfoWindow;
                }

                //返回一个新的InfoWindow
                return new SimpleInfoWindow({
                    infoTitle: dataItem.name,
                    infoBody: dataItem.address,
                    offset: new AMap.Pixel(0, -37)
                });

                // return new AMap.InfoWindow({
                //     offset: new AMap.Pixel(0, -23),
                //     content: content
                // });
            },
            //返回数据项对应的列表节点
            getListElement: function (dataItem, context, recycledListElement) {

                var tpl = '<p><%- dataItem.id %>：<%- dataItem.listDesc %><p>';

                var content = MarkerList.utils.template(tpl, {
                    dataItem: dataItem,
                    dataIndex: context.index
                });

                if (recycledListElement) {
                    //存在可回收利用的listElement, 直接更新内容返回
                    recycledListElement.innerHTML = content;
                    return recycledListElement;
                }

                //返回一段html，MarkerList将利用此html构建一个新的dom节点
                return '<li>' + content + '</li>';
            },
            //列表节点上监听的事件
            listElementEvents: ['click', 'mouseenter', 'mouseleave'],
            //marker上监听的事件
            markerEvents: ['click', 'mouseover', 'mouseout'],
        });

        //监听选中改变
        markerList.on('selectedChanged', function (event, info) {
            //console.log(event, info);
            if (info.selected) {

                console.log(info);

                if (info.selected.marker) {
                    //更新为选中样式
                    info.selected.marker.setIconStyle(selectedIconStyle);
                    info.selected.marker.setIconLabel(selectedIconLabel);
                }

                //选中并非由列表节点上的事件触发，将关联的列表节点移动到视野内
                if (!info.sourceEventInfo.isListElementEvent) {

                    if (info.selected.listElement) {
                        scrollListElementIntoView($(info.selected.listElement));
                    }
                }
            }

            if (info.unSelected && info.unSelected.marker) {
                //更新为默认样式
                info.unSelected.marker.setIconStyle(defaultIconStyle);
                info.unSelected.marker.setIconLabel(defaultIconLabel);
            }
        });

        // 监听Marker的鼠标移入和ListElement上的鼠标悬浮
        markerList.on('listElementMouseenter markerMouseover', function (event, record) {

            if (record && record.marker) {

                forcusMarker(record.marker);

                //this.openInfoWindowOnRecord(record);

                //非选中的id
                if (!this.isSelectedDataId(record.id)) {
                    //设置为hover样式
                    record.marker.setIconStyle(hoverIconStyle);
                    record.marker.setIconLabel(hoverIconLabel);
                    //this.closeInfoWindow();
                }
            }
        });

        //监听Marker的鼠标移出和ListElement上的鼠标悬出
        markerList.on('listElementMouseleave markerMouseout', function (event, record) {

            if (record && record.marker) {

                if (!this.isSelectedDataId(record.id)) {
                    //恢复默认样式
                    record.marker.setIconStyle(defaultIconStyle);
                    record.marker.setIconLabel(defaultIconLabel);
                }
            }
        });

        //监听Marker和ListElement上的点击
        markerList.on('markerClick listElementClick', function (event, record) {
            //console.log(event, record);
        });


        //展示该数据
        markerList.render(data);

        function forcusMarker(marker) {
            marker.setTop(true);

            //不在地图视野内
            if (!(map.getBounds().contains(marker.getPosition()))) {

                //移动到中心
                map.setCenter(marker.getPosition());
            }
        }

        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();

            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
                rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
            );
        }

        function scrollListElementIntoView($listEle) {

            if (!isElementInViewport($listEle.get(0))) {
                $('#panel').scrollTop($listEle.offset().top - $listEle.parent().offset().top);
            }

            //闪动一下
            $listEle
                .one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
                    function (e) {
                        $(this).removeClass('flash animated');
                    }).addClass('flash animated');
        }
    });

// 地图加载完成
map.on("complete", function () {
    // 无参数时，自动自适应所有覆盖物
    map.setFitView();
});
