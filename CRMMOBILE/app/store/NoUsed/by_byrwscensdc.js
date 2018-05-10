/*
 * File: app/store/NoUsed/by_byrwscensdc.js
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

Ext.define('liftnet.store.NoUsed.by_byrwscensdc', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'NoUsed.by_byrwscensdc',
        fields: [
            {
                name: 'code',
                type: 'string'
            },
            {
                name: 'info',
                type: 'string'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;

        if(global.isWorklight()) {
            // adapter取数
            var url = '/by/api/1.0/byrwscensdc/'+'任务号';
            var userid = global.getUserId();
            var adapterParm = {userid:'用户ID', BillNo:'保养任务号', rowid:'明细ID', WorkType:'作业类型', WorkDate:'作业时间', ServiceNo:'设备吗', check_start:'促发状态', lat:'纬度', lon:'经度', address:'地址', Flag:'出发状态'};

            callPostAdapter(
                url, adapterParm,
                function(ret) {
                    me.setData(ret.status);
                    onSuccess();
                },
            onFailure);
        } else {
            // 确认到场:是-演示数据
            this.setData([]);

            onSuccess();
        }
    },

    updateDat: function(onSuccess, onFailure, parm) {

    },

    filteDat: function(parm) {

    }

});