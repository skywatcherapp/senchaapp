Ext.define('GS.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'top',
		
        items: [
            {
				xtype: 'homepanel'
			},
			{
				xtype: 'blog'
			},
			{
				xtype: 'contactform'
			}
        ]
    }
});
