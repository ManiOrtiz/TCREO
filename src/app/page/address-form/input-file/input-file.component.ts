import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FileRecord } from "src/app/model/fileModel";


@Component({
  selector: "app-input-file",
  templateUrl: "./input-file.component.html",
  styleUrls: ["./input-file.component.scss"],
})
export class InputFileComponent implements OnInit {
  @Input() inputDesign: any;
  @Output() uploadFile = new EventEmitter<any>();

  titleFile: string;
  fileUploaded: boolean;
  files = [];
  file = null;
  fileRecord = null;
  urlFile = null;
  constructor() {}

  ngOnInit() {}
  public onFileInputChange(filesSelected: any, tipoDocumento: string) {
    this.titleFile = "";
    this.fileUploaded = false;
    this.files = [];
    this.file = null;
    this.fileRecord = null;
    this.urlFile = null;

    const fileRecovered = filesSelected.target.files as File;
    this.file = fileRecovered[0];

    if (this.file != null) {
      const fileName = fileRecovered[0].name;
      this.titleFile = fileName;
      const fileRecord: FileRecord = {
        name: fileName,
        size: fileRecovered[0].size,
        type: fileRecovered[0].type,
        isUploading: true,
        isDeleting: false,
      };
      this.fileRecord = fileRecord;
      this.files.push(fileRecord);
      if (
        fileRecord.type == "image/gif" ||
        fileRecord.type == "image/jpg" ||
        fileRecord.type == "image/jpeg" ||
        fileRecord.type == "image/png" ||
        fileRecord.type == "image/bmp" ||
        fileRecord.type == "application/pdf"
      ) {
        this.onUploadFile(tipoDocumento);
      } else {
        alert(
          "El tipo de archivo ingresado es incorrecto, por favor selecciona un archivo en formato PDF, JPG, JPEG, GIF, PNG o BMP"
        );
      }
    }
  }
  public onUploadFile(tipoDocumento: string) {
    const params = {
      data: {
        fileName: this.fileRecord.name,
        fileType: this.fileRecord.type,
        fileSize: this.fileRecord.size,
      },
      tipoDocumentoIdentificador: tipoDocumento,
    };
    this.uploadFile.emit(params)
  }
}
