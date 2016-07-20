nv.addGraph(function() {
    var chart = nv.models.multiBarHorizontalChart();
        chart.margin({top: 30, right: 40, bottom: 50, left: 50});
 chart.xAxis.ticks(function() {
return data[0].map(chart.x()).filter(function(d,i) {
return i % Math.ceil(data[0].values.length / (1 / 100)) === 0;
})
});
         chart.yAxis
         .axisLabel("Population")
        .tickFormat(function(d) { return d3.format(',.0f')(Math.abs(d))}); 
 
        chart.showValues(false);           //Show bar value next to each bar.
        chart.tooltips(true);             //Show tooltips on hover.
      chart.multibar.stacked(true); // default to stacked
    chart.showControls(false); // don't show controls


 
             
    d3.select('#chart svg').datum([{"key":"Maldivian males","color":"#0068a5","values":[{"x":"98","y":-24},{"x":"97","y":-5},{"x":"96","y":-9},{"x":"95","y":-9},{"x":"94","y":-14},{"x":"93","y":-20},{"x":"92","y":-19},{"x":"91","y":-34},{"x":"90","y":-53},{"x":"89","y":-44},{"x":"88","y":-71},{"x":"87","y":-85},{"x":"86","y":-95},{"x":"85","y":-144},{"x":"84","y":-179},{"x":"83","y":-193},{"x":"82","y":-219},{"x":"81","y":-235},{"x":"80","y":-326},{"x":"79","y":-344},{"x":"78","y":-355},{"x":"77","y":-362},{"x":"76","y":-434},{"x":"75","y":-468},{"x":"74","y":-447},{"x":"73","y":-530},{"x":"72","y":-515},{"x":"71","y":-460},{"x":"70","y":-510},{"x":"69","y":-448},{"x":"68","y":-470},{"x":"67","y":-490},{"x":"66","y":-481},{"x":"65","y":-539},{"x":"64","y":-661},{"x":"63","y":-576},{"x":"62","y":-628},{"x":"61","y":-664},{"x":"60","y":-768},{"x":"59","y":-956},{"x":"58","y":-1084},{"x":"57","y":-1188},{"x":"56","y":-1277},{"x":"55","y":-1481},{"x":"54","y":-1481},{"x":"53","y":-1597},{"x":"52","y":-1511},{"x":"51","y":-1464},{"x":"50","y":-1511},{"x":"49","y":-1819},{"x":"48","y":-1549},{"x":"47","y":-1618},{"x":"46","y":-1793},{"x":"45","y":-1934},{"x":"44","y":-1867},{"x":"43","y":-1893},{"x":"42","y":-2092},{"x":"41","y":-1797},{"x":"40","y":-2064},{"x":"39","y":-2112},{"x":"38","y":-2337},{"x":"37","y":-2247},{"x":"36","y":-2010},{"x":"35","y":-2514},{"x":"34","y":-2795},{"x":"33","y":-2805},{"x":"32","y":-3180},{"x":"31","y":-2890},{"x":"30","y":-3555},{"x":"29","y":-3897},{"x":"28","y":-3829},{"x":"27","y":-3827},{"x":"26","y":-3673},{"x":"25","y":-3791},{"x":"24","y":-3950},{"x":"23","y":-3918},{"x":"22","y":-3649},{"x":"21","y":-3669},{"x":"20","y":-3457},{"x":"19","y":-3275},{"x":"18","y":-3407},{"x":"17","y":-3255},{"x":"16","y":-3002},{"x":"15","y":-2690},{"x":"14","y":-2904},{"x":"13","y":-2787},{"x":"12","y":-2604},{"x":"11","y":-2533},{"x":"10","y":-2606},{"x":"9","y":-2760},{"x":"8","y":-3006},{"x":"7","y":-3250},{"x":"6","y":-3550},{"x":"5","y":-3642},{"x":"4","y":-3699},{"x":"3","y":-3905},{"x":"2","y":-3858},{"x":"1","y":-3618},{"x":"0","y":-3602}]},{"key":"Foreign males","color":"#61c1d6","values":[{"x":"98","y":0},{"x":"97","y":0},{"x":"96","y":-1},{"x":"95","y":0},{"x":"94","y":-1},{"x":"93","y":-1},{"x":"92","y":-1},{"x":"91","y":-2},{"x":"90","y":-1},{"x":"89","y":-1},{"x":"88","y":0},{"x":"87","y":0},{"x":"86","y":0},{"x":"85","y":-3},{"x":"84","y":-2},{"x":"83","y":-1},{"x":"82","y":0},{"x":"81","y":-1},{"x":"80","y":-5},{"x":"79","y":0},{"x":"78","y":-3},{"x":"77","y":-1},{"x":"76","y":-3},{"x":"75","y":-2},{"x":"74","y":-4},{"x":"73","y":-2},{"x":"72","y":-10},{"x":"71","y":-5},{"x":"70","y":-10},{"x":"69","y":-10},{"x":"68","y":-12},{"x":"67","y":-12},{"x":"66","y":-16},{"x":"65","y":-15},{"x":"64","y":-16},{"x":"63","y":-22},{"x":"62","y":-38},{"x":"61","y":-31},{"x":"60","y":-71},{"x":"59","y":-58},{"x":"58","y":-81},{"x":"57","y":-92},{"x":"56","y":-104},{"x":"55","y":-146},{"x":"54","y":-162},{"x":"53","y":-168},{"x":"52","y":-243},{"x":"51","y":-192},{"x":"50","y":-466},{"x":"49","y":-346},{"x":"48","y":-436},{"x":"47","y":-410},{"x":"46","y":-467},{"x":"45","y":-937},{"x":"44","y":-667},{"x":"43","y":-703},{"x":"42","y":-1043},{"x":"41","y":-651},{"x":"40","y":-1486},{"x":"39","y":-928},{"x":"38","y":-1302},{"x":"37","y":-1210},{"x":"36","y":-1407},{"x":"35","y":-2457},{"x":"34","y":-1827},{"x":"33","y":-1683},{"x":"32","y":-2679},{"x":"31","y":-1890},{"x":"30","y":-3322},{"x":"29","y":-2474},{"x":"28","y":-3621},{"x":"27","y":-3150},{"x":"26","y":-3621},{"x":"25","y":-3414},{"x":"24","y":-2839},{"x":"23","y":-2030},{"x":"22","y":-2494},{"x":"21","y":-1182},{"x":"20","y":-1459},{"x":"19","y":-487},{"x":"18","y":-424},{"x":"17","y":-74},{"x":"16","y":-35},{"x":"15","y":-21},{"x":"14","y":-16},{"x":"13","y":-20},{"x":"12","y":-22},{"x":"11","y":-13},{"x":"10","y":-32},{"x":"9","y":-29},{"x":"8","y":-27},{"x":"7","y":-31},{"x":"6","y":-49},{"x":"5","y":-45},{"x":"4","y":-49},{"x":"3","y":-68},{"x":"2","y":-61},{"x":"1","y":-72},{"x":"0","y":-62}]},{"key":"Maldivian females","color":"#ec008b","values":[{"x":"98","y":12},{"x":"97","y":6},{"x":"96","y":6},{"x":"95","y":12},{"x":"94","y":6},{"x":"93","y":17},{"x":"92","y":11},{"x":"91","y":19},{"x":"90","y":31},{"x":"89","y":31},{"x":"88","y":39},{"x":"87","y":56},{"x":"86","y":68},{"x":"85","y":88},{"x":"84","y":112},{"x":"83","y":102},{"x":"82","y":159},{"x":"81","y":173},{"x":"80","y":245},{"x":"79","y":259},{"x":"78","y":326},{"x":"77","y":362},{"x":"76","y":387},{"x":"75","y":412},{"x":"74","y":445},{"x":"73","y":424},{"x":"72","y":488},{"x":"71","y":502},{"x":"70","y":498},{"x":"69","y":438},{"x":"68","y":467},{"x":"67","y":476},{"x":"66","y":498},{"x":"65","y":531},{"x":"64","y":552},{"x":"63","y":545},{"x":"62","y":595},{"x":"61","y":555},{"x":"60","y":649},{"x":"59","y":817},{"x":"58","y":1054},{"x":"57","y":1159},{"x":"56","y":1183},{"x":"55","y":1411},{"x":"54","y":1364},{"x":"53","y":1484},{"x":"52","y":1594},{"x":"51","y":1423},{"x":"50","y":1455},{"x":"49","y":1739},{"x":"48","y":1650},{"x":"47","y":1667},{"x":"46","y":1731},{"x":"45","y":1871},{"x":"44","y":1896},{"x":"43","y":2004},{"x":"42","y":2170},{"x":"41","y":1844},{"x":"40","y":2009},{"x":"39","y":2093},{"x":"38","y":2342},{"x":"37","y":2314},{"x":"36","y":2134},{"x":"35","y":2458},{"x":"34","y":2786},{"x":"33","y":2900},{"x":"32","y":3406},{"x":"31","y":3066},{"x":"30","y":3409},{"x":"29","y":4003},{"x":"28","y":3956},{"x":"27","y":3809},{"x":"26","y":3685},{"x":"25","y":3874},{"x":"24","y":3864},{"x":"23","y":3701},{"x":"22","y":3506},{"x":"21","y":3393},{"x":"20","y":3333},{"x":"19","y":3236},{"x":"18","y":3241},{"x":"17","y":3140},{"x":"16","y":2814},{"x":"15","y":2728},{"x":"14","y":2664},{"x":"13","y":2633},{"x":"12","y":2443},{"x":"11","y":2360},{"x":"10","y":2563},{"x":"9","y":2605},{"x":"8","y":2874},{"x":"7","y":3083},{"x":"6","y":3313},{"x":"5","y":3586},{"x":"4","y":3542},{"x":"3","y":3395},{"x":"2","y":3468},{"x":"1","y":3290},{"x":"0","y":3335}]},{"key":"Foreign females","color":"#f286b6","values":[{"x":"98","y":0},{"x":"97","y":0},{"x":"96","y":0},{"x":"95","y":0},{"x":"94","y":0},{"x":"93","y":0},{"x":"92","y":1},{"x":"91","y":0},{"x":"90","y":0},{"x":"89","y":0},{"x":"88","y":0},{"x":"87","y":0},{"x":"86","y":1},{"x":"85","y":1},{"x":"84","y":0},{"x":"83","y":0},{"x":"82","y":0},{"x":"81","y":0},{"x":"80","y":0},{"x":"79","y":0},{"x":"78","y":0},{"x":"77","y":0},{"x":"76","y":0},{"x":"75","y":0},{"x":"74","y":1},{"x":"73","y":0},{"x":"72","y":3},{"x":"71","y":0},{"x":"70","y":2},{"x":"69","y":5},{"x":"68","y":1},{"x":"67","y":5},{"x":"66","y":2},{"x":"65","y":7},{"x":"64","y":8},{"x":"63","y":7},{"x":"62","y":15},{"x":"61","y":10},{"x":"60","y":15},{"x":"59","y":11},{"x":"58","y":26},{"x":"57","y":31},{"x":"56","y":22},{"x":"55","y":36},{"x":"54","y":41},{"x":"53","y":36},{"x":"52","y":44},{"x":"51","y":46},{"x":"50","y":56},{"x":"49","y":54},{"x":"48","y":79},{"x":"47","y":77},{"x":"46","y":89},{"x":"45","y":114},{"x":"44","y":85},{"x":"43","y":98},{"x":"42","y":145},{"x":"41","y":127},{"x":"40","y":174},{"x":"39","y":158},{"x":"38","y":219},{"x":"37","y":210},{"x":"36","y":238},{"x":"35","y":287},{"x":"34","y":277},{"x":"33","y":305},{"x":"32","y":371},{"x":"31","y":286},{"x":"30","y":430},{"x":"29","y":404},{"x":"28","y":435},{"x":"27","y":427},{"x":"26","y":463},{"x":"25","y":353},{"x":"24","y":262},{"x":"23","y":209},{"x":"22","y":162},{"x":"21","y":114},{"x":"20","y":97},{"x":"19","y":69},{"x":"18","y":27},{"x":"17","y":10},{"x":"16","y":7},{"x":"15","y":16},{"x":"14","y":10},{"x":"13","y":12},{"x":"12","y":13},{"x":"11","y":21},{"x":"10","y":19},{"x":"9","y":20},{"x":"8","y":26},{"x":"7","y":31},{"x":"6","y":36},{"x":"5","y":36},{"x":"4","y":59},{"x":"3","y":55},{"x":"2","y":75},{"x":"1","y":72},{"x":"0","y":54}]}])
      .transition().duration(500).call(chart);

    nv.utils.windowResize(chart.update);
    return chart;
});