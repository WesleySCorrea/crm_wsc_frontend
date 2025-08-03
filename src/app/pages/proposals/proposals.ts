import { Component } from '@angular/core';
import { SearchBar } from '../../component/search-bar/search-bar';
import { Filters } from '../../models/filters.model';
import { ProposeTable } from "../../component/propose-table/propose-table";

@Component({
  selector: 'app-proposals',
  standalone: true,
  imports: [SearchBar, ProposeTable],
  templateUrl: './proposals.html',
  styleUrl: './proposals.scss'
})
export class Proposals {

  public propostas = [
    { id: '001', empresa: 'Empresa A', status: 'aprovada', data: '2025-07-01' },
    { id: '002', empresa: 'Empresa B', status: 'analise', data: '2025-07-15' },
    { id: '003', empresa: 'Empresa C', status: 'rejeitada', data: '2025-07-20' },
    { id: '004', empresa: 'Empresa A', status: 'analise', data: '2025-07-21' },
  ];

  onSearch(filters: Filters) {
    console.log('Filtros recebidos:', filters);
    // Filtrar propostas aqui conforme os filtros recebidos
  }
}
