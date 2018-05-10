/*
 * File: app/store/eng_insurecontract.js
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

Ext.define('liftnet.store.eng_insurecontract', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        storeId: 'eng_insurecontract',
        fields: [
            {
                name: 'insurancejnlno'
            },
            {
                name: 'contractid'
            },
            {
                name: 'acceptanceunit'
            },
            {
                name: 'contractnum'
            },
            {
                name: 'contractamt'
            },
            {
                name: 'htdetaillist'
            },
            {
                name: 'liftinfo'
            },
            {
                name: 'claimsphone'
            },
            {
                name: 'signdate'
            },
            {
                name: 'insurancestartdate'
            },
            {
                name: 'insuranceenddate'
            },
            {
                name: 'insurancemanager'
            },
            {
                name: 'linkphone'
            },
            {
                name: 'remark'
            },
            {
                name: 'status'
            },
            {
                name: 'creator'
            },
            {
                name: 'createmess'
            },
            {
                name: 'createdeptid'
            },
            {
                name: 'createdate'
            }
        ]
    },

    loadDat: function(onSuccess, onFailure, parm) {
        var me = this;
        if(global.isWorklight()) {
            // adapter取数
            var url = '/adapters/bxcontract/api/1.0/bxdetail';
            var adapterparm = {
                userid:global.getUserId(),
                insurancejnlno:parm.insurancejnlno
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
                    contractid:'BX160427007',
                    acceptanceunit:'中国平安',
                    signdate:'2016-04-04',
                    insurancestartdate:'2016-04-05',
                    insuranceenddate:'2017-04-05',
                    htdetaillist:[
                        {
                            contractid:'WB1600022',
                            projectname:'万科四季集团',
                            custname:'万科广场',
                            projectaddress:'广州市荔湾区黄沙大道144号',
                            nums:'8'
                        },
                        {
                            contractid:'WB1600023',
                            projectname:'万科集团',
                            custname:'万科广场',
                            projectaddress:'广州市荔湾区多宝路一号',
                            nums:'8'
                        },
                        {
                            contractid:'WB1600024',
                            projectname:'万科集团',
                            custname:'万科广场',
                            projectaddress:'广州市荔湾区多宝路一号',
                            nums:'8'
                        },
                    ],
                    liftinfo:[
                        {
                            contracted:'WB1600014',
                            prodno:'3110-440103-201512-0001',
                            liftno:'A1',
                            startdate:'2015-10-10',
                            enddate:'2016-10-10',
                            liftbrand:'东南电梯',
                            liftstyle:'TJY320',
                            fsd:'15/15/15',
                            amt:'200.00',
                            outdan:'否',
                            dannum:'0',
                            remark:'remark',

                        },
                        {
                            contracted:'WB1600014',
                            prodno:'3110-440103-201512-0002',
                            liftno:'A2',
                            startdate:'2015-10-10',
                            enddate:'2016-10-10',
                            liftbrand:'东南电梯',
                            liftstyle:'TJY320',
                            fsd:'10/12/15',
                            amt:'200.00',
                            outdan:'是',
                            dannum:'0',
                            remark:'',

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
        var isOutdan = {
            '是':'red',
            '否':''
        };
        var liftinfo = data[0].liftinfo;
        var length = liftinfo.length;
        for(var i = 0; i<length; i++){
            if(liftinfo[i].remark===''){
                liftinfo[i].height='120px';
            }else{
                liftinfo[i].height='140px';
            }
            liftinfo[i].outdanColor = isOutdan[liftinfo[i].outdan];
            liftinfo[i].amt = '¥'+liftinfo[i].amt;
        }

        return data;
    }

});