import { Component } from '@angular/core';
import { ApiService } from "../../api/api.service";
import { PuchaseService } from "../../api/puchase.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-puchase',
  templateUrl: './edit-puchase.component.html',
  styleUrls: ['./edit-puchase.component.scss']
})
export class EditPuchaseComponent {
  form: FormGroup;
  constructor(
    //private HttpApi: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private HttpApi: PuchaseService,
  ) {
    this.form = this.fb.group({
      //必填
      requisitions_id: [''],
      applicantname: ['', [Validators.required]],
      company: [''],
      department: [''],
      product: [''],
      quality: [''],
      price: [''],
    });

  }
  id: any;
  ngOnInit() {
    // 擷取特定路徑的路由參數
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getOne(this.id);
  }


  getOne(id: any): void {
    this.HttpApi.getOnePuchaseRequest(id)
      .subscribe((body) => {
        console.log(body);
        this.form.patchValue(body.body.requisitions);
      })
  }
  patch(): void {
    let id = this.form.controls['id'].value
    let body = {
      applicantname: this.form.controls['applicantname'].value,
      company: this.form.controls['company'].value,
      department: this.form.controls['department'].value,
      quality: this.form.controls['quality'].value,
      product: this.form.controls['product'].value,
      price: this.form.controls['price'].value,
    }
    this.HttpApi.patchPuchaseRequest(id, body)
      .subscribe((request) => {
        console.log(request)
      })
  }
  delete(): void {
    let id = this.form.controls['id'].value
    this.HttpApi.deletePuchaseRequest(id).subscribe((request) => {
      console.log(request)
    })
  }
}
