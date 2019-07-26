import React, { Component } from 'react';
import './App.scss';
import otter from './otter.png';

class App extends Component {
  getDays = (m,d) => {
    let thisYear = new Date().getFullYear(),
        end = new Date(m + '/' + d + '/' + thisYear.toString() +' 00:01 AM'),
        now = new Date(),
        _day = 86400000;
    if((end - now) < 0){
        thisYear++;
        end = new Date(m + '/' + d + '/' + thisYear.toString() +' 00:01 AM');
    }
    return Math.floor((end - now) / _day + 1);

  }
  createTable = () => {
    var date_object = [
      {title: 'Baba\'s Birthday', month: '03', day: '23'},
      {title: 'Independence Day', month: '07', day: '04'},
      {title: 'Annie\'s Birthday', month: '07', day: '31'},
      {title: 'Halloween', month: '10', day: '31'},
      {title: 'Christmas', month: '12', day: '25'}
    ],
    table = [];
    var last_number = 0,
        marked_day = false,
        today_date = new Date();
    date_object.forEach((element, index) => {
      let days = this.getDays(element.month, element.day);
      if(days === 365) {
        table.push( <h2 key={index}>Today is { element.title } </h2>);
      } else {
        if (last_number > days && days !== 365 && !marked_day) {
          marked_day = true;
          table.push(<div className='today_container'key='today_container'><span> &laquo; Today: { today_date.toDateString() } &raquo;</span></div>);
        } else {
          last_number = days;
        }
        table.push( <div key={index}>{days} days until { element.title } </div>);
      }
        
    });

    return table
  }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img className='otter' src={otter} alt="Logo" />
          <h1>Annie Countdowns</h1>
          {this.createTable()}
        </header>
      </div>
    );
  }
}

export default App;
