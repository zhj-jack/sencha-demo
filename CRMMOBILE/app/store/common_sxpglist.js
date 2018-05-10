/*
 * File: app/store/common_sxpglist.js
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

Ext.define('liftnet.store.common_sxpglist', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'common_sxpglist',
        fields: [
            {
                name: 'userid',
                type: 'string'
            },
            {
                name: 'username',
                type: 'string'
            },
            {
                name: 'linkphone',
                type: 'string'
            },
            {
                name: 'storageid',
                type: 'string'
            },
            {
                name: 'storagename',
                type: 'string'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;

        if(global.isWorklight()) {
            // adapter取数
            var url = '/adapters/shouxin/api/1.0/trgetmanlist';

            /*
                dutytime: '值班时间(预留)',
                userid: '用户ID'
            */

            callPostAdapter(
                url, parm,
                function(ret) {
                    me.setData(ret.data);
                    onSuccess(ret.data.length);
                },
                onFailure);
        } else {
            // 派工-演示数据
            this.setData([
                {
                    userid: 'chendafu',
                    username: '陈大福',
                    linkphone: '15626188888',
                    storageid: '001',
                    storagename: '维保一组',
                },
                {
                    userid: 'lixiaoming',
                    username: '李小明',
                    linkphone: '13802942088',
                    storageid: '002',
                    storagename: '维保一组',
                },
            ]);

                onSuccess(2);
                }
    },

    updateDat: function(onSuccess, onFailure, parm) {

    },

    filteDat: function(parm) {

    }

});