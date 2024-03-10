import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing',
  templateUrl: './sing.component.html',
  styleUrls: ['./sing.component.css']
})
export class SingComponent {
  singForm:FormGroup ;

  // used form service => FormBuilder (New )
constructor(private fb: FormBuilder) {
   this.singForm = fb.group ({
    name : ['' , [Validators.required, Validators.minLength(3) ]],
    email : ['',[Validators.required, Validators.email]],
    phone : fb.array([this.fb.control('')]), // used this when used add most phone number
    address :fb.group({
      city : [''],
      postaCode : [''],
      street : [''],
    }),
    password : [''],
    conifrmPassword : ['']
  })


  // old 
  // this.singForm = new FormGroup ({
  //   name : new FormControl('' , [Validators.required , Validators.pattern('A-Z,a-z,{3,}')]),
  //   email : new FormControl(''),
  //   phone : new FormControl(''),
  //   address : new FormGroup({
  //     city : new FormControl(''),
  //     postaCode : new FormControl(''),
  //     street : new FormControl(''),
  //   }),
  //   password : new FormControl(''),
  //   conifrmPassword : new FormControl('')
  // })
}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
}
// لو عاوز ال User يغير البيانات بتاعته مش كل شويه اعمل Form جديده 
updateUserForm(){
  this.singForm.patchValue({
    // update data by api 
    name : 'Ahmed Gamal' ,
    email : "ahmed.gmail.com" ,
    phone : "010592658969",
    address : {
        city : 'Zag' ,
        postaCode : "282" ,
        street : 'mdkwdk' 
    },
  })
}

  get name() { return this.singForm.get('name'); }
  get email() { return this.singForm.get('email'); }
   get phones() {  return this.singForm.get('phone') as FormArray }
   // add phones 
 addNewPhone(event:any){
    this.phones.push(this.fb.control(''));
  event.target.classList.add('d-none')
  }

onSubmit(): void {
    console.log(this.singForm.value);
    this.singForm.reset();
  }

 
}

