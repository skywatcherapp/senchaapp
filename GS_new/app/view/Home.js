Ext.define('GS.view.Home', {
	extend: 'Ext.Panel',
	xtype: 'homepanel',
	
	config: {
		title: 'Home',
		cls: 'home',
		scrollable: true,
		
		html:[
			'<img src="http://staging.sencha.com/img/sencha.png" />',
            '<h1>Welcome to SkyWatcher!</h1>',
            "<p>Click on any of the tabs above to use the app.</p>",
		].join("")
	}
})