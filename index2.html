
<html>
  <head>
    <title>YPEG CALCULATOR</title>
    <link href="bootstrap.min.css" rel="stylesheet" type="text/css">
    <style type="text/css">

      body {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: arial, verdana, sans-serif;
      }

      ul {
        margin: 0;
      }

      li {
        padding: 10px 0;
      }

      .form-control {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: inline-block;
        height: 45px;
        padding: 6px 14px;
        font-size: 22px;
        line-height: 1.42857143;
        color: #555;
        width: 49.5%;
        background-color: #fff;
        background-image: none;
        display: inline-block;
        vertical-align: top;
        margin-bottom: 8px;
        border-radius: 4px;
        margin-right: 12px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
        -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
        -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
        transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
      }

      .button {
        margin-bottom: 0;
        height: 44px;
        font-size: 16px;
        color: #fff;
        background-color: #339933;
        font-weight: 400;
        line-height: 1.42857143;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        padding: 0 15px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-image: none;
        background: -webkit-linear-gradient(#338833, #33aa33);
        background: -o-linear-gradient(#338833, #33aa33);
        background: -moz-linear-gradient(#338833, #33aa33);
        background: linear-gradient(#338833, #33aa33);
        border: 1px solid transparent;
        border-radius: 4px;
      }

      .small {
        width: 200px;
      }


      .big-type {
        font-size: 84px;
      }

      .display {
        height: 124px;
        white-space:nowrap;
        overflow:hidden;
      }

      .grey {
        color: #ddd
    </style>



    <script src="react.js"></script>
    <script src="https://fb.me/JSXTransformer-0.13.3.js"></script>
    <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.2/marked.min.js"></script>
  </head>
  <body class="container">
    <div id="content"></div>
    <script type="text/jsx">

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

          if ( earningsArray.length === 8 ) {
            var yearNowEPS = 0;
            var yearPrevEPS = 0;
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
          var ypeg = this.state.ypeg;
          var growthRate = this.state.growthRate;


          var currentPriceInput = this.state.currentPriceInput;

          var currentPriceFloat = parseFloat( currentPriceInput );

          //var currentPrice = "$" + this.state.currentPrice;

          var yearNowEPS = Math.round( this.state.yearNowEPS * 100 ) / 100 ;
          var yearPrevEPS = Math.round(  this.state.yearPrevEPS * 100) / 100;
          // round two places
          growthRate = Math.round( growthRate * 10000 ) / 10000;

          // make percent
          growthRate = growthRate * 100;

          var priceOverEarnings = currentPriceFloat/yearNowEPS;
          var priceOverEarnings = Math.round( priceOverEarnings * 100 ) / 100 ;

          var ypeg = priceOverEarnings/growthRate;





          return(
            <div className="container">
              <main>
                <div className="display big-type">{ypeg}</div>
                <div className="display big-type">{growthRate}</div>
                <div className="display big-type"><span className="grey">EPS 4Q: </span>{yearNowEPS}</div>
                <div className="display big-type"><span className="grey">EPS PREV 4Q: </span>{yearPrevEPS}</div>
                <div className="display big-type"><span className="grey">Price: </span>${currentPriceFloat}</div>
                <div className="display big-type"><span className="grey">P/E: </span>${priceOverEarnings}</div>
                <div className="display big-type">{value}</div>
                <input className="form-control" value={value} type="text" onChange={this.handleChange} />
                <input className="form-control small" value={currentPriceInput} type="text" onChange={this.addCurrentPrice} />
                <input className="button" type="submit" value="Submit" onClick={this.submitIt} />
                <div>BOFI: 1.35,1.26,1.20,1.09,1.00,0.91,0.85,0.78 <b>93.97</b></div>
                <div>GILD: 2.94,2.43,1.84,2.36,1.48,0.55,0.52,0.50 <b>114.08</b></div>
                <div>SWKS: 1.15,1.26,1.12,0.83,0.62,0.67,0.64,0.54 <b>109.45</b></div>
                <div>SWKS: 0.62,0.67,0.64,0.54,0.32,0.55,0.53,0.45              </div>
                <div>SKX: 1.10,0.43,1.00,0.68,0.61,0.28,0.53,0.14 <b>106.02</b></div>
                <div>CRTO: 0.33,0.22,0.04,0.08,0.08,0.06,-0.13,0.2 <b>46.70</b></div>
              </main>
            </div>
          );
        }
      });
      /*
     var animalsListData = [
        { id: 1, animal: 'tiger', name: 'Vee' },
        { id: 2, animal: 'lion', name: 'Simba' },
        { id: 3, animal: 'dog', name: 'Buck' },
        { id: 4, animal: 'sealion', name: 'Seel' }
      ];
      
      var AnimalsList = React.createClass({
        getInitialState: function() {
          return {
            animals: []
          };
        },

        componentDidMount: function() {
          this._fetchRemoteData();
        },

        render: function() {
          if (!this.state.animals.length) {
            return (
              <div>
                No animals!
                <br />
                <a
                  href="#fetch"
                  className="btn btn-primary"
                  onClick={this.handleFetchClick}
                >
                  Fetch
                </a>
              </div>
            );
          }

          return (
            <div>
              <ul>
                {
                  this.state.animals.map(function(animal, index) {
                    return (
                      <li key={index}>
                        {animal.name} the {animal.animal}!
                      </li>
                    );
                  })
                }
              </ul>

              <a
                href="#reset"
                className="btn btn-danger"
                onClick={this.handleResetClick}
              >
                Reset
              </a>
            </div>
          );
        },

        handleResetClick: function(e) {
          e.preventDefault();
          this.setState({
            animals: []
          });
        },

        handleFetchClick: function(e) {
          e.preventDefault();
          this._fetchRemoteData();
        },

        _fetchRemoteData: function() {
          setTimeout(function() {
            this.setState({
              animals: animalsListData
            });
          }.bind(this), 2000);
        }
      });

      */

      React.render(<YPEGCalculator />, document.getElementById('content'));

    </script>
  </body>
</html>