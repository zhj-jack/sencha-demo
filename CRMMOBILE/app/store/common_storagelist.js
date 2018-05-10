/*
 * File: app/store/common_storagelist.js
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

Ext.define('liftnet.store.common_storagelist', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'common_storagelist',
        fields: [
            {
                name: 'storageId',
                type: 'string'
            },
            {
                name: 'storageName',
                type: 'string'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;

        if(global.isWorklight()) {
            // adapter取数
            var url = '/adapters/common/api/1.0/storagelist';
            var userid = global.getUserId();
            var adapterParm = {userid: userid};

            callPostAdapter(
                url, adapterParm,
                function(ret) {
                    me.setData(ret.data);
                    onSuccess(ret.data.length);
                },
                onFailure);
        } else {

            // 获取司/站别列表-演示数据
            this.setData([
                {
                    storageId: '001',
                    storageName: '广州司/天河站'
                },
                {
                    storageId: '002',
                    storageName: '广州司/越秀站'
                },
                {
                    storageId: '003',
                    storageName: '广州司/海珠站'
                },
                {
                    storageId: '004',
                    storageName: '广州司/荔湾站'
                },
                {
                    storageId: '005',
                    storageName: '广州司/白云站'
                }
            ]);

            onSuccess();
        }
    }

});