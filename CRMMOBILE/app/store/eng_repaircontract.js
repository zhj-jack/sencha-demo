/*
 * File: app/store/eng_repaircontract.js
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

Ext.define('liftnet.store.eng_repaircontract', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'eng_repaircontract',
        fields: [
            {
                name: 'a'
            },
            {
                name: 'b'
            },
            {
                name: 'c'
            },
            {
                name: 'd'
            },
            {
                name: 'e'
            },
            {
                name: 'ghcl'
            },
            {
                name: 'rgfy'
            },
            {
                name: 'fkfs'
            },
            {
                name: 'liftinfo'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;
        if(global.isWorklight()) {
            // adapter取数
            var url = '/adapters/wxcontract/api/1.0/wxcontractdetail';
            var adapterparm = {
                userid:global.getUserId(),

            };
            callPostAdapter(
                url, adapterparm,
                function(ret) {
                    if(ret.status.code!=200){
                        onFailure('获取合同信息失败');
                    }else{
                        var d = me.decoDat(ret.data);
                        me.setData(d);
                        onSuccess(d);
                    }
                },
                function() {
                    onFailure('获取合同信息失败');
                }
                );
        } else {

            var d = [
                {
                    a:'BX160427007',
                    b:'中国平安',
                    c:'2016-04-04',
                    d:'2016-04-05',
                    e:'2017-04-05',
                    rgfy:[
                        {
                            gclx:'gclx1',
                            dj:'dj1',
                            gcxm:'gcxm1',
                            dw:'dw1',
                            sl:'sl1',
                            je:'je1'
                        },
                        {
                            gclx:'gclx2',
                            dj:'dj2',
                            gcxm:'gcxm2',
                            dw:'dw2',
                            sl:'sl2',
                            je:'je2'
                        }
                    ],
                    fkfs:[
                        {
                            pc:'pc1',
                            clfbl:'clfbl1',
                            rgfbl:'rgfbl1',
                            sd:'sd1',
                            clfje:'clfje1',
                            rgfje:'rgfje1',
                            hjje:'hjje1'
                        },
                        {
                            pc:'pc2',
                            clfbl:'clfbl2',
                            rgfbl:'rgfbl2',
                            sd:'sd2',
                            clfje:'clfje2',
                            rgfje:'rgfje2',
                            hjje:'hjje2'
                        }
                    ],
                    ghcl:[
                        {
                            xh:'xh1',
                            dj:'dj1',
                            pjmc:'pjmc1',
                            dw:'dw1',
                            sl:'sl1',
                            je:'je1'
                        },
                        {
                            xh:'xh2',
                            dj:'dj2',
                            pjmc:'pjmc2',
                            dw:'dw2',
                            sl:'sl2',
                            je:'je2'
                        },
                        {
                            xh:'xh3',
                            dj:'dj3',
                            pjmc:'pjmc3',
                            dw:'dw3',
                            sl:'sl3',
                            je:'je3'
                        },
                    ],
                    liftinfo:[
                        {
                            dtpp:'dtpp1',
                            dtzcm:'3110-440103-201512-0001',
                            dtxh:'dtxh1',
                            th:'th1',
                            jtdtwzms:'2016-10-10',
                            fsd:'15/15/15',

                        },
                        {
                            dtpp:'dtpp2',
                            dtzcm:'3110-440103-201512-0002',
                            dtxh:'dtxh2',
                            th:'th2',
                            jtdtwzms:'2016-10-10',
                            fsd:'15/15/15',

                        },
                    ]
                }
            ];
            var data = this.decoDat(d);
            this.setData(data);
            onSuccess(data);
        }
    },

    decoDat: function(data) {
        if(!data){
            return ([]);
        }

        return data;
    }

});