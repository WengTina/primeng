import { Component } from '@angular/core';
import { ApiService } from '../api/api.service';
import { PuchaseService } from '../api/puchase.service';
import { LazyLoadEvent } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
@Component({
  selector: 'app-puchase',
  templateUrl: './puchase.component.html',
  styleUrls: ['./puchase.component.scss']
})
export class PuchaseComponent {
  addData: boolean = false;
  form: FormGroup;

  constructor(private HttpApi: PuchaseService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      //必填
      applicantname: ['', [Validators.required]],
      requisitions_code: [''],
      company: ['', [Validators.required]],
      department: ['', [Validators.required]],
      product: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }
  apiData!: PuchaseService[];

  ngOnInit(): void {
    this.getAllPuchaseRequest();

  }

  // 懶加載
  // loadPostsLazy(event: LazyLoadEvent) {
  //   const page = (event.first! / event.rows!) + 1;
  //   this.HttpApi.getAllPuchaseRequest(page).subscribe(request => {
  //     this.apiData = request;
  //     console.log(this.apiData);
  //   });
  // }

  getAllPuchaseRequest(): void {
    this.HttpApi.getAllPuchaseRequest(1)
      .subscribe((body) => {
        this.apiData = body.body.requisitions;
        console.log(this.apiData);

      })
  }

  post(): void {
    // 使用雙向繫結將值帶入body
    let body = {
      // 另title(要post的欄位) = 表單控制元件'title'的值
      applicantname: this.form.controls['applicantname'].value,
      company: this.form.controls['company'].value,
      department: this.form.controls['department'].value,
      quantity: Number(this.form.controls['quantity'].value),
      product: this.form.controls['product'].value,
      price: Number(this.form.controls['price'].value),
    }
    console.log(body)
    // 請求post api
    this.HttpApi.postPuchaseRequest(body)
      .subscribe(request => {
        console.log(request)
        if (request.code == 200) {
          this.addData = false;
        }
      })
  }

  edit(id: any): void {
    this.router.navigate(['puchase/edit/' + id]);
  }

}