import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})


export class ProduitsComponent implements OnInit {
  produits : Produit[];
  ngOnInit(): void {}
//  constructor(private produitService: ProduitService ) {
  //  this.produits = produitService.listeProduits();
    //}

    constructor(private produitService : ProduitService,
      public authService: AuthService) {
        this.produits = produitService.listeProduits();
       }
    supprimerProduit(p: Produit)
{
//console.log(p);
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.produitService.supprimerProduit(p);
}
}



