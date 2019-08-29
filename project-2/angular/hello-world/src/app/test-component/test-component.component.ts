import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test-component',
  template: `
  <h2>
  welcome {{name}}
  </h2>
  <p class={{txtclass}}>hii I should be in red color</p>
 first: <input id="myid" type="text">
  <br>
  with interpolation:<input id={{setid}} type="text">
  <br>
  with id attribute:<input [id]="newid" type="text">
  <br>
  with disabled :<input disabled="false" [id]="newid" type="text">
  <!--this is comment now--- in example just above  disabled is false and it is boolean thats why  durectly setting it to false or giving it in interpolation {{false}} wont work thats why use property binding -->
  <br>
  with disabled property binding :<input [disabled]="false" [id]="newid" type="text">
  <br>
  with variable name assigned :<input [disabled]="vlname" [id]="newid" type="text">


  <!-- class binding test video 8 -->

  <h2 class="text-success">hii success=green</h2>
  <h2 [class]="classBindVar">hii success=green this is assigned by var </h2>
  <hr>
  <h4 [ngClass]="applyObject">check and apply multiple objects with ngClass like here red and italic classes are true by variable</h4>
  <hr>
  <br><br>
  
<!--document.write dosent work here -->

<h3>hello {{newName}} you are coming from app component via @input</h3>
<h3> {{"hello "+newName +" copied the way of writing "}}</h3>

<button (click)="fireEvent()">Send emit button</button>

  `,
  styles: [`
  .text-success { color:green;
  }

  .text-danger { color:red;
  }

  .text-special { font-style: italic;
  }
  `]
})
export class TestComponentComponent implements OnInit {

  public name=" Ritesh Tiwari"
  public txtclass="clsname";
  public vlname= false;
  public setid="newid";
  public varTrue=true;

  public classBindVar="text-success";
  public applyObject={"text-danger":this.varTrue,"text-special":this.varTrue};


  @Input ('parentData') public newName;
  @Output() public childEvent=new EventEmitter();

  fireEvent(){
    this.childEvent.emit("hey my parent sending hii msg");
  }

  constructor() { }

  ngOnInit() {
  }

}
