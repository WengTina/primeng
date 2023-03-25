import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';


interface City {
  name: string;
  code: string;
}
interface Job {
  profession: string;
  code: string;
}


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent {
  selectedValues: string[] = [];
  ingredient: string[] = [];
  value: string[] = [];
  value1: string[] = [];
  value2: string[] = [];
  value3: string[] = [];
  cities: City[];
  selectedCity!: City;

  job: Job[];
  selectedJob!: Job;

  //ingredient: string[] = [];


  constructor() {
    this.cities = [
      { name: '台灣', code: 'TA' },
      { name: '紐約', code: 'NY' },
      { name: '倫敦', code: 'LDN' },
      { name: '日本', code: 'JA' },
      { name: '巴黎', code: 'PRS' }
    ];

    this.job = [
      { profession: '學生', code: 'ST' },
      { profession: '老師', code: 'TE' },
      { profession: '軍人', code: 'HO' },
      { profession: '警察', code: 'PO' },
      { profession: '退休', code: 'RE' },
      { profession: '其他', code: 'OT' }
    ];

    value: Date;

  }

}
