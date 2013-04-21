Ext.define('GS.view.Blog', {
	extend: 'Ext.navigation.View',
	xtype: 'blog',
	
	config: {
		title: 'Local SkyWatchers',
		
		items: {
			xtype: 'list',
			useSimpleItems: false,
            variableHeights: true,
            infinite: true,
            disableSelection: true,
            allowDeselect: false,

            plugins: [
                { xclass: 'Ext.plugin.ListPaging' },
                { xclass: 'Ext.plugin.PullRefresh' }
            ],
            emptyText: '<p class="no-searches">No tweets found matching that search</p>',
			
			itemTpl: Ext.create('Ext.XTemplate',
                '<div>',
				'<table border="0">',
				'<tr>',
				'<td rowspan="2"><img src="{profile_image_url}" /></td>',
				'<td>&nbsp;&nbsp;&nbsp;&nbsp;</td>',
				'<td><b>{from_user}</b></td>',
				'</tr>',
				'<tr>',
				'<td>&nbsp;&nbsp;&nbsp;&nbsp;</td>',
				'<td>{text}</td>',
				'</tr>',
				'</table>',
                '</div>'
			),
			title: 'Recent Tweets',
			
			store: {
				autoLoad: true,
				fields: ['created_at', 'profile_image_url', 'from_user', 'text'],
				
				proxy: {
					type: 'jsonp',
					url: 'http://search.twitter.com/search.json?q=%23spaceapps',
                    reader: {
                        type: 'json',
                        rootProperty: 'results'
                    }
				}
			}
		}
	}
})