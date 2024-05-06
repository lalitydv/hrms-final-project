import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent {

// Define properties for the rich text editor
tools: string[] = [
  'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
  'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
  'SubScript', 'SuperScript', '|',
  'LowerCase', 'UpperCase', '|',
  'Formats', 'Alignments', '|',
  'OrderedList', 'UnorderedList', '|',
  'Indent', 'Outdent', '|',
  'CreateLink', 'CreateTable', 'Image', '|',
  'ClearFormat', 'Print', 'SourceCode', '|',
  'FullScreen'
];

fileManagerSettings: object = {
  // Define file manager settings if needed
};

quickToolbarSettings: object = {
  // Define quick toolbar settings if needed
};

// Define event handlers for rich text editor actions
handleFullScreen(event: any) {
  // Implement full screen functionality
}

actionCompleteHandler(event: any) {
  // Handle action completion event
}


  
progress: number = 0; // Initial progress value

}

