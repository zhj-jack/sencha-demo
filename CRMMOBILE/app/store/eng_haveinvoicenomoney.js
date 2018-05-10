/*
 * File: app/store/eng_haveinvoicenomoney.js
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

Ext.define('liftnet.store.eng_haveinvoicenomoney', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'eng_haveinvoicenomoney',
        fields: [
            {
                name: 'jnl'
            },
            {
                name: 'projectname'
            },
            {
                name: 'money'
            },
            {
                name: 'handleUser'
            },
            {
                name: 'num'
            },
            {
                name: 'date1'
            },
            {
                name: 'date2'
            },
            {
                name: 'auditcolor'
            },
            {
                name: 'jobcolor'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;

        if(global.isWorklight()) {
            // adapter取数
            var url = '/adapters/liftnet/common/api/1.0/';
            var userid = global.getUserId();
            var adapterParm = {userid:userid};

            callPostAdapter(
                url, adapterParm,
                function(ret) {
                    me.setData(ret.data);
                    onSuccess();
                },
                onFailure);
        } else {
            this.setData([
                {
                    jnl:'SJ160415001',
                    projectname:'万科四季花园',
                    money:'3000',
                    handleUser:'handleUser1',
                    num:'第一期',
                    date1:'2015-02-12',
                    date2:'2015-05-15',
                    auditcolor:'green',
                    jobcolor:'red',
                },
                {
                    jnl:'SJ160415001',
                    projectname:'万科四季花园',
                    money:'4000',
                    handleUser:'handleUser2',
                    num:'第二期',
                    date1:'2015-02-12',
                    date2:'2015-05-15',
                    auditcolor:'green',
                    jobcolor:'red',
                },
                {
                    jnl:'SJ160415001',
                    projectname:'万科四季花园',
                    money:'5000',
                    handleUser:'handleUser3',
                    num:'第三期',
                    date1:'2015-02-12',
                    date2:'2015-05-15',
                    auditcolor:'green',
                    jobcolor:'green',
                },
                {
                    jnl:'SJ160415001',
                    projectname:'万科四季花园',
                    money:'6000',
                    handleUser:'handleUser4',
                    num:'第四期',
                    date1:'2015-02-12',
                    date2:'2015-05-15',
                    auditcolor:'green',
                    jobcolor:'green',
                },
            ]);

                onSuccess();
                }
    },

    updateDat: function(onSuccess, onFailure, parm) {

    },

    filteDat: function(parm) {
        this.clearFilter();

                if(parm!=='') {
                    this.filterBy(function(item) {
                        var s = item.get("jnl") + ' ' + item.get("projectname");
                        return (s.toUpperCase().indexOf(parm.toUpperCase())>=0);
                    });
                }
    }

});