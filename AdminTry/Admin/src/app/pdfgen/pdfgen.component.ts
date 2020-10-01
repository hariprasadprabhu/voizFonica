import { Component, OnInit } from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Observable } from 'rxjs';
import {Mailinfo} from '../mailinfo';
import { RegistrationService } from '../registration.service';
@Component({
  selector: 'app-pdfgen',
  templateUrl: './pdfgen.component.html',
  styleUrls: ['./pdfgen.component.css']
})
export class PdfgenComponent implements OnInit {

  mail=new Mailinfo();
  res:Observable<any>
  pack;
  date;
  amount;
  total;
  subtotal;
  today= new Date();
  lastdate;
  name;
  mob;
  email;
  constructor(private _service:RegistrationService) {
    this.mob=localStorage.getItem('mob');
    this._service.getBillPostPaidCust(this.mob).subscribe(
      data=>{
        for(let i=0;i<2;i++)
        {
          if(i==0)
          {
            this.name=data[i].fname;
            this.email=data[i].email;
            this.mail.setTo(data[i].email);
            this.mail.setFrom("VoizFonica")
            this.mail.setSubject("Monthly Bill");
            this.mail.setName(data[i].fname);
          }
          if(i==1)
          {
            this.pack=data[i].data_used;
            this.amount=data[i].amount;
            this.lastdate=data[i].bdate;
            this.subtotal=200+this.amount;
            this.total=this.subtotal+200;
          }
        }
      }
    )
    
   }

  ngOnInit(): void {
  }

  
  generatePDF() {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('bill.pdf');
    });

    
  }
  sendMail()
  {
    this._service.sendmailabc(this.mail).subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    )
  }
}