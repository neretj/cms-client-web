import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  form: any = {};
  updated = false;
  failUpdated = false;
  msjErr = '';
  msjOK = '';

  failInit = false;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.userService.findById(id).subscribe(data => {
      this.form.name = data.name;
      this.form.surname = data.surname;
    },
      (err: any) => {
        this.failInit = true;
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.form.id = id;
    this.userService.edit(this.form, id).subscribe(data => {
      this.updated = true;
      this.failUpdated = false;
      this.msjOK = data.mensaje;
    },
      (err: any) => {
        this.updated = false;
        this.failUpdated = true;
        this.msjErr = err.error.message;
      }
    );
  }

  goBack(): void {
    window.history.back();
  }

}
