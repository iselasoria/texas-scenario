var wms_layers = [];


    var projection_Light_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_Light_0 = projection_Light_0.getExtent();
    var size_Light_0 = ol.extent.getWidth(projectionExtent_Light_0) / 256;
    var resolutions_Light_0 = new Array(14);
    var matrixIds_Light_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Light_0[z] = size_Light_0 / Math.pow(2, z);
        matrixIds_Light_0[z] = z;
    }
    var lyr_Light_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://api.mapbox.com/styles/v1/atlasofcoffee/cihl4t8x00003sikx987wn90l/wmts?access_token=pk.eyJ1IjoiYXRsYXNvZmNvZmZlZSIsImEiOiJjaWhsNGpuZzIwNmt1dTJqN2pjYWk1YnlsIn0.DlFA1wmH6CNrxxXBySX5rg",
    attributions: ' ',
                                "layer": "cihl4t8x00003sikx987wn90l",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_Light_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Light_0),
                resolutions: resolutions_Light_0,
                matrixIds: matrixIds_Light_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Light",
                            opacity: 1.0,
                            
                            
                          });
var format_CBSABoundary_1 = new ol.format.GeoJSON();
var features_CBSABoundary_1 = format_CBSABoundary_1.readFeatures(json_CBSABoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBSABoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBSABoundary_1.addFeatures(features_CBSABoundary_1);
var lyr_CBSABoundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBSABoundary_1, 
                style: style_CBSABoundary_1,
                interactive: true,
                title: '<img src="styles/legend/CBSABoundary_1.png" /> CBSA Boundary'
            });
var format_BundledTerritories_2 = new ol.format.GeoJSON();
var features_BundledTerritories_2 = format_BundledTerritories_2.readFeatures(json_BundledTerritories_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BundledTerritories_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BundledTerritories_2.addFeatures(features_BundledTerritories_2);
var lyr_BundledTerritories_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BundledTerritories_2, 
                style: style_BundledTerritories_2,
                interactive: true,
                title: '<img src="styles/legend/BundledTerritories_2.png" /> Bundled Territories'
            });
var format_Texas_3 = new ol.format.GeoJSON();
var features_Texas_3 = format_Texas_3.readFeatures(json_Texas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Texas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Texas_3.addFeatures(features_Texas_3);
var lyr_Texas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Texas_3, 
                style: style_Texas_3,
                interactive: false,
                title: '<img src="styles/legend/Texas_3.png" /> Texas'
            });
var format_StateBoundaryLine_4 = new ol.format.GeoJSON();
var features_StateBoundaryLine_4 = format_StateBoundaryLine_4.readFeatures(json_StateBoundaryLine_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateBoundaryLine_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateBoundaryLine_4.addFeatures(features_StateBoundaryLine_4);
var lyr_StateBoundaryLine_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StateBoundaryLine_4, 
                style: style_StateBoundaryLine_4,
                interactive: false,
                title: '<img src="styles/legend/StateBoundaryLine_4.png" /> State Boundary Line'
            });
var format_TexasScenarioSites_5 = new ol.format.GeoJSON();
var features_TexasScenarioSites_5 = format_TexasScenarioSites_5.readFeatures(json_TexasScenarioSites_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TexasScenarioSites_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TexasScenarioSites_5.addFeatures(features_TexasScenarioSites_5);
var lyr_TexasScenarioSites_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TexasScenarioSites_5, 
                style: style_TexasScenarioSites_5,
                interactive: true,
                title: '<img src="styles/legend/TexasScenarioSites_5.png" /> Texas Scenario Sites'
            });

lyr_Light_0.setVisible(true);lyr_CBSABoundary_1.setVisible(true);lyr_BundledTerritories_2.setVisible(true);lyr_Texas_3.setVisible(true);lyr_StateBoundaryLine_4.setVisible(true);lyr_TexasScenarioSites_5.setVisible(true);
var layersList = [lyr_Light_0,lyr_CBSABoundary_1,lyr_BundledTerritories_2,lyr_Texas_3,lyr_StateBoundaryLine_4,lyr_TexasScenarioSites_5];
lyr_CBSABoundary_1.set('fieldAliases', {'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'MEMI': 'MEMI', 'MTFCC': 'MTFCC', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'territory': 'territory', });
lyr_BundledTerritories_2.set('fieldAliases', {'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'MEMI': 'MEMI', 'MTFCC': 'MTFCC', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'territory': 'territory', });
lyr_Texas_3.set('fieldAliases', {'FID': 'FID', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'STATE_ABBR': 'STATE_ABBR', 'STATE_FIPS': 'STATE_FIPS', 'ORDER_ADM': 'ORDER_ADM', 'MONTH_ADM': 'MONTH_ADM', 'DAY_ADM': 'DAY_ADM', 'YEAR_ADM': 'YEAR_ADM', 'TYPE': 'TYPE', 'POP': 'POP', 'SQ_MILES': 'SQ_MILES', 'PRIM_MILES': 'PRIM_MILES', 'Shape_Leng': 'Shape_Leng', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_StateBoundaryLine_4.set('fieldAliases', {'FID': 'FID', 'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'STATE_ABBR': 'STATE_ABBR', 'STATE_FIPS': 'STATE_FIPS', 'ORDER_ADM': 'ORDER_ADM', 'MONTH_ADM': 'MONTH_ADM', 'DAY_ADM': 'DAY_ADM', 'YEAR_ADM': 'YEAR_ADM', 'TYPE': 'TYPE', 'POP': 'POP', 'SQ_MILES': 'SQ_MILES', 'PRIM_MILES': 'PRIM_MILES', 'Shape_Leng': 'Shape_Leng', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_TexasScenarioSites_5.set('fieldAliases', {'id': 'id', 'store_num': 'store_num', 'store_name': 'store_name', 'franchisee': 'franchisee', 'territory': 'territory', });
lyr_CBSABoundary_1.set('fieldImages', {'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'MEMI': 'TextEdit', 'MTFCC': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'territory': 'TextEdit', });
lyr_BundledTerritories_2.set('fieldImages', {'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'MEMI': 'TextEdit', 'MTFCC': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'territory': 'TextEdit', });
lyr_Texas_3.set('fieldImages', {'FID': 'Range', 'OBJECTID': 'Range', 'NAME': 'TextEdit', 'STATE_ABBR': 'TextEdit', 'STATE_FIPS': 'TextEdit', 'ORDER_ADM': 'Range', 'MONTH_ADM': 'TextEdit', 'DAY_ADM': 'Range', 'YEAR_ADM': 'Range', 'TYPE': 'TextEdit', 'POP': 'Range', 'SQ_MILES': 'TextEdit', 'PRIM_MILES': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_StateBoundaryLine_4.set('fieldImages', {'FID': 'Range', 'OBJECTID': 'Range', 'NAME': 'TextEdit', 'STATE_ABBR': 'TextEdit', 'STATE_FIPS': 'TextEdit', 'ORDER_ADM': 'Range', 'MONTH_ADM': 'TextEdit', 'DAY_ADM': 'Range', 'YEAR_ADM': 'Range', 'TYPE': 'TextEdit', 'POP': 'Range', 'SQ_MILES': 'TextEdit', 'PRIM_MILES': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_TexasScenarioSites_5.set('fieldImages', {'id': 'TextEdit', 'store_num': 'TextEdit', 'store_name': 'TextEdit', 'franchisee': 'TextEdit', 'territory': 'TextEdit', });
lyr_CBSABoundary_1.set('fieldLabels', {'CSAFP': 'no label', 'CBSAFP': 'no label', 'GEOID': 'no label', 'NAME': 'inline label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'MEMI': 'no label', 'MTFCC': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'territory': 'no label', });
lyr_BundledTerritories_2.set('fieldLabels', {'CSAFP': 'no label', 'CBSAFP': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'MEMI': 'no label', 'MTFCC': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'territory': 'header label', });
lyr_Texas_3.set('fieldLabels', {'FID': 'no label', 'OBJECTID': 'no label', 'NAME': 'no label', 'STATE_ABBR': 'no label', 'STATE_FIPS': 'no label', 'ORDER_ADM': 'no label', 'MONTH_ADM': 'no label', 'DAY_ADM': 'no label', 'YEAR_ADM': 'no label', 'TYPE': 'no label', 'POP': 'no label', 'SQ_MILES': 'no label', 'PRIM_MILES': 'no label', 'Shape_Leng': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_StateBoundaryLine_4.set('fieldLabels', {'FID': 'no label', 'OBJECTID': 'no label', 'NAME': 'header label', 'STATE_ABBR': 'no label', 'STATE_FIPS': 'no label', 'ORDER_ADM': 'no label', 'MONTH_ADM': 'no label', 'DAY_ADM': 'no label', 'YEAR_ADM': 'no label', 'TYPE': 'no label', 'POP': 'no label', 'SQ_MILES': 'no label', 'PRIM_MILES': 'no label', 'Shape_Leng': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_TexasScenarioSites_5.set('fieldLabels', {'id': 'no label', 'store_num': 'no label', 'store_name': 'inline label', 'franchisee': 'header label', 'territory': 'inline label', });
lyr_TexasScenarioSites_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});