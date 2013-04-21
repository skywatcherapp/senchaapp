Ext.define('Ext.ux.GMapPanel', {
    extend: 'Ext.Panel',
	xtype: 'map',
		
	config: {
		title: 'SkyWatchers Nearby',
		layout: 'card'
		items: [{
			xtype: 'gmap',
			Ext.Map({
				title: 'Map',
				useCurrentLocation: true,
				mapOptions: {
					zoom: 12
				}
			})
		}
	}
})