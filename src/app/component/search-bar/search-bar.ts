import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Filters } from '../../models/filters.model';
import { CommonModule } from '@angular/common';
import { Observable, startWith, map } from 'rxjs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss'
})
export class SearchBar implements OnInit {
  empresas: string[] = [];
  filters: Filters = {
    titulo: '',
    empresa: '',
    numeroProposta: '',
    data: null,
  };

  @Output() search = new EventEmitter<Filters>();

  ngOnInit() {
    this.empresas = ['Empresa A', 'TESTE B', 'CASA C', 'Empresa D'];
  }

  onSearch() {
    console.log('Filtros:', this.filters);
    this.search.emit({ ...this.filters });
  }
}
