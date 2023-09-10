import { Component } from '@angular/core';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent {
  resource: { name: string, imageUrl: string, duration: string, selections:string ,selection: string, Stime: string, Ftime: string, person:string, more:string } = {
    name: 'haytham',
    imageUrl: '',
    duration: '1',
    selection: '', // I'm Setting the default selection to static time
    Stime: '',
    selections:'',
    person:'',
    more:'',
    Ftime: '',
  };

  counter: number = 50;
  counters: number = 2;

  incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    if (this.counter > 0) {
      this.counter--;
    }
  }
  incrementCounters() {
    this.counters++;
  }

  decrementCounters() {
    if (this.counters > 0) {
      this.counters--;
    }
  }


  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.resource.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    } else {
      // If no file is selected, clear the image URL
      this.resource.imageUrl = ''; // Set to an empty string
    }
  }
  
  
  
  deleteImage() {
    // Clear the image URL 
    this.resource.imageUrl = '';
  }

}
