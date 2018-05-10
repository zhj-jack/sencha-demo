/*
 * File: app/store/eng_tracktopinfo.js
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

Ext.define('liftnet.store.eng_tracktopinfo', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'eng_tracktopinfo',
        fields: [
            {
                name: 'userlocation'
            },
            {
                name: 'stuts'
            },
            {
                name: 'ltime'
            },
            {
                name: 'phone'
            },
            {
                name: 'userclass'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;
        if(global.isWorklight()) {
            // adapter取数
            var url = '/adapters/common/api/1.0/personstatus';
            var adapterparm = {userid:global.getUserId()};
            callPostAdapter(
                url, adapterparm,
                function(ret) {
                    if(ret.status.code!=200){
                        onFailure('获取人员状态失败');
                    }else{
                        me.setData(ret.data);
                        onSuccess(ret.data);
                    }
                },
                function() {
                    onFailure('获取人员状态失败');
                }
                );
        //         function(ret) {
        //             me.setData(ret.data);
        //             onSuccess(ret.data);
        //         },
        //         onFailure);
        } else {

        //     var d = [
        //         {
        //             addr:'广东省广州市荔湾区黄沙大道144号',
        //             status:'空闲',
        //             time:'2016-5-31 13:54',
        //             phone:'10086'
        //         }
        //     ];
        //     this.setData(d);
        //     onSuccess(d);
            onSuccess([]);
        }
    }

});