import { Component , OnInit} from '@angular/core';

@Component({
    selector: 'app-tabela',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TabelaComponent implements OnInit{
    name = 'Tabela';

    tableData = Array<any>();

    ngOnInit(): void {
        for (let i = 0; i < 100000; i++) {
            this.tableData.push({
              nome: 'Name' + i.toString(),
              id: i
            });
        }
    }

    trackByFn(index:number, item: any) {
        return index; // or item.id
      }
}