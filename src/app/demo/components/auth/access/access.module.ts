import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { AccessRoutingModule } from './access-routing.module';
import { AccessComponent } from './access.component';

@NgModule({
    imports: [
        CommonModule,
        AccessRoutingModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule,
        FileUploadModule
    ],
    declarations: [AccessComponent]
})
export class AccessModule { }
