/*
 * File: app/store/NoUsed/redpoint_byplanstatus.js
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

Ext.define('liftnet.store.NoUsed.redpoint_byplanstatus', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'NoUsed.redpoint_byplanstatus',
        fields: [
            {
                name: 'count',
                type: 'string'
            },
            {
                name: 'hasstatus',
                type: 'string'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;

        if(global.isWorklight()) {
            // adapter取数
            var url = '/redpoint/api/1.0/byplanstatus';
            var userid = global.getUserId();
            var adapterParm = {userid:'用户ID'};

            callPostAdapter(
                url, adapterParm,
                function(ret) {
                    me.setData(ret.status);
                    onSuccess();
                },
            onFailure);
        } else {
            // 查询保养计划条数及是否有未读记录-演示数据
            this.setData([]);

            onSuccess();
        }
    },

    updateDat: function(onSuccess, onFailure, parm) {

    },

    filteDat: function(parm) {

    }

});