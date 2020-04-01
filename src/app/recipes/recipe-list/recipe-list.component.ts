import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =  [
    new Recipe('A Test Recipe', 'A Test Recipe Simple', 'https://pxhere.com/en/photo/1575227?__cf_chl_jschl_tk__=646e867de3043feea120358d2e417b8a68ee47f5-1585741746-0-AXz2xFbrhGw7YAr-EIQTksDF2PSxFCBoeYgIZVqZ0arTRQEsmiqNMJ42E4GHOFrCs8V_yomxJa5o1eKqVdixYHzCouriPM2fgnZRD7NHdWT_5edPGXqBjBVGVi2SBX1Z12tYZvhrQSaORcRPl0FPATaHDMHvx1lAbgLNahFeaBN65-5784mD0RuT1kvM1btuutqiGpUentlYZd-Hu2mtiNE0c_ncRVHEJ7S6D8pEBHOrRgcm5dspJG_ztzK3GuOD_FbgaG7nmskSzLtGDrhrYPBIMfWqgi-OOMzH6D2QQvu5')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
