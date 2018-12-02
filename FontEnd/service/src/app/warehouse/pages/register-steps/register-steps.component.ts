import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-steps',
  templateUrl: './register-steps.component.html',
  styleUrls: ['./register-steps.component.css']
})
export class RegisterStepsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  step2: any = {
    showNext: true,
    showPrev: true
  };

  step3: any = {
    showSecret: false
  };

  data: any = {
    email: 'muk@gmail.com'
  };

  isCompleted: boolean = false;

  onStep1Next(event) {
    console.log('Step1 - Next');
  }

  onStep2Next(event) {
    console.log('Step2 - Next');
  }

  onStep3Next(event) {
    console.log('Step3 - Next');
  }

  onStep4Next(event) {
    console.log('Step3 - Next');
  }

  onStep5Next(event) {
    console.log('Step3 - Next');
  }

  onComplete(event) {
    this.isCompleted = true;
  }

  onStepChanged(step) {
    console.log('Changed to ' + step.title);
  }

}
