/*
 * File: app/store/sx_reportdetail.js
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

Ext.define('liftnet.store.sx_reportdetail', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'sx_reportdetail',
        fields: [
            {
                name: 'rpno'
            },
            {
                name: 'prono'
            },
            {
                name: 'projectname'
            },
            {
                name: 'status'
            },
            {
                name: 'trno'
            },
            {
                name: 'unitaddress'
            },
            {
                name: 'unitlinker'
            },
            {
                name: 'model'
            },
            {
                name: 'unitlinkephone'
            },
            {
                name: 'accepttime'
            },
            {
                name: 'setouttime'
            },
            {
                name: 'reachtime'
            },
            {
                name: 'finishtime'
            },
            {
                name: 'incomingman'
            },
            {
                name: 'incomingphone'
            },
            {
                name: 'repairman'
            },
            {
                name: 'istrap'
            },
            {
                name: 'traptime'
            },
            {
                name: 'trcontent'
            },
            {
                name: 'sitecondition'
            },
            {
                name: 'surveyproject'
            },
            {
                name: 'dealresult'
            },
            {
                name: 'faultproperty'
            },
            {
                name: 'rpuser'
            },
            {
                name: 'rpusername'
            },
            {
                name: 'rptime'
            },
            {
                name: 'createby'
            },
            {
                name: 'createname'
            },
            {
                name: 'createbydeptname'
            },
            {
                name: 'createbydept'
            },
            {
                name: 'reason'
            },
            {
                name: 'analysis'
            },
            {
                name: 'nextstate'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;
        var sx_reportparts = dataUtil.createStore('sx_reportparts');

        if(global.isWorklight()) {
            var url = '/adapters/rpt/api/1.0/rptdetail';
            var userid = global.getUserId();
            var adapterParm = {userid:userid, rpno:parm,trno:''};

            callPostAdapter(
                url, adapterParm,
                function(ret) {
                    console.log(ret.data[0].partslist);
                    me.setData(ret.data);
                    sx_reportparts.setData(ret.data[0].partslist);
                    onSuccess();
                },
                onFailure);
        } else {
            me.setData([{
                rpno: 'RP20151201001',	// 报告书编号
                prono:'1234-123456-123456-1234',//设备注册码
                projectname:'广州中梯物联网有限公司',//项目名称
                status: '?',	// 报告状态
                trno: 'BX20151201001',	// 受信-编号
                unitaddress:'大冶有色金属大厦903A',//用户地址(项目地址)
                unitlinker:	'黄林',//用户联系人
                model:	'',//型号
                unitlinkephone:	'13800000010',//联系电话
                accepttime: '2016-05-20 00:10',	// 接收时间
                setouttime:	'2016-05-20 00:15',	// 出发时间
                reachtime:	'2016-05-20 00:30', //到场时间
                finishtime:	'2016-05-20 00:40', //完工时间
                incomingman:'张三丰',//来电人
                incomingphone:'13800000010',//来电人电话
                repairman:	'黄林,郭守波',	//修理人
                istrap:		'1',	//是否困人
                traptime:	'2016-05-20 00:00',	//困人时间
                trcontent:	'',	//受信内容
                sitecondition:	'测试现场状态',//现场状态
                surveyproject:	'测试调查项目',//调查项目
                dealresult:		'',//处理结果
                faultproperty:	'2',//故障性质
                rpuser:			'huangl',//报告人ID
                rpusername:		'黄林',//报告人名称
                rptime:			'2016-05-21 01:00',//报告时间
                createby:		'huangl',//创建人ID
                createname:		'黄林',//创建人名
                createbydeptname:'维保一组',//创建人部门名
                createbydept:	'133044',//创建人所属部门ID
                reason:[{
                    reasonname:'测试原因1'
                },{
                    reasonname:'测试原因2'
                }],//故障原因
                analysis:[{
                    faultanalysis:"轿门锁失效",
                    faultcode:"301",
                    faulttype:"门系统",
                    ladder:""
                },{
                    faultanalysis:"厅门锁失效",
                    faultcode:"302",
                    faulttype:"门系统",
                    ladder:""
                }],//原因分析
                nextstate:[
        //             {
        //                 name : '保存'
        //             },{
        //                 name : '提交'
        //             }
                ]

            }]);
            sx_reportparts.setData([
                {
                    materialsname: '传感器',	// 配件名称
                    materialsnum: 1,	// 配件数量
                    model:	'',//规格
                    prices:	'',//单价
                    remark:	''	//备注

                },
                {
                    materialsname: '螺丝',	// 配件名称
                    materialsnum: 4	,// 配件数量
                    model:	'',//规格
                    prices:	'',//单价
                    remark:	''	//备注
                },
                {
                    materialsname: '螺帽',	// 配件名称
                    materialsnum: 4,	// 配件数量
                    model:	'',//规格
                    prices:	'',//单价
                    remark:	''	//备注
                },
                {
                    materialsname: '导线',	// 配件名称
                    materialsnum: 10,	// 配件数量
                    model:	'',//规格
                    prices:	'',//单价
                    remark:	''	//备注
                },
                {
                    materialsname: '未登记的零件一批',	// 配件名称
                    materialsnum: 1,	// 配件数量
                    model:	'',//规格
                    prices:	'',//单价
                    remark:	''	//备注
                }
            ]);
            onSuccess();
        }
    }

});