/*
 * File: app/store/reportsta_sxreportsta.js
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

Ext.define('liftnet.store.reportsta_sxreportsta', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'reportsta_sxreportsta',
        fields: [
            {
                name: 'title',
                type: 'string'
            },
            {
                name: 'count',
                type: 'string'
            },
            {
                name: 'istrapcount',
                type: 'string'
            },
            {
                name: 'stattime',
                type: 'string'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;

        if(global.isWorklight()) {
            // adapter取数
            var url = '/adapters/reportsta/api/1.0/sxreportsta';
            var userid = global.getUserId();
            var adapterParm = {userid: userid};

            callPostAdapter(
                url, adapterParm,
                function(ret) {
                    me.setData(ret.data);
                    onSuccess();
                },
                onFailure);
        } else {
            // 热线受信报表-演示数据
            this.setData([
                {
                    title: '当月受信宗数',
                    count: '200',
                    istrapcount: '30',
                    stattime: '2015-11-11',
                },
                {
                    title: '上月受信宗数',
                    count: '200',
                    istrapcount: '30',
                    stattime: '2015-11-11',
                }
            ]);

            onSuccess();
        }
    },

    updateDat: function(onSuccess, onFailure, parm) {

    },

    filteDat: function(parm) {

    }

});