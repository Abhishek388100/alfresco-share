(function(){Alfresco.template.ManagePermissions=function d(){return Alfresco.template.ManagePermissions.superclass.constructor.call(this,null,"Alfresco.template.ManagePermissions")};YAHOO.extend(Alfresco.template.ManagePermissions,Alfresco.component.Base,{options:{nodeRef:null,siteId:"",rootNode:null},onComponentsLoaded:function a(){YAHOO.util.Event.onDOMReady(this.onReady,this,true)},onReady:function b(){var e=Alfresco.constants.PROXY_URI+"slingshot/doclib/node/"+this.options.nodeRef.uri;if(this.options.siteId==""){e+="?libraryRoot="+encodeURIComponent(this.options.rootNode.toString())}Alfresco.util.Ajax.jsonGet({url:e,successCallback:{fn:this._getDataSuccess,scope:this},failureMessage:"Failed to load data for permission details"})},_getDataSuccess:function c(f){if(f.json!==undefined){var e=f.json.item;YAHOO.Bubbling.fire("nodeDetailsAvailable",{nodeDetails:e,metadata:f.json.metadata})}}})})();