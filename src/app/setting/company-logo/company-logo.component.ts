import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-company-logo',
  templateUrl: './company-logo.component.html',
  styleUrls: ['./company-logo.component.css']
})
export class CompanyLogoComponent {


// Declare the categoryType property
categoryType: string = 'new-category';
imageSrc: string | null = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbn1OqWn7mgl9whhU8H6uYS36tX64-yKzUXg&usqp=CAU'; // Initial image URL

@ViewChild('fileInput') fileInput: any;

readURL(event: Event): void {
  const inputElement = event.target as HTMLInputElement;

  if (inputElement && inputElement.files && inputElement.files[0]) {
    const file = inputElement.files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
      if (typeof reader.result === 'string') {
        this.imageSrc = reader.result;
      }
    };

    reader.readAsDataURL(file);
  }
}
}
