      var years = [];
      // displays the data
      var DataDisplay = React.createClass({
        getDefaultProps: function() {
          return {
            label: '',
            prepender: '',
            value: '',
            appender: ''
          };
        },

        render: function(){
          return (
            <div className="display big-type"><span className="grey">{this.props.label} </span> {this.props.prepender}{this.props.value}{this.props.appender} </div>
          );
        }
      });

      // calculated some key values
      var YPEGCalculator = React.createClass({

        getInitialState: function() {
          return {value: 'Enter last 8 quarters of adjusted earnings:', ypeg: "eqweqwe", growthRate: "0%", currentPriceInput:"", priceOverEarnings: "" };
        },

        addCurrentPrice: function() {
          var currentPriceInput = event.target.value;
          this.setState({
            currentPriceInput: currentPriceInput
          });
        },

        handleChange: function() {
          var value = event.target.value;
          this.setState({
            value: value
          });
        },

        submitIt: function() {
          var earningsString = this.state.value;
          var earningsArray = earningsString.split(",");

          var earningsArrayClone = earningsArray.slice();

          var i = 0;
          var year;
          // divide array into arrays of years
          while( earningsArrayClone.length ) {

            if ( i % 4 === 0 ) {
              var year = [];
            }
            var quarterEarnings = earningsArrayClone.shift();

            if ( year.length < 4 ) year.push( parseFloat( quarterEarnings ) );

            if ( year.length === 4 ) years.push( year );

            i++;
          }

          if ( earningsArray.length === 8 ) {
            var yearNowEPS = 0;
            var yearPrevEPS = 0;


            /*
            var i = 0;
            while( i < earningsArray.length ) {
              var earnings = earningsArray[ i ];
              i++;
            }
            */

            var i = 0;
            while( i < 8 ) {
              if ( i < 4 ) {
                yearNowEPS += parseFloat( earningsArray[ i ] );
              }
              if ( i >= 4 ) {
                yearPrevEPS += parseFloat( earningsArray[ i ] );
              }
              i++;  
            }
            var growthRate = ( yearNowEPS - yearPrevEPS ) / yearPrevEPS;

            this.setState({
              growthRate: growthRate,
              yearNowEPS: yearNowEPS,
              yearPrevEPS: yearPrevEPS
            });
          }
        },

        render: function() {
          
          var value = this.state.value;
          var growthRate = this.state.growthRate;

          var currentPriceInput = this.state.currentPriceInput;
          var currentPriceFloat = parseFloat( currentPriceInput );

          var yearNowEPS = Math.round( this.state.yearNowEPS * 100 ) / 100 ;
          var yearPrevEPS = Math.round(  this.state.yearPrevEPS * 100) / 100;
          // round two places
          growthRate = Math.round( growthRate * 100 ) / 100;

          // make percent
          growthRate = growthRate * 100;

          var priceOverEarnings = currentPriceFloat/yearNowEPS;
          var priceOverEarnings = Math.round( priceOverEarnings * 100 ) / 100 ;

          var ypeg = priceOverEarnings/growthRate;
          var ypeg = Math.round( ypeg * 1000) / 1000 ;

          d3.select("body").append("span").text("Hello, world!");

          return(
            <div className="container">
              <main>
                <DataDisplay label="YPEG: " value={ypeg} />
                <DataDisplay label="YOY EPS Growth: " value={growthRate} appender="%" />
                <DataDisplay label="EPS 4Q: " value={yearNowEPS} prepender="$" />
                <DataDisplay label="EPS PREV 4Q: " value={yearPrevEPS} prepender="$" />
                <DataDisplay label="Price: " value={currentPriceFloat} prepender="$" />
                <DataDisplay label="P/E: " value={priceOverEarnings} prepender="$" />

                <input className="form-control" value={value} type="text" onChange={this.handleChange} />
                <input className="form-control small" value={currentPriceInput} type="text" onChange={this.addCurrentPrice} />
                <input className="button" type="submit" value="Submit" onClick={this.submitIt} />

                <div>BOFI: 1.35,1.26,1.20,1.09,1.00,0.91,0.85,0.78 <b>93.97</b></div>
                <div>GILD: 2.94,2.43,1.84,2.36,1.48,0.55,0.52,0.50 <b>114.08</b></div>
                <div>SWKS: 1.15,1.26,1.12,0.83,0.62,0.67,0.64,0.54 <b>109.45</b></div>
                <div>SWKS: 0.62,0.67,0.64,0.54,0.32,0.55,0.53,0.45              </div>
                <div>SKX: 1.10,0.43,1.00,0.68,0.61,0.28,0.53,0.14 <b>106.02</b></div>
                <div>CRTO: 0.33,0.22,0.04,0.08,0.08,0.06,-0.13,0.2 <b>46.70</b></div>
                <div>INBK: 0.46,0.32,0.28,0.22,0.13,0.19,0.25,0.59 <b>24.02</b></div>
                <div>WAB: 0.99,0.95,0.93,0.91,0.83,0.76,0.76,0.77 <b>99.86</b></div>
                <div>AMBA: 0.71,0.68,0.68,0.37,0.25,0.26,0.37,0.26 <b>92.21</b></div>
                <div>ANET: 0.50,0.53,0.40,0.23,0.10,0.22,0.19,0.16 <b>73.99</b></div>
                <svg id="visualisation" width="1000" height="500"></svg>
              </main>
            </div>
          );
        }
      });

      React.render(<YPEGCalculator />, document.getElementById('content'));
InitChart();

function InitChart() {

  var lineData = [{
    'x': 1,
    'y': 5
  }, {
    'x': 20,
    'y': 20
  }, {
    'x': 40,
    'y': 10
  }, {
    'x': 60,
    'y': 40
  }, {
    'x': 80,
    'y': 5
  }, {
    'x': 100,
    'y': 60
  }];

  var vis = d3.select("#visualisation"),
    WIDTH = 1000,
    HEIGHT = 500,
    MARGINS = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 50
    },
    xRange = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([d3.min(lineData, function (d) {
        return d.x;
      }),
      d3.max(lineData, function (d) {
        return d.x;
      })
    ]),

    yRange = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([d3.min(lineData, function (d) {
        return d.y;
      }),
      d3.max(lineData, function (d) {
        return d.y;
      })
    ]),

    xAxis = d3.svg.axis()
      .scale(xRange)
      .tickSize(5)
      .tickSubdivide(true),

    yAxis = d3.svg.axis()
      .scale(yRange)
      .tickSize(5)
      .orient("left")
      .tickSubdivide(true);


  vis.append("svg:g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
    .call(xAxis);

  vis.append("svg:g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + (MARGINS.left) + ",0)")
    .call(yAxis);

  var lineFunc = d3.svg.line()
  .x(function (d) {
    return xRange(d.x);
  })
  .y(function (d) {
    return yRange(d.y);
  })
  .interpolate('linear');

vis.append("svg:path")
  .attr("d", lineFunc(lineData))
  .attr("stroke", "blue")
  .attr("stroke-width", 2)
  .attr("fill", "none");

}