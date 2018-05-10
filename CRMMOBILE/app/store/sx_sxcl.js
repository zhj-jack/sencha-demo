/*
 * File: app/store/sx_sxcl.js
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

Ext.define('liftnet.store.sx_sxcl', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'sx_sxcl',
        fields: [
            {
                name: 'userid'
            },
            {
                name: 'trno'
            },
            {
                name: 'flag'
            },
            {
                name: 'lon'
            },
            {
                name: 'lat'
            },
            {
                name: 'addr'
            },
            {
                name: 'redeployed'
            }
        ]
    },

    updateDat: function(onSuccess, onFailure, parm) {
        var me = this;
        console.log('调用故障处理接口：');
        console.log(parm);
        if(global.isWorklight()) {
            var url = '/adapters/shouxin/api/1.0/tropration';
            callPostAdapter(
                url, parm,
                function(ret) {
                    if(ret.status.code===200) {
                        onSuccess(ret.trno);
                    } else {
                        console.log(ret.status.info);
                        onFailure(ret.status.info);
                    }
                },
                function() {
                    onFailure('(未知)');
                }
            );
        } else {
            onSuccess('TRNO-TEST12345');
        }
    }

});