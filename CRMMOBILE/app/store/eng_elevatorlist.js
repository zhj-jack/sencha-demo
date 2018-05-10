/*
 * File: app/store/eng_elevatorlist.js
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

Ext.define('liftnet.store.eng_elevatorlist', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'eng_elevatorlist',
        fields: [
            {
                name: 'elevatorid'
            },
            {
                name: 'elevatorname'
            },
            {
                name: 'facid'
            },
            {
                name: 'facname'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;
        // parm = {userid: global.getUserId(),searchname:parm.searchname};

        if(global.isWorklight()) {
            // adapter取数
            var url = '/adapters/firstcheck/api/1.0/dtxhlist';
            callPostAdapter(
                url, parm,
                function(ret) {
                    if(ret.status.code!=200){
                        onFailure('读取项目电梯列表失败');
                    }else{
                        me.setData(ret.data);
                        onSuccess(ret.data.length);
                    }
                },
                function() {
                    onFailure('读取项目电梯失败');
                });
        } else {

            // 获取电梯型号列表-演示数据
            this.setData([
                {
                    elevatorid: 'elevatorid1',
                    elevatorname: 'elevatorname1',
                    facid:'facid1',
                    facname:'facname1'
                },
                {
                    elevatorid: 'elevatorid2',
                    elevatorname: 'elevatorname2',
                    facid:'facid2',
                    facname:'facname2'
                },
                {
                    elevatorid: 'elevatorid3',
                    elevatorname: 'elevatorname3',
                    facid:'facid3',
                    facname:'facname3'
                }


            ]);
                onSuccess(3);
                }
    }

});