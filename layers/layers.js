var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PanchayatBoundary_2 = new ol.format.GeoJSON();
var features_PanchayatBoundary_2 = format_PanchayatBoundary_2.readFeatures(json_PanchayatBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PanchayatBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PanchayatBoundary_2.addFeatures(features_PanchayatBoundary_2);
var lyr_PanchayatBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PanchayatBoundary_2, 
                style: style_PanchayatBoundary_2,
                popuplayertitle: 'Panchayat Boundary',
                interactive: false,
                title: '<img src="styles/legend/PanchayatBoundary_2.png" /> Panchayat Boundary'
            });
var format_Ward_3 = new ol.format.GeoJSON();
var features_Ward_3 = format_Ward_3.readFeatures(json_Ward_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ward_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ward_3.addFeatures(features_Ward_3);
var lyr_Ward_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ward_3, 
                style: style_Ward_3,
                popuplayertitle: 'Ward',
                interactive: false,
    title: 'Ward<br />\
    <img src="styles/legend/Ward_3_0.png" /> CHENGAMANADU NORTH<br />\
    <img src="styles/legend/Ward_3_1.png" /> CHENGAMANADU SOUTH<br />\
    <img src="styles/legend/Ward_3_2.png" /> CHETHADY<br />\
    <img src="styles/legend/Ward_3_3.png" /> IRUNGOOR<br />\
    <img src="styles/legend/Ward_3_4.png" /> IYPPALLOOR<br />\
    <img src="styles/legend/Ward_3_5.png" /> KIZHAKKETHERUVU<br />\
    <img src="styles/legend/Ward_3_6.png" /> MELILA EAST<br />\
    <img src="styles/legend/Ward_3_7.png" /> MELILA NORTH<br />\
    <img src="styles/legend/Ward_3_8.png" /> MELILA SOUTH<br />\
    <img src="styles/legend/Ward_3_9.png" /> MELILA WEST<br />\
    <img src="styles/legend/Ward_3_10.png" /> MYLADUMPARA<br />\
    <img src="styles/legend/Ward_3_11.png" /> NADUKKUNNU EAST<br />\
    <img src="styles/legend/Ward_3_12.png" /> NADUKKUNNU WEST<br />\
    <img src="styles/legend/Ward_3_13.png" /> PALLIMUKKU<br />\
    <img src="styles/legend/Ward_3_14.png" /> PATTAMALA<br />\
    <img src="styles/legend/Ward_3_15.png" /> VILLOOR<br />' });
var format_Road_4 = new ol.format.GeoJSON();
var features_Road_4 = format_Road_4.readFeatures(json_Road_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_4.addFeatures(features_Road_4);
var lyr_Road_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_4, 
                style: style_Road_4,
                popuplayertitle: 'Road',
                interactive: false,
    title: 'Road<br />\
    <img src="styles/legend/Road_4_0.png" /> CART TRACK IN PLAINS<br />\
    <img src="styles/legend/Road_4_1.png" /> DISTRICT ROAD<br />\
    <img src="styles/legend/Road_4_2.png" /> STATE HIGHWAY<br />\
    <img src="styles/legend/Road_4_3.png" /> VILLAGE ROAD<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_PanchayatBoundary_2.setVisible(true);lyr_Ward_3.setVisible(true);lyr_Road_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_PanchayatBoundary_2,lyr_Ward_3,lyr_Road_4];
lyr_PanchayatBoundary_2.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_Ward_3.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_Road_4.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_PanchayatBoundary_2.set('fieldImages', {'id': '', 'name': '', });
lyr_Ward_3.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_Road_4.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_PanchayatBoundary_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_Ward_3.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'no label', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_Road_4.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_Road_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});