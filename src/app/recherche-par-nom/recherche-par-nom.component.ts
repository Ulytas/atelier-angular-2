import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { SearchFilterPipe } from '../search-filter.pipe';
@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit {
  term: string = "";
  produits: Produit[]=[]; // Define produits array here

  constructor(private produitService: ProduitService) { } // Inject ProduitService

  ngOnInit(): void {
    this.produits = this.produitService.produits; // Assign produits from ProduitService
  }
}

@NgModule({
  declarations: [
    RechercheParNomComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule
    // other modules
  ]
})
export class RechercheParNomModule { }
