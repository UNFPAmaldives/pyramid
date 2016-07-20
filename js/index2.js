var chart2 = c3.generate({
   padding: {
        top: 0,
        right: 50,
        bottom: 20,
   },
 
   data: {
        x: 'x',
//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
        columns: [
            ['x', '1952.5', '1957.5', '1962.5', '1967.5', '1972.5', '1977.5', '1982.5', '1987.5', '1992.5', '1997.5', '2002.5', '2007.5', '2012.5'],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
            ['Crude birth rates', 43.4, 52.9, 54.7, 52.4, 48.2, 44.8, 48.4, 45.2, 35.9, 26.0, 21.1, 20.9, 21.7],
            ['Crude death rates', 27.7, 28.6, 26.8, 23.3, 19.1, 15.1, 12.4, 10.1, 7.5, 5.5, 4.2, 3.6, 3.8]
        ]
    },
    axis: {
        x: {
            label: { 
                 //text: 'Years',
                 position: 'outer-center',
                 padding: {
                  top: 0,
                  },
            },
          tick: {
                values: [1950, 1955, 1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015],
                fit: true,
            rotate: 45,
            padding: {
              bottom:0,
                       },
            },
        },
        y: {
            label: { 
                 text: 'Live births and deaths per 1,000 people',
                 position: 'outer-middle'
            },
        },        
    },
    point: {
        show: true
    },
  title: {
  text: 'Maldives Crude Birth and Death Rates per Thousand People, from 1950-1955 to 2010-2015'
},
  
    
});
// Add new y grid lines
chart.ygrids.add([
  {value: 10, text: ''},
  {value: 20, text: ''},
  {value: 30, text: ''},
  {value: 40, text: ''},
  {value: 50, text: ''},
]);
ygrids: {
      lines: {
        front: false
      }
    };
// Update axis' min
chart.axis.min({
  x: 1950,
});
chart.axis.max({
  x: 2015,
});