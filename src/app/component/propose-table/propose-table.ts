import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';

interface Proposta {
  proposta: string;
  descricao: string;
  empresa: string;
  status: string;
  data: string;
}

@Component({
  selector: 'app-propose-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, FormsModule],
  templateUrl: './propose-table.html',
  styleUrl: './propose-table.scss',
})
export class ProposeTable implements AfterViewInit {
  constructor(private router: Router) { }

  displayedColumns: string[] = ['proposta', 'descricao', 'empresa', 'status', 'data'];

  dataSource = new MatTableDataSource<Proposta>([
    { proposta: '001', descricao: 'Teste 1', empresa: 'Empresa A', status: 'aprovada', data: '2025-07-01' },
    { proposta: '002', descricao: 'Teste 2', empresa: 'Empresa B', status: 'analise', data: '2025-07-15' },
    { proposta: '003', descricao: 'Teste 3', empresa: 'Empresa C', status: 'rejeitada', data: '2025-07-20' },
    { proposta: '004', descricao: 'Teste 4', empresa: 'Empresa A', status: 'analise', data: '2025-07-21' },
    { proposta: '005', descricao: 'Teste 5', empresa: 'Empresa D', status: 'aprovada', data: '2025-07-22' },
    { proposta: '006', descricao: 'Teste 6', empresa: 'Empresa B', status: 'analise', data: '2025-07-23' },
    { proposta: '007', descricao: 'Teste 7', empresa: 'Empresa C', status: 'rejeitada', data: '2025-07-24' },
    { proposta: '008', descricao: 'Teste 8', empresa: 'Empresa D', status: 'aprovada', data: '2025-07-25' },
    { proposta: '009', descricao: 'Teste 9', empresa: 'Empresa A', status: 'analise', data: '2025-07-26' },
    { proposta: '010', descricao: 'Teste 10', empresa: 'Empresa B', status: 'aprovada', data: '2025-07-27' },
    { proposta: '011', descricao: 'Teste 11', empresa: 'Empresa C', status: 'rejeitada', data: '2025-07-28' },
    { proposta: '012', descricao: 'Teste 12', empresa: 'Empresa D', status: 'analise', data: '2025-07-29' },
    { proposta: '013', descricao: 'Teste 13', empresa: 'Empresa A', status: 'aprovada', data: '2025-07-30' },
    { proposta: '014', descricao: 'Teste 14', empresa: 'Empresa B', status: 'analise', data: '2025-07-31' },
    { proposta: '015', descricao: 'Teste 15', empresa: 'Empresa C', status: 'rejeitada', data: '2025-08-01' },
    { proposta: '016', descricao: 'Teste 16', empresa: 'Empresa D', status: 'aprovada', data: '2025-08-02' },
    { proposta: '017', descricao: 'Teste 17', empresa: 'Empresa A', status: 'analise', data: '2025-08-03' },
    { proposta: '018', descricao: 'Teste 18', empresa: 'Empresa B', status: 'rejeitada', data: '2025-08-04' },
    { proposta: '019', descricao: 'Teste 19', empresa: 'Empresa C', status: 'aprovada', data: '2025-08-05' },
    { proposta: '020', descricao: 'Teste 20', empresa: 'Empresa D', status: 'analise', data: '2025-08-06' },
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  goToProposta(propostaNumero: number) {
    this.router.navigate(['/proposta', propostaNumero]);
  }
}
