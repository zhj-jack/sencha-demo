/*
 * File: app/store/by_maintainReceptionSub.js
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

Ext.define('liftnet.store.by_maintainReceptionSub', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'by_maintainReceptionSub',
        fields: [
            {
                name: 'code'
            },
            {
                name: 'info'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        console.log(parm);

        var me = this;

        if(global.isWorklight()) {
            var url = '/adapters/byrw/api/1.0/byrwrecoperation';

            callPostAdapter(
                url, parm,
                function(ret) {
                    me.setData(ret.status);
                    onSuccess();
                },
            onFailure);
        } else {
            onSuccess();
        }
    }

});