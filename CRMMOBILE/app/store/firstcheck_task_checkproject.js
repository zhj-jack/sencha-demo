/*
 * File: app/store/firstcheck_task_checkproject.js
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

Ext.define('liftnet.store.firstcheck_task_checkproject', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'firstcheck_task_checkproject',
        fields: [
            {
                name: 'lifttype'
            },
            {
                name: 'jnum'
            },
            {
                name: 'projecttype'
            },
            {
                name: 'ctype'
            },
            {
                name: 'projectcontent'
            },
            {
                name: 'checkresult'
            },
            {
                name: 'checkverdict'
            }
        ]
    },

    count: function(parm) {
        var count = 0;
        var data = this.getData();
        for(var i=0,length = data.length; i<length;i++){
            if(data.items[i].data.checkverdict===parm){
                count++;
            }
        }
        return count;
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;

        if(global.isWorklight()) {
            // adapter取数
            var url = '/adapters/firstcheck/api/1.0/sjjyxmlist';
            var userid = global.getUserId();
            var adapterParm = {userid:userid,typeid:parm.typeid};

            callPostAdapter(
                url, adapterParm,
                function(ret) {
                    me.setData(ret.data);
                    onSuccess();
                },
                onFailure);
        } else {
            me.setData([
                {
                                    lifttype:'D',
                                    jnum:'3',
                                    projecttype:'C',
                                    ctype:'机房(机器设备间)及相关设备',
                                    projectcontent:'2.10 紧急操作装置(1)b.松闸扳手与盘车手轮',
                                    checkresult:'checkresult2',
                                    checkverdict:'/'
                }
            ]);
                    onSuccess();
        }
    }

});