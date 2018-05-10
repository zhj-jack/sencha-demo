/*
 * File: app/store/eng_placelist.js
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

Ext.define('liftnet.store.eng_placelist', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'eng_placelist',
        fields: [
            {
                name: 'placeid'
            },
            {
                name: 'placename'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;
        parm = {userid: global.getUserId()};

        if(global.isWorklight()) {
            // adapter取数
            var url = '/adapters/firstcheck/api/1.0/dtsycslist';
            callPostAdapter(
                url, parm,
                function(ret) {
                    me.setData(ret.data);
                    onSuccess(ret.data.length);
                },
                onFailure);
        } else {

            // 获取受信来源列表-演示数据
            this.setData([
                {
                    placeid: '1',
                    placename: '住宅'
                },
                {
                    placeid: '2',
                    placename: '办公楼宇'
                },
                {
                    placeid: '3',
                    placename: '商场超市'
                },
                {
                    placeid: '4',
                    placename: '宾馆饭店'
                },
                {
                    placeid: '5',
                    placename: '交通场所'
                },
                {
                    placeid: '6',
                    placename: '医院'
                },
                {
                    placeid: '7',
                    placename: '学校'
                },
                {
                    placeid: '8',
                    placename: '文体娱场馆'
                },
                {
                    placeid: '9',
                    placename: '其他场所'
                }
            ]);
                onSuccess(9);
                }
    }

});