/*
 * File: app/store/NoUsed/by_byjd.js
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

Ext.define('liftnet.store.NoUsed.by_byjd', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'NoUsed.by_byjd',
        fields: [
            {
                name: 'unitname',
                type: 'string'
            },
            {
                name: 'pordid',
                type: 'string'
            },
            {
                name: 'worktype',
                type: 'string'
            },
            {
                name: 'address',
                type: 'string'
            },
            {
                name: 'gotime',
                type: 'string'
            },
            {
                name: 'arrivetime',
                type: 'string'
            },
            {
                name: 'finishtime',
                type: 'string'
            },
            {
                name: 'B_SetOutStatus',
                type: 'string'
            },
            {
                name: 'B_SetOutDate',
                type: 'string'
            },
            {
                name: 'B_SetOutTime',
                type: 'string'
            },
            {
                name: 'B_SetOutAddress',
                type: 'string'
            },
            {
                name: 'B_ArriveStatus',
                type: 'string'
            },
            {
                name: 'B_ArriveDate',
                type: 'string'
            },
            {
                name: 'B_ArriveTime',
                type: 'string'
            },
            {
                name: 'B_ArriveAddress',
                type: 'string'
            },
            {
                name: 'B_FinishStatus',
                type: 'string'
            },
            {
                name: 'B_FinishDate',
                type: 'string'
            },
            {
                name: 'B_FinishTime',
                type: 'string'
            },
            {
                name: 'B_FinishAddress',
                type: 'string'
            },
            {
                name: 'qrcodeimg',
                type: 'string'
            },
            {
                name: 'missionimg',
                type: 'string'
            },
            {
                name: 'status',
                type: 'string'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;

        if(global.isWorklight()) {
            // adapter取数
            var url = '/by/api/1.0/byjd/'+'任务号';
            var userid = global.getUserId();
            var adapterParm = {userid:'用户ID', planid:'保养计划明细行号'};

            callPostAdapter(
                url, adapterParm,
                function(ret) {
                    me.setData(ret.data);
                    onSuccess();
                },
            onFailure);
        } else {
            // 保养任务进度-演示数据
            this.setData();

                onSuccess();
            }
    },

    updateDat: function(onSuccess, onFailure, parm) {

    },

    filteDat: function(parm) {

    }

});