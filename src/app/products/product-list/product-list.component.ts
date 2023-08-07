import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
      description: 'This is product 1 description',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRghZOEggL_ed-DvdEysVWX4kprbAl9kB-6GV_cI6Q4tnOd3C3GZqwIc8ZUU7iHw2uQ1QM&usqp=CAU'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 15.99,
      description: 'This is product 2 description',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU91zJrjPT14vUbdGXGTnZp5xzXXpkmx57yF_Y1tXYIkzqkWrIgcFw94bZIqKIGDUcI9k&usqp=CAU'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 15.99,
      description: 'This is product 3 description',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUeHDPADKSVNB-3CMC2JIszPCDleG4EdF39bLbm9VcoLsS-omWwhw8ytnQSUwXUf_0sJc&usqp=CAU'
    },
    {
      id: 4,
      name: 'Product 4',
      price: 15.99,
      description: 'This is product 4 description',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvFq-UL4ZmuR88p4xCydfFCqduVOerv7K_7NhmSCzk6IqzIQJgNSg4xfX3ytP1-obq0CM&usqp=CAU'
    },
    {
      id: 5,
      name: 'Product 5',
      price: 15.99,
      description: 'This is product 5 description',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VExdykfmy4M2e45kYG1GKj2ET_nynF0h7sRJrYRT0qTjETBJAjZcPwBZd_hwhcuoPxU&usqp=CAU'
    },
  ]
}
