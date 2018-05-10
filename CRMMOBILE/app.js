/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({

    requires: [
        'ux.SlideActions',
        'ux.DateTime'
    ],
    stores: [
        'sx_sxlist',
        'by_bymissionlist',
        'sx_reportlist',
        'ss_userlocation',
        'setting_message',
        'setting_userinfo',
        'aud_gcbjdetail',
        'aud_wxhtdetail',
        'aud_byhtdetail',
        'aud_byzydetail',
        'aud_byjhdetail',
        'aud_kpshdetail',
        'aud_lkshdetail',
        'aud_swspdetail',
        'reportsta_sxreportsta',
        'reportsta_byreportsta',
        'reportsta_gzreportsta',
        'reportsta_wbyjreportsta',
        'reportsta_sxreportdetail_tdate',
        'reportsta_byreportdetail_tdate',
        'reportsta_gzreportdetail_tdate',
        'reportsta_wbyjreportdetail_tdate',
        'ss_guserlist',
        'ss_elesitulation',
        'mainpage_htdatasta',
        'mainpage_shdatalist',
        'mainpage_dqdatasta',
        'mainpage_shdatasta',
        'common_sxpglist',
        'mainpage_daiban',
        'sx_reportdetail',
        'setting_cuserinfo',
        'common_userdl',
        'common_eleinfo',
        'mainpage_shkeyword',
        'mainpage_notisfy',
        'mainpage_static',
        'sx_sxdetail',
        'sx_sxscens',
        'by_byrwscenscf',
        'fault_faultdetail',
        'common_storagelist',
        'common_sxsourcelist',
        'common_faulttypelist',
        'mainpage_shandqs',
        'ss_cardtime',
        'aud_ysshdetail',
        'ss_gcardtime',
        'common_cominfolist',
        'common_getserviceno',
        'common_getelevatorno',
        'common_getfacname',
        'common_getspecno',
        'common_faultsituation',
        'sx_sxlist_todo',
        'by_bymissionlist_todo',
        'sx_reportlist_todo',
        'by_bymissiondetail',
        'sx_reportdetail_trplist',
        'sx_reportdetailsv',
        'LocalStorage',
        'eng_qualitycheck_firstcheck_job',
        'eng_qualitycheck_todolist',
        'eng_qualitycheck_firstcheck_task',
        'ss_elelist',
        'common_projectlist',
        'common_MaintainTaskMan',
        'first_check_job_sj',
        'first_check_job_handler',
        'first_check_job_add_jnl',
        'first_check_job_add_deptid',
        'first_check_job_detail',
        'eng_kmfslist',
        'eng_kzfslist',
        'eng_placelist',
        'eng_arealist',
        'eng_partstypelist',
        'eng_lifttypelist',
        'eng_liftfaclist',
        'eng_firstcheckparts',
        'first_check_task_sj',
        'sx_rpscens',
        'sx_sxdetailtoreport',
        'sx_reportparts',
        'common_gzfxlist',
        'ss_projectinfolist',
        'ss_elevatorlist',
        'eng_projectlocation',
        'eng_userlocation',
        'eng_pointlocation',
        'eng_elevatorlocation',
        'eng_elevatorlist',
        'by_bymaintaintaskreclist',
        'by_maintainplanlist',
        'eng_notice_todolist',
        'eng_yearcheckelevator',
        'eng_duemoney',
        'eng_todoall',
        'eng_haveinvoicenomoney',
        'eng_duecontract',
        'eng_todotype',
        'eng_elevatorinfo',
        'by_maintainplandetail',
        'by_checkcontent',
        'by_maintainplanSub',
        'eng_tracktopinfo',
        'sx_gettrno',
        'common_getdeptlist',
        'sx_sxcl',
        'Common_repairmanlist',
        'sx_reportAuditdetail',
        'sx_report_reason',
        'firstcheck_sjfpxmlist',
        'firstcheck_sjfpdtlist',
        'firstcheck_checkmanlist',
        'eng_contractdetail',
        'eng_contracttype',
        'eng_contractquerylist',
        'eng_contractelevatorlist',
        'eng_contractclient',
        'eng_elevatorfilequerylist',
        'eng_insurecontractquerylist',
        'eng_insurecontract',
        'eng_insurecontracttabglht',
        'eng_insurecontracttabelevator',
        'eng_repaircontractquerylist',
        'eng_repaircontract',
        'eng_repaircontracttabelevator',
        'eng_repaircontracttabmaterial',
        'eng_repaircontracttabmoney',
        'eng_repaircontracttabpay',
        'cu_cudetail',
        'cu_culist',
        'eng_projecttracking_list',
        'eng_projecttracking_detail',
        'eng_projecttracking_detail_linkerlist',
        'eng_projecttracking_detail_flowinfolist',
        'eng_projecttracking_detail_bycontract',
        'eng_elevatorfile_scens',
        'eng_liftdtxhlist',
        'eng_liftglproject',
        'eng_liftdomainid',
        'eng_liftprovinciallevelid',
        'eng_liftcitylevelid',
        'eng_liftcountylevelid',
        'eng_elevatorfile_cl',
        'firstcheck_task_checkproject',
        'eng_elevatorfile_checkProno',
        'eng_firstcheck_checkpart',
        'eng_checkuser_usertype',
        'eng_firstcheck_checkuser',
        'cu_levelist',
        'cu_typelist',
        'cu_flowuserlist',
        'cu_checkcustname',
        'cu_linkerlist',
        'cu_cuscens',
        'common_userjurisdiction',
        'system_setting_message',
        'by_maintainRecption',
        'by_maintainRecDetail',
        'by_maintainReceptionSub',
        'sx_sxReceivedetail',
        'first_check_elevatorname',
        'eng_qualitycheck_reformcheck_job'
    ],
    views: [
        'Engineer.EngHome',
        'Engineer.EngFaultAdd',
        'Common.ComLogin',
        'Engineer.EngFaultAccept',
        'Common.ComHomeInformation',
        'Engineer.EngMonitorElevatorList',
        'Engineer.EngMonitorTrack',
        'Common.ComHomeNews',
        'Engineer.EngFaultReport',
        'Common.ComHomeNav',
        'Engineer.EngNavMaintainStatus',
        'Engineer.EngMonitorElevatorInfo',
        'Admin.AdmAudKpshdetail',
        'Admin.AdmMonitorElevatorDetail',
        'Admin.AdmMonitorElevatorList',
        'Admin.AdmMonitorPersonnelInformation',
        'Admin.AdmMonitorPersonnelList',
        'Admin.AdmReportByLetter',
        'Admin.AdmReportFault',
        'Admin.AdmReportMaintenance',
        'Admin.AdmReportPerformance',
        'Admin.AdmHome',
        'Admin.AdmAudKpshdetailCon',
        'Admin.AdmAudGcbjdetail',
        'Admin.AdmAudWxhtdetail',
        'Admin.AdmAudWxhtdetailCon',
        'Admin.AdmAudByhtdetail',
        'Admin.AdmAudByjhdetail',
        'Admin.AdmAudByjhdetailCon',
        'Admin.AdmAudLkshdetail',
        'Admin.AdmAudLkshdetailCon',
        'Admin.AdmAudByzydetail',
        'Admin.AdmAudByzydetailCon',
        'Admin.AdmAudSwspdetail',
        'Admin.AdmAudSwspdetailCon',
        'Common.ComConnecting',
        'Common.ComTestAdapter',
        'Common.ComSelect',
        'Engineer.EngMaintain',
        'Engineer.EngFault',
        'Engineer.EngFirstCheck',
        'Engineer.EngProjectTrackingList',
        'Engineer.EngFirstCheckJobAdd',
        'Engineer.EngFirstCheckTask',
        'Common.ComMultiSelect',
        'Engineer.EngQualityCheck',
        'Engineer.EngFirstCheckTaskAddParts',
        'Engineer.EngFault_Parts',
        'Engineer.EngMonitorProjectInfoList',
        'Engineer.EngMonitorProjectElevatorList',
        'Engineer.EngFirstCheckJobShow',
        'Engineer.EngMaintainPlan',
        'Engineer.EngMaintainPlanDetail',
        'Engineer.EngHomeTodoStatus',
        'Engineer.EngYearCheckElevator',
        'Engineer.EngDueMoney',
        'Engineer.EngHaveInvoiceNoMoney',
        'Engineer.EngDueContract',
        'Engineer.AcceptMap_adjust',
        'Engineer.EngFaultStatus',
        'Engineer.EngContractType',
        'Engineer.EngMaintainContractDetail',
        'Engineer.EngMaintainContractStatus',
        'Engineer.EngContractQuery',
        'Engineer.EngInsureContractQuery',
        'Engineer.EngInsureContractStatus',
        'Engineer.EngInsureContractDetail',
        'Engineer.EngElevatorFile',
        'Engineer.EngRepairContractQuery',
        'Engineer.EngRepairContractStatus',
        'Engineer.EngRepairContractDetail',
        'Engineer.EngCustomer',
        'Engineer.EngCustomerDisPlay',
        'Engineer.EngCustomerStatus',
        'Engineer.EngProjectTrackingStatus',
        'Engineer.EngProjectTrackingDisPlay',
        'Engineer.EngElevatorFile_Add',
        'Engineer.EngElevatorFile_Map',
        'Engineer.EngElevatorFile_Photo',
        'Engineer.EngFirstCheckJobStatus',
        'Engineer.EngFirstCheckTaskStatus',
        'Engineer.EngFirstCheckTask_Map',
        'Engineer.EngTaskPhoto',
        'Engineer.EngFirstCheckCheckUser',
        'Engineer.EngFirstCheckCheckUser2',
        'Engineer.EngCustomerAdd',
        'Engineer.EngCustomerLinker',
        'Engineer.EngFaultReportReason',
        'Engineer.EngFaultReportReasonAdd',
        'Engineer.EngFirstCheckTask_AddPartPhoto',
        'Engineer.EngReception',
        'Engineer.EngReformcheck',
        'Engineer.EngReformcheckJobAdd',
        'Engineer.EngReformcheckTask'
    ],
    controllers: [
        'Admin.AdmAuditController',
        'Engineer.EngMonitorController',
        'ComController',
        'Engineer.EngHomeController',
        'Engineer.EngMaintainController',
        'Engineer.EngFaultController',
        'Engineer.EngFaultReportController',
        'Admin.AdmHomeController',
        'Admin.AdmReportController',
        'Admin.AdmMonitorController',
        'Engineer.EngReportController',
        'Engineer.EngQualityCheckController',
        'Engineer.EngProjectTrackingController',
        'ComMultiSelectController',
        'Engineer.EngNoticeController',
        'Engineer.EngContractController',
        'Engineer.ElevatorFileController',
        'Engineer.EngCustomerController',
        'ComMapController'
    ],
    name: 'liftnet',

    launch: function() {
        /* 汉化日期选择中的月份 */
        Ext.Date.monthNames = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];

        /* 汉化提示窗口的按钮 */
        Ext.define("liftnet.overrides.MessageBox", {
            override: "Ext.MessageBox",
            statics: {
                OK    : {text: '确定', itemId: 'ok',  ui: 'action'},
                YES   : {text: '是',   itemId: 'yes', ui: 'action'},
                NO    : {text: '否',   itemId: 'no'},
                CANCEL: {text: '取消', itemId: 'cancel'},

                INFO    : Ext.baseCSSPrefix + 'msgbox-info',
                WARNING : Ext.baseCSSPrefix + 'msgbox-warning',
                QUESTION: Ext.baseCSSPrefix + 'msgbox-question',
                ERROR   : Ext.baseCSSPrefix + 'msgbox-error',

                OKCANCEL: [
                    {text: '取消', itemId: 'cancel'},
                    {text: '确定', itemId: 'ok',  ui : 'action'}
                ],
                YESNOCANCEL: [
                    {text: '取消', itemId: 'cancel'},
                    {text: '否',   itemId: 'no'},
                    {text: '是',   itemId: 'yes', ui: 'action'}
                ],
                YESNO: [
                    {text: '否', itemId: 'no'},
                    {text: '是', itemId: 'yes', ui: 'action'}
                ]
            }
        });
        Ext.define("liftnet.overrides.picker.Picker", {
            override: "Ext.picker.Picker",
            config: {
                doneButton: '确定',
                cancelButton: '取消'
            }
        });

        /* 调整iOS顶栏 */
        if(Ext.os.is.iOS) {
            Ext.Viewport.setHeight(Ext.Viewport.getWindowHeight() - 20);
            Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, {buffer: 50 });
        }

        /* 解决Android软键盘遮盖问题 */
        if (Ext.os.is.Android) {
            Ext.Viewport.on('painted', function() {
                Ext.Viewport.setHeight(window.innerHeight);
            });
        }

        /*
            <!-- index.html的header加入以下meta，可防止数字变为拨打电话的链接 -->
            <meta name="format-detection" content="telephone=no" />
        */


        Ext.create('liftnet.view.Common.ComConnecting', {fullscreen: true});
    }

});
