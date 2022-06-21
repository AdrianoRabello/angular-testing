import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {


  form: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {

    let observable = of([1, 2, 3]);

    this.form = this._fb.group({
      name: this._fb.control('', [Validators.required]),
      email: this._fb.control('', [Validators.required])
    })

    this.form.valueChanges.pipe(
      filter(data => this.form.valid),
      map(data => data))
      .subscribe(data => {
        console.log("data valid ", data)
      })

  }

  transform(value: string) {
    console.log(value.toUpperCase())

  }



  submitForm() {

  }

}
