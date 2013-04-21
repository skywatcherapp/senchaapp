Ext.define('GS.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            blog: 'blog'
        },
        control: {

        }
    },
    
	showPost: function(list, index, element, record) {
		this.getBlog().push({
			xtype: 'panel',
			title: record.get('from_user'),
			createdtime: record.get('created_at'),
			picture: record.get('profile_image_url'),
			html: record.get('text'),
			scrollable: true,
			styleHtmlContent: true
		})
		console.log(record.get('text'));
	}
});