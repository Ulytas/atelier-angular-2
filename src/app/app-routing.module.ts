import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ProduitGuard } from './produit.guard';

const routes: Routes = [
  {path: "produits", component : ProduitsComponent},
 // {path: "add-produit", component : AddProduitComponent},
  {path: "updateProduit/:id", component: UpdateProduitComponent},
{ path: "", redirectTo: "produits", pathMatch: "full" },
{path: "recherche-par-nom", component : RechercheParNomComponent},
{path: 'login', component: LoginComponent},
{path: 'forbidden', component: ForbiddenComponent},
{path : "add-produit", component : AddProduitComponent, canActivate:[ProduitGuard]},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
