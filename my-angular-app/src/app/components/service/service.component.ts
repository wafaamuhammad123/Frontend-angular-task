import { Component } from '@angular/core';

// interface for the date pair
interface DatePair {
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent {
  days = [
    { name: 'Sunday', enabled: false, datePairs: [] as DatePair[] },
    { name: 'Monday', enabled: false, datePairs: [] as DatePair[] },
    { name: 'Tuesday', enabled: false, datePairs: [] as DatePair[] },
    { name: 'Wednesday', enabled: false, datePairs: [] as DatePair[] },
  ];

  endTimes: string[] = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 pm'
 
  ];

  toggleDay(day: any) {
    day.enabled = !day.enabled;
    if (day.enabled) {
   
      day.datePairs.push({
        startDate: '9:00 AM',
        endDate: '9:00 AM',
      });
    } else {
      // Disabling the day and clear its datePairs
      day.datePairs = [];
    }
  }

  incrementCounter(day: any) {//adding new data
    day.datePairs.push({
      startDate: '9:00 AM',
      endDate: '9:00 AM',
    });
  }

  decrementCounter(day: any) {
    if (day.datePairs.length > 0) {
      // Remove the last date pair 
      day.datePairs.pop();
    }
  }
}
