var chart = c3.generate({
  padding: {
    top: 0,
    right: 70,
    left: 70,
    bottom: 30,
  },
  data: {
    x: 'x',
    columns: [
      ['x', '1911', '1921', '1931', '1946', '1953', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1974', '1977', '1985', '1990', '1995', '2000', '2006', '2014'],
      ['data1', 72237, 70413, 79281, 82068, 77273, 83075, 87582, 89290, 92247, 92793, 92744, 94527, 93960, 97743, 100883, 103801, 106969, 110770, 114469, 118818, 122673, 128697, 142832, 180088, 213215, 244814, 270101, 298968, 344023],
      ['data2', 39244, 38174, 43235, 44308, 41656, 44614, 46888, 47505, 49640, 49906, 49454, 50274, 50276, 51964, 53938, 55346, 56983, 58897, 60975, 63188, 64924, 68301, 75224, 93482, 109336, 124622, 137200, 151459, 174666],
      ['data3', 32993, 32239, 36046, 37760, 35617, 38461, 40694, 41785, 42607, 42887, 43290, 44253, 43684, 45779, 46945, 48455, 49986, 51873, 53494, 55630, 57749, 60396, 67608, 86606, 103879, 120192, 132901, 147509, 169357],
      ['data4', 0, -0.0027, 0.0118, 0.0023, -0.0086, 0.0181, 0.0528, 0.0193, 0.0326, 0.0059, -0.0005, 0.019, -0.006, 0.0395, 0.0316, 0.0285, 0.0301, 0.0349, 0.0328, 0.0373, 0.0319, 0.024, 0.0298, 0.032, 0.0343, 0.0273, 0.0196, 0.0169, 0.0165]
    ],
    names: {
      data1: 'Total Maldivian population',
      data2: 'males',
      data3: 'females',
      data4: 'Average annual intercensal growth rate (right axis)'
    },
    types: {
      data1: 'line',
      data2: 'area',
      data3: 'area',
      data4: 'line'
    },
    colors: {
      data1: '#77216F',
      data2: '#13A1CB',
      data3: '#EB77A6',
      data4: '#F5A352'
    },
    groups: [
      ['data2', 'data3']
    ],
    axes: {
      data1: 'y',
      data2: 'y',
      data3: 'y',
      data4: 'y2'
    }
  },
  axis: {
    x: {
      show: true,
      label: {
        text: 'Census years',

      },
      tick: {
        // this also works for non timeseries data
        values: ['1911', '1921', '1931', '1946', '1957', '1967', '1977', '1985', '1990', '1995', '2000', '2006', '2014'],
        rotate: 45,

      },
    },
    y: {
      show: true,
      label: {
        text: 'Total Maldivian population',
        position: 'inner-middle',
        padding: {
          left: 100,
          top: 100,
          bottom: 100,
        },
      },
      tick: {
        format: d3.format(","),
      }
    },
    y2: {
      show: true,
      label: {
        text: 'Average annual growth rate (intercensal)',

        position: 'outer-middle',
      },
      tick: {

        format: d3.format("1.0%")
      },
    },
  },
  tooltip: {
    format: {
      title: function(d) {
        return d;
      },
      value: function(value, ratio, id) {
          var format = id === 'data4' ? d3.format('1.1%') : d3.format(',');
          return format(value);
        }
        //            value: d3.format(',') // apply this format to both y and y2
    }
  },
  point: {
    show: false
  }
  //  set class=" c3-shape c3-shape c3-line c3-line-data2" & class=" c3-shape c3-shape c3-line c3-line-data3"  opacity:0 //
});