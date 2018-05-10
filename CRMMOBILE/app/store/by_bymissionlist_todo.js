/*
 * File: app/store/by_bymissionlist_todo.js
 *
 * This file was generated by Sencha Architect version 3.5.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('liftnet.store.by_bymissionlist_todo', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'by_bymissionlist_todo',
        fields: [
            {
                name: 'BillNo'
            },
            {
                name: 'rowid'
            },
            {
                name: 'ServiceNo'
            },
            {
                name: 'WorkDate'
            },
            {
                name: 'worktype'
            },
            {
                name: 'WorkWeekDay'
            },
            {
                name: 'WorkSTime'
            },
            {
                name: 'WorkETime'
            },
            {
                name: 'WorkAddress'
            },
            {
                name: 'ProdID'
            },
            {
                name: 'url'
            },
            {
                name: 'taskstate'
            },
            {
                name: 'nextstate'
            },
            {
                name: 'stateUrl'
            },
            {
                name: 'stateColor'
            },
            {
                name: 'titleIcon'
            },
            {
                name: 'titleColor'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;
        this.setData([]);
        //console.log(parm);

        if(global.isWorklight()) {// adapter取数
            var url = '/adapters/by/api/1.0/bymissionlist';
            callPostAdapter(
                url, parm,
                function(ret) {
                    var d = me.decoDat(ret.data);
                    me.setData(d);
                    onSuccess(d.length);
                },
                onFailure);
        } else {
            // 演示数据
            var d = this.decoDat([
                {
                    BillNo:		'BY2015000001',
                    rowid:		'0',
                    ServiceNo:	'SNO-123456',
                    WorkDate:	'2015-12-01',
                    worktype:	'保养',
                    WorkWeekDay:'二',
                    WorkSTime:	'08:00',
                    WorkETime:	'10:00',
                    WorkAddress:'广州凯旋大酒店有限公司',
                    ProdID:		'3110-440100-20030',
                    url:		'查询明细url',
                    taskstate:	'未开始',
                    nextstate: [
                        {name:"到场",url:"http://127.0.0.1/到场"}
                    ],
                    stateColor:	'',
                    stateUrl:	'',
                    titleIcon:	'',
                    titleColor:	''
                },
                {
                    BillNo:		'BY2015000002',
                    rowid:		'0',
                    ServiceNo:	'SNO-123456',
                    WorkDate:	'2015-12-01',
                    worktype:	'保养',
                    WorkWeekDay:'二',
                    WorkSTime:	'08:00',
                    WorkETime:	'10:00',
                    WorkAddress:'广州市荔湾区黄沙大道144号大冶有色大厦',
                    ProdID:		'3110-440100-20030',
                    url:		'查询明细url',
                    taskstate:	'保养中',
                    nextstate: [
                        {name:"完工",url:"http://127.0.0.1/完工"}
                    ],
                    stateColor:	'',
                    stateUrl:	'',
                    titleIcon:	'',
                    titleColor:	''
                },
                /*
                {
                    BillNo:		'BY2015000003',
                    rowid:		'0',
                    ServiceNo:	'SNO-123456',
                    WorkDate:	'2015-12-01',
                    worktype:	'保养',
                    WorkWeekDay:'二',
                    WorkSTime:	'08:00',
                    WorkETime:	'10:00',
                    WorkAddress:'广州市荔湾区黄沙大道4号逸翠湾',
                    ProdID:		'3110-440100-20030',
                    url:		'查询明细url',
                    taskstate:	'已完工',
                    nextstate:	[],
                    stateColor:	'',
                    stateUrl:	'',
                    titleIcon:	'',
                    titleColor:	''
                }
                */
            ]);
                this.setData(d);
                onSuccess(d.length);
                }
    },

    decoDat: function(data) {
        // stateUrl:	状态的图片地址
        // stateColor:	状态的颜色
        // titleIcon:	标题的图标
        // titleColor:	标题的颜色

        if(!data) return([]);

        for(var i=0;i<data.length; i++) {
            switch(data[i].taskstate) {
                case '未开始':
                    data[i].stateColor = 'liftnet-fontColor-red';
                    data[i].stateUrl   = 'resources/images/maintenance_icon01.png';
                    data[i].titleIcon  = '<i class="ln ln-message1"></i>';
                    data[i].titleColor = 'liftnet-fontColor-red';
                    break;

                case '保养中':
                    data[i].stateColor = 'liftnet-fontColor-blue';
                    data[i].stateUrl   = 'resources/images/maintenance_icon02.png';
                    data[i].titleIcon  = '<i class="ln ln-message1"></i>';
                    data[i].titleColor = 'liftnet-fontColor-blue';
                    break;

                case '已完工':
                    data[i].stateColor = 'liftnet-fontColor-orange';
                    data[i].stateUrl   = 'resources/images/maintenance_icon03.png';
                    data[i].titleIcon  = '<i class="ln ln-message1"></i>';
                    data[i].titleColor = 'liftnet-fontColor-orange';
                    break;
            }
        }

        return(data);
    },

    filteDat: function(parm) {
        this.clearFilter();

        if(parm!=='') {
            this.filterBy(function(item) {
                var s = item.get("WorkAddress") + ' ' + item.get("ProdID") + ' ' + item.get("workDate");
                return (s.toUpperCase().indexOf(parm.toUpperCase())>=0);
            });
        }
    }

});