/*
 * File: app/store/NoUsed/aud_byzyaud.js
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

Ext.define('liftnet.store.NoUsed.aud_byzyaud', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'NoUsed.aud_byzyaud',
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
            var url = '/aud/api/1.0/byzyaud/'+'任务号';
            var userid = global.getUserId();
            var adapterParm = {userid: '用户ID',taskid: '任务号',audflag: '签收标记'};

            callPostAdapter(
                url, adapterParm,
                function(ret) {
                    me.setData(ret.status);
                    onSuccess();
                },
            onFailure);
        } else {
            // 保养作业管理签收-演示数据
            this.setData([]);

            onSuccess();
        }
    },

    updateDat: function(onSuccess, onFailure, parm) {

    },

    filteDat: function(parm) {

    }

});