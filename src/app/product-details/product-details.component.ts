import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(JSON.stringify(products));

    this.route.paramMap.subscribe(params => {
      console.log(params.get("productId"));
      this.product = products[+params.get("productId")];
    });
  }
}
