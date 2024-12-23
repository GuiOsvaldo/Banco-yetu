import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit { 

  selectedFile: File | null = null;
  fileName: string | null = null;
  pdfPreview: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  triggerFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
    if (file && file.type === 'application/pdf') {
      this.readAndPreview(file);
    } else {
        this.mostrarMensagemErro();
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file && file.type === 'application/pdf') {
      this.readAndPreview(file);
    } else {
       this.mostrarMensagemErro();
    }
  }

  readAndPreview(file: File) {
    this.selectedFile = file;
    this.fileName = file.name;
    const reader = new FileReader();
    reader.onload = () => {
      const url = reader.result as string;
      this.pdfPreview = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    if (this.selectedFile) {
      // Lógica para enviar o arquivo
      console.log('Enviando arquivo:', this.selectedFile);
    } else {
      console.log('Nenhum arquivo selecionado');
    }
  }

  ngOnInit(): void {}

  mostrarMensagemErro(){
    Swal.fire({
        title: "Aviso",
        icon: 'warning',
        text: 'Por favor, faça upload da cópia do BI.'
    })
}

}
